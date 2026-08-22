"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Clock,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function ROICalculatorScene() {
  const [monthlyCalls, setMonthlyCalls] = useState(6000);
  const [avgAgentSalary, setAvgAgentSalary] = useState(18000); // 18,000 BDT per agent/month
  const [rtoPercentage, setRtoPercentage] = useState(25); // 25% current RTO

  // Calculations
  const humanAgentsNeeded = Math.max(1, Math.ceil(monthlyCalls / 1200));
  const humanCost = humanAgentsNeeded * avgAgentSalary;
  const seloraxCost = Math.round(monthlyCalls * 1.5);
  const monthlySavingsBDT = Math.max(0, humanCost - seloraxCost);
  const monthlySavingsUSD = Math.round(monthlySavingsBDT / 120);

  // Time saved
  const hoursSaved = Math.round((monthlyCalls * 3) / 60);

  // RTO saved
  const rtoSavedOrders = Math.round((monthlyCalls * (rtoPercentage / 100)) * 0.62);
  const rtoMoneySavedBDT = rtoSavedOrders * 160;

  const totalMonthlyImpactBDT = monthlySavingsBDT + rtoMoneySavedBDT;

  return (
    <section
      id="roi-calculator"
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
              DYNAMIC COST SAVINGS CALCULATOR
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
            Calculate Your Monthly Cost Savings & ROI
          </h2>

          <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.6 }}>
            Adjust the sliders below to estimate how much revenue, staff time, and courier freight costs your business saves with Selorax AI automation.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "40px",
            alignItems: "center",
          }}
          className="roi-grid"
        >
          {/* Left Column: Sliders Controller */}
          <div
            className="glass-panel gpu-layer"
            style={{
              padding: "36px 32px",
              borderRadius: "26px",
              background: "#FFFFFF",
              border: "1px solid rgba(15, 23, 42, 0.08)",
              boxShadow: "0 10px 30px -5px rgba(15, 23, 42, 0.05)",
              display: "flex",
              flexDirection: "column",
              gap: "26px",
            }}
          >
            {/* Slider 1: Monthly Call Volume */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#0F172A" }}>
                  Monthly Call Volume:
                </span>
                <span style={{ fontSize: "16px", fontFamily: "var(--font-mono)", fontWeight: 800, color: "#2563EB" }}>
                  {monthlyCalls.toLocaleString()} Calls / mo
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="50000"
                step="1000"
                value={monthlyCalls}
                onChange={(e) => setMonthlyCalls(parseInt(e.target.value))}
                style={{ width: "100%", accentColor: "#2563EB", cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#64748B", marginTop: "4px", fontFamily: "var(--font-mono)" }}>
                <span>1,000</span>
                <span>25,000</span>
                <span>50,000+</span>
              </div>
            </div>

            {/* Slider 2: Human Operator Cost */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#0F172A" }}>
                  Average Staff Salary (per Call Agent):
                </span>
                <span style={{ fontSize: "16px", fontFamily: "var(--font-mono)", fontWeight: 800, color: "#F97316" }}>
                  ৳ {avgAgentSalary.toLocaleString()} BDT / mo
                </span>
              </div>
              <input
                type="range"
                min="12000"
                max="40000"
                step="2000"
                value={avgAgentSalary}
                onChange={(e) => setAvgAgentSalary(parseInt(e.target.value))}
                style={{ width: "100%", accentColor: "#F97316", cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#64748B", marginTop: "4px", fontFamily: "var(--font-mono)" }}>
                <span>৳ 12,000</span>
                <span>৳ 25,000</span>
                <span>৳ 40,000</span>
              </div>
            </div>

            {/* Slider 3: Current RTO % */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#0F172A" }}>
                  Current Return-to-Origin (RTO Rate):
                </span>
                <span style={{ fontSize: "16px", fontFamily: "var(--font-mono)", fontWeight: 800, color: "#EA580C" }}>
                  {rtoPercentage}%
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="1"
                value={rtoPercentage}
                onChange={(e) => setRtoPercentage(parseInt(e.target.value))}
                style={{ width: "100%", accentColor: "#EA580C", cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#64748B", marginTop: "4px", fontFamily: "var(--font-mono)" }}>
                <span>5% (Low)</span>
                <span>25% (Average)</span>
                <span>50% (High RTO)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Projected Impact Card */}
          <div
            className="glass-panel gpu-layer"
            style={{
              padding: "36px 32px",
              borderRadius: "26px",
              background: "linear-gradient(170deg, #FFFFFF 0%, #F8FAFC 100%)",
              border: "1.5px solid rgba(37, 99, 235, 0.25)",
              boxShadow: "0 25px 60px -12px rgba(37, 99, 235, 0.12)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "24px",
            }}
          >
            <div>
              <div style={{ fontSize: "11px", fontFamily: "var(--font-mono)", fontWeight: 700, color: "#2563EB", letterSpacing: "0.08em", marginBottom: "6px" }}>
                ESTIMATED MONTHLY NET BENEFIT
              </div>

              {/* Big Projected Money Savings */}
              <div style={{ fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 900, color: "#16A34A", lineHeight: 1.08, letterSpacing: "-0.03em" }}>
                ৳ {totalMonthlyImpactBDT.toLocaleString()}
                <span style={{ fontSize: "15px", color: "#64748B", fontWeight: 600, marginLeft: "6px" }}>
                  BDT / mo
                </span>
              </div>
              <div style={{ fontSize: "13px", color: "#64748B", marginTop: "4px" }}>
                ≈ <strong style={{ color: "#0F172A" }}>${monthlySavingsUSD.toLocaleString()} USD</strong> in direct payroll + return freight savings
              </div>
            </div>

            {/* Metrics Breakdown Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div style={{ padding: "14px 16px", borderRadius: "14px", backgroundColor: "#F8FAFC", border: "1px solid rgba(15, 23, 42, 0.05)" }}>
                <div style={{ fontSize: "10px", color: "#64748B", fontWeight: 600, textTransform: "uppercase" }}>STAFF TIME SAVED</div>
                <div style={{ fontSize: "18px", fontWeight: 800, color: "#2563EB", marginTop: "2px" }}>
                  {hoursSaved.toLocaleString()} hrs / mo
                </div>
              </div>

              <div style={{ padding: "14px 16px", borderRadius: "14px", backgroundColor: "#F8FAFC", border: "1px solid rgba(15, 23, 42, 0.05)" }}>
                <div style={{ fontSize: "10px", color: "#64748B", fontWeight: 600, textTransform: "uppercase" }}>PARCELS SAVED FROM RTO</div>
                <div style={{ fontSize: "18px", fontWeight: 800, color: "#EA580C", marginTop: "2px" }}>
                  {rtoSavedOrders.toLocaleString()} Orders / mo
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/8801993213030?text=Hi%2C%20I%20want%20to%20deploy%20Selorax%20AI%20to%20save%20costs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                width: "100%",
                padding: "14px",
                fontSize: "15px",
                fontWeight: 700,
              }}
            >
              <span>Deploy Selorax AI & Start Saving</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .roi-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
