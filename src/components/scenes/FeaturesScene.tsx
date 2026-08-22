"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AIWaveform from "@/components/ui/AIWaveform";
import {
  MessageSquare,
  Bot,
  Layers,
  Sparkles,
  Zap,
  Activity,
  FileText,
  Database,
  ArrowRight,
  CheckCircle2,
  PhoneForwarded,
  Share2,
  RefreshCw,
} from "lucide-react";

interface FeatureStory {
  id: string;
  step: string;
  badge: string;
  title: string;
  desc: string;
  stats: string;
}

const featuresList: FeatureStory[] = [
  {
    id: "f1",
    step: "01",
    badge: "HUMAN-LIKE CONVERSATION",
    title: "Ultra-Realistic Conversational Voice",
    desc: "Speaks with sub-450ms latency, handles speech interruptions seamlessly, adjusts emotional tone, and understands natural dialect variations without awkward pauses.",
    stats: "Sub-450ms latency • Dialect & accent parsing",
  },
  {
    id: "f2",
    step: "02",
    badge: "WORKFLOW AUTOMATION",
    title: "Autonomous Call Scheduling & Dispatch",
    desc: "Instantly triggers outbound verification calls when orders are placed on Shopify/WooCommerce. Automatically retries unanswered calls at smart intervals.",
    stats: "10,000+ concurrent calls • 0 queue delays",
  },
  {
    id: "f3",
    step: "03",
    badge: "ENTITY EXTRACTION",
    title: "Real-time Transcription & Smart Extraction",
    desc: "Transcribes the call in real time while extracting customer names, phone numbers, delivery addresses, order modifications, and purchase intents into structured data.",
    stats: "99.4% intent accuracy • Automatic address parsing",
  },
  {
    id: "f4",
    step: "04",
    badge: "API & CRM INTEGRATION",
    title: "Direct Logistics & Gateway Execution",
    desc: "Directly creates courier consignments in Steadfast/RedX/Pathao, generates bKash/Nagad payment links, and sends WhatsApp confirmation receipts automatically.",
    stats: "Zero manual data entry • 100% automated lifecycle",
  },
];

export default function FeaturesScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const trigger = triggerRef.current;
    if (!section || !trigger) return;

    const ctx = gsap.context(() => {
      // Pinned scroll-scrubbed feature sequence
      ScrollTrigger.create({
        trigger: trigger,
        start: "top top",
        end: "+=260%",
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          // Progress from 0 to 1 mapped to 4 features (0, 1, 2, 3)
          const p = self.progress;
          const idx = Math.min(3, Math.floor(p * 4));
          setActiveFeature(idx);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div
        ref={triggerRef}
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
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 48px auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
              <span className="badge-eyebrow">
                <span className="badge-dot" />
                INTERACTIVE PRODUCT SHOWCASE
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(32px, 3.8vw, 48px)",
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
              }}
            >
              How Selorax AI Powers Every Conversation
            </h2>
            <p style={{ fontSize: "16px", color: "#64748B", marginTop: "8px" }}>
              Scroll to explore how the AI listens, understands, transcribes, and executes business workflows in real time.
            </p>
          </div>

          {/* 2-Column Pinned Showcase Layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr",
              gap: "48px",
              alignItems: "center",
            }}
            className="features-grid"
          >
            {/* Left Column: Feature Story Selector */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {featuresList.map((item, idx) => {
                const isActive = activeFeature === idx;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveFeature(idx)}
                    style={{
                      padding: "20px 24px",
                      borderRadius: "20px",
                      backgroundColor: isActive ? "rgba(239, 246, 255, 0.75)" : "transparent",
                      border: isActive
                        ? "1.5px solid rgba(37, 99, 235, 0.35)"
                        : "1px solid rgba(15, 23, 42, 0.05)",
                      boxShadow: isActive ? "0 10px 30px -5px rgba(37, 99, 235, 0.1)" : "none",
                      cursor: "pointer",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Active Accent Bar */}
                    {isActive && (
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: "4px",
                          backgroundColor: idx % 2 === 0 ? "#2563EB" : "#F97316",
                        }}
                      />
                    )}

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                      <span
                        style={{
                          fontSize: "11px",
                          fontFamily: "var(--font-mono)",
                          fontWeight: 700,
                          color: isActive ? "#2563EB" : "#94A3B8",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {item.step} • {item.badge}
                      </span>

                      {isActive && (
                        <span
                          style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: idx % 2 === 0 ? "#2563EB" : "#F97316",
                            boxShadow: "0 0 8px currentColor",
                          }}
                        />
                      )}
                    </div>

                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: isActive ? "#0F172A" : "#334155",
                        marginBottom: "6px",
                      }}
                    >
                      {item.title}
                    </h3>

                    {isActive && (
                      <p style={{ fontSize: "13px", color: "#475569", lineHeight: 1.55, marginBottom: "12px" }}>
                        {item.desc}
                      </p>
                    )}

                    <div style={{ fontSize: "11px", color: isActive ? "#2563EB" : "#94A3B8", fontWeight: 600 }}>
                      ✓ {item.stats}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Central Mutating Product UI Display */}
            <div
              style={{
                perspective: "1200px",
                position: "relative",
              }}
            >
              <div
                className="glass-panel"
                style={{
                  padding: "32px 28px",
                  borderRadius: "28px",
                  background: "linear-gradient(170deg, #FFFFFF 0%, #F8FAFC 100%)",
                  border: "1px solid rgba(37, 99, 235, 0.2)",
                  boxShadow: "0 25px 60px -12px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(37, 99, 235, 0.08)",
                  minHeight: "440px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Dynamic Header State */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "16px", borderBottom: "1px solid rgba(15, 23, 42, 0.06)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "10px",
                        backgroundColor: activeFeature === 0 ? "rgba(37, 99, 235, 0.1)" : activeFeature === 1 ? "rgba(249, 115, 22, 0.1)" : activeFeature === 2 ? "rgba(6, 182, 212, 0.1)" : "rgba(34, 197, 94, 0.1)",
                        color: activeFeature === 0 ? "#2563EB" : activeFeature === 1 ? "#EA580C" : activeFeature === 2 ? "#0891B2" : "#16A34A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {activeFeature === 0 ? <Bot size={18} /> : activeFeature === 1 ? <PhoneForwarded size={18} /> : activeFeature === 2 ? <FileText size={18} /> : <Database size={18} />}
                    </div>

                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: "#0F172A" }}>
                        {activeFeature === 0
                          ? "Voice Synthesis Engine (Active)"
                          : activeFeature === 1
                          ? "Automated Dispatch Controller"
                          : activeFeature === 2
                          ? "Live Transcription & Entity Pipeline"
                          : "API & Logistics Hub Execution"}
                      </div>
                      <div style={{ fontSize: "11px", color: "#64748B" }}>
                        Selorax Orchestrator Node #BD-DH-01
                      </div>
                    </div>
                  </div>

                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: "9999px",
                      backgroundColor: "rgba(34, 197, 94, 0.12)",
                      color: "#16A34A",
                      fontSize: "11px",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#22C55E" }} />
                    ONLINE
                  </span>
                </div>

                {/* State-specific Interactive Visual Body */}
                <div style={{ padding: "20px 0", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  {activeFeature === 0 && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <div style={{ textAlign: "center", padding: "10px 0" }}>
                        <div style={{ fontSize: "12px", color: "#64748B", fontWeight: 600, marginBottom: "8px" }}>
                          AI REAL-TIME SPEECH SYNTHESIS
                        </div>
                        <AIWaveform active={true} barCount={36} color="blue" height={44} speed="fast" />
                      </div>

                      <div style={{ backgroundColor: "#F8FAFC", borderRadius: "16px", padding: "16px", border: "1px solid rgba(15, 23, 42, 0.06)" }}>
                        <div style={{ fontSize: "11px", color: "#2563EB", fontWeight: 700, textTransform: "uppercase", marginBottom: "4px" }}>
                          Spoken Output (&lt; 420ms):
                        </div>
                        <div style={{ fontSize: "14px", color: "#0F172A", fontWeight: 500 }}>
                          &ldquo;ধন্যবাদ আপনার অর্ডারের জন্য! আপনার Shahi Goods জ্যাকেটটি আগামীকাল ঢাকার ঠিকানায় পৌঁছাবে।&rdquo;
                        </div>
                      </div>
                    </div>
                  )}

                  {activeFeature === 1 && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <div style={{ fontSize: "12px", color: "#EA580C", fontWeight: 700, textTransform: "uppercase" }}>
                        Automated Outbound Queue (Shopify Hook Triggered)
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {[
                          { id: "#4830", customer: "Farhan Tanvir", status: "Calling Now...", time: "Just now" },
                          { id: "#4829", customer: "Rahat Chowdhury", status: "Confirmed ✓", time: "2 min ago" },
                          { id: "#4828", customer: "Nusrat Jahan", status: "Scheduled (10:30 AM)", time: "In queue" },
                        ].map((c, i) => (
                          <div
                            key={i}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              padding: "10px 14px",
                              borderRadius: "12px",
                              backgroundColor: i === 0 ? "rgba(249, 115, 22, 0.08)" : "#FFFFFF",
                              border: i === 0 ? "1px solid rgba(249, 115, 22, 0.25)" : "1px solid rgba(15, 23, 42, 0.06)",
                            }}
                          >
                            <span style={{ fontSize: "13px", fontWeight: 700, color: "#0F172A" }}>
                              {c.id} • {c.customer}
                            </span>
                            <span
                              style={{
                                fontSize: "11px",
                                fontWeight: 700,
                                color: i === 0 ? "#EA580C" : i === 1 ? "#16A34A" : "#64748B",
                              }}
                            >
                              {c.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeFeature === 2 && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                      <div style={{ fontSize: "12px", color: "#0891B2", fontWeight: 700, textTransform: "uppercase" }}>
                        Extracted Entities (Live Stream)
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                        <div style={{ padding: "12px", backgroundColor: "#FFFFFF", borderRadius: "12px", border: "1px solid rgba(15, 23, 42, 0.06)" }}>
                          <div style={{ fontSize: "10px", color: "#64748B", fontWeight: 600 }}>CUSTOMER NAME</div>
                          <div style={{ fontSize: "13px", fontWeight: 700, color: "#0F172A" }}>Rahat Chowdhury</div>
                        </div>
                        <div style={{ padding: "12px", backgroundColor: "#FFFFFF", borderRadius: "12px", border: "1px solid rgba(15, 23, 42, 0.06)" }}>
                          <div style={{ fontSize: "10px", color: "#64748B", fontWeight: 600 }}>DELIVERY ADDRESS</div>
                          <div style={{ fontSize: "13px", fontWeight: 700, color: "#0F172A" }}>House 14, Rd 27, Dhanmondi</div>
                        </div>
                        <div style={{ padding: "12px", backgroundColor: "#FFFFFF", borderRadius: "12px", border: "1px solid rgba(15, 23, 42, 0.06)" }}>
                          <div style={{ fontSize: "10px", color: "#64748B", fontWeight: 600 }}>PAYMENT INTENT</div>
                          <div style={{ fontSize: "13px", fontWeight: 700, color: "#16A34A" }}>Cash On Delivery (COD)</div>
                        </div>
                        <div style={{ padding: "12px", backgroundColor: "#FFFFFF", borderRadius: "12px", border: "1px solid rgba(15, 23, 42, 0.06)" }}>
                          <div style={{ fontSize: "10px", color: "#64748B", fontWeight: 600 }}>SENTIMENT SCORE</div>
                          <div style={{ fontSize: "13px", fontWeight: 700, color: "#2563EB" }}>98% Positive (Confident)</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeFeature === 3 && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <div style={{ fontSize: "12px", color: "#16A34A", fontWeight: 700, textTransform: "uppercase" }}>
                        Third-Party API Dispatches Completed
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", backgroundColor: "#FFFFFF", borderRadius: "12px", border: "1px solid rgba(34, 197, 94, 0.25)" }}>
                          <CheckCircle2 size={18} color="#16A34A" />
                          <div style={{ fontSize: "12px", color: "#0F172A", fontWeight: 600 }}>
                            Steadfast Courier: Consignment #ST-98214 created
                          </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", backgroundColor: "#FFFFFF", borderRadius: "12px", border: "1px solid rgba(34, 197, 94, 0.25)" }}>
                          <CheckCircle2 size={18} color="#16A34A" />
                          <div style={{ fontSize: "12px", color: "#0F172A", fontWeight: 600 }}>
                            WhatsApp API: Confirmation invoice PDF dispatched
                          </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", backgroundColor: "#FFFFFF", borderRadius: "12px", border: "1px solid rgba(34, 197, 94, 0.25)" }}>
                          <CheckCircle2 size={18} color="#16A34A" />
                          <div style={{ fontSize: "12px", color: "#0F172A", fontWeight: 600 }}>
                            Shopify Store: Order tagged &ldquo;Verified COD by Selorax&rdquo;
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Status Ticker */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "14px", borderTop: "1px solid rgba(15, 23, 42, 0.06)", fontSize: "11px", color: "#64748B" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Zap size={13} color="#F97316" /> Auto-sync enabled
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)" }}>Latency: 38ms API roundtrip</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
