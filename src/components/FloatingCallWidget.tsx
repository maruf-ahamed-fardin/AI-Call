"use client";

import React, { useState } from "react";
import { Phone, Sparkles, X, Volume2, ArrowUpRight } from "lucide-react";
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
          className="glass-panel gpu-layer"
          style={{
            marginBottom: "12px",
            width: "320px",
            padding: "20px",
            borderRadius: "22px",
            background: "rgba(255, 255, 255, 0.96)",
            border: "1px solid rgba(249, 115, 22, 0.25)",
            boxShadow: "0 20px 50px -10px rgba(15, 23, 42, 0.15), 0 0 0 1px rgba(249, 115, 22, 0.1)",
            animation: "slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  backgroundColor: "#22C55E",
                  boxShadow: "0 0 8px #22C55E",
                }}
              />
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#0F172A", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Live AI Assistant
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
              <p style={{ fontSize: "13px", color: "#475569", lineHeight: 1.5, marginBottom: "16px" }}>
                Experience Selorax AI live on your browser or connect with our sales team instantly.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <button
                  onClick={startTestCall}
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "10px 16px", fontSize: "13px" }}
                >
                  <Sparkles size={15} />
                  <span>Start Interactive Voice Test</span>
                </button>

                <a
                  href="https://wa.me/8801993213030?text=Hi%2C%20I%20want%20to%20learn%20more%20about%20Selorax%20AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: "100%", padding: "10px 16px", fontSize: "13px" }}
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "10px 0" }}>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  margin: "0 auto 12px auto",
                  background: "linear-gradient(135deg, #F97316 0%, #2563EB 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 20px rgba(249, 115, 22, 0.4)",
                  animation: "pulseRing 2s infinite ease-in-out",
                }}
              >
                <Volume2 color="#FFFFFF" size={24} />
              </div>

              <div style={{ fontSize: "13px", fontWeight: 600, color: "#0F172A", marginBottom: "4px" }}>
                Selorax Voice Agent (Online)
              </div>
              <div style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "#EA580C", marginBottom: "14px" }}>
                {formatTime(callTimer)}
              </div>

              <div style={{ marginBottom: "16px", padding: "8px", backgroundColor: "#F8FAFC", borderRadius: "12px" }}>
                <AudioWaveformCanvas active={true} barCount={20} colorTheme="mixed" height={26} speed={1.1} />
              </div>

              <p style={{ fontSize: "12px", color: "#64748B", fontStyle: "italic", marginBottom: "14px" }}>
                &ldquo;Hello! I&apos;m Selorax AI. How may I assist your business today?&rdquo;
              </p>

              <button
                onClick={endTestCall}
                style={{
                  backgroundColor: "#EF4444",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "9999px",
                  padding: "8px 20px",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                End Call
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
          gap: "10px",
          padding: "8px 16px 8px 10px",
          backgroundColor: "#0F172A",
          color: "#FFFFFF",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "9999px",
          boxShadow: "0 10px 30px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(249, 115, 22, 0.3)",
          cursor: "pointer",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          outline: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
          e.currentTarget.style.boxShadow = "0 14px 35px rgba(15, 23, 42, 0.35), 0 0 15px rgba(249, 115, 22, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 10px 30px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(249, 115, 22, 0.3)";
        }}
      >
        {/* Pulsing AI Orb */}
        <div
          style={{
            position: "relative",
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #F97316 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 10px rgba(6, 182, 212, 0.6)",
          }}
        >
          <Sparkles size={14} color="#FFFFFF" />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
          <span style={{ fontSize: "10px", color: "#94A3B8", lineHeight: 1, fontWeight: 500 }}>
            সাহায্য দরকার? / Need Help?
          </span>
          <span style={{ fontSize: "13px", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.3, display: "flex", alignItems: "center", gap: "4px" }}>
            <Phone size={12} color="#F97316" />
            কল শুরু করুন / Test Call
          </span>
        </div>
      </button>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes pulseRing {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 15px rgba(249, 115, 22, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 25px rgba(249, 115, 22, 0.7);
          }
        }
      `}</style>
    </aside>
  );
}
