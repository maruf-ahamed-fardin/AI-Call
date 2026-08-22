"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MessageSquare,
  Brain,
  Zap,
  CheckCircle,
  PackageCheck,
  CreditCard,
  CalendarCheck,
  Send,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface StepItem {
  num: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
  badge: string;
}

const steps: StepItem[] = [
  {
    num: "01",
    icon: <MessageSquare size={22} />,
    title: "Customer Inquires",
    sub: '"I want to confirm my COD order #4829 for Shahi Goods"',
    badge: "Inbound / Outbound",
  },
  {
    num: "02",
    icon: <Brain size={22} />,
    title: "Selorax AI Understands",
    sub: "Extracts Intent, Customer Name, Address, SKU & Phone",
    badge: "NLP & Entity Parsing",
  },
  {
    num: "03",
    icon: <Zap size={22} />,
    title: "Selorax Takes Action",
    sub: "Triggers Steadfast Logistics API & Generates bKash Link",
    badge: "Direct API Execution",
  },
  {
    num: "04",
    icon: <CheckCircle size={22} />,
    title: "Task Resolved",
    sub: "Order Confirmed, Tagged in CRM & PDF Receipt Sent ✓",
    badge: "100% Automated",
  },
];

const actionCards = [
  {
    title: "COD Order Verification",
    desc: "Outbound calls customers instantly after checkout to verify shipping address, mobile number, and reduce expensive RTO return rates.",
    tag: "E-Commerce",
    icon: <PackageCheck size={20} color="#EA580C" />,
  },
  {
    title: "bKash & Nagad Payment Links",
    desc: "Generates instant payment links and auto-verifies transaction IDs and payment proof screenshots on WhatsApp within seconds.",
    tag: "Fintech",
    icon: <CreditCard size={20} color="#2563EB" />,
  },
  {
    title: "Book Appointments & Serials",
    desc: "Checks calendar availability in real time, resolves schedule conflicts, and holds confirmed appointment serials on the live call.",
    tag: "Healthcare",
    icon: <CalendarCheck size={20} color="#0891B2" />,
  },
  {
    title: "Instant WhatsApp Confirmations",
    desc: "Dispatches instant WhatsApp & SMS confirmation slips, live courier tracking URLs, and PDF statements right as the call finishes.",
    tag: "Messaging",
    icon: <Send size={20} color="#16A34A" />,
  },
];

export default function ActionEngineScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const timeline = timelineRef.current;
    if (!section || !timeline) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: timeline,
        start: "top 70%",
        end: "bottom 40%",
        scrub: 0.5,
        onUpdate: (self) => {
          const idx = Math.min(3, Math.floor(self.progress * 4));
          setActiveStep(idx);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "120px 0 100px 0",
        backgroundColor: "rgba(248, 250, 252, 0.8)",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 5 }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 60px auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "14px" }}>
            <span className="badge-eyebrow">
              <span className="badge-dot" />
              ACTION ENGINE WORKFLOW
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
            It doesn&apos;t just answer.{" "}
            <span className="text-gradient-orange">
              It gets things done.
            </span>
          </h2>

          <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.6 }}>
            Selorax AI connects directly to your databases, payment gateways, and courier tools to resolve customer tasks completely without human intervention.
          </p>
        </div>

        {/* 4-Step Animated Cinematic Timeline */}
        <div
          ref={timelineRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
            marginBottom: "60px",
            position: "relative",
          }}
          className="timeline-grid"
        >
          {steps.map((step, idx) => {
            const isPassed = activeStep >= idx;
            const isCurrent = activeStep === idx;

            return (
              <div
                key={step.num}
                className="glass-panel-card gpu-layer"
                style={{
                  padding: "28px 22px",
                  borderRadius: "22px",
                  backgroundColor: isCurrent
                    ? "rgba(255, 255, 255, 0.98)"
                    : isPassed
                    ? "rgba(255, 255, 255, 0.88)"
                    : "rgba(255, 255, 255, 0.6)",
                  border: isCurrent
                    ? "1.5px solid rgba(249, 115, 22, 0.5)"
                    : isPassed
                    ? "1px solid rgba(37, 99, 235, 0.25)"
                    : "1px solid rgba(15, 23, 42, 0.06)",
                  boxShadow: isCurrent
                    ? "0 18px 40px -10px rgba(249, 115, 22, 0.2), 0 0 0 1px rgba(249, 115, 22, 0.15)"
                    : "0 6px 20px -4px rgba(15, 23, 42, 0.04)",
                  transform: isCurrent ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "14px",
                        fontWeight: 800,
                        color: isCurrent ? "#F97316" : isPassed ? "#2563EB" : "#94A3B8",
                      }}
                    >
                      {step.num}
                    </span>

                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        color: isCurrent ? "#EA580C" : "#64748B",
                        backgroundColor: isCurrent ? "rgba(249, 115, 22, 0.1)" : "rgba(15, 23, 42, 0.04)",
                        padding: "3px 8px",
                        borderRadius: "6px",
                      }}
                    >
                      {step.badge}
                    </span>
                  </div>

                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      backgroundColor: isCurrent
                        ? "rgba(249, 115, 22, 0.12)"
                        : isPassed
                        ? "rgba(37, 99, 235, 0.1)"
                        : "rgba(15, 23, 42, 0.04)",
                      color: isCurrent ? "#EA580C" : isPassed ? "#2563EB" : "#94A3B8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    {step.icon}
                  </div>

                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#0F172A", marginBottom: "8px" }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.5 }}>
                    {step.sub}
                  </p>
                </div>

                {/* Status Indicator */}
                <div style={{ marginTop: "20px", paddingTop: "12px", borderTop: "1px solid rgba(15, 23, 42, 0.06)", display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: 600, color: isPassed ? "#16A34A" : "#94A3B8" }}>
                  <CheckCircle size={13} />
                  <span>{isPassed ? "Stage Active" : "Pending Trigger"}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Action Execution Cards Sub-grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {actionCards.map((card, i) => (
            <div
              key={i}
              className="glass-panel-card gpu-layer"
              style={{
                padding: "24px",
                borderRadius: "20px",
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(15, 23, 42, 0.06)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(15, 23, 42, 0.04)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {card.icon}
                </div>

                <span style={{ fontSize: "11px", fontWeight: 600, color: "#64748B" }}>
                  {card.tag}
                </span>
              </div>

              <h4 style={{ fontSize: "16px", fontWeight: 700, color: "#0F172A", marginBottom: "8px" }}>
                {card.title}
              </h4>

              <p style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.55 }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
