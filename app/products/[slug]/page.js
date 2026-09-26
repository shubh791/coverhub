import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found | Cover Hub" };
  }

  return {
    title: `${product.name} — Cover Hub`,
    description: `${product.name} (${product.packSize}) by Cover Hub. ${product.format}.`,
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#222B26]">
      <Header />

      <main className="flex-1 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="mb-8 flex items-center gap-2 text-xs font-mono text-[#6E7B73]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#152B20] transition-colors">
              Cover Hub
            </Link>
            <span>/</span>
            <Link href="/#collections" className="hover:text-[#152B20] transition-colors">
              The Collection
            </Link>
            <span>/</span>
            <span className="text-[#152B20] font-medium">{product.name}</span>
          </nav>

          {/* Product Detail Main Card */}
          <div className="rounded-xs border border-[#E3DAC9] bg-[#FFFFFF] p-6 sm:p-10 lg:p-14 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Product Visual Area with Neutral Subtle Backdrop */}
              <div className="lg:col-span-6 flex items-center justify-center rounded-xs bg-[#F5EFEB] border border-[#E8DFC0]/70 p-8 sm:p-12 min-h-[360px] sm:min-h-[420px]">
                <div className="relative flex flex-col items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="max-h-[380px] w-auto object-contain drop-shadow-[0_16px_22px_rgba(0,0,0,0.22)] select-none"
                  />
                  {/* Subtle surface contact shadow */}
                  <div className="w-3/5 h-3 bg-[#152B20]/25 blur-[5px] rounded-full -mt-2 -z-10" />
                </div>
              </div>

              {/* Product Verified Information Column */}
              <div className="lg:col-span-6 flex flex-col">
                
                {/* Brand & Format */}
                <div className="flex items-center justify-between pb-3 border-b border-[#E5DED0]">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#B9673C] font-semibold">
                    {product.brand}
                  </span>
                  <span className="font-mono text-xs text-[#6E7B73]">
                    Pack: {product.packSize}
                  </span>
                </div>

                {/* Name */}
                <h1 className="mt-4 font-serif text-3xl sm:text-4xl text-[#152B20] leading-tight">
                  {product.name}
                </h1>

                <p className="mt-2 text-sm font-mono text-[#5E6D64]">
                  {product.format}
                </p>

                {/* Verified Packaging Facts Only */}
                <div className="mt-6 pt-6 border-t border-[#E5DED0] space-y-4 text-xs text-[#38433C]">
                  
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#6E7B73] block mb-1">
                      Verified Classification
                    </span>
                    <p className="text-sm font-medium text-[#152B20]">
                      {product.verifiedDetails.type}
                    </p>
                  </div>

                  {product.verifiedDetails.statedPurpose && (
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#6E7B73] block mb-1">
                        Printed Stated Purpose
                      </span>
                      <p className="text-xs sm:text-sm text-[#38433C] bg-[#FAF7F2] p-3 rounded-xs border border-[#E5DED0] leading-relaxed">
                        {product.verifiedDetails.statedPurpose}
                      </p>
                    </div>
                  )}

                  {product.verifiedDetails.motto && (
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#6E7B73] block mb-1">
                        Packaging Inscription
                      </span>
                      <p className="font-serif text-base italic text-[#B9673C]">
                        {product.verifiedDetails.motto}
                      </p>
                    </div>
                  )}

                  {product.verifiedDetails.pillars && (
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#6E7B73] block mb-1.5">
                        Key Packaging Pillars
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {product.verifiedDetails.pillars.map((pill, i) => (
                          <span
                            key={i}
                            className="rounded-xs bg-[#FAF7F2] px-2.5 py-1 text-[11px] font-mono text-[#152B20] border border-[#E5DED0]"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {product.verifiedDetails.badges && (
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#6E7B73] block mb-1.5">
                        Printed Attributes
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {product.verifiedDetails.badges.map((badge, i) => (
                          <span
                            key={i}
                            className="rounded-xs bg-[#FAF7F2] px-2.5 py-1 text-[11px] font-mono text-[#152B20] border border-[#E5DED0]"
                          >
                            ✓ {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#6E7B73] block mb-1">
                      Packaging Notes
                    </span>
                    <p className="text-xs text-[#5E6D64] leading-relaxed">
                      {product.verifiedDetails.packaging} • {product.verifiedDetails.labelDetails}
                    </p>
                  </div>

                </div>

                {/* Back to Collection CTA */}
                <div className="mt-8 pt-6 border-t border-[#E5DED0] flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href="/#collections"
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-xs bg-[#152B20] px-6 py-3 font-mono text-xs uppercase tracking-widest text-[#FAF7F2] hover:bg-[#1C3A2B] transition-colors"
                  >
                    ← Back to Collection
                  </Link>
                  <a
                    href="/#partnerships"
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-xs border border-[#152B20]/30 px-6 py-3 font-mono text-xs uppercase tracking-widest text-[#152B20] hover:bg-[#152B20]/5 transition-colors"
                  >
                    Wholesale Inquiries
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
