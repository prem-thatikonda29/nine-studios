"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { WORK_CONTENT } from "@/lib/constants";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function Work() {
  const [activeCategory, setActiveCategory] = useState<"short" | "long">(
    "short"
  );

  return (
    <section id="work" className="py-section-y px-section">
      <div className="max-w-container-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-heading font-bold mb-heading">
            {WORK_CONTENT.sectionTitle}
          </h2>
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant={activeCategory === "short" ? "default" : "outline"}
              onClick={() => setActiveCategory("short")}
            >
              {WORK_CONTENT.categories.short}
            </Button>
            <Button
              variant={activeCategory === "long" ? "default" : "outline"}
              onClick={() => setActiveCategory("long")}
            >
              {WORK_CONTENT.categories.long}
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-grid mb-12">
          {(activeCategory === "short"
            ? WORK_CONTENT.videos.shortForm
            : WORK_CONTENT.videos.longForm
          ).map((video, index) => (
            <motion.div
              key={video.id + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="aspect-video rounded-lg overflow-hidden bg-muted"
            >
              <YouTubeEmbed videoId={video.id} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={() =>
              window.open(WORK_CONTENT.cta.link, "_blank")
            }
          >
            {WORK_CONTENT.cta.text}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
