import React from "react";
import Navbar from "@/components/Navbar";
import HeroScene from "@/components/scenes/HeroScene";
import ProcessSection from "@/components/scenes/ProcessSection";
import VoiceIntelligenceSection from "@/components/scenes/VoiceIntelligenceSection";
import IndustriesSection from "@/components/scenes/IndustriesSection";
import AnalyticsSection from "@/components/scenes/AnalyticsSection";
import ConversationShowcaseSection from "@/components/scenes/ConversationShowcaseSection";
import TestimonialsSection from "@/components/scenes/TestimonialsSection";
import WhyChooseUsSection from "@/components/scenes/WhyChooseUsSection";
import ROICalculatorSection from "@/components/scenes/ROICalculatorSection";
import IntegrationsSection from "@/components/scenes/IntegrationsSection";
import PricingSection from "@/components/scenes/PricingSection";
import FAQSection from "@/components/scenes/FAQSection";
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

      {/* 08 — Customer Stories (4 Testimonial Cards) */}
      <TestimonialsSection />

      {/* 09 — Why Choose Nexus AI (More Calls. More Conversions. More Growth. 5 Value Cards) */}
      <WhyChooseUsSection />

      {/* 10 — ROI Calculator (Human Agents vs Nexus AI Monthly Cost) */}
      <ROICalculatorSection />

      {/* 11 — Integrations (6 Tool Categories) */}
      <IntegrationsSection />

      {/* 12 — Pricing (3 Plans + Monthly/Yearly Toggle) */}
      <PricingSection />

      {/* 13 — FAQ (Accordion + FAQPage JSON-LD) */}
      <FAQSection />

      {/* 14 — Contact / Demo Request (Form + 3D Wireframe Globe) */}
      <ContactCTASection />

      {/* 15 — Footer */}
      <Footer />
    </main>
  );
}
