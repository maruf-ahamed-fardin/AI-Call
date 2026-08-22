"use client";

import React, { useState, useEffect, useRef } from "react";
import VoiceOrbCanvas from "@/components/ui/VoiceOrbCanvas";
import InteractiveVoicePlayer from "@/components/ui/InteractiveVoicePlayer";
import { Mic, Globe, Clock, Brain } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function VoiceIntelligenceSection() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      icon: Mic,
      title: "Human-like Voice",
      description: "Natural & realistic conversations",
      color: "#38BDF8",
    },
    {
      icon: Globe,
      title: "Multi Language",
      description: "Support for 30+ languages",
      color: "#3B82F6",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a lead again",
      color: "#38BDF8",
    },
    {
      icon: Brain,
      title: "Smart Intent Detection",
      description: "Understand customer intent automatically",
      color: "#F59E0B",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".voice-feat-card", {
        x: -50,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".voice-player-wrap", {
        x: 50,
        opacity: 0,
        duration: 0.9,
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
      id="voice-intelligence"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "100px 0 80px",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "600px", marginBottom: "50px" }}>
          <div style={{ marginBottom: "16px" }}>
            <div className="badge-eyebrow">
              <span className="badge-dot" />
              <span>AI Voice Intelligence</span>
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
            AI Voice Intelligence
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.6,
              color: "#94A3B8",
            }}
          >
            Human-like conversations powered by advanced AI voice models.
          </p>
        </div>

        {/* 3-Column Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "36px",
            alignItems: "center",
          }}
          className="voice-intelligence-grid"
        >
          {/* Left Column: 4 Feature Points */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="voice-feat-card"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    padding: "16px 20px",
                    borderRadius: "16px",
                    background: "rgba(11, 19, 43, 0.4)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = feat.color;
                    e.currentTarget.style.transform = "translateX(6px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
                    e.currentTarget.style.transform = "translateX(0px)";
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(2, 6, 23, 0.8)",
                      border: `1px solid ${feat.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: feat.color,
                      flexShrink: 0,
                      boxShadow: `0 0 12px ${feat.color}40`,
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF", marginBottom: "4px" }}>
                      {feat.title}
                    </h3>
                    <p style={{ fontSize: "13px", color: "#94A3B8", lineHeight: 1.4 }}>
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Column: 3D Pulsing Sound Energy Orb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <VoiceOrbCanvas isPlaying={isPlayingAudio} />
          </div>

          {/* Right Column: Interactive Voice Player Box */}
          <div
            className="voice-player-wrap"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <InteractiveVoicePlayer onPlayingChange={(playing) => setIsPlayingAudio(playing)} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .voice-intelligence-grid {
            grid-template-columns: 1fr 1.1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
