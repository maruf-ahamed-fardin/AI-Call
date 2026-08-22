"use client";

import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

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
      "Selorax AI completely transformed our COD operations. Our order confirmation rate increased by 4.8x, and we slashed our return-to-origin (RTO) rate by 62% in the first 30 days.",
    author: "Shahinur Islam",
    role: "Founder & CEO",
    company: "Shahin E Mart (120k+ Customers)",
    avatarBg: "linear-gradient(135deg, #FF6B00 0%, #EA580C 100%)",
    metrics: "62% Lower RTO Rate",
    highlight: "4.8x Confirmation Speed",
  },
  {
    id: "shahi",
    quote:
      "The sub-second latency and natural Bengali dialect understanding is astonishing. Customers genuinely believe they're conversing with our top senior support representative 24/7.",
    author: "Mahfuzur Rahman",
    role: "Head of Operations",
    company: "Shahi Goods Leather & Fashion",
    avatarBg: "linear-gradient(135deg, #06B6D4 0%, #2563EB 100%)",
    metrics: "99.4% Call Resolution",
    highlight: "Sub-380ms Voice Latency",
  },
  {
    id: "dayrio",
    quote:
      "We used to maintain a large floor of call center staff dialing phone numbers manually. Now Selorax autonomously handles over 3,500 calls daily and auto-syncs with Steadfast Courier.",
    author: "Sadia Ahmed",
    role: "E-Commerce Director",
    company: "DayRio Apparel & Lifestyle",
    avatarBg: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
    metrics: "68% Support Payroll Saved",
    highlight: "3,500+ Daily Automated Calls",
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
        padding: "130px 0 110px 0",
        backgroundColor: "rgba(11, 15, 25, 0.7)",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 5 }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 64px auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "16px" }}>
            <span className="badge-eyebrow">
              <span className="badge-dot" />
              VERIFIED ENTERPRISE RESULTS
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(34px, 4.2vw, 54px)",
              fontWeight: 900,
              color: "#F8FAFC",
              lineHeight: 1.12,
              marginBottom: "18px",
              letterSpacing: "-0.03em",
            }}
          >
            Trusted by Brands Powering Millions in Revenue
          </h2>

          <p style={{ fontSize: "17px", color: "#94A3B8", lineHeight: 1.65 }}>
            Discover how fast-growing retail and enterprise companies automate their customer communications with Selorax AI.
          </p>
        </div>

        {/* Big Editorial Featured Testimonial Card */}
        <div
          className="glass-panel-glow gpu-layer"
          style={{
            maxWidth: "960px",
            margin: "0 auto 48px auto",
            borderRadius: "32px",
            background: "linear-gradient(170deg, rgba(15, 23, 42, 0.9) 0%, rgba(3, 7, 18, 0.98) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 30px 80px -15px rgba(0, 0, 0, 0.9), 0 0 40px -10px rgba(6, 182, 212, 0.2)",
            padding: "52px 48px",
            position: "relative",
            transition: "all 0.3s ease",
          }}
        >
          {/* Top Rating & Quote Icon */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#FF6B00" color="#FF6B00" />
              ))}
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#F8FAFC", marginLeft: "8px", fontFamily: "var(--font-mono)" }}>
                5.0 VERIFIED CASE STUDY
              </span>
            </div>

            <Quote size={38} color="rgba(6, 182, 212, 0.4)" />
          </div>

          {/* Quote Text */}
          <blockquote
            style={{
              fontSize: "clamp(20px, 2.3vw, 28px)",
              fontWeight: 600,
              color: "#F8FAFC",
              lineHeight: 1.45,
              marginBottom: "38px",
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
              paddingTop: "26px",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "54px",
                  height: "54px",
                  borderRadius: "50%",
                  background: current.avatarBg,
                  color: "#FFFFFF",
                  fontSize: "19px",
                  fontWeight: 900,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)",
                }}
              >
                {current.author.charAt(0)}
              </div>

              <div>
                <div style={{ fontSize: "18px", fontWeight: 800, color: "#F8FAFC" }}>
                  {current.author}
                </div>
                <div style={{ fontSize: "13px", color: "#94A3B8" }}>
                  {current.role} • <span style={{ color: "#22D3EE", fontWeight: 600 }}>{current.company}</span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                style={{
                  padding: "8px 16px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(16, 185, 129, 0.15)",
                  color: "#34D399",
                  fontSize: "12px",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                }}
              >
                <CheckCircle2 size={15} />
                {current.metrics}
              </span>

              <span
                style={{
                  padding: "8px 16px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(255, 107, 0, 0.15)",
                  color: "#FB923C",
                  fontSize: "12px",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  border: "1px solid rgba(255, 107, 0, 0.3)",
                }}
              >
                <TrendingUp size={15} />
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
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
              transition: "all 0.2s ease",
            }}
          >
            <ChevronLeft size={20} color="#F8FAFC" />
          </button>

          <div style={{ display: "flex", gap: "8px" }}>
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: currentIndex === i ? "28px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  backgroundColor: currentIndex === i ? "#06B6D4" : "rgba(255, 255, 255, 0.2)",
                  boxShadow: currentIndex === i ? "0 0 10px #06B6D4" : "none",
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
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
              transition: "all 0.2s ease",
            }}
          >
            <ChevronRight size={20} color="#F8FAFC" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .glass-panel-glow {
            padding: 30px 22px !important;
          }
        }
      `}</style>
    </section>
  );
}
