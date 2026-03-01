"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative h-svh min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background video — heavy barbell training */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: "scale(1.1)" }}
      >
        <source src="https://assets.mixkit.co/videos/52094/52094-720.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-brand-black/30" />

      {/* Content */}
      <div className="relative z-10" style={{ textAlign: "center", paddingLeft: "1.5rem", paddingRight: "1.5rem", maxWidth: "56rem", marginLeft: "auto", marginRight: "auto" }}>
        {/* Overline badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-sm uppercase tracking-[0.3em] text-brand-gold inline-block rounded-full border border-brand-gold/40"
          style={{ marginBottom: "2rem", padding: "0.625rem 2rem", backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}
        >
          Premium Fitness Studio
        </motion.span>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-[0.9] tracking-tight"
          style={{ marginBottom: "2.5rem" }}
        >
          Built to Push.
          <br />
          <span className="text-gradient">Built to Last.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-brand-white/90 text-lg md:text-xl font-light"
          style={{ marginBottom: "3rem", lineHeight: "1.8", marginLeft: "auto", marginRight: "auto", maxWidth: "36rem" }}
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
          style={{ gap: "1.5rem", justifyContent: "center", alignItems: "center" }}
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
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} className="text-brand-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
