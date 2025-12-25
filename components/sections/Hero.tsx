"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HERO_CONTENT } from "@/lib/constants";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between px-8 md:px-12 lg:px-16 py-24 md:py-32"
    >
      {/* Heading and Subheading - Top Left */}
      <div className="max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-hero font-bold mb-6 uppercase tracking-tight"
        >
          {HERO_CONTENT.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-hero-sub text-muted-foreground max-w-2xl"
        >
          {HERO_CONTENT.subheading}
        </motion.p>
      </div>

      {/* CTA - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Button
          size="lg"
          onClick={() =>
            window.open(HERO_CONTENT.primaryCta.link, "_blank")
          }
          className="text-lg px-8 py-6 uppercase tracking-wider gap-3"
        >
          {HERO_CONTENT.primaryCta.text}
          <ArrowUpRight className="w-5 h-5" />
        </Button>
      </motion.div>
    </section>
  );
}
