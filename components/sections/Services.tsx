"use client";

import Image from "next/image";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SERVICES_CONTENT } from "@/lib/constants";
import Tilt from "react-parallax-tilt";

export default function Services() {
  return (
    <section id="services" className="py-section-y px-section">
      <div className="max-w-container-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-heading-responsive font-bold mb-heading">
            {SERVICES_CONTENT.sectionTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-grid">
          {SERVICES_CONTENT.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#3b82f6"
                glarePosition="all"
                glareBorderRadius="8px"
                scale={1.02}
              >
                <Card className="h-full hover:shadow-lg hover:border-white/15 transition-all duration-300">
                  <CardHeader className="p-6 flex flex-col items-center text-center">
                    <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 mb-5">
                      <Image
                        src={service.visual}
                        alt={service.title}
                        width={180}
                        height={180}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
