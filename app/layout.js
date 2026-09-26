import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import SmoothScrollProvider from "@/components/SmoothScroll";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Cover Hub | Ayurvedic Wellness Products",
    template: "%s | Cover Hub",
  },
  description:
    "Explore the Cover Hub collection of Ayurvedic wellness products and enquire about distribution partnerships.",
  keywords: [
    "Cover Hub",
    "Ayurvedic Wellness Products",
    "Ayurveda",
    "Baalibal Juice",
    "Baalibal Capsules",
    "Livamitr",
    "BAL-1",
    "Femi-1",
    "Botanical Formulations",
    "Distribution Partnerships",
  ],
  authors: [{ name: "Cover Hub" }],
  openGraph: {
    title: "Cover Hub | Ayurvedic Wellness Products",
    description:
      "Explore the Cover Hub collection of Ayurvedic wellness products and enquire about distribution partnerships.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cover Hub | Ayurvedic Wellness Products",
    description:
      "Explore the Cover Hub collection of Ayurvedic wellness products and enquire about distribution partnerships.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth selection:bg-[#B9673C]/20 selection:text-[#152B20]`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF7F2] text-[#222B26] font-sans">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
