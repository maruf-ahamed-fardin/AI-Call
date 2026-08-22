"use client";

import React, { useEffect, useRef } from "react";
import HeroCanvas3D from "@/components/ui/HeroCanvas3D";
import { ArrowRight, Star, Mic, Activity, Zap, PhoneCall } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const hudTopLeftRef = useRef<HTMLDivElement>(null);
  const hudMidLeftRef = useRef<HTMLDivElement>(null);
  const hudTopRightRef = useRef<HTMLDivElement>(null);
  const hudBottomRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Intro entrance cascade
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge", { y: -20, opacity: 0, duration: 0.6 })
        .from(".hero-headline", { y: 30, opacity: 0, duration: 0.8 }, "-=0.3")
        .from(".hero-subheadline", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-cta-group", { y: 20, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".hero-social-proof", { y: 15, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".hud-card", { scale: 0.7, opacity: 0, stagger: 0.1, duration: 0.8, ease: "back.out(1.7)" }, "-=0.6");

      // Scroll-Driven Parallax 3D Depth Dispersal
      gsap.to(hudTopLeftRef.current, {
        x: -40,
        y: -60,
        opacity: 0.4,
        scale: 0.9,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(hudMidLeftRef.current, {
        x: -70,
        y: 40,
        opacity: 0.4,
        scale: 0.9,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(hudTopRightRef.current, {
        x: 50,
        y: -50,
        opacity: 0.4,
        scale: 0.9,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.1,
        },
      });

      gsap.to(hudBottomRightRef.current, {
        x: 60,
        y: 60,
        opacity: 0.4,
        scale: 0.9,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.3,
        },
      });

      // Left Column parallax fade
      gsap.to(leftColRef.current, {
        y: -60,
        opacity: 0.25,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

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
        paddingTop: "120px",
        paddingBottom: "60px",
        overflow: "hidden",
      }}
    >
      <div className="container hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px", alignItems: "center" }}>
        {/* Left Column: Typography, Badges, CTAs, Social Proof */}
        <div ref={leftColRef} style={{ zIndex: 10, maxWidth: "580px" }}>
          {/* Eyebrow Badge */}
          <div className="hero-badge" style={{ marginBottom: "20px" }}>
            <div className="badge-eyebrow">
              <span className="badge-dot" />
              <span>AI Voice Automation Platform</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1
            className="hero-headline"
            style={{
              fontSize: "clamp(38px, 5.2vw, 64px)",
              lineHeight: 1.08,
              fontWeight: 800,
              marginBottom: "24px",
              color: "#FFFFFF",
              letterSpacing: "-0.03em",
            }}
          >
            AI Calls That Convert <br />
            <span className="text-gradient-cyan">Every Conversation.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="hero-subheadline"
            style={{
              fontSize: "clamp(16px, 1.4vw, 18px)",
              lineHeight: 1.6,
              color: "#94A3B8",
              marginBottom: "36px",
              maxWidth: "500px",
              fontWeight: 400,
            }}
          >
            Automate customer verification, lead qualification, appointment booking, and sales calls with human-like AI voices.
          </p>

          {/* CTA Buttons */}
          <div
            className="hero-cta-group"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "44px",
            }}
          >
            <a
              href="#contact"
              className="btn btn-primary"
              style={{
                padding: "14px 30px",
                fontSize: "15px",
                fontWeight: 700,
              }}
            >
              <span>Start Free Trial</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#voice-intelligence"
              className="btn btn-secondary"
              style={{
                padding: "14px 28px",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              <span>Book Demo</span>
            </a>
          </div>

          {/* Social Proof Stack */}
          <div
            className="hero-social-proof"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Customer"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "2px solid #020617",
                    marginLeft: i === 0 ? "0" : "-10px",
                    objectFit: "cover",
                  }}
                />
              ))}
            </div>

            <div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#F8FAFC" }}>
                Trusted by 10,000+ businesses
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }}>
                <div style={{ display: "flex", color: "#F59E0B" }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#F59E0B" stroke="none" />
                  ))}
                </div>
                <span style={{ fontSize: "12px", color: "#94A3B8", fontWeight: 500 }}>
                  4.9/5 from 1,240+ reviews
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Holographic AI Head + Floating HUD Cards */}
        <div
          style={{
            position: "relative",
            minHeight: "540px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* 3D WebGL Canvas */}
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <HeroCanvas3D />
          </div>

          {/* Floating Holographic HUD Card 1: Voice AI (Top Left) */}
          <div
            ref={hudTopLeftRef}
            className="hud-card hud-top-left"
            style={{
              position: "absolute",
              top: "14%",
              left: "4%",
              background: "rgba(7, 13, 30, 0.75)",
              border: "1px solid rgba(56, 189, 248, 0.35)",
              borderRadius: "9999px",
              padding: "8px 16px",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6), 0 0 15px rgba(56, 189, 248, 0.25)",
              zIndex: 20,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "rgba(56, 189, 248, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#38BDF8",
              }}
            >
              <Mic size={13} />
            </div>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "#F8FAFC", letterSpacing: "0.04em" }}>
                Voice AI
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "2px", height: "8px", marginTop: "2px" }}>
                {[6, 12, 8, 14, 10, 5].map((h, idx) => (
                  <span
                    key={idx}
                    style={{
                      width: "2px",
                      height: `${h}px`,
                      backgroundColor: "#38BDF8",
                      borderRadius: "1px",
                      animation: `waveformBar 1.2s ease-in-out infinite ${idx * 0.15}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Floating Holographic HUD Card 2: Real-time Analysis (Mid Left) */}
          <div
            ref={hudMidLeftRef}
            className="hud-card hud-mid-left"
            style={{
              position: "absolute",
              top: "46%",
              left: "-4%",
              background: "rgba(7, 13, 30, 0.8)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              borderRadius: "14px",
              padding: "10px 16px",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.7), 0 0 20px rgba(56, 189, 248, 0.2)",
              zIndex: 20,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <Activity size={14} color="#38BDF8" />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#F8FAFC", letterSpacing: "0.03em" }}>
                Real-time Analysis
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: "18px" }}>
              {[8, 14, 6, 18, 12, 16, 10, 15, 7].map((bar, i) => (
                <span
                  key={i}
                  style={{
                    width: "3px",
                    height: `${bar}px`,
                    backgroundColor: i % 2 === 0 ? "#38BDF8" : "#3B82F6",
                    borderRadius: "1px",
                    animation: `waveformBar 1.4s ease-in-out infinite ${i * 0.12}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Floating Holographic HUD Card 3: Smart Automation (Top Right) */}
          <div
            ref={hudTopRightRef}
            className="hud-card hud-top-right"
            style={{
              position: "absolute",
              top: "22%",
              right: "4%",
              background: "rgba(7, 13, 30, 0.75)",
              border: "1px solid rgba(59, 130, 246, 0.35)",
              borderRadius: "9999px",
              padding: "8px 16px",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6), 0 0 15px rgba(59, 130, 246, 0.25)",
              zIndex: 20,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "rgba(59, 130, 246, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#60A5FA",
              }}
            >
              <Zap size={13} />
            </div>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#F8FAFC", letterSpacing: "0.04em" }}>
              Smart Automation
            </div>
          </div>

          {/* Floating Holographic HUD Card 4: 24/7 AI Calling (Bottom Right) */}
          <div
            ref={hudBottomRightRef}
            className="hud-card hud-bottom-right"
            style={{
              position: "absolute",
              bottom: "16%",
              right: "2%",
              background: "rgba(7, 13, 30, 0.75)",
              border: "1px solid rgba(56, 189, 248, 0.35)",
              borderRadius: "9999px",
              padding: "8px 16px",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6), 0 0 15px rgba(56, 189, 248, 0.25)",
              zIndex: 20,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "rgba(16, 185, 129, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#10B981",
              }}
            >
              <PhoneCall size={13} />
            </div>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "#F8FAFC" }}>
                24/7 AI Calling
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "1px" }}>
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    backgroundColor: "#10B981",
                    boxShadow: "0 0 6px #10B981",
                  }}
                />
                <span style={{ fontSize: "10px", color: "#94A3B8" }}>Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Center: SCROLL TO EXPLORE */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          marginTop: "40px",
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: "#64748B",
            textTransform: "uppercase",
          }}
        >
          Scroll to explore
        </span>
        <div
          style={{
            width: "20px",
            height: "32px",
            borderRadius: "12px",
            border: "2px solid rgba(56, 189, 248, 0.4)",
            display: "flex",
            justifyContent: "center",
            paddingTop: "6px",
            boxShadow: "0 0 10px rgba(56, 189, 248, 0.2)",
          }}
        >
          <div
            style={{
              width: "3px",
              height: "6px",
              backgroundColor: "#38BDF8",
              borderRadius: "2px",
              animation: "pulseDot 1.6s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.05fr 0.95fr !important;
          }
        }
        @media (max-width: 959px) {
          .hud-top-left, .hud-mid-left, .hud-top-right, .hud-bottom-right {
            position: static !important;
            margin: 6px !important;
            display: inline-flex !important;
          }
        }
      `}</style>
    </section>
  );
}
