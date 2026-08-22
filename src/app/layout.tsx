import type { Metadata, Viewport } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import NeuralCanvas from "@/components/ui/NeuralCanvas";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#030712",
};

export const metadata: Metadata = {
  title: "Selorax AI — Autonomous Frontline Voice & Conversational Intelligence",
  description:
    "Selorax AI answers incoming phone calls, conducts outbound calls, provides live neural voice support, and handles customer messaging — verifying orders, booking appointments, processing payments, and executing end-to-end business workflows automatically 24/7.",
  keywords: [
    "AI voice agent",
    "AI phone calls",
    "Selorax AI",
    "Automated customer frontline",
    "Autonomous Voice AI",
    "Conversational AI",
    "Outbound call automation",
    "COD verification AI",
  ],
  authors: [{ name: "Selorax AI" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Ambient Cyber Lighting Gradients */}
        <div className="ambient-cyber-background" aria-hidden="true">
          <div className="ambient-cyber-orb-1" />
          <div className="ambient-cyber-orb-2" />
          <div className="ambient-cyber-orb-3" />
          <div className="ambient-cyber-grid" />
        </div>

        {/* 60/120fps Hardware-Accelerated Background Neural Canvas */}
        <NeuralCanvas />

        {/* Lenis 120fps Smooth Scroll Engine */}
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
