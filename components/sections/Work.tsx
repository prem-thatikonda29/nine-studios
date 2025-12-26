"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { WORK_CONTENT } from "@/lib/constants";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function Work() {
  return (
    <section id="work" className="py-section-y px-section">
      <div className="max-w-container-lg mx-auto">
        {/* Heading - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-heading-responsive font-bold mb-heading">
            {WORK_CONTENT.sectionTitle}
          </h2>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-grid mb-12">
          {WORK_CONTENT.videos.longForm.map((video, index) => (
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
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            onClick={() => window.open(WORK_CONTENT.cta.link, "_blank")}
            className="uppercase tracking-wider text-xs sm:text-sm md:text-md px-6 sm:px-7 md:px-8 py-4 sm:py-5 md:py-6 gap-2 md:gap-3"
          >
            {WORK_CONTENT.cta.text}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
