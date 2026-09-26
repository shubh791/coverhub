"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductModal({ product, isOpen, onClose }) {
  const modalRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is active
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

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-product-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#152B20]/60 backdrop-blur-xs transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl rounded-xs bg-[#FAF7F2] border border-[#E3DAC9] shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#E5DED0] px-6 py-4 bg-[#F4ECE0]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#B9673C] font-semibold">
                  {product.brand}
                </span>
                <span className="text-[#8E9C94]">•</span>
                <span className="font-mono text-xs text-[#5E6D64]">
                  {product.packSize}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-[#5E6D64] hover:text-[#152B20] transition-colors rounded-xs focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#152B20]"
                aria-label="Close product view"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              {/* Product Visual Frame */}
              <div className="flex items-center justify-center rounded-xs bg-[#F4ECE0]/80 border border-[#E8DEC9] p-6 min-h-[260px] sm:min-h-[300px]">
                <div className="relative flex flex-col items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="max-h-[260px] sm:max-h-[290px] w-auto object-contain drop-shadow-[0_12px_16px_rgba(0,0,0,0.2)] select-none"
                  />
                  <div className="w-3/5 h-2.5 bg-[#152B20]/25 blur-[4px] rounded-full -mt-1.5 -z-10" />
                </div>
              </div>

              {/* Verified Product Facts */}
              <div>
                <h3 id="modal-product-title" className="font-serif text-2xl sm:text-3xl text-[#152B20]">
                  {product.name}
                </h3>
                <div className="flex items-baseline justify-between mt-1">
                  <p className="text-xs sm:text-sm font-mono text-[#5E6D64]">
                    {product.format} • {product.packSize}
                  </p>
                  {product.price && (
                    <span className="font-serif text-xl sm:text-2xl text-[#152B20] font-normal">
                      {product.price}
                    </span>
                  )}
                </div>

                {/* Key Botanical Actives */}
                {product.keyIngredients && product.keyIngredients.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-[#E5DED0]">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#78857E] block mb-1.5">
                      Key Botanical Ingredients
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.keyIngredients.map((ing, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-[#F4ECE0] border border-[#E5DDCF] px-2.5 py-0.5 text-[11px] font-mono text-[#152B20]"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Verified Packaging Details */}
                <div className="mt-5 pt-4 border-t border-[#E5DED0] space-y-3.5 text-xs">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#78857E] block mb-1">
                      Packaging Classification
                    </span>
                    <p className="font-medium text-[#152B20]">
                      {product.verifiedDetails.type}
                    </p>
                  </div>

                  {product.verifiedDetails.statedPurpose && (
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#78857E] block mb-1">
                        Printed Stated Purpose
                      </span>
                      <p className="text-xs text-[#38433C] bg-[#F4ECE0]/50 p-2.5 rounded-xs border border-[#E5DED0] leading-relaxed">
                        {product.verifiedDetails.statedPurpose}
                      </p>
                    </div>
                  )}

                  {product.verifiedDetails.motto && (
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#78857E] block mb-1">
                        Packaging Inscription
                      </span>
                      <p className="font-serif text-sm italic text-[#B9673C]">
                        {product.verifiedDetails.motto}
                      </p>
                    </div>
                  )}

                  {product.verifiedDetails.pillars && (
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#78857E] block mb-1">
                        Packaging Pillars
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.verifiedDetails.pillars.map((pill, i) => (
                          <span
                            key={i}
                            className="rounded-xs bg-[#F4ECE0] px-2 py-0.5 text-[10px] font-mono text-[#152B20]"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {product.verifiedDetails.badges && (
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#78857E] block mb-1">
                        Printed Attributes
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.verifiedDetails.badges.map((b, i) => (
                          <span
                            key={i}
                            className="rounded-xs bg-[#F4ECE0] px-2 py-0.5 text-[10px] font-mono text-[#152B20]"
                          >
                            ✓ {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#78857E] block mb-1">
                      Label Notes
                    </span>
                    <p className="text-[11px] text-[#5E6D64] leading-relaxed">
                      {product.verifiedDetails.packaging} • {product.verifiedDetails.labelDetails}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="border-t border-[#E5DED0] px-6 py-4 bg-[#FAF7F2] flex flex-col sm:flex-row items-center justify-between gap-3">
              <Link
                href={`/products/${product.slug}`}
                onClick={onClose}
                className="font-mono text-xs text-[#B9673C] hover:underline"
              >
                Open Full Dedicated Page →
              </Link>
              <a
                href="#partnerships"
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xs bg-[#152B20] px-5 py-2.5 text-center font-mono text-xs uppercase tracking-widest text-[#FAF7F2] hover:bg-[#1C3A2B] transition-colors"
              >
                Partner & Wholesale Inquiry
              </a>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
