import React from "react";

interface AvatarVisualProps {
  name?: string;
  size?: number;
  className?: string;
  variant?: "sarah" | "john" | "rahul" | "fahmida" | "mohammad" | "nusrat";
}

export default function AvatarVisual({
  name = "Sarah Ahmed",
  size = 64,
  className = "",
  variant = "sarah",
}: AvatarVisualProps) {
  // Pre-configured high-quality illustrated portraits for each persona
  const getAvatarConfig = () => {
    switch (variant) {
      case "sarah":
        return {
          bg: "linear-gradient(135deg, #FFEDD5 0%, #FED7AA 50%, #FDBA74 100%)",
          hair: "#3B2820",
          skin: "#F6C8A4",
          shirt: "#2563EB",
          accent: "#F97316",
        };
      case "john":
        return {
          bg: "linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 50%, #93C5FD 100%)",
          hair: "#1F2937",
          skin: "#F3C5A8",
          shirt: "#0F172A",
          accent: "#2563EB",
        };
      case "rahul":
        return {
          bg: "linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 100%)",
          hair: "#111827",
          skin: "#E2A882",
          shirt: "#F97316",
          accent: "#2563EB",
        };
      case "fahmida":
        return {
          bg: "linear-gradient(135deg, #FCE7F3 0%, #FBCFE8 100%)",
          hair: "#1E1B18",
          skin: "#F5C7A9",
          shirt: "#8B5CF6",
          accent: "#EC4899",
        };
      case "mohammad":
        return {
          bg: "linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)",
          hair: "#374151",
          skin: "#EBB28B",
          shirt: "#059669",
          accent: "#10B981",
        };
      case "nusrat":
        return {
          bg: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)",
          hair: "#292524",
          skin: "#FAD1B5",
          shirt: "#D97706",
          accent: "#F59E0B",
        };
    }
  };

  const cfg = getAvatarConfig();

  return (
    <div
      className={`relative rounded-full overflow-hidden select-none flex-shrink-0 ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: cfg.bg,
        boxShadow: "0 4px 14px rgba(15, 23, 42, 0.08)",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        {/* Soft Background Circle */}
        <circle cx="32" cy="32" r="32" fill={cfg.bg} />

        {/* Shoulders / Shirt */}
        <path
          d="M12 60C12 48.9543 20.9543 40 32 40C43.0457 40 52 48.9543 52 60"
          fill={cfg.shirt}
        />

        {/* Neck */}
        <rect x="27" y="32" width="10" height="12" rx="2" fill={cfg.skin} />

        {/* Head Shape */}
        <ellipse cx="32" cy="24" rx="13" ry="15" fill={cfg.skin} />

        {/* Hair Styles */}
        {variant === "sarah" || variant === "fahmida" || variant === "nusrat" ? (
          <>
            {/* Long Hair Back */}
            <path
              d="M18 20C18 11.1634 24.268 4 32 4C39.732 4 46 11.1634 46 20V36C46 39.3137 43.3137 42 40 42C38.5 42 37 40 36 38L32 36L28 38C27 40 25.5 42 24 42C20.6863 42 18 39.3137 18 36V20Z"
              fill={cfg.hair}
            />
            {/* Bangs */}
            <path
              d="M19 18C23 11 31 10 32 10C33 10 41 11 45 18C42 14 36 12 32 12C28 12 22 14 19 18Z"
              fill={cfg.hair}
            />
          </>
        ) : (
          <>
            {/* Short Hair */}
            <path
              d="M19 22C19 12.0589 24.8203 4 32 4C39.1797 4 45 12.0589 45 22C45 23 43 22 41 20C38 17 35 15 32 15C29 15 26 17 23 20C21 22 19 23 19 22Z"
              fill={cfg.hair}
            />
          </>
        )}

        {/* Eyebrows */}
        <path d="M24 19C26 18.5 28 18.5 29 19" stroke={cfg.hair} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M35 19C36 18.5 38 18.5 40 19" stroke={cfg.hair} strokeWidth="1.5" strokeLinecap="round" />

        {/* Eyes */}
        <circle cx="26.5" cy="22.5" r="1.8" fill="#1E293B" />
        <circle cx="37.5" cy="22.5" r="1.8" fill="#1E293B" />
        <circle cx="27" cy="22" r="0.6" fill="#FFFFFF" />
        <circle cx="38" cy="22" r="0.6" fill="#FFFFFF" />

        {/* Soft Smile */}
        <path
          d="M28 28.5C29.5 30.5 34.5 30.5 36 28.5"
          stroke="#9A3412"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* Small Cheeks Tint */}
        <circle cx="23.5" cy="25.5" r="2" fill="#F87171" opacity="0.3" />
        <circle cx="40.5" cy="25.5" r="2" fill="#F87171" opacity="0.3" />
      </svg>
    </div>
  );
}
