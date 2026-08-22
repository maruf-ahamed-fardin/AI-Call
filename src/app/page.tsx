"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import ScrollJourneyIndicator from "@/components/ScrollJourneyIndicator";
import HeroScene from "@/components/scenes/HeroScene";
import FeaturesScene from "@/components/scenes/FeaturesScene";
import ProcessScene from "@/components/scenes/ProcessScene";
import LiveCallScene from "@/components/scenes/LiveCallScene";
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
      {/* Top Glassmorphic Navigation */}
      <Navbar />

      {/* Interactive Right-side Scroll Journey Rail */}
      <ScrollJourneyIndicator />

      {/* 01 — Hero / AI Calling Introduction (Pinned Cinematic 3D Scene) */}
      <HeroScene />

      {/* 02 — Features (Scroll Driven 3D Pinned Orbit) */}
      <FeaturesScene />

      {/* 03 — How It Works (4-Step Connected Process & 3D Cascade) */}
      <ProcessScene />

      {/* 04 — Live Call Experience (Scroll-Controlled Real AI Voice Demo) */}
      <LiveCallScene />

      {/* 05 — Real-World Use Cases (Interactive Solution Switcher) */}
      <UseCasesScene />

      {/* 06 — Testimonials / Social Proof (Editorial 5-Star Reviews) */}
      <TestimonialsScene />

      {/* 07 — Final CTA (Cinematic Conclusion) */}
      <FinalCTAScene />

      {/* Footer */}
      <Footer />
    </main>
  );
}
