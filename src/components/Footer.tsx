import React from "react";
import SeloraxLogo from "@/components/ui/SeloraxLogo";
import { ShieldCheck, Sparkles, Zap, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "PRODUCT",
      links: [
        { label: "Neural Speech Engine", href: "#voice-matrix" },
        { label: "Live AI Voice Call", href: "#live-call" },
        { label: "Inbound & Outbound SIP", href: "#capabilities" },
        { label: "Action Engine Workflows", href: "#how-it-works" },
        { label: "ROI Calculator", href: "#roi-calculator" },
        { label: "Carrier Integrations", href: "#features" },
      ],
    },
    {
      title: "SOLUTIONS",
      links: [
        { label: "E-Commerce COD Confirmation", href: "#use-cases" },
        { label: "Healthcare Serial Triage", href: "#use-cases" },
        { label: "Fintech Payment Verification", href: "#use-cases" },
        { label: "Real Estate Tour Booking", href: "#use-cases" },
        { label: "Telecom ISP Auto-Support", href: "#use-cases" },
        { label: "Abandoned Cart Recovery", href: "#capabilities" },
      ],
    },
    {
      title: "ENTERPRISE",
      links: [
        { label: "SOC-2 Type II Compliance", href: "#" },
        { label: "HIPAA Compliant Voice", href: "#" },
        { label: "Sub-380ms Global Edge", href: "#" },
        { label: "Custom Dialect Fine-Tuning", href: "#voice-matrix" },
        { label: "Dedicated SIP Trunking", href: "#" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { label: "Developer API Docs", href: "#" },
        { label: "Webhook Integration Guide", href: "#" },
        { label: "Telephony Latency Whitepaper", href: "#" },
        { label: "Customer Case Studies", href: "#testimonials" },
        { label: "System Status (99.99%)", href: "#" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { label: "About Us", href: "#" },
        { label: "Contact Sales", href: "https://wa.me/8801993213030" },
        { label: "Careers (Hiring AI Engineers)", href: "#" },
        { label: "Partner Program", href: "#" },
      ],
    },
  ];

  return (
    <footer
      style={{
        backgroundColor: "#030712",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        padding: "90px 0 44px 0",
        color: "#94A3B8",
        fontSize: "14px",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr repeat(5, 1fr)",
            gap: "40px",
            marginBottom: "64px",
          }}
          className="footer-grid"
        >
          {/* Brand Info Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <SeloraxLogo size="md" />
            <p style={{ fontSize: "14px", color: "#94A3B8", lineHeight: 1.65, maxWidth: "280px" }}>
              Next-generation autonomous frontline intelligence across voice calls, WhatsApp messages, and enterprise workflows.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#10B981", fontFamily: "var(--font-mono)", fontWeight: 700 }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#10B981", boxShadow: "0 0 8px #10B981" }} />
              <span>ALL TELEPHONY SYSTEMS OPERATIONAL</span>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  fontFamily: "var(--font-mono)",
                  color: "#F8FAFC",
                  letterSpacing: "0.1em",
                }}
              >
                {section.title}
              </div>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        color: "#94A3B8",
                        textDecoration: "none",
                        fontSize: "13px",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#22D3EE")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
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
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "12px",
            fontFamily: "var(--font-mono)",
          }}
        >
          <div>© 2026 SELORAX AI INC. ALL GLOBAL RIGHTS RESERVED.</div>

          <div style={{ display: "flex", gap: "24px" }}>
            <a href="#" style={{ color: "#94A3B8", textDecoration: "none" }}>
              PRIVACY POLICY
            </a>
            <a href="#" style={{ color: "#94A3B8", textDecoration: "none" }}>
              TERMS OF SERVICE
            </a>
            <a href="#" style={{ color: "#94A3B8", textDecoration: "none" }}>
              SECURITY & COMPLIANCE
            </a>
            <a href="#" style={{ color: "#94A3B8", textDecoration: "none" }}>
              SLA STATUS
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </footer>
  );
}
