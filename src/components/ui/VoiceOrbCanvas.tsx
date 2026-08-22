"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface VoiceOrbCanvasProps {
  isPlaying?: boolean;
}

export default function VoiceOrbCanvas({ isPlaying = false }: VoiceOrbCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isPlayingRef = useRef(isPlaying);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const orbGroup = new THREE.Group();
    scene.add(orbGroup);

    // 1. Central Glowing Energy Sphere
    const sphereRadius = 2.0;
    const orbGeo = new THREE.IcosahedronGeometry(sphereRadius, 5);
    const wireMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#38BDF8"),
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const wireMesh = new THREE.Mesh(orbGeo, wireMat);
    orbGroup.add(wireMesh);

    // Particle nodes on sphere vertices
    const pos = orbGeo.attributes.position;
    const particleCount = pos.count;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colCyan = new THREE.Color("#38BDF8");
    const colBlue = new THREE.Color("#3B82F6");

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = pos.getX(i);
      particlePositions[i * 3 + 1] = pos.getY(i);
      particlePositions[i * 3 + 2] = pos.getZ(i);

      const color = i % 3 === 0 ? colCyan : colBlue;
      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    pGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });

    const pMesh = new THREE.Points(pGeo, pMat);
    orbGroup.add(pMesh);

    // 2. Sound Wave Rings
    const ringCount = 4;
    const rings: THREE.Mesh[] = [];

    for (let i = 0; i < ringCount; i++) {
      const ringGeo = new THREE.RingGeometry(2.3 + i * 0.4, 2.34 + i * 0.4, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color("#38BDF8"),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.4 - i * 0.08,
        blending: THREE.AdditiveBlending,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI * 0.35;
      ring.rotation.y = (i * Math.PI) / ringCount;
      orbGroup.add(ring);
      rings.push(ring);
    }

    // 3. Frequency Waveform Arc Lines
    const waveCount = 32;
    const wavePositions: number[] = [];
    for (let i = 0; i < waveCount; i++) {
      const angle = (i / waveCount) * Math.PI * 2;
      const x1 = Math.cos(angle) * 2.1;
      const y1 = Math.sin(angle) * 2.1;
      const x2 = Math.cos(angle) * 2.6;
      const y2 = Math.sin(angle) * 2.6;
      wavePositions.push(x1, y1, 0, x2, y2, 0);
    }
    const waveGeo = new THREE.BufferGeometry();
    waveGeo.setAttribute("position", new THREE.Float32BufferAttribute(wavePositions, 3));
    const waveMat = new THREE.LineBasicMaterial({
      color: new THREE.Color("#60A5FA"),
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const waveLines = new THREE.LineSegments(waveGeo, waveMat);
    orbGroup.add(waveLines);

    // Scroll tracker
    let scrollYPos = 0;
    const onScroll = () => {
      scrollYPos = window.scrollY || window.pageYOffset;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 360;
      const h = container.clientHeight || 360;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      const speed = isPlayingRef.current ? 2.5 : 1.0;
      const scrollRotation = scrollYPos * 0.002;

      orbGroup.rotation.y = time * 0.2 * speed + scrollRotation;
      orbGroup.rotation.x = Math.sin(time * 0.3) * 0.2 + scrollRotation * 0.5;

      const pulse = 1 + Math.sin(time * 3 * speed) * (isPlayingRef.current ? 0.12 : 0.04);
      orbGroup.scale.set(pulse, pulse, pulse);

      rings.forEach((ring, idx) => {
        ring.rotation.z = time * (idx % 2 === 0 ? 0.3 : -0.25) * speed + scrollRotation * (idx + 1) * 0.4;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("scroll", onScroll);
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
        height: "360px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
}
