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
      className={`inline-flex items-center select-none ${className}`}
      style={{ display: "inline-flex", alignItems: "center", gap: "9px" }}
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
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "visible", flexShrink: 0 }}
        >
          {/* Brand Wave Bars */}
          <rect x="2" y="8" width="4.5" height="16" rx="2.25" fill="#F97316" />
          <rect x="10" y="3" width="4.5" height="26" rx="2.25" fill="#EA580C" />
          <rect x="18" y="7" width="4.5" height="18" rx="2.25" fill="#2563EB" />
          <rect x="26" y="12" width="4" height="9" rx="2" fill="#3B82F6" />
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
          }}
        >
          <span>Selora</span>
          <span
            style={{
              color: "#F97316",
              fontWeight: 900,
            }}
          >
            X
          </span>
        </span>
      )}
    </div>
  );
}
