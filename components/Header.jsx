"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { navLinks } from "@/data/content";

/**
 * Header / Navbar — Premium Ayurvedic Transparent to Dark Translucent Transition
 * 
 * Aesthetic & Functional Features:
 * - Transparent over hero with a subtle top dark-gradient scrim for maximum text contrast.
 * - Transitions smoothly on scroll into deep forest-black translucent background (#060D08/90) with backdrop blur and antique-gold bottom border.
 * - Clickable brand logo with smooth scroll to top (#home), URL hash update, and cross-route navigation.
 * - Warm Ivory (#F7F0DE) navigation links with light text shadow, silky gold hover states and animated underlines.
 * - Real-time viewport-center active section tracking; immediate active state update on link click.
 * - Compact, premium gold action button (#C9A45C -> #DFBC75) with clear border and dark text.
 * - Single state-controlled mobile toggle (hamburger when closed, single 44x44px close icon when open).
 * - Clean mobile dropdown containing only navigation links and primary CTA with outside-click dismissal.
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const isManualClickRef = useRef(false);
  const manualClickTimeoutRef = useRef(null);
  const menuRef = useRef(null);
  const menuToggleRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Active section tracking & scroll state
  useEffect(() => {
    const updateNavigationState = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Skip scroll-based recalculation during smooth scroll initiated by a user click
      if (isManualClickRef.current) return;

      // When near top of page (Hero section), set active to home/clear sub-links
      if (scrollY < 260) {
        setActiveSection("home");
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

  const handleBrandClick = (e) => {
    setIsOpen(false);
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      window.history.pushState(null, "", "/#home");
      isManualClickRef.current = true;
      if (manualClickTimeoutRef.current) {
        clearTimeout(manualClickTimeoutRef.current);
      }
      manualClickTimeoutRef.current = setTimeout(() => {
        isManualClickRef.current = false;
      }, 900);
    }
  };

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

  // Close on Escape key
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

  // Close on outside click/tap
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuToggleRef.current &&
        !menuToggleRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
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
        isScrolled || isOpen
          ? "bg-[#060D08]/95 backdrop-blur-md border-b border-[#C9A45C]/25 py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          : "bg-gradient-to-b from-[#060D08]/90 via-[#060D08]/50 to-transparent border-b-0 border-none py-5 sm:py-6 shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Wordmark & Identity with Smooth Scroll to Top */}
          <Link
            href="/#home"
            onClick={handleBrandClick}
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9A45C] rounded-xs cursor-pointer"
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

          {/* Single State-Controlled Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button
              ref={menuToggleRef}
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative min-w-[44px] min-h-[44px] w-11 h-11 flex items-center justify-center text-[#F7F0DE] hover:text-[#DFBC75] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9A45C] rounded-xs transition-colors cursor-pointer"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
              {isOpen ? (
                /* Single Top-Right Close (X) Icon */
                <svg
                  className="w-6 h-6 text-[#DFBC75]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                /* Single Hamburger Icon */
                <div className="w-6 h-4 flex flex-col justify-between items-end" aria-hidden="true">
                  <span className="w-6 h-0.5 bg-[#F7F0DE] rounded-full transition-all duration-300" />
                  <span className="w-4 h-0.5 bg-[#C9A45C] rounded-full transition-all duration-200" />
                  <span className="w-5 h-0.5 bg-[#F7F0DE] rounded-full transition-all duration-300" />
                </div>
              )}
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
            className="fixed inset-x-0 top-[57px] sm:top-[61px] z-50 flex flex-col bg-[#060D08]/98 backdrop-blur-xl px-6 py-8 md:hidden h-[calc(100dvh-57px)] sm:h-[calc(100dvh-61px)] overflow-y-auto border-t border-[#C9A45C]/25 shadow-2xl space-y-6"
          >
            <div className="border-b border-[#1C3627]/90 pb-3">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#C9A45C] font-semibold">
                Navigation Index
              </p>
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

            <div className="pt-2">
              <a
                href="#partnerships"
                onClick={() => closeMenu("#partnerships")}
                className="flex w-full items-center justify-center rounded-xs bg-gradient-to-r from-[#C9A45C] via-[#D8B66A] to-[#DFBC75] py-3.5 text-center font-mono text-xs uppercase tracking-widest text-[#080E0A] font-bold border border-[#E8CA83] shadow-[0_2px_12px_rgba(0,0,0,0.5)] transition-all hover:from-[#DFBC75] hover:to-[#EED494]"
              >
                Partner Enquiries
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
