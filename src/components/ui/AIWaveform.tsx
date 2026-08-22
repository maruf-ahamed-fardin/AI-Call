"use client";

import React, { useEffect, useState } from "react";

interface AIWaveformProps {
  active?: boolean;
  barCount?: number;
  color?: "blue" | "orange" | "cyan" | "mixed";
  height?: number;
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

export default function AIWaveform({
  active = true,
  barCount = 28,
  color = "blue",
  height = 36,
  className = "",
  speed = "normal",
}: AIWaveformProps) {
  // Pre-generate balanced initial heights
  const [bars] = useState<number[]>(() => {
    const arr: number[] = [];
    for (let i = 0; i < barCount; i++) {
      // Natural bell-curve or voice-like distribution
      const centerFactor = 1 - Math.abs((i - barCount / 2) / (barCount / 2));
      const val = 0.25 + centerFactor * 0.7 + (Math.sin(i * 1.5) * 0.15);
      arr.push(Math.max(0.15, Math.min(1, val)));
    }
    return arr;
  });

  const getColor = (index: number) => {
    if (color === "orange") return "#F97316";
    if (color === "cyan") return "#06B6D4";
    if (color === "mixed") {
      return index % 3 === 0 ? "#F97316" : index % 2 === 0 ? "#2563EB" : "#06B6D4";
    }
    return "#2563EB";
  };

  const getAnimDuration = (index: number) => {
    const base = speed === "fast" ? 0.6 : speed === "slow" ? 1.4 : 0.9;
    const offset = (index % 5) * 0.12;
    return `${base + offset}s`;
  };

  return (
    <div
      className={`inline-flex items-center gap-[3px] select-none ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "3px",
        height: `${height}px`,
      }}
      aria-label="Audio Waveform Visualization"
    >
      {bars.map((initialScale, i) => {
        const barColor = getColor(i);
        const animDuration = getAnimDuration(i);
        const animDelay = `${(i * 0.04) % 0.8}s`;

        return (
          <span
            key={i}
            style={{
              width: "3px",
              height: "100%",
              backgroundColor: barColor,
              borderRadius: "9999px",
              display: "inline-block",
              transformOrigin: "center",
              transform: active ? `scaleY(${initialScale})` : "scaleY(0.15)",
              animation: active
                ? `wavePulse ${animDuration} ease-in-out infinite alternate`
                : "none",
              animationDelay: animDelay,
              opacity: active ? 0.9 : 0.4,
              transition: "transform 0.3s ease, opacity 0.3s ease",
            }}
          />
        );
      })}

      <style jsx>{`
        @keyframes wavePulse {
          0% {
            transform: scaleY(0.18);
          }
          50% {
            transform: scaleY(0.95);
          }
          100% {
            transform: scaleY(0.35);
          }
        }
      `}</style>
    </div>
  );
}
