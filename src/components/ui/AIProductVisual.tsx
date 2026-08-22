"use client";

import React from "react";
import AIWaveform from "@/components/ui/AIWaveform";
import {
  Phone,
  Mic,
  Volume2,
  CheckCircle2,
  Sparkles,
  Zap,
  TrendingUp,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";

interface AIProductVisualProps {
  stage?: number; // 1 to 4 for scroll morphing
  className?: string;
  mouseMoveX?: number;
  mouseMoveY?: number;
}

export default function AIProductVisual({
  stage = 1,
  className = "",
  mouseMoveX = 0,
  mouseMoveY = 0,
}: AIProductVisualProps) {
  return (
    <div
      className={`relative w-full max-w-[500px] mx-auto perspective-container ${className}`}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "480px",
        perspective: "1200px",
      }}
    >
      {/* 3D Depth Layer 1: Ambient Glow Backing */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: "80%",
          height: "80%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249, 115, 22, 0.18) 0%, rgba(37, 99, 235, 0.15) 50%, transparent 80%)",
          filter: "blur(50px)",
          transform: `translate3d(${mouseMoveX * -15}px, ${mouseMoveY * -15}px, -60px)`,
          transition: "transform 0.2s ease-out",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* 3D Depth Layer 2: Floating Info Card Left (Latency / Speed) */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "-32px",
          zIndex: 3,
          transform: `translate3d(${mouseMoveX * 25}px, ${mouseMoveY * 25}px, 40px)`,
          transition: "transform 0.2s ease-out",
        }}
        className="floating-card-left"
      >
        <div
          className="glass-panel-card"
          style={{
            padding: "10px 14px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(255, 255, 255, 0.9)",
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
            <div style={{ fontSize: "10px", color: "#64748B", fontWeight: 600, textTransform: "uppercase" }}>
              Voice Latency
            </div>
            <div style={{ fontSize: "13px", color: "#0F172A", fontWeight: 800 }}>
              &lt; 450ms Real-time
            </div>
          </div>
        </div>
      </div>

      {/* 3D Depth Layer 3: Floating Info Card Right (Action Status) */}
      <div
        style={{
          position: "absolute",
          bottom: "22%",
          right: "-36px",
          zIndex: 3,
          transform: `translate3d(${mouseMoveX * -30}px, ${mouseMoveY * -30}px, 50px)`,
          transition: "transform 0.2s ease-out",
        }}
        className="floating-card-right"
      >
        <div
          className="glass-panel-card"
          style={{
            padding: "10px 14px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(255, 255, 255, 0.92)",
            border: "1px solid rgba(249, 115, 22, 0.25)",
            boxShadow: "0 14px 32px -6px rgba(249, 115, 22, 0.2)",
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
            <div style={{ fontSize: "10px", color: "#64748B", fontWeight: 600, textTransform: "uppercase" }}>
              Auto Action
            </div>
            <div style={{ fontSize: "13px", color: "#0F172A", fontWeight: 800 }}>
              bKash & COD Verified ✓
            </div>
          </div>
        </div>
      </div>

      {/* 3D Depth Layer 4: Main Phone / Calling Interface */}
      <div
        id="hero-phone-mockup"
        style={{
          position: "relative",
          zIndex: 2,
          background: "linear-gradient(165deg, #FFFFFF 0%, #F8FAFC 100%)",
          borderRadius: "36px",
          border: "2px solid rgba(255, 255, 255, 0.8)",
          boxShadow:
            "0 30px 70px -15px rgba(15, 23, 42, 0.14), 0 0 0 1px rgba(15, 23, 42, 0.06), 0 2px 10px rgba(0,0,0,0.02)",
          padding: "24px 20px 24px 20px",
          overflow: "hidden",
          transform: `rotateY(${mouseMoveX * 8}deg) rotateX(${mouseMoveY * -8}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Phone Speaker Notch / Status Pill */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#22C55E", boxShadow: "0 0 6px #22C55E" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#16A34A", textTransform: "uppercase", letterSpacing: "0.04em" }}>
              Connected
            </span>
          </div>

          <div
            style={{
              padding: "3px 10px",
              backgroundColor: "rgba(15, 23, 42, 0.05)",
              borderRadius: "9999px",
              fontSize: "11px",
              fontFamily: "var(--font-mono)",
              fontWeight: 600,
              color: "#475569",
            }}
          >
            02:45
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#64748B", fontSize: "11px" }}>
            <ShieldCheck size={14} color="#2563EB" />
            <span style={{ fontWeight: 600 }}>SSL Voice</span>
          </div>
        </div>

        {/* AI Avatar Orb Central Visual */}
        <div style={{ textAlign: "center", padding: "12px 0 16px 0", position: "relative" }}>
          {/* Animated Glowing Gradient Rings */}
          <div
            style={{
              position: "relative",
              width: "110px",
              height: "110px",
              margin: "0 auto 16px auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Outer Pulse 1 */}
            <div
              style={{
                position: "absolute",
                inset: "-8px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(249, 115, 22, 0.25) 0%, transparent 70%)",
                animation: "pulseAura 3s infinite ease-in-out",
              }}
            />
            {/* Outer Pulse 2 */}
            <div
              style={{
                position: "absolute",
                inset: "-18px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, transparent 70%)",
                animation: "pulseAura 4s infinite ease-in-out 1s",
              }}
            />

            {/* Core Orb Sphere */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #F97316 0%, #EA580C 40%, #2563EB 100%)",
                boxShadow: "0 12px 30px -4px rgba(249, 115, 22, 0.4), inset 0 2px 6px rgba(255, 255, 255, 0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "84px",
                  height: "84px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%), linear-gradient(145deg, #FB923C, #1D4ED8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Sparkles size={34} color="#FFFFFF" />
              </div>
            </div>
          </div>

          <h4 style={{ fontSize: "17px", fontWeight: 800, color: "#0F172A", marginBottom: "2px" }}>
            Selorax Frontline Voice AI
          </h4>
          <p style={{ fontSize: "12px", color: "#64748B", fontWeight: 500 }}>
            Inbound Caller: Customer #4829 (Dhanmondi, Dhaka)
          </p>
        </div>

        {/* Dynamic Soundwave Visualizer */}
        <div
          style={{
            backgroundColor: "rgba(241, 245, 249, 0.7)",
            borderRadius: "16px",
            padding: "12px 16px",
            marginBottom: "16px",
            border: "1px solid rgba(15, 23, 42, 0.04)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", fontSize: "11px", color: "#64748B" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Volume2 size={13} color="#2563EB" /> AI Speaking
            </span>
            <span style={{ fontFamily: "var(--font-mono)", color: "#F97316", fontWeight: 600 }}>24.0 kHz HD Voice</span>
          </div>

          <AIWaveform active={true} barCount={32} color="mixed" height={32} />
        </div>

        {/* Live Conversation Transcript Snippet */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "14px",
            padding: "12px 14px",
            border: "1px solid rgba(15, 23, 42, 0.06)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
            marginBottom: "16px",
          }}
        >
          <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "8px" }}>
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "#EA580C",
                color: "#FFFFFF",
                fontSize: "10px",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              AI
            </div>
            <p style={{ fontSize: "12px", color: "#1E293B", lineHeight: 1.45, fontWeight: 500 }}>
              &ldquo;Assalamu Alaikum! Confirming your order #4829 for Shahi Goods leather jacket. Should we dispatch to Road 27, Dhanmondi?&rdquo;
            </p>
          </div>

          <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "#2563EB",
                color: "#FFFFFF",
                fontSize: "10px",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              C
            </div>
            <p style={{ fontSize: "12px", color: "#475569", lineHeight: 1.45 }}>
              &ldquo;Yes, that&apos;s correct! Please confirm cash on delivery.&rdquo;
            </p>
          </div>
        </div>

        {/* Call Action Keypad Buttons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
            paddingTop: "6px",
          }}
        >
          <div
            style={{
              padding: "10px",
              borderRadius: "14px",
              backgroundColor: "rgba(15, 23, 42, 0.04)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
              cursor: "pointer",
            }}
          >
            <Mic size={16} color="#475569" />
            <span style={{ fontSize: "10px", color: "#64748B", fontWeight: 600 }}>Mute</span>
          </div>

          <div
            style={{
              padding: "10px",
              borderRadius: "14px",
              backgroundColor: "rgba(15, 23, 42, 0.04)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
              cursor: "pointer",
            }}
          >
            <MessageSquare size={16} color="#475569" />
            <span style={{ fontSize: "10px", color: "#64748B", fontWeight: 600 }}>WhatsApp</span>
          </div>

          <div
            style={{
              padding: "10px",
              borderRadius: "14px",
              backgroundColor: "rgba(239, 68, 68, 0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
              cursor: "pointer",
            }}
          >
            <Phone size={16} color="#EF4444" style={{ transform: "rotate(135deg)" }} />
            <span style={{ fontSize: "10px", color: "#EF4444", fontWeight: 700 }}>End</span>
          </div>
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
