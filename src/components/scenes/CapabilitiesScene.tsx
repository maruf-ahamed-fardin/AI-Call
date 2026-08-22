"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  PhoneIncoming,
  PhoneOutgoing,
  Headphones,
  MessageCircle,
  Cpu,
  Mic,
  CheckCircle2,
} from "lucide-react";
import AudioWaveformCanvas from "@/components/ui/AudioWaveformCanvas";

interface Capability {
  id: string;
  icon: React.ReactNode;
  tag: string;
  title: string;
  desc: string;
  accent: "orange" | "blue" | "emerald";
  preview: string;
}

const capabilities: Capability[] = [
  {
    id: "inbound",
    icon: <PhoneIncoming size={22} />,
    tag: "INBOUND DESK",
    title: "Inbound Call Answering",
    desc: "Answers incoming calls on the first ring 24/7. Handles customer queries, order status checks, and support inquiries with natural human phrasing.",
    accent: "blue",
    preview: "0s wait time • Multi-dialect Bengali",
  },
  {
    id: "outbound",
    icon: <PhoneOutgoing size={22} />,
    tag: "OUTBOUND DISPATCH",
    title: "Outbound COD Verification",
    desc: "Automatically calls customers after checkout to verify delivery addresses, reduce expensive RTO return rates, and recover abandoned carts.",
    accent: "orange",
    preview: "4.8x confirmation • Instant courier push",
  },
  {
    id: "voice-support",
    icon: <Headphones size={22} />,
    tag: "VOICE SYNTHESIS",
    title: "24/7 Live Voice Support",
    desc: "Ultra low-latency speech synthesis (<380ms). Speaks naturally with authentic human pauses, empathetic tones, and dynamic interruption handling.",
    accent: "blue",
    preview: "Emotion parsing • Sub-380ms latency",
  },
  {
    id: "omnichannel",
    icon: <MessageCircle size={22} />,
    tag: "OMNICHANNEL",
    title: "WhatsApp & SMS Automation",
    desc: "Dispatches instant WhatsApp order summaries, bKash payment links, and calendar invites directly during or after the live phone call.",
    accent: "emerald",
    preview: "Official WhatsApp Business API",
  },
  {
    id: "api-execution",
    icon: <Cpu size={22} />,
    tag: "ACTION ENGINE",
    title: "Direct System & API Execution",
    desc: "Doesn't just talk — executes real actions. Connects directly to Shopify, WooCommerce, Steadfast Courier, RedX, Pathao, and REST APIs.",
    accent: "orange",
    preview: "Real-time DB sync • Automated dispatch",
  },
  {
    id: "voice-intake",
    icon: <Mic size={22} />,
    tag: "VOICE INTELLIGENCE",
    title: "Voice Notes & Dialect Parsing",
    desc: "Transcribes customer voice notes and colloquial expressions accurately, extracting customer names, addresses, and order items into structured data.",
    accent: "blue",
    preview: "Entity extraction • Structured JSON",
  },
];

export default function CapabilitiesScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const cardsContainer = cardsRef.current;
    if (!section || !cardsContainer) return;

    const cards = cardsContainer.querySelectorAll(".capability-card");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 60,
          rotateX: 10,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsContainer,
            start: "top 80%",
            end: "top 35%",
            scrub: 0.6,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "120px 0 100px 0",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 5 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 60px auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "14px" }}>
            <span className="badge-eyebrow">
              <span className="badge-dot" />
              INTELLIGENT OMNICHANNEL SUITE
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
            Talks Like People.{" "}
            <span
              style={{
                fontStyle: "italic",
                color: "#2563EB",
              }}
            >
              Acts Like Your Best Employee.
            </span>
          </h2>

          <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.6 }}>
            One unified conversational AI engine across phone calls, WhatsApp messages, and business workflows — built to understand context and take action 24/7.
          </p>
        </div>

        {/* 6 Capability Cards 3D Grid */}
        <div
          ref={cardsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "26px",
            perspective: "1200px",
          }}
        >
          {capabilities.map((item) => {
            const isOrange = item.accent === "orange";
            const isEmerald = item.accent === "emerald";
            const iconBg = isOrange
              ? "rgba(249, 115, 22, 0.1)"
              : isEmerald
              ? "rgba(16, 185, 129, 0.1)"
              : "rgba(37, 99, 235, 0.1)";
            const iconColor = isOrange ? "#EA580C" : isEmerald ? "#10B981" : "#2563EB";

            return (
              <div
                key={item.id}
                className="capability-card glass-panel-card gpu-layer"
                style={{
                  padding: "32px 28px",
                  borderRadius: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: "rgba(255, 255, 255, 0.92)",
                  border: "1px solid rgba(15, 23, 42, 0.08)",
                  boxShadow: "0 10px 30px -5px rgba(15, 23, 42, 0.04)",
                  transformStyle: "preserve-3d",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <div>
                  {/* Top Bar: Icon + Tag */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "14px",
                        backgroundColor: iconBg,
                        color: iconColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: `0 4px 12px ${iconBg}`,
                      }}
                    >
                      {item.icon}
                    </div>

                    <span
                      style={{
                        fontSize: "11px",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        color: iconColor,
                        backgroundColor: iconBg,
                        padding: "4px 10px",
                        borderRadius: "6px",
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3
                    style={{
                      fontSize: "21px",
                      fontWeight: 800,
                      color: "#0F172A",
                      marginBottom: "10px",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "14px",
                      color: "#475569",
                      lineHeight: 1.6,
                      marginBottom: "24px",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Interactive Feature Capsule */}
                <div
                  style={{
                    padding: "12px 14px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(248, 250, 252, 0.8)",
                    border: "1px solid rgba(15, 23, 42, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#334155", fontWeight: 600 }}>
                    <CheckCircle2 size={14} color={iconColor} />
                    <span>{item.preview}</span>
                  </div>

                  <AudioWaveformCanvas active={true} barCount={10} colorTheme={isOrange ? "orange" : "blue"} height={16} speed={0.9} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
