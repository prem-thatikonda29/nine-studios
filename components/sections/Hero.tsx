"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HERO_CONTENT, SITE_CONFIG } from "@/lib/constants";
import { useRef, useState, useEffect } from "react";
// import { MeshGradient } from "@paper-design/shaders-react"; // Disabled for now

// Helper function to open Discord profile
const openDiscordProfile = () => {
  const userId = SITE_CONFIG.discordUserId;
  window.open(`https://discordapp.com/users/${userId}`, '_blank');
};

// Main Hero Component
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [bgOpacity, setBgOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const heroHeight = heroRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const scrollProgress = scrollY / heroHeight;

      // Start fading at 40%, fully gone by 80%
      if (scrollProgress < 0.2) {
        setBgOpacity(1);
      } else if(scrollProgress < 0.4){
        setBgOpacity(0.5);
      }
      else if (scrollProgress > 0.6) {
        setBgOpacity(0);
      } else {
        // Fade from 1 to 0 between 20% and 60%
        const fadeProgress = (scrollProgress - 0.2) / 0.4;
        setBgOpacity(1 - fadeProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300"
        style={{
          backgroundImage: 'url(/assets/bg-noise.jpeg)',
          zIndex: 1,
          opacity: bgOpacity,
        }}
      />

      {/* MeshGradient Background - DISABLED
      <div
        className="absolute inset-0"
        style={{
          opacity: backgroundOpacity,
          zIndex: 1,
          visibility: showShader ? 'visible' : 'hidden',
          pointerEvents: 'none'
        }}
      >
        <MeshGradient
          colors={["#10b981", "#06b6d4", "#3b82f6", "#000000"]}
          distortion={distortion}
          swirl={swirl}
          speed={isScrolling || !showShader ? 0 : 0.15}
          maxPixelCount={854 * 480}
          minPixelRatio={1}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%"
          }}
        />
      </div>
      */}

      {/* Content Layer */}
      <div className="relative px-section py-24 md:py-32" style={{ zIndex: 3 }}>
        <div className="max-w-container-lg mx-auto min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-16rem)] flex flex-col justify-between">
          {/* Heading and Subheading */}
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-hero-responsive font-bold mb-6 uppercase drop-shadow-lg"
              style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.5)' }}
            >
              {HERO_CONTENT.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-hero-sub-responsive text-muted-foreground max-w-2xl md:max-w-md lg:max-w-xl drop-shadow-md"
              style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)' }}
            >
              {HERO_CONTENT.subheading}
            </motion.p>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              onClick={openDiscordProfile}
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
