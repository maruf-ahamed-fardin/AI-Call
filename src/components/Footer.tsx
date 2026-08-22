import React from "react";
import SeloraxLogo from "@/components/ui/SeloraxLogo";

export default function Footer() {
  const footerSections = [
    {
      title: "PRODUCT",
      links: [
        { label: "AI Chat", href: "#features" },
        { label: "AI Voice", href: "#live-call" },
        { label: "AI Phone Agent", href: "#capabilities" },
        { label: "Customer Context", href: "#how-it-works" },
        { label: "Actions & Workflows", href: "#how-it-works" },
        { label: "Integrations", href: "#features" },
      ],
    },
    {
      title: "SOLUTIONS",
      links: [
        { label: "Customer Support", href: "#use-cases" },
        { label: "Lead Qualification", href: "#use-cases" },
        { label: "Sales", href: "#use-cases" },
        { label: "Order Taking", href: "#use-cases" },
        { label: "Appointments", href: "#use-cases" },
        { label: "Follow-up", href: "#use-cases" },
        { label: "Outbound Calls", href: "#capabilities" },
      ],
    },
    {
      title: "INDUSTRIES",
      links: [
        { label: "E-commerce", href: "#use-cases" },
        { label: "Life Insurance", href: "#use-cases" },
        { label: "Financial Services", href: "#use-cases" },
        { label: "Insurance", href: "#use-cases" },
        { label: "Healthcare", href: "#use-cases" },
        { label: "Real Estate", href: "#use-cases" },
        { label: "Telecom", href: "#use-cases" },
        { label: "Education", href: "#use-cases" },
        { label: "Travel", href: "#use-cases" },
        { label: "Logistics", href: "#use-cases" },
        { label: "Retail", href: "#use-cases" },
      ],
    },
    {
      title: "CUSTOMERS",
      links: [
        { label: "Customer Stories", href: "#testimonials" },
        { label: "Case Studies", href: "#testimonials" },
        { label: "Testimonials", href: "#testimonials" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Guides", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Security", href: "#" },
        { label: "FAQ", href: "#" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { label: "About", href: "#" },
        { label: "Contact", href: "https://wa.me/8801993213030" },
        { label: "Careers", href: "#" },
        { label: "Partners", href: "#" },
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
            gridTemplateColumns: "1.5fr repeat(6, 1fr)",
            gap: "36px",
            marginBottom: "60px",
          }}
          className="footer-grid"
        >
          {/* Brand Info Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <SeloraxLogo size="md" />
            <p style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.6, maxWidth: "260px" }}>
              One AI across chat, voice, and phone—built to understand customers, take action, and keep the conversation moving.
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
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
            gap: 32px !important;
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
