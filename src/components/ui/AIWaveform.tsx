"use client";

import React, { useEffect, useRef } from "react";

interface AIWaveformProps {
  active?: boolean;
  colorTheme?: "blue" | "orange" | "mixed";
  height?: number;
  barCount?: number;
  className?: string;
  speed?: number;
}

export default function AIWaveform({
  active = true,
  colorTheme = "blue",
  height = 36,
  barCount = 30,
  className = "",
  speed = 1,
}: AIWaveformProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let step = 0;

    const barWidth = 3;
    const gap = 3;
    const totalWidth = barCount * (barWidth + gap);

    canvas.width = totalWidth;
    canvas.height = height;

    const render = () => {
      ctx.clearRect(0, 0, totalWidth, height);

      step += 0.08 * speed;

      for (let i = 0; i < barCount; i++) {
        // Natural speech bell curve
        const centerDist = Math.abs(i - barCount / 2) / (barCount / 2);
        const envelope = 1 - Math.pow(centerDist, 1.6);

        let h = 4;
        if (active) {
          const wave1 = Math.sin(step + i * 0.35) * 0.5 + 0.5;
          const wave2 = Math.cos(step * 0.7 + i * 0.22) * 0.5 + 0.5;
          const wave3 = Math.sin(step * 1.3 + i * 0.45) * 0.3 + 0.3;
          h = Math.max(4, (wave1 * 0.55 + wave2 * 0.3 + wave3 * 0.15) * (height - 4) * envelope + 4);
        }

        const x = i * (barWidth + gap);
        const y = (height - h) / 2;

        const gradient = ctx.createLinearGradient(0, y, 0, y + h);
        if (colorTheme === "blue") {
          gradient.addColorStop(0, "#60A5FA");
          gradient.addColorStop(1, "#2563EB");
        } else if (colorTheme === "orange") {
          gradient.addColorStop(0, "#FB923C");
          gradient.addColorStop(1, "#EA580C");
        } else {
          if (i % 2 === 0) {
            gradient.addColorStop(0, "#60A5FA");
            gradient.addColorStop(1, "#2563EB");
          } else {
            gradient.addColorStop(0, "#FB923C");
            gradient.addColorStop(1, "#EA580C");
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
          display: "block",
          filter: "drop-shadow(0 2px 6px rgba(37, 99, 235, 0.25))",
        }}
      />
    </div>
  );
}
