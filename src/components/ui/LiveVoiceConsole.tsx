"use client";

import React, { useState, useEffect, useRef } from "react";
import AIWaveform from "@/components/ui/AIWaveform";
import AvatarVisual from "@/components/ui/AvatarVisual";
import {
  Mic,
  MicOff,
  PhoneOff,
  Volume2,
  Sparkles,
  CheckCircle2,
  Play,
  RotateCcw,
  Send,
} from "lucide-react";

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

  const conversationScenarios = [
    {
      userQuery: "Confirm my COD order #4829 for Shahi Goods.",
      aiResponse: "আসসালামু আলাইকুম তানভীর ভাই! Shahi Goods থেকে আপনার #4829 লেদার জ্যাকেটের অর্ডারটি কনফার্ম করা হয়েছে।",
      action: "Steadfast Courier: Consignment #ST-98214 Created ✓",
      tag: "COD ORDER CONFIRMATION",
    },
    {
      userQuery: "I want to change my delivery address to Dhanmondi 27.",
      aiResponse: "ঠিক আছে! আপনার ডেলিভারি ঠিকানা 'ধানমন্ডি রোড ২৭' হিসেবে আপডেট করা হয়েছে এবং ট্র্যাকিং লিঙ্ক পাঠাচ্ছি।",
      action: "Address Updated in Shopify & SMS Tracking Dispatched ✓",
      tag: "ADDRESS CHANGE",
    },
    {
      userQuery: "Can you send me the bKash payment link?",
      aiResponse: "অবশ্যই! আপনার রেজিস্টার্ড নম্বরে বিকাশ পেমেন্ট টোকেন এবং ইনভয়েস WhatsApp-এ পাঠানো হয়েছে।",
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
    }
  };

  const handlePromptClick = (index: number) => {
    setActiveDialogueIndex(index);
    const scenario = conversationScenarios[index];
    speakText(scenario.aiResponse);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userCustomInput.trim()) return;
    setIsAiSpeaking(true);
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
      className={`relative w-full rounded-[36px] bg-white border border-slate-200/80 shadow-2xl p-5 flex flex-col justify-between overflow-hidden gpu-layer ${className}`}
      style={{
        background: "linear-gradient(175deg, #FFFFFF 0%, #F8FAFC 100%)",
        border: "2px solid rgba(37, 99, 235, 0.2)",
        boxShadow: "0 25px 70px -15px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(37, 99, 235, 0.08)",
      }}
    >
      {/* Top Header Bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px", paddingBottom: "12px", borderBottom: "1px solid rgba(15, 23, 42, 0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: isCalling ? "#22C55E" : "#94A3B8",
              boxShadow: isCalling ? "0 0 8px #22C55E" : "none",
            }}
          />
          <span style={{ fontSize: "11px", fontWeight: 800, color: isCalling ? "#16A34A" : "#64748B", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {isCalling ? "AI CALL ACTIVE" : "CALL READY"}
          </span>
        </div>

        <div
          style={{
            padding: "2px 10px",
            backgroundColor: "rgba(37, 99, 235, 0.08)",
            borderRadius: "9999px",
            fontSize: "12px",
            fontFamily: "var(--font-mono)",
            fontWeight: 800,
            color: "#2563EB",
          }}
        >
          {formatTimer(callTimer)}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", color: "#64748B" }}>
          <Volume2 size={13} color="#2563EB" />
          <span style={{ fontWeight: 600 }}>24kHz HD</span>
        </div>
      </div>

      {/* Center Caller Portrait & AI Status */}
      <div style={{ textAlign: "center", padding: "4px 0 12px 0" }}>
        <div
          style={{
            position: "relative",
            width: "74px",
            height: "74px",
            margin: "0 auto 10px auto",
            borderRadius: "50%",
            padding: "3px",
            background: "linear-gradient(135deg, #F97316 0%, #2563EB 100%)",
            boxShadow: "0 8px 24px -4px rgba(37, 99, 235, 0.3)",
          }}
        >
          <AvatarVisual variant="sarah" size={68} />
        </div>

        <h4 style={{ fontSize: "16px", fontWeight: 800, color: "#0F172A", marginBottom: "1px" }}>
          Sarah Ahmed (SeloraX AI)
        </h4>

        <p style={{ fontSize: "11px", color: "#64748B", fontWeight: 600, marginBottom: "8px" }}>
          {isAiSpeaking ? "AI Speaking (<380ms Latency)" : "Listening to your voice..."}
        </p>

        {/* Real-time Dynamic Waveform */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
          <AIWaveform active={isCalling} barCount={26} colorTheme={isAiSpeaking ? "blue" : "orange"} height={26} speed={1.2} />
        </div>
      </div>

      {/* Live Interactive Dialogue Display */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "16px",
          padding: "12px 14px",
          border: "1px solid rgba(15, 23, 42, 0.08)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
          marginBottom: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {/* User Query */}
        <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
          <div style={{ width: "18px", height: "18px", borderRadius: "50%", backgroundColor: "#2563EB", color: "#FFFFFF", fontSize: "9px", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
            U
          </div>
          <p style={{ fontSize: "12px", color: "#334155", lineHeight: 1.4 }}>
            &ldquo;{current.userQuery}&rdquo;
          </p>
        </div>

        {/* AI Response */}
        <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
          <div style={{ width: "18px", height: "18px", borderRadius: "50%", backgroundColor: "#F97316", color: "#FFFFFF", fontSize: "9px", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
            AI
          </div>
          <p style={{ fontSize: "12px", color: "#0F172A", lineHeight: 1.4, fontWeight: 600 }}>
            &ldquo;{current.aiResponse}&rdquo;
          </p>
        </div>
      </div>

      {/* Live Action Slip */}
      <div
        style={{
          padding: "7px 12px",
          borderRadius: "10px",
          backgroundColor: "rgba(34, 197, 94, 0.08)",
          border: "1px solid rgba(34, 197, 94, 0.25)",
          fontSize: "11px",
          color: "#166534",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "12px",
        }}
      >
        <CheckCircle2 size={13} color="#16A34A" />
        <span>{current.action}</span>
      </div>

      {/* Quick Interactive Prompt Buttons - Tap to Talk */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "12px" }}>
        <div style={{ fontSize: "10px", fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          💡 Tap a Prompt to Hear AI Respond:
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
          {conversationScenarios.map((s, idx) => (
            <button
              key={idx}
              onClick={() => handlePromptClick(idx)}
              style={{
                padding: "6px 8px",
                borderRadius: "8px",
                backgroundColor: activeDialogueIndex === idx ? "rgba(37, 99, 235, 0.1)" : "#F8FAFC",
                border: activeDialogueIndex === idx ? "1px solid rgba(37, 99, 235, 0.35)" : "1px solid rgba(15, 23, 42, 0.06)",
                color: activeDialogueIndex === idx ? "#2563EB" : "#475569",
                fontSize: "10px",
                fontWeight: 600,
                textAlign: "left",
                cursor: "pointer",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              💬 {s.tag}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Message Input Bar inside Hero */}
      <form onSubmit={handleCustomSubmit} style={{ display: "flex", gap: "6px", marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Type or speak anything to the AI..."
          value={userCustomInput}
          onChange={(e) => setUserCustomInput(e.target.value)}
          style={{
            flex: 1,
            padding: "8px 12px",
            borderRadius: "10px",
            border: "1px solid rgba(15, 23, 42, 0.12)",
            fontSize: "11px",
            outline: "none",
            backgroundColor: "#FFFFFF",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 12px",
            borderRadius: "10px",
            backgroundColor: "#F97316",
            color: "#FFFFFF",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Send size={13} />
        </button>
      </form>

      {/* Call Controller Buttons */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
        <button
          onClick={() => {
            const nextState = !isCalling;
            setIsCalling(nextState);
            if (onCallStateChange) onCallStateChange(nextState);
          }}
          className={isCalling ? "btn btn-primary" : "btn btn-secondary"}
          style={{
            padding: "8px 12px",
            fontSize: "11px",
            fontWeight: 700,
            borderRadius: "10px",
          }}
        >
          {isCalling ? (
            <>
              <PhoneOff size={13} />
              <span>End Call</span>
            </>
          ) : (
            <>
              <Play size={13} fill="#2563EB" color="#2563EB" />
              <span>Start Call</span>
            </>
          )}
        </button>

        <button
          onClick={() => handlePromptClick((activeDialogueIndex + 1) % conversationScenarios.length)}
          className="btn btn-secondary"
          style={{
            padding: "8px 12px",
            fontSize: "11px",
            fontWeight: 700,
            borderRadius: "10px",
            color: "#2563EB",
          }}
        >
          <RotateCcw size={13} />
          <span>Next Scenario</span>
        </button>
      </div>
    </div>
  );
}
