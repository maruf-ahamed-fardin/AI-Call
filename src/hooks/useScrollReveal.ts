"use client";

import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface ScrollRevealOptions {
  /** CSS selector (relative to container) or element list to animate/stagger */
  targets: string | Element | Element[] | NodeListOf<Element>;
  start?: string;
  stagger?: number;
  y?: number;
  scale?: number;
  blur?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
}

export function useScrollReveal(
  containerRef: RefObject<HTMLElement | null>,
  options: ScrollRevealOptions
) {
  const {
    targets,
    start = "top 80%",
    stagger = 0.08,
    y = 36,
    scale = 0.96,
    blur = 6,
    duration = 0.7,
    delay = 0,
    once = false,
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const els =
        typeof targets === "string" ? container.querySelectorAll(targets) : targets;
      const list = "length" in els ? Array.from(els as ArrayLike<Element>) : [els as Element];
      if (!list.length) return;

      if (prefersReducedMotion()) {
        gsap.set(list, { clearProps: "all" });
        return;
      }

      gsap.from(list, {
        y,
        opacity: 0,
        scale,
        filter: `blur(${blur}px)`,
        duration,
        delay,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: container,
          start,
          toggleActions: once ? "play none none none" : "play none none reverse",
          once,
        },
      });
    }, container);

    return () => ctx.revert();
  }, [containerRef, targets, start, stagger, y, scale, blur, duration, delay, once]);
}
