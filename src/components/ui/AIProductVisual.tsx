"use client";

import React, { useState, useEffect } from "react";
import AudioWaveformCanvas from "@/components/ui/AudioWaveformCanvas";
import {
  Phone,
  Mic,
  MicOff,
  Volume2,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Play,
  RotateCcw,
  Square,
  MessageSquare,
} from "lucide-react";

interface AIProductVisualProps {
  activePrompt?: string;
  className?: string;
}

export default function AIProductVisual({
  activePrompt = "Confirm COD Order #4829",
  className = "",
}: AIProductVisualProps) {
  const [isCalling, setIsCalling] = useState(true);
  const [callTimer, setCallTimer] = useState(14);
  const [activeStep, setActiveStep] = useState(0);

  const simulationDialogues = [
    {
      ai: "আসসালামু আলাইকুম! Shahi Goods থেকে সেলভ্যাক্স AI বলছি। আপনার #4829 লেদার জ্যাকেটের অর্ডারটি কনফার্ম করতে কল করেছি।",
      customer: "হ্যাঁ, আমি ধানমন্ডি রোড ২৭ এর ঠিকানায় নিতে চাই। ক্যাশ অন ডেলিভারি কনফার্ম করুন।",
      action: "Steadfast Courier: Consignment #ST-98214 Created ✓",
      tag: "COD ORDER CONFIRMATION",
    },
    {
      ai: "ঠিক আছে তানভীর ভাই! আপনার ডেলিভারি এড্রেস আপডেট করা হয়েছে এবং ট্র্যাকিং লিঙ্ক পাঠাচ্ছি।",
      customer: "ধন্যবাদ! বিকাশের মাধ্যমে অগ্রিম পেমেন্ট করার লিঙ্ক দেওয়া যাবে?",
      action: "bKash Token Generated & WhatsApp Receipt Dispatched ✓",
      tag: "PAYMENT LINK GENERATED",
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCalling) {
      interval = setInterval(() => {
        setCallTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCalling]);

  const toggleCall = () => {
    if (isCalling) {
      setIsCalling(false);
    } else {
      setIsCalling(true);
      setCallTimer(1);
    }
  };

  const currentDialogue = simulationDialogues[activeStep % simulationDialogues.length];

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div
      className={`relative w-full max-w-[500px] mx-auto perspective-container gpu-layer ${className}`}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "480px",
        perspective: "1400px",
      }}
    >
      {/* 3D Depth Layer 1: Ambient Warm Glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: "80%",
          height: "80%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, rgba(37, 99, 235, 0.1) 50%, transparent 75%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Floating Holographic Badge Top-Left */}
      <div
        style={{
          position: "absolute",
          top: "-14px",
          left: "-24px",
          zIndex: 5,
        }}
        className="floating-card-left"
      >
        <div
          className="glass-panel-card"
          style={{
            padding: "8px 14px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255, 255, 255, 0.95)",
            border: "1px solid rgba(37, 99, 235, 0.2)",
            boxShadow: "0 12px 28px -6px rgba(37, 99, 235, 0.15)",
          }}
        >
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "8px",
              backgroundColor: "rgba(37, 99, 235, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#2563EB",
            }}
          >
            <Zap size={16} />
          </div>
          <div>
            <div style={{ fontSize: "10px", color: "#64748B", fontWeight: 700, textTransform: "uppercase" }}>
              Voice Latency
            </div>
            <div style={{ fontSize: "12px", color: "#0F172A", fontWeight: 800 }}>
              &lt; 380ms Real-Time
            </div>
          </div>
        </div>
      </div>

      {/* Floating Holographic Badge Bottom-Right */}
      <div
        style={{
          position: "absolute",
          bottom: "18px",
          right: "-26px",
          zIndex: 5,
        }}
        className="floating-card-right"
      >
        <div
          className="glass-panel-card"
          style={{
            padding: "8px 14px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255, 255, 255, 0.95)",
            border: "1px solid rgba(249, 115, 22, 0.25)",
            boxShadow: "0 12px 28px -6px rgba(249, 115, 22, 0.18)",
          }}
        >
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "8px",
              backgroundColor: "rgba(249, 115, 22, 0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#EA580C",
            }}
          >
            <CheckCircle2 size={16} />
          </div>
          <div>
            <div style={{ fontSize: "10px", color: "#64748B", fontWeight: 700, textTransform: "uppercase" }}>
              Live Action
            </div>
            <div style={{ fontSize: "12px", color: "#0F172A", fontWeight: 800 }}>
              Courier API Synced ✓
            </div>
          </div>
        </div>
      </div>

      {/* Main Luxury Light 3D Phone Mockup Container */}
      <div
        id="hero-ai-interface-card"
        className="gpu-layer"
        style={{
          position: "relative",
          zIndex: 2,
          background: "linear-gradient(170deg, #FFFFFF 0%, #F8FAFC 100%)",
          borderRadius: "36px",
          border: "2px solid rgba(255, 255, 255, 0.9)",
          boxShadow:
            "0 30px 80px -15px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(15, 23, 42, 0.05), 0 4px 20px rgba(0,0,0,0.02)",
          padding: "24px 20px",
          overflow: "hidden",
        }}
      >
        {/* Status Bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: isCalling ? "#22C55E" : "#94A3B8",
                boxShadow: isCalling ? "0 0 8px #22C55E" : "none",
              }}
            />
            <span style={{ fontSize: "11px", fontWeight: 700, color: isCalling ? "#16A34A" : "#64748B", textTransform: "uppercase" }}>
              {isCalling ? "AI CALL ACTIVE" : "CALL READY"}
            </span>
          </div>

          <div
            style={{
              padding: "2px 10px",
              backgroundColor: "rgba(15, 23, 42, 0.05)",
              borderRadius: "9999px",
              fontSize: "11px",
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              color: "#334155",
            }}
          >
            {formatTime(callTimer)}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#64748B", fontSize: "11px" }}>
            <ShieldCheck size={14} color="#2563EB" />
            <span style={{ fontWeight: 600 }}>24kHz HD</span>
          </div>
        </div>

        {/* Central Animated AI Orb */}
        <div style={{ textAlign: "center", padding: "8px 0 14px 0", position: "relative" }}>
          <div
            style={{
              position: "relative",
              width: "90px",
              height: "90px",
              margin: "0 auto 12px auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Pulsing Aura Rings */}
            {isCalling && (
              <>
                <div
                  style={{
                    position: "absolute",
                    inset: "-8px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(249, 115, 22, 0.25) 0%, transparent 70%)",
                    animation: "pulseAura 3s infinite ease-in-out",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: "-16px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, transparent 70%)",
                    animation: "pulseAura 4s infinite ease-in-out 1s",
                  }}
                />
              </>
            )}

            {/* Core Neural Sphere */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #F97316 0%, #EA580C 40%, #2563EB 100%)",
                boxShadow: "0 10px 25px -4px rgba(249, 115, 22, 0.4), inset 0 2px 6px rgba(255, 255, 255, 0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%), linear-gradient(145deg, #FB923C, #1D4ED8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Sparkles size={28} color="#FFFFFF" />
              </div>
            </div>
          </div>

          <h4 style={{ fontSize: "16px", fontWeight: 800, color: "#0F172A", marginBottom: "1px" }}>
            Selorax Frontline Voice AI
          </h4>
          <p style={{ fontSize: "11px", color: "#64748B", fontWeight: 500 }}>
            Inbound Caller: Customer #4829 (Dhaka)
          </p>
        </div>

        {/* Real-time Waveform Visualizer */}
        <div
          style={{
            backgroundColor: "rgba(241, 245, 249, 0.8)",
            borderRadius: "16px",
            padding: "10px 14px",
            marginBottom: "14px",
            border: "1px solid rgba(15, 23, 42, 0.05)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", fontSize: "11px", color: "#64748B" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "#2563EB", fontWeight: 700 }}>
              <Volume2 size={13} /> {isCalling ? "AI Speaking" : "Call Paused"}
            </span>
            <span style={{ fontFamily: "var(--font-mono)", color: "#F97316", fontWeight: 600 }}>&lt; 380ms Latency</span>
          </div>

          <AudioWaveformCanvas active={isCalling} colorTheme="mixed" height={28} barCount={30} speed={1.1} />
        </div>

        {/* Live Conversation Dialogue Stream */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            padding: "12px 14px",
            border: "1px solid rgba(15, 23, 42, 0.06)",
            boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
            marginBottom: "14px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {/* AI Dialogue */}
          <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "#EA580C",
                color: "#FFFFFF",
                fontSize: "10px",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: "2px",
              }}
            >
              AI
            </div>
            <p style={{ fontSize: "12px", color: "#0F172A", lineHeight: 1.45, fontWeight: 500 }}>
              &ldquo;{currentDialogue.ai}&rdquo;
            </p>
          </div>

          {/* Customer Dialogue */}
          <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "#2563EB",
                color: "#FFFFFF",
                fontSize: "10px",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: "2px",
              }}
            >
              C
            </div>
            <p style={{ fontSize: "12px", color: "#475569", lineHeight: 1.45 }}>
              &ldquo;{currentDialogue.customer}&rdquo;
            </p>
          </div>
        </div>

        {/* Live Action Slip */}
        <div
          style={{
            padding: "8px 12px",
            borderRadius: "12px",
            backgroundColor: "rgba(34, 197, 94, 0.08)",
            border: "1px solid rgba(34, 197, 94, 0.25)",
            fontSize: "11px",
            color: "#166534",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "14px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <CheckCircle2 size={14} color="#16A34A" />
            <span>{currentDialogue.action}</span>
          </div>
        </div>

        {/* Interactive Talk Controller Bar inside Hero */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <button
            onClick={toggleCall}
            className={isCalling ? "btn btn-primary" : "btn btn-secondary"}
            style={{
              padding: "10px 14px",
              fontSize: "12px",
              fontWeight: 700,
              borderRadius: "12px",
            }}
          >
            {isCalling ? (
              <>
                <Square size={13} fill="#FFFFFF" />
                <span>Pause Call</span>
              </>
            ) : (
              <>
                <Play size={13} fill="#2563EB" color="#2563EB" />
                <span>Start Live Call</span>
              </>
            )}
          </button>

          <button
            onClick={() => setActiveStep((prev) => prev + 1)}
            className="btn btn-secondary"
            style={{
              padding: "10px 14px",
              fontSize: "12px",
              fontWeight: 700,
              borderRadius: "12px",
              color: "#2563EB",
            }}
          >
            <RotateCcw size={13} />
            <span>Next Scenario</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulseAura {
          0%, 100% {
            transform: scale(0.95);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.15);
            opacity: 1;
          }
        }
        @media (max-width: 640px) {
          .floating-card-left,
          .floating-card-right {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
