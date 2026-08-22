"use client";

import React, { useEffect, useRef } from "react";
import GlobeCanvas3D from "@/components/ui/GlobeCanvas3D";
import { ArrowRight, Globe2, ShieldCheck, Users } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactCTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".cta-left-col", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".cta-globe-wrap", {
        scale: 0.8,
        opacity: 0,
        duration: 1.0,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".cta-trust-card", {
        x: 40,
        opacity: 0,
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
      id="contact"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "100px 0 120px",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
            alignItems: "center",
          }}
          className="contact-grid"
        >
          {/* Left Column: Heading, Subtitle, Dual CTAs */}
          <div className="cta-left-col" style={{ maxWidth: "480px", zIndex: 10 }}>
            <h2
              style={{
                fontSize: "clamp(34px, 4.4vw, 54px)",
                lineHeight: 1.1,
                fontWeight: 800,
                color: "#FFFFFF",
                marginBottom: "20px",
              }}
            >
              Let's Build Smarter <br />
              <span className="text-gradient-cyan">Conversations.</span>
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.6,
                color: "#94A3B8",
                marginBottom: "36px",
              }}
            >
              Join thousands of businesses automating their calls and growing faster with AI.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#hero"
                className="btn btn-primary"
                style={{
                  padding: "14px 30px",
                  fontSize: "15px",
                  fontWeight: 700,
                }}
              >
                <span>Book Demo</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="mailto:contact@nexusai.com"
                className="btn btn-secondary"
                style={{
                  padding: "14px 28px",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                <span>Contact Sales</span>
              </a>
            </div>
          </div>

          {/* Center Column: 3D Holographic Globe */}
          <div
            className="cta-globe-wrap"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <GlobeCanvas3D />
          </div>

          {/* Right Column: 3 Enterprise Value Props */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              maxWidth: "360px",
              zIndex: 10,
            }}
          >
            {[
              {
                icon: Globe2,
                title: "Global Coverage",
                subtitle: "Call anywhere in the world",
                color: "#38BDF8",
              },
              {
                icon: ShieldCheck,
                title: "Enterprise Security",
                subtitle: "Your data is 100% safe",
                color: "#3B82F6",
              },
              {
                icon: Users,
                title: "Trusted by Experts",
                subtitle: "Loved by teams worldwide →",
                color: "#38BDF8",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="cta-trust-card"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px 20px",
                    borderRadius: "16px",
                    background: "rgba(11, 19, 43, 0.45)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = item.color;
                    e.currentTarget.style.transform = "translateX(6px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
                    e.currentTarget.style.transform = "translateX(0px)";
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(2, 6, 23, 0.8)",
                      border: `1px solid ${item.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: item.color,
                      flexShrink: 0,
                      boxShadow: `0 0 14px ${item.color}35`,
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#FFFFFF", marginBottom: "2px" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "13px", color: "#94A3B8" }}>{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .contact-grid {
            grid-template-columns: 1fr 1.2fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
