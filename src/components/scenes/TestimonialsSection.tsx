"use client";

import React, { useRef } from "react";
import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// PLACEHOLDER TESTIMONIALS — replace with real, approved customer quotes before launch.
const testimonials = [
  {
    quote:
      "Nexus AI handles our first-touch outreach around the clock. It's like adding a sales team that never sleeps.",
    author: "Jordan Lee",
    role: "COO",
    company: "Company A",
    color: "#38BDF8",
  },
  {
    quote:
      "Call quality is excellent, and our lead-to-meeting conversion went up noticeably within the first month.",
    author: "Priya Nair",
    role: "Head of Marketing",
    company: "Company B",
    color: "#3B82F6",
  },
  {
    quote:
      "Setup took an afternoon. We connected our CRM, picked a voice, and the agent was live the same day.",
    author: "Marcus Webb",
    role: "Founder",
    company: "Company C",
    color: "#60A5FA",
  },
  {
    quote:
      "Appointment no-shows dropped once the AI started handling confirmations and reminders for us.",
    author: "Elena Rossi",
    role: "Operations Lead",
    company: "Company D",
    color: "#38BDF8",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollReveal(sectionRef, { targets: ".testimonial-card", stagger: 0.08, once: true });

  return (
    <section
      id="testimonials"
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
              <span>Customer Stories</span>
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
            Teams That Talk <span className="text-gradient-cyan">Smarter.</span>
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((item) => (
            <figure
              key={item.author}
              className="glass-panel-glow testimonial-card"
              style={{
                padding: "32px 24px",
                borderRadius: "20px",
                backgroundColor: "rgba(7, 13, 30, 0.75)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "24px",
              }}
            >
              <div>
                <div style={{ display: "flex", gap: "3px", marginBottom: "16px" }} aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#F59E0B" stroke="none" />
                  ))}
                </div>

                <blockquote style={{ fontSize: "15px", lineHeight: 1.6, color: "#CBD5E1" }}>
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <figcaption
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(2, 6, 23, 0.8)",
                    border: `1.5px solid ${item.color}`,
                    boxShadow: `0 0 14px ${item.color}35`,
                    color: item.color,
                    fontSize: "14px",
                    fontWeight: 700,
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {initials(item.author)}
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#FFFFFF" }}>{item.author}</div>
                  <div style={{ fontSize: "12px", color: "#64748B" }}>
                    {item.role}, {item.company}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
