"use client";

import React, { useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { products, collectionHeader } from "@/data/products";
import ProductModal from "@/components/ProductModal";

/**
 * Chapter 03: The Collection — Deep Forest Emerald Apothecary Showcase
 * 
 * Aesthetic Architecture:
 * - Rich Royal Forest Emerald (#0D1E15 / #13261C) backdrop that shatters the beige monotony
 *   and provides stunning, high-contrast visual rhythm between Section 2 (Philosophy) and Section 4 (Heritage).
 * - Luminous antique gold (#C68A36) and warm saffron botanical accents.
 * - Glowing celestial sun-circles with golden orbital line art that make the product bottles pop with 3D depth.
 * - Crisp warm-ivory editorial typography (#FAF7F2) and refined sage copy (#C2D0C7).
 * - High-contrast metallic gold CTA buttons.
 * - Accessible interactive product modal.
 */
export default function ProductDiscovery() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Gentle scroll entrance variants
  const rowVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="collections"
      ref={sectionRef}
      className="relative bg-[#0D1E15] py-20 sm:py-28 lg:py-36 border-y border-[#1E3B2B] overflow-hidden scroll-mt-20 sm:scroll-mt-24 text-[#FAF7F2]"
      aria-labelledby="collections-heading"
    >
      {/* ========================================================================= */}
      {/* DEEP FOREST EMERALD AMBIENT LIGHTING & GOLDEN BOTANICAL TAPESTRY          */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {/* Soft Radial Ambient Lighting */}
        <div className="absolute top-0 right-1/4 w-[650px] h-[650px] rounded-full bg-[#183827]/70 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] rounded-full bg-[#C68A36]/10 blur-3xl pointer-events-none" />
        
        {/* Subtle Golden Botanical Constellation Vine Overlay */}
        <svg
          className="absolute inset-0 w-full h-full text-[#C68A36]/15 pointer-events-none"
          viewBox="0 0 1200 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M -50 200 C 200 100, 300 400, 600 250 C 900 100, 1000 500, 1250 350"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />
          <path
            d="M -50 700 C 300 550, 450 850, 800 650 C 1050 500, 1100 800, 1250 700"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />
        </svg>

        {/* Soft Edge Blends */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0B1811] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B1811] to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Editorial Header with Ayurvedic Manuscript Marker */}
        <div className="max-w-3xl mb-14 sm:mb-18 lg:mb-22">
          {/* Chapter 03 Ayurvedic Manuscript Marker */}
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 sm:mb-5"
          >
            <div className="relative inline-flex items-center gap-2.5 py-1 pr-4 pl-0.5 select-none">
              {/* Faint parchment brush texture behind label */}
              <div className="absolute inset-0 -inset-x-3 bg-[radial-gradient(ellipse_at_left,_rgba(201,164,92,0.22)_0%,_rgba(18,36,26,0.3)_60%,_transparent_100%)] blur-xs rounded-full pointer-events-none" />

              {/* Antique-Gold Circular Number Seal */}
              <motion.div
                initial={{ scale: shouldReduceMotion ? 1 : 0.7, opacity: shouldReduceMotion ? 1 : 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative z-10 w-7 h-7 rounded-full bg-gradient-to-tr from-[#12241A] to-[#1C3A2B] border border-[#C9A45C] shadow-[0_0_12px_rgba(201,164,92,0.3)] flex items-center justify-center shrink-0"
              >
                <span className="font-serif text-[11px] font-bold text-[#DFBC75] leading-none">
                  03
                </span>
                <span className="absolute -inset-0.5 rounded-full border border-[#C9A45C]/35 pointer-events-none" />
              </motion.div>

              {/* Manuscript Typography & Animated Botanical Stem */}
              <div className="relative z-10 flex items-center gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C9A45C] font-semibold">
                  Chapter 03
                </span>
                <span className="text-[#DFBC75] text-xs font-serif">·</span>
                <span className="font-serif text-xs text-[#DED3BA] tracking-wider italic">
                  The Collection
                </span>

                {/* Connected Botanical Line with Leaf Illustrations */}
                <svg className="w-14 sm:w-18 h-4 text-[#C9A45C] overflow-visible shrink-0 ml-1" viewBox="0 0 64 16" fill="none" aria-hidden="true">
                  <motion.path
                    d="M 0 8 L 54 8"
                    stroke="#C9A45C"
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
                    <path d="M 18 8 C 20 3, 26 4, 23 8 Z" fill="#152B20" stroke="#C9A45C" strokeWidth="0.6" />
                    <path d="M 36 8 C 38 13, 44 12, 41 8 Z" fill="#1C3A2B" stroke="#C9A45C" strokeWidth="0.6" />
                    <circle cx="56" cy="8" r="2" fill="#DFBC75" stroke="#152B20" strokeWidth="0.5" />
                  </motion.g>
                </svg>
              </div>
            </div>
          </motion.div>

          <h2
            id="collections-heading"
            className="font-serif text-3.5xl sm:text-4.5xl lg:text-5xl text-[#F7F0DE] font-normal tracking-tight leading-[1.14]"
          >
            {collectionHeader.heading}
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-[#DED3BA] leading-relaxed font-sans max-w-2xl font-normal">
            {collectionHeader.supportingLine}
          </p>
        </div>

        {/* Large Alternating Product Showcase Rows */}
        <div className="space-y-16 sm:space-y-22 lg:space-y-28">
          {products.map((product, index) => {
            const isEven = index % 2 === 0;

            return (
              <React.Fragment key={product.id}>
                {/* Subtle Botanical Divider between showcase rows */}
                {index > 0 && (
                  <div className="flex items-center justify-center py-2" aria-hidden="true">
                    <div className="h-px bg-gradient-to-r from-transparent via-[#C68A36]/40 to-transparent flex-1 max-w-xs" />
                    <div className="mx-4 text-[#C68A36]">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18M12 3c-4.5 4.5-4.5 9 0 13.5M12 3c4.5 4.5 4.5 9 0 13.5" />
                      </svg>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-[#C68A36]/40 to-transparent flex-1 max-w-xs" />
                  </div>
                )}

                {/* Individual Product Showcase Row */}
                <motion.article
                  variants={rowVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center"
                >
                  
                  {/* ========================================================= */}
                  {/* VISUAL COLUMN (Luminous Sun-Circle & Product Cutout)       */}
                  {/* ========================================================= */}
                  <div
                    className={`lg:col-span-5 xl:col-span-5 flex items-center justify-center ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    } order-1`}
                  >
                    <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] flex items-center justify-center py-4 sm:py-6">
                      
                      {/* Luminous Warm Golden Sun-Circle Backdrop */}
                      <div className="w-60 h-60 sm:w-72 sm:h-72 lg:w-84 lg:h-84 rounded-full bg-gradient-to-tr from-[#12261B] via-[#1B3627] to-[#254834] border border-[#C68A36]/45 shadow-[0_0_50px_rgba(198,138,54,0.2),0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center relative">
                        
                        {/* Decorative Botanical SVG Line Art Orbit */}
                        <svg
                          className="absolute inset-[-12px] sm:inset-[-16px] w-[calc(100%+24px)] sm:w-[calc(100%+32px)] h-[calc(100%+24px)] sm:h-[calc(100%+32px)] text-[#C68A36]/40 pointer-events-none"
                          viewBox="0 0 100 100"
                          fill="none"
                          stroke="currentColor"
                        >
                          <circle cx="50" cy="50" r="48" strokeWidth="0.8" strokeDasharray="2 3" />
                          <circle cx="50" cy="50" r="44" strokeWidth="0.5" />
                          <path d="M50 2 L50 6 M50 94 L50 98 M2 50 L6 50 M94 50 L98 50" strokeWidth="1" />
                        </svg>

                        {/* Soft Ambient Core Glow */}
                        <div className="w-3/4 h-3/4 rounded-full bg-[#C68A36]/15 blur-xl pointer-events-none" />
                      </div>

                      {/* Product Cutout Bottle with Ground Shadow */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center group pointer-events-none z-10">
                        <img
                          src={product.image}
                          alt={product.alt}
                          className={`${product.imageScaleClass} w-auto object-contain drop-shadow-[0_22px_35px_rgba(0,0,0,0.55)] select-none transition-transform duration-500 ease-out group-hover:scale-[1.03]`}
                          loading="lazy"
                        />
                        {/* Ground Contact Shadow */}
                        <div className="w-[50%] h-3 bg-[#000000]/60 blur-[6px] rounded-full -mt-2 -z-10" />
                      </div>

                    </div>
                  </div>

                  {/* ========================================================= */}
                  {/* CONTENT COLUMN (Details, Benefits, Ingredients, CTA)      */}
                  {/* ========================================================= */}
                  <div
                    className={`lg:col-span-7 xl:col-span-7 flex flex-col justify-center ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    } order-2`}
                  >
                    
                    {/* Eyebrow & Category */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C68A36]/40 bg-[#162D20] px-2.5 py-0.5 font-mono text-[11px] text-[#D49B4B] font-medium shadow-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C68A36]" />
                        {product.brand}
                      </span>
                      <span className="text-xs text-[#9EB0A5] font-sans">
                        • {product.category}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="font-serif text-2.5xl sm:text-3.5xl lg:text-4xl text-[#FAF7F2] leading-[1.15] font-normal tracking-tight">
                      {product.name}
                    </h3>

                    {/* Poetic Subtitle */}
                    {product.tagline && (
                      <p className="font-serif italic text-sm sm:text-base text-[#D49B4B] mt-1">
                        {product.tagline}
                      </p>
                    )}

                    {/* Clean Description with Optimal Line Height */}
                    <p className="mt-3 text-sm sm:text-base text-[#C2D0C7] leading-relaxed font-sans max-w-xl">
                      {product.description}
                    </p>

                    {/* Key Benefits List */}
                    {product.benefits && product.benefits.length > 0 && (
                      <div className="mt-4 sm:mt-5">
                        <span className="text-xs font-mono text-[#D49B4B] font-medium block mb-2 tracking-wide uppercase">
                          Key Benefits
                        </span>
                        <ul className="space-y-1.5">
                          {product.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E2EBE5] font-sans leading-normal">
                              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C68A36]/20 text-[#D49B4B] mt-0.5">
                                <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Key Botanical Actives Strip */}
                    {product.keyIngredients && product.keyIngredients.length > 0 && (
                      <div className="mt-4 sm:mt-5 pt-3.5 border-t border-[#1F3D2E]">
                        <span className="text-xs font-mono text-[#D49B4B] font-medium block mb-2 tracking-wide uppercase">
                          Key Botanical Actives
                        </span>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {product.keyIngredients.map((ingredient, i) => (
                            <span
                              key={i}
                              className="rounded-full bg-[#162D20] border border-[#2B4E3A] px-2.5 py-0.5 text-[11px] sm:text-xs font-mono text-[#FAF7F2] shadow-2xs"
                            >
                              {ingredient}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Pricing & Single Primary Action CTA */}
                    <div className="mt-6 sm:mt-7 pt-4 border-t border-[#1F3D2E] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                      
                      {/* Price & Format */}
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-serif text-2xl sm:text-2.5xl text-[#FAF7F2] font-normal">
                          {product.price}
                        </span>
                        <span className="text-xs text-[#9EB0A5] font-sans">
                          / {product.packSize}
                        </span>
                      </div>

                      {/* Single Primary Action Button in Metallic Warm Gold */}
                      <button
                        type="button"
                        onClick={() => setSelectedProduct(product)}
                        className="w-full sm:w-auto inline-flex items-center justify-center rounded-xs bg-[#C68A36] px-6 py-3 text-center font-mono text-xs uppercase tracking-wider text-[#0D1E15] font-bold transition-all duration-200 hover:bg-[#D49B4B] hover:shadow-[0_8px_24px_rgba(198,138,54,0.35)] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C68A36]"
                        aria-label={`View details for ${product.name}`}
                      >
                        <span>View Product Details</span>
                        <svg
                          className="ml-2 h-3.5 w-3.5"
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
                      </button>

                    </div>

                  </div>

                </motion.article>
              </React.Fragment>
            );
          })}
        </div>

        {/* Section Footnote */}
        <div className="mt-18 sm:mt-22 pt-7 border-t border-[#1F3D2E] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8C9F94]">
          <span>Cover Hub Ayurvedic Formulations • Pure Botanical Sourcing</span>
          <a
            href="#partnerships"
            className="text-[#D49B4B] hover:text-[#FAF7F2] transition-colors font-medium"
          >
            Partner & Wholesale Inquiries →
          </a>
        </div>

      </div>

      {/* Accessible Interactive Product Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
