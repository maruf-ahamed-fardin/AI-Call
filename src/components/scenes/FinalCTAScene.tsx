"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles, Phone, ShieldCheck, CheckCircle2, Zap } from "lucide-react";
import AudioWaveformCanvas from "@/components/ui/AudioWaveformCanvas";

export default function FinalCTAScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const visual = visualRef.current;
    if (!section || !visual) return;

    const ctx = gsap.context(() => {
      // 3D cyber portal rising smoothly with GPU acceleration
      gsap.fromTo(
        visual,
        {
          y: 70,
          rotateX: 16,
          scale: 0.92,
          opacity: 0.7,
        },
        {
          y: 0,
          rotateX: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "bottom 85%",
            scrub: 0.6,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "150px 0 130px 0",
        backgroundColor: "#030712",
        overflow: "hidden",
      }}
    >
      {/* Background Cyber Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, rgba(139, 92, 246, 0.12) 40%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 5 }}>
        <div
          className="glass-panel-glow gpu-layer cta-inner-grid"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            backgroundColor: "rgba(15, 23, 42, 0.9)",
            borderRadius: "36px",
            border: "1.5px solid rgba(6, 182, 212, 0.35)",
            boxShadow: "0 35px 100px -20px rgba(0, 0, 0, 0.9), 0 0 50px -10px rgba(6, 182, 212, 0.25)",
            padding: "68px 52px",
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "52px",
            alignItems: "center",
          }}
        >
          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
            <div>
              <span className="badge-eyebrow">
                <span className="badge-dot" />
                START YOUR 14-DAY FREE PILOT TODAY
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(34px, 4.4vw, 56px)",
                fontWeight: 900,
                color: "#F8FAFC",
                lineHeight: 1.1,
                letterSpacing: "-0.035em",
              }}
            >
              Ready to automate your frontline conversations?
            </h2>

            <p style={{ fontSize: "17px", color: "#94A3B8", lineHeight: 1.65 }}>
              Give your business an AI agent that speaks, understands, and gets real work done across Voice, WhatsApp, and Web Chat 24/7.
            </p>

            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "16px", paddingTop: "8px" }}>
              <a
                href="#live-call"
                className="btn btn-primary"
                style={{
                  padding: "16px 34px",
                  fontSize: "16px",
                  fontWeight: 700,
                }}
              >
                <span>Talk to the AI</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="https://wa.me/8801993213030?text=Hi%2C%20I%20want%20to%20book%20a%20demo%20for%20Selorax%20AI"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  padding: "16px 30px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                Book Enterprise Demo
              </a>
            </div>

            {/* Micro guarantees */}
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "20px", paddingTop: "14px", fontSize: "13px", color: "#94A3B8" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <CheckCircle2 size={16} color="#10B981" />
                <span>Zero setup fees</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <CheckCircle2 size={16} color="#10B981" />
                <span>Same-day onboarding</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <CheckCircle2 size={16} color="#10B981" />
                <span>Full courier & API sync</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating 3D Cyber Card Visual */}
          <div
            ref={visualRef}
            style={{
              perspective: "1000px",
              display: "flex",
              justifyContent: "center",
            }}
            className="gpu-layer"
          >
            <div
              className="glass-panel"
              style={{
                width: "100%",
                maxWidth: "360px",
                borderRadius: "30px",
                backgroundColor: "rgba(11, 15, 25, 0.95)",
                border: "1.5px solid rgba(6, 182, 212, 0.35)",
                boxShadow: "0 25px 60px -10px rgba(0, 0, 0, 0.9), 0 0 35px rgba(6, 182, 212, 0.25)",
                padding: "32px 26px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "18px",
              }}
            >
              <div
                style={{
                  width: "74px",
                  height: "74px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.6)",
                }}
              >
                <Sparkles size={34} color="#FFFFFF" />
              </div>

              <div>
                <div style={{ fontSize: "18px", fontWeight: 900, color: "#F8FAFC" }}>
                  Selorax Live AI Assistant
                </div>
                <div style={{ fontSize: "12px", color: "#94A3B8", fontFamily: "var(--font-mono)", marginTop: "2px" }}>
                  Ready to deploy in &lt; 15 minutes
                </div>
              </div>

              <div style={{ width: "100%", padding: "12px", backgroundColor: "rgba(3, 7, 18, 0.8)", borderRadius: "16px", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <AudioWaveformCanvas active={true} barCount={24} colorTheme="cyan" height={26} speed={1.1} />
              </div>

              <div style={{ fontSize: "11px", color: "#10B981", fontFamily: "var(--font-mono)", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#10B981", boxShadow: "0 0 8px #10B981" }} />
                AI AGENT READY TO RECEIVE LIVE CALLS
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .cta-inner-grid {
            grid-template-columns: 1fr !important;
            padding: 44px 28px !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
