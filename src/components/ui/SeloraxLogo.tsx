import React from "react";

interface SeloraxLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withText?: boolean;
}

export default function SeloraxLogo({
  className = "",
  size = "md",
  withText = true,
}: SeloraxLogoProps) {
  const iconHeight = size === "sm" ? 22 : size === "lg" ? 32 : 26;
  const textSize = size === "sm" ? "18px" : size === "lg" ? "24px" : "21px";

  return (
    <div
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
      style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}
    >
      <svg
        height={iconHeight}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible", flexShrink: 0 }}
      >
        {/* 3 Brand Orange Bars */}
        <rect
          x="4"
          y="8"
          width="4.5"
          height="16"
          rx="2.25"
          fill="#F97316"
        />
        <rect
          x="13.75"
          y="4"
          width="4.5"
          height="24"
          rx="2.25"
          fill="#EA580C"
        />
        <rect
          x="23.5"
          y="10"
          width="4.5"
          height="14"
          rx="2.25"
          fill="#FB923C"
        />
      </svg>

      {withText && (
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: textSize,
            fontWeight: 800,
            color: "#0F172A",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          Selorax <span style={{ color: "#2563EB", fontWeight: 700 }}>AI</span>
        </span>
      )}
    </div>
  );
}
