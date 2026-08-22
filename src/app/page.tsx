"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import ScrollJourneyIndicator from "@/components/ScrollJourneyIndicator";
import FloatingCallWidget from "@/components/FloatingCallWidget";
import HeroScene from "@/components/scenes/HeroScene";
import CapabilitiesScene from "@/components/scenes/CapabilitiesScene";
import FeaturesScene from "@/components/scenes/FeaturesScene";
import ActionEngineScene from "@/components/scenes/ActionEngineScene";
import VoiceMatrixScene from "@/components/scenes/VoiceMatrixScene";
import ROICalculatorScene from "@/components/scenes/ROICalculatorScene";
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
      {/* Top Glassmorphic Cyber Navigation */}
      <Navbar />

      {/* Interactive Right-side Scroll Journey Rail */}
      <ScrollJourneyIndicator />

      {/* Pinned Scene 1: Cinematic 3D Hero with Zero-Lag Parallax & Interactive Prompt Console */}
      <HeroScene />

      {/* Scene 2: Omnichannel Neural Matrix & Capabilities (Talks Like People) */}
      <CapabilitiesScene />

      {/* Pinned Scene 3: Interactive Product Showcase & State Mutator */}
      <FeaturesScene />

      {/* Scene 4: Action Engine Pipeline & Node Graph (It doesn't just answer...) */}
      <ActionEngineScene />

      {/* Scene 5: Global Voice & Multi-Dialect Interactive Studio Sandbox */}
      <VoiceMatrixScene />

      {/* Scene 6: Dynamic Enterprise ROI & Monthly Cost-Savings Calculator */}
      <ROICalculatorScene />

      {/* Pinned Scene 7: Real-time Live AI Call Simulator Lab */}
      <LiveCallScene />

      {/* Scene 8: Tailored Industry Solutions Matrix */}
      <UseCasesScene />

      {/* Scene 9: Verified Customer Case Studies & Metrics */}
      <TestimonialsScene />

      {/* Scene 10: Final Cinematic 3D Call to Action */}
      <FinalCTAScene />

      {/* Footer */}
      <Footer />

      {/* Interactive Floating AI Voice Assistant Widget */}
      <FloatingCallWidget />
    </main>
  );
}
