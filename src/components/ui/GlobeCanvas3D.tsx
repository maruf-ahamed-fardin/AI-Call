"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GlobeCanvas3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Globe Wireframe Sphere
    const radius = 2.2;
    const globeGeo = new THREE.SphereGeometry(radius, 28, 28);
    const globeMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#38BDF8"),
      wireframe: true,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    });
    const globeMesh = new THREE.Mesh(globeGeo, globeMat);
    globeGroup.add(globeMesh);

    // 2. Continents / Node Point Cloud on Globe Surface
    const dotCount = 900;
    const dotPositions = new Float32Array(dotCount * 3);
    const dotColors = new Float32Array(dotCount * 3);
    const cCyan = new THREE.Color("#38BDF8");
    const cBlue = new THREE.Color("#3B82F6");

    for (let i = 0; i < dotCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      dotPositions[i * 3] = x;
      dotPositions[i * 3 + 1] = y;
      dotPositions[i * 3 + 2] = z;

      const col = Math.random() > 0.4 ? cCyan : cBlue;
      dotColors[i * 3] = col.r;
      dotColors[i * 3 + 1] = col.g;
      dotColors[i * 3 + 2] = col.b;
    }

    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute("position", new THREE.BufferAttribute(dotPositions, 3));
    dotGeo.setAttribute("color", new THREE.BufferAttribute(dotColors, 3));

    const dotMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const dotPoints = new THREE.Points(dotGeo, dotMat);
    globeGroup.add(dotPoints);

    // 3. Hotspot Pointers / City Pins
    const cityCount = 14;
    const pinGroup = new THREE.Group();
    globeGroup.add(pinGroup);

    for (let i = 0; i < cityCount; i++) {
      const lat = (Math.random() - 0.5) * Math.PI * 0.7;
      const lon = Math.random() * Math.PI * 2;

      const x = radius * Math.cos(lat) * Math.cos(lon);
      const y = radius * Math.sin(lat);
      const z = radius * Math.cos(lat) * Math.sin(lon);

      const pinGeo = new THREE.SphereGeometry(0.06, 12, 12);
      const pinMat = new THREE.MeshBasicMaterial({ color: new THREE.Color("#F59E0B") });
      const pin = new THREE.Mesh(pinGeo, pinMat);
      pin.position.set(x, y, z);
      pinGroup.add(pin);
    }

    // 4. Orbiting Satellites / Data Stream Ring
    const orbitRadius = 3.0;
    const orbitRingGeo = new THREE.RingGeometry(orbitRadius - 0.02, orbitRadius + 0.02, 64);
    const orbitRingMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#38BDF8"),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const orbitRing = new THREE.Mesh(orbitRingGeo, orbitRingMat);
    orbitRing.rotation.x = Math.PI * 0.4;
    globeGroup.add(orbitRing);

    // Orbiting Satellite Node
    const satGeo = new THREE.SphereGeometry(0.1, 16, 16);
    const satMat = new THREE.MeshBasicMaterial({ color: new THREE.Color("#FFFFFF") });
    const satMesh = new THREE.Mesh(satGeo, satMat);
    globeGroup.add(satMesh);

    // Scroll tracker
    let scrollOffset = 0;
    const handleScroll = () => {
      scrollOffset = (window.scrollY || window.pageYOffset) * 0.0015;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 450;
      const h = container.clientHeight || 450;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      globeGroup.rotation.y = time * 0.15 + scrollOffset;
      globeGroup.rotation.x = 0.2 + Math.sin(time * 0.2) * 0.05 + scrollOffset * 0.2;

      // Orbit satellite around ring
      satMesh.position.x = Math.cos(time * 1.2 + scrollOffset * 2) * orbitRadius;
      satMesh.position.y = Math.sin(time * 1.2 + scrollOffset * 2) * orbitRadius * Math.sin(Math.PI * 0.4);
      satMesh.position.z = Math.sin(time * 1.2 + scrollOffset * 2) * orbitRadius * Math.cos(Math.PI * 0.4);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "420px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
}
