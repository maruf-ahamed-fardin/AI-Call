import type { Metadata, Viewport } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#020617",
};

export const metadata: Metadata = {
  title: "Nexus AI — AI Calls That Convert Every Conversation",
  description:
    "Automate customer verification, lead qualification, appointment booking, and sales calls with human-like AI voices. The premier dark futuristic AI calling SaaS platform.",
  keywords: [
    "AI voice agent",
    "AI phone calls",
    "Nexus AI",
    "Voice automation",
    "Lead qualification",
    "Customer verification",
    "Appointment booking",
  ],
  authors: [{ name: "Nexus AI" }],
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
        {/* Cyber Space Ambient Grid & Dust Background */}
        <div className="cyber-bg-overlay" aria-hidden="true" />
        <div className="cyber-grid-pattern" aria-hidden="true" />

        {/* Lenis Smooth Scroll Engine */}
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
