"use client";

import React, { useState } from "react";
import AIWaveform from "@/components/ui/AIWaveform";
import AvatarVisual from "@/components/ui/AvatarVisual";
import {
  Sparkles,
  Phone,
  PhoneOff,
  Mic,
  MicOff,
  Volume2,
  CheckCircle2,
  ArrowRight,
  Play,
  FileText,
} from "lucide-react";

export default function LiveCallScene() {
  const [callActive, setCallActive] = useState(true);
  const [activeTab, setActiveTab] = useState<"transcript" | "summary">("transcript");
  const [isMuted, setIsMuted] = useState(false);

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
              Experience a real AI voice call with live transcription and insights.
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
                <span>Watch Full Demo</span>
              </button>
            </div>
          </div>

          {/* Right Column: Live Call Studio Console Matching Reference */}
          <div
            className="glass-panel gpu-layer live-call-console-grid"
            style={{
              padding: "32px 28px",
              borderRadius: "32px",
              background: "#FFFFFF",
              border: "1.5px solid rgba(37, 99, 235, 0.2)",
              boxShadow: "0 25px 70px -15px rgba(15, 23, 42, 0.1), 0 0 0 1px rgba(37, 99, 235, 0.06)",
              display: "grid",
              gridTemplateColumns: "1fr 1.35fr",
              gap: "26px",
              alignItems: "center",
            }}
          >
            {/* Center Sub-card: Avatar, Connected Status, Waveform & Controls */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                paddingRight: "18px",
                borderRight: "1px solid rgba(15, 23, 42, 0.08)",
              }}
              className="console-caller-pane"
            >
              {/* Avatar with Glow Ring */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  padding: "3px",
                  background: "linear-gradient(135deg, #F97316 0%, #2563EB 100%)",
                  marginBottom: "12px",
                  boxShadow: "0 10px 25px -4px rgba(37, 99, 235, 0.25)",
                }}
              >
                <AvatarVisual variant="sarah" size={74} />
              </div>

              <div style={{ fontSize: "12px", color: "#16A34A", fontWeight: 700, display: "flex", alignItems: "center", gap: "5px", marginBottom: "2px" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#22C55E" }} />
                Call Connected
              </div>

              <div style={{ fontSize: "17px", fontWeight: 800, color: "#0F172A", marginBottom: "2px" }}>
                Sarah Ahmed
              </div>

              <div style={{ fontSize: "13px", fontFamily: "var(--font-mono)", color: "#2563EB", fontWeight: 800, marginBottom: "14px" }}>
                00:42
              </div>

              {/* Real-time Waveform */}
              <div style={{ marginBottom: "16px" }}>
                <AIWaveform active={callActive} barCount={22} colorTheme="blue" height={28} />
              </div>

              {/* Call Controls */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  aria-label="Mute mic"
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    backgroundColor: isMuted ? "#F1F5F9" : "rgba(15, 23, 42, 0.05)",
                    color: isMuted ? "#EA580C" : "#64748B",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  {isMuted ? <MicOff size={16} /> : <Mic size={16} />}
                </button>

                <button
                  onClick={() => setCallActive(!callActive)}
                  aria-label="Toggle Call"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    backgroundColor: callActive ? "#EF4444" : "#F97316",
                    color: "#FFFFFF",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 6px 16px rgba(239, 68, 68, 0.3)",
                  }}
                >
                  {callActive ? <PhoneOff size={18} /> : <Play size={18} fill="#FFFFFF" />}
                </button>

                <button
                  aria-label="Speaker"
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(15, 23, 42, 0.05)",
                    color: "#64748B",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <Volume2 size={16} />
                </button>
              </div>
            </div>

            {/* Right Sub-card: Live Transcript Feed & Summary */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {/* Tab Selector */}
              <div style={{ display: "flex", gap: "8px", borderBottom: "1px solid rgba(15, 23, 42, 0.06)", paddingBottom: "8px" }}>
                <button
                  onClick={() => setActiveTab("transcript")}
                  style={{
                    padding: "5px 12px",
                    borderRadius: "8px",
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
                    padding: "5px 12px",
                    borderRadius: "8px",
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

              {/* Transcript Dialogue Stream */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", minHeight: "180px" }}>
                {activeTab === "transcript" ? (
                  <>
                    {/* AI Bubble */}
                    <div style={{ padding: "10px 14px", backgroundColor: "#EFF6FF", borderRadius: "14px", border: "1px solid rgba(37, 99, 235, 0.15)" }}>
                      <div style={{ fontSize: "10px", fontWeight: 700, color: "#2563EB", textTransform: "uppercase", marginBottom: "2px" }}>
                        AI Voice
                      </div>
                      <div style={{ fontSize: "13px", color: "#0F172A", lineHeight: 1.45, fontWeight: 500 }}>
                        Hi, how can I help you today?
                      </div>
                    </div>

                    {/* Customer Bubble */}
                    <div style={{ padding: "10px 14px", backgroundColor: "#F8FAFC", borderRadius: "14px", border: "1px solid rgba(15, 23, 42, 0.06)" }}>
                      <div style={{ fontSize: "10px", fontWeight: 700, color: "#64748B", textTransform: "uppercase", marginBottom: "2px" }}>
                        Customer • 00:12
                      </div>
                      <div style={{ fontSize: "13px", color: "#334155", lineHeight: 1.45 }}>
                        I want to know more about your pricing.
                      </div>
                    </div>

                    {/* AI Response Bubble */}
                    <div style={{ padding: "10px 14px", backgroundColor: "#EFF6FF", borderRadius: "14px", border: "1px solid rgba(37, 99, 235, 0.15)" }}>
                      <div style={{ fontSize: "10px", fontWeight: 700, color: "#2563EB", textTransform: "uppercase", marginBottom: "2px" }}>
                        AI Voice
                      </div>
                      <div style={{ fontSize: "13px", color: "#0F172A", lineHeight: 1.45, fontWeight: 500 }}>
                        Absolutely, let me help you with that.
                      </div>
                    </div>
                  </>
                ) : (
                  <div style={{ padding: "14px", backgroundColor: "#F8FAFC", borderRadius: "14px", border: "1px solid rgba(15, 23, 42, 0.06)", display: "flex", flexDirection: "column", gap: "8px", fontSize: "12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#64748B" }}>Caller:</span>
                      <strong style={{ color: "#0F172A" }}>Sarah Ahmed</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#64748B" }}>Duration:</span>
                      <span style={{ color: "#2563EB", fontWeight: 700 }}>00:42 mins</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#64748B" }}>Lead Score:</span>
                      <span style={{ color: "#16A34A", fontWeight: 700 }}>98/100 (Hot Lead)</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Call Summary Card at bottom matching reference */}
              <div
                style={{
                  padding: "10px 14px",
                  backgroundColor: "#F0FDF4",
                  borderRadius: "14px",
                  border: "1px solid rgba(34, 197, 94, 0.25)",
                  fontSize: "11px",
                  color: "#166534",
                }}
              >
                <div style={{ fontWeight: 800, marginBottom: "3px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  Call Summary
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span>● Lead: <strong>Qualified</strong></span>
                  <span>● Intent: <strong>Pricing</strong></span>
                  <span>● Next Action: <strong>Send Proposal</strong></span>
                </div>
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
            border-bottom: 1px solid rgba(15, 23, 42, 0.08) !important;
            padding-right: 0 !important;
            padding-bottom: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
