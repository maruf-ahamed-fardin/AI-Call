"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
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
        padding: "140px 0 120px 0",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      {/* Background Radial Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, rgba(37, 99, 235, 0.08) 50%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 5 }}>
        <div
          className="glass-panel gpu-layer cta-inner-grid"
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
            backgroundColor: "rgba(255, 255, 255, 0.94)",
            borderRadius: "36px",
            border: "1.5px solid rgba(249, 115, 22, 0.25)",
            boxShadow: "0 30px 90px -20px rgba(15, 23, 42, 0.1), 0 0 0 1px rgba(249, 115, 22, 0.1)",
            padding: "64px 48px",
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <div>
              <span className="badge-eyebrow">
                <span className="badge-dot" />
                START YOUR 14-DAY FREE PILOT
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(34px, 4.4vw, 54px)",
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.1,
                letterSpacing: "-0.035em",
              }}
            >
              Ready to automate your customer conversations?
            </h2>

            <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.65 }}>
              Give your business an AI assistant that talks, understands, and gets real work done across Voice, WhatsApp, and Web Chat 24/7.
            </p>

            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "14px", paddingTop: "6px" }}>
              <a
                href="#live-call"
                className="btn btn-primary"
                style={{
                  padding: "15px 32px",
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
                  padding: "15px 28px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                Book a demo
              </a>
            </div>

            {/* Micro guarantees */}
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "18px", paddingTop: "10px", fontSize: "13px", color: "#64748B" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={15} color="#22C55E" />
                <span>Zero setup fees</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={15} color="#22C55E" />
                <span>Same-day onboarding</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={15} color="#22C55E" />
                <span>Full courier & API sync</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating 3D Card Visual */}
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
                maxWidth: "340px",
                borderRadius: "28px",
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(37, 99, 235, 0.2)",
                boxShadow: "0 20px 50px -10px rgba(37, 99, 235, 0.15)",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #F97316 0%, #2563EB 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 25px rgba(249, 115, 22, 0.5)",
                }}
              >
                <Sparkles size={32} color="#FFFFFF" />
              </div>

              <div>
                <div style={{ fontSize: "17px", fontWeight: 800, color: "#0F172A" }}>
                  Selorax Live AI Assistant
                </div>
                <div style={{ fontSize: "12px", color: "#64748B" }}>
                  Ready to deploy in &lt; 15 minutes
                </div>
              </div>

              <div style={{ width: "100%", padding: "10px", backgroundColor: "rgba(241, 245, 249, 0.7)", borderRadius: "14px" }}>
                <AudioWaveformCanvas active={true} barCount={22} colorTheme="mixed" height={24} />
              </div>

              <div style={{ fontSize: "11px", color: "#16A34A", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#22C55E" }} />
                AI AGENT NODE READY TO RECEIVE CALLS
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .cta-inner-grid {
            grid-template-columns: 1fr !important;
            padding: 40px 24px !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
