"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import ScrollJourneyIndicator from "@/components/ScrollJourneyIndicator";
import FloatingCallWidget from "@/components/FloatingCallWidget";
import HeroScene from "@/components/scenes/HeroScene";
import CapabilitiesScene from "@/components/scenes/CapabilitiesScene";
import FeaturesScene from "@/components/scenes/FeaturesScene";
import ActionEngineScene from "@/components/scenes/ActionEngineScene";
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

      {/* Pinned Scene 1: Cinematic 3D Hero */}
      <HeroScene />

      {/* Scene 2: Omnichannel Channels & Capabilities (Talks Like People) */}
      <CapabilitiesScene />

      {/* Pinned Scene 3: 3D Product Showcase Features */}
      <FeaturesScene />

      {/* Scene 4: Action Engine Workflow & Timeline (It doesn't just answer...) */}
      <ActionEngineScene />

      {/* Pinned Scene 5: Real-time Live AI Call Simulator */}
      <LiveCallScene />

      {/* Scene 6: Tailored Industry Use Cases Matrix */}
      <UseCasesScene />

      {/* Scene 7: Editorial Customer Testimonials & Metrics */}
      <TestimonialsScene />

      {/* Scene 8: Final Cinematic 3D Call to Action */}
      <FinalCTAScene />

      {/* Footer */}
      <Footer />

      {/* Interactive Floating AI Call Assistant Widget */}
      <FloatingCallWidget />
    </main>
  );
}
