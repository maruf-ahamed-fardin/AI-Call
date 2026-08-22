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
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";
import AIWaveform from "@/components/ui/AIWaveform";

interface Capability {
  id: string;
  icon: React.ReactNode;
  tag: string;
  title: string;
  desc: string;
  accent: "blue" | "orange" | "cyan";
  preview: string;
}

const capabilities: Capability[] = [
  {
    id: "inbound",
    icon: <PhoneIncoming size={22} />,
    tag: "INBOUND FRONT DESK",
    title: "Inbound Phone Answering",
    desc: "Answers incoming calls on the first ring 24/7. Handles customer queries, order status checks, store policies, and support inquiries with natural human phrasing.",
    accent: "blue",
    preview: "0s wait time • Multi-language & Dialects",
  },
  {
    id: "outbound",
    icon: <PhoneOutgoing size={22} />,
    tag: "OUTBOUND DISPATCH",
    title: "Outbound Automated Calling",
    desc: "Automatically calls customers after checkout to verify COD orders, confirm delivery addresses, reduce RTO (return-to-origin), and recover abandoned carts.",
    accent: "orange",
    preview: "4.8x higher confirmation • Instant Steadfast push",
  },
  {
    id: "voice-support",
    icon: <Headphones size={22} />,
    tag: "REAL-TIME SPEECH",
    title: "24/7 Live Voice Support",
    desc: "Ultra low-latency speech synthesis (<450ms). Speaks naturally with authentic human pauses, empathetic tones, and zero awkward robot delays.",
    accent: "cyan",
    preview: "Emotion detection • Dynamic interruption handling",
  },
  {
    id: "omnichannel",
    icon: <MessageCircle size={22} />,
    tag: "OMNICHANNEL SYNC",
    title: "WhatsApp & SMS Messaging",
    desc: "Dispatches instant WhatsApp order summaries, bKash payment links, Google Maps locations, and calendar invites directly during or after the phone call.",
    accent: "blue",
    preview: "Official WhatsApp Business API integration",
  },
  {
    id: "api-execution",
    icon: <Cpu size={22} />,
    tag: "ACTION ENGINE",
    title: "Direct System & API Execution",
    desc: "Doesn't just talk — executes real actions. Connects directly to Shopify, WooCommerce, Steadfast Courier, RedX, Pathao, Google Sheets, and REST APIs.",
    accent: "orange",
    preview: "Real-time DB read/write • Automated payment reconciliation",
  },
  {
    id: "voice-intake",
    icon: <Mic size={22} />,
    tag: "VOICE INTELLIGENCE",
    title: "Voice Notes & Smart Intake",
    desc: "Receives voice notes from customers, accurately transcribes colloquial expressions and Bengali/English code-switching, extracting names, addresses, and order items.",
    accent: "cyan",
    preview: "Entity extraction • Structured JSON output",
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
      // Scroll-driven 3D cascade entrance
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 70,
          rotateX: 12,
          scale: 0.94,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsContainer,
            start: "top 80%",
            end: "top 30%",
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
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 64px auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "16px" }}>
            <span className="badge-eyebrow">
              <span className="badge-dot" />
              INTELLIGENT OMNICHANNEL SUITE
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(34px, 4.2vw, 54px)",
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.12,
              marginBottom: "18px",
              letterSpacing: "-0.03em",
            }}
          >
            Talks Like People.{" "}
            <span
              style={{
                fontStyle: "italic",
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                color: "#2563EB",
              }}
            >
              Acts Like Your Best Employee.
            </span>
          </h2>

          <p style={{ fontSize: "17px", color: "#475569", lineHeight: 1.6 }}>
            One unified conversational AI engine across voice calls, WhatsApp messages, and business workflows — built to understand context, take action, and keep your business running 24/7.
          </p>
        </div>

        {/* 6 Capability Cards 3D Grid */}
        <div
          ref={cardsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "28px",
            perspective: "1200px",
          }}
        >
          {capabilities.map((item, idx) => {
            const isOrange = item.accent === "orange";
            const isCyan = item.accent === "cyan";
            const iconBg = isOrange
              ? "rgba(249, 115, 22, 0.1)"
              : isCyan
              ? "rgba(6, 182, 212, 0.1)"
              : "rgba(37, 99, 235, 0.1)";
            const iconColor = isOrange ? "#EA580C" : isCyan ? "#0891B2" : "#2563EB";
            const borderHover = isOrange
              ? "rgba(249, 115, 22, 0.3)"
              : "rgba(37, 99, 235, 0.3)";

            return (
              <div
                key={item.id}
                className="capability-card glass-panel-card"
                style={{
                  padding: "32px 28px",
                  borderRadius: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: "rgba(255, 255, 255, 0.9)",
                  border: "1px solid rgba(15, 23, 42, 0.08)",
                  boxShadow: "0 10px 30px -5px rgba(15, 23, 42, 0.04)",
                  transformStyle: "preserve-3d",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <div>
                  {/* Top Bar: Icon + Tag */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "22px" }}>
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
                      fontWeight: 700,
                      color: "#0F172A",
                      marginBottom: "12px",
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
                    <CheckCircle size={14} color={iconColor} />
                    <span>{item.preview}</span>
                  </div>

                  <AIWaveform active={true} barCount={10} color={isOrange ? "orange" : "blue"} height={16} speed="slow" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
