import React from "react";
import SeloraxLogo from "@/components/ui/SeloraxLogo";

export default function Footer() {
  const footerSections = [
    {
      title: "PRODUCT",
      links: [
        { label: "AI Voice Agent", href: "#live-call" },
        { label: "Voice Matrix", href: "#voice-matrix" },
        { label: "ROI Calculator", href: "#roi-calculator" },
        { label: "Action Engine", href: "#how-it-works" },
        { label: "Integrations", href: "#features" },
      ],
    },
    {
      title: "SOLUTIONS",
      links: [
        { label: "E-Commerce COD", href: "#use-cases" },
        { label: "Healthcare Booking", href: "#use-cases" },
        { label: "Fintech Verification", href: "#use-cases" },
        { label: "Real Estate Visits", href: "#use-cases" },
        { label: "Customer Support", href: "#use-cases" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { label: "About Us", href: "#" },
        { label: "Contact Sales", href: "https://wa.me/8801993213030" },
        { label: "Careers", href: "#" },
        { label: "Security & Privacy", href: "#" },
      ],
    },
  ];

  return (
    <footer
      style={{
        backgroundColor: "#FAFAF9",
        borderTop: "1px solid rgba(15, 23, 42, 0.08)",
        padding: "80px 0 40px 0",
        color: "#64748B",
        fontSize: "14px",
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr repeat(3, 1fr)",
            gap: "40px",
            marginBottom: "60px",
          }}
          className="footer-grid"
        >
          {/* Brand Info Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <SeloraxLogo size="md" />
            <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.65, maxWidth: "280px" }}>
              One AI across voice, phone, and chat — built to understand customers, take action, and keep your business running 24/7.
            </p>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  fontFamily: "var(--font-mono)",
                  color: "#0F172A",
                  letterSpacing: "0.08em",
                }}
              >
                {section.title}
              </div>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        color: "#64748B",
                        textDecoration: "none",
                        fontSize: "13px",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#0F172A")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div
          style={{
            paddingTop: "32px",
            borderTop: "1px solid rgba(15, 23, 42, 0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "12px",
            fontFamily: "var(--font-mono)",
          }}
        >
          <div>© 2026 SELORAX AI INC. ALL RIGHTS RESERVED.</div>

          <div style={{ display: "flex", gap: "20px" }}>
            <a href="#" style={{ color: "#64748B", textDecoration: "none" }}>
              PRIVACY
            </a>
            <a href="#" style={{ color: "#64748B", textDecoration: "none" }}>
              TERMS
            </a>
            <a href="#" style={{ color: "#64748B", textDecoration: "none" }}>
              SECURITY
            </a>
            <a href="#" style={{ color: "#64748B", textDecoration: "none" }}>
              STATUS
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </footer>
  );
}
