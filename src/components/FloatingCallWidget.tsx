"use client";

import React, { useState } from "react";
import { Phone, Sparkles, X, Volume2, ArrowUpRight, Mic, PhoneOff } from "lucide-react";
import AudioWaveformCanvas from "@/components/ui/AudioWaveformCanvas";

export default function FloatingCallWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCalling, setIsCalling] = useState(false);
  const [callTimer, setCallTimer] = useState(0);

  const startTestCall = () => {
    setIsCalling(true);
    setCallTimer(0);
    const interval = setInterval(() => {
      setCallTimer((prev) => prev + 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 30000);
  };

  const endTestCall = () => {
    setIsCalling(false);
    setCallTimer(0);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <aside
      aria-label="Live AI Call Assistant"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      {/* Expanded Modal Box */}
      {isOpen && (
        <div
          className="glass-panel-glow gpu-layer"
          style={{
            marginBottom: "14px",
            width: "330px",
            padding: "22px",
            borderRadius: "24px",
            background: "linear-gradient(170deg, rgba(15, 23, 42, 0.95) 0%, rgba(3, 7, 18, 0.98) 100%)",
            border: "1.5px solid rgba(6, 182, 212, 0.35)",
            boxShadow: "0 25px 60px -10px rgba(0, 0, 0, 0.9), 0 0 35px rgba(6, 182, 212, 0.25)",
            animation: "slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  backgroundColor: "#10B981",
                  boxShadow: "0 0 10px #10B981",
                }}
              />
              <span style={{ fontSize: "12px", fontWeight: 800, color: "#F8FAFC", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "var(--font-mono)" }}>
                Live Voice Assistant
              </span>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                endTestCall();
              }}
              style={{
                background: "none",
                border: "none",
                color: "#94A3B8",
                cursor: "pointer",
                padding: "2px",
              }}
            >
              <X size={18} />
            </button>
          </div>

          {!isCalling ? (
            <div>
              <p style={{ fontSize: "13px", color: "#94A3B8", lineHeight: 1.55, marginBottom: "18px" }}>
                Experience Selorax Frontline Voice AI in real time or connect with our enterprise specialist.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <button
                  onClick={startTestCall}
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "12px 18px", fontSize: "13px", fontWeight: 700 }}
                >
                  <Sparkles size={16} />
                  <span>Start Live Voice Simulation</span>
                </button>

                <a
                  href="https://wa.me/8801993213030?text=Hi%2C%20I%20want%20to%20learn%20more%20about%20Selorax%20AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: "100%", padding: "12px 18px", fontSize: "13px" }}
                >
                  <span>Chat with Sales on WhatsApp</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "10px 0" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  margin: "0 auto 12px auto",
                  background: "linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 25px rgba(6, 182, 212, 0.6)",
                  animation: "pulseRing 2s infinite ease-in-out",
                }}
              >
                <Volume2 color="#FFFFFF" size={26} />
              </div>

              <div style={{ fontSize: "14px", fontWeight: 800, color: "#F8FAFC", marginBottom: "3px" }}>
                Selorax Agent (Connected)
              </div>
              <div style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "#22D3EE", marginBottom: "14px" }}>
                {formatTime(callTimer)}
              </div>

              <div style={{ marginBottom: "16px", padding: "10px", backgroundColor: "rgba(11, 15, 25, 0.8)", borderRadius: "14px" }}>
                <AudioWaveformCanvas active={true} barCount={20} colorTheme="cyan" height={28} speed={1.2} />
              </div>

              <p style={{ fontSize: "12px", color: "#94A3B8", fontStyle: "italic", marginBottom: "16px", lineHeight: 1.4 }}>
                &ldquo;Hello! I&apos;m Selorax AI. How can I assist your team today?&rdquo;
              </p>

              <button
                onClick={endTestCall}
                style={{
                  backgroundColor: "rgba(239, 68, 68, 0.2)",
                  color: "#EF4444",
                  border: "1px solid rgba(239, 68, 68, 0.4)",
                  borderRadius: "9999px",
                  padding: "10px 20px",
                  fontSize: "13px",
                  fontWeight: 700,
                  cursor: "pointer",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  transition: "all 0.2s ease",
                }}
              >
                <PhoneOff size={15} />
                <span>Disconnect Call</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Need Help? Start Call"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "10px 18px 10px 12px",
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          color: "#FFFFFF",
          border: "1.5px solid rgba(6, 182, 212, 0.4)",
          borderRadius: "9999px",
          boxShadow: "0 10px 35px rgba(0, 0, 0, 0.8), 0 0 25px rgba(6, 182, 212, 0.35)",
          cursor: "pointer",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          outline: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
          e.currentTarget.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.9), 0 0 35px rgba(6, 182, 212, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 10px 35px rgba(0, 0, 0, 0.8), 0 0 25px rgba(6, 182, 212, 0.35)";
        }}
      >
        {/* Pulsing AI Orb */}
        <div
          style={{
            position: "relative",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #8B5CF6 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 15px rgba(6, 182, 212, 0.7)",
          }}
        >
          <Sparkles size={16} color="#FFFFFF" />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
          <span style={{ fontSize: "10px", color: "#94A3B8", lineHeight: 1, fontFamily: "var(--font-mono)" }}>
            সাহায্য দরকার? / Quick Test
          </span>
          <span style={{ fontSize: "13px", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.3, display: "flex", alignItems: "center", gap: "6px" }}>
            <Phone size={13} color="#22D3EE" />
            লাইভ ভয়েস টেস্ট / Start Call
          </span>
        </div>
      </button>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes pulseRing {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.4);
          }
          50% {
            transform: scale(1.06);
            box-shadow: 0 0 35px rgba(6, 182, 212, 0.8);
          }
        }
      `}</style>
    </aside>
  );
}
