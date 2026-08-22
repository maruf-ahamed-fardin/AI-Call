"use client";

import React, { useRef } from "react";
import { Star } from "lucide-react";
import AvatarVisual from "@/components/ui/AvatarVisual";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  logoText: string;
  avatarVariant: "rahul" | "fahmida" | "mohammad" | "nusrat";
}

const testimonials: TestimonialItem[] = [
  {
    id: "t1",
    quote:
      "SeloraX AI Calling has completely changed how we handle customer outreach. It's like having a 24/7 sales team.",
    author: "Rahul Islam",
    role: "COO",
    company: "Urban",
    logoText: "urban",
    avatarVariant: "rahul",
  },
  {
    id: "t2",
    quote:
      "The call quality is amazing and our conversion rate increased by 280%.",
    author: "Fahmida Rahman",
    role: "Marketing Head",
    company: "Aven",
    logoText: "aven.",
    avatarVariant: "fahmida",
  },
  {
    id: "t3",
    quote:
      "Setup was easy and the results are immediate. Highly recommended!",
    author: "Mohammad Hasan",
    role: "Founder",
    company: "Lumina",
    logoText: "lumina",
    avatarVariant: "mohammad",
  },
  {
    id: "t4",
    quote:
      "Best AI calling solution we've used. It just works!",
    author: "Nusrat Jahan",
    role: "Operations",
    company: "Kanba",
    logoText: "kanba",
    avatarVariant: "nusrat",
  },
];

export default function TestimonialsScene() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollReveal(sectionRef, {
    targets: ".testimonial-card",
    start: "top 80%",
    stagger: 0.08,
    once: true,
  });

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "120px 0 100px 0",
        backgroundColor: "rgba(248, 250, 252, 0.7)",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 5 }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 56px auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
            <span className="badge-eyebrow">
              <span className="badge-dot" />
              TRUSTED BY GROWING BUSINESSES
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(34px, 4.2vw, 52px)",
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
            }}
          >
            What Our Customers Say
          </h2>
        </div>

        {/* 4 Testimonials Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="glass-panel-card gpu-layer testimonial-card"
              style={{
                padding: "32px 24px",
                borderRadius: "24px",
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(15, 23, 42, 0.08)",
                boxShadow: "0 10px 30px -5px rgba(15, 23, 42, 0.04)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <div>
                {/* 5 Stars */}
                <div style={{ display: "flex", gap: "3px", marginBottom: "16px" }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#F97316" color="#F97316" />
                  ))}
                </div>

                <p
                  style={{
                    fontSize: "14px",
                    color: "#334155",
                    lineHeight: 1.6,
                    fontWeight: 500,
                  }}
                >
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer with AvatarVisual & Company Logo */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(15, 23, 42, 0.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <AvatarVisual variant={item.avatarVariant} size={42} />
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 800, color: "#0F172A" }}>
                      {item.author}
                    </div>
                    <div style={{ fontSize: "12px", color: "#64748B" }}>
                      {item.role}, {item.company}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "16px",
                    fontWeight: 800,
                    color: "#94A3B8",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.logoText}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
