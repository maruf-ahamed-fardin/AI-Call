"use client";

import React, { useState } from "react";
import { Zap, TrendingDown, Clock, Brain, Network } from "lucide-react";

export default function WhyChooseUsSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const features = [
    {
      title: "Faster Conversions",
      description: "AI engages leads instantly and increases conversion.",
      icon: Zap,
      color: "#38BDF8",
    },
    {
      title: "Lower Costs",
      description: "Reduce operational cost up to 60%.",
      icon: TrendingDown,
      color: "#3B82F6",
    },
    {
      title: "24/7 Automation",
      description: "AI works 24/7 without breaks or downtime.",
      icon: Clock,
      color: "#38BDF8",
    },
    {
      title: "Human-like AI",
      description: "Natural conversations that build real trust.",
      icon: Brain,
      color: "#60A5FA",
    },
    {
      title: "Seamless Integration",
      description: "Works with 100+ CRM & tools you already use.",
      icon: Network,
      color: "#38BDF8",
    },
  ];

  return (
    <section
      id="why-choose-us"
      style={{
        position: "relative",
        padding: "100px 0 80px",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 60px" }}>
          <div style={{ marginBottom: "16px" }}>
            <div className="badge-eyebrow">
              <span className="badge-dot" />
              <span>Why Choose Nexus AI</span>
            </div>
          </div>

          <h2
            style={{
              fontSize: "clamp(30px, 3.8vw, 44px)",
              lineHeight: 1.15,
              fontWeight: 800,
              color: "#FFFFFF",
            }}
          >
            More Calls. More Conversions. <br />
            <span className="text-gradient-cyan">More Growth.</span>
          </h2>
        </div>

        {/* 5 Horizontal Feature Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "20px",
          }}
        >
          {features.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={item.title}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="glass-panel-glow"
                style={{
                  padding: "28px 20px",
                  borderRadius: "20px",
                  backgroundColor: isHovered ? "rgba(15, 23, 42, 0.85)" : "rgba(7, 13, 30, 0.75)",
                  borderColor: isHovered ? item.color : "rgba(56, 189, 248, 0.15)",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                  boxShadow: isHovered
                    ? `0 16px 36px rgba(0,0,0,0.6), 0 0 25px ${item.color}30`
                    : "0 8px 20px rgba(0,0,0,0.4)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                {/* Glowing Icon */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(2, 6, 23, 0.8)",
                    border: `1.5px solid ${item.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: item.color,
                    marginBottom: "20px",
                    boxShadow: `0 0 16px ${item.color}35`,
                  }}
                >
                  <Icon size={22} />
                </div>

                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: "10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.5,
                    color: "#94A3B8",
                  }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
