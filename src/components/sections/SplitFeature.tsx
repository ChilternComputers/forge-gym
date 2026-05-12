"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Dumbbell, Users, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";

const features = [
  {
    icon: Dumbbell,
    text: "World-class equipment from Eleiko, Concept2, and Technogym",
  },
  {
    icon: Users,
    text: "Maximum 16 per class — personal attention guaranteed",
  },
  {
    icon: Zap,
    text: "Science-backed programming updated every 4 weeks",
  },
  {
    icon: Shield,
    text: "Recovery zone with cold plunge, sauna, and stretching area",
  },
];

export function SplitFeature() {
  return (
    <section className="section-padding bg-brand-dark">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto", gap: "5rem" }}>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative aspect-[4/5] rounded-lg overflow-hidden"
        >
          <Image
            src="/images/unsplash/1540497077202-7c8a3999166f.webp"
            alt="FORGE GYM interior with dramatic lighting"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "1.25rem" }}>
            Why Forge
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-[1.2] tracking-tight" style={{ marginBottom: "2rem" }}>
            Not Just a Gym.
            <br />
            <span className="text-gradient">A Forge.</span>
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed" style={{ marginBottom: "2.5rem", maxWidth: "32rem" }}>
            We built FORGE for people who are done with overcrowded floors,
            cookie-cutter programmes, and trainers who don&apos;t remember your
            name. This is training with intent.
          </p>

          <ul style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2.5rem" }}>
            {features.map((feature) => (
              <li key={feature.text} className="flex items-start" style={{ gap: "1rem" }}>
                <div className="flex-shrink-0 rounded-full bg-brand-gold/10 flex items-center justify-center" style={{ width: "2.75rem", height: "2.75rem" }}>
                  <feature.icon size={18} className="text-brand-gold" aria-hidden="true" />
                </div>
                <span className="text-brand-white/90 text-sm leading-relaxed" style={{ paddingTop: "0.625rem" }}>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>

          <Button href="/about" variant="ghost">
            LEARN MORE ABOUT FORGE
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
