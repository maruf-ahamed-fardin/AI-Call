"use client";

import React, { useState } from "react";
import {
  ShoppingBag,
  Stethoscope,
  Building2,
  Landmark,
  Plane,
  Headset,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

interface UseCase {
  id: string;
  icon: React.ReactNode;
  label: string;
  title: string;
  desc: string;
  badge: string;
  metrics: string;
  mockUI: {
    title: string;
    fields: { label: string; value: string }[];
    action: string;
  };
}

const useCases: UseCase[] = [
  {
    id: "ecommerce",
    icon: <ShoppingBag size={20} />,
    label: "E-Commerce",
    title: "COD Verification & Return Prevention",
    desc: "Automatically calls customers right after checkout to verify delivery address and phone number, slashing expensive RTO returns by up to 65%.",
    badge: "E-COMMERCE",
    metrics: "65% lower RTO • 4.8x confirmation",
    mockUI: {
      title: "Automated COD Verification Engine",
      fields: [
        { label: "Trigger", value: "Shopify / WooCommerce Checkout" },
        { label: "AI Action", value: "Outbound Voice Call + WhatsApp OTP" },
        { label: "Courier Push", value: "Steadfast Consignment #89214" },
        { label: "Result", value: "Order Confirmed & Address Validated ✓" },
      ],
      action: "Dispatched to Warehouse",
    },
  },
  {
    id: "healthcare",
    icon: <Stethoscope size={20} />,
    label: "Healthcare",
    title: "Doctor Appointment & Serial Booking",
    desc: "Answers patient inquiries 24/7, handles doctor serial appointments, sends SMS reminder links, and coordinates follow-up consultations.",
    badge: "HEALTHCARE",
    metrics: "0 missed patient calls • Real-time calendar sync",
    mockUI: {
      title: "Clinic Reception & Serial Triage",
      fields: [
        { label: "Patient Query", value: '"Doctor serial for Dr. Rahman tomorrow"' },
        { label: "Slot Assigned", value: "Tomorrow at 05:30 PM (Serial #12)" },
        { label: "Payment Info", value: "bKash Token Generated" },
        { label: "Confirmation", value: "SMS & WhatsApp Serial Slip Sent ✓" },
      ],
      action: "Calendar Slot Locked",
    },
  },
  {
    id: "finance",
    icon: <Landmark size={20} />,
    label: "Fintech & Banking",
    title: "Payment Verification & KYC Intake",
    desc: "Proactively verifies loan documentation, executes payment reminder calls, auto-checks bKash/Nagad transactions, and routes sensitive cases to senior officers.",
    badge: "FINTECH & BANKING",
    metrics: "99.8% KYC compliance • Bank-grade encryption",
    mockUI: {
      title: "Automated Payment & KYC Assistant",
      fields: [
        { label: "Workflow", value: "Due Date Reminder & TrxID Collection" },
        { label: "Customer Input", value: "Transaction ID #9K8123" },
        { label: "Reconciliation", value: "Matched in Gateway within 0.4s" },
        { label: "Ledger Update", value: "Status Marked: Paid in Full ✓" },
      ],
      action: "Account Status Cleared",
    },
  },
  {
    id: "realestate",
    icon: <Building2 size={20} />,
    label: "Real Estate",
    title: "Lead Qualification & Site Visits",
    desc: "Screens high-intent buyers, gathers budget requirements, schedules site visits directly onto real estate agents' calendars, and logs transcripts into CRM.",
    badge: "REAL ESTATE",
    metrics: "3.2x faster lead response • Instant tour bookings",
    mockUI: {
      title: "Property Lead Qualification Portal",
      fields: [
        { label: "Lead Source", value: "Facebook Ad / Website Form" },
        { label: "Qualified Budget", value: "1.5 Cr - 2.2 Cr BDT" },
        { label: "Preferred Area", value: "Gulshan 2 / Banani" },
        { label: "Site Visit", value: "Scheduled for Saturday 11:00 AM" },
      ],
      action: "Assigned to Senior Broker",
    },
  },
  {
    id: "travel",
    icon: <Plane size={20} />,
    label: "Travel",
    title: "Booking Assistance & Itinerary Support",
    desc: "Handles hotel reservations, flight ticket inquiries, visa documentation checklists, and itinerary adjustments round the clock.",
    badge: "HOSPITALITY",
    metrics: "24/7 multilingual support • 90%+ resolution rate",
    mockUI: {
      title: "Travel Concierge & Ticket Booking",
      fields: [
        { label: "Request", value: "Cox's Bazar 3-Night Package" },
        { label: "Room Type", value: "Deluxe Sea View (2 Guests)" },
        { label: "Discount Code", value: "WINTER2026 Applied (10% Off)" },
        { label: "Status", value: "Voucher & Itinerary Dispatched via Email" },
      ],
      action: "Reservation Confirmed",
    },
  },
];

export default function UseCasesScene() {
  const [selectedId, setSelectedId] = useState("ecommerce");
  const current = useCases.find((u) => u.id === selectedId) || useCases[0];

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
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 60px auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "14px" }}>
            <span className="badge-eyebrow">
              <span className="badge-dot" />
              TAILORED INDUSTRY SOLUTIONS
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
            Built for Every Industry That Talks to Customers
          </h2>

          <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.6 }}>
            Select an industry below to see how Selorax AI customizes voice workflows, entity extraction, and automated actions for specific business models.
          </p>
        </div>

        {/* Industry Switcher Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "44px",
          }}
        >
          {useCases.map((item) => {
            const isSelected = selectedId === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 20px",
                  borderRadius: "9999px",
                  backgroundColor: isSelected ? "#0F172A" : "rgba(241, 245, 249, 0.8)",
                  color: isSelected ? "#FFFFFF" : "#475569",
                  border: isSelected ? "1px solid #0F172A" : "1px solid rgba(15, 23, 42, 0.06)",
                  boxShadow: isSelected ? "0 8px 20px -4px rgba(15, 23, 42, 0.2)" : "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 600,
                  transition: "all 0.25s ease",
                  outline: "none",
                }}
              >
                <span style={{ color: isSelected ? "#F97316" : "inherit" }}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry 2-Column Showcase */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: "40px",
            alignItems: "center",
            backgroundColor: "rgba(248, 250, 252, 0.85)",
            borderRadius: "32px",
            border: "1px solid rgba(15, 23, 42, 0.08)",
            padding: "48px 40px",
            boxShadow: "0 20px 60px -15px rgba(15, 23, 42, 0.06)",
          }}
          className="use-case-card-grid gpu-layer"
        >
          {/* Left Column: Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <span
              style={{
                fontSize: "11px",
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                color: "#EA580C",
                backgroundColor: "rgba(249, 115, 22, 0.1)",
                padding: "4px 10px",
                borderRadius: "6px",
                alignSelf: "flex-start",
              }}
            >
              {current.badge}
            </span>

            <h3 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.2 }}>
              {current.title}
            </h3>

            <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.65 }}>
              {current.desc}
            </p>

            <div
              style={{
                padding: "12px 18px",
                borderRadius: "14px",
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(37, 99, 235, 0.2)",
                color: "#2563EB",
                fontSize: "13px",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <CheckCircle size={16} />
              <span>{current.metrics}</span>
            </div>

            <div style={{ paddingTop: "8px" }}>
              <a
                href="https://wa.me/8801993213030?text=Hi%2C%20I%20want%20to%20learn%20about%20Selorax%20AI%20for%20my%20industry"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: "12px 24px", fontSize: "14px" }}
              >
                <span>Deploy for {current.label}</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Terminal / Workflow Card */}
          <div
            className="glass-panel"
            style={{
              padding: "28px",
              borderRadius: "24px",
              background: "#FFFFFF",
              border: "1px solid rgba(15, 23, 42, 0.08)",
              boxShadow: "0 16px 40px -8px rgba(15, 23, 42, 0.08)",
            }}
          >
            {/* Terminal Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", paddingBottom: "14px", borderBottom: "1px solid rgba(15, 23, 42, 0.06)" }}>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "#0F172A", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#22C55E" }} />
                {current.mockUI.title}
              </div>

              <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "#64748B" }}>
                Active Workflow
              </span>
            </div>

            {/* Workflow Fields */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "22px" }}>
              {current.mockUI.fields.map((field, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 14px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(248, 250, 252, 0.8)",
                    border: "1px solid rgba(15, 23, 42, 0.04)",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "#64748B", fontWeight: 600 }}>
                    {field.label}:
                  </span>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#0F172A" }}>
                    {field.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Resolution Pill */}
            <div
              style={{
                padding: "12px 16px",
                borderRadius: "12px",
                backgroundColor: "rgba(34, 197, 94, 0.1)",
                border: "1px solid rgba(34, 197, 94, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#166534", fontWeight: 700 }}>
                <CheckCircle size={16} color="#16A34A" />
                <span>Next Action: {current.mockUI.action}</span>
              </div>

              <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "#16A34A", fontWeight: 600 }}>
                SUCCESS (200 OK)
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 880px) {
          .use-case-card-grid {
            grid-template-columns: 1fr !important;
            padding: 28px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
