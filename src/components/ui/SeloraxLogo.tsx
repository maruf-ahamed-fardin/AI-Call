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
  const iconHeight = size === "sm" ? 24 : size === "lg" ? 34 : 28;
  const textSize = size === "sm" ? "18px" : size === "lg" ? "24px" : "21px";

  return (
    <div
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
      style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          height={iconHeight}
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "visible", flexShrink: 0 }}
        >
          {/* Brand Wave Bars */}
          <rect
            x="4"
            y="9"
            width="5"
            height="18"
            rx="2.5"
            fill="#F97316"
          />
          <rect
            x="12"
            y="4"
            width="5"
            height="28"
            rx="2.5"
            fill="#EA580C"
          />
          <rect
            x="20"
            y="8"
            width="5"
            height="20"
            rx="2.5"
            fill="#2563EB"
          />
          <rect
            x="28"
            y="13"
            width="4"
            height="10"
            rx="2"
            fill="#3B82F6"
          />
        </svg>
      </div>

      {withText && (
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: textSize,
            fontWeight: 800,
            color: "#0F172A",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            display: "flex",
            alignItems: "center",
            gap: "3px",
          }}
        >
          <span>Selorax</span>
          <span
            style={{
              color: "#2563EB",
              fontWeight: 800,
            }}
          >
            AI
          </span>
        </span>
      )}
    </div>
  );
}
