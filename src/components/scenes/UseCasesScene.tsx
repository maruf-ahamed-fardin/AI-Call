"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Headphones,
  UserCheck,
  CalendarCheck,
  PhoneForwarded,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import AIWaveform from "@/components/ui/AIWaveform";

interface UseCaseItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  leadName: string;
  leadTag: string;
  leadScore: number;
}

const useCases: UseCaseItem[] = [
  {
    id: "sales",
    icon: <TrendingUp size={20} />,
    title: "Sales & Outreach",
    desc: "Qualify leads and set appointments automatically.",
    leadName: "John Carter",
    leadTag: "Interested in Premium Plan",
    leadScore: 92,
  },
  {
    id: "support",
    icon: <Headphones size={20} />,
    title: "Customer Support",
    desc: "Handle common inquiries and support calls instantly.",
    leadName: "Emily Watson",
    leadTag: "Order Tracking Query Resolved",
    leadScore: 98,
  },
  {
    id: "qualification",
    icon: <UserCheck size={20} />,
    title: "Lead Qualification",
    desc: "Engage leads and route to your team seamlessly.",
    leadName: "Michael Chang",
    leadTag: "High-Budget Enterprise Prospect",
    leadScore: 95,
  },
  {
    id: "appointments",
    icon: <CalendarCheck size={20} />,
    title: "Appointment Booking",
    desc: "Book, reschedule and confirm appointments seamlessly.",
    leadName: "Sophia Martinez",
    leadTag: "Demo Booked for Tomorrow 3 PM",
    leadScore: 90,
  },
  {
    id: "followup",
    icon: <PhoneForwarded size={20} />,
    title: "Follow-up Calls",
    desc: "Nurture leads & follow ups and keep your pipeline alive.",
    leadName: "David Miller",
    leadTag: "Follow-up Call Completed",
    leadScore: 88,
  },
];

export default function UseCasesScene() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = useCases[selectedIdx];

  return (
    <section
      id="use-cases"
      style={{
        position: "relative",
        padding: "120px 0 100px 0",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 5 }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 56px auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
            <span className="badge-eyebrow">
              <span className="badge-dot" />
              REAL-WORLD USE CASES
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(34px, 4.2vw, 52px)",
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
            }}
          >
            Built for Every Business
          </h2>

          <p style={{ fontSize: "16px", color: "#475569", marginTop: "8px" }}>
            From startups to enterprises, AI calling fits every need.
          </p>
        </div>

        {/* 5 Use Case Horizontal Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "16px",
            marginBottom: "48px",
          }}
          className="use-case-cards-grid"
        >
          {useCases.map((item, idx) => {
            const isSelected = selectedIdx === idx;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedIdx(idx)}
                className="glass-panel-card gpu-layer"
                style={{
                  padding: "22px 18px",
                  borderRadius: "20px",
                  backgroundColor: isSelected ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.75)",
                  border: isSelected
                    ? "1.5px solid rgba(37, 99, 235, 0.4)"
                    : "1px solid rgba(15, 23, 42, 0.06)",
                  boxShadow: isSelected
                    ? "0 12px 28px -6px rgba(37, 99, 235, 0.15)"
                    : "0 2px 10px rgba(0,0,0,0.02)",
                  transform: isSelected ? "translateY(-4px)" : "translateY(0)",
                  transition: "all 0.25s ease",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    backgroundColor: isSelected ? "rgba(37, 99, 235, 0.12)" : "rgba(15, 23, 42, 0.04)",
                    color: isSelected ? "#2563EB" : "#64748B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "12px",
                  }}
                >
                  {item.icon}
                </div>

                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#0F172A", marginBottom: "6px" }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: "12px", color: "#64748B", lineHeight: 1.45 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 3D Dynamic Preview Card */}
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            perspective: "1200px",
          }}
          className="gpu-layer"
        >
          <div
            className="glass-panel"
            style={{
              padding: "32px",
              borderRadius: "28px",
              background: "linear-gradient(175deg, #FFFFFF 0%, #F8FAFC 100%)",
              border: "1px solid rgba(37, 99, 235, 0.2)",
              boxShadow: "0 25px 60px -15px rgba(15, 23, 42, 0.08)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span className="badge-eyebrow">
                <span className="badge-dot" />
                {current.title}
              </span>

              <div style={{ display: "flex", alignItems: "center", gap: "6px", backgroundColor: "#EFF6FF", padding: "4px 10px", borderRadius: "8px", fontSize: "12px", color: "#2563EB", fontWeight: 700 }}>
                <ShieldCheck size={14} />
                <span>Lead Score: {current.leadScore}</span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px", backgroundColor: "#FFFFFF", borderRadius: "18px", border: "1px solid rgba(15, 23, 42, 0.06)", boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "#2563EB",
                  color: "#FFFFFF",
                  fontWeight: 800,
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {current.leadName.charAt(0)}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "16px", fontWeight: 800, color: "#0F172A" }}>
                  {current.leadName}
                </div>
                <div style={{ fontSize: "13px", color: "#64748B" }}>
                  {current.leadTag}
                </div>
              </div>

              <AIWaveform active={true} barCount={16} colorTheme="blue" height={24} />
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "12px", color: "#64748B", borderTop: "1px solid rgba(15, 23, 42, 0.06)", paddingTop: "14px" }}>
              <span>✓ Automated dial & qualification triggered</span>
              <a
                href="#live-call"
                style={{
                  color: "#2563EB",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span>Deploy for {current.title}</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .use-case-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .use-case-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
