"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/**
 * 404 Not Found Page — Ayurvedic Nature Theme
 * 
 * Aesthetic Architecture:
 * - Deep forest-black background (#060D08) with ambient gold halo.
 * - Elegant botanical manuscript seal & 404 typography in Antique Gold.
 * - Atmospheric headline: “This path has returned to nature.”
 * - Contextual buttons to Return Home or Explore Collection.
 * - Mobile-first, fully responsive, and accessible.
 */
export default function NotFound() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#060D08] text-[#F7F0DE] relative overflow-hidden selection:bg-[#B9673C]/20 selection:text-[#DFBC75]">
      
      {/* Background Mandala & Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[700px] h-[550px] sm:h-[700px] rounded-full bg-[radial-gradient(circle,_rgba(201,164,92,0.14)_0%,_rgba(18,36,26,0.25)_60%,_transparent_100%)] blur-3xl" />
        
        {/* Sacred Concentric Rings Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.06] text-[#C9A45C]">
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full">
            <circle cx="100" cy="100" r="95" strokeWidth="0.8" strokeDasharray="3 4" />
            <circle cx="100" cy="100" r="75" strokeWidth="0.6" />
            <circle cx="100" cy="100" r="50" strokeWidth="0.8" strokeDasharray="2 3" />
            <circle cx="100" cy="100" r="25" strokeWidth="0.6" />
          </svg>
        </div>
      </div>

      {/* Top Brand Bar */}
      <header className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-3 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9A45C] rounded-xs group"
          aria-label="Cover Hub - Home"
        >
          <img
            src="/images/branding/coverhub-symbol.svg"
            alt="Cover Hub symbol"
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
            width={32}
            height={32}
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-normal tracking-[0.08em] text-[#F7F0DE] leading-none transition-colors group-hover:text-[#DFBC75]">
              COVER HUB
            </span>
            <span className="font-mono text-[8.5px] sm:text-[9px] uppercase tracking-[0.22em] text-[#C9A45C] mt-1 font-semibold">
              AYURVEDIC WELLNESS
            </span>
          </div>
        </Link>
      </header>

      {/* Main 404 Editorial Content */}
      <main className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center py-12 sm:py-16 flex flex-col items-center justify-center">
        
        {/* Illustrated Botanical Seal */}
        <motion.div
          initial={{ scale: shouldReduceMotion ? 1 : 0.8, opacity: shouldReduceMotion ? 1 : 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#12241A] to-[#1C3A2B] border border-[#C9A45C] shadow-[0_0_30px_rgba(201,164,92,0.25)] flex items-center justify-center mb-6"
        >
          {/* Subtle Outer Halo */}
          <div className="absolute -inset-2 rounded-full border border-[#C9A45C]/30 border-dashed pointer-events-none" />

          {/* Leaf & Manuscript Icon */}
          <svg viewBox="0 0 24 24" fill="none" className="w-9 h-9 text-[#DFBC75]" aria-hidden="true">
            <path d="M12 21V9" stroke="#C9A45C" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12 14C8 13 7 9 11 8C14.5 8.5 14 12.5 12 14Z" fill="#1C3A2B" stroke="#DFBC75" strokeWidth="0.8" />
            <path d="M12 11C16 10 17 6 13 5C9.5 5.5 10 9.5 12 11Z" fill="#244B38" stroke="#DFBC75" strokeWidth="0.8" />
            <circle cx="12" cy="4" r="1.5" fill="#DFBC75" stroke="#FAF7F2" strokeWidth="0.5" />
          </svg>
        </motion.div>

        {/* Large 404 Numeral */}
        <motion.span
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-[#C9A45C] font-semibold mb-2 block"
        >
          Error 404 · Uncharted Path
        </motion.span>

        <motion.h1
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-3.5xl sm:text-5xl lg:text-6xl text-[#F7F0DE] font-normal leading-[1.14] tracking-tight mb-4"
        >
          This path has returned to nature.
        </motion.h1>

        <motion.p
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base text-[#DED3BA] leading-relaxed max-w-md mx-auto mb-8 font-sans font-normal"
        >
          The page or botanical blend you are looking for is no longer available or may have moved to another part of our sanctuary.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
        >
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xs bg-gradient-to-r from-[#C9A45C] via-[#D8B66A] to-[#DFBC75] px-6 py-3 font-mono text-xs uppercase tracking-wider text-[#080E0A] font-bold border border-[#E8CA83] shadow-[0_4px_16px_rgba(201,164,92,0.3)] transition-all hover:from-[#DFBC75] hover:to-[#EED494]"
          >
            Return Home
          </Link>
          <Link
            href="/#collections"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xs border border-[#C9A45C]/60 bg-[#12241A]/60 px-6 py-3 font-mono text-xs uppercase tracking-wider text-[#DFBC75] font-semibold transition-all hover:border-[#C9A45C] hover:bg-[#12241A] hover:text-[#FFF8E8]"
          >
            Explore Collection
          </Link>
        </motion.div>

      </main>

      {/* Bottom Minimal Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 text-center text-xs text-[#AFA58F] font-mono border-t border-[#1C3627]/60">
        © {new Date().getFullYear()} Cover Hub. Rooted in Classical Ayurveda.
      </footer>

    </div>
  );
}
