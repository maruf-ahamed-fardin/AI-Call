"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

// Review answers against the real product, security posture and plans before launch.
const faqs = [
  {
    question: "Will callers know they're talking to an AI?",
    answer:
      "You decide. Many teams open with a short disclosure, which we recommend and which some regions require by law. The voices sound natural either way, and every agent can hand off to a human whenever the caller asks.",
  },
  {
    question: "Which languages and accents are supported?",
    answer:
      "Agents speak 30+ languages with regional accents, and can switch languages mid-call when a caller does. You can preview every voice in the Voice Intelligence section above.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most teams launch their first agent within a day: connect your phone number and CRM, pick a voice, describe the call goal, and run test calls before going live.",
  },
  {
    question: "Can I use my existing phone numbers?",
    answer:
      "Yes. Bring your own numbers through SIP trunking or providers like Twilio and Vonage, or get new local numbers in supported countries.",
  },
  {
    question: "How is call data secured?",
    answer:
      "Recordings and transcripts are encrypted in transit and at rest. Enterprise plans add SSO, audit logs, custom retention and data-residency options.",
  },
  {
    question: "What happens when the AI can't handle a call?",
    answer:
      "The agent transfers the call to a person on your team with a summary of the conversation so far, or schedules a callback if nobody is available.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. Every plan starts with a 14-day free trial, no credit card required. Enterprise customers can request a guided pilot instead.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        position: "relative",
        padding: "100px 0 80px",
        overflow: "hidden",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />

      <div className="container" style={{ maxWidth: "860px" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", margin: "0 auto 48px" }}>
          <div style={{ marginBottom: "16px" }}>
            <div className="badge-eyebrow">
              <span className="badge-dot" />
              <span>FAQ</span>
            </div>
          </div>

          <h2
            style={{
              fontSize: "clamp(30px, 3.8vw, 44px)",
              lineHeight: 1.15,
              fontWeight: 800,
              color: "#FFFFFF",
            }}
          >
            Questions? <span className="text-gradient-cyan">Answered.</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <div
                key={faq.question}
                className="glass-panel-glow"
                style={{
                  borderRadius: "16px",
                  backgroundColor: isOpen ? "rgba(15, 23, 42, 0.85)" : "rgba(7, 13, 30, 0.75)",
                  borderColor: isOpen ? "rgba(56, 189, 248, 0.45)" : "rgba(56, 189, 248, 0.15)",
                }}
              >
                <h3 style={{ fontSize: "inherit" }}>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "16px",
                      padding: "20px 24px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      fontFamily: "var(--font-heading)",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#F8FAFC",
                    }}
                  >
                    <span>{faq.question}</span>
                    <Plus
                      size={18}
                      color="#38BDF8"
                      style={{
                        flexShrink: 0,
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease",
                      }}
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  style={{ padding: "0 24px 22px", fontSize: "15px", lineHeight: 1.65, color: "#94A3B8" }}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
