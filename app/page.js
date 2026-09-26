import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import ProductDiscovery from "@/components/ProductDiscovery";
import RootedInAyurveda from "@/components/RootedInAyurveda";
import OurApproach from "@/components/OurApproach";
import DistributorEnquiry from "@/components/DistributorEnquiry";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#222B26]">
      {/* Persistent Accessible Navigation */}
      <Header />

      {/* Main Chapter Flow */}
      <main className="flex-1 flex flex-col">
        {/* Chapter 01: Hero & Brand Promise */}
        <Hero />

        {/* Chapter 02: Rooted Principles & Brand Philosophy */}
        <Philosophy />

        {/* Chapter 03: The Collection */}
        <ProductDiscovery />

        {/* Chapter 04: Ayurvedic Heritage (Rooted in Ayurveda) */}
        <RootedInAyurveda />

        {/* Chapter 05: Our Approach */}
        <OurApproach />

        {/* Chapter 06: Strategic Alliances & Partner Enquiry */}
        <DistributorEnquiry />
      </main>

      {/* Footer with Working Navigation & Clear Contact Placeholders */}
      <Footer />
    </div>
  );
}
