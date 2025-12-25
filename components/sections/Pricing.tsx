"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PRICING_CONTENT } from "@/lib/constants";

export default function Pricing() {
  return (
    <section id="pricing" className="py-section-y px-section bg-muted/50">
      <div className="max-w-container-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-heading font-bold mb-heading">
            {PRICING_CONTENT.sectionTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-grid mb-8">
          {PRICING_CONTENT.tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-center">{tier.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-4xl font-bold mb-2">{tier.price}</p>
                  <p className="text-muted-foreground mb-4">{tier.videos}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            {PRICING_CONTENT.supportingText}
          </p>
          <Button
            size="lg"
            onClick={() =>
              window.open(PRICING_CONTENT.cta.link, "_blank")
            }
          >
            {PRICING_CONTENT.cta.text}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
