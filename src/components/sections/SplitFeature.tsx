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
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative aspect-[4/5] rounded-lg overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=900&q=80"
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
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold mb-4 block">
            Why Forge
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] tracking-tight mb-8">
            Not Just a Gym.
            <br />
            <span className="text-gradient">A Forge.</span>
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed mb-10 max-w-lg">
            We built FORGE for people who are done with overcrowded floors,
            cookie-cutter programmes, and trainers who don&apos;t remember your
            name. This is training with intent.
          </p>

          <ul className="space-y-6 mb-10">
            {features.map((feature) => (
              <li key={feature.text} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center mt-0.5">
                  <feature.icon size={18} className="text-brand-gold" />
                </div>
                <span className="text-brand-white/80 text-sm leading-relaxed">
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>

          <Button href="/about" variant="ghost">
            LEARN MORE
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
