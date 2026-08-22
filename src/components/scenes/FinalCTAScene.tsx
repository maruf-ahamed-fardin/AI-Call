"use client";

import React from "react";
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, MessageSquare, Clock } from "lucide-react";
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
        {/* Main CTA Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "50px",
            alignItems: "center",
            maxWidth: "1080px",
            margin: "0 auto",
            backgroundColor: "rgba(248, 250, 252, 0.7)",
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

          {/* Right Column: 3D Phone & Metrics matching reference */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              alignItems: "center",
            }}
          >
            {/* Minimal Phone Visual */}
            <div style={{ transform: "scale(0.88)", transformOrigin: "center" }}>
              <AIPhoneVisual stage="cta" callerName="Sarah Ahmed" callTimerSecs={42} isCalling={true} />
            </div>

            {/* Metrics Pills List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%", maxWidth: "280px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", backgroundColor: "#FFFFFF", borderRadius: "14px", border: "1px solid rgba(15, 23, 42, 0.06)", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
                <MessageSquare size={16} color="#2563EB" />
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "#0F172A" }}>More Conversations</div>
                  <div style={{ fontSize: "10px", color: "#64748B" }}>More Opportunities</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", backgroundColor: "#FFFFFF", borderRadius: "14px", border: "1px solid rgba(15, 23, 42, 0.06)", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
                <TrendingUp size={16} color="#EA580C" />
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "#0F172A" }}>Higher Conversions</div>
                  <div style={{ fontSize: "10px", color: "#64748B" }}>Better Results</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", backgroundColor: "#FFFFFF", borderRadius: "14px", border: "1px solid rgba(15, 23, 42, 0.06)", boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}>
                <Clock size={16} color="#10B981" />
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "#0F172A" }}>24/7 Availability</div>
                  <div style={{ fontSize: "10px", color: "#64748B" }}>Never Miss a Lead</div>
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
