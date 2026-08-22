"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AIProductVisual from "@/components/ui/AIProductVisual";
import { ArrowRight, PhoneCall, Check, Sparkles, Activity, ShieldCheck, Clock } from "lucide-react";

export default function HeroScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightVisualRef = useRef<HTMLDivElement>(null);
  const trustBarRef = useRef<HTMLDivElement>(null);

  // Mouse parallax state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
          end: "+=120%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // Stage 1 -> Stage 2: Left text translates up & fades slightly, Right visual scales and centers
      tl.to(
        leftContent,
        {
          y: -80,
          opacity: 0.2,
          scale: 0.95,
          ease: "power2.out",
        },
        0
      )
        .to(
          rightVisual,
          {
            x: "-25%",
            scale: 1.15,
            rotationY: -10,
            rotationX: 8,
            ease: "power2.out",
          },
          0
        )
        .to(
          trustBar,
          {
            y: 40,
            opacity: 0,
            ease: "power1.out",
          },
          0
        )
        // Stage 3 -> Stage 4: Visual smoothly transforms and zooms for the next scene
        .to(
          rightVisual,
          {
            scale: 1.25,
            rotationY: 0,
            rotationX: 0,
            x: "0%",
            y: -30,
            ease: "power1.inOut",
          },
          0.6
        );
    }, sectionRef);

    // Mouse movement listener for subtle 3D parallax on desktop
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const normY = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1
      setMousePos({ x: normX, y: normY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
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
        paddingBottom: "40px",
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
          {/* Left Column: Headline & Story */}
          <div ref={leftContentRef} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Eyebrow Badge */}
            <div>
              <span className="badge-eyebrow">
                <span className="badge-dot" />
                AUTOMATED CUSTOMER FRONTLINE
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(38px, 5.2vw, 64px)",
                fontWeight: 800,
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

            {/* Supporting Copy */}
            <p
              style={{
                fontSize: "clamp(16px, 1.25vw, 18px)",
                color: "#475569",
                lineHeight: 1.65,
                maxWidth: "580px",
              }}
            >
              Selorax AI answers incoming phone calls, conducts outbound calls, provides live voice support, and handles customer messaging — verifying orders, booking appointments, processing payments, and executing end-to-end business workflows automatically 24/7.
            </p>

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

            {/* Key Performance Metrics Bar */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
                paddingTop: "18px",
                borderTop: "1px solid var(--border-subtle)",
                maxWidth: "540px",
              }}
              className="hero-metrics"
            >
              <div>
                <div style={{ fontSize: "20px", fontWeight: 800, color: "#0F172A", display: "flex", alignItems: "center", gap: "4px" }}>
                  <span>&lt;450</span>
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

          {/* Right Column: 3D Product Mockup Visual */}
          <div
            ref={rightVisualRef}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transformStyle: "preserve-3d",
            }}
          >
            <AIProductVisual mouseMoveX={mousePos.x} mouseMoveY={mousePos.y} />
          </div>
        </div>

        {/* Social Proof Marquee Banner */}
        <div
          ref={trustBarRef}
          style={{
            marginTop: "48px",
            paddingTop: "24px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "14px",
          }}
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
              gap: "12px",
              width: "100%",
            }}
          >
            {clientLogos.map((client) => (
              <div
                key={client.name}
                style={{
                  padding: "8px 16px",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.75)",
                  border: "1px solid rgba(15, 23, 42, 0.06)",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#334155",
                  transition: "transform 0.2s ease, border-color 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "2px",
                    backgroundColor: "#2563EB",
                    opacity: 0.6,
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
