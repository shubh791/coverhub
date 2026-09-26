/**
 * Ayurvedic Era - Brand & Editorial Content Data
 * Centralized content structure for easy updates, translations, or editorial adjustments.
 */

export const brandInfo = {
  name: "Cover Hub",
  packagingBrand: "Cover Hub",
  legalName: "Cover Hub",
  tagline: "Ayurvedic Wellness Products",
  summary: "Explore the Cover Hub collection and connect with our team.",
};

export const heroContent = {
  chapter: "Chapter 01 // The Rebirth of Classical Formulation",
  eyebrow: "Classical Botanical Formulation",
  heading: "Ayurvedic wisdom for everyday wellbeing.",
  description:
    "Rooted in classical Ayurvedic principles and crafted in harmony with nature. Thoughtfully formulated botanical remedies designed to nurture vitality, balance, and daily equilibrium.",
  primaryCta: {
    label: "Explore Products",
    target: "#collections"
  },
  secondaryCta: {
    label: "Our Philosophy",
    target: "#philosophy"
  },
  transitionText: "Explore the collection",
  transitionTarget: "#collections",
  backdropImage: "/images/hero-premium-bg.png",
  backdropImageWebp: "/images/hero-premium-bg.webp",
  productImage: "/images/hero/baalibal-juice.png",
};

export const philosophyContent = {
  chapter: "02 / Our Philosophy",
  eyebrow: "Classical Botanical Formulation",
  heading: "Tradition, considered for today.",
  body:
    "Cover Hub brings traditional wellness thinking into an approachable modern collection. Explore Cover Hub formulations and find clear information about each product before choosing what suits you.",
  cta: {
    label: "Explore our products",
    target: "#collections",
  },
  backdropImage: "/images/philosophy-premium-bg.png",
  backdropImageWebp: "/images/philosophy-premium-bg.webp",
  imageAlt: "Classical Ayurvedic manuscript, fresh botanicals, brass urn and warm lamp",
  sanskritVerse: {
    line1: "हिताहितं सुखं दुःखमायुस्तस्य हिताहितम्।",
    line2: "मानं च तच्च यत्रोक्तमायुर्वेदः स उच्यते॥",
    attribution: "चरक संहिता · सूत्रस्थान १.४१",
    translation: "That which illuminates what is wholesome and unwholesome, joyful and sorrowful for life, its span and true essence — is known as Ayurveda.",
  },
};

export const heritageContent = {
  chapter: "04 / Heritage",
  label: "AN ANCIENT PRACTICE",
  heading: "Rooted in Ayurveda",
  description:
    "Time-honoured botanicals, thoughtfully brought into modern everyday rituals.",
  principles: ["Pure Botanicals", "Traditional Wisdom", "Modern Care"],
  backdropImage: "/images/heritage/ayurvedic-heritage-backdrop.jpg",
  imageAlt: "Ayurvedic heritage flatlay with ancient palm-leaf manuscript, brass bowl with dried herbs, roots and fresh botanicals on warm parchment",
};

export const approachContent = {
  chapter: "05 / Our Approach",
  label: "OUR APPROACH",
  heading: "Ancient wisdom, carefully brought to life.",
  subheading: "A seamless journey from sacred botanicals to refined everyday wellness.",
  videoSrc: "/videos/ayuervedic.mp4",
  steps: [
    {
      number: "01",
      title: "Select",
      description: "Pure medicinal herbs are carefully chosen.",
      icon: "leaf",
    },
    {
      number: "02",
      title: "Prepare",
      description: "Botanicals are cleaned and traditionally processed.",
      icon: "prepare",
    },
    {
      number: "03",
      title: "Formulate",
      description: "Ancient wisdom meets precise modern formulation.",
      icon: "mortar",
    },
    {
      number: "04",
      title: "Perfect",
      description: "Every blend is refined for everyday wellness.",
      icon: "medicine",
    },
  ],
};

export const partnershipContent = {
  chapter: "06 / Partnership",
  heading: "Let’s grow together.",
  copy: "Interested in stocking or distributing the Cover Hub collection? Tell us about your business and the team can discuss availability and next steps.",
  sanskritAccent: {
    verse: "संगच्छध्वं संवदध्वं",
    translation: "Together, in conversation.",
    source: "ऋग्वेद · १०.१९१.२",
  },
  targetAudience: "For retailers, distributors, and wellness businesses.",
  panelHeading: "Start a conversation",
  note: "Direct correspondence for retail, distribution, and wellness partners.",
};

export const navLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Products", href: "#collections" },
  { label: "Heritage", href: "#heritage" },
  { label: "Our Approach", href: "#approach" },
  { label: "Partner With Us", href: "#partnerships" },
];
