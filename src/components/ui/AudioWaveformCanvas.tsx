"use client";

import React, { useEffect, useRef } from "react";

interface AudioWaveformCanvasProps {
  active?: boolean;
  colorTheme?: "orange" | "blue" | "mixed" | "cyan" | "emerald";
  height?: number;
  barCount?: number;
  className?: string;
  speed?: number;
}

export default function AudioWaveformCanvas({
  active = true,
  colorTheme = "orange",
  height = 36,
  barCount = 32,
  className = "",
  speed = 1,
}: AudioWaveformCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let step = 0;

    const width = (canvas.width = barCount * 6);
    canvas.height = height;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      step += 0.08 * speed;

      const barWidth = 3;
      const gap = 3;

      for (let i = 0; i < barCount; i++) {
        // Natural speech envelope
        const centerDist = Math.abs(i - barCount / 2) / (barCount / 2);
        const envelope = 1 - Math.pow(centerDist, 1.8);

        let h = 4;
        if (active) {
          const wave1 = Math.sin(step + i * 0.35) * 0.5 + 0.5;
          const wave2 = Math.cos(step * 0.7 + i * 0.2) * 0.5 + 0.5;
          const wave3 = Math.sin(step * 1.4 + i * 0.5) * 0.3 + 0.3;
          h = Math.max(4, (wave1 * 0.5 + wave2 * 0.3 + wave3 * 0.2) * (height - 4) * envelope + 4);
        }

        const x = i * (barWidth + gap);
        const y = (height - h) / 2;

        // Dynamic gradients tailored for clean light luxury theme
        const gradient = ctx.createLinearGradient(0, y, 0, y + h);
        if (colorTheme === "orange") {
          gradient.addColorStop(0, "#FB923C");
          gradient.addColorStop(1, "#EA580C");
        } else if (colorTheme === "blue") {
          gradient.addColorStop(0, "#60A5FA");
          gradient.addColorStop(1, "#2563EB");
        } else if (colorTheme === "emerald") {
          gradient.addColorStop(0, "#34D399");
          gradient.addColorStop(1, "#059669");
        } else if (colorTheme === "cyan") {
          gradient.addColorStop(0, "#22D3EE");
          gradient.addColorStop(1, "#0284C7");
        } else {
          // Mixed Orange + Royal Blue
          if (i % 2 === 0) {
            gradient.addColorStop(0, "#FB923C");
            gradient.addColorStop(1, "#EA580C");
          } else {
            gradient.addColorStop(0, "#60A5FA");
            gradient.addColorStop(1, "#2563EB");
          }
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, h, 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [active, colorTheme, height, barCount, speed]);

  return (
    <div className={`inline-flex items-center select-none ${className}`} style={{ height: `${height}px` }}>
      <canvas
        ref={canvasRef}
        style={{
          width: `${barCount * 6}px`,
          height: `${height}px`,
          display: "block",
        }}
      />
    </div>
  );
}
