"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

/**
 * SmoothScrollProvider
 * Gracefully integrates Lenis smooth scrolling for luxurious, smooth scroll progression.
 * Strictly respects prefers-reduced-motion to ensure accessibility and comfort.
 */
export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.4,
      infinite: false,
    });

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
