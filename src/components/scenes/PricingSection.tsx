"use client";

import React, { useRef, useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// PLACEHOLDER PRICING — replace prices, minutes and features with real plan details before launch.
const plans = [
  {
    name: "Starter",
    monthly: 99,
    yearly: 79,
    description: "For small teams testing AI calls on one workflow.",
    features: [
      "500 AI call minutes / month",
      "1 AI voice agent",
      "English voices",
      "Call recordings & transcripts",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Growth",
    monthly: 349,
    yearly: 279,
    description: "For growing teams automating sales and support calls.",
    features: [
      "2,500 AI call minutes / month",
      "5 AI voice agents",
      "30+ languages & accents",
      "CRM integrations",
      "Real-time analytics dashboard",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthly: null,
    yearly: null,
    description: "For high-volume operations with custom requirements.",
    features: [
      "Unlimited call volume",
      "Unlimited AI voice agents",
      "Custom voice cloning",
      "SSO, audit logs & data residency",
      "Dedicated success manager",
      "99.9% uptime SLA",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [yearly, setYearly] = useState(true);

  useScrollReveal(sectionRef, { targets: ".pricing-card", stagger: 0.1, once: true });

  return (
    <section
      id="pricing"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "100px 0 80px",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px" }}>
          <div style={{ marginBottom: "16px" }}>
            <div className="badge-eyebrow">
              <span className="badge-dot" />
              <span>Pricing</span>
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
            Simple Pricing. <span className="text-gradient-cyan">Scale As You Grow.</span>
          </h2>

          <p style={{ fontSize: "16px", lineHeight: 1.6, color: "#94A3B8" }}>
            Start with a 14-day free trial. No credit card required.
          </p>
        </div>

        {/* Billing Toggle */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "48px" }}>
          <div
            role="group"
            aria-label="Billing period"
            style={{
              display: "inline-flex",
              padding: "4px",
              borderRadius: "9999px",
              background: "rgba(7, 13, 30, 0.75)",
              border: "1px solid rgba(56, 189, 248, 0.2)",
            }}
          >
            {[
              { label: "Monthly", value: false },
              { label: "Yearly (save 20%)", value: true },
            ].map((option) => (
              <button
                key={option.label}
                type="button"
                aria-pressed={yearly === option.value}
                onClick={() => setYearly(option.value)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: 600,
                  fontFamily: "var(--font-sans)",
                  color: yearly === option.value ? "#FFFFFF" : "#94A3B8",
                  background:
                    yearly === option.value
                      ? "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)"
                      : "transparent",
                  transition: "all 0.25s ease",
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Plan Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {plans.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly;

            return (
              <div
                key={plan.name}
                className="glass-panel-glow pricing-card"
                style={{
                  position: "relative",
                  padding: "36px 28px",
                  borderRadius: "24px",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: plan.highlighted ? "rgba(15, 23, 42, 0.9)" : "rgba(7, 13, 30, 0.75)",
                  borderColor: plan.highlighted ? "rgba(56, 189, 248, 0.55)" : "rgba(56, 189, 248, 0.15)",
                  boxShadow: plan.highlighted
                    ? "0 20px 50px rgba(0,0,0,0.6), 0 0 35px rgba(56, 189, 248, 0.2)"
                    : "0 8px 20px rgba(0,0,0,0.4)",
                }}
              >
                {plan.highlighted && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-12px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      padding: "4px 14px",
                      borderRadius: "9999px",
                      background: "linear-gradient(135deg, #38BDF8 0%, #3B82F6 100%)",
                      color: "#FFFFFF",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Most Popular
                  </span>
                )}

                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "8px" }}>
                  {plan.name}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.5, color: "#94A3B8", marginBottom: "24px", minHeight: "42px" }}>
                  {plan.description}
                </p>

                <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "28px" }}>
                  {price === null ? (
                    <span style={{ fontSize: "40px", fontWeight: 800, fontFamily: "var(--font-heading)", color: "#FFFFFF" }}>
                      Custom
                    </span>
                  ) : (
                    <>
                      <span style={{ fontSize: "44px", fontWeight: 800, fontFamily: "var(--font-heading)", color: "#FFFFFF" }}>
                        ${price}
                      </span>
                      <span style={{ fontSize: "14px", color: "#64748B" }}>
                        / month{yearly ? ", billed yearly" : ""}
                      </span>
                    </>
                  )}
                </div>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px", flex: 1 }}>
                  {plan.features.map((feature) => (
                    <li key={feature} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "#CBD5E1" }}>
                      <Check size={16} color="#38BDF8" style={{ flexShrink: 0, marginTop: "3px" }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={plan.highlighted ? "btn btn-primary" : "btn btn-secondary"}
                  style={{ width: "100%", padding: "14px", fontSize: "15px", fontWeight: 700 }}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
