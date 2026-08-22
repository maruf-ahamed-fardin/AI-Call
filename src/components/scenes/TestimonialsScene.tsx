"use client";

import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, TrendingUp } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarBg: string;
  metrics: string;
  highlight: string;
}

const reviews: Testimonial[] = [
  {
    id: "shahin",
    quote:
      "Selorax AI completely transformed our COD delivery operations. Our order confirmation rates increased by 4.8x, and we slashed our return-to-origin (RTO) rate by 62% within the very first month.",
    author: "Shahinur Islam",
    role: "Founder & CEO",
    company: "Shahin E Mart (120k+ Customers)",
    avatarBg: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
    metrics: "62% Lower RTO Rate",
    highlight: "4.8x Confirmation Speed",
  },
  {
    id: "shahi",
    quote:
      "The sub-second latency and natural dialect understanding is incredible. Customers don't even realize they're talking to an AI caller. It feels like having our best support agent working around the clock 24/7.",
    author: "Mahfuzur Rahman",
    role: "Head of Operations",
    company: "Shahi Goods Leather & Fashion",
    avatarBg: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
    metrics: "99.4% Call Resolution",
    highlight: "Sub-450ms Voice Latency",
  },
  {
    id: "dayrio",
    quote:
      "We used to have a full team of staff manually dialing numbers all day. Now Selorax handles over 3,500 daily calls automatically, updates addresses, and syncs directly to our courier dashboard.",
    author: "Sadia Ahmed",
    role: "E-Commerce Director",
    company: "DayRio Apparel & Lifestyle",
    avatarBg: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)",
    metrics: "68% Support Cost Saved",
    highlight: "3,500+ Automated Calls / Day",
  },
];

export default function TestimonialsScene() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const current = reviews[currentIndex];

  return (
    <section
      id="testimonials"
      style={{
        position: "relative",
        padding: "120px 0 100px 0",
        backgroundColor: "rgba(248, 250, 252, 0.7)",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 5 }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 60px auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "16px" }}>
            <span className="badge-eyebrow">
              <span className="badge-dot" />
              PROVEN BUSINESS IMPACT
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(34px, 4.2vw, 54px)",
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.12,
              marginBottom: "18px",
              letterSpacing: "-0.03em",
            }}
          >
            Trusted by Leaders Powering Millions in Revenue
          </h2>

          <p style={{ fontSize: "17px", color: "#475569", lineHeight: 1.6 }}>
            Discover how fast-growing retail and enterprise companies automate their customer communications with Selorax AI.
          </p>
        </div>

        {/* Big Editorial Featured Testimonial Card */}
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto 48px auto",
            borderRadius: "32px",
            backgroundColor: "#FFFFFF",
            border: "1px solid rgba(15, 23, 42, 0.08)",
            boxShadow: "0 25px 60px -15px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(37, 99, 235, 0.05)",
            padding: "48px 44px",
            position: "relative",
            transition: "all 0.3s ease",
          }}
          className="testimonial-card"
        >
          {/* Top Rating & Quote Icon */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "28px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#F97316" color="#F97316" />
              ))}
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#0F172A", marginLeft: "6px" }}>
                5.0 Verified Review
              </span>
            </div>

            <Quote size={36} color="rgba(37, 99, 235, 0.2)" />
          </div>

          {/* Quote Text */}
          <blockquote
            style={{
              fontSize: "clamp(20px, 2.3vw, 28px)",
              fontWeight: 600,
              color: "#0F172A",
              lineHeight: 1.45,
              marginBottom: "36px",
              letterSpacing: "-0.02em",
            }}
          >
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          {/* Author Details & Metric Pills */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(15, 23, 42, 0.06)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: current.avatarBg,
                  color: "#FFFFFF",
                  fontSize: "18px",
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                }}
              >
                {current.author.charAt(0)}
              </div>

              <div>
                <div style={{ fontSize: "17px", fontWeight: 800, color: "#0F172A" }}>
                  {current.author}
                </div>
                <div style={{ fontSize: "13px", color: "#64748B" }}>
                  {current.role} • <span style={{ color: "#2563EB", fontWeight: 600 }}>{current.company}</span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                style={{
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(34, 197, 94, 0.1)",
                  color: "#16A34A",
                  fontSize: "12px",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <CheckCircle2 size={14} />
                {current.metrics}
              </span>

              <span
                style={{
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(249, 115, 22, 0.1)",
                  color: "#EA580C",
                  fontSize: "12px",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <TrendingUp size={14} />
                {current.highlight}
              </span>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
          <button
            onClick={prev}
            aria-label="Previous review"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              border: "1px solid var(--border-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "var(--shadow-sm)",
              transition: "all 0.2s ease",
            }}
          >
            <ChevronLeft size={20} color="#0F172A" />
          </button>

          <div style={{ display: "flex", gap: "8px" }}>
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: currentIndex === i ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  backgroundColor: currentIndex === i ? "#F97316" : "#CBD5E1",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next review"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              border: "1px solid var(--border-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "var(--shadow-sm)",
              transition: "all 0.2s ease",
            }}
          >
            <ChevronRight size={20} color="#0F172A" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .testimonial-card {
            padding: 28px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
