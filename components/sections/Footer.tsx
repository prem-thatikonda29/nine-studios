"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FOOTER_CONTENT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-section-y px-section bg-muted/50">
      <div className="max-w-container-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-heading font-bold mb-6">
            {FOOTER_CONTENT.ctaHeadline}
          </h2>
          <Button
            size="lg"
            onClick={() =>
              window.open(FOOTER_CONTENT.cta.link, "_blank")
            }
          >
            {FOOTER_CONTENT.cta.text}
          </Button>
        </motion.div>

        <div className="text-center pt-12 border-t border-border">
          <p className="text-xl font-semibold mb-2">{FOOTER_CONTENT.brandName}</p>
          <p className="text-muted-foreground">
            {FOOTER_CONTENT.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
