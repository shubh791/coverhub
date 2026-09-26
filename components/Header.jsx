"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { navLinks, brandInfo } from "@/data/content";

/**
 * Header / Navbar — Premium Ayurvedic Transparent to Dark Translucent Transition
 * 
 * Aesthetic & Functional Features:
 * - Transparent over hero with a subtle top dark-gradient scrim for maximum text contrast.
 * - Transitions smoothly on scroll into deep forest-black translucent background (#060D08/90) with backdrop blur and antique-gold bottom border.
 * - Prominent, balanced brand identity with Cover Hub symbol and warm ivory wordmark.
 * - Warm Ivory (#F7F0DE) navigation links with light text shadow, silky gold hover states and animated underlines.
 * - Real-time viewport-center active section tracking; immediate active state update on link click.
 * - Clear active state when on the Hero (no false "Heritage" highlight).
 * - Compact, premium gold action button (#C9A45C -> #DFBC75) with clear border and dark text.
 * - Full-width dark mobile menu drawer with comfortable spacing.
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const isManualClickRef = useRef(false);
  const manualClickTimeoutRef = useRef(null);
  const menuRef = useRef(null);
  const menuToggleRef = useRef(null);
  const closeButtonRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Active section tracking & scroll state
  useEffect(() => {
    const updateNavigationState = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Skip scroll-based recalculation during smooth scroll initiated by a user click
      if (isManualClickRef.current) return;

      // When near top of page (Hero section), clear active nav link
      if (scrollY < 260) {
        setActiveSection("");
        return;
      }

      const viewportCenter = scrollY + window.innerHeight * 0.45;
      const sectionIds = navLinks.map((link) => link.href.replace("#", "")).filter(Boolean);

      let closestId = "";
      let minDistance = Infinity;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const top = rect.top + scrollY;
        const bottom = top + rect.height;

        // If viewport center is directly within this section boundaries
        if (viewportCenter >= top && viewportCenter <= bottom) {
          closestId = id;
          break;
        }

        const sectionCenter = top + rect.height / 2;
        const dist = Math.abs(sectionCenter - viewportCenter);
        if (dist < minDistance) {
          minDistance = dist;
          closestId = id;
        }
      }

      if (closestId) {
        setActiveSection(closestId);
      }
    };

    updateNavigationState();
    window.addEventListener("scroll", updateNavigationState, { passive: true });
    window.addEventListener("resize", updateNavigationState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateNavigationState);
      window.removeEventListener("resize", updateNavigationState);
      if (manualClickTimeoutRef.current) {
        clearTimeout(manualClickTimeoutRef.current);
      }
    };
  }, []);

  const handleNavClick = (href) => {
    const linkId = href.replace("#", "");
    setActiveSection(linkId);
    isManualClickRef.current = true;
    if (manualClickTimeoutRef.current) {
      clearTimeout(manualClickTimeoutRef.current);
    }
    manualClickTimeoutRef.current = setTimeout(() => {
      isManualClickRef.current = false;
    }, 900);
  };

  // Handle keyboard navigation (Escape to close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuToggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = (href) => {
    if (href) {
      handleNavClick(href);
    }
    setIsOpen(false);
    menuToggleRef.current?.focus();
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#060D08]/90 backdrop-blur-md border-b border-[#C9A45C]/25 py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          : "bg-gradient-to-b from-[#060D08]/90 via-[#060D08]/50 to-transparent border-b-0 border-none py-5 sm:py-6 shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Wordmark & Identity */}
          <Link
            href="/"
            onClick={() => {
              setActiveSection("");
            }}
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9A45C] rounded-xs"
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
              <span className="font-serif text-lg sm:text-xl font-normal tracking-[0.08em] text-[#F7F0DE] leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] transition-colors group-hover:text-[#DFBC75]">
                COVER HUB
              </span>
              <span className="font-mono text-[8.5px] sm:text-[9px] uppercase tracking-[0.22em] text-[#C9A45C] mt-1 font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
                AYURVEDIC WELLNESS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-7 lg:gap-9"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const linkId = link.href.replace("#", "");
              const isActive = activeSection === linkId;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 group focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#C9A45C] ${
                    isActive
                      ? "text-[#DFBC75] drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]"
                      : "text-[#F7F0DE] hover:text-[#DFBC75] drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]"
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Smooth animated underline on hover & active */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#C9A45C] shadow-[0_0_8px_rgba(201,164,92,0.6)] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Compact CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#partnerships"
              onClick={() => handleNavClick("#partnerships")}
              className="inline-flex items-center justify-center rounded-xs bg-gradient-to-r from-[#C9A45C] via-[#D8B66A] to-[#DFBC75] px-4 py-2 font-mono text-xs uppercase tracking-wider text-[#080E0A] font-bold border border-[#E8CA83] shadow-[0_2px_12px_rgba(0,0,0,0.5)] transition-all duration-200 hover:from-[#DFBC75] hover:to-[#EED494] hover:shadow-[0_4px_20px_rgba(201,164,92,0.45)] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9A45C]"
            >
              Partner Enquiries
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              ref={menuToggleRef}
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-[#F7F0DE] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9A45C] rounded-xs"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close menu" : "Open navigation menu"}
            >
              <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
              <div className="w-6 h-5 flex flex-col justify-between items-end">
                <span
                  className={`h-0.5 bg-[#F7F0DE] transition-all duration-300 ${
                    isOpen ? "w-6 translate-y-2 rotate-45 bg-[#C9A45C]" : "w-6"
                  }`}
                />
                <span
                  className={`h-0.5 bg-[#F7F0DE] transition-all duration-200 ${
                    isOpen ? "opacity-0 w-6" : "w-4"
                  }`}
                />
                <span
                  className={`h-0.5 bg-[#F7F0DE] transition-all duration-300 ${
                    isOpen ? "w-6 -translate-y-2.5 -rotate-45 bg-[#C9A45C]" : "w-5"
                  }`}
                />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Full-Width Dark Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-navigation"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[56px] sm:top-[64px] z-50 flex flex-col justify-between bg-[#060D08]/98 backdrop-blur-xl px-6 py-8 md:hidden h-[calc(100dvh-56px)] sm:h-[calc(100dvh-64px)] overflow-y-auto border-t border-[#C9A45C]/25 shadow-2xl"
          >
            <div className="flex flex-col space-y-6">
              <div className="flex items-center justify-between border-b border-[#1C3627]/90 pb-3">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#C9A45C] font-semibold">
                  Navigation Index
                </p>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => closeMenu()}
                  className="p-1 text-[#DED3BA] hover:text-[#C9A45C] rounded-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9A45C]"
                  aria-label="Close menu drawer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation Links">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => closeMenu(link.href)}
                    className="flex items-baseline justify-between border-b border-[#1C3627]/50 pb-3 font-serif text-2xl text-[#F7F0DE] transition-colors hover:text-[#DFBC75] focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#C9A45C]"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-[#C9A45C]">0{idx + 1}</span>
                  </a>
                ))}
              </nav>

              <div className="pt-3">
                <a
                  href="#partnerships"
                  onClick={() => closeMenu("#partnerships")}
                  className="flex w-full items-center justify-center rounded-xs bg-gradient-to-r from-[#C9A45C] via-[#D8B66A] to-[#DFBC75] py-3.5 text-center font-mono text-xs uppercase tracking-widest text-[#080E0A] font-bold border border-[#E8CA83] shadow-[0_2px_12px_rgba(0,0,0,0.5)] transition-all hover:from-[#DFBC75] hover:to-[#EED494]"
                >
                  Partner Enquiries
                </a>
              </div>
            </div>

            {/* Mobile Drawer Bottom Identity */}
            <div className="mt-8 border-t border-[#1C3627] pt-5">
              <div className="flex items-center gap-2.5 mb-1.5">
                <img
                  src="/images/branding/coverhub-symbol.svg"
                  alt="Cover Hub"
                  className="w-5 h-5 object-contain shrink-0"
                  width={20}
                  height={20}
                />
                <p className="font-serif text-base text-[#F7F0DE]">
                  {brandInfo.name}
                </p>
              </div>
              <p className="text-xs text-[#DED3BA] leading-relaxed">
                Ayurvedic Wellness Products
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
