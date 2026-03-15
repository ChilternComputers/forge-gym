"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useIsDesktop } from "@/lib/useIsDesktop";

export function VideoSection() {
  const isDesktop = useIsDesktop();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[60vh] min-h-[400px] overflow-hidden flex items-center justify-center"
    >
      {/* Parallax background — video on desktop, static poster on mobile */}
      <motion.div style={{ y }} className="absolute inset-[-10%] w-[120%] h-[120%]">
        {isDesktop ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/gym-hero-poster.webp"
            className="w-full h-full object-cover"
            aria-hidden="true"
          >
            <source src="/gym-hero.webm" type="video/webm" />
            <source src="/gym-hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src="https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?w=800&q=30&fm=webp"
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        )}
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-black/60" />

      {/* Pull quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl"
        style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
      >
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.2] tracking-tight">
          Where Limits
          <br />
          <span className="text-gradient">Go to Die</span>
        </h2>
      </motion.div>
    </section>
  );
}
