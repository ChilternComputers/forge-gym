"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      {/* Background video — barbell drop slow-mo */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?w=1920&q=45&fm=webp"
          className="w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="https://assets.mixkit.co/videos/40250/40250-720.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-black/65" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10"
        style={{ textAlign: "center", paddingLeft: "1.5rem", paddingRight: "1.5rem", maxWidth: "48rem", marginLeft: "auto", marginRight: "auto" }}
      >
        <span className="font-mono text-sm uppercase tracking-[0.3em] text-brand-gold block" style={{ marginBottom: "1.25rem" }}>
          Ready?
        </span>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.2] tracking-tight" style={{ marginBottom: "2rem" }}>
          Ready to Forge
          <br />
          <span className="text-gradient">Your Path?</span>
        </h2>
        <p className="text-brand-white/90 text-lg" style={{ marginBottom: "2.5rem", maxWidth: "32rem", marginLeft: "auto", marginRight: "auto" }}>
          Your first session is on us. No commitment, no pressure — just show up
          and see what FORGE is about.
        </p>
        <Button href="/free-trial" variant="primary" size="large">
          START YOUR FREE TRIAL
        </Button>
      </motion.div>
    </section>
  );
}
