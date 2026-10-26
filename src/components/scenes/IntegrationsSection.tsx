"use client";

import React, { useRef } from "react";
import { Database, CalendarCheck, MessageSquare, Phone, Workflow, ShoppingCart } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Confirm each listed integration is actually supported before launch.
const categories = [
  { title: "CRM", icon: Database, color: "#38BDF8", tools: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM"] },
  { title: "Calendars", icon: CalendarCheck, color: "#3B82F6", tools: ["Google Calendar", "Outlook", "Calendly", "Cal.com"] },
  { title: "Messaging", icon: MessageSquare, color: "#60A5FA", tools: ["Slack", "Microsoft Teams", "WhatsApp", "SMS"] },
  { title: "Telephony", icon: Phone, color: "#38BDF8", tools: ["Twilio", "Vonage", "SIP Trunking", "Bring Your Own Number"] },
  { title: "Automation", icon: Workflow, color: "#3B82F6", tools: ["Zapier", "Make", "n8n", "Webhooks & REST API"] },
  { title: "E-commerce", icon: ShoppingCart, color: "#60A5FA", tools: ["Shopify", "WooCommerce", "Stripe", "Custom Stores"] },
];

export default function IntegrationsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollReveal(sectionRef, { targets: ".integration-card", stagger: 0.06, once: true });

  return (
    <section
      id="integrations"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "100px 0 80px",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 56px" }}>
          <div style={{ marginBottom: "16px" }}>
            <div className="badge-eyebrow">
              <span className="badge-dot" />
              <span>Integrations</span>
            </div>
          </div>

          <h2
            style={{
              fontSize: "clamp(30px, 3.8vw, 44px)",
              lineHeight: 1.15,
              fontWeight: 800,
              color: "#FFFFFF",
              marginBottom: "16px",
            }}
          >
            Plugs Into The Tools <span className="text-gradient-cyan">You Already Use.</span>
          </h2>

          <p style={{ fontSize: "16px", lineHeight: 1.6, color: "#94A3B8" }}>
            Call outcomes, transcripts and bookings sync straight to your stack. No copy-paste.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="glass-panel-glow integration-card"
                style={{ padding: "28px 24px", borderRadius: "20px", backgroundColor: "rgba(7, 13, 30, 0.75)" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(2, 6, 23, 0.8)",
                      border: `1.5px solid ${category.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: category.color,
                      boxShadow: `0 0 16px ${category.color}35`,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#FFFFFF" }}>{category.title}</h3>
                </div>

                <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {category.tools.map((tool) => (
                    <li
                      key={tool}
                      style={{
                        padding: "6px 12px",
                        borderRadius: "9999px",
                        fontSize: "13px",
                        color: "#CBD5E1",
                        backgroundColor: "rgba(15, 23, 42, 0.8)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                      }}
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
