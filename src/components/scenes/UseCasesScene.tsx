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
  CheckCircle2,
  Calendar,
  CreditCard,
  PhoneCall,
  UserCheck,
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
    label: "E-Commerce & Retail",
    title: "COD Verification & Return Prevention",
    desc: "Autonomously calls customers right after checkout to verify delivery address and phone number, slashing expensive RTO returns by up to 65%.",
    badge: "E-COMMERCE",
    metrics: "65% lower RTO • 4.8x confirmation speed",
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
    label: "Healthcare & Clinics",
    title: "Patient Serial & Appointment Triage",
    desc: "Answers patient inquiries 24/7, schedules doctor serial appointments, sends SMS reminder links, and coordinates follow-up consultations.",
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
    label: "Financial Services",
    title: "Payment Verification & KYC Intake",
    desc: "Proactively verifies loan documentation, executes payment reminder calls, auto-checks bKash/Nagad transactions, and routes sensitive cases to senior officers.",
    badge: "FINTECH & BANKING",
    metrics: "99.8% KYC compliance • Bank-grade data encryption",
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
    label: "Real Estate & Property",
    title: "Lead Qualification & Site Tours",
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
    label: "Travel & Hospitality",
    title: "Booking Concierge & Itinerary Support",
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
  {
    id: "telecom",
    icon: <Headset size={20} />,
    label: "Telecom & Support",
    title: "Automated Diagnostics & Ticket Routing",
    desc: "Diagnoses internet connectivity issues, executes automated router resets via API, and creates Jira/Zendesk tickets for field technician dispatch.",
    badge: "TELECOM / ISP",
    metrics: "78% tickets resolved without human intervention",
    mockUI: {
      title: "ISP Automated Support Agent",
      fields: [
        { label: "Customer ID", value: "User #ISP-84920 (Dhanmondi)" },
        { label: "Issue Reported", value: "Optical Loss / Red Light on Router" },
        { label: "Diagnosis", value: "Fiber Break at Distribution Box" },
        { label: "Field Ticket", value: "Assigned to Tech Team (ETA 45m)" },
      ],
      action: "Field Ticket #8291 Created",
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
        padding: "130px 0 110px 0",
        backgroundColor: "#030712",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 5 }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 64px auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "16px" }}>
            <span className="badge-eyebrow">
              <span className="badge-dot" />
              TAILORED INDUSTRY SOLUTIONS
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(34px, 4.2vw, 54px)",
              fontWeight: 900,
              color: "#F8FAFC",
              lineHeight: 1.12,
              marginBottom: "18px",
              letterSpacing: "-0.03em",
            }}
          >
            Engineered for Every High-Volume Industry
          </h2>

          <p style={{ fontSize: "17px", color: "#94A3B8", lineHeight: 1.65 }}>
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
            marginBottom: "48px",
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
                  padding: "12px 22px",
                  borderRadius: "9999px",
                  backgroundColor: isSelected ? "rgba(6, 182, 212, 0.2)" : "rgba(15, 23, 42, 0.6)",
                  color: isSelected ? "#22D3EE" : "#94A3B8",
                  border: isSelected ? "1px solid #06B6D4" : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: isSelected ? "0 0 20px rgba(6, 182, 212, 0.3)" : "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 600,
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  outline: "none",
                }}
              >
                <span style={{ color: isSelected ? "#22D3EE" : "inherit" }}>
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
            gap: "44px",
            alignItems: "center",
            backgroundColor: "rgba(15, 23, 42, 0.75)",
            borderRadius: "32px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "50px 42px",
            boxShadow: "0 30px 80px -15px rgba(0, 0, 0, 0.8)",
          }}
          className="use-case-card-grid gpu-layer"
        >
          {/* Left Column: Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <span
              style={{
                fontSize: "11px",
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                color: "#22D3EE",
                backgroundColor: "rgba(6, 182, 212, 0.15)",
                padding: "4px 12px",
                borderRadius: "9999px",
                border: "1px solid rgba(6, 182, 212, 0.3)",
                alignSelf: "flex-start",
              }}
            >
              {current.badge}
            </span>

            <h3 style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 900, color: "#F8FAFC", lineHeight: 1.2 }}>
              {current.title}
            </h3>

            <p style={{ fontSize: "16px", color: "#94A3B8", lineHeight: 1.65 }}>
              {current.desc}
            </p>

            <div
              style={{
                padding: "14px 20px",
                borderRadius: "16px",
                backgroundColor: "rgba(6, 182, 212, 0.1)",
                border: "1px solid rgba(6, 182, 212, 0.3)",
                color: "#22D3EE",
                fontSize: "13px",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <CheckCircle2 size={18} />
              <span>{current.metrics}</span>
            </div>

            <div style={{ paddingTop: "8px" }}>
              <a
                href="https://wa.me/8801993213030?text=Hi%2C%20I%20want%20to%20learn%20about%20Selorax%20AI%20for%20my%20industry"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: "14px 28px", fontSize: "15px" }}
              >
                <span>Deploy for {current.label}</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Terminal / Workflow Card */}
          <div
            className="glass-panel-glow"
            style={{
              padding: "30px",
              borderRadius: "26px",
              background: "linear-gradient(170deg, rgba(11, 15, 25, 0.9) 0%, rgba(3, 7, 18, 0.95) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 20px 50px -8px rgba(0, 0, 0, 0.8)",
            }}
          >
            {/* Terminal Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "22px", paddingBottom: "16px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div style={{ fontSize: "15px", fontWeight: 800, color: "#F8FAFC", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#10B981", boxShadow: "0 0 8px #10B981" }} />
                {current.mockUI.title}
              </div>

              <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "#94A3B8" }}>
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
                    padding: "12px 16px",
                    borderRadius: "14px",
                    backgroundColor: "rgba(15, 23, 42, 0.7)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "#94A3B8", fontWeight: 600 }}>
                    {field.label}:
                  </span>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#F8FAFC" }}>
                    {field.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Resolution Pill */}
            <div
              style={{
                padding: "14px 18px",
                borderRadius: "14px",
                backgroundColor: "rgba(16, 185, 129, 0.12)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#34D399", fontWeight: 700 }}>
                <CheckCircle2 size={17} color="#10B981" />
                <span>Next Action: {current.mockUI.action}</span>
              </div>

              <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "#10B981", fontWeight: 700 }}>
                STATUS: 200 OK
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
