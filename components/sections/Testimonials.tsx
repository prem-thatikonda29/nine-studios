"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { TESTIMONIALS_CONTENT } from "@/lib/constants";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="testimonials" className="py-section-y px-section">
      <div className="max-w-container-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-heading-responsive font-bold mb-heading">
            {TESTIMONIALS_CONTENT.sectionTitle}
          </h2>
        </motion.div>

        <Carousel
          setApi={setApi}
          className="w-full max-w-xl mx-auto"
          plugins={[
            Autoplay({
              delay: 6000,
            }),
          ]}
          opts={{
            loop: true,
          }}
        >
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
                    <CardContent className="flex flex-col items-center justify-center p-16 md:p-20 text-center min-h-[320px] md:min-h-[360px]">
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
        </Carousel>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS_CONTENT.testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-4 rounded-full transition-all duration-300 cursor-pointer ${
                index === current
                  ? "w-10 bg-foreground"
                  : "w-4 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
