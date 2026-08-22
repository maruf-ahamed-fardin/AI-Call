import type { Metadata, Viewport } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  title: "SeloraX AI — AI Calling That Actually Talks Like a Human",
  description:
    "Build AI voice agents that engage, qualify, and convert 24/7 — just like your best human. Automated inbound & outbound phone calls with live transcriptions and real-time CRM execution.",
  keywords: [
    "AI voice agent",
    "AI phone calls",
    "SeloraX AI",
    "Automated customer frontline",
    "Voice AI",
    "Outbound call automation",
    "COD verification AI",
    "AI calling",
  ],
  authors: [{ name: "SeloraX AI" }],
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
        {/* Ambient Warm Luxury Background Lighting */}
        <div className="ambient-light-background" aria-hidden="true">
          <div className="ambient-orb-blue" />
          <div className="ambient-orb-orange" />
          <div className="ambient-orb-cyan" />
        </div>

        {/* Lenis 120fps Smooth Scroll Engine */}
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
