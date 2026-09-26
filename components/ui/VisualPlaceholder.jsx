"use client";

import React from "react";
import { assetPrompts } from "@/data/assetPrompts";

/**
 * VisualPlaceholder
 * Renders an artistic, luxury editorial placeholder frame that matches
 * the warm ivory & deep botanical aesthetic of Ayurvedic Era.
 * Prevents broken images or external hotlinking while awaiting photographic generation.
 */
export default function VisualPlaceholder({
  promptKey = "hero",
  aspectRatio = "aspect-[16/10]",
  className = "",
  alt = "Ayurvedic Era Botanical Visual",
  showPromptTag = false,
  variant = "botanical" // 'botanical' | 'apothecary' | 'landscape' | 'minimal'
}) {
  const promptData = assetPrompts[promptKey] || {
    name: alt,
    usage: "Botanical artwork placeholder",
    prompt: "Luxury Ayurvedic editorial visual"
  };

  return (
    <div
      className={`relative w-full ${aspectRatio} overflow-hidden rounded-sm border border-[#E3DAC9] bg-gradient-to-br from-[#F5EFEB] via-[#EFE7DC] to-[#E6DCce] ${className}`}
      role="img"
      aria-label={alt}
    >
      {/* Background grain and ambient organic glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,103,60,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(21,43,32,0.14),transparent_65%)]" />

      {/* Subtle fine grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#152B20 1px, transparent 1px)`,
          backgroundSize: "20px 20px"
        }}
      />

      {/* Stylized Architectural & Botanical Art Element */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        {/* Subtle Decorative Arch / Geometric Frame */}
        <div className="relative mb-3 flex h-20 w-20 items-center justify-center rounded-full border border-[#152B20]/15 bg-[#FAF7F2]/60 shadow-xs backdrop-blur-xs">
          {variant === "landscape" ? (
            <svg
              className="h-9 w-9 text-[#1C3A2B]/75"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M3 20l6-9 4 5 3-4 5 8H3z"
              />
              <circle cx="18" cy="7" r="2.5" strokeWidth={1.2} />
            </svg>
          ) : variant === "apothecary" ? (
            <svg
              className="h-9 w-9 text-[#B9673C]/80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          ) : (
            <svg
              className="h-10 w-10 text-[#1C3A2B]/75"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {/* Sacred Botanical Lotus & Leaf Monogram */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M12 21V9m0 0C10.5 6 7 5 4 5c0 6 3.5 11 8 16m0-16c1.5-3 5-4 8-4 0 6-3.5 11-8 16"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 9c-2-2-4.5-3-7-3 1 3.5 3 6.5 7 8m0-8c2-2 4.5-3 7-3-1 3.5-3 6.5-7 8"
              />
            </svg>
          )}
        </div>

        {/* Visual Title / Asset Description */}
        <p className="font-serif text-base tracking-wide text-[#152B20]/90 italic md:text-lg">
          {promptData.name}
        </p>
        <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[#6E7B73]">
          Curated Botanical Visual Frame
        </span>
      </div>

      {/* Corner Fine Accents */}
      <div className="absolute top-3 left-3 h-2.5 w-2.5 border-t border-l border-[#152B20]/25" />
      <div className="absolute top-3 right-3 h-2.5 w-2.5 border-t border-r border-[#152B20]/25" />
      <div className="absolute bottom-3 left-3 h-2.5 w-2.5 border-b border-l border-[#152B20]/25" />
      <div className="absolute bottom-3 right-3 h-2.5 w-2.5 border-b border-r border-[#152B20]/25" />

      {/* Optional Prompt Reference Badge */}
      {showPromptTag && (
        <div className="absolute bottom-3 inset-x-4 flex items-center justify-between rounded-xs bg-[#FAF7F2]/80 px-2.5 py-1 text-[10px] font-mono text-[#5E6D64] backdrop-blur-xs">
          <span className="truncate">Key: {promptKey}</span>
          <span className="text-[#B9673C] uppercase tracking-wider font-semibold">Asset Pending</span>
        </div>
      )}
    </div>
  );
}
