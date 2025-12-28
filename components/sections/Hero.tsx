"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HERO_CONTENT, SITE_CONFIG } from "@/lib/constants";
import { useEffect, useRef, useState, useCallback } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

// Helper function to open Discord profile
const openDiscordProfile = () => {
  const userId = SITE_CONFIG.discordUserId;
  window.open(`https://discordapp.com/users/${userId}`, '_blank');
};

// Main Hero Component
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);
  const [showShader, setShowShader] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  // MeshGradient interactive state
  const [swirl, setSwirl] = useState(0.9);
  const [distortion, setDistortion] = useState(1.5);

  // Refs for throttling and scroll timeout
  const throttleRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Throttled mouse move handler (60fps max)
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (throttleRef.current || !showShader) return;

    throttleRef.current = true;
    requestAnimationFrame(() => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth;
      const y = e.clientY / innerHeight;

      setSwirl(0.5 + x * 1.5);
      setDistortion(1 + y * 2);
      throttleRef.current = false;
    });
  }, [showShader]);

  // Scroll-based fade effect with RAF + scroll detection for shader pause
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      // Pause shader while scrolling
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      if (ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        if (!heroRef.current) {
          ticking = false;
          return;
        }

        const heroHeight = heroRef.current.offsetHeight;
        const scrolled = window.scrollY;
        const fadeThreshold = heroHeight * 0.4;

        if (scrolled >= fadeThreshold) {
          setBackgroundOpacity(0);
          setShowShader(false);
        } else {
          setShowShader(true);
          const opacity = 1 - scrolled / fadeThreshold;
          setBackgroundOpacity(opacity);
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* MeshGradient Background - Always mounted, frozen when not visible */}
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

      {/* Dark Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"
        style={{
          opacity: backgroundOpacity,
          zIndex: 2,
          visibility: showShader ? 'visible' : 'hidden'
        }}
      />

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
              className="text-hero-sub-responsive text-muted-foreground max-w-2xl drop-shadow-md"
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
