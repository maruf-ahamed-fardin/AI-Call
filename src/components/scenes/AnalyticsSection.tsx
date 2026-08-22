"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  TrendingUp,
  PhoneCall,
  CheckCircle2,
  Percent,
  DollarSign,
  Settings,
  Maximize2,
  BarChart,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AnalyticsSection() {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(4);
  const sectionRef = useRef<HTMLElement>(null);
  const wavePathRef = useRef<SVGPathElement>(null);
  const [callsMadeCount, setCallsMadeCount] = useState(0);
  const [callsConnectedCount, setCallsConnectedCount] = useState(0);

  const points = [
    { label: "Mon", calls: "8,420", x: 20, y: 110 },
    { label: "Tue", calls: "10,150", x: 75, y: 85 },
    { label: "Wed", calls: "9,200", x: 130, y: 95 },
    { label: "Thu", calls: "11,800", x: 185, y: 65 },
    { label: "Fri", calls: "12,842", x: 240, y: 40 },
    { label: "Sat", calls: "10,950", x: 295, y: 75 },
    { label: "Sun", calls: "13,400", x: 350, y: 30 },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Counter animation on scroll
      const countObj = { made: 0, connected: 0 };
      gsap.to(countObj, {
        made: 128493,
        connected: 98123,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          setCallsMadeCount(Math.floor(countObj.made));
          setCallsConnectedCount(Math.floor(countObj.connected));
        },
      });

      // SVG wave draw
      if (wavePathRef.current) {
        const length = wavePathRef.current.getTotalLength();
        gsap.fromTo(
          wavePathRef.current,
          { strokeDasharray: length, strokeDashoffset: length },
          {
            strokeDashoffset: 0,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 65%",
            },
          }
        );
      }

      // Dashboard 3D Entrance
      gsap.from(".analytics-dashboard-panel", {
        y: 60,
        opacity: 0,
        rotateX: 10,
        scale: 0.95,
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="analytics"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "100px 0 80px",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Main Grid: Left Intro + Stat Counters | Right Master Hologram Dashboard */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="analytics-grid"
        >
          {/* Left Column */}
          <div style={{ maxWidth: "480px" }}>
            <div style={{ marginBottom: "16px" }}>
              <div className="badge-eyebrow">
                <span className="badge-dot" />
                <span>Powerful Analytics</span>
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
              Real-Time Insights. <br />
              <span className="text-gradient-cyan">Better Decisions.</span>
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.6,
                color: "#94A3B8",
                marginBottom: "36px",
              }}
            >
              Track every call, analyze performance, and grow your business faster.
            </p>

            {/* Stat Counters with Sparklines */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Stat 1: Calls Made */}
              <div
                className="glass-panel-glow"
                style={{
                  padding: "20px 24px",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(7, 13, 30, 0.75)",
                }}
              >
                <div>
                  <div style={{ fontSize: "12px", color: "#94A3B8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                    Calls Made
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                    <span style={{ fontSize: "28px", fontWeight: 800, color: "#FFFFFF", fontFamily: "var(--font-heading)" }}>
                      {callsMadeCount > 0 ? callsMadeCount.toLocaleString() : "128,493"}
                    </span>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "#10B981", display: "inline-flex", alignItems: "center", gap: "2px" }}>
                      ▲ +28.5%
                    </span>
                  </div>
                </div>

                {/* Glowing Cyan Sparkline */}
                <svg width="100" height="40" viewBox="0 0 100 40" fill="none">
                  <path
                    d="M2 30 Q 25 10, 50 25 T 98 8"
                    stroke="#38BDF8"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    style={{ filter: "drop-shadow(0 0 6px rgba(56, 189, 248, 0.7))" }}
                  />
                </svg>
              </div>

              {/* Stat 2: Calls Connected */}
              <div
                className="glass-panel-glow"
                style={{
                  padding: "20px 24px",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(7, 13, 30, 0.75)",
                }}
              >
                <div>
                  <div style={{ fontSize: "12px", color: "#94A3B8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                    Calls Connected
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                    <span style={{ fontSize: "28px", fontWeight: 800, color: "#FFFFFF", fontFamily: "var(--font-heading)" }}>
                      {callsConnectedCount > 0 ? callsConnectedCount.toLocaleString() : "98,123"}
                    </span>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "#10B981", display: "inline-flex", alignItems: "center", gap: "2px" }}>
                      ▲ +32.1%
                    </span>
                  </div>
                </div>

                {/* Glowing Green Sparkline */}
                <svg width="100" height="40" viewBox="0 0 100 40" fill="none">
                  <path
                    d="M2 32 Q 30 25, 55 12 T 98 5"
                    stroke="#10B981"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    style={{ filter: "drop-shadow(0 0 6px rgba(16, 185, 129, 0.7))" }}
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Master Hologram Dashboard Panel */}
          <div
            className="glass-panel-glow analytics-dashboard-panel"
            style={{
              padding: "28px",
              borderRadius: "24px",
              background: "rgba(7, 13, 30, 0.88)",
              border: "1px solid rgba(56, 189, 248, 0.25)",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(56, 189, 248, 0.15)",
            }}
          >
            {/* Dashboard Window Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "20px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                marginBottom: "24px",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(56, 189, 248, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#38BDF8",
                  }}
                >
                  <BarChart size={16} />
                </div>
                <div>
                  <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#FFFFFF" }}>Dashboard</h4>
                  <p style={{ fontSize: "11px", color: "#94A3B8" }}>Welcome back, Sam</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button
                  aria-label="Settings"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    padding: "6px",
                    color: "#94A3B8",
                    cursor: "pointer",
                  }}
                >
                  <Settings size={14} />
                </button>
                <button
                  aria-label="Fullscreen"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    padding: "6px",
                    color: "#94A3B8",
                    cursor: "pointer",
                  }}
                >
                  <Maximize2 size={14} />
                </button>
              </div>
            </div>

            {/* 4 Top KPI Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "14px",
                marginBottom: "24px",
              }}
            >
              {[
                { title: "Calls Made", val: "128,493", change: "+28.5%", icon: PhoneCall, col: "#38BDF8" },
                { title: "Connected", val: "98,123", change: "+32.1%", icon: CheckCircle2, col: "#10B981" },
                { title: "Conversion Rate", val: "38.42%", change: "+19.3%", icon: Percent, col: "#3B82F6" },
                { title: "Revenue Generated", val: "$1.24M", change: "+41.7%", icon: DollarSign, col: "#F59E0B" },
              ].map((kpi, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "rgba(2, 6, 23, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    borderRadius: "14px",
                    padding: "14px",
                  }}
                >
                  <div style={{ fontSize: "11px", color: "#94A3B8", marginBottom: "6px" }}>{kpi.title}</div>
                  <div style={{ fontSize: "18px", fontWeight: 800, color: "#FFFFFF", marginBottom: "4px" }}>
                    {kpi.val}
                  </div>
                  <div style={{ fontSize: "11px", color: "#10B981", fontWeight: 600 }}>{kpi.change}</div>
                </div>
              ))}
            </div>

            {/* Dual Charts */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
              }}
              className="charts-subgrid"
            >
              {/* Chart 1: Calls Overview Wave Chart */}
              <div
                style={{
                  backgroundColor: "rgba(2, 6, 23, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "16px",
                  padding: "18px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "16px",
                  }}
                >
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#FFFFFF" }}>Calls Overview</span>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#38BDF8",
                      background: "rgba(56, 189, 248, 0.1)",
                      padding: "3px 8px",
                      borderRadius: "6px",
                      border: "1px solid rgba(56, 189, 248, 0.2)",
                    }}
                  >
                    This Month ▼
                  </div>
                </div>

                {/* SVG Spline Wave Chart */}
                <div style={{ position: "relative", height: "150px" }}>
                  <svg width="100%" height="100%" viewBox="0 0 380 150" fill="none" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Area under curve */}
                    <path
                      d="M 20 110 C 50 90, 70 85, 100 90 C 130 95, 160 65, 190 60 C 220 55, 240 40, 270 50 C 300 60, 330 30, 360 30 L 360 140 L 20 140 Z"
                      fill="url(#areaGrad)"
                    />

                    {/* Primary Wave Line */}
                    <path
                      ref={wavePathRef}
                      d="M 20 110 C 50 90, 70 85, 100 90 C 130 95, 160 65, 190 60 C 220 55, 240 40, 270 50 C 300 60, 330 30, 360 30"
                      stroke="#38BDF8"
                      strokeWidth="3"
                      fill="none"
                      style={{ filter: "drop-shadow(0 0 6px rgba(56, 189, 248, 0.8))" }}
                    />

                    {/* Secondary Wave Line */}
                    <path
                      d="M 20 130 C 60 120, 100 110, 140 115 C 180 120, 220 90, 260 85 C 300 80, 330 65, 360 60"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeDasharray="3 3"
                      fill="none"
                      opacity="0.6"
                    />

                    {/* Interactive points */}
                    {points.map((pt, idx) => (
                      <circle
                        key={idx}
                        cx={pt.x}
                        cy={pt.y}
                        r={hoveredPoint === idx ? 6 : 4}
                        fill={hoveredPoint === idx ? "#FFFFFF" : "#38BDF8"}
                        stroke="#020617"
                        strokeWidth="2"
                        style={{ cursor: "pointer", transition: "r 0.2s ease" }}
                        onMouseEnter={() => setHoveredPoint(idx)}
                      />
                    ))}
                  </svg>

                  {/* Active Tooltip overlay */}
                  {hoveredPoint !== null && (
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: `${(points[hoveredPoint].x / 380) * 100}%`,
                        transform: "translateX(-50%)",
                        background: "rgba(2, 6, 23, 0.95)",
                        border: "1px solid rgba(56, 189, 248, 0.5)",
                        padding: "4px 8px",
                        borderRadius: "6px",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        pointerEvents: "none",
                        boxShadow: "0 0 10px rgba(56, 189, 248, 0.4)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <span style={{ color: "#38BDF8" }}>{points[hoveredPoint].calls}</span>
                      <span style={{ color: "#94A3B8", fontSize: "9px", marginLeft: "4px" }}>Sep 15</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Chart 2: Call Outcomes Glowing Donut Chart */}
              <div
                style={{
                  backgroundColor: "rgba(2, 6, 23, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "16px",
                  padding: "18px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px" }}>
                  Call Outcomes
                </span>

                <div style={{ display: "flex", alignItems: "center", gap: "20px", justifyContent: "center" }}>
                  {/* SVG Glowing Donut */}
                  <div style={{ position: "relative", width: "110px", height: "110px", flexShrink: 0 }}>
                    <svg width="110" height="110" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="12" />

                      {/* Connected 68% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="12"
                        strokeDasharray={`${68 * 2.38} 240`}
                        strokeDashoffset="0"
                        style={{ filter: "drop-shadow(0 0 5px rgba(59, 130, 246, 0.8))" }}
                      />

                      {/* No Answer 18% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="none"
                        stroke="#38BDF8"
                        strokeWidth="12"
                        strokeDasharray={`${18 * 2.38} 240`}
                        strokeDashoffset={`-${68 * 2.38}`}
                      />

                      {/* Busy 7% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="none"
                        stroke="#8B5CF6"
                        strokeWidth="12"
                        strokeDasharray={`${7 * 2.38} 240`}
                        strokeDashoffset={`-${(68 + 18) * 2.38}`}
                      />

                      {/* Failed 7% */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="none"
                        stroke="#F43F5E"
                        strokeWidth="12"
                        strokeDasharray={`${7 * 2.38} 240`}
                        strokeDashoffset={`-${(68 + 18 + 7) * 2.38}`}
                      />
                    </svg>

                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ fontSize: "9px", color: "#94A3B8" }}>Total Calls</span>
                      <span style={{ fontSize: "12px", fontWeight: 800, color: "#FFFFFF" }}>128,493</span>
                    </div>
                  </div>

                  {/* Donut Legend */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {[
                      { label: "Connected", pct: "68%", col: "#3B82F6" },
                      { label: "No Answer", pct: "18%", col: "#38BDF8" },
                      { label: "Busy", pct: "7%", col: "#8B5CF6" },
                      { label: "Failed", pct: "7%", col: "#F43F5E" },
                    ].map((leg, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11px" }}>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: leg.col }} />
                        <span style={{ color: "#94A3B8" }}>{leg.label}</span>
                        <span style={{ color: "#FFFFFF", fontWeight: 700, marginLeft: "auto" }}>{leg.pct}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .analytics-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
          .charts-subgrid {
            grid-template-columns: 1.3fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
