"use client";

import React, { useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { partnershipContent } from "@/data/content";

/**
 * Chapter 06: Partnership — High-Contrast Dark Ayurvedic Aesthetic
 * 
 * Palette & Typography Specifications:
 * - Headings: Warm Ivory (#F7F0DE)
 * - Body text: Soft Cream (#DED3BA)
 * - Labels & Accents: Antique Gold (#C9A45C)
 * - Input text: Pure Luminous Cream (#FFF8E8)
 * - Placeholder text: Warm Grey-Gold (#AFA58F)
 * - Translucent dark forest-green form surface (#09150E/85) with antique gold borders
 */
export default function DistributorEnquiry() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    business: "",
    contact: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.business.trim() || !formData.contact.trim()) {
      setStatus("error");
      setFeedbackMsg("Please provide your name, business/city, and email or phone.");
      return;
    }

    setStatus("loading");
    setFeedbackMsg("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFeedbackMsg(data.message || "Thank you. Your enquiry details have been recorded.");
      } else {
        setStatus("error");
        setFeedbackMsg(data.error || "Unable to send enquiry. Please check your information.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setFeedbackMsg("Network error. Please try again or reach out directly.");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      business: "",
      contact: "",
      message: "",
    });
    setStatus("idle");
    setFeedbackMsg("");
  };

  // Entrance motion variants
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
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="partnerships"
      ref={sectionRef}
      className="relative w-full max-w-full bg-[#080E0A] py-18 sm:py-22 md:py-28 overflow-hidden text-[#F7F0DE] scroll-mt-20 sm:scroll-mt-24 border-t border-[#1C3627]/90"
      aria-labelledby="partnership-heading"
    >
      {/* ========================================================================= */}
      {/* FULL-BLEED DARK BOTANICAL MANDALA BACKGROUND                              */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <img
          src="/images/approach-dark-bg.png"
          alt="Ayurvedic dark botanical heritage backdrop"
          className="w-full h-full object-cover object-left lg:object-center select-none"
          loading="lazy"
        />

        {/* Ambient Warm Golden Sun Flare Accent */}
        <div className="absolute top-1/4 left-0 w-[550px] h-[550px] rounded-full bg-[#C9A45C]/18 blur-3xl pointer-events-none" />

        {/* Subtle Dark Left Scrim for Contrast without creating a box */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080E0A]/85 via-[#080E0A]/50 to-transparent lg:w-[58%] pointer-events-none" />

        {/* Seamless Edge Blends */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#080E0A] via-[#080E0A]/85 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080E0A] via-[#080E0A]/85 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Asymmetric Two-Column Composition */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          
          {/* Left Column: Heading, Context, Sanskrit Typographic Accent, Target Note */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center max-w-xl lg:max-w-none min-w-0">
            {/* Chapter 06 Ayurvedic Manuscript Marker */}
            <motion.div variants={itemVariants} className="mb-4 sm:mb-5">
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
                    06
                  </span>
                  <span className="absolute -inset-0.5 rounded-full border border-[#C9A45C]/35 pointer-events-none" />
                </motion.div>

                {/* Manuscript Typography & Animated Botanical Stem */}
                <div className="relative z-10 flex items-center gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C9A45C] font-semibold">
                    Chapter 06
                  </span>
                  <span className="text-[#DFBC75] text-xs font-serif">·</span>
                  <span className="font-serif text-xs text-[#DED3BA] tracking-wider italic">
                    Partnership
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

            {/* Editorial Heading in Warm Ivory #FFF8E8 */}
            <motion.h2
              id="partnership-heading"
              variants={itemVariants}
              className="font-serif text-3.5xl sm:text-4.5xl lg:text-5xl text-[#FFF8E8] font-medium leading-[1.14] tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
            >
              {partnershipContent.heading}
            </motion.h2>

            {/* Short Copy in Soft Cream #E8DDC6 with improved line-height */}
            <motion.p
              variants={itemVariants}
              className="mt-4 sm:mt-5 text-base sm:text-lg text-[#E8DDC6] leading-[1.7] sm:leading-[1.75] font-sans font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]"
            >
              {partnershipContent.copy}
            </motion.p>

            {/* Sanskrit Cultural Typographic Accent */}
            {partnershipContent.sanskritAccent && (
              <motion.div
                variants={itemVariants}
                className="mt-6 pt-5 border-t border-[#1C3627] space-y-2"
              >
                <p className="font-serif text-2xl sm:text-3xl lg:text-[28px] text-[#D8B66A] tracking-wide leading-snug font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  “{partnershipContent.sanskritAccent.verse}”
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
                  <span className="font-sans italic text-[#F5EBD6] text-sm sm:text-base font-normal">
                    {partnershipContent.sanskritAccent.translation}
                  </span>
                  <span className="hidden sm:inline text-[#C9A45C]">•</span>
                  <span className="font-mono text-xs sm:text-[12.5px] uppercase tracking-wider text-[#C7A35D] font-semibold">
                    {partnershipContent.sanskritAccent.source}
                  </span>
                </div>
              </motion.div>
            )}

            {/* Target Audience Line with Antique Gold Icon */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex items-center gap-2.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-[#F2E7D0] font-medium"
            >
              <span className="h-2 w-2 rounded-full bg-[#C9A45C] shrink-0" />
              <span>{partnershipContent.targetAudience}</span>
            </motion.div>

          </div>

          {/* Right Column: Dark Forest-Green Translucent Enquiry Panel */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 xl:col-span-6 min-w-0"
          >
            <div className="rounded-2xl border border-[#C9A45C]/35 bg-[#09150E]/85 backdrop-blur-xl text-[#F7F0DE] p-6 sm:p-7 md:p-8 shadow-[0_0_40px_rgba(201,164,92,0.14),0_20px_50px_rgba(0,0,0,0.7)] ring-1 ring-white/5">
              
              {/* Panel Header */}
              <div className="border-b border-[#1C3627] pb-3.5 mb-5">
                <h3 className="font-serif text-2xl sm:text-[26px] text-[#F7F0DE] font-normal leading-snug">
                  {partnershipContent.panelHeading}
                </h3>
              </div>

              {/* Status Notifications */}
              {status === "success" ? (
                <div className="py-6 text-center space-y-3.5">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-[#C9A45C] to-[#DFBC75] text-[#080E0A] font-bold text-sm shadow-[0_0_20px_rgba(201,164,92,0.4)]">
                    ✓
                  </div>
                  <h4 className="font-serif text-2xl text-[#F7F0DE]">
                    Enquiry Received
                  </h4>
                  <p className="text-xs sm:text-sm text-[#DED3BA] leading-relaxed max-w-sm mx-auto">
                    {feedbackMsg}
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-2 inline-flex items-center justify-center rounded-lg border border-[#C9A45C]/70 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-[#C9A45C] hover:bg-[#C9A45C] hover:text-[#080E0A] transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9A45C]"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && feedbackMsg && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-lg bg-[#3A1412]/95 border border-[#A83226] text-[#FFA89E] text-xs font-sans leading-relaxed"
                    >
                      {feedbackMsg}
                    </div>
                  )}

                  {/* 1. Name */}
                  <div>
                    <label
                      htmlFor="enquiry-name"
                      className="block font-mono text-[11px] uppercase tracking-wider text-[#C9A45C] font-semibold mb-1.5"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="enquiry-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-lg border border-[#C9A45C]/30 bg-[#06100A]/80 px-4 py-3 text-sm text-[#FFF8E8] placeholder-[#AFA58F] transition-all duration-200 focus:border-[#C9A45C] focus:ring-2 focus:ring-[#C9A45C]/30 focus:bg-[#07130D]/95 focus:shadow-[0_0_15px_rgba(201,164,92,0.25)] focus:outline-hidden"
                    />
                  </div>

                  {/* 2. Business / City */}
                  <div>
                    <label
                      htmlFor="enquiry-business"
                      className="block font-mono text-[11px] uppercase tracking-wider text-[#C9A45C] font-semibold mb-1.5"
                    >
                      Business / City *
                    </label>
                    <input
                      type="text"
                      id="enquiry-business"
                      name="business"
                      required
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="Store, clinic, or distribution region"
                      className="w-full rounded-lg border border-[#C9A45C]/30 bg-[#06100A]/80 px-4 py-3 text-sm text-[#FFF8E8] placeholder-[#AFA58F] transition-all duration-200 focus:border-[#C9A45C] focus:ring-2 focus:ring-[#C9A45C]/30 focus:bg-[#07130D]/95 focus:shadow-[0_0_15px_rgba(201,164,92,0.25)] focus:outline-hidden"
                    />
                  </div>

                  {/* 3. Email or Phone */}
                  <div>
                    <label
                      htmlFor="enquiry-contact"
                      className="block font-mono text-[11px] uppercase tracking-wider text-[#C9A45C] font-semibold mb-1.5"
                    >
                      Email or Phone *
                    </label>
                    <input
                      type="text"
                      id="enquiry-contact"
                      name="contact"
                      required
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="contact@business.com or +91 ..."
                      className="w-full rounded-lg border border-[#C9A45C]/30 bg-[#06100A]/80 px-4 py-3 text-sm text-[#FFF8E8] placeholder-[#AFA58F] transition-all duration-200 focus:border-[#C9A45C] focus:ring-2 focus:ring-[#C9A45C]/30 focus:bg-[#07130D]/95 focus:shadow-[0_0_15px_rgba(201,164,92,0.25)] focus:outline-hidden"
                    />
                  </div>

                  {/* 4. Optional Short Message */}
                  <div>
                    <label
                      htmlFor="enquiry-message"
                      className="block font-mono text-[11px] uppercase tracking-wider text-[#C9A45C] font-semibold mb-1.5"
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      id="enquiry-message"
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Brief note on your distribution interests..."
                      className="w-full rounded-lg border border-[#C9A45C]/30 bg-[#06100A]/80 px-4 py-3 text-sm text-[#FFF8E8] placeholder-[#AFA58F] transition-all duration-200 focus:border-[#C9A45C] focus:ring-2 focus:ring-[#C9A45C]/30 focus:bg-[#07130D]/95 focus:shadow-[0_0_15px_rgba(201,164,92,0.25)] focus:outline-hidden resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#C9A45C] to-[#DFBC75] py-3.5 px-6 font-mono text-xs uppercase tracking-widest text-[#080E0A] font-bold transition-all duration-200 hover:from-[#DFBC75] hover:to-[#EED494] hover:shadow-[0_4px_24px_rgba(201,164,92,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:bg-[#C9A45C] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9A45C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080E0A] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? "Recording enquiry..." : "Send enquiry"}
                    </button>
                  </div>

                  {/* Fully Readable Note */}
                  <p className="text-xs font-mono text-[#DED3BA] text-center pt-1.5">
                    {partnershipContent.note}
                  </p>
                </form>
              )}

            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
