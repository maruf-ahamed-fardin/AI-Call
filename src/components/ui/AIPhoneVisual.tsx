"use client";

import React, { useState, useEffect } from "react";
import AIWaveform from "@/components/ui/AIWaveform";
import {
  Mic,
  MicOff,
  PhoneOff,
  Volume2,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  MessageSquare,
  Shield,
  Activity,
  Play,
} from "lucide-react";

interface AIPhoneVisualProps {
  stage?: "hero" | "features" | "livecall" | "cta";
  callerName?: string;
  callTimerSecs?: number;
  activeFeatureIndex?: number;
  className?: string;
  isCalling?: boolean;
}

export default function AIPhoneVisual({
  stage = "hero",
  callerName = "Sarah Ahmed",
  callTimerSecs = 24,
  activeFeatureIndex = 0,
  className = "",
  isCalling = true,
}: AIPhoneVisualProps) {
  const [timer, setTimer] = useState(callTimerSecs);
  const [isMuted, setIsMuted] = useState(false);
  const [activeCall, setActiveCall] = useState(isCalling);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (activeCall) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [activeCall]);

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div
      className={`relative w-full max-w-[460px] mx-auto perspective-container gpu-layer ${className}`}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "460px",
        perspective: "1400px",
      }}
    >
      {/* 3D Floating Glass Sphere - Top Right */}
      <div
        className="glass-sphere"
        style={{
          width: "36px",
          height: "36px",
          top: "-20px",
          right: "-15px",
        }}
      />

      {/* 3D Floating Glass Sphere - Mid Left */}
      <div
        className="glass-sphere glass-sphere-orange"
        style={{
          width: "24px",
          height: "24px",
          bottom: "35%",
          left: "-35px",
        }}
      />

      {/* 3D Floating Glass Sphere - Bottom Right */}
      <div
        className="glass-sphere"
        style={{
          width: "48px",
          height: "48px",
          bottom: "-25px",
          right: "-20px",
        }}
      />

      {/* Floating Speech Bubble 1 - Top Left */}
      <div
        className="floating-bubble-top-left gpu-layer"
        style={{
          position: "absolute",
          top: "12%",
          left: "-55px",
          zIndex: 6,
          maxWidth: "180px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            padding: "8px 14px",
            borderRadius: "16px",
            border: "1px solid rgba(37, 99, 235, 0.15)",
            boxShadow: "0 10px 25px -4px rgba(15, 23, 42, 0.08)",
            fontSize: "12px",
            fontWeight: 600,
            color: "#0F172A",
            lineHeight: 1.35,
          }}
        >
          <span>Hello! I&apos;m your AI calling assistant.</span>
        </div>
      </div>

      {/* Floating Speech Bubble 2 - Mid Left */}
      <div
        className="floating-bubble-mid-left gpu-layer"
        style={{
          position: "absolute",
          top: "34%",
          left: "-40px",
          zIndex: 6,
          maxWidth: "160px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            padding: "8px 14px",
            borderRadius: "16px",
            border: "1px solid rgba(249, 115, 22, 0.2)",
            boxShadow: "0 10px 25px -4px rgba(249, 115, 22, 0.1)",
            fontSize: "12px",
            fontWeight: 600,
            color: "#2563EB",
            lineHeight: 1.35,
          }}
        >
          <span>How can I help you today?</span>
        </div>
      </div>

      {/* Floating Card 1 - Top Right (Live Call Status) */}
      <div
        className="floating-card-top-right gpu-layer"
        style={{
          position: "absolute",
          top: "6%",
          right: "-48px",
          zIndex: 6,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            padding: "10px 16px",
            borderRadius: "18px",
            border: "1px solid rgba(37, 99, 235, 0.18)",
            boxShadow: "0 14px 30px -6px rgba(37, 99, 235, 0.15)",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: activeCall ? "#22C55E" : "#94A3B8",
                boxShadow: activeCall ? "0 0 8px #22C55E" : "none",
              }}
            />
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#0F172A", textTransform: "uppercase" }}>
              Live Call
            </span>
          </div>
          <div style={{ fontSize: "14px", fontFamily: "var(--font-mono)", fontWeight: 800, color: "#2563EB" }}>
            {formatTimer(timer)}
          </div>
          <div style={{ fontSize: "10px", color: "#64748B", fontWeight: 500 }}>
            {activeCall ? "Speaking..." : "Paused"}
          </div>
        </div>
      </div>

      {/* Floating Card 2 - Mid Right (Call Insights) */}
      <div
        className="floating-card-mid-right gpu-layer"
        style={{
          position: "absolute",
          top: "32%",
          right: "-65px",
          zIndex: 6,
          width: "175px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            padding: "12px 14px",
            borderRadius: "18px",
            border: "1px solid rgba(15, 23, 42, 0.08)",
            boxShadow: "0 16px 35px -8px rgba(15, 23, 42, 0.08)",
          }}
        >
          <div style={{ fontSize: "10px", fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>
            Call Insights
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "11px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#64748B" }}>Contact:</span>
              <strong style={{ color: "#0F172A" }}>{callerName}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#64748B" }}>Status:</span>
              <span style={{ color: "#16A34A", fontWeight: 700, backgroundColor: "rgba(34, 197, 94, 0.1)", padding: "1px 6px", borderRadius: "4px" }}>
                Qualified
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#64748B" }}>Intent:</span>
              <strong style={{ color: "#2563EB" }}>Pricing</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Card 3 - Bottom Right (Conversation Quality) */}
      <div
        className="floating-card-bottom-right gpu-layer"
        style={{
          position: "absolute",
          bottom: "12%",
          right: "-50px",
          zIndex: 6,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            padding: "10px 14px",
            borderRadius: "18px",
            border: "1px solid rgba(16, 185, 129, 0.25)",
            boxShadow: "0 14px 30px -6px rgba(16, 185, 129, 0.15)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "10px",
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              color: "#10B981",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TrendingUp size={18} />
          </div>

          <div>
            <div style={{ fontSize: "10px", color: "#64748B", fontWeight: 600 }}>Conversation Quality</div>
            <div style={{ fontSize: "15px", fontWeight: 900, color: "#0F172A" }}>98%</div>
          </div>
        </div>
      </div>

      {/* Central 3D iPhone Frame (White / Silver Luxury Bezel) */}
      <div
        id="hero-phone-body"
        className="gpu-layer"
        style={{
          position: "relative",
          zIndex: 4,
          margin: "0 auto",
          width: "280px",
          minHeight: "540px",
          background: "#FFFFFF",
          borderRadius: "44px",
          border: "8px solid #F1F5F9",
          outline: "1px solid rgba(15, 23, 42, 0.08)",
          boxShadow:
            "0 30px 80px -15px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(15, 23, 42, 0.04), 0 10px 25px -5px rgba(37, 99, 235, 0.06)",
          padding: "20px 16px 24px 16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        {/* Dynamic Island Notch */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80px",
            height: "18px",
            backgroundColor: "#0F172A",
            borderRadius: "20px",
            zIndex: 10,
          }}
        />

        {/* Phone Header / Status Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "16px",
            padding: "0 6px",
          }}
        >
          <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", fontWeight: 700, color: "#0F172A" }}>
            9:41
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <span style={{ fontSize: "10px", fontWeight: 700, color: "#2563EB", backgroundColor: "rgba(37, 99, 235, 0.08)", padding: "2px 6px", borderRadius: "6px" }}>
              5G HD
            </span>
          </div>
        </div>

        {/* Central Calling Body */}
        <div style={{ textAlign: "center", padding: "16px 0", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {/* Avatar Ring */}
          <div
            style={{
              position: "relative",
              width: "88px",
              height: "88px",
              margin: "0 auto 14px auto",
              borderRadius: "50%",
              padding: "4px",
              background: "linear-gradient(135deg, #F97316 0%, #2563EB 100%)",
              boxShadow: "0 10px 25px -4px rgba(37, 99, 235, 0.25)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Illustrated Persona Avatar */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "radial-gradient(circle at 35% 35%, #93C5FD 0%, #3B82F6 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontWeight: 800,
                  fontSize: "26px",
                }}
              >
                SA
              </div>
            </div>
          </div>

          {/* Caller Details */}
          <h4 style={{ fontSize: "17px", fontWeight: 800, color: "#0F172A", marginBottom: "2px" }}>
            {callerName}
          </h4>

          <div style={{ fontSize: "11px", color: "#64748B", fontWeight: 600, marginBottom: "8px" }}>
            {activeCall ? "AI Calling..." : "Call Ready"}
          </div>

          <div
            style={{
              fontSize: "13px",
              fontFamily: "var(--font-mono)",
              fontWeight: 800,
              color: "#2563EB",
              backgroundColor: "rgba(37, 99, 235, 0.06)",
              padding: "3px 12px",
              borderRadius: "9999px",
              display: "inline-block",
              margin: "0 auto 16px auto",
            }}
          >
            {formatTimer(timer)}
          </div>

          {/* Central Live Waveform */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px 0",
            }}
          >
            <AIWaveform active={activeCall} barCount={26} colorTheme="blue" height={32} speed={1.1} />
          </div>
        </div>

        {/* Bottom Call Controls (Mute, Red/Orange End Call, Speaker) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "18px",
            paddingTop: "14px",
            borderTop: "1px solid rgba(15, 23, 42, 0.06)",
          }}
        >
          {/* Mute Button */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            aria-label="Mute mic"
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              backgroundColor: isMuted ? "#F1F5F9" : "rgba(15, 23, 42, 0.05)",
              color: isMuted ? "#EA580C" : "#475569",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {isMuted ? <MicOff size={18} /> : <Mic size={18} />}
          </button>

          {/* End Call / Start Call Button (SeloraX Orange/Red) */}
          <button
            onClick={() => setActiveCall(!activeCall)}
            aria-label={activeCall ? "End Call" : "Start Call"}
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              backgroundColor: activeCall ? "#EF4444" : "#F97316",
              color: "#FFFFFF",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: activeCall ? "0 8px 20px rgba(239, 68, 68, 0.35)" : "0 8px 20px rgba(249, 115, 22, 0.35)",
              transition: "all 0.25s ease",
            }}
          >
            {activeCall ? <PhoneOff size={22} /> : <Play size={22} fill="#FFFFFF" />}
          </button>

          {/* Speaker Button */}
          <button
            aria-label="Speaker"
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              backgroundColor: "rgba(15, 23, 42, 0.05)",
              color: "#475569",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <Volume2 size={18} />
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .floating-bubble-top-left,
          .floating-bubble-mid-left,
          .floating-card-top-right,
          .floating-card-mid-right,
          .floating-card-bottom-right {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
