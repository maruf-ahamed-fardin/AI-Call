"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  Sparkles,
  Smile,
  Flame,
  Send,
  ArrowRight,
  Wifi,
  Battery,
  Bot,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Message {
  sender: "ai" | "user";
  text: string;
  time: string;
}

const CONVERSATION: Message[] = [
  {
    sender: "ai",
    text: "Hi, this is Alex from Nexus AI. Is this a good time to talk for a minute?",
    time: "10:20 AM",
  },
  {
    sender: "user",
    text: "Yes, sure.",
    time: "10:21 AM",
  },
  {
    sender: "ai",
    text: "Great! I'm calling to confirm your interest in our services. How can I help you today?",
    time: "10:21 AM",
  },
  {
    sender: "user",
    text: "I want to know more about your pricing.",
    time: "10:22 AM",
  },
];

export default function ConversationShowcaseSection() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [isTyping, setIsTyping] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping((prev) => !prev);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // 3D floating smartphone tilt with scroll
      gsap.fromTo(
        phoneRef.current,
        { rotateY: -15, rotateX: 10, y: 40 },
        {
          rotateY: 10,
          rotateX: -5,
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      // Stagger telemetry cards
      gsap.from(".telemetry-card", {
        x: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="conversation-showcase"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "100px 0 80px",
        overflow: "hidden",
        perspective: "1200px",
      }}
    >
      <div className="container">
        {/* Main Grid: Left Typography | Center Smartphone | Right Cognitive Telemetry */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
            alignItems: "center",
          }}
          className="showcase-grid"
        >
          {/* Left Column */}
          <div style={{ maxWidth: "480px" }}>
            <div style={{ marginBottom: "16px" }}>
              <div className="badge-eyebrow">
                <span className="badge-dot" />
                <span>AI Conversation Showcase</span>
              </div>
            </div>

            <h2
              style={{
                fontSize: "clamp(30px, 3.8vw, 44px)",
                lineHeight: 1.15,
                fontWeight: 800,
                color: "#FFFFFF",
                marginBottom: "16px",
              }}
            >
              Real Conversations. <br />
              <span className="text-gradient-cyan">Real Results.</span>
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.6,
                color: "#94A3B8",
                marginBottom: "32px",
              }}
            >
              See how our AI agents talk, think, and convert your leads into customers.
            </p>

            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#38BDF8",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(4px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(0px)")}
            >
              <span>Watch Full Demo</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Center Column: 3D Floating Smartphone Frame */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              perspective: "1000px",
            }}
          >
            {/* Ambient phone backglow */}
            <div
              style={{
                position: "absolute",
                width: "280px",
                height: "500px",
                background: "radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, transparent 70%)",
                filter: "blur(30px)",
                zIndex: 0,
              }}
            />

            {/* Smartphone Chassis */}
            <div
              ref={phoneRef}
              style={{
                width: "100%",
                maxWidth: "320px",
                height: "530px",
                backgroundColor: "#070D1E",
                borderRadius: "36px",
                border: "4px solid rgba(56, 189, 248, 0.3)",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(56, 189, 248, 0.2)",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                zIndex: 1,
                overflow: "hidden",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Dynamic Island / Notch */}
              <div
                style={{
                  width: "90px",
                  height: "18px",
                  backgroundColor: "#020617",
                  borderRadius: "10px",
                  margin: "0 auto 12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#1E293B" }} />
                <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#38BDF8" }} />
              </div>

              {/* Chat Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "12px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  marginBottom: "16px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(56, 189, 248, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#38BDF8",
                      border: "1px solid rgba(56, 189, 248, 0.3)",
                    }}
                  >
                    <Bot size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#FFFFFF" }}>AI Agent</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#10B981" }} />
                      <span style={{ fontSize: "10px", color: "#10B981" }}>Online</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#94A3B8" }}>
                  <Wifi size={13} />
                  <Battery size={14} />
                </div>
              </div>

              {/* Chat Messages Body */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  overflowY: "auto",
                  paddingRight: "4px",
                }}
              >
                {CONVERSATION.slice(0, visibleCount).map((msg, i) => (
                  <div
                    key={i}
                    style={{
                      alignSelf: msg.sender === "ai" ? "flex-start" : "flex-end",
                      maxWidth: "84%",
                      padding: "10px 14px",
                      borderRadius:
                        msg.sender === "ai" ? "14px 14px 14px 2px" : "14px 14px 2px 14px",
                      backgroundColor: msg.sender === "ai" ? "rgba(15, 23, 42, 0.9)" : "#2563EB",
                      border: msg.sender === "ai" ? "1px solid rgba(56, 189, 248, 0.2)" : "none",
                      boxShadow: msg.sender === "user" ? "0 4px 14px rgba(37, 99, 235, 0.4)" : "none",
                    }}
                  >
                    <p style={{ fontSize: "12px", color: "#FFFFFF", lineHeight: 1.45 }}>{msg.text}</p>
                    <span
                      style={{
                        fontSize: "9px",
                        color: msg.sender === "ai" ? "#64748B" : "rgba(255,255,255,0.7)",
                        display: "block",
                        marginTop: "4px",
                        textAlign: "right",
                      }}
                    >
                      {msg.time}
                    </span>
                  </div>
                ))}

                {/* Animated Typing Indicator */}
                {isTyping && (
                  <div
                    style={{
                      alignSelf: "flex-start",
                      padding: "8px 14px",
                      borderRadius: "14px 14px 14px 2px",
                      backgroundColor: "rgba(15, 23, 42, 0.9)",
                      border: "1px solid rgba(56, 189, 248, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        backgroundColor: "#38BDF8",
                        animation: "pulseDot 1.2s infinite 0s",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        backgroundColor: "#38BDF8",
                        animation: "pulseDot 1.2s infinite 0.2s",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        backgroundColor: "#38BDF8",
                        animation: "pulseDot 1.2s infinite 0.4s",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Real-Time Cognitive Stream Telemetry Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "380px" }}>
            {/* Card 1: Intent Detected */}
            <div
              className="glass-panel-glow telemetry-card"
              style={{
                padding: "16px 20px",
                borderRadius: "16px",
                background: "rgba(7, 13, 30, 0.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(56, 189, 248, 0.15)",
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#38BDF8",
                  }}
                >
                  <Sparkles size={18} />
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#94A3B8" }}>Intent Detected</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#FFFFFF" }}>Service Inquiry</div>
                </div>
              </div>
            </div>

            {/* Card 2: Sentiment Analysis */}
            <div
              className="glass-panel-glow telemetry-card"
              style={{
                padding: "16px 20px",
                borderRadius: "16px",
                background: "rgba(7, 13, 30, 0.8)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      backgroundColor: "rgba(16, 185, 129, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#10B981",
                    }}
                  >
                    <Smile size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: "11px", color: "#94A3B8" }}>Sentiment</div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#10B981" }}>Positive</div>
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "10px", color: "#94A3B8" }}>Confidence</div>
                  <div style={{ fontSize: "13px", fontWeight: 800, color: "#38BDF8" }}>92%</div>
                </div>
              </div>

              <div style={{ width: "100%", height: "4px", backgroundColor: "rgba(255,255,255,0.08)", borderRadius: "2px", overflow: "hidden" }}>
                <div style={{ width: "92%", height: "100%", backgroundColor: "#10B981", boxShadow: "0 0 8px #10B981" }} />
              </div>
            </div>

            {/* Card 3: Priority Score */}
            <div
              className="glass-panel-glow telemetry-card"
              style={{
                padding: "16px 20px",
                borderRadius: "16px",
                background: "rgba(7, 13, 30, 0.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(245, 158, 11, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#F59E0B",
                  }}
                >
                  <Flame size={16} />
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#94A3B8" }}>Priority Score</div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#F59E0B" }}>High</div>
                </div>
              </div>

              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "10px", color: "#94A3B8" }}>Score</div>
                <div style={{ fontSize: "13px", fontWeight: 800, color: "#FFFFFF" }}>89/100</div>
              </div>
            </div>

            {/* Card 4: Next Action */}
            <div
              className="glass-panel-glow telemetry-card"
              style={{
                padding: "16px 20px",
                borderRadius: "16px",
                background: "rgba(7, 13, 30, 0.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(59, 130, 246, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#3B82F6",
                  }}
                >
                  <Send size={16} />
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#94A3B8" }}>Next Action</div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#38BDF8" }}>Send Pricing Details</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .showcase-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
