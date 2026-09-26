"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { philosophyContent } from "@/data/content";

/**
 * Chapter 02: Our Philosophy — Full-Width Atmospheric Botanical Composition
 * 
 * Features:
 * - Full-width /images/philosophy-premium-bg.png (with WebP optimization & PNG fallback).
 * - Visual composition (illuminated manuscript, brass urn, incense, amla, tulsi) clearly visible on the left.
 * - Narrative text and CTA positioned cleanly on the right side.
 * - Warm Ivory (#F7F0DE) heading, Soft Cream (#DED3BA) body, and Antique Gold (#C9A45C) accents.
 * - Subtle gradient behind text only—no cards or box containers.
 * - Seamless connection into the atmospheric Sacred Sanskrit Shlok Area.
 */
export default function Philosophy() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants for editorial text group
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            staggerChildren: 0.12,
            delayChildren: 0.1,
          },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Sanskrit verse entrance
  const verseVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        delay: shouldReduceMotion ? 0 : 0.15,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="philosophy"
      className="relative bg-[#060D08] -mt-px text-[#F7F0DE] scroll-mt-20 sm:scroll-mt-24"
      aria-labelledby="philosophy-heading"
    >
      {/* ========================================================================= */}
      {/* MAIN BOTANICAL SCENE (Visuals Left, Text Right)                           */}
      {/* ========================================================================= */}
      <div className="relative w-full overflow-hidden bg-[#060D08] min-h-[560px] sm:min-h-[620px] md:min-h-[680px] lg:min-h-[740px] xl:min-h-[780px] flex items-center">
        
        {/* Full-Width Botanical & Manuscript Background (WebP + Fallback) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
          <picture>
            <source srcSet={philosophyContent.backdropImageWebp || "/images/philosophy-premium-bg.webp"} type="image/webp" />
            <img
              src={philosophyContent.backdropImage || "/images/philosophy-premium-bg.png"}
              alt={philosophyContent.imageAlt}
              className="w-full h-full object-cover object-[25%_center] sm:object-[35%_center] lg:object-center"
              loading="lazy"
            />
          </picture>

          {/* Subtle right-side dark gradient for text readability without hiding the background art */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#060D08]/90 via-[#060D08]/45 to-transparent lg:w-[58%] right-0 left-auto pointer-events-none" />
          
          {/* Mobile vertical gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060D08]/90 via-transparent to-[#060D08]/40 sm:hidden pointer-events-none" />

          {/* Seamless Edge Blends */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#060D08] to-transparent pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#09150E] to-transparent pointer-events-none z-10" />
        </div>

        {/* Scene Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
          
          {/* Grid: Left Visual Space (Manuscript & Altar), Right Text Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Clear View of Altar, Lamp & Manuscript */}
            <div className="hidden lg:block lg:col-span-6 xl:col-span-6 pointer-events-none min-h-[320px]" />

            {/* Right Column: Editorial Narrative in the Clean Right Space */}
            <motion.div
              variants={textContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center max-w-xl lg:max-w-none"
            >
              {/* Chapter 02 Ayurvedic Manuscript Marker */}
              <motion.div variants={textItemVariants} className="mb-4 sm:mb-5">
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
                      02
                    </span>
                    <span className="absolute -inset-0.5 rounded-full border border-[#D8B66A]/45 pointer-events-none" />
                  </motion.div>

                  {/* Manuscript Typography & Animated Botanical Stem */}
                  <div className="relative z-10 flex items-center gap-1.5 sm:gap-2 flex-wrap sm:flex-nowrap">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#D8B66A] font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                      Chapter 02
                    </span>
                    <span className="text-[#D8B66A] text-xs font-serif font-bold">·</span>
                    <span className="font-serif text-[12.5px] sm:text-xs text-[#FFF7E6] tracking-wider italic font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                      Our Philosophy
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

              {/* Editorial Heading in Warm Ivory #F7F0DE */}
              <motion.h2
                id="philosophy-heading"
                variants={textItemVariants}
                className="font-serif text-3.5xl sm:text-4.5xl md:text-5xl lg:text-[54px] text-[#F7F0DE] leading-[1.12] tracking-tight font-normal drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]"
              >
                Tradition, considered{" "}
                <span className="italic text-[#DFBC75] font-normal block sm:inline">
                  for today.
                </span>
              </motion.h2>

              {/* Narrative Body Copy in Soft Cream #DED3BA */}
              <motion.p
                variants={textItemVariants}
                className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[#DED3BA] leading-relaxed font-sans font-normal max-w-xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]"
              >
                {philosophyContent.body}
              </motion.p>

              {/* Primary Action CTA Button */}
              <motion.div
                variants={textItemVariants}
                className="mt-7 sm:mt-9 flex items-center"
              >
                <a
                  href={philosophyContent.cta.target}
                  className="inline-flex items-center justify-center rounded-xs bg-gradient-to-r from-[#C9A45C] to-[#DFBC75] px-7 sm:px-8 py-3.5 sm:py-4 text-center font-mono text-xs uppercase tracking-widest text-[#080E0A] font-bold transition-all duration-200 hover:from-[#DFBC75] hover:to-[#EED494] hover:shadow-[0_8px_24px_rgba(201,164,92,0.35)] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9A45C]"
                >
                  <span>{philosophyContent.cta.label}</span>
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
              </motion.div>
            </motion.div>

          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* SACRED SHLOK ATMOSPHERIC COMPOSITION (Deep Forest-Green Parchment Canvas) */}
      {/* ========================================================================= */}
      <div className="relative bg-[#09150E] py-18 sm:py-22 lg:py-26 overflow-hidden text-center">
        
        {/* Ambient Warm Golden Core Lighting Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_48%,_rgba(201,164,92,0.18)_0%,_rgba(18,36,26,0.6)_55%,_transparent_100%)] pointer-events-none z-0" />

        {/* Seamless Top & Bottom Edge Gradient Dissolves */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#060D08] via-[#09150E]/80 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0D1E15] via-[#0D1E15]/80 to-transparent pointer-events-none z-10" />

        {/* Subtle Ancient Sacred Mandala Watermark Backdrop */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.05] text-[#C9A45C] z-0">
          <svg viewBox="0 0 300 300" className="w-[420px] sm:w-[540px] lg:w-[620px] h-auto" fill="none" stroke="currentColor">
            <circle cx="150" cy="150" r="140" strokeWidth="1.2" strokeDasharray="4 6" />
            <circle cx="150" cy="150" r="115" strokeWidth="0.8" />
            <circle cx="150" cy="150" r="85" strokeWidth="1" strokeDasharray="3 4" />
            <circle cx="150" cy="150" r="55" strokeWidth="0.8" />
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <line
                key={deg}
                x1="150"
                y1="10"
                x2="150"
                y2="290"
                strokeWidth="0.6"
                transform={`rotate(${deg} 150 150)`}
              />
            ))}
          </svg>
        </div>

        {/* Atmospheric Floating Incense / Botanical Dust Motion */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [-10, -40, -10],
                    x: [0, 8, 0],
                    opacity: [0.3, 0.7, 0.3],
                  }
            }
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-[#DFBC75]/40 blur-[1px]"
          />
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [-5, -35, -5],
                    x: [0, -10, 0],
                    opacity: [0.2, 0.6, 0.2],
                  }
            }
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-[#C9A45C]/30 blur-[1px]"
          />
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, -30, 0],
                    x: [0, 6, 0],
                    opacity: [0.25, 0.65, 0.25],
                  }
            }
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-[#DFBC75]/35 blur-[1px]"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col items-center">
          
          {/* Main Shlok Container with Botanical Corner Flourishes */}
          <motion.div
            variants={verseVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="relative w-full py-8 sm:py-10 px-6 sm:px-12 flex flex-col items-center"
          >
            {/* Delicate Corner Botanical Illustrations */}
            <div className="absolute top-0 left-2 sm:left-6 w-8 h-8 text-[#C9A45C]/40 pointer-events-none" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor">
                <path d="M 2 30 C 2 10, 10 2, 30 2" strokeWidth="1" />
                <path d="M 8 16 C 12 12, 16 12, 16 8" strokeWidth="0.8" />
                <circle cx="20" cy="6" r="1.5" fill="#DFBC75" stroke="none" />
              </svg>
            </div>
            <div className="absolute top-0 right-2 sm:right-6 w-8 h-8 text-[#C9A45C]/40 pointer-events-none" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor">
                <path d="M 30 30 C 30 10, 22 2, 2 2" strokeWidth="1" />
                <path d="M 24 16 C 20 12, 16 12, 16 8" strokeWidth="0.8" />
                <circle cx="12" cy="6" r="1.5" fill="#DFBC75" stroke="none" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-2 sm:left-6 w-8 h-8 text-[#C9A45C]/40 pointer-events-none" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor">
                <path d="M 2 2 C 2 22, 10 30, 30 30" strokeWidth="1" />
                <path d="M 8 16 C 12 20, 16 20, 16 24" strokeWidth="0.8" />
                <circle cx="20" cy="26" r="1.5" fill="#DFBC75" stroke="none" />
              </svg>
            </div>
            <div className="absolute bottom-0 right-2 sm:right-6 w-8 h-8 text-[#C9A45C]/40 pointer-events-none" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor">
                <path d="M 30 2 C 30 22, 22 30, 2 30" strokeWidth="1" />
                <path d="M 24 16 C 20 20, 16 20, 16 24" strokeWidth="0.8" />
                <circle cx="12" cy="26" r="1.5" fill="#DFBC75" stroke="none" />
              </svg>
            </div>

            {/* Respectful & Tasteful Sacred Om Emblem */}
            <div className="mb-4 sm:mb-5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#12241A] to-[#1D3B2B] border border-[#C9A45C]/60 shadow-[0_0_20px_rgba(201,164,92,0.3)] flex items-center justify-center relative">
                <span className="font-serif text-xl sm:text-2xl text-[#DFBC75] leading-none select-none drop-shadow-xs">
                  ॐ
                </span>
                <span className="absolute -inset-1 rounded-full border border-[#C9A45C]/20 pointer-events-none" />
              </div>
            </div>

            {/* Sacred Sanskrit Scripture in Warm Ivory Devanagari */}
            <blockquote className="font-serif text-xl sm:text-2.5xl lg:text-3xl text-[#F7F0DE] leading-[1.65] font-normal tracking-wide max-w-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              <span className="block">{philosophyContent.sanskritVerse.line1}</span>
              <span className="block mt-1.5 sm:mt-2">{philosophyContent.sanskritVerse.line2}</span>
            </blockquote>

            {/* English Meaning in Soft Cream Text */}
            {philosophyContent.sanskritVerse.translation && (
              <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-[#DED3BA] font-sans italic max-w-xl mx-auto leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
                “{philosophyContent.sanskritVerse.translation}”
              </p>
            )}

            {/* Classical Sanskrit Attribution */}
            <cite className="mt-3.5 sm:mt-4 block font-mono text-xs uppercase tracking-widest text-[#C9A45C] not-italic font-semibold">
              {philosophyContent.sanskritVerse.attribution}
            </cite>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
