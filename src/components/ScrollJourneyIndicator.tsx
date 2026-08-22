"use client";

import React, { useState, useEffect } from "react";

interface Step {
  id: string;
  num: string;
  label: string;
}

const steps: Step[] = [
  { id: "hero", num: "01", label: "Hero" },
  { id: "live-call", num: "02", label: "Live Demo" },
  { id: "audio-intelligence", num: "03", label: "Intelligence" },
  { id: "features", num: "04", label: "Features" },
  { id: "how-it-works", num: "05", label: "How It Works" },
  { id: "use-cases", num: "06", label: "Use Cases" },
  { id: "testimonials", num: "07", label: "Reviews" },
  { id: "cta", num: "08", label: "Get Started" },
];

export default function ScrollJourneyIndicator() {
  const [activeStep, setActiveStep] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      for (let i = steps.length - 1; i >= 0; i--) {
        const el = document.getElementById(steps[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveStep(steps[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Top Progress Line */}
      <div
        className="mobile-progress-bar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          zIndex: 60,
          background: "rgba(15, 23, 42, 0.05)",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${scrollProgress}%`,
            background: "linear-gradient(to right, #2563EB, #F97316)",
            transition: "width 0.1s linear",
          }}
        />
      </div>

      {/* Desktop Vertical Journey Rail */}
      <nav
        aria-label="Page scroll navigation"
        className="desktop-journey-rail"
        style={{
          position: "fixed",
          right: "24px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "10px",
          pointerEvents: "auto",
        }}
      >
        {/* Background track line */}
        <div
          style={{
            position: "absolute",
            right: "7px",
            top: "8px",
            bottom: "8px",
            width: "1px",
            background: "rgba(15, 23, 42, 0.08)",
            zIndex: -1,
          }}
        />

        {steps.map((step) => {
          const isActive = activeStep === step.id;

          return (
            <button
              key={step.id}
              onClick={() => scrollTo(step.id)}
              aria-label={`Scroll to ${step.label}`}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "3px 0",
                outline: "none",
              }}
              className="journey-step-btn relative"
            >
              {/* Tooltip text label */}
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "#0F172A" : "#94A3B8",
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateX(0)" : "translateX(6px)",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(8px)",
                  padding: "3px 8px",
                  borderRadius: "6px",
                  border: isActive ? "1px solid rgba(249, 115, 22, 0.3)" : "1px solid rgba(15, 23, 42, 0.06)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  pointerEvents: "none",
                  whiteSpace: "nowrap",
                }}
                className="step-label"
              >
                <span style={{ color: isActive ? "#F97316" : "#94A3B8", marginRight: "4px" }}>
                  {step.num}
                </span>
                {step.label}
              </span>

              {/* Indicator Dot */}
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: isActive ? "9px" : "5px",
                    height: isActive ? "9px" : "5px",
                    borderRadius: "50%",
                    backgroundColor: isActive ? "#F97316" : "rgba(148, 163, 184, 0.6)",
                    boxShadow: isActive ? "0 0 10px rgba(249, 115, 22, 0.6)" : "none",
                    transform: isActive ? "scale(1.2)" : "scale(1)",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </div>
            </button>
          );
        })}
      </nav>

      <style jsx>{`
        .mobile-progress-bar {
          display: block;
        }
        .desktop-journey-rail {
          display: none;
        }
        @media (min-width: 1080px) {
          .desktop-journey-rail {
            display: flex !important;
          }
          .journey-step-btn:hover .step-label {
            opacity: 1 !important;
            transform: translateX(0) !important;
          }
        }
      `}</style>
    </>
  );
}
