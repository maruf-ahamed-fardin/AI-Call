"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  ShoppingBag,
  Home,
  HeartPulse,
  GraduationCap,
  Landmark,
  ShieldAlert,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface IndustryCardData {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
}

const INDUSTRIES: IndustryCardData[] = [
  {
    id: "ecommerce",
    title: "Ecommerce",
    description: "Verify orders & reduce fraud.",
    icon: ShoppingBag,
    color: "#38BDF8",
  },
  {
    id: "realestate",
    title: "Real Estate",
    description: "Qualify leads & book site visits.",
    icon: Home,
    color: "#3B82F6",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Appointment booking & patient verification.",
    icon: HeartPulse,
    color: "#38BDF8",
  },
  {
    id: "education",
    title: "Education",
    description: "Student inquiries & admissions.",
    icon: GraduationCap,
    color: "#60A5FA",
  },
  {
    id: "finance",
    title: "Finance",
    description: "Loan verification & lead qualification.",
    icon: Landmark,
    color: "#F59E0B",
  },
  {
    id: "insurance",
    title: "Insurance",
    description: "Policy verification & claims support.",
    icon: ShieldAlert,
    color: "#38BDF8",
  },
];

function IndustryCard({ item, index }: { item: IndustryCardData; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const mult = 0.08;
    setRotateX(-y * mult);
    setRotateY(x * mult);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const Icon = item.icon;

  return (
    <div
      ref={cardRef}
      className="industry-3d-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
        height: "100%",
      }}
    >
      <div
        className="glass-panel-glow"
        style={{
          height: "100%",
          padding: "32px 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          borderRadius: "20px",
          backgroundColor: isHovered ? "rgba(15, 23, 42, 0.9)" : "rgba(7, 13, 30, 0.75)",
          borderColor: isHovered ? item.color : "rgba(56, 189, 248, 0.15)",
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? "translateZ(15px) translateY(-8px)" : "translateZ(0px)"}`,
          transition: "transform 0.15s ease-out, border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
          boxShadow: isHovered
            ? `0 20px 40px rgba(0,0,0,0.7), 0 0 30px ${item.color}35`
            : "0 8px 25px rgba(0,0,0,0.5)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glowing Holographic Icon Container */}
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "18px",
            backgroundColor: "rgba(2, 6, 23, 0.85)",
            border: `2px solid ${item.color}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: item.color,
            marginBottom: "24px",
            boxShadow: `0 0 24px ${item.color}40, inset 0 0 12px ${item.color}30`,
            transform: isHovered ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
        >
          <Icon size={32} />
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: "10px",
            letterSpacing: "-0.01em",
          }}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.5,
            color: "#94A3B8",
          }}
        >
          {item.description}
        </p>

        {/* Holographic Specular Shine Line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "15%",
            right: "15%",
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
            opacity: isHovered ? 0.9 : 0.4,
          }}
        />
      </div>
    </div>
  );
}

export default function IndustriesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".industry-3d-card", {
        y: 80,
        opacity: 0,
        rotateY: -20,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.9,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const offset = direction === "left" ? -320 : 320;
    scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section
      id="industries"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "100px 0 80px",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "50px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <div style={{ marginBottom: "16px" }}>
              <div className="badge-eyebrow">
                <span className="badge-dot" />
                <span>Industries We Serve</span>
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
              Built For <span className="text-gradient-cyan">Every Industry</span>
            </h2>
          </div>

          {/* Carousel Navigation Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                backgroundColor: "rgba(15, 23, 42, 0.8)",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                color: "#38BDF8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(56, 189, 248, 0.15)";
                e.currentTarget.style.borderColor = "#38BDF8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(15, 23, 42, 0.8)";
                e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.25)";
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                backgroundColor: "rgba(15, 23, 42, 0.8)",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                color: "#38BDF8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(56, 189, 248, 0.15)";
                e.currentTarget.style.borderColor = "#38BDF8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(15, 23, 42, 0.8)";
                e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.25)";
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* 6 Industry Cards Slider / Grid */}
        <div
          ref={scrollContainerRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, minmax(260px, 1fr))",
            gap: "24px",
            overflowX: "auto",
            paddingBottom: "20px",
            scrollbarWidth: "none",
          }}
          className="industries-scroll"
        >
          {INDUSTRIES.map((industry, index) => (
            <IndustryCard key={industry.id} item={industry} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .industries-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
