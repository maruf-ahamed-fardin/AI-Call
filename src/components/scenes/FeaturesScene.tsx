"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AIPhoneVisual from "@/components/ui/AIPhoneVisual";
import {
  MessageSquare,
  Bot,
  Zap,
  FileText,
  Database,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface FeatureCardData {
  id: string;
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  position: "top-left" | "bottom-left" | "top-right" | "bottom-right";
}

const features: FeatureCardData[] = [
  {
    id: "f1",
    num: "01",
    title: "Human-like Conversations",
    desc: "AI speaks naturally & understands real human intent.",
    icon: <Bot size={20} color="#2563EB" />,
    position: "top-left",
  },
  {
    id: "f2",
    num: "02",
    title: "Smart Call Automation",
    desc: "Auto-dial, follow-ups & schedule calls.",
    icon: <Zap size={20} color="#F97316" />,
    position: "bottom-left",
  },
  {
    id: "f3",
    num: "03",
    title: "Real-time Transcription",
    desc: "Live call transcription & summaries.",
    icon: <FileText size={20} color="#2563EB" />,
    position: "top-right",
  },
  {
    id: "f4",
    num: "04",
    title: "CRM & API Integration",
    desc: "Sync with your favorite tools seamlessly.",
    icon: <Database size={20} color="#F97316" />,
    position: "bottom-right",
  },
];

export default function FeaturesScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const pinContainer = pinContainerRef.current;
    if (!section || !pinContainer) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: pinContainer,
        start: "top top",
        end: "+=220%",
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = self.progress;
          const idx = Math.min(3, Math.floor(p * 4));
          setActiveFeature(idx);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div
        ref={pinContainerRef}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 0",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 5 }}>
          {/* Header */}
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 48px auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
              <span className="badge-eyebrow">
                <span className="badge-dot" />
                POWERFUL FEATURES
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(34px, 4vw, 50px)",
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
              }}
            >
              Everything You Need to Automate Calls and Grow
            </h2>

            <p style={{ fontSize: "16px", color: "#64748B", marginTop: "8px" }}>
              Automate calls. Close more deals. Save more time.
            </p>
          </div>

          {/* Desktop 3-Column Features Orbit Layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr 1fr",
              gap: "28px",
              alignItems: "center",
              position: "relative",
            }}
            className="features-orbit-grid"
          >
            {/* Left 2 Feature Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }} className="features-col-left">
              {features.slice(0, 2).map((item, idx) => {
                const isActive = activeFeature === idx;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveFeature(idx)}
                    className="glass-panel-card gpu-layer"
                    style={{
                      padding: "24px 22px",
                      borderRadius: "22px",
                      backgroundColor: isActive ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.85)",
                      border: isActive
                        ? "1.5px solid rgba(37, 99, 235, 0.4)"
                        : "1px solid rgba(15, 23, 42, 0.08)",
                      boxShadow: isActive
                        ? "0 16px 36px -8px rgba(37, 99, 235, 0.15)"
                        : "0 6px 20px -4px rgba(15, 23, 42, 0.04)",
                      transform: isActive ? "scale(1.03) translateX(6px)" : "scale(1)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "10px",
                          backgroundColor: idx === 0 ? "rgba(37, 99, 235, 0.1)" : "rgba(249, 115, 22, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </div>

                      <span
                        style={{
                          fontSize: "11px",
                          fontFamily: "var(--font-mono)",
                          fontWeight: 700,
                          color: isActive ? "#2563EB" : "#94A3B8",
                          backgroundColor: isActive ? "rgba(37, 99, 235, 0.08)" : "transparent",
                          padding: "2px 8px",
                          borderRadius: "6px",
                        }}
                      >
                        {item.num}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0F172A", marginBottom: "6px" }}>
                      {item.title}
                    </h3>

                    <p style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Central Pinned 3D Phone Visual */}
            <div style={{ display: "flex", justifyContent: "center" }} className="gpu-layer">
              <AIPhoneVisual
                stage="features"
                callerName="Sarah Ahmed"
                callTimerSecs={24 + activeFeature * 12}
                activeFeatureIndex={activeFeature}
              />
            </div>

            {/* Right 2 Feature Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }} className="features-col-right">
              {features.slice(2, 4).map((item, idx) => {
                const actualIdx = idx + 2;
                const isActive = activeFeature === actualIdx;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveFeature(actualIdx)}
                    className="glass-panel-card gpu-layer"
                    style={{
                      padding: "24px 22px",
                      borderRadius: "22px",
                      backgroundColor: isActive ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.85)",
                      border: isActive
                        ? "1.5px solid rgba(249, 115, 22, 0.4)"
                        : "1px solid rgba(15, 23, 42, 0.08)",
                      boxShadow: isActive
                        ? "0 16px 36px -8px rgba(249, 115, 22, 0.15)"
                        : "0 6px 20px -4px rgba(15, 23, 42, 0.04)",
                      transform: isActive ? "scale(1.03) translateX(-6px)" : "scale(1)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "10px",
                          backgroundColor: idx === 0 ? "rgba(37, 99, 235, 0.1)" : "rgba(249, 115, 22, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </div>

                      <span
                        style={{
                          fontSize: "11px",
                          fontFamily: "var(--font-mono)",
                          fontWeight: 700,
                          color: isActive ? "#F97316" : "#94A3B8",
                          backgroundColor: isActive ? "rgba(249, 115, 22, 0.08)" : "transparent",
                          padding: "2px 8px",
                          borderRadius: "6px",
                        }}
                      >
                        {item.num}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0F172A", marginBottom: "6px" }}>
                      {item.title}
                    </h3>

                    <p style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .features-orbit-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .features-col-left,
          .features-col-right {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 600px) {
          .features-col-left,
          .features-col-right {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
