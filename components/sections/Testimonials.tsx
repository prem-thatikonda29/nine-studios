"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TESTIMONIALS_CONTENT } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-section-y px-section">
      <div className="max-w-container-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-heading font-bold mb-heading">
            {TESTIMONIALS_CONTENT.sectionTitle}
          </h2>
        </motion.div>

        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent>
            {TESTIMONIALS_CONTENT.testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="p-4"
                >
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-12 text-center">
                      <p className="text-2xl md:text-3xl font-medium mb-6">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <p className="text-muted-foreground text-lg">
                        — {testimonial.author}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
