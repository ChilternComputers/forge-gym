"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Flame, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { classes } from "@/data/classes";
import type { GymClass } from "@/types";

const categories = [
  { label: "All", value: "all" },
  { label: "Strength", value: "strength" },
  { label: "HIIT", value: "hiit" },
  { label: "Reformer", value: "reformer" },
  { label: "Boxing", value: "boxing" },
] as const;

type Category = (typeof categories)[number]["value"];

export default function ClassesPage() {
  const [filter, setFilter] = useState<Category>("all");
  const [selected, setSelected] = useState<GymClass | null>(null);

  const filtered =
    filter === "all"
      ? classes
      : classes.filter((c) => c.category === filter);

  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
          alt="FORGE GYM classes"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
        <div className="relative z-10 section-padding pb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold mb-3 block">
            Our Classes
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight">
            Train Your Way
          </h1>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="section-padding pb-0 bg-brand-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={cn(
                  "font-mono text-xs uppercase tracking-[0.15em] px-6 py-2.5 rounded-full border transition-all duration-300 cursor-pointer",
                  filter === cat.value
                    ? "bg-brand-gold text-brand-black border-brand-gold"
                    : "bg-transparent text-brand-muted border-brand-muted/20 hover:border-brand-gold hover:text-brand-gold"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Class grid */}
      <section className="section-padding pt-0 bg-brand-black">
        <div className="max-w-[1400px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((gymClass, i) => (
                <AnimateOnScroll key={gymClass.id} delay={i * 0.08}>
                  <div
                    onClick={() => setSelected(gymClass)}
                    className="group bg-brand-surface rounded-lg overflow-hidden border border-white/5 hover:border-brand-gold/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={gymClass.image}
                        alt={gymClass.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] bg-brand-gold text-brand-black px-3 py-1 rounded-full">
                          {gymClass.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-2xl uppercase tracking-wide mb-2">
                        {gymClass.name}
                      </h3>
                      <p className="text-brand-muted text-sm leading-relaxed mb-4">
                        {gymClass.shortDescription}
                      </p>
                      <div className="flex items-center gap-4 text-brand-muted">
                        <span className="flex items-center gap-1.5 text-xs font-mono">
                          <Clock size={14} /> {gymClass.duration}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-mono">
                          <Flame size={14} /> {gymClass.intensity}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-mono">
                          <User size={14} /> {gymClass.trainer}
                        </span>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Class detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-black/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-brand-surface rounded-xl max-w-2xl w-full overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 672px"
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] bg-brand-gold text-brand-black px-3 py-1 rounded-full">
                    {selected.category}
                  </span>
                  <span className="font-mono text-xs text-brand-muted">
                    {selected.duration}
                  </span>
                  <span className="font-mono text-xs text-brand-muted">
                    {selected.intensity}
                  </span>
                </div>
                <h2 className="font-heading text-3xl uppercase tracking-wide mb-4">
                  {selected.name}
                </h2>
                <p className="text-brand-white/80 leading-relaxed mb-6">
                  {selected.description}
                </p>
                <p className="text-brand-muted text-sm mb-6">
                  Led by <span className="text-brand-gold">{selected.trainer}</span>
                </p>
                <div className="flex gap-4">
                  <Button href="/free-trial" variant="primary">
                    BOOK THIS CLASS
                  </Button>
                  <Button onClick={() => setSelected(null)} variant="ghost">
                    CLOSE
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
