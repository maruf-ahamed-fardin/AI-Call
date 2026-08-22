"use client";

import React, { useState, useEffect } from "react";
import SeloraxLogo from "@/components/ui/SeloraxLogo";
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
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Live Demo", href: "#live-call" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(15, 23, 42, 0.06)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 20px -2px rgba(15, 23, 42, 0.03)" : "none",
        padding: scrolled ? "12px 0" : "20px 0",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Brand Logo */}
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <SeloraxLogo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "28px",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#475569",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0F172A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons: Login + Get Started */}
        <div style={{ display: "none", alignItems: "center", gap: "14px" }} className="desktop-actions">
          <a
            href="https://wa.me/8801993213030?text=Hi%2C%20I%20want%20to%20login%20to%20SeloraX"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#0F172A",
              textDecoration: "none",
            }}
          >
            Login
          </a>

          <a
            href="#live-call"
            className="btn btn-primary"
            style={{
              padding: "10px 22px",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            <span>Get Started</span>
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
            background: "none",
            border: "1px solid var(--border-subtle)",
            borderRadius: "10px",
            padding: "8px",
            color: "#0F172A",
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
            backgroundColor: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border-subtle)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
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
                color: "#0F172A",
                textDecoration: "none",
                padding: "8px 0",
                borderBottom: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              {link.label}
            </a>
          ))}

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "8px" }}>
            <a
              href="#live-call"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ width: "100%", textAlign: "center" }}
            >
              Get Started
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 860px) {
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
