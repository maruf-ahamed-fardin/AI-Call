"use client";

import React, { useState } from "react";
import {
  UserCheck,
  CloudUpload,
  PhoneCall,
  TrendingUp,
  FileText,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import AIWaveform from "@/components/ui/AIWaveform";

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  accent: "orange" | "blue";
}

const steps: ProcessStep[] = [
  {
    num: "01",
    title: "Create Your Agent",
    desc: "Build your AI agent in minutes.",
    icon: <UserCheck size={22} />,
    accent: "orange",
  },
  {
    num: "02",
    title: "Upload Knowledge",
    desc: "Add your docs, FAQs or website.",
    icon: <CloudUpload size={22} />,
    accent: "blue",
  },
  {
    num: "03",
    title: "Start Calling",
    desc: "Your agent calls, talks, and engages.",
    icon: <PhoneCall size={22} />,
    accent: "orange",
  },
  {
    num: "04",
    title: "Get Results",
    desc: "Receive insights and grow your business.",
    icon: <TrendingUp size={22} />,
    accent: "blue",
  },
];

export default function ProcessScene() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="how-it-works"
      style={{
        position: "relative",
        padding: "120px 0 100px 0",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 5 }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 60px auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
            <span className="badge-eyebrow">
              <span className="badge-dot" />
              HOW IT WORKS
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
            Set Up. Let AI Handle the Rest.
          </h2>
        </div>

        {/* 4-Step Connected Horizontal Timeline Bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            marginBottom: "64px",
            position: "relative",
          }}
          className="process-steps-grid"
        >
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            const isOrange = step.accent === "orange";
            const iconBg = isOrange ? "rgba(249, 115, 22, 0.1)" : "rgba(37, 99, 235, 0.1)";
            const iconColor = isOrange ? "#EA580C" : "#2563EB";

            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className="glass-panel-card gpu-layer"
                style={{
                  padding: "24px 20px",
                  borderRadius: "22px",
                  backgroundColor: isSelected ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.75)",
                  border: isSelected
                    ? `1.5px solid ${isOrange ? "rgba(249, 115, 22, 0.4)" : "rgba(37, 99, 235, 0.4)"}`
                    : "1px solid rgba(15, 23, 42, 0.06)",
                  boxShadow: isSelected
                    ? `0 14px 32px -6px ${isOrange ? "rgba(249, 115, 22, 0.15)" : "rgba(37, 99, 235, 0.15)"}`
                    : "0 4px 16px rgba(0,0,0,0.02)",
                  transform: isSelected ? "translateY(-4px)" : "translateY(0)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {/* Icon Circle */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: iconBg,
                    color: iconColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px",
                    boxShadow: isSelected ? `0 0 16px ${iconBg}` : "none",
                  }}
                >
                  {step.icon}
                </div>

                <div
                  style={{
                    fontSize: "11px",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    color: iconColor,
                    marginBottom: "4px",
                  }}
                >
                  {step.num}
                </div>

                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0F172A", marginBottom: "6px" }}>
                  {step.title}
                </h3>

                <p style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.45 }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 3D Layered Cascade Cards Preview Matching Reference Image */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            perspective: "1200px",
            gap: "24px",
            flexWrap: "wrap",
          }}
          className="process-cascade-container gpu-layer"
        >
          {/* Card 1: Knowledge Ingestion */}
          <div
            className="glass-panel gpu-layer"
            style={{
              width: "260px",
              padding: "24px 20px",
              borderRadius: "24px",
              background: "#FFFFFF",
              border: "1px solid rgba(15, 23, 42, 0.08)",
              boxShadow: "0 18px 45px -10px rgba(15, 23, 42, 0.08)",
              transform: "rotateY(10deg) scale(0.96)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "8px", backgroundColor: "rgba(37, 99, 235, 0.1)", color: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CloudUpload size={16} />
              </div>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#0F172A" }}>Upload Knowledge</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "11px", color: "#64748B" }}>
              <div style={{ padding: "8px", backgroundColor: "#F8FAFC", borderRadius: "8px", border: "1px solid rgba(15, 23, 42, 0.04)" }}>
                📄 Product_Catalog_2026.pdf ✓
              </div>
              <div style={{ padding: "8px", backgroundColor: "#F8FAFC", borderRadius: "8px", border: "1px solid rgba(15, 23, 42, 0.04)" }}>
                🌐 https://shahi-goods.com/faqs ✓
              </div>
            </div>
          </div>

          {/* Card 2: Central AI Phone Visual */}
          <div
            className="glass-panel gpu-layer"
            style={{
              width: "280px",
              padding: "24px 20px",
              borderRadius: "28px",
              background: "#FFFFFF",
              border: "1.5px solid rgba(37, 99, 235, 0.3)",
              boxShadow: "0 25px 60px -12px rgba(37, 99, 235, 0.18)",
              zIndex: 3,
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "12px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", margin: "0 auto 8px auto", background: "linear-gradient(135deg, #F97316, #2563EB)", padding: "3px" }}>
                <div style={{ width: "100%", height: "100%", borderRadius: "50%", backgroundColor: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563EB", fontWeight: 800 }}>
                  SA
                </div>
              </div>
              <div style={{ fontSize: "14px", fontWeight: 800, color: "#0F172A" }}>AI Calling...</div>
              <div style={{ fontSize: "11px", color: "#2563EB", fontWeight: 700, fontFamily: "var(--font-mono)" }}>00:42</div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
              <AIWaveform active={true} barCount={20} colorTheme="blue" height={26} />
            </div>

            <div style={{ padding: "8px 12px", backgroundColor: "#EFF6FF", borderRadius: "10px", fontSize: "11px", color: "#1E40AF", fontWeight: 600, textAlign: "center" }}>
              &ldquo;Order #4829 Confirmed!&rdquo;
            </div>
          </div>

          {/* Card 3: Growth & Analytics Results */}
          <div
            className="glass-panel gpu-layer"
            style={{
              width: "260px",
              padding: "24px 20px",
              borderRadius: "24px",
              background: "#FFFFFF",
              border: "1px solid rgba(15, 23, 42, 0.08)",
              boxShadow: "0 18px 45px -10px rgba(15, 23, 42, 0.08)",
              transform: "rotateY(-10deg) scale(0.96)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "8px", backgroundColor: "rgba(249, 115, 22, 0.1)", color: "#EA580C", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <TrendingUp size={16} />
              </div>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#0F172A" }}>Get Results</span>
            </div>

            <div style={{ fontSize: "24px", fontWeight: 900, color: "#16A34A", marginBottom: "2px" }}>
              +280%
            </div>
            <div style={{ fontSize: "11px", color: "#64748B", fontWeight: 500, marginBottom: "12px" }}>
              Lead conversion rate increase
            </div>

            <div style={{ height: "40px", backgroundColor: "#F8FAFC", borderRadius: "8px", display: "flex", alignItems: "flex-end", gap: "4px", padding: "6px" }}>
              <div style={{ flex: 1, height: "30%", backgroundColor: "#93C5FD", borderRadius: "2px" }} />
              <div style={{ flex: 1, height: "50%", backgroundColor: "#60A5FA", borderRadius: "2px" }} />
              <div style={{ flex: 1, height: "70%", backgroundColor: "#3B82F6", borderRadius: "2px" }} />
              <div style={{ flex: 1, height: "95%", backgroundColor: "#F97316", borderRadius: "2px" }} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .process-steps-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 16px !important;
          }
          .process-cascade-container {
            flex-direction: column !important;
          }
        }
        @media (max-width: 540px) {
          .process-steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
