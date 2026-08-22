"use client";

import React, { useState, useEffect, useRef } from "react";
import { User, PhoneCall, BarChart2, ShieldCheck, Database, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: "01",
      title: "Lead Arrives",
      description: "New lead captured from your website, ads, or CRM.",
      icon: User,
      color: "#F59E0B",
      glowColor: "rgba(245, 158, 11, 0.4)",
    },
    {
      number: "02",
      title: "AI Calls Customer",
      description: "Our AI agent calls instantly with natural human-like voice.",
      icon: PhoneCall,
      color: "#38BDF8",
      glowColor: "rgba(56, 189, 248, 0.4)",
    },
    {
      number: "03",
      title: "Real-Time Analysis",
      description: "AI analyses responses, intent, and sentiment in real-time.",
      icon: BarChart2,
      color: "#3B82F6",
      glowColor: "rgba(59, 130, 246, 0.4)",
    },
    {
      number: "04",
      title: "Verification Complete",
      description: "Information verified and qualified automatically by AI.",
      icon: ShieldCheck,
      color: "#38BDF8",
      glowColor: "rgba(56, 189, 248, 0.4)",
    },
    {
      number: "05",
      title: "CRM Updated",
      description: "All data & results are pushed to your CRM instantly.",
      icon: Database,
      color: "#F59E0B",
      glowColor: "rgba(245, 158, 11, 0.4)",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Draw connecting line on scroll
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "top 30%",
            scrub: 0.8,
          },
        }
      );

      // Stagger 3D card rise on scroll
      gsap.from(".process-card", {
        y: 60,
        opacity: 0,
        rotateX: 15,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "100px 0 80px",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "600px", marginBottom: "60px" }}>
          <div style={{ marginBottom: "16px" }}>
            <div className="badge-eyebrow">
              <span className="badge-dot" />
              <span>How It Works</span>
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
            Intelligent Calls. <br />
            <span className="text-gradient-cyan">Seamless Workflow.</span>
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.6,
              color: "#94A3B8",
              marginBottom: "20px",
            }}
          >
            Our AI handles every step of the conversation process, so you can focus on growing your business.
          </p>

          <a
            href="#voice-intelligence"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#38BDF8",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(4px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(0px)")}
          >
            <span>See How It Works</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* 5-Step Connected Cyber Pipeline */}
        <div style={{ position: "relative" }}>
          {/* Glowing Connecting Line for Desktop */}
          <div
            ref={lineRef}
            className="desktop-connector-line"
            style={{
              position: "absolute",
              top: "35px",
              left: "5%",
              right: "5%",
              height: "2px",
              background: "linear-gradient(90deg, #F59E0B 0%, #38BDF8 25%, #3B82F6 50%, #38BDF8 75%, #F59E0B 100%)",
              boxShadow: "0 0 16px rgba(56, 189, 248, 0.8)",
              zIndex: 0,
            }}
          />

          {/* Steps Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "24px",
              position: "relative",
              zIndex: 1,
            }}
          >
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(idx)}
                  className="glass-panel-glow process-card"
                  style={{
                    padding: "24px 20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    cursor: "pointer",
                    transform: isSelected ? "translateY(-6px)" : "translateY(0)",
                    borderColor: isSelected ? step.color : "rgba(255, 255, 255, 0.08)",
                    boxShadow: isSelected ? `0 12px 30px rgba(0,0,0,0.6), 0 0 20px ${step.glowColor}` : "none",
                    transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease",
                  }}
                >
                  {/* Circular Glowing Step Icon */}
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(2, 6, 23, 0.9)",
                      border: `2px solid ${step.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      boxShadow: `0 0 18px ${step.glowColor}, inset 0 0 10px ${step.glowColor}`,
                      position: "relative",
                    }}
                  >
                    <Icon size={24} color={step.color} />
                  </div>

                  {/* Step Number & Title */}
                  <div style={{ marginBottom: "10px" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 800,
                        color: step.color,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: "4px",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {step.number}
                    </span>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* Step Description */}
                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.5,
                      color: "#94A3B8",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-connector-line {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
