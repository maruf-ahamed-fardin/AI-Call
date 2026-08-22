import type { Metadata, Viewport } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAFAF9",
};

export const metadata: Metadata = {
  title: "Selorax AI — AI that talks to your customers and gets the work done",
  description:
    "Selorax AI answers incoming phone calls, conducts outbound calls, provides live voice support, and handles customer messaging — verifying orders, booking appointments, processing payments, and executing end-to-end business workflows automatically 24/7.",
  keywords: [
    "AI voice agent",
    "AI phone calls",
    "Selorax AI",
    "Automated customer frontline",
    "Voice AI",
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
        {/* Ambient Warm Luxury Background Lighting */}
        <div className="ambient-light-background" aria-hidden="true">
          <div className="ambient-light-orb-1" />
          <div className="ambient-light-orb-2" />
          <div className="ambient-light-orb-3" />
          <div className="ambient-light-grid" />
        </div>

        {/* Lenis 120fps Smooth Scroll Engine */}
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
