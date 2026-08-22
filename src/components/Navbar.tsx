"use client";

import React, { useState, useEffect } from "react";
import NexusLogo from "@/components/ui/NexusLogo";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Product", href: "#how-it-works" },
    { label: "Solutions", href: "#voice-intelligence" },
    { label: "Resources", href: "#industries" },
    { label: "Pricing", href: "#analytics" },
    { label: "Company", href: "#contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        backgroundColor: scrolled ? "rgba(2, 6, 23, 0.85)" : "rgba(2, 6, 23, 0.4)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(56, 189, 248, 0.15)" : "1px solid rgba(255, 255, 255, 0.05)",
        boxShadow: scrolled ? "0 10px 30px rgba(0, 0, 0, 0.5)" : "none",
        padding: scrolled ? "14px 0" : "22px 0",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Brand Logo */}
        <a href="#hero" style={{ textDecoration: "none" }}>
          <NexusLogo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "32px",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#94A3B8",
                textDecoration: "none",
                transition: "all 0.2s ease",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#38BDF8";
                e.currentTarget.style.textShadow = "0 0 10px rgba(56, 189, 248, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#94A3B8";
                e.currentTarget.style.textShadow = "none";
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons: Log In + Book Demo */}
        <div style={{ display: "none", alignItems: "center", gap: "18px" }} className="desktop-actions">
          <a
            href="#contact"
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#F8FAFC",
              textDecoration: "none",
              transition: "color 0.2s ease",
              padding: "8px 12px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#38BDF8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#F8FAFC")}
          >
            Log In
          </a>

          <a
            href="#contact"
            className="btn btn-primary"
            style={{
              padding: "10px 22px",
              fontSize: "14px",
              fontWeight: 600,
              borderRadius: "9999px",
            }}
          >
            <span>Book Demo</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="mobile-toggle"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(15, 23, 42, 0.6)",
            border: "1px solid rgba(56, 189, 248, 0.25)",
            borderRadius: "10px",
            padding: "8px",
            color: "#38BDF8",
            cursor: "pointer",
          }}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "rgba(2, 6, 23, 0.98)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderBottom: "1px solid rgba(56, 189, 248, 0.2)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#F8FAFC",
                textDecoration: "none",
                padding: "10px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {link.label}
            </a>
          ))}

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "10px" }}>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textAlign: "center",
                color: "#94A3B8",
                fontSize: "15px",
                padding: "8px",
                textDecoration: "none",
              }}
            >
              Log In
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ width: "100%", textAlign: "center" }}
            >
              Book Demo
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
