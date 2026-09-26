"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { heritageContent } from "@/data/content";

/**
 * Chapter 04: Rooted in Ayurveda — Celestial Earth & Sacred Om Constellation
 * 
 * Aesthetic & Structural Features:
 * - Central Global Earth Sphere with dimensional graticule, stylized landmasses,
 *   atmospheric Fresnel glow, and celestial orbit rings.
 * - Sacred ॐ (Om) Mandala radiating universal life energy from the heart of the Earth.
 * - 6 perimeter golden anchor ports along the Earth's spherical rim.
 * - Real-time dynamic DOM bezier lines connecting each Earth port to its matching satellite node.
 * - 6 bespoke illustrated Ayurvedic concept badges:
 *   1. आयुर्वेद (Science of Life) -> Palm-Leaf Manuscript & Lotus
 *   2. औषध (Herbal Alchemy) -> Classical Brass Mortar & Pestle (Kharal)
 *   3. प्रकृति (Inherent Nature) -> Entwined Medicinal Roots & Botanicals
 *   4. आरोग्य (Holistic Health) -> Radiant Prana Sun & Blooming Lotus
 *   5. शुद्धता (Botanical Purity) -> Apothecary Dropper & Pure Elixir
 *   6. संतुलन (Equilibrium) -> Tri-Dosha Balance & Celestial Scales
 * - Mobile-first responsive flow with vertical golden stem and 2-column card grid.
 */

const heritageNodes = [
  {
    id: "ayurveda",
    devanagari: "आयुर्वेद",
    english: "Science of Life",
    subtext: "Ancient Vedic Wisdom",
    side: "left",
    posDesktop: "lg:left-[2.5%] lg:top-[16%]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#8A6A32]">
        <path d="M3 7h18c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1z" fill="#EFE5D3" stroke="#8A6A32" strokeWidth="1.3" />
        <path d="M3 13h18c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1z" fill="#EFE5D3" stroke="#8A6A32" strokeWidth="1.3" />
        <circle cx="7" cy="9" r="1" fill="#B9673C" />
        <circle cx="7" cy="15" r="1" fill="#B9673C" />
        <line x1="10" y1="9" x2="18" y2="9" stroke="#B9673C" strokeWidth="1" strokeLinecap="round" />
        <line x1="10" y1="15" x2="18" y2="15" stroke="#B9673C" strokeWidth="1" strokeLinecap="round" />
        <path d="M12 4c-3 0-5 2.5-5 5h5V4z" fill="#152B20" opacity="0.85" />
      </svg>
    ),
  },
  {
    id: "aushadha",
    devanagari: "औषध",
    english: "Herbal Alchemy",
    subtext: "Classical Preparation",
    side: "left",
    posDesktop: "lg:left-[0.5%] lg:top-[48%]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#8A6A32]">
        <path d="M4 12c0 5 3.5 8 8 8s8-3 8-8H4z" fill="#EFE5D3" stroke="#8A6A32" strokeWidth="1.3" />
        <path d="M8 20h8v1.5H8V20z" fill="#C68A36" stroke="#8A6A32" strokeWidth="1" />
        <path d="M15 4l2.5 1.5-6 8-2.5-1.5 6-8z" fill="#B9673C" stroke="#8A6A32" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M7 11c-1-3 1.5-4.5 3.5-3 1.5 1.2.5 3.5-1 3.5-.8 0-1.7-.2-2.5-.5z" fill="#152B20" opacity="0.85" />
      </svg>
    ),
  },
  {
    id: "prakriti",
    devanagari: "प्रकृति",
    english: "Inherent Nature",
    subtext: "Deep Earth Roots",
    side: "left",
    posDesktop: "lg:left-[2.5%] lg:bottom-[16%]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#152B20]">
        <path d="M12 21V9" stroke="#8A6A32" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 18c-2 2-3 2.5-5 3m5-1c2 1.5 3.5 2 5 2.5m-5-3.5c-1 1.5-1.5 2.5-2.5 3.5" stroke="#B9673C" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M12 13c-4-1-5-5-1-6 3.5.5 3 4.5 1 6z" fill="#152B20" stroke="#152B20" strokeWidth="0.8" opacity="0.85" />
        <path d="M12 10c4-1 5-5 1-6-3.5.5-3 4.5-1 6z" fill="#1C3A2B" stroke="#1C3A2B" strokeWidth="0.8" opacity="0.85" />
      </svg>
    ),
  },
  {
    id: "arogya",
    devanagari: "आरोग्य",
    english: "Holistic Health",
    subtext: "Radiant Life Energy",
    side: "right",
    posDesktop: "lg:right-[2.5%] lg:top-[16%]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#C68A36]">
        <circle cx="12" cy="12" r="9" stroke="#C68A36" strokeWidth="1" strokeDasharray="1.5 2.5" />
        <path d="M12 6c-2 4 0 7 0 7s2-3 0-7z" fill="#B9673C" opacity="0.9" />
        <path d="M7 11c3 1 5 2 5 2s-1-3-5-2z" fill="#D49B4B" opacity="0.8" />
        <path d="M17 11c-3 1-5 2-5 2s1-3 5-2z" fill="#D49B4B" opacity="0.8" />
        <circle cx="12" cy="12.5" r="1.2" fill="#FAF7F2" />
      </svg>
    ),
  },
  {
    id: "shuddhata",
    devanagari: "शुद्धता",
    english: "Botanical Purity",
    subtext: "Pure Plant Extracts",
    side: "right",
    posDesktop: "lg:right-[0.5%] lg:top-[48%]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#B9673C]">
        <path d="M12 2v4m-3 4h6v1.5H9V10z" stroke="#8A6A32" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M10 6h4v4h-4V6z" fill="#EFE5D3" stroke="#8A6A32" strokeWidth="1" />
        <path d="M12 13c-2.5 3-3 4.5-3 6 0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.5-.5-3-3-6z" fill="#D49B4B" stroke="#B9673C" strokeWidth="1.2" />
        <circle cx="11" cy="18" r="0.8" fill="#FFFFFF" opacity="0.9" />
      </svg>
    ),
  },
  {
    id: "santulan",
    devanagari: "संतुलन",
    english: "Equilibrium",
    subtext: "Tri-Dosha Balance",
    side: "right",
    posDesktop: "lg:right-[2.5%] lg:bottom-[16%]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#8A6A32]">
        <path d="M12 3v18M6 8h12" stroke="#8A6A32" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M4 14l2-6 2 6c0 1-1 1.5-2 1.5s-2-.5-2-1.5z" fill="#EFE5D3" stroke="#C68A36" strokeWidth="1" />
        <path d="M16 14l2-6 2 6c0 1-1 1.5-2 1.5s-2-.5-2-1.5z" fill="#EFE5D3" stroke="#C68A36" strokeWidth="1" />
        <circle cx="12" cy="8" r="1.5" fill="#B9673C" />
        <path d="M9 21h6" stroke="#8A6A32" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function RootedInAyurveda() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Anchor Refs on Earth Globe (0-5)
  const boxAnchorRef0 = useRef(null);
  const boxAnchorRef1 = useRef(null);
  const boxAnchorRef2 = useRef(null);
  const boxAnchorRef3 = useRef(null);
  const boxAnchorRef4 = useRef(null);
  const boxAnchorRef5 = useRef(null);

  // Anchor Refs on Concept Cards (0-5)
  const cardAnchorRef0 = useRef(null);
  const cardAnchorRef1 = useRef(null);
  const cardAnchorRef2 = useRef(null);
  const cardAnchorRef3 = useRef(null);
  const cardAnchorRef4 = useRef(null);
  const cardAnchorRef5 = useRef(null);

  const [lineCoords, setLineCoords] = useState([]);

  // Recalculate precision connecting lines dynamically from Earth ports to card pins
  const updateLinePositions = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    if (containerRect.width === 0 || containerRect.height === 0) return;

    const boxRefs = [
      boxAnchorRef0,
      boxAnchorRef1,
      boxAnchorRef2,
      boxAnchorRef3,
      boxAnchorRef4,
      boxAnchorRef5,
    ];
    const cardRefs = [
      cardAnchorRef0,
      cardAnchorRef1,
      cardAnchorRef2,
      cardAnchorRef3,
      cardAnchorRef4,
      cardAnchorRef5,
    ];

    const lines = [];

    for (let i = 0; i < 6; i++) {
      const boxEl = boxRefs[i].current;
      const cardEl = cardRefs[i].current;

      if (boxEl && cardEl) {
        const bRect = boxEl.getBoundingClientRect();
        const cRect = cardEl.getBoundingClientRect();

        const x1 = bRect.left + bRect.width / 2 - containerRect.left;
        const y1 = bRect.top + bRect.height / 2 - containerRect.top;
        const x2 = cRect.left + cRect.width / 2 - containerRect.left;
        const y2 = cRect.top + cRect.height / 2 - containerRect.top;

        // Smooth horizontal bezier tangent from Earth sphere port to card pin
        const dx = (x2 - x1) * 0.52;
        const path = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;

        lines.push({
          id: i,
          path,
          x1,
          y1,
          x2,
          y2,
          midX,
          midY,
          isLeft: i < 3,
        });
      }
    }

    setLineCoords(lines);
  }, []);

  useEffect(() => {
    updateLinePositions();

    const handleResize = () => {
      updateLinePositions();
    };

    window.addEventListener("resize", handleResize);

    let resizeObserver;
    if (typeof ResizeObserver !== "undefined" && containerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updateLinePositions();
      });
      resizeObserver.observe(containerRef.current);
    }

    const t1 = setTimeout(updateLinePositions, 80);
    const t2 = setTimeout(updateLinePositions, 350);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeObserver) resizeObserver.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [updateLinePositions]);

  // Subtle background parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, shouldReduceMotion ? 0 : -30]
  );

  // Staggered entrance variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            staggerChildren: 0.1,
            delayChildren: 0.1,
          },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const cardRefMap = [
    cardAnchorRef0,
    cardAnchorRef1,
    cardAnchorRef2,
    cardAnchorRef3,
    cardAnchorRef4,
    cardAnchorRef5,
  ];

  return (
    <section
      id="heritage"
      ref={sectionRef}
      className="relative min-h-[720px] sm:min-h-[800px] lg:min-h-[900px] overflow-hidden flex items-center justify-center text-[#222B26] scroll-mt-20 sm:scroll-mt-24 border-y border-[#E2D8C7] bg-[#EFE6D8]"
      aria-labelledby="heritage-heading"
    >
      {/* Full-Width Panoramic Heritage Background with Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-x-0 -top-12 -bottom-12 w-full h-[calc(100%+96px)] pointer-events-none z-0"
      >
        <img
          src={heritageContent.backdropImage}
          alt={heritageContent.imageAlt}
          className="w-full h-full object-cover object-center select-none"
          loading="lazy"
        />

        {/* Radiant Natural Sunlit Lighting Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#152B20]/35 via-transparent to-[#152B20]/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#152B20]/20 via-transparent to-[#152B20]/20 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FAF7F2]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAF7F2]/80 to-transparent pointer-events-none" />
      </motion.div>

      {/* ========================================================================= */}
      {/* MAIN RELATIVE CONTAINER FOR PRECISE DOCKING                              */}
      {/* ========================================================================= */}
      <div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24 flex flex-col items-center"
      >
        {/* ======================================================================= */}
        {/* DYNAMIC POINT-TO-POINT CONNECTING LINES SVG (EARTH TO ICONS)            */}
        {/* ======================================================================= */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-15 hidden lg:block overflow-visible"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="goldVineLeft" x1="1" y1="0.5" x2="0" y2="0.5">
              <stop offset="0%" stopColor="#B9673C" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#C68A36" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#8A6A32" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="goldVineRight" x1="0" y1="0.5" x2="1" y2="0.5">
              <stop offset="0%" stopColor="#B9673C" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#C68A36" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#8A6A32" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Render each dynamic line connecting exactly from Earth globe port to card pin */}
          {lineCoords.map((line) => (
            <g key={line.id}>
              {/* Subtle ambient soft glow behind the line */}
              <path
                d={line.path}
                stroke="#C68A36"
                strokeWidth="5"
                strokeLinecap="round"
                opacity="0.22"
              />

              {/* Main radiant golden connecting line */}
              <motion.path
                d={line.path}
                stroke={line.isLeft ? "url(#goldVineLeft)" : "url(#goldVineRight)"}
                strokeWidth="2.4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.1 + line.id * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />

              {/* Midpoint decorative golden node */}
              <circle
                cx={line.midX}
                cy={line.midY}
                r="3.5"
                fill="#B9673C"
                stroke="#FAF7F2"
                strokeWidth="1.2"
                opacity="0.95"
              />
            </g>
          ))}
        </svg>

        {/* ===================================================================== */}
        {/* DESKTOP SATELLITE NODES WITH BESPOKE AYURVEDIC ICONS                  */}
        {/* ===================================================================== */}
        {heritageNodes.map((node, index) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 + index * 0.08 }}
            whileHover={{ y: -3, scale: 1.02 }}
            className={`absolute ${node.posDesktop} hidden lg:flex items-center gap-3 bg-[#FAF7F2]/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-[#C68A36]/45 shadow-[0_12px_28px_-8px_rgba(21,43,32,0.16)] z-20 select-none group transition-all duration-300 overflow-visible`}
          >
            {/* Direct Connection Docking Pin */}
            <div
              ref={cardRefMap[index]}
              className={`absolute ${
                node.side === "left" ? "-right-2" : "-left-2"
              } top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#C68A36] border-2 border-[#FAF7F2] shadow-sm flex items-center justify-center z-30 group-hover:border-[#B9673C] group-hover:scale-110 transition-all`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FAF7F2]" />
            </div>

            {/* Custom Ayurvedic Icon Badge */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#EFE5D3] to-[#FFFFFF] border border-[#C68A36]/40 flex items-center justify-center shrink-0 shadow-2xs group-hover:border-[#B9673C] group-hover:shadow-sm transition-all">
              {node.icon}
            </div>

            {/* Devanagari Title + Concept Meaning */}
            <div className="text-left">
              <span className="block font-serif text-base font-medium text-[#152B20] tracking-wide group-hover:text-[#B9673C] transition-colors">
                {node.devanagari}
              </span>
              <span className="block text-[9.5px] font-mono text-[#8A6A32] uppercase tracking-[0.14em] font-semibold">
                {node.english}
              </span>
            </div>
          </motion.div>
        ))}

        {/* ===================================================================== */}
        {/* CENTRAL GLOBAL EARTH VISUAL WITH SACRED OM NUCLEUS                    */}
        {/* ===================================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          style={{ aspectRatio: "1 / 1" }}
          className="relative w-[calc(100vw-2rem)] max-w-[340px] xs:max-w-[380px] sm:max-w-[540px] lg:max-w-[640px] aspect-square shrink-0 bg-gradient-to-b from-[#FAF7F2]/98 via-[#F7EFE2]/95 to-[#EAE0D0]/95 backdrop-blur-md px-3 xs:px-6 sm:px-12 py-5 xs:py-7 sm:py-14 rounded-full border-2 border-[#D5CABB] shadow-[0_0_70px_rgba(198,138,54,0.25),0_30px_70px_-15px_rgba(21,43,32,0.22),inset_0_0_50px_rgba(255,255,255,0.85),inset_0_-25px_50px_rgba(185,103,60,0.12)] flex flex-col items-center justify-center text-center overflow-visible z-20"
        >
          {/* ================================================================= */}
          {/* CELESTIAL EARTH ORBITAL RINGS & AURA                             */}
          {/* ================================================================= */}
          <div className="absolute -inset-2 xs:-inset-3 sm:-inset-5 rounded-full border border-[#C68A36]/30 border-dashed pointer-events-none" />
          <div className="absolute -inset-4 xs:-inset-6 sm:-inset-9 rounded-full border border-[#D49B4B]/20 pointer-events-none" />

          {/* ================================================================= */}
          {/* EARTH SPHERE VECTOR GRATICULE & CONTINENT SILHOUETTES            */}
          {/* ================================================================= */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none select-none rounded-full"
            viewBox="0 0 400 400"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              {/* Spherical Depth Gradient */}
              <radialGradient id="earthShadeGrad" cx="30%" cy="25%" r="75%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#FAF7F2" stopOpacity="0.2" />
                <stop offset="90%" stopColor="#E2D4C0" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#C68A36" stopOpacity="0.25" />
              </radialGradient>
              {/* Clip to exact Earth Sphere */}
              <clipPath id="earthDiscClip">
                <circle cx="200" cy="200" r="196" />
              </clipPath>
            </defs>

            {/* Spherical Base Shading */}
            <circle cx="200" cy="200" r="196" fill="url(#earthShadeGrad)" />

            {/* Earth Latitudes, Longitudes & Landmasses */}
            <g clipPath="url(#earthDiscClip)">
              {/* Latitude Parallels */}
              <path d="M 8 200 Q 200 230 392 200" stroke="#C68A36" strokeWidth="0.85" strokeDasharray="3 4" opacity="0.45" />
              <path d="M 28 135 Q 200 160 372 135" stroke="#C68A36" strokeWidth="0.7" strokeDasharray="3 4" opacity="0.32" />
              <path d="M 28 265 Q 200 290 372 265" stroke="#C68A36" strokeWidth="0.7" strokeDasharray="3 4" opacity="0.32" />
              <path d="M 70 80 Q 200 100 330 80" stroke="#C68A36" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.22" />
              <path d="M 70 320 Q 200 340 330 320" stroke="#C68A36" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.22" />

              {/* Longitude Meridians */}
              <ellipse cx="200" cy="200" rx="145" ry="196" stroke="#C68A36" strokeWidth="0.75" strokeDasharray="3 4" opacity="0.35" />
              <ellipse cx="200" cy="200" rx="85" ry="196" stroke="#C68A36" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.38" />
              <line x1="200" y1="4" x2="200" y2="396" stroke="#C68A36" strokeWidth="0.9" strokeDasharray="4 4" opacity="0.4" />

              {/* Stylized Botanical Earth Landmass Contours */}
              {/* Eurasia / Indian Subcontinent */}
              <path
                d="M 175 110 C 200 95, 240 105, 260 125 C 275 140, 265 165, 245 175 C 230 185, 222 210, 210 225 C 200 235, 190 220, 185 200 C 178 170, 155 155, 160 135 Z"
                fill="#152B20"
                opacity="0.07"
              />
              {/* Africa / Indian Ocean Coast */}
              <path
                d="M 125 160 C 150 150, 170 165, 165 190 C 160 215, 175 245, 160 275 C 145 295, 130 270, 120 240 C 110 210, 110 175, 125 160 Z"
                fill="#152B20"
                opacity="0.06"
              />
              {/* Australasia / East Asia */}
              <path
                d="M 285 235 C 310 225, 330 245, 325 270 C 315 290, 290 280, 285 260 Z"
                fill="#152B20"
                opacity="0.05"
              />

              {/* Radiant Golden Equator Stream */}
              <path
                d="M 4 200 Q 200 230 396 200"
                stroke="#D49B4B"
                strokeWidth="1.6"
                opacity="0.4"
              />
            </g>
          </svg>

          {/* ================================================================= */}
          {/* DESKTOP EARTH SPHERE CONNECTION PORTS (3 LEFT, 3 RIGHT)          */}
          {/* ================================================================= */}
          {/* Left Hemisphere Ports (0: Top-Left, 1: Mid-Left, 2: Bottom-Left) */}
          <div
            ref={boxAnchorRef0}
            className="hidden lg:flex absolute left-[3%] top-[24%] w-4 h-4 rounded-full bg-[#B9673C] border-2 border-[#FAF7F2] shadow-sm -translate-y-1/2 items-center justify-center z-30"
            title="आयुर्वेद Earth Connection Port"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FAF7F2]" />
          </div>
          <div
            ref={boxAnchorRef1}
            className="hidden lg:flex absolute -left-2.5 top-[50%] w-4 h-4 rounded-full bg-[#B9673C] border-2 border-[#FAF7F2] shadow-sm -translate-y-1/2 items-center justify-center z-30"
            title="औषध Earth Connection Port"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FAF7F2]" />
          </div>
          <div
            ref={boxAnchorRef2}
            className="hidden lg:flex absolute left-[3%] top-[76%] w-4 h-4 rounded-full bg-[#B9673C] border-2 border-[#FAF7F2] shadow-sm -translate-y-1/2 items-center justify-center z-30"
            title="प्रकृति Earth Connection Port"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FAF7F2]" />
          </div>

          {/* Right Hemisphere Ports (3: Top-Right, 4: Mid-Right, 5: Bottom-Right) */}
          <div
            ref={boxAnchorRef3}
            className="hidden lg:flex absolute right-[3%] top-[24%] w-4 h-4 rounded-full bg-[#B9673C] border-2 border-[#FAF7F2] shadow-sm -translate-y-1/2 items-center justify-center z-30"
            title="आरोग्य Earth Connection Port"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FAF7F2]" />
          </div>
          <div
            ref={boxAnchorRef4}
            className="hidden lg:flex absolute -right-2.5 top-[50%] w-4 h-4 rounded-full bg-[#B9673C] border-2 border-[#FAF7F2] shadow-sm -translate-y-1/2 items-center justify-center z-30"
            title="शुद्धता Earth Connection Port"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FAF7F2]" />
          </div>
          <div
            ref={boxAnchorRef5}
            className="hidden lg:flex absolute right-[3%] top-[76%] w-4 h-4 rounded-full bg-[#B9673C] border-2 border-[#FAF7F2] shadow-sm -translate-y-1/2 items-center justify-center z-30"
            title="संतुलन Earth Connection Port"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FAF7F2]" />
          </div>

          {/* ================================================================= */}
          {/* SACRED OM MANDALA AT THE CORE OF THE EARTH                       */}
          {/* ================================================================= */}
          <motion.div variants={itemVariants} className="mb-1.5 xs:mb-2 sm:mb-4 relative flex flex-col items-center z-20">
            
            {/* Breathing Golden Core Aura */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: [1, 1.14, 1],
                      opacity: [0.7, 1, 0.7],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-3 sm:-inset-4 rounded-full bg-gradient-to-tr from-[#C68A36]/35 via-[#D49B4B]/45 to-[#B9673C]/25 blur-xl pointer-events-none"
            />

            {/* Sacred 12-Ray Sun Mandala with Center OM */}
            <div className="relative w-13 h-13 xs:w-16 xs:h-16 sm:w-22 sm:h-22 lg:w-24 lg:h-24 rounded-full bg-gradient-to-tr from-[#EFE5D3] to-[#FFFFFF] border-2 border-[#C68A36]/70 shadow-lg flex items-center justify-center">
              
              {/* Delicate Solar Graticule Rays */}
              <svg
                className="absolute inset-[-6px] sm:inset-[-10px] w-[calc(100%+12px)] sm:w-[calc(100%+20px)] h-[calc(100%+12px)] sm:h-[calc(100%+20px)] text-[#C68A36] pointer-events-none"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="50" cy="50" r="47" strokeWidth="0.9" strokeDasharray="2 3" />
                <circle cx="50" cy="50" r="43" strokeWidth="0.6" />
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                  <line
                    key={deg}
                    x1="50"
                    y1="2"
                    x2="50"
                    y2="7"
                    strokeWidth="1.5"
                    transform={`rotate(${deg} 50 50)`}
                  />
                ))}
              </svg>

              {/* Sacred OM Symbol in Pure Devanagari */}
              <span className="font-serif text-2xl xs:text-2.5xl sm:text-3.5xl lg:text-4xl text-[#B9673C] font-semibold leading-none select-none drop-shadow-xs">
                ॐ
              </span>
            </div>

            {/* Central Brass Medicine Vessel with Sprouting Botanicals */}
            <div className="mt-0.5 sm:mt-2 text-[#8A725D] drop-shadow-2xs scale-75 xs:scale-85 sm:scale-100">
              <svg width="52" height="22" viewBox="0 0 48 20" fill="none">
                <path d="M 6 4 C 6 16, 42 16, 42 4 Z" fill="#D49B4B" fillOpacity="0.8" stroke="#C68A36" strokeWidth="1.8" />
                <path d="M 18 16 L 14 19 L 34 19 L 30 16 Z" fill="#8A725D" />
                <path d="M 24 4 C 20 -3, 28 -5, 24 4 Z" fill="#152B20" />
                <path d="M 19 5 C 14 1, 20 -2, 19 5 Z" fill="#1C3A2B" />
                <path d="M 29 5 C 34 1, 28 -2, 29 5 Z" fill="#1C3A2B" />
              </svg>
            </div>

          </motion.div>

          {/* Chapter 04 Ayurvedic Manuscript Marker */}
          <motion.div variants={itemVariants} className="mb-1.5 xs:mb-2 sm:mb-4 flex items-center justify-center z-20 scale-85 xs:scale-95 sm:scale-100">
            <div className="relative inline-flex items-center gap-1.5 sm:gap-2.5 py-0.5 sm:py-1 pr-3 sm:pr-4 pl-0.5 select-none">
              {/* Faint parchment brush texture behind label */}
              <div className="absolute inset-0 -inset-x-3 bg-[radial-gradient(ellipse_at_center,_rgba(201,164,92,0.22)_0%,_rgba(239,230,216,0.6)_60%,_transparent_100%)] blur-xs rounded-full pointer-events-none" />

              {/* Antique-Gold Circular Number Seal */}
              <motion.div
                initial={{ scale: shouldReduceMotion ? 1 : 0.7, opacity: shouldReduceMotion ? 1 : 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-[#12241A] to-[#1C3A2B] border border-[#C9A45C] shadow-[0_0_12px_rgba(201,164,92,0.3)] flex items-center justify-center shrink-0"
              >
                <span className="font-serif text-[10px] sm:text-[11px] font-bold text-[#DFBC75] leading-none">
                  04
                </span>
                <span className="absolute -inset-0.5 rounded-full border border-[#C9A45C]/35 pointer-events-none" />
              </motion.div>

              {/* Manuscript Typography & Animated Botanical Stem */}
              <div className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#8A6A32] font-semibold">
                  Chapter 04
                </span>
                <span className="text-[#8A6A32] text-xs font-serif">·</span>
                <span className="font-serif text-[11px] sm:text-xs text-[#2A372E] tracking-wider italic font-medium">
                  Heritage
                </span>

                {/* Connected Botanical Line with Leaf Illustrations */}
                <svg className="w-10 sm:w-18 h-3.5 sm:h-4 text-[#8A6A32] overflow-visible shrink-0 ml-0.5 sm:ml-1" viewBox="0 0 64 16" fill="none" aria-hidden="true">
                  <motion.path
                    d="M 0 8 L 54 8"
                    stroke="#8A6A32"
                    strokeWidth="1.2"
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
                    <path d="M 18 8 C 20 3, 26 4, 23 8 Z" fill="#152B20" stroke="#8A6A32" strokeWidth="0.6" />
                    <path d="M 36 8 C 38 13, 44 12, 41 8 Z" fill="#1C3A2B" stroke="#8A6A32" strokeWidth="0.6" />
                    <circle cx="56" cy="8" r="2" fill="#C68A36" stroke="#FAF7F2" strokeWidth="0.5" />
                  </motion.g>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Editorial Headline: Rooted in Ayurveda */}
          <motion.h2
            id="heritage-heading"
            variants={itemVariants}
            className="font-serif text-xl xs:text-2.5xl sm:text-4xl lg:text-4.5xl text-[#152B20] font-normal tracking-tight leading-[1.12] z-20"
          >
            {heritageContent.heading}
          </motion.h2>

          {/* Editorial Description */}
          <motion.p
            variants={itemVariants}
            className="mt-1 xs:mt-2 sm:mt-4 text-[11px] xs:text-xs sm:text-base text-[#2A372E] leading-relaxed font-sans max-w-[270px] xs:max-w-[320px] sm:max-w-md font-normal z-20"
          >
            {heritageContent.description}
          </motion.p>

          {/* Principles Strip: Pure Botanicals · Traditional Wisdom · Modern Care */}
          <motion.div
            variants={itemVariants}
            className="mt-2 xs:mt-3 sm:mt-6 pt-1.5 xs:pt-2.5 sm:pt-4 border-t border-[#E2D8C7]/80 w-full max-w-[270px] xs:max-w-[320px] sm:max-w-md flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 text-xs font-mono text-[#152B20] z-20"
          >
            {heritageContent.principles.map((principle, index) => (
              <React.Fragment key={principle}>
                {index > 0 && (
                  <span className="text-[#B9673C] font-semibold text-xs hidden xs:inline" aria-hidden="true">
                    ·
                  </span>
                )}
                <span className="bg-[#FAF7F2]/90 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#D5CABB] shadow-2xs font-semibold text-[9px] xs:text-[10px] sm:text-xs tracking-wider uppercase text-[#152B20]">
                  {principle}
                </span>
              </React.Fragment>
            ))}
          </motion.div>

        </motion.div>

        {/* ===================================================================== */}
        {/* MOBILE & TABLET RESPONSIVE CONSTELLATION GRID (< 1024px)              */}
        {/* ===================================================================== */}
        <div className="lg:hidden mt-8 w-full max-w-2xl flex flex-col items-center">
          {/* Vertical Golden Connecting Stem */}
          <div className="w-0.5 h-7 bg-gradient-to-b from-[#C68A36] to-[#B9673C]/60 mb-4" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            {heritageNodes.map((node, index) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="flex items-center gap-3 bg-[#FAF7F2]/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-[#D5CABB] shadow-xs"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#EFE5D3] to-[#FFFFFF] border border-[#C68A36]/40 flex items-center justify-center shrink-0">
                  {node.icon}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-sm font-medium text-[#152B20]">
                      {node.devanagari}
                    </span>
                    <span className="text-[10px] font-mono text-[#8A6A32] uppercase tracking-wider font-semibold">
                      · {node.english}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#6D5948] font-sans">
                    {node.subtext}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
