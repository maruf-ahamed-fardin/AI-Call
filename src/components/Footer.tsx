import React from "react";
import SeloraxLogo from "@/components/ui/SeloraxLogo";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid rgba(15, 23, 42, 0.08)",
        padding: "40px 0",
        color: "#64748B",
        fontSize: "14px",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        {/* Brand & Copyright */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
          <SeloraxLogo size="sm" />
          <span style={{ fontSize: "13px", color: "#94A3B8" }}>
            © 2026 SeloraX. All rights reserved.
          </span>
        </div>

        {/* Center Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px", fontSize: "13px", fontWeight: 600 }}>
          <a href="#features" style={{ color: "#475569", textDecoration: "none" }}>
            Product
          </a>
          <a href="#" style={{ color: "#475569", textDecoration: "none" }}>
            Company
          </a>
          <a href="#" style={{ color: "#475569", textDecoration: "none" }}>
            Resources
          </a>
          <a href="#" style={{ color: "#475569", textDecoration: "none" }}>
            Legal
          </a>
        </div>

        {/* Social Icons (Clean Inline SVGs) */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#64748B" }}>
          {/* LinkedIn */}
          <a href="#" aria-label="LinkedIn" style={{ color: "inherit", display: "flex", alignItems: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* Twitter / X */}
          <a href="#" aria-label="Twitter" style={{ color: "inherit", display: "flex", alignItems: "center" }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </a>

          {/* GitHub */}
          <a href="#" aria-label="GitHub" style={{ color: "inherit", display: "flex", alignItems: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
