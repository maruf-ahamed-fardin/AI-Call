"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import AIWaveform from "@/components/ui/AIWaveform";
import AvatarVisual from "@/components/ui/AvatarVisual";
import { prefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Phone, PhoneOff, CheckCircle2, Send } from "lucide-react";

interface LiveVoiceConsoleProps {
  onCallStateChange?: (calling: boolean) => void;
  className?: string;
}

export default function LiveVoiceConsole({
  onCallStateChange,
  className = "",
}: LiveVoiceConsoleProps) {
  const [isCalling, setIsCalling] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [callTimer, setCallTimer] = useState(24);
  const [activeDialogueIndex, setActiveDialogueIndex] = useState(0);
  const [isAiSpeaking, setIsAiSpeaking] = useState(true);
  const [userCustomInput, setUserCustomInput] = useState("");

  const rootRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const statusDotRef = useRef<HTMLSpanElement | null>(null);
  const statusLabelRef = useRef<HTMLSpanElement | null>(null);
  const avatarRingRef = useRef<HTMLDivElement | null>(null);
  const waveformWrapRef = useRef<HTMLDivElement | null>(null);
  const dialogueBoxRef = useRef<HTMLDivElement | null>(null);
  const actionSlipRef = useRef<HTMLDivElement | null>(null);
  const promptGridRef = useRef<HTMLDivElement | null>(null);
  const inputBarRef = useRef<HTMLFormElement | null>(null);
  const sendBtnRef = useRef<HTMLButtonElement | null>(null);
  const callBtnIconRef = useRef<HTMLSpanElement | null>(null);

  const conversationScenarios = [
    {
      userQuery: "Confirm my COD order #4829 for Shahi Goods.",
      aiResponse: "আসসালামু আলাইকুম তানভীর ভাই! Shahi Goods থেকে আপনার #4829 লেদার জ্যাকেটের অর্ডারটি কনফার্ম করা হয়েছে।",
      action: "Steadfast Courier: Consignment #ST-98214 Created ✓",
      tag: "COD ORDER CONFIRMATION",
    },
    {
      userQuery: "I want to change my delivery address to Dhanmondi 27.",
      aiResponse: "ঠিক আছে! আপনার ডেলিভারি ঠিকানা 'ধানমন্ডি রোড ২৭' হিসেবে আপডেট করা হয়েছে এবং ট্র্যাকিং লিঙ্ক পাঠাচ্ছি।",
      action: "Address Updated in Shopify & SMS Tracking Dispatched ✓",
      tag: "ADDRESS CHANGE",
    },
    {
      userQuery: "Can you send me the bKash payment link?",
      aiResponse: "অবশ্যই! আপনার রেজিস্টার্ড নম্বরে বিকাশ পেমেন্ট টোকেন এবং ইনভয়েস WhatsApp-এ পাঠানো হয়েছে।",
      action: "bKash Token Generated & WhatsApp Receipt Sent ✓",
      tag: "FINTECH PAYMENT",
    },
  ];

  // Call timer interval
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCalling) {
      interval = setInterval(() => {
        setCallTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCalling]);

  // Cinematic mount entrance — header, avatar, dialogue, action slip, prompts, input bar cascade in
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.45 } });

      tl.from(headerRef.current, { y: -8, opacity: 0 })
        .from(avatarRingRef.current, { scale: 0.8, opacity: 0, duration: 0.5, ease: "back.out(1.6)" }, "-=0.25")
        .from(
          dialogueBoxRef.current?.querySelectorAll(".console-dialogue-row") ?? [],
          { y: 10, opacity: 0, stagger: 0.07 },
          "-=0.2"
        )
        .from(
          promptGridRef.current?.querySelectorAll(".console-prompt-btn") ?? [],
          { y: 6, opacity: 0, stagger: 0.05 },
          "-=0.15"
        )
        .from(inputBarRef.current, { y: 6, opacity: 0 }, "-=0.1")
        .from(callBtnIconRef.current?.closest("button") ?? callBtnIconRef.current, { scale: 0.7, opacity: 0, duration: 0.4, ease: "back.out(2)" }, "-=0.3");
    }, root);

    return () => ctx.revert();
  }, []);

  // Animate header/status-dot state whenever call state flips
  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (statusDotRef.current) {
      gsap.fromTo(
        statusDotRef.current,
        { scale: 1 },
        { scale: 1.5, duration: 0.15, yoyo: true, repeat: 1, ease: "power2.out" }
      );
    }
    if (statusLabelRef.current) {
      gsap.fromTo(
        statusLabelRef.current,
        { opacity: 0.3, y: -3 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
      );
    }
    if (callBtnIconRef.current) {
      gsap.fromTo(
        callBtnIconRef.current,
        { rotate: -90, opacity: 0, scale: 0.6 },
        { rotate: 0, opacity: 1, scale: 1, duration: 0.35, ease: "back.out(2)" }
      );
    }
  }, [isCalling]);

  // Cross-fade the waveform whenever the active dialogue / speaking state changes
  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (!waveformWrapRef.current) return;
    gsap.fromTo(
      waveformWrapRef.current,
      { opacity: 0.35, scale: 0.96 },
      { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
    );
  }, [isAiSpeaking, activeDialogueIndex]);

  // Handle Speech Synthesis when AI speaks
  const speakText = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.05;
        utterance.pitch = 1.1;
        setIsAiSpeaking(true);
        utterance.onend = () => setIsAiSpeaking(false);
        utterance.onerror = () => setIsAiSpeaking(false);
        window.speechSynthesis.speak(utterance);
      } catch (e) {
        setIsAiSpeaking(true);
        setTimeout(() => setIsAiSpeaking(false), 3000);
      }
    } else {
      // No speechSynthesis available — still simulate a speaking window so the UI stays truthful
      setIsAiSpeaking(true);
      setTimeout(() => setIsAiSpeaking(false), 2600);
    }
  };

  // Cancel any in-flight speech on unmount so it never keeps talking after navigating away
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const startCall = () => {
    setIsCalling(true);
    setCallTimer(0);
    if (onCallStateChange) onCallStateChange(true);
    speakText(conversationScenarios[activeDialogueIndex].aiResponse);
  };

  const endCall = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsAiSpeaking(false);
    setIsCalling(false);
    setCallTimer(0);
    if (onCallStateChange) onCallStateChange(false);
  };

  const handlePromptClick = (index: number) => {
    setActiveDialogueIndex(index);
    const scenario = conversationScenarios[index];
    if (!isCalling) {
      setIsCalling(true);
      setCallTimer(0);
      if (onCallStateChange) onCallStateChange(true);
    }
    speakText(scenario.aiResponse);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userCustomInput.trim()) return;
    if (!prefersReducedMotion() && sendBtnRef.current) {
      gsap.fromTo(
        sendBtnRef.current,
        { scale: 0.85 },
        { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.5)" }
      );
    }
    if (!isCalling) {
      setIsCalling(true);
      setCallTimer(0);
      if (onCallStateChange) onCallStateChange(true);
    }
    speakText(`ধন্যবাদ আপনার বার্তার জন্য! SeloraX AI আপনার অনুরোধটি প্রসেস করছে: "${userCustomInput}"`);
    setUserCustomInput("");
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const current = conversationScenarios[activeDialogueIndex % conversationScenarios.length];

  return (
    <div
      ref={rootRef}
      className={`relative w-full overflow-hidden gpu-layer ${className}`}
      style={{
        borderRadius: "24px",
        padding: "18px",
        background: "linear-gradient(165deg, #FFFFFF 0%, #FBFCFE 55%, #F5F9FF 100%)",
        border: "1px solid rgba(15, 23, 42, 0.06)",
        boxShadow:
          "0 40px 90px -26px rgba(15, 23, 42, 0.2), 0 12px 30px -14px rgba(37, 99, 235, 0.14), inset 0 1px 0 rgba(255,255,255,0.9)",
      }}
    >
      {/* Ambient premium lighting — soft brand blobs behind everything */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0) 70%)",
          filter: "blur(18px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "-40px",
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249, 115, 22, 0.11) 0%, rgba(249, 115, 22, 0) 70%)",
          filter: "blur(18px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Identity row — avatar, name, live status all in one compact line */}
      <div
        ref={headerRef}
        style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}
      >
        <div ref={avatarRingRef} style={{ position: "relative", width: "42px", height: "42px", flexShrink: 0 }}>
          <div
            aria-hidden
            className="console-avatar-pulse"
            style={{
              position: "absolute",
              inset: "-6px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #F97316 0%, #2563EB 100%)",
              filter: "blur(8px)",
              opacity: isCalling ? 0.5 : 0.2,
            }}
          />
          <div
            style={{
              position: "relative",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              padding: "2px",
              background: "linear-gradient(135deg, #F97316 0%, #2563EB 100%)",
              boxShadow: "0 6px 16px -4px rgba(37, 99, 235, 0.4)",
            }}
          >
            <AvatarVisual variant="sarah" size={38} />
          </div>
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: "13.5px", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
            Sarah Ahmed
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span
              ref={statusDotRef}
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: isCalling ? "#22C55E" : "#94A3B8",
                boxShadow: isCalling ? "0 0 6px #22C55E" : "none",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <span
              ref={statusLabelRef}
              style={{ fontSize: "10.5px", color: isCalling ? "#16A34A" : "#94A3B8", fontWeight: 600, whiteSpace: "nowrap" }}
            >
              {isCalling ? (isAiSpeaking ? "AI Speaking" : "Listening") : "SeloraX AI Voice Agent"}
            </span>
          </div>
        </div>

        <div ref={waveformWrapRef} style={{ flexShrink: 0 }}>
          {isCalling ? (
            <AIWaveform active barCount={14} colorTheme={isAiSpeaking ? "blue" : "orange"} height={18} speed={1.2} />
          ) : (
            <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", fontWeight: 700, color: "#94A3B8" }}>
              {formatTimer(callTimer)}
            </span>
          )}
        </div>
      </div>

      {/* Compact conversation preview — quote-style, fixed height regardless of scenario length */}
      <div ref={dialogueBoxRef} style={{ position: "relative", zIndex: 2, marginBottom: "12px" }}>
        <div
          className="console-dialogue-row"
          style={{
            fontSize: "10.5px",
            color: "#94A3B8",
            fontWeight: 600,
            marginBottom: "4px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          &ldquo;{current.userQuery}&rdquo;
        </div>

        <div
          className="console-dialogue-row"
          style={{
            borderLeft: "2.5px solid #2563EB",
            paddingLeft: "10px",
            fontSize: "12px",
            fontWeight: 600,
            color: "#0F172A",
            lineHeight: 1.4,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {current.aiResponse}
        </div>

        <div
          ref={actionSlipRef}
          className="console-dialogue-row"
          style={{
            marginTop: "6px",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "10px",
            color: "#16A34A",
            fontWeight: 700,
            maxWidth: "100%",
          }}
        >
          <CheckCircle2 size={11} color="#16A34A" style={{ flexShrink: 0 }} />
          <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{current.action}</span>
        </div>
      </div>

      {/* Quick Prompts — minimal chip row */}
      <div ref={promptGridRef} className="console-prompt-scroll" style={{ position: "relative", zIndex: 2, display: "flex", gap: "6px", overflowX: "auto", marginBottom: "12px" }}>
        {conversationScenarios.map((s, idx) => (
          <button
            key={idx}
            className="console-prompt-btn"
            onClick={() => handlePromptClick(idx)}
            style={{
              flexShrink: 0,
              padding: "6px 12px",
              borderRadius: "9999px",
              backgroundColor: activeDialogueIndex === idx && isCalling ? "#2563EB" : "#F8FAFC",
              border: activeDialogueIndex === idx && isCalling ? "1px solid #2563EB" : "1px solid rgba(15, 23, 42, 0.08)",
              color: activeDialogueIndex === idx && isCalling ? "#FFFFFF" : "#64748B",
              fontSize: "10px",
              fontWeight: 700,
              whiteSpace: "nowrap",
              cursor: "pointer",
              transition: "background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease",
            }}
          >
            {s.tag}
          </button>
        ))}
      </div>

      {/* Final row — composer + call button, one line */}
      <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", gap: "8px" }}>
        <form
          ref={inputBarRef}
          onSubmit={handleCustomSubmit}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: "2px",
            padding: "3px 3px 3px 13px",
            borderRadius: "9999px",
            backgroundColor: "#F8FAFC",
            border: "1px solid rgba(15, 23, 42, 0.08)",
            minWidth: 0,
          }}
        >
          <input
            type="text"
            placeholder="Ask anything..."
            value={userCustomInput}
            onChange={(e) => setUserCustomInput(e.target.value)}
            style={{
              flex: 1,
              minWidth: 0,
              padding: "8px 0",
              border: "none",
              fontSize: "11px",
              outline: "none",
              backgroundColor: "transparent",
            }}
          />
          <button
            ref={sendBtnRef}
            type="submit"
            aria-label="Send message"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #FB923C 0%, #EA580C 100%)",
              color: "#FFFFFF",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 5px 14px -4px rgba(234, 88, 12, 0.5)",
            }}
          >
            <Send size={12} />
          </button>
        </form>

        <button
          onClick={() => (isCalling ? endCall() : startCall())}
          aria-label={isCalling ? "End call" : "Start call"}
          style={{
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            flexShrink: 0,
            background: isCalling ? "linear-gradient(135deg, #F87171 0%, #DC2626 100%)" : "linear-gradient(135deg, #FB923C 0%, #EA580C 100%)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: isCalling ? "0 10px 22px -6px rgba(220, 38, 38, 0.5)" : "0 10px 22px -6px rgba(234, 88, 12, 0.5)",
          }}
        >
          <span ref={callBtnIconRef} style={{ display: "inline-flex" }}>
            {isCalling ? <PhoneOff size={18} color="#FFFFFF" /> : <Phone size={18} color="#FFFFFF" fill="#FFFFFF" />}
          </span>
        </button>
      </div>

      <style jsx>{`
        .console-avatar-pulse {
          animation: consolePulse 2.4s ease-in-out infinite;
          transition: opacity 0.4s ease;
        }
        @keyframes consolePulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.12);
          }
        }
        .console-prompt-scroll::-webkit-scrollbar {
          height: 0px;
        }
        @media (prefers-reduced-motion: reduce) {
          .console-avatar-pulse {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
