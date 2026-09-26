"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { heroContent } from "@/data/content";

/**
 * Chapter 01: Hero — Full-Bleed Atmospheric Temple Sanctuary
 * 
 * Features:
 * - Full-bleed /images/hero-premium-bg.png (with WebP optimization & PNG fallback).
 * - Content positioned in the dark negative space on the left.
 * - Mortar, brass vessels, herbs, and sunrise temple horizon preserved on the right.
 * - Subtle left-side dark gradient for pristine text readability without heavy overlay.
 * - Ayurvedic manuscript-style Chapter 01 marker with antique-gold seal and animated botanical stem.
 * - Mobile-first responsive background framing.
 */
export default function Hero() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Staggered text entrance sequence
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            staggerChildren: 0.1,
            delayChildren: 0.05,
          },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative bg-[#060D08] min-h-[640px] sm:min-h-[720px] lg:min-h-[800px] xl:min-h-[860px] pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-14 sm:pb-16 lg:pb-20 overflow-hidden flex flex-col justify-center text-[#F7F0DE]"
      aria-labelledby="hero-heading"
    >
      {/* ========================================================================= */}
      {/* FULL-BLEED PREMIUM HERO BACKDROP (WebP with PNG Fallback)                  */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <picture>
          <source srcSet={heroContent.backdropImageWebp || "/images/hero-premium-bg.webp"} type="image/webp" />
          <img
            src={heroContent.backdropImage || "/images/hero-premium-bg.png"}
            alt="Ayurvedic temple sanctuary with classical herbs, brass mortar and pestle, and morning sunrise"
            className="w-full h-full object-cover object-[70%_center] sm:object-[66%_center] md:object-center select-none"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Subtle left-side dark gradient for text readability without hiding the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060D08]/90 via-[#060D08]/50 to-transparent lg:w-[58%] pointer-events-none" />
        
        {/* Mobile vertical gradient to protect text on smaller screens */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D08]/85 via-transparent to-[#060D08]/50 sm:hidden pointer-events-none" />

        {/* Seamless bottom blend into Chapter 02 */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#060D08] via-[#060D08]/60 to-transparent pointer-events-none" />
      </div>

      {/* ========================================================================= */}
      {/* HERO EDITORIAL CONTENT (Left-Aligned in Dark Negative Space)              */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Description, CTAs, Chapter Marker */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 xl:col-span-6 flex flex-col max-w-xl lg:max-w-[560px]"
          >
            {/* Chapter 01 Ayurvedic Manuscript Marker */}
            <motion.div variants={itemVariants} className="mb-4 sm:mb-5">
              <div className="relative inline-flex items-center gap-2 sm:gap-2.5 py-1 pr-3 sm:pr-4 pl-0.5 select-none">
                {/* Enhanced parchment brush texture for crisp contrast */}
                <div className="absolute inset-0 -inset-x-3 bg-[radial-gradient(ellipse_at_left,_rgba(216,182,106,0.3)_0%,_rgba(10,24,16,0.75)_65%,_transparent_100%)] blur-xs rounded-full pointer-events-none" />

                {/* Antique-Gold Circular Number Seal */}
                <motion.div
                  initial={{ scale: shouldReduceMotion ? 1 : 0.7, opacity: shouldReduceMotion ? 1 : 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative z-10 w-7 h-7 rounded-full bg-gradient-to-tr from-[#0E1C14] to-[#1C3A2B] border border-[#D8B66A] shadow-[0_0_14px_rgba(216,182,106,0.4)] flex items-center justify-center shrink-0"
                >
                  <span className="font-serif text-[11px] font-bold text-[#D8B66A] leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    01
                  </span>
                  <span className="absolute -inset-0.5 rounded-full border border-[#D8B66A]/45 pointer-events-none" />
                </motion.div>

                {/* Manuscript Typography & Animated Botanical Stem */}
                <div className="relative z-10 flex items-center gap-1.5 sm:gap-2 flex-wrap sm:flex-nowrap">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#D8B66A] font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                    Chapter 01
                  </span>
                  <span className="text-[#D8B66A] text-xs font-serif font-bold">·</span>
                  <span className="font-serif text-[12.5px] sm:text-xs text-[#FFF7E6] tracking-wider italic font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                    The Rebirth
                  </span>

                  {/* Connected Botanical Line with Leaf Illustrations */}
                  <svg className="w-12 sm:w-18 h-4 text-[#D8B66A] overflow-visible shrink-0 ml-0.5 sm:ml-1" viewBox="0 0 64 16" fill="none" aria-hidden="true">
                    <motion.path
                      d="M 0 8 L 54 8"
                      stroke="#D8B66A"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                    />
                    <motion.g
                      initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <path d="M 18 8 C 20 3, 26 4, 23 8 Z" fill="#12241A" stroke="#D8B66A" strokeWidth="0.7" />
                      <path d="M 36 8 C 38 13, 44 12, 41 8 Z" fill="#1C3A2B" stroke="#D8B66A" strokeWidth="0.7" />
                      <circle cx="56" cy="8" r="2.2" fill="#D8B66A" stroke="#12241A" strokeWidth="0.5" />
                    </motion.g>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Editorial Headline in Warm Ivory #F7F0DE */}
            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="font-serif text-3.5xl sm:text-4.5xl md:text-5xl lg:text-[56px] text-[#F7F0DE] leading-[1.12] tracking-tight font-normal drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]"
            >
              Ayurvedic wisdom for{" "}
              <span className="italic text-[#DFBC75] font-normal block sm:inline">
                everyday wellbeing.
              </span>
            </motion.h1>

            {/* 3. Concise Factual Copy in Soft Cream #DED3BA */}
            <motion.p
              variants={itemVariants}
              className="mt-5 sm:mt-6 text-base sm:text-lg text-[#DED3BA] leading-relaxed font-sans font-normal max-w-lg drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]"
            >
              {heroContent.description}
            </motion.p>

            {/* 4. Action Triggers */}
            <motion.div
              variants={itemVariants}
              className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
            >
              <a
                href={heroContent.primaryCta.target}
                className="inline-flex items-center justify-center rounded-xs bg-gradient-to-r from-[#C9A45C] to-[#DFBC75] px-7 py-3.5 text-center font-mono text-xs uppercase tracking-widest text-[#080E0A] font-bold transition-all duration-200 hover:from-[#DFBC75] hover:to-[#EED494] hover:shadow-[0_8px_24px_rgba(201,164,92,0.35)] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9A45C]"
              >
                <span>{heroContent.primaryCta.label}</span>
                <svg
                  className="ml-2.5 h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href={heroContent.secondaryCta.target}
                className="inline-flex items-center justify-center rounded-xs border border-[#C9A45C]/40 bg-[#06100A]/60 backdrop-blur-xs px-6 py-3.5 text-center font-mono text-xs uppercase tracking-widest text-[#F7F0DE] transition-colors hover:bg-[#C9A45C]/15 hover:border-[#C9A45C] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9A45C]"
              >
                {heroContent.secondaryCta.label}
              </a>
            </motion.div>

            {/* 5. Chapter Transition Indicator / Scroll Link */}
            <motion.div
              variants={itemVariants}
              className="mt-8 sm:mt-10 pt-5 border-t border-[#1C3627]/90"
            >
              <a
                href="#philosophy"
                className="group inline-flex items-center gap-2.5 rounded-full border border-[#C9A45C]/40 bg-[#09150E]/80 backdrop-blur-md px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#F7F0DE] font-medium shadow-2xs hover:border-[#DFBC75] hover:text-[#DFBC75] transition-all duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9A45C]"
                aria-label="Explore Our Philosophy - Scroll to philosophy section"
              >
                <span>{heroContent.transitionText}</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C9A45C]/20 text-[#DFBC75] transition-colors duration-200 group-hover:bg-[#C9A45C] group-hover:text-[#080E0A]">
                  <svg
                    className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Clear view of the Altar & Sunrise Horizon */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 pointer-events-none min-h-[300px]" />

        </div>
      </div>
    </section>
  );
}
