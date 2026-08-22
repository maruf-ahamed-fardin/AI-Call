"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, ArrowRight, Volume2, Sparkles } from "lucide-react";

interface VoiceOption {
  id: string;
  name: string;
  gender: "Female" | "Male";
  language: string;
  sampleText: string;
  langCode: string;
}

const VOICES: VoiceOption[] = [
  {
    id: "aria",
    name: "Aria",
    gender: "Female",
    language: "English",
    sampleText: "Hello! I'm Aria from Nexus AI. How can I help verify your account details today?",
    langCode: "en-US",
  },
  {
    id: "david",
    name: "David",
    gender: "Male",
    language: "English",
    sampleText: "Hi there, David speaking. I'm following up on your recent enterprise inquiry.",
    langCode: "en-GB",
  },
  {
    id: "maya",
    name: "Maya",
    gender: "Female",
    language: "Spanish",
    sampleText: "¡Hola! Soy Maya de Nexus AI. ¿En qué puedo ayudarte hoy?",
    langCode: "es-ES",
  },
  {
    id: "liam",
    name: "Liam",
    gender: "Male",
    language: "French",
    sampleText: "Bonjour! C'est Liam de Nexus AI. Je vous appelle pour confirmer votre rendez-vous.",
    langCode: "fr-FR",
  },
];

interface InteractiveVoicePlayerProps {
  onPlayingChange?: (playing: boolean) => void;
}

export default function InteractiveVoicePlayer({ onPlayingChange }: InteractiveVoicePlayerProps) {
  const [selectedVoice, setSelectedVoice] = useState<VoiceOption>(VOICES[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const togglePlay = (voice?: VoiceOption) => {
    const targetVoice = voice || selectedVoice;
    if (voice && voice.id !== selectedVoice.id) {
      setSelectedVoice(voice);
    }

    if (isPlaying && (!voice || voice.id === selectedVoice.id)) {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlaying(false);
      onPlayingChange?.(false);
    } else {
      setIsPlaying(true);
      onPlayingChange?.(true);

      // Play synthesized voice if supported
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(targetVoice.sampleText);
        utterance.lang = targetVoice.langCode;
        utterance.rate = 1.0;
        utterance.pitch = targetVoice.gender === "Female" ? 1.1 : 0.9;

        utterance.onend = () => {
          setIsPlaying(false);
          onPlayingChange?.(false);
        };
        utterance.onerror = () => {
          setIsPlaying(false);
          onPlayingChange?.(false);
        };

        window.speechSynthesis.speak(utterance);
      } else {
        // Fallback simulation timer
        setTimeout(() => {
          setIsPlaying(false);
          onPlayingChange?.(false);
        }, 4000);
      }
    }
  };

  // Waveform Canvas Rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let phase = 0;

    const renderWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      const barCount = 38;
      const barWidth = 4;
      const gap = (width - barCount * barWidth) / (barCount - 1);

      for (let i = 0; i < barCount; i++) {
        const x = i * (barWidth + gap);
        let amplitude = 4;

        if (isPlaying) {
          amplitude = Math.sin(phase + i * 0.3) * 14 + Math.cos(phase * 1.5 + i * 0.2) * 8 + 12;
          amplitude = Math.max(3, Math.min(26, amplitude));
        } else {
          amplitude = 3 + Math.sin(phase * 0.5 + i * 0.2) * 2;
        }

        const grad = ctx.createLinearGradient(0, centerY - amplitude, 0, centerY + amplitude);
        grad.addColorStop(0, "#38BDF8");
        grad.addColorStop(1, "#3B82F6");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x, centerY - amplitude, barWidth, amplitude * 2, 2);
        ctx.fill();
      }

      phase += isPlaying ? 0.15 : 0.03;
      animationFrameRef.current = requestAnimationFrame(renderWave);
    };

    renderWave();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isPlaying]);

  return (
    <div
      className="glass-panel-glow"
      style={{
        padding: "24px",
        borderRadius: "20px",
        background: "rgba(7, 13, 30, 0.8)",
        border: "1px solid rgba(56, 189, 248, 0.2)",
        maxWidth: "400px",
        width: "100%",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <h4 style={{ fontSize: "16px", fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.02em" }}>
          Listen AI Voice
        </h4>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "11px",
            color: "#38BDF8",
            fontWeight: 600,
            background: "rgba(56, 189, 248, 0.1)",
            padding: "3px 8px",
            borderRadius: "6px",
          }}
        >
          <Volume2 size={12} />
          <span>HD Neural 48kHz</span>
        </div>
      </div>

      {/* Main Visualizer Waveform Bar */}
      <div
        style={{
          background: "rgba(2, 6, 23, 0.7)",
          borderRadius: "12px",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          marginBottom: "20px",
          border: "1px solid rgba(56, 189, 248, 0.15)",
        }}
      >
        <button
          onClick={() => togglePlay()}
          aria-label={isPlaying ? "Pause voice preview" : "Play voice preview"}
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            backgroundColor: "#38BDF8",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#020617",
            cursor: "pointer",
            flexShrink: 0,
            boxShadow: "0 0 14px rgba(56, 189, 248, 0.6)",
            transition: "transform 0.2s ease",
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.92)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {isPlaying ? <Pause size={18} fill="#020617" /> : <Play size={18} fill="#020617" style={{ marginLeft: "2px" }} />}
        </button>

        <canvas ref={canvasRef} width={240} height={40} style={{ width: "100%", height: "36px" }} />
      </div>

      {/* Voice Selection List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
        {VOICES.map((voice) => {
          const isSelected = selectedVoice.id === voice.id;
          const isThisPlaying = isSelected && isPlaying;

          return (
            <div
              key={voice.id}
              onClick={() => {
                setSelectedVoice(voice);
                togglePlay(voice);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 14px",
                borderRadius: "10px",
                backgroundColor: isSelected ? "rgba(56, 189, 248, 0.12)" : "rgba(15, 23, 42, 0.4)",
                border: isSelected ? "1px solid rgba(56, 189, 248, 0.35)" : "1px solid rgba(255, 255, 255, 0.05)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    backgroundColor: isThisPlaying ? "#38BDF8" : "rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: isThisPlaying ? "#020617" : "#94A3B8",
                  }}
                >
                  {isThisPlaying ? <Pause size={12} fill="#020617" /> : <Play size={12} fill="currentColor" style={{ marginLeft: "1px" }} />}
                </div>

                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "#FFFFFF" }}>
                    {voice.name} <span style={{ color: "#94A3B8", fontWeight: 400 }}>({voice.gender})</span>
                  </div>
                  <div style={{ fontSize: "11px", color: "#38BDF8" }}>
                    {voice.language}
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: isSelected ? "#38BDF8" : "transparent",
                  boxShadow: isSelected ? "0 0 8px #38BDF8" : "none",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Explore All Voices CTA */}
      <a
        href="#contact"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          fontSize: "13px",
          fontWeight: 600,
          color: "#94A3B8",
          textDecoration: "none",
          padding: "8px 0",
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#38BDF8")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
      >
        <span>Explore All Voices</span>
        <ArrowRight size={14} />
      </a>
    </div>
  );
}
