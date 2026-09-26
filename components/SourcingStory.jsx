"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { sourcingContent } from "@/data/content";
import VisualPlaceholder from "@/components/ui/VisualPlaceholder";

export default function SourcingStory() {
  const [activeRegion, setActiveRegion] = useState(sourcingContent.regions[0].id);

  return (
    <section
      id="sourcing"
      className="relative bg-[#152B20] text-[#FAF7F2] py-20 sm:py-28 overflow-hidden"
      aria-labelledby="sourcing-heading"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1C3A2B] rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C8983E]/10 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2
            id="sourcing-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight text-[#FAF7F2]"
          >
            {sourcingContent.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D0DAD4] leading-relaxed">
            {sourcingContent.subtitle}
          </p>
        </div>

        {/* Biome Region Switcher Tabs */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Region Tabs (Left / Top on mobile) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#A7B8AF] block mb-2">
              Select Native Microclimate
            </span>

            {sourcingContent.regions.map((region) => {
              const isSelected = activeRegion === region.id;
              return (
                <button
                  key={region.id}
                  type="button"
                  onClick={() => setActiveRegion(region.id)}
                  className={`w-full text-left p-5 rounded-xs border transition-all duration-300 focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#C8983E] ${
                    isSelected
                      ? "bg-[#1E3A2B] border-[#C8983E]/60 shadow-md"
                      : "bg-[#152B20]/60 border-[#254233] hover:bg-[#1C3A2B]/70"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono text-[#C8983E] mb-1">
                    <span>Elevation: {region.elevation}</span>
                    <span className="font-serif italic text-[#A7B8AF]">
                      {isSelected ? "Active Region" : "Explore"}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-[#FAF7F2] font-normal mb-2">
                    {region.name}
                  </h3>
                  <p className="text-xs text-[#C8D3CC] leading-relaxed">
                    <strong className="text-[#FAF7F2]">Botanicals:</strong> {region.botanicals}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Region Visual & Environmental Deep Dive (Right / Bottom on mobile) */}
          <div className="lg:col-span-7">
            {sourcingContent.regions.map((region) => {
              if (region.id !== activeRegion) return null;
              return (
                <motion.div
                  key={region.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-xs border border-[#2B4B3A] bg-[#1C3A2B]/90 p-6 sm:p-8 backdrop-blur-xs"
                >
                  <VisualPlaceholder
                    promptKey={region.imagePromptKey}
                    aspectRatio="aspect-[16/9]"
                    alt={region.name}
                    variant="landscape"
                    showPromptTag={true}
                    className="border-[#2B4B3A]"
                  />

                  <div className="mt-6">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[#C8983E] block mb-1">
                      Terroir & Biome Intelligence
                    </span>
                    <p className="text-sm text-[#D0DAD4] leading-relaxed">
                      {region.environment}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* 4-Step Extraction Ritual Chapter */}
        <div className="mt-20 pt-16 border-t border-[#254233]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C8983E]">
              From Crop to Biophotonic Seal
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FAF7F2] font-normal mt-2">
              The 4-Stage Cold Extraction Standard
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sourcingContent.processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-xs border border-[#254233] bg-[#1C3A2B]/40 p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl text-[#C8983E] font-light block mb-4">
                    {step.step}
                  </span>
                  <h4 className="font-serif text-lg text-[#FAF7F2] mb-2 font-normal">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#B2C4BB] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#2B4B3A]/40 flex items-center gap-1.5 text-[10px] font-mono text-[#A7B8AF]">
                  <span className="h-1 w-1 rounded-full bg-[#C8983E]" />
                  <span>Standardized SOP</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
