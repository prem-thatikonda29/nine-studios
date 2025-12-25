import { Film, Smartphone, ImageIcon, TrendingUp } from "lucide-react";

// ========================================
// GLOBAL SETTINGS
// ========================================
export const SITE_CONFIG = {
  name: "Nine Studios",
  tagline: "Premium video editing and content strategy",
  discordDmLink: "YOUR_DISCORD_DM_LINK", // Replace with actual Discord DM link
};

// ========================================
// HERO SECTION
// ========================================
export const HERO_CONTENT = {
  headline: "Unleash Your Creative Potential with Nine Studios",
  subheading:
    "Premium video editing and content strategy for creators, brands and businesses.",
  primaryCta: {
    text: "Book a Free Discovery Call",
    link: SITE_CONFIG.discordDmLink,
  },
  secondaryCta: {
    text: "View Work",
    scrollTo: "work",
  },
};

// ========================================
// WORK SECTION
// ========================================
export const WORK_CONTENT = {
  sectionTitle: "My Recent Edits",
  categories: {
    short: "Short Videos",
    long: "Long Videos",
  },
  videos: {
    shortForm: [
      { id: "dQw4w9WgXcQ", title: "Short Video 1" },
      { id: "dQw4w9WgXcQ", title: "Short Video 2" },
      { id: "dQw4w9WgXcQ", title: "Short Video 3" },
    ],
    longForm: [
      { id: "4Kbx3SnJM_M", title: "Long Video 1" },
      { id: "_a3aaL-NUtk", title: "Long Video 2" },
      { id: "VUtDJX1BueI", title: "Long Video 3" },
      { id: "UCuHZWOszEk", title: "Long Video 4" },
    ],
  },
  cta: {
    text: "Let's Work Together",
    link: SITE_CONFIG.discordDmLink,
  },
};

// ========================================
// SERVICES SECTION
// ========================================
export const SERVICES_CONTENT = {
  sectionTitle: "Services",
  services: [
    {
      icon: Film,
      title: "Long-Form Video",
      description: "Polished cinematic storytelling",
    },
    {
      icon: Smartphone,
      title: "Short-Form Video",
      description: "Scroll-stopping social edits",
    },
    {
      icon: ImageIcon,
      title: "Thumbnail Design",
      description: "High CTR visual design",
    },
    {
      icon: TrendingUp,
      title: "SEO Optimization",
      description: "Discoverability and growth",
    },
  ],
};

// ========================================
// TESTIMONIALS SECTION
// ========================================
export const TESTIMONIALS_CONTENT = {
  sectionTitle: "What Clients Say",
  testimonials: [
    {
      quote: "Cinatic transformed my channel visually.",
      author: "voice",
    },
    {
      quote: "Fast, creative and reliable.",
      author: "WittyB",
    },
    {
      quote: "Phenomenal storytelling.",
      author: "ItsVoke",
    },
    {
      quote: "Easy to work with and very professional.",
      author: "Bokie",
    },
  ],
};

// ========================================
// PRICING SECTION
// ========================================
export const PRICING_CONTENT = {
  sectionTitle: "Pricing",
  tiers: [
    {
      name: "Basic",
      price: "$25",
      videos: "1 video",
    },
    {
      name: "Standard",
      price: "$120",
      videos: "5 videos",
    },
    {
      name: "Premium",
      price: "$220",
      videos: "10 videos",
    },
  ],
  supportingText: "Custom requirements? Let's talk.",
  cta: {
    text: "Discuss Your Project",
    link: SITE_CONFIG.discordDmLink,
  },
};

// ========================================
// FAQ SECTION
// ========================================
export const FAQ_CONTENT = {
  sectionTitle: "Frequently Asked Questions",
  faqs: [
    {
      question: "How do I get started?",
      answer: "Content to be added",
    },
    {
      question: "Can you increase engagement?",
      answer: "Content to be added",
    },
    {
      question: "Do you offer animations?",
      answer: "Content to be added",
    },
    {
      question: "Do you optimize for platforms?",
      answer: "Content to be added",
    },
    {
      question: "Do you help with SEO?",
      answer: "Content to be added",
    },
    {
      question: "How much creative control do I have?",
      answer: "Content to be added",
    },
    {
      question: "How do I contact you?",
      answer: "Content to be added",
    },
  ],
};

// ========================================
// FOOTER SECTION
// ========================================
export const FOOTER_CONTENT = {
  ctaHeadline: "Ready to elevate your content?",
  cta: {
    text: "DM on Discord",
    link: SITE_CONFIG.discordDmLink,
  },
  brandName: SITE_CONFIG.name,
  tagline: SITE_CONFIG.tagline,
};
