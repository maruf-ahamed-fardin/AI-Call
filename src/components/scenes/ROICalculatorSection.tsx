"use client";

import React, { useId, useState } from "react";
import { ArrowRight } from "lucide-react";

// PLACEHOLDER RATE — set this to the real blended AI cost per call minute.
const AI_COST_PER_MINUTE = 0.12;

interface SliderProps {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  color: string;
  onChange: (value: number) => void;
}

function Slider({ label, value, display, min, max, step, color, onChange }: SliderProps) {
  const id = useId();

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
        <label htmlFor={id} style={{ fontSize: "14px", fontWeight: 600, color: "#F8FAFC" }}>
          {label}
        </label>
        <span style={{ fontSize: "15px", fontFamily: "var(--font-mono)", fontWeight: 700, color, whiteSpace: "nowrap" }}>
          {display}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: "100%", accentColor: color, cursor: "pointer" }}
      />
    </div>
  );
}

export default function ROICalculatorSection() {
  const [monthlyCalls, setMonthlyCalls] = useState(5000);
  const [avgMinutes, setAvgMinutes] = useState(4);
  const [hourlyCost, setHourlyCost] = useState(25);

  const totalMinutes = monthlyCalls * avgMinutes;
  // Human agents spend ~30% extra time on dialing, wrap-up and idle gaps between calls.
  const humanHours = (totalMinutes * 1.3) / 60;
  const humanCost = Math.round(humanHours * hourlyCost);
  const aiCost = Math.round(totalMinutes * AI_COST_PER_MINUTE);
  const monthlySavings = Math.max(0, humanCost - aiCost);
  const savingsPercent = humanCost > 0 ? Math.round((monthlySavings / humanCost) * 100) : 0;

  return (
    <section
      id="roi-calculator"
      style={{
        position: "relative",
        padding: "100px 0 80px",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 56px" }}>
          <div style={{ marginBottom: "16px" }}>
            <div className="badge-eyebrow">
              <span className="badge-dot" />
              <span>ROI Calculator</span>
            </div>
          </div>

          <h2
            style={{
              fontSize: "clamp(30px, 3.8vw, 44px)",
              lineHeight: 1.15,
              fontWeight: 800,
              color: "#FFFFFF",
              marginBottom: "16px",
            }}
          >
            See What You <span className="text-gradient-cyan">Could Save.</span>
          </h2>

          <p style={{ fontSize: "16px", lineHeight: 1.6, color: "#94A3B8" }}>
            Move the sliders to estimate your monthly cost with human agents versus Nexus AI.
          </p>
        </div>

        <div className="roi-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", alignItems: "stretch" }}>
          {/* Inputs */}
          <div
            className="glass-panel-glow"
            style={{ padding: "36px 32px", borderRadius: "24px", display: "flex", flexDirection: "column", gap: "32px" }}
          >
            <Slider
              label="Calls per month"
              value={monthlyCalls}
              display={monthlyCalls.toLocaleString("en-US")}
              min={500}
              max={50000}
              step={500}
              color="#38BDF8"
              onChange={setMonthlyCalls}
            />
            <Slider
              label="Average call length"
              value={avgMinutes}
              display={`${avgMinutes} min`}
              min={1}
              max={15}
              step={1}
              color="#60A5FA"
              onChange={setAvgMinutes}
            />
            <Slider
              label="Agent cost per hour"
              value={hourlyCost}
              display={`$${hourlyCost}`}
              min={10}
              max={60}
              step={1}
              color="#F59E0B"
              onChange={setHourlyCost}
            />
          </div>

          {/* Results */}
          <div
            className="glass-panel-glow"
            aria-live="polite"
            style={{
              padding: "36px 32px",
              borderRadius: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "28px",
              backgroundColor: "rgba(15, 23, 42, 0.9)",
              borderColor: "rgba(56, 189, 248, 0.45)",
            }}
          >
            <div>
              <div style={{ fontSize: "11px", fontFamily: "var(--font-mono)", fontWeight: 700, color: "#38BDF8", letterSpacing: "0.1em", marginBottom: "8px" }}>
                ESTIMATED MONTHLY SAVINGS
              </div>
              <div style={{ fontSize: "clamp(40px, 5vw, 56px)", fontWeight: 800, fontFamily: "var(--font-heading)", color: "#10B981", lineHeight: 1.05 }}>
                ${monthlySavings.toLocaleString("en-US")}
              </div>
              <div style={{ fontSize: "14px", color: "#94A3B8", marginTop: "6px" }}>
                {savingsPercent}% lower than staffing the same volume
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[
                { label: "Human agents", value: `$${humanCost.toLocaleString("en-US")}`, color: "#F8FAFC" },
                { label: "Nexus AI", value: `$${aiCost.toLocaleString("en-US")}`, color: "#38BDF8" },
                { label: "Agent hours freed", value: Math.round(humanHours).toLocaleString("en-US"), color: "#60A5FA" },
                { label: "Coverage", value: "24/7", color: "#F59E0B" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    padding: "14px 16px",
                    borderRadius: "14px",
                    backgroundColor: "rgba(2, 6, 23, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <div style={{ fontSize: "11px", color: "#64748B", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: "20px", fontWeight: 700, color: stat.color, marginTop: "2px" }}>{stat.value}</div>
                </div>
              ))}
            </div>

            <div>
              <a href="#contact" className="btn btn-primary" style={{ width: "100%", padding: "14px", fontSize: "15px", fontWeight: 700 }}>
                <span>Get a Custom Estimate</span>
                <ArrowRight size={16} />
              </a>
              <p style={{ fontSize: "12px", color: "#64748B", marginTop: "12px", textAlign: "center" }}>
                Estimates only. Actual savings depend on your call mix and plan.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .roi-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
