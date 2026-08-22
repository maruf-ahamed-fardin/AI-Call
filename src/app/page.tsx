"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import ScrollJourneyIndicator from "@/components/ScrollJourneyIndicator";
import HeroScene from "@/components/scenes/HeroScene";
import LiveCallScene from "@/components/scenes/LiveCallScene";
import AudioTunnelScene from "@/components/scenes/AudioTunnelScene";
import FeaturesScene from "@/components/scenes/FeaturesScene";
import ProcessScene from "@/components/scenes/ProcessScene";
import UseCasesScene from "@/components/scenes/UseCasesScene";
import TestimonialsScene from "@/components/scenes/TestimonialsScene";
import FinalCTAScene from "@/components/scenes/FinalCTAScene";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      {/* Top Navigation */}
      <Navbar />

      {/* Interactive Right-side Scroll Journey Rail */}
      <ScrollJourneyIndicator />

      {/* 01 — Hero / AI Calling Opening with In-Hero Live Voice Testing */}
      <HeroScene />

      {/* 02 — Live Call Experience (Interactive Call Studio) */}
      <LiveCallScene />

      {/* 03 — 3D Audio Landscape & Real-time CRM Assembly */}
      <AudioTunnelScene />

      {/* 04 — Features (Scroll-Driven 3D Orbit Showcase) */}
      <FeaturesScene />

      {/* 05 — How It Works (Continuous 4-Step Pipeline & 3D Cascade) */}
      <ProcessScene />

      {/* 06 — Real-World Use Cases (Interactive Solutions Matrix) */}
      <UseCasesScene />

      {/* 07 — Testimonials / Social Proof (Editorial Verified Reviews) */}
      <TestimonialsScene />

      {/* 08 — Final CTA (Cinematic Ending) */}
      <FinalCTAScene />

      {/* Footer */}
      <Footer />
    </main>
  );
}
