"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AIProductVisual from "@/components/ui/AIProductVisual";
import {
  ArrowRight,
  PhoneCall,
  Sparkles,
  Zap,
  ShieldCheck,
  Activity,
  Bot,
  Terminal,
  Play,
} from "lucide-react";

export default function HeroScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightVisualRef = useRef<HTMLDivElement>(null);
  const trustBarRef = useRef<HTMLDivElement>(null);

  const [activePrompt, setActivePrompt] = useState("Confirm COD Order");

  const samplePrompts = [
    { label: "Confirm COD Order", id: "cod" },
    { label: "Change Address", id: "address" },
    { label: "Generate bKash Link", id: "bkash" },
    { label: "Doctor Serial", id: "doctor" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const leftContent = leftContentRef.current;
    const rightVisual = rightVisualRef.current;
    const trustBar = trustBarRef.current;

    if (!section || !leftContent || !rightVisual) return;

    // Cinematic Scroll Timeline for Hero
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      tl.to(
        leftContent,
        {
          y: -60,
          opacity: 0.25,
          scale: 0.96,
          ease: "power2.out",
        },
        0
      )
        .to(
          rightVisual,
          {
            x: "-20%",
            scale: 1.1,
            rotationY: -8,
            rotationX: 6,
            ease: "power2.out",
          },
          0
        )
        .to(
          trustBar,
          {
            y: 30,
            opacity: 0,
            ease: "power1.out",
          },
          0
        )
        .to(
          rightVisual,
          {
            scale: 1.18,
            rotationY: 0,
            rotationX: 0,
            x: "0%",
            y: -20,
            ease: "power1.inOut",
          },
          0.5
        );
    }, sectionRef);

    // Hardware-accelerated 120fps Mouse Parallax with ZERO React re-renders!
    const targetElement = rightVisual.querySelector("#hero-ai-interface-card");
    if (targetElement) {
      const setX = gsap.quickTo(targetElement, "rotationY", { duration: 0.5, ease: "power2.out" });
      const setY = gsap.quickTo(targetElement, "rotationX", { duration: 0.5, ease: "power2.out" });

      const handleMouseMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const normX = (e.clientX / innerWidth - 0.5) * 14;
        const normY = (e.clientY / innerHeight - 0.5) * -14;
        setX(normX);
        setY(normY);
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });

      return () => {
        ctx.revert();
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }

    return () => ctx.revert();
  }, []);

  const clientLogos = [
    { name: "Shahin E Mart", tag: "E-Commerce" },
    { name: "Shahi Goods", tag: "Retail" },
    { name: "DayRio", tag: "Fashion" },
    { name: "Prodhan Mart", tag: "Superstore" },
    { name: "Bismillah Metal", tag: "Manufacturing" },
    { name: "NDBIN", tag: "Logistics" },
    { name: "NextGen", tag: "Tech Store" },
    { name: "Symora", tag: "Cosmetics" },
  ];

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "90px",
        paddingBottom: "30px",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {/* Main 2-Column Hero Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.95fr",
            gap: "48px",
            alignItems: "center",
            width: "100%",
          }}
          className="hero-grid"
        >
          {/* Left Column: Clean, Minimal Story & Actions */}
          <div ref={leftContentRef} style={{ display: "flex", flexDirection: "column", gap: "20px" }} className="gpu-layer">
            {/* Eyebrow Badge */}
            <div>
              <span className="badge-eyebrow">
                <span className="badge-dot" />
                AUTOMATED CUSTOMER FRONTLINE
              </span>
            </div>

            {/* Main Minimal Headline */}
            <h1
              style={{
                fontSize: "clamp(38px, 4.8vw, 62px)",
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
                color: "#0F172A",
              }}
            >
              AI that talks to your customers —{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 50%, #F97316 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                and gets the work done.
              </span>
            </h1>

            {/* Supporting Minimal Copy */}
            <p
              style={{
                fontSize: "clamp(16px, 1.2vw, 18px)",
                color: "#475569",
                lineHeight: 1.6,
                maxWidth: "540px",
              }}
            >
              Selorax AI answers incoming calls, conducts outbound verifications, handles WhatsApp messaging, and executes end-to-end business workflows automatically 24/7.
            </p>

            {/* Quick Interactive Prompt Chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", paddingTop: "4px" }}>
              {samplePrompts.map((p) => {
                const isSelected = activePrompt === p.label;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActivePrompt(p.label)}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "9999px",
                      backgroundColor: isSelected ? "rgba(249, 115, 22, 0.12)" : "rgba(15, 23, 42, 0.04)",
                      border: isSelected ? "1px solid rgba(249, 115, 22, 0.4)" : "1px solid rgba(15, 23, 42, 0.08)",
                      color: isSelected ? "#EA580C" : "#475569",
                      fontSize: "12px",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <Sparkles size={12} color={isSelected ? "#EA580C" : "#94A3B8"} />
                    <span>{p.label}</span>
                  </button>
                );
              })}
            </div>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "14px",
                paddingTop: "6px",
              }}
            >
              <a
                href="#live-call"
                className="btn btn-primary"
                style={{
                  padding: "14px 28px",
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
                  padding: "14px 26px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                Book a demo
              </a>
            </div>

            {/* Minimal Metrics Bar */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
                paddingTop: "16px",
                borderTop: "1px solid var(--border-subtle)",
                maxWidth: "500px",
              }}
              className="hero-metrics"
            >
              <div>
                <div style={{ fontSize: "20px", fontWeight: 800, color: "#0F172A", display: "flex", alignItems: "center", gap: "4px" }}>
                  <span>&lt;380</span>
                  <span style={{ color: "#2563EB", fontSize: "14px" }}>ms</span>
                </div>
                <div style={{ fontSize: "12px", color: "#64748B", fontWeight: 500 }}>Voice Latency</div>
              </div>

              <div>
                <div style={{ fontSize: "20px", fontWeight: 800, color: "#0F172A", display: "flex", alignItems: "center", gap: "4px" }}>
                  <span>99.9%</span>
                  <span style={{ color: "#22C55E", fontSize: "12px" }}>●</span>
                </div>
                <div style={{ fontSize: "12px", color: "#64748B", fontWeight: 500 }}>Call Reliability</div>
              </div>

              <div>
                <div style={{ fontSize: "20px", fontWeight: 800, color: "#0F172A", display: "flex", alignItems: "center", gap: "4px" }}>
                  <span>24/7</span>
                  <span style={{ color: "#F97316", fontSize: "14px" }}>⚡</span>
                </div>
                <div style={{ fontSize: "12px", color: "#64748B", fontWeight: 500 }}>Auto Workflow</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Call Simulator in Hero */}
          <div
            ref={rightVisualRef}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transformStyle: "preserve-3d",
            }}
            className="gpu-layer"
          >
            <AIProductVisual activePrompt={activePrompt} />
          </div>
        </div>

        {/* Minimal Social Proof Marquee Banner */}
        <div
          ref={trustBarRef}
          style={{
            marginTop: "44px",
            paddingTop: "20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
          className="gpu-layer"
        >
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#64748B",
            }}
          >
            TRUSTED BY 500+ FAST-GROWING STORES WORLDWIDE
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              width: "100%",
            }}
          >
            {clientLogos.map((client) => (
              <div
                key={client.name}
                style={{
                  padding: "7px 16px",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.85)",
                  border: "1px solid rgba(15, 23, 42, 0.06)",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#334155",
                  transition: "transform 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#2563EB",
                  }}
                />
                <span>{client.name}</span>
                <span
                  style={{
                    fontSize: "10px",
                    color: "#94A3B8",
                    fontWeight: 500,
                    backgroundColor: "rgba(15, 23, 42, 0.04)",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  {client.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 980px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
