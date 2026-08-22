"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AIWaveform from "@/components/ui/AIWaveform";
import {
  Brain,
  Zap,
  CheckCircle2,
  FileSpreadsheet,
  Activity,
  Layers,
  Sparkles,
  Database,
} from "lucide-react";

export default function AudioTunnelScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const tunnelContainerRef = useRef<HTMLDivElement>(null);
  const waveformLayer1Ref = useRef<HTMLDivElement>(null);
  const waveformLayer2Ref = useRef<HTMLDivElement>(null);
  const waveformLayer3Ref = useRef<HTMLDivElement>(null);
  const crmCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const tunnel = tunnelContainerRef.current;
    const l1 = waveformLayer1Ref.current;
    const l2 = waveformLayer2Ref.current;
    const l3 = waveformLayer3Ref.current;
    const crm = crmCardRef.current;

    if (!section || !tunnel || !l1 || !l2 || !l3 || !crm) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: tunnel,
          start: "top top",
          end: "+=180%",
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
        },
      });

      // Virtual Camera Traveling Through 3D Audio Landscape & Assembling Structured CRM Data
      tl.fromTo(
        l1,
        { translateZ: -100, opacity: 0.4, scale: 0.9 },
        { translateZ: 150, opacity: 1, scale: 1.2, ease: "power1.out" },
        0
      )
        .fromTo(
          l2,
          { translateZ: -250, opacity: 0.2, scale: 0.8 },
          { translateZ: 50, opacity: 1, scale: 1.05, ease: "power1.out" },
          0.2
        )
        .fromTo(
          l3,
          { translateZ: -400, opacity: 0.1, scale: 0.7 },
          { translateZ: 0, opacity: 1, scale: 1, ease: "power1.out" },
          0.4
        )
        .fromTo(
          crm,
          { y: 80, opacity: 0, scale: 0.85, rotateX: 12 },
          { y: 0, opacity: 1, scale: 1, rotateX: 0, ease: "power2.out" },
          0.5
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="audio-intelligence"
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <div
        ref={tunnelContainerRef}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "80px 0",
          perspective: "1400px",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="container" style={{ textAlign: "center", zIndex: 10, marginBottom: "32px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
            <span className="badge-eyebrow">
              <span className="badge-dot" />
              CINEMATIC AUDIO TUNNEL & INTELLIGENCE
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(34px, 4.2vw, 52px)",
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
            }}
          >
            Voice Becomes Real-time Structured Intelligence
          </h2>

          <p style={{ fontSize: "16px", color: "#64748B", maxWidth: "600px", margin: "8px auto 0 auto" }}>
            As the AI speaks and listens, raw speech audio is decomposed through our neural pipeline into structured CRM data.
          </p>
        </div>

        {/* 3D Audio Tunnel Landscape */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "860px",
            height: "360px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
          className="gpu-layer"
        >
          {/* Layer 1: Foreground Audio Plane */}
          <div
            ref={waveformLayer1Ref}
            style={{
              position: "absolute",
              padding: "16px 28px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(12px)",
              borderRadius: "20px",
              border: "1px solid rgba(37, 99, 235, 0.2)",
              boxShadow: "0 14px 35px -6px rgba(37, 99, 235, 0.15)",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
            className="gpu-layer"
          >
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#2563EB" }}>Layer 01 • Human Speech Input</span>
            <AIWaveform active={true} barCount={20} colorTheme="blue" height={24} />
          </div>

          {/* Layer 2: Midground NLP Entity Extraction Plane */}
          <div
            ref={waveformLayer2Ref}
            style={{
              position: "absolute",
              padding: "16px 28px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(12px)",
              borderRadius: "20px",
              border: "1px solid rgba(249, 115, 22, 0.25)",
              boxShadow: "0 14px 35px -6px rgba(249, 115, 22, 0.15)",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
            className="gpu-layer"
          >
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#EA580C" }}>Layer 02 • Entity & Intent Parsing</span>
            <AIWaveform active={true} barCount={20} colorTheme="orange" height={24} />
          </div>

          {/* Layer 3: Background Intelligence Nodes Plane */}
          <div
            ref={waveformLayer3Ref}
            style={{
              position: "absolute",
              padding: "16px 28px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(12px)",
              borderRadius: "20px",
              border: "1px solid rgba(16, 185, 129, 0.25)",
              boxShadow: "0 14px 35px -6px rgba(16, 185, 129, 0.15)",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
            className="gpu-layer"
          >
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#10B981" }}>Layer 03 • Real-time DB Sync</span>
            <AIWaveform active={true} barCount={20} colorTheme="mixed" height={24} />
          </div>
        </div>

        {/* Structured CRM Assembly Card */}
        <div
          ref={crmCardRef}
          style={{
            width: "100%",
            maxWidth: "760px",
            marginTop: "20px",
            padding: "24px 28px",
            borderRadius: "24px",
            background: "linear-gradient(175deg, #FFFFFF 0%, #F8FAFC 100%)",
            border: "1.5px solid rgba(37, 99, 235, 0.25)",
            boxShadow: "0 25px 60px -12px rgba(37, 99, 235, 0.12)",
          }}
          className="glass-panel gpu-layer"
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px", paddingBottom: "12px", borderBottom: "1px solid rgba(15, 23, 42, 0.06)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Database size={16} color="#2563EB" />
              <span style={{ fontSize: "13px", fontWeight: 800, color: "#0F172A", textTransform: "uppercase" }}>
                Auto-Assembled CRM Lead Intelligence
              </span>
            </div>

            <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "#16A34A", fontWeight: 700, backgroundColor: "#F0FDF4", padding: "2px 8px", borderRadius: "6px" }}>
              Live Synced ✓
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }} className="crm-assembly-grid">
            <div style={{ padding: "10px 14px", backgroundColor: "#FFFFFF", borderRadius: "12px", border: "1px solid rgba(15, 23, 42, 0.06)" }}>
              <div style={{ fontSize: "10px", color: "#64748B", fontWeight: 600 }}>CUSTOMER</div>
              <div style={{ fontSize: "13px", fontWeight: 800, color: "#0F172A" }}>Tanvir Ahmed</div>
            </div>

            <div style={{ padding: "10px 14px", backgroundColor: "#FFFFFF", borderRadius: "12px", border: "1px solid rgba(15, 23, 42, 0.06)" }}>
              <div style={{ fontSize: "10px", color: "#64748B", fontWeight: 600 }}>RESOLVED INTENT</div>
              <div style={{ fontSize: "13px", fontWeight: 800, color: "#2563EB" }}>COD Order #4829</div>
            </div>

            <div style={{ padding: "10px 14px", backgroundColor: "#FFFFFF", borderRadius: "12px", border: "1px solid rgba(15, 23, 42, 0.06)" }}>
              <div style={{ fontSize: "10px", color: "#64748B", fontWeight: 600 }}>SENTIMENT</div>
              <div style={{ fontSize: "13px", fontWeight: 800, color: "#16A34A" }}>99% Confident</div>
            </div>

            <div style={{ padding: "10px 14px", backgroundColor: "#FFFFFF", borderRadius: "12px", border: "1px solid rgba(15, 23, 42, 0.06)" }}>
              <div style={{ fontSize: "10px", color: "#64748B", fontWeight: 600 }}>DISPATCH ACTION</div>
              <div style={{ fontSize: "13px", fontWeight: 800, color: "#EA580C" }}>Steadfast Courier</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .crm-assembly-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
