"use client";

import React from "react";

interface NexusLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export default function NexusLogo({ size = "md", showText = true }: NexusLogoProps) {
  const iconSizes = {
    sm: 24,
    md: 32,
    lg: 40,
  };

  const textSizes = {
    sm: "16px",
    md: "20px",
    lg: "24px",
  };

  const currentIconSize = iconSizes[size];

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
      {/* Glowing Polygonal Futuristic Nexus AI Glyph */}
      <div
        style={{
          width: currentIconSize,
          height: currentIconSize,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width={currentIconSize}
          height={currentIconSize}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: "drop-shadow(0 0 8px rgba(56, 189, 248, 0.6))" }}
        >
          {/* Outer Hexagonal Shield */}
          <polygon
            points="20,2 36,11 36,29 20,38 4,29 4,11"
            stroke="url(#nexus-grad)"
            strokeWidth="2"
            fill="rgba(59, 130, 246, 0.12)"
          />
          {/* Inner Energy Core Diamond */}
          <polygon
            points="20,10 29,20 20,30 11,20"
            fill="url(#core-grad)"
            stroke="#38BDF8"
            strokeWidth="1.5"
          />
          {/* Center Point */}
          <circle cx="20" cy="20" r="2.5" fill="#FFFFFF" />
          
          {/* Neural Ray Lines */}
          <line x1="20" y1="2" x2="20" y2="10" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="1 1" />
          <line x1="20" y1="30" x2="20" y2="38" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="1 1" />
          <line x1="4" y1="20" x2="11" y2="20" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="1 1" />
          <line x1="29" y1="20" x2="36" y2="20" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="1 1" />

          <defs>
            <linearGradient id="nexus-grad" x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="0.5" stopColor="#3B82F6" />
              <stop offset="1" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="core-grad" x1="11" y1="10" x2="29" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="1" stopColor="#2563EB" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: textSizes[size],
              letterSpacing: "0.06em",
              color: "#FFFFFF",
              textTransform: "uppercase",
            }}
          >
            NEXUS <span style={{ color: "#38BDF8", textShadow: "0 0 12px rgba(56, 189, 248, 0.6)" }}>AI</span>
          </span>
        </div>
      )}
    </div>
  );
}
