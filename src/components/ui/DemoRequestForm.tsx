"use client";

import React, { useActionState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { requestDemo, type DemoRequestState } from "@/app/actions";

const initialState: DemoRequestState = { status: "idle", message: "" };

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "13px",
  fontWeight: 600,
  color: "#CBD5E1",
  marginBottom: "6px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "12px",
  backgroundColor: "rgba(2, 6, 23, 0.7)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  color: "#F8FAFC",
  fontSize: "14px",
  fontFamily: "var(--font-sans)",
  outline: "none",
};

const errorStyle: React.CSSProperties = { fontSize: "12px", color: "#F87171", marginTop: "4px" };

export default function DemoRequestForm() {
  const [state, formAction, pending] = useActionState(requestDemo, initialState);

  if (state.status === "success") {
    return (
      <div
        className="glass-panel-glow"
        role="status"
        style={{
          padding: "48px 32px",
          borderRadius: "24px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <CheckCircle2 size={44} color="#10B981" />
        <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF" }}>Request received</h3>
        <p style={{ fontSize: "15px", color: "#94A3B8", lineHeight: 1.6 }}>{state.message}</p>
      </div>
    );
  }

  const fieldError = (key: keyof NonNullable<DemoRequestState["errors"]>) => state.errors?.[key];

  return (
    <form
      action={formAction}
      className="glass-panel-glow demo-form"
      noValidate
      style={{ padding: "32px 28px", borderRadius: "24px", display: "flex", flexDirection: "column", gap: "18px" }}
    >
      <div>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "4px" }}>Book a live demo</h3>
        <p style={{ fontSize: "14px", color: "#94A3B8" }}>See an AI agent run your real call flow in 30 minutes.</p>
      </div>

      {/* Honeypot field for bots; hidden from people and assistive tech */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: "1px", height: "1px", overflow: "hidden" }}>
        <label htmlFor="demo-website">Website</label>
        <input id="demo-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="demo-form-row">
        <div>
          <label htmlFor="demo-name" style={labelStyle}>Full name *</label>
          <input
            id="demo-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!fieldError("name")}
            aria-describedby={fieldError("name") ? "demo-name-error" : undefined}
            style={inputStyle}
          />
          {fieldError("name") && <p id="demo-name-error" style={errorStyle}>{fieldError("name")}</p>}
        </div>
        <div>
          <label htmlFor="demo-email" style={labelStyle}>Work email *</label>
          <input
            id="demo-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!fieldError("email")}
            aria-describedby={fieldError("email") ? "demo-email-error" : undefined}
            style={inputStyle}
          />
          {fieldError("email") && <p id="demo-email-error" style={errorStyle}>{fieldError("email")}</p>}
        </div>
      </div>

      <div className="demo-form-row">
        <div>
          <label htmlFor="demo-company" style={labelStyle}>Company *</label>
          <input
            id="demo-company"
            name="company"
            type="text"
            autoComplete="organization"
            required
            aria-invalid={!!fieldError("company")}
            aria-describedby={fieldError("company") ? "demo-company-error" : undefined}
            style={inputStyle}
          />
          {fieldError("company") && <p id="demo-company-error" style={errorStyle}>{fieldError("company")}</p>}
        </div>
        <div>
          <label htmlFor="demo-phone" style={labelStyle}>Phone</label>
          <input id="demo-phone" name="phone" type="tel" autoComplete="tel" style={inputStyle} />
        </div>
      </div>

      <div>
        <label htmlFor="demo-volume" style={labelStyle}>Monthly call volume</label>
        <select id="demo-volume" name="callVolume" defaultValue="" style={inputStyle}>
          <option value="" disabled>Select a range</option>
          <option>Under 1,000</option>
          <option>1,000 – 10,000</option>
          <option>10,000 – 50,000</option>
          <option>50,000+</option>
        </select>
      </div>

      <div>
        <label htmlFor="demo-message" style={labelStyle}>What calls do you want to automate?</label>
        <textarea id="demo-message" name="message" rows={3} style={{ ...inputStyle, resize: "vertical" }} />
      </div>

      {state.status === "error" && (
        <p role="alert" style={{ fontSize: "13px", color: "#F87171" }}>{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="btn btn-primary"
        style={{ width: "100%", padding: "14px", fontSize: "15px", fontWeight: 700, opacity: pending ? 0.7 : 1 }}
      >
        <span>{pending ? "Sending…" : "Request Demo"}</span>
        {!pending && <ArrowRight size={16} />}
      </button>

      <p style={{ fontSize: "12px", color: "#64748B", textAlign: "center" }}>
        By submitting, you agree to our <a href="/privacy" style={{ color: "#94A3B8" }}>Privacy Policy</a>.
      </p>

      <style jsx>{`
        .demo-form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }
        @media (min-width: 560px) {
          .demo-form-row {
            grid-template-columns: 1fr 1fr;
          }
        }
        .demo-form :global(input:focus),
        .demo-form :global(select:focus),
        .demo-form :global(textarea:focus) {
          border-color: rgba(56, 189, 248, 0.6) !important;
          box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);
        }
        .demo-form :global([aria-invalid="true"]) {
          border-color: rgba(248, 113, 113, 0.7) !important;
        }
      `}</style>
    </form>
  );
}
