"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 650;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1, 15);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Root 3D Group
    const mainGroup = new THREE.Group();
    mainGroup.position.set(0, -0.5, 0);
    scene.add(mainGroup);

    // 1. NEURAL SPHERE (Connected Light Nodes & Glowing Shell)
    const neuralSphereGroup = new THREE.Group();
    neuralSphereGroup.position.set(1.5, 1.2, -1.5);
    mainGroup.add(neuralSphereGroup);

    // Particle nodes for neural sphere
    const nodeCount = 750;
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeColors = new Float32Array(nodeCount * 3);
    const sphereRadius = 4.2;

    const colorCyan = new THREE.Color("#38BDF8");
    const colorBlue = new THREE.Color("#3B82F6");
    const colorGold = new THREE.Color("#F59E0B");

    const spherePoints: THREE.Vector3[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = sphereRadius * (0.85 + Math.random() * 0.3);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      nodePositions[i * 3] = x;
      nodePositions[i * 3 + 1] = y;
      nodePositions[i * 3 + 2] = z;

      spherePoints.push(new THREE.Vector3(x, y, z));

      const chosenColor = Math.random() > 0.82 ? colorGold : (Math.random() > 0.4 ? colorCyan : colorBlue);
      nodeColors[i * 3] = chosenColor.r;
      nodeColors[i * 3 + 1] = chosenColor.g;
      nodeColors[i * 3 + 2] = chosenColor.b;
    }

    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));
    nodeGeometry.setAttribute("color", new THREE.BufferAttribute(nodeColors, 3));

    // Glow dot texture
    const createDotTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d")!;
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(0.2, "rgba(56, 189, 248, 0.9)");
      grad.addColorStop(0.6, "rgba(59, 130, 246, 0.3)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const dotTexture = createDotTexture();

    const nodeMaterial = new THREE.PointsMaterial({
      size: 0.3,
      map: dotTexture,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const neuralPoints = new THREE.Points(nodeGeometry, nodeMaterial);
    neuralSphereGroup.add(neuralPoints);

    // Neural Interconnecting Lines
    const linePositions: number[] = [];
    const lineColors: number[] = [];
    const maxConnections = 3;

    for (let i = 0; i < nodeCount; i++) {
      let connections = 0;
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = spherePoints[i].distanceTo(spherePoints[j]);
        if (dist < 1.4 && connections < maxConnections) {
          linePositions.push(spherePoints[i].x, spherePoints[i].y, spherePoints[i].z);
          linePositions.push(spherePoints[j].x, spherePoints[j].y, spherePoints[j].z);

          const alpha = 1 - dist / 1.4;
          lineColors.push(colorCyan.r * alpha, colorCyan.g * alpha, colorCyan.b * alpha);
          lineColors.push(colorBlue.r * alpha, colorBlue.g * alpha, colorBlue.b * alpha);
          connections++;
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute("color", new THREE.Float32BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const neuralLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    neuralSphereGroup.add(neuralLines);

    // 2. CYBERNETIC AI HUMANOID PROFILE HEAD
    const headGroup = new THREE.Group();
    headGroup.position.set(0.6, 0.4, 1.2);
    mainGroup.add(headGroup);

    // Profile Cranium / Face Point Cloud & Contours
    const headPointsCount = 1600;
    const headPositions = new Float32Array(headPointsCount * 3);
    const headColorsArray = new Float32Array(headPointsCount * 3);

    for (let i = 0; i < headPointsCount; i++) {
      const angle = (i / headPointsCount) * Math.PI * 2;
      const heightStep = ((i % 70) / 70) * 4.4 - 2.2;

      let radiusX = 1.9 * Math.cos(heightStep * 0.45);
      let radiusZ = 2.2 * Math.cos(heightStep * 0.4);

      if (heightStep > 0.1 && heightStep < 0.8 && angle > -Math.PI * 0.3 && angle < Math.PI * 0.3) {
        radiusZ += 0.55 * Math.sin((heightStep - 0.1) * 4);
      } else if (heightStep < -0.3 && heightStep > -1.2 && angle > -Math.PI * 0.25 && angle < Math.PI * 0.25) {
        radiusZ += 0.35 * Math.cos((heightStep + 0.7) * 3);
      }

      const x = radiusX * Math.sin(angle) * (0.8 + Math.random() * 0.15);
      const y = heightStep + (Math.random() - 0.5) * 0.05;
      const z = radiusZ * Math.cos(angle) * (0.9 + Math.random() * 0.1);

      headPositions[i * 3] = x;
      headPositions[i * 3 + 1] = y;
      headPositions[i * 3 + 2] = z;

      const isEarSensor = Math.abs(x - 0.9) < 0.6 && Math.abs(y) < 0.6 && Math.abs(z + 0.4) < 0.7;
      const isOcular = Math.abs(x) < 0.5 && Math.abs(y - 0.4) < 0.4 && z > 1.2;

      if (isEarSensor || isOcular) {
        headColorsArray[i * 3] = 0.96;
        headColorsArray[i * 3 + 1] = 0.62;
        headColorsArray[i * 3 + 2] = 0.04;
      } else {
        const mix = (y + 2.2) / 4.4;
        headColorsArray[i * 3] = THREE.MathUtils.lerp(0.22, 0.23, mix);
        headColorsArray[i * 3 + 1] = THREE.MathUtils.lerp(0.74, 0.51, mix);
        headColorsArray[i * 3 + 2] = THREE.MathUtils.lerp(0.97, 0.96, mix);
      }
    }

    const headGeo = new THREE.BufferGeometry();
    headGeo.setAttribute("position", new THREE.BufferAttribute(headPositions, 3));
    headGeo.setAttribute("color", new THREE.BufferAttribute(headColorsArray, 3));

    const headPointsMesh = new THREE.Points(headGeo, nodeMaterial);
    headGroup.add(headPointsMesh);

    // Glowing Cyber Head Rings & Ocular Node
    const earNodeGroup = new THREE.Group();
    earNodeGroup.position.set(1.1, 0.1, -0.2);
    headGroup.add(earNodeGroup);

    const earTorusGeo = new THREE.TorusGeometry(0.75, 0.06, 16, 48);
    const earTorusMat = new THREE.MeshBasicMaterial({ color: new THREE.Color("#F59E0B") });
    const earTorus = new THREE.Mesh(earTorusGeo, earTorusMat);
    earTorus.rotation.y = Math.PI / 2;
    earNodeGroup.add(earTorus);

    const earTorusInnerGeo = new THREE.TorusGeometry(0.45, 0.04, 16, 36);
    const earTorusInnerMat = new THREE.MeshBasicMaterial({ color: new THREE.Color("#FBBF24") });
    const earTorusInner = new THREE.Mesh(earTorusInnerGeo, earTorusInnerMat);
    earTorusInner.rotation.y = Math.PI / 2;
    earNodeGroup.add(earTorusInner);

    const coreSphereGeo = new THREE.SphereGeometry(0.28, 24, 24);
    const coreSphereMat = new THREE.MeshBasicMaterial({ color: new THREE.Color("#FFA500") });
    const earCore = new THREE.Mesh(coreSphereGeo, coreSphereMat);
    earNodeGroup.add(earCore);

    // Circuit stream tubes
    for (let c = 0; c < 8; c++) {
      const arcPoints = [];
      const startAngle = (c / 8) * Math.PI * 2;
      for (let p = 0; p < 25; p++) {
        const t = p / 24;
        const rad = 0.8 + t * 3.5;
        const ang = startAngle + t * 1.2;
        arcPoints.push(
          new THREE.Vector3(
            Math.cos(ang) * rad + 0.5,
            Math.sin(ang) * rad * 0.7 + Math.sin(t * Math.PI) * 0.5,
            (Math.random() - 0.5) * 0.4 - t * 1.5
          )
        );
      }
      const curve = new THREE.CatmullRomCurve3(arcPoints);
      const tubeGeo = new THREE.TubeGeometry(curve, 32, 0.015, 6, false);
      const tubeMat = new THREE.MeshBasicMaterial({
        color: c % 2 === 0 ? new THREE.Color("#38BDF8") : new THREE.Color("#F59E0B"),
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });
      const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
      headGroup.add(tubeMesh);
    }

    // 3. HOLOGRAPHIC CYBER PEDESTAL / BASE RINGS
    const pedestalGroup = new THREE.Group();
    pedestalGroup.position.set(0.6, -3.2, 0);
    pedestalGroup.rotation.x = Math.PI * 0.42;
    mainGroup.add(pedestalGroup);

    const ringRadii = [3.5, 4.2, 4.8, 5.5];
    const pedestalRings: THREE.Mesh[] = [];

    ringRadii.forEach((radius, idx) => {
      const ringGeo = new THREE.RingGeometry(radius - 0.04, radius + 0.04, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: idx === 1 ? new THREE.Color("#38BDF8") : new THREE.Color("#3B82F6"),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7 - idx * 0.12,
        blending: THREE.AdditiveBlending,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      pedestalGroup.add(ring);
      pedestalRings.push(ring);
    });

    const tickCount = 48;
    const tickPositions: number[] = [];
    for (let i = 0; i < tickCount; i++) {
      const angle = (i / tickCount) * Math.PI * 2;
      const r1 = 4.8;
      const r2 = i % 4 === 0 ? 5.2 : 5.0;
      tickPositions.push(Math.cos(angle) * r1, Math.sin(angle) * r1, 0);
      tickPositions.push(Math.cos(angle) * r2, Math.sin(angle) * r2, 0);
    }
    const tickGeo = new THREE.BufferGeometry();
    tickGeo.setAttribute("position", new THREE.Float32BufferAttribute(tickPositions, 3));
    const tickMat = new THREE.LineBasicMaterial({
      color: new THREE.Color("#38BDF8"),
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const tickLines = new THREE.LineSegments(tickGeo, tickMat);
    pedestalGroup.add(tickLines);

    // 4. FLOATING SPACE DUST & LIGHT PARTICLES
    const dustCount = 450;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 24;
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));
    const dustMat = new THREE.PointsMaterial({
      size: 0.14,
      color: new THREE.Color("#38BDF8"),
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const dustMesh = new THREE.Points(dustGeo, dustMat);
    scene.add(dustMesh);

    // Track scroll progress & mouse coordinates
    let scrollProgress = 0;
    let targetScrollProgress = 0;
    let targetRotY = 0;
    let targetRotX = 0;
    let currentRotY = 0;
    let currentRotX = 0;

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const heroHeight = window.innerHeight * 1.2;
      targetScrollProgress = Math.min(1.5, Math.max(0, scrollY / heroHeight));
    };

    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRotY = normX * 0.35;
      targetRotX = normY * 0.2;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 600;
      const newH = container.clientHeight || 650;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth scroll interpolation
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.08;

      // Smooth mouse follow
      currentRotY += (targetRotY - currentRotY) * 0.05;
      currentRotX += (targetRotX - currentRotX) * 0.05;

      // Scroll-Driven 3D Head & Neural Sphere Transformation
      // 1. AI Head rotates dramatically with scroll
      mainGroup.rotation.y = currentRotY + Math.sin(elapsedTime * 0.3) * 0.08 + scrollProgress * Math.PI * 0.65;
      mainGroup.rotation.x = currentRotX + Math.cos(elapsedTime * 0.4) * 0.04 + scrollProgress * 0.25;

      // 2. Neural sphere expands with scroll
      const sphereScale = 1 + scrollProgress * 0.55;
      neuralSphereGroup.scale.set(sphereScale, sphereScale, sphereScale);
      neuralSphereGroup.rotation.y = elapsedTime * 0.08 + scrollProgress * 1.5;
      neuralSphereGroup.rotation.x = Math.sin(elapsedTime * 0.05) * 0.15 + scrollProgress * 0.4;

      // 3. Camera zooms subtly toward face & sphere as user scrolls
      camera.position.z = 15 - scrollProgress * 3.5;
      camera.position.y = 1 + scrollProgress * 0.8;

      // 4. Pedestal rings spin faster with scroll
      pedestalRings.forEach((ring, idx) => {
        ring.rotation.z = elapsedTime * (idx % 2 === 0 ? 0.1 : -0.12) + scrollProgress * (idx + 1) * 0.8;
      });
      tickLines.rotation.z = -elapsedTime * 0.05 - scrollProgress * 1.2;

      // 5. Particles move toward camera with scroll
      const positions = dustGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < dustCount; i++) {
        positions[i * 3 + 2] += 0.02 + scrollProgress * 0.12;
        if (positions[i * 3 + 2] > 8) {
          positions[i * 3 + 2] = -8;
        }
      }
      dustGeo.attributes.position.needsUpdate = true;
      dustMesh.rotation.y = elapsedTime * 0.015 + scrollProgress * 0.5;

      // Ear/Ocular node pulsing
      const pulseScale = 1 + Math.sin(elapsedTime * 3) * 0.06;
      earNodeGroup.scale.set(pulseScale, pulseScale, pulseScale);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
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
        height: "100%",
        minHeight: "520px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "auto",
      }}
    />
  );
}
