"use client";

import React from "react";
import NexusLogo from "@/components/ui/NexusLogo";

export default function Footer() {
  const footerLinks = [
    { label: "Product", href: "#how-it-works" },
    { label: "Solutions", href: "#voice-intelligence" },
    { label: "Resources", href: "#industries" },
    { label: "Pricing", href: "#analytics" },
    { label: "Company", href: "#contact" },
  ];

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(56, 189, 248, 0.15)",
        backgroundColor: "rgba(2, 6, 23, 0.95)",
        padding: "40px 0",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
          }}
          className="footer-content"
        >
          {/* Brand Logo */}
          <a href="#hero" style={{ textDecoration: "none" }}>
            <NexusLogo size="sm" />
          </a>

          {/* Navigation Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
              flexWrap: "wrap",
            }}
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "13px",
                  color: "#94A3B8",
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#38BDF8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright & Socials */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "12px", color: "#64748B" }}>
              © 2026 Nexus AI. All rights reserved.
            </span>

            {/* Social SVGs */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Twitter"
                style={{ color: "#94A3B8", display: "flex", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#38BDF8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ color: "#94A3B8", display: "flex", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#38BDF8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 1.6 1.6 1.6 1.6 0 0 0-1.6-1.6z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{ color: "#94A3B8", display: "flex", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#38BDF8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                style={{ color: "#94A3B8", display: "flex", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#38BDF8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
}
