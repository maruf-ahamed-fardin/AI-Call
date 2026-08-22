"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AIPhoneVisual from "@/components/ui/AIPhoneVisual";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Zap,
  ShieldCheck,
} from "lucide-react";

export default function HeroScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightVisualRef = useRef<HTMLDivElement>(null);
  const metricsBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const leftContent = leftContentRef.current;
    const rightVisual = rightVisualRef.current;
    const metricsBar = metricsBarRef.current;

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
          y: -50,
          opacity: 0.2,
          scale: 0.96,
          ease: "power2.out",
        },
        0
      )
        .to(
          metricsBar,
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
            x: "-18%",
            scale: 1.08,
            rotationY: -6,
            rotationX: 4,
            ease: "power2.out",
          },
          0
        )
        .to(
          rightVisual,
          {
            scale: 1.15,
            rotationY: 0,
            rotationX: 0,
            x: "0%",
            y: -10,
            ease: "power1.inOut",
          },
          0.5
        );
    }, sectionRef);

    // 120fps Hardware-Accelerated Mouse Parallax (Zero React Re-renders!)
    const targetPhone = rightVisual.querySelector("#hero-phone-body");
    if (targetPhone) {
      const setX = gsap.quickTo(targetPhone, "rotationY", { duration: 0.5, ease: "power2.out" });
      const setY = gsap.quickTo(targetPhone, "rotationX", { duration: 0.5, ease: "power2.out" });

      const handleMouseMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const normX = (e.clientX / innerWidth - 0.5) * 12;
        const normY = (e.clientY / innerHeight - 0.5) * -12;
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

  const metrics = [
    { value: "10K+", label: "Businesses" },
    { value: "1M+", label: "Calls Made" },
    { value: "99.5%", label: "Success Rate" },
    { value: "24/7", label: "Availability" },
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
        paddingTop: "96px",
        paddingBottom: "40px",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {/* 2-Column Hero Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.95fr",
            gap: "54px",
            alignItems: "center",
            width: "100%",
          }}
          className="hero-grid"
        >
          {/* Left Column: Headline, Copy & CTAs */}
          <div ref={leftContentRef} style={{ display: "flex", flexDirection: "column", gap: "22px" }} className="gpu-layer">
            {/* Eyebrow Badge */}
            <div>
              <span className="badge-eyebrow">
                <span className="badge-dot" />
                AI VOICE AGENTS FOR REAL BUSINESS
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(40px, 4.8vw, 62px)",
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
                color: "#0F172A",
              }}
            >
              AI Calling That{" "}
              <span className="text-orange">
                Actually Talks
              </span>{" "}
              Like a Human
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(16px, 1.2vw, 18px)",
                color: "#475569",
                lineHeight: 1.6,
                maxWidth: "520px",
              }}
            >
              Build AI voice agents that engage, qualify, and convert 24/7 — just like your best human.
            </p>

            {/* Action CTAs */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "14px",
                paddingTop: "4px",
              }}
            >
              <a
                href="#live-call"
                className="btn btn-primary"
                style={{
                  padding: "14px 30px",
                  fontSize: "16px",
                  fontWeight: 700,
                }}
              >
                <span>Start Free Trial</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="#features"
                className="btn btn-secondary"
                style={{
                  padding: "14px 26px",
                  fontSize: "16px",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Play size={16} fill="#2563EB" color="#2563EB" />
                <span>Watch Demo</span>
              </a>
            </div>

            {/* Micro Guarantees */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "20px",
                fontSize: "13px",
                color: "#64748B",
                paddingTop: "4px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={15} color="#22C55E" />
                <span>No credit card required</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Zap size={15} color="#F97316" />
                <span>Setup in 2 minutes</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Smartphone with Live AI Calling Interface */}
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
            <AIPhoneVisual stage="hero" callerName="Sarah Ahmed" callTimerSecs={24} isCalling={true} />
          </div>
        </div>

        {/* Bottom Social Proof / Metrics Row */}
        <div
          ref={metricsBarRef}
          style={{
            marginTop: "56px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(15, 23, 42, 0.08)",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            width: "100%",
          }}
          className="hero-metrics-grid gpu-layer"
        >
          {metrics.map((m) => (
            <div key={m.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(24px, 2.5vw, 32px)",
                  fontWeight: 900,
                  color: "#0F172A",
                  letterSpacing: "-0.03em",
                }}
              >
                {m.value}
              </div>
              <div style={{ fontSize: "13px", color: "#64748B", fontWeight: 500, marginTop: "2px" }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 980px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
