"use client";

import React, { useState } from "react";
import AudioWaveformCanvas from "@/components/ui/AudioWaveformCanvas";
import {
  Mic,
  Volume2,
  Play,
  Pause,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface VoicePersona {
  id: string;
  name: string;
  dialect: string;
  sampleText: string;
  latency: string;
  accent: "orange" | "blue" | "emerald";
}

const voicePersonas: VoicePersona[] = [
  {
    id: "v1",
    name: "Ayesha (Standard Bangla)",
    dialect: "Dhaka Standard (মার্জিত শুদ্ধ বাংলা)",
    sampleText: "আসসালামু আলাইকুম! Shahi Goods থেকে সেলভ্যাক্স AI বলছি। আপনার অর্ডারটি নিশ্চিত করতে কল করেছি।",
    latency: "360ms",
    accent: "orange",
  },
  {
    id: "v2",
    name: "Rahim (Sylheti Dialect)",
    dialect: "Sylheti Regional (সিলেটি উপভাষা)",
    sampleText: "আসসালামু আলাইকুম ভাই! আপনার পার্সেলখান রেডএক্স কুরিয়ার দিয়া পাঠাই দেওয়া অইছে।",
    latency: "375ms",
    accent: "blue",
  },
  {
    id: "v3",
    name: "Tanjina (Chatgaiya Dialect)",
    dialect: "Chittagonian (চাটগাঁইয়া ভাষা)",
    sampleText: "অনর পার্সেলখান রেডএক্স কুরিয়ারত বুকিং গইজ্জি, আইবাইল্লা অনর ঠিকানাত পউছি যাইবৌ।",
    latency: "385ms",
    accent: "orange",
  },
  {
    id: "v4",
    name: "Elena (US English Global)",
    dialect: "English (US Professional)",
    sampleText: "Hello! This is Selorax AI confirming your leather jacket shipment. It will arrive tomorrow afternoon.",
    latency: "340ms",
    accent: "emerald",
  },
];

export default function VoiceMatrixScene() {
  const [selectedVoice, setSelectedVoice] = useState<VoicePersona>(voicePersonas[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speechSpeed, setSpeechSpeed] = useState(1.0);
  const [emotionTone, setEmotionTone] = useState<"Empathetic" | "Energetic" | "Formal">("Empathetic");

  return (
    <section
      id="voice-matrix"
      style={{
        position: "relative",
        padding: "120px 0 100px 0",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 5 }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 60px auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "14px" }}>
            <span className="badge-eyebrow">
              <span className="badge-dot" />
              GLOBAL VOICE & MULTI-DIALECT ENGINE
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(34px, 4.2vw, 52px)",
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.12,
              marginBottom: "16px",
              letterSpacing: "-0.03em",
            }}
          >
            Human Speech in Every Dialect & Accent
          </h2>

          <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.6 }}>
            Switch between authentic regional Bengali accents and international global languages with sub-380ms neural synthesis.
          </p>
        </div>

        {/* Interactive Voice Studio Matrix */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "40px",
            alignItems: "center",
          }}
          className="voice-matrix-grid"
        >
          {/* Left Column: Voice Personas List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {voicePersonas.map((v) => {
              const isSelected = selectedVoice.id === v.id;
              const isOrange = v.accent === "orange";
              const isEmerald = v.accent === "emerald";
              const accentColor = isOrange ? "#EA580C" : isEmerald ? "#10B981" : "#2563EB";

              return (
                <div
                  key={v.id}
                  onClick={() => {
                    setSelectedVoice(v);
                    setIsPlaying(true);
                  }}
                  className="gpu-layer"
                  style={{
                    padding: "18px 22px",
                    borderRadius: "18px",
                    backgroundColor: isSelected ? "rgba(239, 246, 255, 0.9)" : "#FAFAF9",
                    border: isSelected ? `1.5px solid ${accentColor}` : "1px solid rgba(15, 23, 42, 0.06)",
                    boxShadow: isSelected ? "0 8px 24px -4px rgba(37, 99, 235, 0.12)" : "none",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "12px",
                        backgroundColor: isSelected ? "rgba(37, 99, 235, 0.12)" : "rgba(15, 23, 42, 0.05)",
                        color: isSelected ? accentColor : "#64748B",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Mic size={18} />
                    </div>

                    <div>
                      <div style={{ fontSize: "15px", fontWeight: 700, color: "#0F172A" }}>
                        {v.name}
                      </div>
                      <div style={{ fontSize: "12px", color: "#64748B" }}>
                        {v.dialect}
                      </div>
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: "11px",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      color: isSelected ? accentColor : "#94A3B8",
                      backgroundColor: isSelected ? "rgba(255, 255, 255, 0.8)" : "transparent",
                      padding: "3px 8px",
                      borderRadius: "6px",
                    }}
                  >
                    {v.latency}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Playback Console */}
          <div
            className="glass-panel gpu-layer"
            style={{
              padding: "32px 28px",
              borderRadius: "26px",
              background: "linear-gradient(170deg, #FFFFFF 0%, #F8FAFC 100%)",
              border: "1px solid rgba(37, 99, 235, 0.2)",
              boxShadow: "0 20px 50px -10px rgba(15, 23, 42, 0.08)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "16px", borderBottom: "1px solid rgba(15, 23, 42, 0.06)" }}>
              <div>
                <div style={{ fontSize: "17px", fontWeight: 800, color: "#0F172A" }}>
                  {selectedVoice.name}
                </div>
                <div style={{ fontSize: "12px", color: "#2563EB", fontWeight: 600 }}>
                  {selectedVoice.dialect}
                </div>
              </div>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: isPlaying ? "#F97316" : "#2563EB",
                  color: "#FFFFFF",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(249, 115, 22, 0.35)",
                  transition: "all 0.2s ease",
                }}
              >
                {isPlaying ? <Pause size={18} fill="#FFFFFF" /> : <Play size={18} fill="#FFFFFF" style={{ marginLeft: "2px" }} />}
              </button>
            </div>

            {/* Audio Waveform Canvas */}
            <div style={{ padding: "14px", backgroundColor: "#F8FAFC", borderRadius: "16px", border: "1px solid rgba(15, 23, 42, 0.05)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", fontSize: "11px", color: "#64748B" }}>
                <span>NEURAL SPEECH STREAM</span>
                <span style={{ fontFamily: "var(--font-mono)", color: "#16A34A", fontWeight: 600 }}>24.0 kHz Studio HD</span>
              </div>
              <AudioWaveformCanvas active={isPlaying} colorTheme={selectedVoice.accent === "orange" ? "orange" : "blue"} height={34} barCount={38} speed={speechSpeed * 1.1} />
            </div>

            {/* Spoken Text Quote */}
            <div style={{ padding: "16px 18px", backgroundColor: "#FFFFFF", borderRadius: "16px", border: "1px solid rgba(15, 23, 42, 0.06)", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
              <div style={{ fontSize: "11px", color: "#94A3B8", fontWeight: 700, textTransform: "uppercase", marginBottom: "4px" }}>
                Spoken Dialogue:
              </div>
              <p style={{ fontSize: "14px", color: "#0F172A", lineHeight: 1.5, fontWeight: 500 }}>
                &ldquo;{selectedVoice.sampleText}&rdquo;
              </p>
            </div>

            {/* Tone & Speed Tuning Controls */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              <div>
                <div style={{ fontSize: "11px", color: "#64748B", fontWeight: 600, marginBottom: "6px" }}>
                  EMOTION / TONE
                </div>
                <div style={{ display: "flex", gap: "4px" }}>
                  {(["Empathetic", "Energetic", "Formal"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setEmotionTone(t)}
                      style={{
                        flex: 1,
                        padding: "6px 0",
                        borderRadius: "8px",
                        fontSize: "11px",
                        fontWeight: 600,
                        backgroundColor: emotionTone === t ? "rgba(37, 99, 235, 0.1)" : "rgba(15, 23, 42, 0.04)",
                        border: emotionTone === t ? "1px solid rgba(37, 99, 235, 0.3)" : "1px solid rgba(15, 23, 42, 0.06)",
                        color: emotionTone === t ? "#2563EB" : "#64748B",
                        cursor: "pointer",
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontSize: "11px", color: "#64748B", fontWeight: 600, marginBottom: "6px", display: "flex", justifyContent: "space-between" }}>
                  <span>SPEECH SPEED</span>
                  <span style={{ color: "#2563EB", fontWeight: 700 }}>{speechSpeed.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="0.8"
                  max="1.4"
                  step="0.1"
                  value={speechSpeed}
                  onChange={(e) => setSpeechSpeed(parseFloat(e.target.value))}
                  style={{
                    width: "100%",
                    accentColor: "#2563EB",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .voice-matrix-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
