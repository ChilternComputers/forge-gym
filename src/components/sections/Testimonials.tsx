"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const testimonial = testimonials[current];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background video — boxer silhouette */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/23929/23929-720.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-brand-black/80" />

      <div className="relative z-10">
      <SectionHeading overline="Testimonials" title="What Our Members Say" />

      <div style={{ maxWidth: "48rem", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
        {/* Decorative quote */}
        <Quote size={48} className="text-brand-gold/20" style={{ marginLeft: "auto", marginRight: "auto", marginBottom: "2rem" }} />

        {/* Testimonial content */}
        <div className="flex items-center justify-center" style={{ minHeight: "200px" }}>
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

        {/* Dots */}
        <div className="flex justify-center" style={{ gap: "0.75rem", marginTop: "2.5rem" }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                i === current
                  ? "bg-brand-gold w-8"
                  : "bg-brand-muted/30 hover:bg-brand-muted/50"
              )}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
