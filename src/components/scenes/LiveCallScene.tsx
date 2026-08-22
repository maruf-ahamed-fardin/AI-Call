"use client";

import React, { useState } from "react";
import AIWaveform from "@/components/ui/AIWaveform";
import {
  Sparkles,
  Phone,
  PhoneOff,
  Mic,
  Volume2,
  CheckCircle2,
  ArrowRight,
  Play,
} from "lucide-react";

export default function LiveCallScene() {
  const [callActive, setCallActive] = useState(true);
  const [activeTab, setActiveTab] = useState<"transcript" | "summary">("transcript");

  return (
    <section
      id="live-call"
      style={{
        position: "relative",
        padding: "120px 0 100px 0",
        backgroundColor: "rgba(248, 250, 252, 0.75)",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 5 }}>
        {/* Main 2-Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.35fr",
            gap: "54px",
            alignItems: "center",
          }}
          className="live-call-grid"
        >
          {/* Left Column: Headline & Action */}
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }} className="gpu-layer">
            <div>
              <span className="badge-eyebrow">
                <span className="badge-dot" />
                EXPERIENCE LIVE CALLING
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(36px, 4.4vw, 56px)",
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              See SeloraX AI Calling In Action
            </h2>

            <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.65 }}>
              Experience a real AI voice call with live transcription and real-time structured business insights.
            </p>

            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "14px", paddingTop: "6px" }}>
              <a
                href="https://wa.me/8801993213030?text=Hi%2C%20I%20want%20to%20test%20SeloraX%20AI%20live%20call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  padding: "14px 28px",
                  fontSize: "15px",
                  fontWeight: 700,
                }}
              >
                <span>Try Live Demo</span>
                <ArrowRight size={16} />
              </a>

              <button
                onClick={() => setCallActive(!callActive)}
                className="btn btn-secondary"
                style={{
                  padding: "14px 24px",
                  fontSize: "15px",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Play size={15} fill="#2563EB" color="#2563EB" />
                <span>{callActive ? "Pause Audio" : "Play Audio"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Live Call Experience Console Matching Reference */}
          <div
            className="glass-panel gpu-layer live-call-console-grid"
            style={{
              padding: "32px 28px",
              borderRadius: "32px",
              background: "#FFFFFF",
              border: "1.5px solid rgba(37, 99, 235, 0.2)",
              boxShadow: "0 25px 70px -15px rgba(15, 23, 42, 0.1), 0 0 0 1px rgba(37, 99, 235, 0.06)",
              display: "grid",
              gridTemplateColumns: "1fr 1.3fr",
              gap: "24px",
              alignItems: "center",
            }}
          >
            {/* Console Left: Avatar, Status & Waveform */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", paddingRight: "16px", borderRight: "1px solid rgba(15, 23, 42, 0.06)" }} className="console-caller-pane">
              {/* Avatar Ring */}
              <div
                style={{
                  width: "76px",
                  height: "76px",
                  borderRadius: "50%",
                  padding: "3px",
                  background: "linear-gradient(135deg, #F97316, #2563EB)",
                  marginBottom: "10px",
                  boxShadow: "0 8px 20px -4px rgba(37, 99, 235, 0.3)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: "radial-gradient(circle at 35% 35%, #93C5FD 0%, #3B82F6 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    fontWeight: 800,
                    fontSize: "22px",
                  }}
                >
                  SA
                </div>
              </div>

              <div style={{ fontSize: "12px", color: "#16A34A", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px", marginBottom: "2px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#22C55E" }} />
                Call Connected
              </div>

              <div style={{ fontSize: "16px", fontWeight: 800, color: "#0F172A", marginBottom: "2px" }}>
                Sarah Ahmed
              </div>

              <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "#2563EB", fontWeight: 700, marginBottom: "12px" }}>
                00:42
              </div>

              {/* Waveform */}
              <div style={{ marginBottom: "16px" }}>
                <AIWaveform active={callActive} barCount={20} colorTheme="blue" height={26} />
              </div>

              {/* Controls */}
              <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748B" }}>
                  <Mic size={15} />
                </div>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#EF4444", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF" }}>
                  <PhoneOff size={15} />
                </div>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748B" }}>
                  <Volume2 size={15} />
                </div>
              </div>
            </div>

            {/* Console Right: Live Transcript & Summary Feed */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {/* Tab Selector */}
              <div style={{ display: "flex", gap: "8px", borderBottom: "1px solid rgba(15, 23, 42, 0.06)", paddingBottom: "8px" }}>
                <button
                  onClick={() => setActiveTab("transcript")}
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "12px",
                    fontWeight: 700,
                    backgroundColor: activeTab === "transcript" ? "rgba(37, 99, 235, 0.1)" : "transparent",
                    color: activeTab === "transcript" ? "#2563EB" : "#64748B",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  ● Live Transcript
                </button>

                <button
                  onClick={() => setActiveTab("summary")}
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "12px",
                    fontWeight: 700,
                    backgroundColor: activeTab === "summary" ? "rgba(37, 99, 235, 0.1)" : "transparent",
                    color: activeTab === "summary" ? "#2563EB" : "#64748B",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Summary
                </button>
              </div>

              {/* Transcript Bubbles */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxHeight: "220px" }}>
                {/* AI Msg */}
                <div style={{ padding: "10px 12px", backgroundColor: "#EFF6FF", borderRadius: "12px", border: "1px solid rgba(37, 99, 235, 0.15)" }}>
                  <div style={{ fontSize: "10px", fontWeight: 700, color: "#2563EB", textTransform: "uppercase", marginBottom: "2px" }}>
                    AI Voice
                  </div>
                  <div style={{ fontSize: "12px", color: "#0F172A", lineHeight: 1.4 }}>
                    Hi, how can I help you today?
                  </div>
                </div>

                {/* Customer Msg */}
                <div style={{ padding: "10px 12px", backgroundColor: "#F8FAFC", borderRadius: "12px", border: "1px solid rgba(15, 23, 42, 0.06)" }}>
                  <div style={{ fontSize: "10px", fontWeight: 700, color: "#64748B", textTransform: "uppercase", marginBottom: "2px" }}>
                    Customer • 00:12
                  </div>
                  <div style={{ fontSize: "12px", color: "#334155", lineHeight: 1.4 }}>
                    I want to know more about your pricing plans.
                  </div>
                </div>

                {/* AI Response */}
                <div style={{ padding: "10px 12px", backgroundColor: "#EFF6FF", borderRadius: "12px", border: "1px solid rgba(37, 99, 235, 0.15)" }}>
                  <div style={{ fontSize: "10px", fontWeight: 700, color: "#2563EB", textTransform: "uppercase", marginBottom: "2px" }}>
                    AI Voice
                  </div>
                  <div style={{ fontSize: "12px", color: "#0F172A", lineHeight: 1.4 }}>
                    Absolutely, let me help you with that. We offer flexible tiers starting at $49/mo.
                  </div>
                </div>
              </div>

              {/* Call Summary Pill */}
              <div style={{ padding: "10px 12px", backgroundColor: "#F0FDF4", borderRadius: "12px", border: "1px solid rgba(34, 197, 94, 0.25)", fontSize: "11px", color: "#166534" }}>
                <div style={{ fontWeight: 700, marginBottom: "2px" }}>Call Summary:</div>
                <div>Lead: <strong>Qualified</strong> • Intent: <strong>Pricing</strong> • Next: <strong>Send Proposal</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .live-call-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .live-call-console-grid {
            grid-template-columns: 1fr !important;
          }
          .console-caller-pane {
            border-right: none !important;
            border-bottom: 1px solid rgba(15, 23, 42, 0.06) !important;
            padding-right: 0 !important;
            padding-bottom: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
