"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
      className="min-h-screen flex items-center justify-center px-section py-section-y"
    >
      <div className="max-w-container-md mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-hero font-bold mb-6"
        >
          {HERO_CONTENT.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-hero-sub text-muted-foreground mb-8"
        >
          {HERO_CONTENT.subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={() =>
              window.open(HERO_CONTENT.primaryCta.link, "_blank")
            }
          >
            {HERO_CONTENT.primaryCta.text}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection(HERO_CONTENT.secondaryCta.scrollTo)}
          >
            {HERO_CONTENT.secondaryCta.text}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
