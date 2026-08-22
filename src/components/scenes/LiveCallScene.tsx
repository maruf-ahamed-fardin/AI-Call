"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AudioWaveformCanvas from "@/components/ui/AudioWaveformCanvas";
import {
  Phone,
  PhoneCall,
  Volume2,
  Mic,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  MessageSquare,
  ArrowRight,
  Play,
  RotateCcw,
  Zap,
} from "lucide-react";

export default function LiveCallScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  const [callPhase, setCallPhase] = useState(1);
  const [interactiveMode, setInteractiveMode] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: pin,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (!interactiveMode) {
            const p = self.progress;
            if (p < 0.2) setCallPhase(0);
            else if (p < 0.45) setCallPhase(1);
            else if (p < 0.7) setCallPhase(2);
            else if (p < 0.9) setCallPhase(3);
            else setCallPhase(4);
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [interactiveMode]);

  const conversationSteps = [
    {
      speaker: "ai",
      name: "Selorax Frontline Agent",
      time: "00:04",
      text: "আসসালামু আলাইকুম! Shahi Goods থেকে সেলভ্যাক্স AI বলছি। আমি কি জনাব তানভীরের সাথে #4829 লেদার জ্যাকেট অর্ডার নিয়ে কথা বলছি?",
      tag: "Agent Greeting",
    },
    {
      speaker: "customer",
      name: "Customer (Tanvir)",
      time: "00:12",
      text: "হ্যাঁ আমি বলছি! আমি ডেলিভারি এড্রেসটা উত্তরা সেক্টর ৪ এ চেঞ্জ করতে চাচ্ছি, পসিবল?",
      tag: "Address Modification Query",
    },
    {
      speaker: "ai",
      name: "Selorax Frontline Agent",
      time: "00:22",
      text: "অবশ্যই! আপনার ডেলিভারি ঠিকানা 'বাড়ি ১২, রোড ৫, সেক্টর ৪, উত্তরা, ঢাকা' হিসেবে আপডেট করে দিয়েছি। আপনার অর্ডারটি কনফার্ম হয়েছে এবং Steadfast কুরিয়ারে বুকিং সম্পন্ন হয়েছে।",
      tag: "Live DB Sync & Confirmation",
    },
  ];

  return (
    <section
      id="live-call"
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div
        ref={pinRef}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 0",
        }}
      >
        <div className="container">
          {/* Header */}
          <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 40px auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
              <span className="badge-eyebrow">
                <span className="badge-dot" />
                LIVE CALL SIMULATION
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(32px, 3.8vw, 50px)",
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
              }}
            >
              Watch a Real AI Phone Call in Action
            </h2>
            <p style={{ fontSize: "16px", color: "#64748B", marginTop: "8px" }}>
              Scroll down or click the timeline steps to watch real-time voice synthesis and automated courier booking.
            </p>
          </div>

          {/* Central Call Interface Card */}
          <div
            className="gpu-layer"
            style={{
              maxWidth: "840px",
              margin: "0 auto",
              borderRadius: "32px",
              background: "linear-gradient(175deg, #FFFFFF 0%, #F8FAFC 100%)",
              border: "1.5px solid rgba(37, 99, 235, 0.2)",
              boxShadow: "0 30px 80px -15px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(37, 99, 235, 0.08)",
              padding: "36px 32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top Status Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "20px",
                borderBottom: "1px solid rgba(15, 23, 42, 0.06)",
                marginBottom: "24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    position: "relative",
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #F97316 0%, #2563EB 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 12px rgba(249, 115, 22, 0.4)",
                  }}
                >
                  <Sparkles size={20} color="#FFFFFF" />
                </div>

                <div>
                  <div style={{ fontSize: "16px", fontWeight: 800, color: "#0F172A" }}>
                    Selorax Voice AI Engine
                  </div>
                  <div style={{ fontSize: "12px", color: "#64748B" }}>
                    Caller ID: +880 1993-213030 (Shahi Goods Helpline)
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div
                  style={{
                    padding: "6px 14px",
                    borderRadius: "9999px",
                    backgroundColor: callPhase === 0 ? "rgba(249, 115, 22, 0.1)" : "rgba(34, 197, 94, 0.1)",
                    color: callPhase === 0 ? "#EA580C" : "#16A34A",
                    fontSize: "12px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: callPhase === 0 ? "#F97316" : "#22C55E",
                    }}
                  />
                  {callPhase === 0
                    ? "DIALING..."
                    : callPhase === 4
                    ? "CALL COMPLETED ✓"
                    : "ACTIVE CALL (00:32)"}
                </div>
              </div>
            </div>

            {/* Middle Audio Waveform & Speaker Status */}
            <div
              style={{
                backgroundColor: "rgba(241, 245, 249, 0.7)",
                borderRadius: "20px",
                padding: "18px 24px",
                marginBottom: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid rgba(15, 23, 42, 0.04)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Volume2 size={18} color="#2563EB" />
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#0F172A" }}>
                  {callPhase === 0
                    ? "Establishing SIP Audio Stream..."
                    : callPhase === 2
                    ? "Customer Speaking (Transcribing...)"
                    : "Selorax AI Speaking (HD Natural Synthesis)"}
                </span>
              </div>

              <AudioWaveformCanvas
                active={callPhase > 0 && callPhase < 4}
                barCount={28}
                colorTheme={callPhase === 2 ? "blue" : "orange"}
                height={26}
              />
            </div>

            {/* Conversation Transcript Sequence */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "28px" }}>
              {conversationSteps.slice(0, callPhase === 0 ? 0 : callPhase).map((msg, i) => {
                const isAi = msg.speaker === "ai";

                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: isAi ? "flex-start" : "flex-end",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px", fontSize: "11px", color: "#64748B" }}>
                      <span style={{ fontWeight: 700, color: isAi ? "#EA580C" : "#2563EB" }}>
                        {msg.name}
                      </span>
                      <span>• {msg.time}</span>
                      <span
                        style={{
                          backgroundColor: isAi ? "rgba(249, 115, 22, 0.08)" : "rgba(37, 99, 235, 0.08)",
                          color: isAi ? "#EA580C" : "#2563EB",
                          padding: "1px 6px",
                          borderRadius: "4px",
                          fontSize: "10px",
                          fontWeight: 600,
                        }}
                      >
                        {msg.tag}
                      </span>
                    </div>

                    <div
                      style={{
                        maxWidth: "80%",
                        padding: "14px 18px",
                        borderRadius: isAi ? "18px 18px 18px 4px" : "18px 18px 4px 18px",
                        backgroundColor: isAi ? "#FFFFFF" : "#2563EB",
                        color: isAi ? "#0F172A" : "#FFFFFF",
                        border: isAi ? "1px solid rgba(15, 23, 42, 0.08)" : "none",
                        boxShadow: isAi ? "0 4px 14px rgba(0,0,0,0.03)" : "0 4px 14px rgba(37, 99, 235, 0.25)",
                        fontSize: "14px",
                        lineHeight: 1.55,
                        fontWeight: 500,
                      }}
                    >
                      {msg.text}
                    </div>
                  </div>
                );
              })}

              {callPhase === 0 && (
                <div style={{ textAlign: "center", padding: "30px 0", color: "#64748B", fontSize: "14px" }}>
                  <div style={{ marginBottom: "8px" }}>📞 Connecting to customer +880 1711-XXXXXX...</div>
                  <div style={{ fontSize: "12px", color: "#94A3B8" }}>Scroll down to step through the dialogue</div>
                </div>
              )}
            </div>

            {/* Call Summary Card (Phase 4) */}
            {callPhase >= 4 && (
              <div
                style={{
                  padding: "20px",
                  borderRadius: "18px",
                  backgroundColor: "rgba(240, 253, 244, 0.9)",
                  border: "1px solid rgba(34, 197, 94, 0.3)",
                  marginBottom: "20px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <CheckCircle size={18} color="#16A34A" />
                  <span style={{ fontSize: "13px", fontWeight: 800, color: "#166534", textTransform: "uppercase" }}>
                    AI Automated Call Summary & Actions
                  </span>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "10px", fontSize: "12px" }}>
                  <div>
                    <span style={{ color: "#475569" }}>Resolved Intent:</span>{" "}
                    <strong style={{ color: "#0F172A" }}>Address Update & COD Confirm</strong>
                  </div>
                  <div>
                    <span style={{ color: "#475569" }}>Courier Status:</span>{" "}
                    <strong style={{ color: "#16A34A" }}>Dispatched via Steadfast</strong>
                  </div>
                  <div>
                    <span style={{ color: "#475569" }}>Customer Sentiment:</span>{" "}
                    <strong style={{ color: "#2563EB" }}>100% Satisfied</strong>
                  </div>
                  <div>
                    <span style={{ color: "#475569" }}>Receipt Sent:</span>{" "}
                    <strong style={{ color: "#EA580C" }}>WhatsApp #4829 PDF</strong>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Actions Bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", paddingTop: "16px", borderTop: "1px solid rgba(15, 23, 42, 0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "12px", color: "#64748B", marginRight: "4px" }}>
                  Timeline Stage:
                </span>
                {[0, 1, 2, 3, 4].map((stepIdx) => (
                  <button
                    key={stepIdx}
                    onClick={() => {
                      setInteractiveMode(true);
                      setCallPhase(stepIdx);
                    }}
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "11px",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      backgroundColor: callPhase === stepIdx ? "#2563EB" : "rgba(15, 23, 42, 0.05)",
                      color: callPhase === stepIdx ? "#FFFFFF" : "#64748B",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {stepIdx === 0 ? "Connect" : `Step ${stepIdx}`}
                  </button>
                ))}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <a
                  href="https://wa.me/8801993213030?text=Hi%2C%20I%20want%20to%20test%20Selorax%20AI%20Calling%20live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: "8px 18px", fontSize: "13px" }}
                >
                  <span>Test Real AI Call on Your Phone</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
