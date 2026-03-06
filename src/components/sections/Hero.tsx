"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scroll-driven transforms
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  const heroRadius = useTransform(scrollYProgress, [0, 1], [0, 24]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const line1Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const line2Y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const overlineY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const overlineOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Reduced motion — render the original static hero
  if (prefersReducedMotion) {
    return (
      <section className="relative h-svh min-h-[600px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/gym-hero-poster.webp"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: "scale(1.1)" }}
          aria-hidden="true"
        >
          <source src="https://assets.mixkit.co/videos/52094/52094-720.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-brand-black/30" />

        <div className="relative z-10" style={{ textAlign: "center", paddingLeft: "1.5rem", paddingRight: "1.5rem", maxWidth: "56rem", marginLeft: "auto", marginRight: "auto" }}>
          <span
            className="font-mono text-sm uppercase tracking-[0.3em] text-brand-gold inline-block rounded-full border border-brand-gold/40"
            style={{ marginBottom: "2rem", padding: "0.625rem 2rem", backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}
          >
            Premium Fitness Studio
          </span>

          <h1
            className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-[1.1] tracking-tight"
            style={{ marginBottom: "2.5rem" }}
          >
            Built to Push.
            <br />
            <span className="text-gradient">Built to Last.</span>
          </h1>

          <p
            className="text-brand-white/90 text-lg md:text-xl font-light"
            style={{ marginBottom: "3rem", lineHeight: "1.8", marginLeft: "auto", marginRight: "auto", maxWidth: "36rem" }}
          >
            Strength. Cardio. Recovery.
            <br />
            Everything you need under one roof.
          </p>

          <div
            className="flex flex-col sm:flex-row"
            style={{ gap: "1.5rem", justifyContent: "center", alignItems: "center" }}
          >
            <Button href="/free-trial" variant="primary" size="large">
              START YOUR FREE TRIAL
            </Button>
            <Button href="/classes" variant="ghost" size="large">
              VIEW CLASSES
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown size={28} className="text-brand-gold/60" />
        </div>
      </section>
    );
  }

  return (
    <div ref={containerRef}>
      <motion.section
        className="relative h-svh min-h-[600px] flex items-center justify-center overflow-hidden"
        style={{ position: "sticky", top: 0, scale: heroScale, borderRadius: heroRadius }}
      >
        {/* Background video — scroll-driven zoom */}
        <motion.div
          className="absolute inset-0"
          style={{ scale: videoScale }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/gym-hero-poster.webp"
            className="w-full h-full object-cover"
            aria-hidden="true"
          >
            <source src="https://assets.mixkit.co/videos/52094/52094-720.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-brand-black/30" />

        {/* Content */}
        <div className="relative z-10" style={{ textAlign: "center", paddingLeft: "1.5rem", paddingRight: "1.5rem", maxWidth: "56rem", marginLeft: "auto", marginRight: "auto" }}>
          {/* Overline badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ y: overlineY, opacity: overlineOpacity, marginBottom: "2rem", padding: "0.625rem 2rem", backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}
            className="font-mono text-sm uppercase tracking-[0.3em] text-brand-gold inline-block rounded-full border border-brand-gold/40"
          >
            Premium Fitness Studio
          </motion.span>

          {/* Main headline — split lines for parallax */}
          <motion.h1
            className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ opacity: headingOpacity, marginBottom: "2.5rem" }}
          >
            <motion.span className="block" style={{ y: line1Y }}>
              Built to Push.
            </motion.span>
            <motion.span className="block text-gradient" style={{ y: line2Y }}>
              Built to Last.
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-brand-white/90 text-lg md:text-xl font-light"
            style={{ y: subtitleY, opacity: subtitleOpacity, marginBottom: "3rem", lineHeight: "1.8", marginLeft: "auto", marginRight: "auto", maxWidth: "36rem" }}
          >
            Strength. Cardio. Recovery.
            <br />
            Everything you need under one roof.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row"
            style={{ y: subtitleY, opacity: subtitleOpacity, gap: "1.5rem", justifyContent: "center", alignItems: "center" }}
          >
            <Button href="/free-trial" variant="primary" size="large">
              START YOUR FREE TRIAL
            </Button>
            <Button href="/classes" variant="ghost" size="large">
              VIEW CLASSES
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" as const }}
          >
            <ChevronDown size={28} className="text-brand-gold/60" />
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
