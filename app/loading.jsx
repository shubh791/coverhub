"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Global Loading State — Premium Ayurvedic Atmospheric Transition
 * 
 * Aesthetic Architecture:
 * - Deep forest-black background (#060D08) with soft amber & emerald ambient glow.
 * - Sacred botanical sun seal with concentric pulsing rings and delicate leaf motifs.
 * - Minimalist brass mortar & medicinal sprout silhouette.
 * - Warm Ivory typography: "COVER HUB" with silky antique-gold subtitle "Preparing your experience…".
 * - Fully accessible with role="status", aria-live="polite", and respects prefers-reduced-motion.
 */
export default function Loading() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Cover Hub Ayurvedic Experience"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060D08] text-[#F7F0DE] px-4 select-none overflow-hidden"
    >
      {/* Ambient Core Aura Glow */}
      <div className="absolute w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[radial-gradient(circle,_rgba(201,164,92,0.18)_0%,_rgba(18,36,26,0.3)_60%,_transparent_100%)] blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
        
        {/* Animated Sacred Botanical Seal / Mortar Icon */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mb-6">
          
          {/* Outer Pulsing Halo */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    scale: [1, 1.15, 1],
                    opacity: [0.35, 0.7, 0.35],
                  }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full border border-[#C9A45C]/40 border-dashed pointer-events-none"
          />

          {/* Inner Breathing Concentric Ring */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    rotate: 360,
                  }
            }
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-2 rounded-full border border-[#C9A45C]/20 pointer-events-none"
          >
            {/* Small celestial botanical orbital dots */}
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#DFBC75] shadow-[0_0_6px_#DFBC75]" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#C9A45C]/60" />
          </motion.div>

          {/* Central Circular Seal Disc */}
          <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-[#12241A] to-[#1C3A2B] border border-[#C9A45C] shadow-[0_0_24px_rgba(201,164,92,0.35)] flex items-center justify-center">
            
            {/* Illustrated Ayurvedic Mortar & Sprouting Leaf SVG */}
            <motion.svg
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: [1, 1.05, 1],
                    }
              }
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              viewBox="0 0 32 32"
              fill="none"
              className="w-8 h-8 text-[#DFBC75]"
              aria-hidden="true"
            >
              {/* Sprouting Medicinal Leaves */}
              <path
                d="M16 14V6"
                stroke="#C9A45C"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path
                d="M16 10C12 9 11 5 15 4C19 5 18 9 16 10Z"
                fill="#244B38"
                stroke="#DFBC75"
                strokeWidth="0.8"
              />
              <path
                d="M16 12C20 11 22 7 19 6C16 7 17 11 16 12Z"
                fill="#1C3A2B"
                stroke="#DFBC75"
                strokeWidth="0.8"
              />
              {/* Brass Mortar Bowl */}
              <path
                d="M6 16C6 23 11 26 16 26C21 26 26 23 26 16H6Z"
                fill="#12241A"
                stroke="#DFBC75"
                strokeWidth="1.4"
              />
              {/* Rim Accent */}
              <path
                d="M5 16H27V14H5V16Z"
                fill="#C9A45C"
              />
              {/* Pestle */}
              <path
                d="M19 10L23 15L21 16L17 11L19 10Z"
                fill="#DFBC75"
              />
              {/* Base */}
              <path
                d="M11 26H21V28H11V26Z"
                fill="#C9A45C"
              />
            </motion.svg>
          </div>
        </div>

        {/* Brand Name */}
        <h2 className="font-serif text-xl sm:text-2xl font-normal tracking-[0.14em] text-[#F7F0DE] leading-none mb-2">
          COVER HUB
        </h2>

        {/* Gentle Pulse Subtitle */}
        <motion.p
          animate={
            shouldReduceMotion
              ? {}
              : {
                  opacity: [0.6, 1, 0.6],
                }
          }
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="font-serif italic text-sm sm:text-base text-[#DED3BA] tracking-wide"
        >
          Preparing your experience…
        </motion.p>

        {/* Minimal Botanical Micro-Bar */}
        <div className="w-24 h-0.5 bg-[#1C3627] rounded-full mt-4 overflow-hidden relative">
          <motion.div
            animate={
              shouldReduceMotion
                ? { width: "100%" }
                : {
                    x: ["-100%", "100%"],
                  }
            }
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-12 h-full bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent"
          />
        </div>

      </div>
    </div>
  );
}
