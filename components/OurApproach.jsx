"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { approachContent } from "@/data/content";

/**
 * Chapter 02: Our Approach — Balanced Cinematic Video & Connected Process
 * 
 * Visual & Animation Highlights:
 * - Reduced overlay opacity: Warm brass, herbs, hands, and sunlight in the video remain vibrantly visible.
 * - Balanced lighting: Gentle top/bottom gradients for crisp text readability with a clear, luminous center.
 * - IntersectionObserver single-run line animation: Draws smoothly once from 01 to 04 upon first view.
 * - Permanent visibility: Stays visible across scroll; never resets or replays until full page refresh.
 * - Reduced motion support.
 */

// Bespoke Minimal Ayurvedic SVG Icons
const stepIcons = {
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#DFBC75]" aria-hidden="true">
      <path d="M12 21V9" stroke="#C9A45C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 14c-4-1-5-5-1-6 3.5.5 3 4.5 1 6z" fill="#1C3A2B" stroke="#DFBC75" strokeWidth="0.8" />
      <path d="M12 11c4-1 5-5 1-6-3.5.5-3 4.5-1 6z" fill="#244B38" stroke="#DFBC75" strokeWidth="0.8" />
      <circle cx="12" cy="4.5" r="1.8" fill="#DFBC75" stroke="#FAF7F2" strokeWidth="0.6" />
    </svg>
  ),
  prepare: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#DFBC75]" aria-hidden="true">
      <path d="M5 9c0 6 3 9 7 9s7-3 7-9H5z" fill="#1C3A2B" stroke="#C9A45C" strokeWidth="1.4" />
      <path d="M4 9h16v-2H4v2z" fill="#C9A45C" stroke="#DFBC75" strokeWidth="0.8" />
      <path d="M9 18v3h6v-3" stroke="#C9A45C" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12 3.5c-1.2 1.8-1.8 3-1.8 4 0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-1-.6-2.2-1.8-4z" fill="#DFBC75" stroke="#FAF7F2" strokeWidth="0.6" />
      <circle cx="11.5" cy="6.5" r="0.6" fill="#FAF7F2" />
    </svg>
  ),
  mortar: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#DFBC75]" aria-hidden="true">
      <path d="M4 12c0 5 3.5 8 8 8s8-3 8-8H4z" fill="#1C3A2B" stroke="#C9A45C" strokeWidth="1.4" />
      <path d="M8 20h8v1.5H8V20z" fill="#C9A45C" stroke="#DFBC75" strokeWidth="0.8" />
      <path d="M15 4l2.5 1.5-6 8-2.5-1.5 6-8z" fill="#B9673C" stroke="#DFBC75" strokeWidth="1" strokeLinejoin="round" />
      <path d="M7 11c-1-3 1.5-4.5 3.5-3 1.5 1.2.5 3.5-1 3.5-.8 0-1.7-.2-2.5-.5z" fill="#244B38" opacity="0.9" />
    </svg>
  ),
  medicine: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#DFBC75]" aria-hidden="true">
      <path d="M7 9v10a2 2 0 002 2h2a2 2 0 002-2V9H7z" fill="#1C3A2B" stroke="#C9A45C" strokeWidth="1.3" />
      <path d="M8 6h4v3H8V6z" fill="#C9A45C" stroke="#DFBC75" strokeWidth="0.8" />
      <path d="M9 3h2v3H9V3z" stroke="#C9A45C" strokeWidth="1" />
      <g transform="translate(14, 10) rotate(-30)">
        <rect x="0" y="0" width="6" height="13" rx="3" stroke="#DFBC75" strokeWidth="0.9" fill="#152B20" />
        <path d="M0 6.5h6v3.5a3 3 0 01-3 3 3 3 0 01-3-3V6.5z" fill="#C9A45C" />
      </g>
      <circle cx="10" cy="14" r="1.4" fill="#DFBC75" stroke="#FAF7F2" strokeWidth="0.6" />
    </svg>
  ),
};

const stepDelays = [0.2, 0.75, 1.3, 1.85];

export default function OurApproach() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const [inView, setInView] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Safely trigger mobile muted autoplay on mount and retry on first user interaction
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            setIsVideoPlaying(true);
          })
          .catch((err) => {
            // Autoplay restricted on mobile power save or policy; poster fallback stays visible
            console.debug("Video autoplay restricted; fallback poster active:", err);
          });
      }
    };

    playVideo();

    const handleInteraction = () => {
      playVideo();
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("click", handleInteraction);
    };

    window.addEventListener("touchstart", handleInteraction, { passive: true, once: true });
    window.addEventListener("click", handleInteraction, { passive: true, once: true });

    return () => {
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("click", handleInteraction);
    };
  }, []);

  useEffect(() => {
    // If reduced motion is preferred, reveal immediately without animation
    if (shouldReduceMotion) {
      hasAnimatedRef.current = true;
      setInView(true);
      return;
    }

    // If already animated once in this page session, do not recreate observer
    if (hasAnimatedRef.current) return;

    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          setInView(true);
          observer.disconnect(); // Disconnect immediately to run only once per page load
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [shouldReduceMotion]);

  return (
    <section
      id="approach"
      ref={sectionRef}
      className="relative w-full min-h-[720px] lg:min-h-[820px] py-20 sm:py-24 lg:py-32 flex flex-col justify-center items-center overflow-hidden text-[#F7F0DE] scroll-mt-20 sm:scroll-mt-24 bg-[#08120C]"
      aria-labelledby="approach-heading"
    >
      {/* ========================================================================= */}
      {/* BALANCED CINEMATIC BACKGROUND VIDEO WITH SEAMLESS FIRST-FRAME POSTER FADE  */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-[#08120C]">
        
        {/* Exact First-Frame Fallback Poster */}
        <picture>
          <source srcSet="/images/approach/approach-video-poster.webp" type="image/webp" />
          <img
            src="/images/approach/approach-video-poster.jpg"
            alt="Ayurvedic preparation and formulation process"
            className={`absolute inset-0 w-full h-full object-cover object-center scale-105 select-none transition-opacity duration-700 ${
              isVideoPlaying ? "opacity-0" : "opacity-100"
            }`}
          />
        </picture>

        {/* Video Element with Mobile Safe Attributes & Autoplay Handler */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          poster="/images/approach/approach-video-poster.webp"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          onPlaying={() => setIsVideoPlaying(true)}
          onCanPlay={() => setIsVideoPlaying(true)}
          onLoadedData={() => setIsVideoPlaying(true)}
          className={`w-full h-full object-cover object-center scale-105 select-none pointer-events-none transition-opacity duration-700 ${
            isVideoPlaying ? "opacity-100" : "opacity-0"
          } [&::-webkit-media-controls]:hidden! [&::-webkit-media-controls-play-button]:hidden! [&::-webkit-media-controls-start-playback-button]:hidden! [&::-webkit-media-controls-overlay-play-button]:hidden!`}
        >
          <source src={approachContent.videoSrc} type="video/mp4" />
        </video>

        {/* Balanced Translucent Scrim — Warm botanicals, brass & sunlight stay clearly visible */}
        <div className="absolute inset-0 bg-[#08140E]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08120C]/75 via-[#08120C]/30 to-[#080E0A]/85 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,transparent_30%,rgba(6,14,9,0.55)_100%)] pointer-events-none" />

        {/* Seamless Top and Bottom Blend Fades (Hero -> Our Approach -> Collections) */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#060D08] via-[#08120C]/65 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0D1E15] via-[#080E0A]/75 to-transparent pointer-events-none" />
      </div>

      {/* Ambient Warm Golden Sun Flare Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-[#C9A45C]/15 blur-3xl pointer-events-none z-0" />

      {/* ========================================================================= */}
      {/* MAIN CONTENT OVERLAY                                                      */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        
        {/* Header Section: Headline & Subheading */}
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 lg:mb-22"
        >
          {/* Chapter 02 Ayurvedic Manuscript Marker */}
          <div className="mb-4 sm:mb-5 flex items-center justify-center">
            <div className="relative inline-flex items-center gap-2 sm:gap-2.5 py-1 pr-3 sm:pr-4 pl-0.5 select-none">
              {/* Enhanced parchment brush texture for crisp contrast */}
              <div className="absolute inset-0 -inset-x-3 bg-[radial-gradient(ellipse_at_left,_rgba(216,182,106,0.3)_0%,_rgba(10,24,16,0.75)_65%,_transparent_100%)] blur-xs rounded-full pointer-events-none" />

              {/* Antique-Gold Circular Number Seal */}
              <motion.div
                initial={{ scale: shouldReduceMotion ? 1 : 0.7, opacity: shouldReduceMotion ? 1 : 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: shouldReduceMotion ? 1 : 0.7, opacity: shouldReduceMotion ? 1 : 0 }}
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
                  Our Approach
                </span>

                {/* Connected Botanical Line with Leaf Illustrations */}
                <svg className="w-12 sm:w-18 h-4 text-[#D8B66A] overflow-visible shrink-0 ml-0.5 sm:ml-1" viewBox="0 0 64 16" fill="none" aria-hidden="true">
                  <motion.path
                    d="M 0 8 L 54 8"
                    stroke="#D8B66A"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
                    animate={inView ? { pathLength: 1 } : { pathLength: shouldReduceMotion ? 1 : 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  />
                  <motion.g
                    initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.5 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <path d="M 18 8 C 20 3, 26 4, 23 8 Z" fill="#12241A" stroke="#D8B66A" strokeWidth="0.7" />
                    <path d="M 36 8 C 38 13, 44 12, 41 8 Z" fill="#1C3A2B" stroke="#D8B66A" strokeWidth="0.7" />
                    <circle cx="56" cy="8" r="2.2" fill="#D8B66A" stroke="#12241A" strokeWidth="0.5" />
                  </motion.g>
                </svg>
              </div>
            </div>
          </div>

          {/* Heading in Warm Ivory #F7F0DE */}
          <h2
            id="approach-heading"
            className="font-serif text-3.5xl sm:text-4.5xl lg:text-5xl text-[#F7F0DE] font-normal leading-[1.15] tracking-tight text-center drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]"
          >
            {approachContent.heading}
          </h2>

          {/* Subtitle in Soft Cream #DED3BA */}
          <p className="mt-3.5 text-sm sm:text-base text-[#DED3BA] max-w-xl mx-auto font-normal leading-relaxed font-sans drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]">
            {approachContent.subheading || "A seamless journey from sacred botanicals to refined everyday wellness."}
          </p>
        </motion.div>

        {/* ======================================================================= */}
        {/* DESKTOP VIEW: HORIZONTAL CONNECTED 4-STEP PROCESS (>= 1024px)           */}
        {/* ======================================================================= */}
        <div className="hidden lg:block relative w-full">
          
          {/* Fine Antique-Gold Animated Connecting SVG Line */}
          <svg
            className="absolute top-8 left-0 right-0 w-full h-12 pointer-events-none z-0 overflow-visible"
            viewBox="0 0 1000 48"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="approachGoldLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8A6A32" stopOpacity="0.5" />
                <stop offset="25%" stopColor="#C9A45C" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#DFBC75" stopOpacity="1" />
                <stop offset="75%" stopColor="#C9A45C" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#8A6A32" stopOpacity="0.5" />
              </linearGradient>
            </defs>

            {/* Background Dotted Track */}
            <path
              d="M 125 24 Q 250 14 375 24 T 625 24 T 875 24"
              stroke="#C9A45C"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              opacity="0.35"
            />

            {/* Radiant Ambient Line Glow */}
            <motion.path
              d="M 125 24 Q 250 14 375 24 T 625 24 T 875 24"
              stroke="#DFBC75"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.3"
              initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
              animate={inView ? { pathLength: 1 } : { pathLength: shouldReduceMotion ? 1 : 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1.8,
                delay: shouldReduceMotion ? 0 : 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            />

            {/* Progressive Animated Antique-Gold Line (01 to 04 smoothly) */}
            <motion.path
              d="M 125 24 Q 250 14 375 24 T 625 24 T 875 24"
              stroke="url(#approachGoldLine)"
              strokeWidth="2.4"
              strokeLinecap="round"
              initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
              animate={inView ? { pathLength: 1 } : { pathLength: shouldReduceMotion ? 1 : 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1.8,
                delay: shouldReduceMotion ? 0 : 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            />

            {/* Intermediate Botanical Buds Revealed in Sequence */}
            <g className="text-[#C9A45C]">
              <motion.g
                initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.6 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.6 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : 0.5 }}
              >
                <circle cx="250" cy="19" r="3" fill="#DFBC75" stroke="#FAF7F2" strokeWidth="0.8" opacity="0.9" />
                <path d="M 250 16 C 246 11, 254 11, 250 16 Z" fill="#244B38" stroke="#C9A45C" strokeWidth="0.6" />
              </motion.g>
              
              <motion.g
                initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.6 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.6 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : 1.05 }}
              >
                <circle cx="500" cy="24" r="3" fill="#DFBC75" stroke="#FAF7F2" strokeWidth="0.8" opacity="0.9" />
                <path d="M 500 21 C 496 16, 504 16, 500 21 Z" fill="#244B38" stroke="#C9A45C" strokeWidth="0.6" />
              </motion.g>

              <motion.g
                initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.6 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.6 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : 1.6 }}
              >
                <circle cx="750" cy="24" r="3" fill="#DFBC75" stroke="#FAF7F2" strokeWidth="0.8" opacity="0.9" />
                <path d="M 750 21 C 746 16, 754 16, 750 21 Z" fill="#244B38" stroke="#C9A45C" strokeWidth="0.6" />
              </motion.g>
            </g>
          </svg>

          {/* 4 Process Step Nodes — Revealed sequentially as line reaches them */}
          <div className="grid grid-cols-4 gap-6 xl:gap-8 relative z-10">
            {approachContent.steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: shouldReduceMotion ? 1 : 0,
                  y: shouldReduceMotion ? 0 : 20,
                  scale: shouldReduceMotion ? 1 : 0.92,
                }}
                animate={
                  inView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : {
                        opacity: shouldReduceMotion ? 1 : 0,
                        y: shouldReduceMotion ? 0 : 20,
                        scale: shouldReduceMotion ? 1 : 0.92,
                      }
                }
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : stepDelays[idx],
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col items-center text-center group"
              >
                {/* Circular Marker with Antique Gold Aura */}
                <div className="relative mb-6">
                  {/* Soft Gold Breathing Glow */}
                  <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#C9A45C]/35 via-[#DFBC75]/25 to-transparent blur-md opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

                  {/* Circular Node Body */}
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-[#0F2318]/95 via-[#163323]/95 to-[#0D1E15]/95 border-2 border-[#C9A45C]/80 shadow-[0_0_24px_rgba(201,164,92,0.35)] flex items-center justify-center group-hover:border-[#DFBC75] group-hover:scale-110 transition-all duration-300 backdrop-blur-xs">
                    {stepIcons[step.icon] || stepIcons.leaf}

                    {/* Step Number Tag */}
                    <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 rounded-full bg-[#B9673C] text-[#FAF7F2] font-mono text-[9.5px] font-bold shadow-xs border border-[#FAF7F2]/40">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Floating Title in Warm Ivory #F7F0DE */}
                <h3 className="font-serif text-xl xl:text-2xl text-[#F7F0DE] font-normal tracking-wide group-hover:text-[#DFBC75] transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]">
                  {step.title}
                </h3>

                {/* Floating Description in Soft Cream #DED3BA */}
                <p className="mt-2 text-xs sm:text-sm text-[#DED3BA] font-sans leading-relaxed max-w-[220px] font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* ======================================================================= */}
        {/* MOBILE & TABLET VIEW: VERTICAL CONNECTED PROCESS (< 1024px)             */}
        {/* ======================================================================= */}
        <div className="lg:hidden relative w-full max-w-md mx-auto">
          
          {/* Vertical Antique Gold Connecting Line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-[#C9A45C]/35 z-0">
            <motion.div
              className="w-full bg-gradient-to-b from-[#C9A45C] via-[#DFBC75] to-[#B9673C] shadow-[0_0_12px_#DFBC75]"
              initial={{ height: shouldReduceMotion ? "100%" : "0%" }}
              animate={inView ? { height: "100%" } : { height: shouldReduceMotion ? "100%" : "0%" }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1.8,
                delay: shouldReduceMotion ? 0 : 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            />
          </div>

          {/* Vertical Steps Stack */}
          <div className="relative z-10 space-y-8">
            {approachContent.steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: shouldReduceMotion ? 1 : 0,
                  x: shouldReduceMotion ? 0 : -16,
                }}
                animate={
                  inView
                    ? { opacity: 1, x: 0 }
                    : {
                        opacity: shouldReduceMotion ? 1 : 0,
                        x: shouldReduceMotion ? 0 : -16,
                      }
                }
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.55,
                  delay: shouldReduceMotion ? 0 : stepDelays[idx],
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-start gap-4 group"
              >
                {/* Circular Marker */}
                <div className="relative shrink-0">
                  {/* Glow */}
                  <div className="absolute -inset-2 rounded-full bg-[#C9A45C]/35 blur-md opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-[#0F2318]/95 via-[#163323]/95 to-[#0D1E15]/95 border-2 border-[#C9A45C]/80 shadow-[0_0_20px_rgba(201,164,92,0.35)] flex items-center justify-center group-hover:border-[#DFBC75] transition-all backdrop-blur-xs">
                    {stepIcons[step.icon] || stepIcons.leaf}

                    <span className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full bg-[#B9673C] text-[#FAF7F2] font-mono text-[9px] font-bold shadow-xs border border-[#FAF7F2]/40">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Floating Content */}
                <div className="pt-2">
                  <h3 className="font-serif text-lg sm:text-xl text-[#F7F0DE] font-normal leading-snug group-hover:text-[#DFBC75] transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]">
                    <span className="font-mono text-xs text-[#C9A45C] mr-1.5 font-semibold">
                      {step.number} —
                    </span>
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-[#DED3BA] font-sans leading-relaxed font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom Sanskrit Philosophy Inscription */}
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 2.0 }}
          className="mt-14 sm:mt-18 lg:mt-20 pt-6 border-t border-[#1C3627]/90 text-center max-w-lg mx-auto"
        >
          <p className="font-serif text-xs sm:text-sm italic text-[#DED3BA] drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
            “From traditional botanical harvest to daily ritual — formulated with reverence and uncompromising care.”
          </p>
        </motion.div>

      </div>
    </section>
  );
}
