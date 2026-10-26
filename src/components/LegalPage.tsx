import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import NexusLogo from "@/components/ui/NexusLogo";
import Footer from "@/components/Footer";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  sections: { heading: string; body: string[] }[];
}

export default function LegalPage({ title, lastUpdated, sections }: LegalPageProps) {
  return (
    <>
      <header style={{ position: "relative", zIndex: 10, padding: "24px 0", borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <NexusLogo size="md" />
          </Link>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", color: "#94A3B8", textDecoration: "none" }}>
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </div>
      </header>

      <main className="container" style={{ maxWidth: "760px", padding: "64px 24px 96px", minHeight: "70vh" }}>
        <h1 style={{ fontSize: "clamp(32px, 4vw, 44px)", lineHeight: 1.15, color: "#FFFFFF", marginBottom: "8px" }}>{title}</h1>
        <p style={{ fontSize: "14px", color: "#64748B", marginBottom: "48px" }}>Last updated: {lastUpdated}</p>

        {sections.map((section) => (
          <section key={section.heading} style={{ marginBottom: "36px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#F8FAFC", marginBottom: "12px" }}>{section.heading}</h2>
            {section.body.map((paragraph, idx) => (
              <p key={idx} style={{ fontSize: "15px", lineHeight: 1.7, color: "#94A3B8", marginBottom: "12px" }}>
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}
