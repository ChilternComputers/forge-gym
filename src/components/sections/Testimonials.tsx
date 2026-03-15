"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { useIsDesktop } from "@/lib/useIsDesktop";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  // Auto-rotate every 6 seconds (unless paused)
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, paused]);

  const testimonial = testimonials[current];
  const isDesktop = useIsDesktop();

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background — video on desktop, static poster on mobile */}
      <div className="absolute inset-0">
        {isDesktop ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="https://images.unsplash.com/photo-1583454155184-870a1f63aebc?w=1920&q=30&fm=webp"
            className="w-full h-full object-cover"
            aria-hidden="true"
          >
            <source src="/gym-hero.webm" type="video/webm" />
            <source src="/gym-hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src="https://images.unsplash.com/photo-1583454155184-870a1f63aebc?w=1200&q=30&fm=webp"
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        )}
      </div>
      <div className="absolute inset-0 bg-brand-black/80" />

      <div className="relative z-10">
      <SectionHeading overline="Testimonials" title="What Our Members Say" />

      <div style={{ maxWidth: "48rem", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
        {/* Decorative quote */}
        <Quote size={48} className="text-brand-gold/20" style={{ marginLeft: "auto", marginRight: "auto", marginBottom: "2rem" }} aria-hidden="true" />

        {/* Testimonial content */}
        <div className="flex items-center justify-center" style={{ minHeight: "200px" }} aria-live="polite" aria-atomic="true">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="text-xl md:text-2xl text-brand-white/90 font-light italic" style={{ lineHeight: "1.8", marginBottom: "2rem" }}>
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-heading text-lg uppercase tracking-wider text-brand-white">
                  {testimonial.name}
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold" style={{ marginTop: "0.375rem" }}>
                  {testimonial.membership}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center" style={{ gap: "1rem", marginTop: "2.5rem" }}>
          <button
            onClick={() => setPaused(!paused)}
            className="font-mono text-xs uppercase tracking-[0.15em] text-brand-muted hover:text-brand-white transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded-full"
            style={{ minWidth: "44px", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            aria-label={paused ? "Resume auto-play" : "Pause auto-play"}
          >
            {paused ? "\u25B6" : "\u23F8"}
          </button>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                "rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none",
                i === current
                  ? "bg-brand-gold"
                  : "bg-brand-muted/30 hover:bg-brand-muted/50"
              )}
              style={{
                minWidth: "44px",
                minHeight: "44px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === current ? "true" : undefined}
            >
              <span
                className={cn(
                  "block rounded-full transition-all duration-300",
                  i === current ? "w-8 h-2.5 bg-brand-gold" : "w-2.5 h-2.5 bg-brand-muted/30"
                )}
              />
            </button>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
