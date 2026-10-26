"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import DemoRequestForm from "@/components/ui/DemoRequestForm";
import { Globe2, ShieldCheck, Users } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GlobeCanvas3D = dynamic(() => import("@/components/ui/GlobeCanvas3D"), { ssr: false });

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

      gsap.from(".cta-form-col", {
        x: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".cta-trust-card", {
        x: -30,
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
      {/* 3D Holographic Globe (ambient backdrop) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "-8%",
          width: "620px",
          maxWidth: "90vw",
          transform: "translateY(-50%)",
          opacity: 0.45,
          pointerEvents: "none",
        }}
      >
        <div className="cta-globe-wrap">
          <GlobeCanvas3D />
        </div>
      </div>

      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="contact-grid"
        >
          {/* Left Column: Heading, Subtitle, Trust Points */}
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
              Tell us about your calls and we'll show you an AI agent handling them live. Prefer email?{" "}
              <a href="mailto:contact@nexusai.com" style={{ color: "#38BDF8" }}>
                contact@nexusai.com
              </a>
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "380px" }}>
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
                  subtitle: "Encrypted in transit and at rest",
                  color: "#3B82F6",
                },
                {
                  icon: Users,
                  title: "Human Handoff",
                  subtitle: "Live transfer to your team anytime",
                  color: "#38BDF8",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="cta-trust-card"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "16px 20px",
                      borderRadius: "16px",
                      background: "rgba(11, 19, 43, 0.45)",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
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

          {/* Right Column: Demo Request Form */}
          <div className="cta-form-col" style={{ zIndex: 10 }}>
            <DemoRequestForm />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .contact-grid {
            grid-template-columns: 1fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
