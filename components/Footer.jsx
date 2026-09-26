"use client";

import React from "react";
import Link from "next/link";

/**
 * Footer — Premium Minimalist Dark Forest-Black Aesthetic
 * 
 * Design Details:
 * - Deep forest-black background (#060B08) with a delicate sacred mandala watermark.
 * - Fine antique-gold gradient divider along the top edge (#C9A45C).
 * - Warm Ivory (#F7F0DE) headings & brand typography.
 * - Soft Cream (#DED3BA) links with an animated expanding gold underline on hover.
 * - Muted Antique-Gold (#C9A45C) accents and navigation eyebrow titles.
 * - Minimal copyright tier with smooth scroll back to top.
 * - Clean mobile-first spacing and comfortable touch targets.
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#060B08] text-[#F7F0DE] overflow-hidden">
      
      {/* Top Fine Antique-Gold Divider Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A45C]/45 to-transparent z-10" />

      {/* Subtle Sacred Mandala Watermark Backdrop */}
      <div className="absolute -right-24 -bottom-24 w-96 h-96 pointer-events-none select-none opacity-[0.04] text-[#C9A45C]">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full">
          <circle cx="100" cy="100" r="90" strokeWidth="1" strokeDasharray="3 4" />
          <circle cx="100" cy="100" r="75" strokeWidth="0.8" />
          <circle cx="100" cy="100" r="50" strokeWidth="0.8" strokeDasharray="2 3" />
          <circle cx="100" cy="100" r="25" strokeWidth="0.6" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <line
              key={deg}
              x1="100"
              y1="10"
              x2="100"
              y2="190"
              strokeWidth="0.5"
              transform={`rotate(${deg} 100 100)`}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-10 relative z-10">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Column 1: Brand Wordmark, Symbol & Essence */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9A45C] rounded-xs group"
              aria-label="Cover Hub - Return to top"
            >
              <img
                src="/images/branding/coverhub-symbol.svg"
                alt="Cover Hub symbol"
                className="w-8 h-8 object-contain shrink-0 group-hover:scale-105 transition-transform"
                width={32}
                height={32}
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl tracking-[0.06em] text-[#F7F0DE] leading-none group-hover:text-[#DFBC75] transition-colors">
                  COVER HUB
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#C9A45C] mt-1 font-semibold">
                  AYURVEDIC WELLNESS
                </span>
              </div>
            </Link>
            
            <p className="text-xs sm:text-sm text-[#DED3BA] leading-relaxed max-w-sm font-normal">
              Rooted in classical botanical wisdom. Formulated with reverence, purity, and uncompromising care for daily living.
            </p>
          </div>

          {/* Column 2 & 3: Clean Navigation Groups */}
          <div className="md:col-span-6 lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-8 sm:gap-12 md:pl-8 lg:pl-16">
            
            {/* Group 1: Explore */}
            <div className="space-y-3">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C9A45C] font-semibold">
                Explore
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <a
                    href="#collections"
                    className="text-[#DED3BA] hover:text-[#C9A45C] transition-colors relative inline-block py-0.5 group focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#C9A45C]"
                  >
                    <span>Products</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C9A45C] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li>
                  <a
                    href="#philosophy"
                    className="text-[#DED3BA] hover:text-[#C9A45C] transition-colors relative inline-block py-0.5 group focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#C9A45C]"
                  >
                    <span>Our Philosophy</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C9A45C] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li>
                  <a
                    href="#heritage"
                    className="text-[#DED3BA] hover:text-[#C9A45C] transition-colors relative inline-block py-0.5 group focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#C9A45C]"
                  >
                    <span>Heritage</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C9A45C] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li>
                  <a
                    href="#approach"
                    className="text-[#DED3BA] hover:text-[#C9A45C] transition-colors relative inline-block py-0.5 group focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#C9A45C]"
                  >
                    <span>Our Approach</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C9A45C] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Group 2: Connect & Alliances */}
            <div className="space-y-3">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C9A45C] font-semibold">
                Partnership
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <a
                    href="#partnerships"
                    className="text-[#DED3BA] hover:text-[#C9A45C] transition-colors relative inline-block py-0.5 group focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#C9A45C]"
                  >
                    <span>Partner Enquiries</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C9A45C] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li>
                  <a
                    href="#partnerships"
                    className="text-[#DED3BA] hover:text-[#C9A45C] transition-colors relative inline-block py-0.5 group focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#C9A45C]"
                  >
                    <span>Retail & Distribution</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C9A45C] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Tier: Minimal Divider, Copyright & Back to Top */}
        <div className="mt-12 pt-6 border-t border-[#182C21]/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="font-mono text-[11px] text-[#AFA58F] tracking-wide">
            © {new Date().getFullYear()} Cover Hub. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#C9A45C] hover:text-[#F7F0DE] transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#C9A45C] group cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <svg
              className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
}
