"use client";

import React from "react";
import { ArrowRight, MessageSquare, TrendingUp, Clock } from "lucide-react";
import AIPhoneVisual from "@/components/ui/AIPhoneVisual";

export default function FinalCTAScene() {
  return (
    <section
      id="cta"
      style={{
        position: "relative",
        padding: "140px 0 120px 0",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 5 }}>
        {/* Main CTA Grid matching reference */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "50px",
            alignItems: "center",
            maxWidth: "1080px",
            margin: "0 auto",
            backgroundColor: "rgba(248, 250, 252, 0.75)",
            borderRadius: "36px",
            border: "1px solid rgba(15, 23, 42, 0.08)",
            padding: "60px 48px",
            boxShadow: "0 25px 70px -15px rgba(15, 23, 42, 0.08)",
          }}
          className="cta-grid gpu-layer"
        >
          {/* Left Column: Headlines & Actions */}
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <div>
              <span className="badge-eyebrow">
                <span className="badge-dot" />
                GET STARTED IN MINUTES
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(36px, 4.4vw, 54px)",
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.1,
                letterSpacing: "-0.035em",
              }}
            >
              Ready to Activate Your AI Calling Agent?
            </h2>

            <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.65 }}>
              Join thousands of businesses already growing with AI.
            </p>

            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "14px", paddingTop: "4px" }}>
              <a
                href="https://wa.me/8801993213030?text=Hi%2C%20I%20want%20to%20start%20my%20SeloraX%20free%20trial"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  padding: "15px 32px",
                  fontSize: "16px",
                  fontWeight: 700,
                }}
              >
                <span>Start Free Trial</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="https://wa.me/8801993213030?text=Hi%2C%20I%20want%20to%20book%20a%20demo%20for%20SeloraX%20AI"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  padding: "15px 28px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                Book a Demo
              </a>
            </div>
          </div>

          {/* Right Column: 3D Forward-Tilted Phone & 3 Metric Pills */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              alignItems: "center",
            }}
          >
            {/* Phone Visual with forward perspective tilt */}
            <div
              style={{
                transform: "scale(0.88) rotateX(8deg)",
                transformOrigin: "center",
                perspective: "1000px",
              }}
            >
              <AIPhoneVisual stage="cta" callerName="Sarah Ahmed" callTimerSecs={42} isCalling={true} />
            </div>

            {/* 3 Metric Pills List matching mockup */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%", maxWidth: "290px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 16px", backgroundColor: "#FFFFFF", borderRadius: "16px", border: "1px solid rgba(15, 23, 42, 0.06)", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", backgroundColor: "rgba(37, 99, 235, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <MessageSquare size={16} color="#2563EB" />
                </div>
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "#0F172A" }}>More Conversations</div>
                  <div style={{ fontSize: "11px", color: "#64748B" }}>More Opportunities</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 16px", backgroundColor: "#FFFFFF", borderRadius: "16px", border: "1px solid rgba(15, 23, 42, 0.06)", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", backgroundColor: "rgba(249, 115, 22, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <TrendingUp size={16} color="#EA580C" />
                </div>
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "#0F172A" }}>Higher Conversions</div>
                  <div style={{ fontSize: "11px", color: "#64748B" }}>Better Results</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 16px", backgroundColor: "#FFFFFF", borderRadius: "16px", border: "1px solid rgba(15, 23, 42, 0.06)", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", backgroundColor: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Clock size={16} color="#10B981" />
                </div>
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "#0F172A" }}>24/7 Availability</div>
                  <div style={{ fontSize: "11px", color: "#64748B" }}>Never Miss a Lead</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
            padding: 40px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
