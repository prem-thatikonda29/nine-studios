"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HERO_CONTENT } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const heroHeight = heroRef.current.offsetHeight;
      const scrolled = window.scrollY;
      const fadeThreshold = heroHeight * 0.4; // 40% of hero height

      if (scrolled >= fadeThreshold) {
        setVideoOpacity(0);
      } else {
        const opacity = 1 - (scrolled / fadeThreshold);
        setVideoOpacity(opacity);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Video - Full Width (Tablet/Desktop Only) */}
      <div
        className="hidden md:block absolute inset-0 w-full h-full"
        style={{ opacity: videoOpacity, transition: "opacity 0.3s ease-out" }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          <source src="/videos/hero-background.webm" type="video/webm" />
        </video>
      </div>

      {/* Dark Gradient Overlay - Full Width */}
      <div
        className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"
        style={{ opacity: videoOpacity, transition: "opacity 0.3s ease-out" }}
      />

      {/* Content Layer with Padding */}
      <div className="relative px-section py-24 md:py-32"
>
      <div className="max-w-container-lg mx-auto min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-16rem)] flex flex-col justify-between">
        {/* Heading and Subheading - Top Left */}
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-hero-responsive font-bold mb-6 uppercase"
          >
            {HERO_CONTENT.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-hero-sub-responsive text-muted-foreground max-w-2xl"
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
            onClick={() => window.open(HERO_CONTENT.primaryCta.link, "_blank")}
            className="uppercase tracking-wider text-xs sm:text-sm md:text-md px-6 sm:px-7 md:px-8 py-4 sm:py-5 md:py-6 gap-2 md:gap-3"
          >
            {HERO_CONTENT.primaryCta.text}
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
          </Button>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
