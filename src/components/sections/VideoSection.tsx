"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function VideoSection() {
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
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-[-10%] w-[120%] h-[120%]">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80"
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/45874/45874-720.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-black/60" />

      {/* Pull quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tight">
          Where Limits
          <br />
          <span className="text-gradient">Go to Die</span>
        </h2>
      </motion.div>
    </section>
  );
}
