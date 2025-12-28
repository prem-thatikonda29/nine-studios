"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HERO_CONTENT, SITE_CONFIG } from "@/lib/constants";

// Helper function to open Discord profile
const openDiscordProfile = () => {
  const userId = SITE_CONFIG.discordUserId;
  // Open Discord user profile - visitor can click "Message" to DM
  window.open(`https://discordapp.com/users/${userId}`, '_blank');
};
import { useEffect, useRef, useState } from "react";

// Custom hook for reduced motion preference
function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

// SVG Shape Components
const SVGShapes = {
  circle: (props: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={props.className}>
      <circle cx="50" cy="50" r="45" fill="currentColor" />
    </svg>
  ),

  triangle: (props: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={props.className}>
      <path d="M50 10 L90 75 L10 75 Z" fill="currentColor" />
    </svg>
  ),

  hexagon: (props: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={props.className}>
      <path d="M50 5 L90 30 L90 70 L50 95 L10 70 L10 30 Z" fill="currentColor" />
    </svg>
  ),

  blob: (props: { className?: string }) => (
    <svg viewBox="0 0 200 200" className={props.className}>
      <path
        d="M100,20 C120,20 140,30 150,50 C160,70 160,90 150,110 C140,130 120,140 100,140 C80,140 60,130 50,110 C40,90 40,70 50,50 C60,30 80,20 100,20"
        fill="currentColor"
      />
    </svg>
  ),

  ring: (props: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={props.className}>
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" />
    </svg>
  )
};

// Framer Motion Variants
const shapeContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const shapeVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    filter: "blur(10px)"
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Shape Configuration
const shapes = [
  // Layer 1 - Background (Large)
  {
    id: 'blob-1',
    type: 'blob' as const,
    color: 'rgba(16, 185, 129, 0.12)',
    size: 1200,
    position: { top: '10%', left: '-10%' },
    animation: { y: [0, -40, 0] },
    animationDuration: 20,
    rotation: { rotate: [0, 180, 0] },
    rotationDuration: 40,
    layer: 1
  },
  {
    id: 'hexagon-1',
    type: 'hexagon' as const,
    color: 'rgba(6, 182, 212, 0.1)',
    size: 900,
    position: { top: '50%', right: '-5%' },
    animation: { y: [0, 30, 0] },
    animationDuration: 18,
    rotation: { rotate: [0, -120, 0] },
    rotationDuration: 35,
    layer: 1
  },

  // Layer 2 - Mid (Medium)
  {
    id: 'circle-1',
    type: 'circle' as const,
    color: 'rgba(59, 130, 246, 0.15)',
    size: 500,
    position: { top: '20%', left: '15%' },
    animation: {
      y: [0, -25, 0],
      x: [0, 20, 0]
    },
    animationDuration: 12,
    layer: 2
  },
  {
    id: 'triangle-1',
    type: 'triangle' as const,
    color: 'rgba(16, 185, 129, 0.14)',
    size: 450,
    position: { top: '60%', right: '20%' },
    animation: { y: [0, 35, 0] },
    animationDuration: 14,
    rotation: { rotate: [0, 90, 0] },
    rotationDuration: 25,
    layer: 2
  },
  {
    id: 'ring-1',
    type: 'ring' as const,
    color: 'rgba(6, 182, 212, 0.12)',
    size: 550,
    position: { top: '75%', left: '10%' },
    animation: {
      scale: [1, 1.1, 1]
    },
    animationDuration: 10,
    layer: 2
  },

  // Layer 3 - Foreground (Small)
  {
    id: 'circle-2',
    type: 'circle' as const,
    color: 'rgba(16, 185, 129, 0.18)',
    size: 250,
    position: { top: '35%', right: '12%' },
    animation: { y: [0, -20, 0] },
    animationDuration: 8,
    layer: 3
  },
  {
    id: 'hexagon-2',
    type: 'hexagon' as const,
    color: 'rgba(59, 130, 246, 0.16)',
    size: 280,
    position: { top: '85%', right: '35%' },
    animation: {
      y: [0, 15, 0],
      x: [0, -15, 0]
    },
    animationDuration: 9,
    rotation: { rotate: [0, 60, 0] },
    rotationDuration: 18,
    layer: 3
  },
  {
    id: 'triangle-2',
    type: 'triangle' as const,
    color: 'rgba(6, 182, 212, 0.15)',
    size: 220,
    position: { top: '45%', left: '8%' },
    animation: { y: [0, -15, 0] },
    animationDuration: 7,
    rotation: { rotate: [0, -45, 0] },
    rotationDuration: 15,
    layer: 3
  }
];

// Shape Configuration Interface
interface ShapeConfig {
  id: string;
  type: keyof typeof SVGShapes;
  color: string;
  size: number;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  animation: any;
  animationDuration: number;
  rotation?: any;
  rotationDuration?: number;
  layer: number;
}

// Animated Shape Component
const AnimatedShape = ({
  shape,
  prefersReducedMotion
}: {
  shape: ShapeConfig;
  prefersReducedMotion: boolean;
}) => {
  const ShapeComponent = SVGShapes[shape.type];

  const animationProps = prefersReducedMotion
    ? {}
    : {
        animate: {
          ...shape.animation,
          ...(shape.rotation || {})
        },
        transition: {
          y: shape.animation.y ? {
            duration: shape.animationDuration,
            repeat: Infinity,
            ease: "easeInOut"
          } : undefined,
          x: shape.animation.x ? {
            duration: shape.animationDuration,
            repeat: Infinity,
            ease: "easeInOut"
          } : undefined,
          scale: shape.animation.scale ? {
            duration: shape.animationDuration,
            repeat: Infinity,
            ease: "easeInOut"
          } : undefined,
          rotate: shape.rotation ? {
            duration: shape.rotationDuration,
            repeat: Infinity,
            ease: "linear"
          } : undefined
        }
      };

  return (
    <motion.div
      variants={shapeVariants}
      {...animationProps}
      style={{
        position: 'absolute',
        ...shape.position,
        width: shape.size,
        height: shape.size,
        color: shape.color,
        willChange: 'transform'
      }}
    >
      <ShapeComponent className="w-full h-full" />
    </motion.div>
  );
};

// Animated Background Component
const AnimatedBackground = ({ opacity }: { opacity: number }) => {
  const prefersReducedMotion = useReducedMotion();
  const [parallaxOffset, setParallaxOffset] = useState({
    layer1: 0,
    layer2: 0,
    layer3: 0
  });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setParallaxOffset({
        layer1: scrollY * 0.05,
        layer2: scrollY * 0.15,
        layer3: scrollY * 0.25
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion]);

  const shapesByLayer = {
    1: shapes.filter(s => s.layer === 1),
    2: shapes.filter(s => s.layer === 2),
    3: shapes.filter(s => s.layer === 3)
  };

  return (
    <motion.div
      className="hidden md:block absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ opacity, zIndex: 1 }}
      variants={shapeContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Layer 1: Background */}
      <motion.div
        style={{
          y: prefersReducedMotion ? 0 : parallaxOffset.layer1,
          position: 'absolute',
          inset: 0,
          willChange: 'transform'
        }}
      >
        {shapesByLayer[1].map(shape => (
          <AnimatedShape
            key={shape.id}
            shape={shape}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </motion.div>

      {/* Layer 2: Mid */}
      <motion.div
        style={{
          y: prefersReducedMotion ? 0 : parallaxOffset.layer2,
          position: 'absolute',
          inset: 0,
          willChange: 'transform'
        }}
      >
        {shapesByLayer[2].map(shape => (
          <AnimatedShape
            key={shape.id}
            shape={shape}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </motion.div>

      {/* Layer 3: Foreground */}
      <motion.div
        style={{
          y: prefersReducedMotion ? 0 : parallaxOffset.layer3,
          position: 'absolute',
          inset: 0,
          willChange: 'transform'
        }}
      >
        {shapesByLayer[3].map(shape => (
          <AnimatedShape
            key={shape.id}
            shape={shape}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

// Main Hero Component
export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heroRef = useRef<HTMLElement>(null);
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);

  // Scroll-based fade effect
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const heroHeight = heroRef.current.offsetHeight;
      const scrolled = window.scrollY;
      const fadeThreshold = heroHeight * 0.4;

      if (scrolled >= fadeThreshold) {
        setBackgroundOpacity(0);
      } else {
        const opacity = 1 - scrolled / fadeThreshold;
        setBackgroundOpacity(opacity);
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
      {/* Animated SVG Background - Full Width (Tablet/Desktop Only) */}
      <AnimatedBackground opacity={backgroundOpacity} />

      {/* Dark Gradient Overlay - Full Width */}
      <div
        className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"
        style={{
          opacity: backgroundOpacity,
          transition: "opacity 0.3s ease-out",
          zIndex: 2,
        }}
      />

      {/* Content Layer with Padding */}
      <div className="relative px-section py-24 md:py-32" style={{ zIndex: 3 }}>
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
