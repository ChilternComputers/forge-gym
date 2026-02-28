"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { trainers } from "@/data/trainers";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function TrainerSpotlight() {
  return (
    <section className="section-padding bg-brand-dark">
      <SectionHeading
        overline="The Team"
        title="Meet Your Coaches"
        description="Certified experts who know your name, your goals, and your limits."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto"
      >
        {trainers.map((trainer) => (
          <motion.div
            key={trainer.id}
            variants={cardVariants}
            className="group relative"
          >
            {/* Image */}
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
              <Image
                src={trainer.image}
                alt={trainer.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-brand-white/90 text-sm leading-relaxed line-clamp-3">
                  {trainer.bio}
                </p>
                {trainer.instagram && (
                  <a
                    href={`https://instagram.com/${trainer.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-gold text-xs font-mono mt-3 hover:text-brand-gold-light transition-colors"
                  >
                    <Instagram size={14} />@{trainer.instagram}
                  </a>
                )}
              </div>
            </div>

            {/* Info */}
            <h3 className="font-heading text-xl uppercase tracking-wide">
              {trainer.name}
            </h3>
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-brand-gold">
              {trainer.specialty}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-12">
        <Button href="/trainers" variant="ghost">
          VIEW ALL COACHES
        </Button>
      </div>
    </section>
  );
}
