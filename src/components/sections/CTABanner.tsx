"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=60')",
        }}
      />

      {/* Blur + dark overlay */}
      <div className="absolute inset-0 bg-brand-black/70 backdrop-blur-sm" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
      >
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-gold mb-4 block">
          Ready?
        </span>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tight mb-8">
          Ready to Forge
          <br />
          <span className="text-gradient">Your Path?</span>
        </h2>
        <p className="text-brand-white/70 text-lg mb-10 max-w-lg mx-auto">
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
