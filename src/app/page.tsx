"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroScene from "@/components/scenes/HeroScene";
import ProcessSection from "@/components/scenes/ProcessSection";
import VoiceIntelligenceSection from "@/components/scenes/VoiceIntelligenceSection";
import IndustriesSection from "@/components/scenes/IndustriesSection";
import AnalyticsSection from "@/components/scenes/AnalyticsSection";
import ConversationShowcaseSection from "@/components/scenes/ConversationShowcaseSection";
import WhyChooseUsSection from "@/components/scenes/WhyChooseUsSection";
import ContactCTASection from "@/components/scenes/ContactCTASection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
        overflow: "hidden",
      }}
    >
      {/* 01 — Futuristic Navbar */}
      <Navbar />

      {/* 02 — Hero Section (AI Calls That Convert Every Conversation + 3D Holographic AI Head & Neural Sphere) */}
      <HeroScene />

      {/* 03 — How It Works (Intelligent Calls. Seamless Workflow. 5-Step Connected Cyber Pipeline) */}
      <ProcessSection />

      {/* 04 — AI Voice Intelligence (4 Features + 3D Pulsing Sound Energy Orb + Interactive Voice Player) */}
      <VoiceIntelligenceSection />

      {/* 05 — Built For Every Industry (6 Floating 3D Cyber-Glass Cards with 3D Tilt & Carousel) */}
      <IndustriesSection />

      {/* 06 — Powerful Analytics (Real-Time Insights. Better Decisions. Sparklines + Master Dashboard) */}
      <AnalyticsSection />

      {/* 07 — AI Conversation Showcase (Real Conversations. Real Results. 3D Smartphone Chat + AI Telemetry) */}
      <ConversationShowcaseSection />

      {/* 08 — Why Choose Nexus AI (More Calls. More Conversions. More Growth. 5 Value Cards) */}
      <WhyChooseUsSection />

      {/* 09 — Contact / Global CTA (Let's Build Smarter Conversations + 3D Wireframe Globe) */}
      <ContactCTASection />

      {/* 10 — Footer */}
      <Footer />
    </main>
  );
}
