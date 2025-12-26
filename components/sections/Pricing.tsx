"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { PRICING_CONTENT } from "@/lib/constants";
import Tilt from "react-parallax-tilt";

export default function Pricing() {
  return (
    <section id="pricing" className="py-section-y px-section">
      <div className="max-w-container-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-heading-responsive font-bold mb-heading">
            {PRICING_CONTENT.sectionTitle}
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-grid mb-8">
          {PRICING_CONTENT.tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full sm:w-64"
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="8px"
                scale={1.02}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-center">{tier.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-4xl font-bold font-display mb-2">{tier.price}</p>
                    <p className="text-muted-foreground mb-4">{tier.videos}</p>
                  </CardContent>
                </Card>
              </Tilt>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground">
            Custom requirements?{" "}
            <a
              href={PRICING_CONTENT.cta.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline hover:text-foreground/80 transition-colors cursor-pointer"
            >
              Let's talk.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
