"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LiveVoiceConsole from "@/components/ui/LiveVoiceConsole";
import AIPhoneVisual from "@/components/ui/AIPhoneVisual";
import { prefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Zap,
  Mic,
  Sparkles,
  PhoneCall,
} from "lucide-react";

export default function HeroScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightVisualRef = useRef<HTMLDivElement>(null);
  const consoleWrapRef = useRef<HTMLDivElement>(null);
  const metricsBarRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const [useInteractiveConsole, setUseInteractiveConsole] = useState(true);

  // On-load cinematic entrance — headline/CTAs cascade in, console pops in with
  // its decorative spheres. Targets inner children only, never the outer
  // leftContent/rightVisual/metricsBar refs that the scroll-dolly timeline below owns.
  useEffect(() => {
    const root = sectionRef.current;
    if (!root || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.7 } });

      tl.from(".hero-badge", { y: -14, opacity: 0, duration: 0.5 })
        .from(".hero-headline", { y: 30, opacity: 0, filter: "blur(8px)" }, "-=0.25")
        .from(".hero-subtitle", { y: 20, opacity: 0 }, "-=0.4")
        .from(".hero-pill", { y: 14, opacity: 0 }, "-=0.35")
        .from(".hero-cta-row > *", { y: 16, opacity: 0, stagger: 0.08 }, "-=0.3")
        .from(".hero-guarantees > *", { y: 10, opacity: 0, stagger: 0.06 }, "-=0.3")
        .from(
          consoleWrapRef.current,
          { scale: 0.88, opacity: 0, rotateY: -8, duration: 0.9, ease: "back.out(1.4)" },
          "-=0.75"
        )
        .from(".hero-glass-sphere", { scale: 0, opacity: 0, stagger: 0.08, duration: 0.6, ease: "back.out(2)" }, "-=0.5")
        .from(".hero-metric-item", { y: 16, opacity: 0, stagger: 0.06 }, "-=0.3");

      // Calm ambient idle motion once settled — subtle float, never stops
      gsap.to(consoleWrapRef.current, { y: "+=10", duration: 3.4, ease: "sine.inOut", yoyo: true, repeat: -1 });
      const spheres = root.querySelectorAll<HTMLElement>(".hero-glass-sphere");
      spheres.forEach((sphere, idx) => {
        gsap.to(sphere, {
          y: idx % 2 === 0 ? "+=12" : "-=12",
          duration: 3 + idx * 0.6,
          delay: idx * 0.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const leftContent = leftContentRef.current;
    const rightVisual = rightVisualRef.current;
    const metricsBar = metricsBarRef.current;
    const flash = flashRef.current;

    if (!section || !leftContent || !rightVisual) return;

    if (prefersReducedMotion()) return;

    // Cinematic Virtual Camera Dolly Timeline for Hero — ends with the phone
    // ballooning past frame + a whip-flash, handing off into the Live Call scene
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=160%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      tl.to(
        leftContent,
        {
          y: -60,
          opacity: 0.15,
          scale: 0.95,
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
            x: "-15%",
            scale: 1.12,
            rotationY: -6,
            rotationX: 4,
            ease: "power2.out",
          },
          0
        )
        .to(
          rightVisual,
          {
            scale: 1.25,
            rotationY: 0,
            rotationX: 0,
            x: "0%",
            y: -10,
            ease: "power1.inOut",
          },
          0.5
        )
        // Phase 3 — camera pushes through the phone: it balloons past frame and fades
        .to(
          rightVisual,
          {
            scale: 2.4,
            y: -40,
            opacity: 0,
            ease: "power2.in",
          },
          0.75
        )
        // Whip-flash whitewash masks the hard cut into the Live Call scene
        .to(flash, { opacity: 1, ease: "power1.in", duration: 0.4 }, 0.82)
        .to(flash, { opacity: 0, ease: "power1.out", duration: 0.4 }, 0.95);
    }, sectionRef);

    // 120fps Hardware-Accelerated Mouse Parallax with zero React re-renders
    const targetElement = rightVisual.querySelector(".gpu-layer");
    if (targetElement) {
      const setX = gsap.quickTo(targetElement, "rotationY", { duration: 0.5, ease: "power2.out" });
      const setY = gsap.quickTo(targetElement, "rotationX", { duration: 0.5, ease: "power2.out" });

      const handleMouseMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const normX = (e.clientX / innerWidth - 0.5) * 10;
        const normY = (e.clientY / innerHeight - 0.5) * -10;
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
      {/* Whip-flash overlay — masks the Hero-to-LiveCall hard cut, never intercepts clicks */}
      <div
        ref={flashRef}
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 20,
          pointerEvents: "none",
          opacity: 0,
          background: "#FFFFFF",
        }}
      />

      {/* Ambient premium background — soft brand-color light + faint dot texture, clipped to hero bounds */}
      <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: "-15vw",
            right: "-10vw",
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37, 99, 235, 0.09) 0%, rgba(37, 99, 235, 0) 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20vh",
            left: "-12vw",
            width: "45vw",
            height: "45vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, rgba(249, 115, 22, 0) 70%)",
            filter: "blur(70px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 60% 50% at 50% 30%, #000 0%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 30%, #000 0%, transparent 75%)",
          }}
        />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {/* 2-Column Hero Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.95fr",
            gap: "50px",
            alignItems: "center",
            width: "100%",
          }}
          className="hero-grid"
        >
          {/* Left Column: Headline, Copy & CTAs */}
          <div ref={leftContentRef} style={{ display: "flex", flexDirection: "column", gap: "22px" }} className="gpu-layer">
            {/* Eyebrow Badge */}
            <div className="hero-badge">
              <span className="badge-eyebrow">
                <span className="badge-dot" />
                AI VOICE AGENTS FOR REAL BUSINESS
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="hero-headline"
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
              className="hero-subtitle"
              style={{
                fontSize: "clamp(16px, 1.2vw, 18px)",
                color: "#475569",
                lineHeight: 1.6,
                maxWidth: "520px",
              }}
            >
              Build AI voice agents that engage, qualify, and convert 24/7 — just like your best human. Speak with our live assistant directly on this page.
            </p>

            {/* In-Hero Voice Feature Callout Pill */}
            <div
              className="hero-pill"
              style={{
                padding: "8px 16px",
                borderRadius: "14px",
                backgroundColor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "12px",
                fontWeight: 700,
                color: "#EA580C",
                maxWidth: "fit-content",
              }}
            >
              <Mic size={16} color="#F97316" />
              <span>🎙️ Live AI Voice Call active on the right — Try talking now!</span>
            </div>

            {/* Action CTAs */}
            <div
              className="hero-cta-row"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "14px",
                paddingTop: "2px",
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
              className="hero-guarantees"
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

          {/* Right Column: In-Hero Live Voice Console with Live AI Calling & Speech Recognition */}
          <div
            ref={rightVisualRef}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transformStyle: "preserve-3d",
              maxWidth: "460px",
              margin: "0 auto",
            }}
            className="gpu-layer"
          >
            {/* Decorative depth spheres framing the console */}
            <div className="glass-sphere hero-glass-sphere" style={{ width: "30px", height: "30px", top: "-6%", left: "-8%", zIndex: 1 }} />
            <div className="glass-sphere glass-sphere-orange hero-glass-sphere" style={{ width: "22px", height: "22px", bottom: "12%", left: "-10%", zIndex: 1 }} />
            <div className="glass-sphere hero-glass-sphere" style={{ width: "38px", height: "38px", bottom: "-8%", right: "-6%", zIndex: 1 }} />

            <div ref={consoleWrapRef} style={{ position: "relative", zIndex: 2, width: "100%" }}>
              {useInteractiveConsole ? (
                <LiveVoiceConsole />
              ) : (
                <AIPhoneVisual stage="hero" callerName="Sarah Ahmed" callTimerSecs={24} isCalling={true} />
              )}
            </div>
          </div>
        </div>

        {/* Bottom Social Proof / Metrics Row */}
        <div
          ref={metricsBarRef}
          style={{
            marginTop: "52px",
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
            <div key={m.label} className="hero-metric-item" style={{ textAlign: "center" }}>
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
