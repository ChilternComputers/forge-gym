"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Flame, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { classes } from "@/data/classes";
import { useFocusTrap } from "@/lib/useFocusTrap";
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
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const closeModal = useCallback(() => {
    setSelected(null);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  // ESC key to close modal
  useEffect(() => {
    if (!selected) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selected, closeModal]);

  // Focus modal when opened
  useEffect(() => {
    if (selected && modalRef.current) {
      modalRef.current.focus();
    }
  }, [selected]);

  const handleModalKeyDown = useFocusTrap(modalRef);

  const filtered =
    filter === "all"
      ? classes
      : classes.filter((c) => c.category === filter);

  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1596357395217-80de13130e92?w=1920&q=45&fm=webp"
          alt="FORGE GYM classes"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
        <div className="relative z-10 section-padding" style={{ paddingBottom: "3rem" }}>
          <Breadcrumbs items={[{ label: "Classes" }]} />
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "0.75rem" }}>
            Our Classes
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight">
            Train Your Way
          </h1>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="responsive-px bg-brand-black" style={{ paddingTop: "2.5rem", paddingBottom: 0 }}>
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <div className="flex flex-wrap" style={{ gap: "0.75rem", marginBottom: "2rem" }}>
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                aria-pressed={filter === cat.value}
                className={cn(
                  "font-mono text-xs uppercase tracking-[0.15em] rounded-full border transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none",
                  filter === cat.value
                    ? "bg-brand-gold text-brand-black border-brand-gold"
                    : "bg-transparent text-neutral-400 border-neutral-400/30 hover:border-brand-gold hover:text-brand-gold"
                )}
                style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem", paddingTop: "0.75rem", paddingBottom: "0.75rem", minHeight: "44px" }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Class grid */}
      <section className="responsive-px bg-brand-black" style={{ paddingTop: 0, paddingBottom: "6rem" }}>
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                style={{ gap: "1.5rem" }}
              >
                {filtered.map((gymClass, i) => (
                  <AnimateOnScroll key={gymClass.id} delay={i * 0.08}>
                    <div
                      onClick={(e) => { triggerRef.current = e.currentTarget; setSelected(gymClass); }}
                      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); triggerRef.current = e.currentTarget; setSelected(gymClass); } }}
                      tabIndex={0}
                      role="button"
                      className="group bg-brand-surface rounded-lg overflow-hidden border border-white/5 hover:border-brand-gold/30 transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={gymClass.image}
                          alt={gymClass.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute" style={{ top: "1rem", left: "1rem" }}>
                          <span className="font-mono text-xs uppercase tracking-[0.2em] bg-brand-gold text-brand-black rounded-full" style={{ paddingLeft: "0.75rem", paddingRight: "0.75rem", paddingTop: "0.25rem", paddingBottom: "0.25rem" }}>
                            {gymClass.category}
                          </span>
                        </div>
                      </div>
                      <div style={{ padding: "1.5rem" }}>
                        <h2 className="font-heading text-2xl uppercase tracking-wide" style={{ marginBottom: "0.5rem" }}>
                          {gymClass.name}
                        </h2>
                        <p className="text-brand-muted text-sm leading-relaxed" style={{ marginBottom: "1rem" }}>
                          {gymClass.shortDescription}
                        </p>
                        <div className="flex items-center text-brand-muted" style={{ gap: "1rem" }}>
                          <span className="flex items-center text-xs font-mono" style={{ gap: "0.375rem" }}>
                            <Clock size={14} aria-hidden="true" /> {gymClass.duration}
                          </span>
                          <span className="flex items-center text-xs font-mono" style={{ gap: "0.375rem" }}>
                            <Flame size={14} aria-hidden="true" /> {gymClass.intensity}
                          </span>
                          <span className="flex items-center text-xs font-mono" style={{ gap: "0.375rem" }}>
                            <User size={14} aria-hidden="true" /> {gymClass.trainer}
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

      {/* CTA */}
      <section className="section-padding bg-brand-dark" style={{ textAlign: "center" }}>
        <AnimateOnScroll>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "1rem" }}>
            Ready to Train?
          </span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight" style={{ marginBottom: "1.5rem" }}>
            Try a Class Free
          </h2>
          <p className="text-brand-muted text-lg" style={{ marginBottom: "2rem", maxWidth: "32rem", marginLeft: "auto", marginRight: "auto" }}>
            Your first session is on us. Pick a class, show up, and see what FORGE is about.
          </p>
          <Button href="/free-trial" variant="primary" size="large">
            START YOUR FREE TRIAL
          </Button>
        </AnimateOnScroll>
      </section>

      {/* Class detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-black/90 backdrop-blur-sm flex items-center justify-center"
            style={{ padding: "1.5rem" }}
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label={selected.name}
            ref={modalRef}
            tabIndex={-1}
            onKeyDown={handleModalKeyDown}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-brand-surface rounded-xl w-full overflow-hidden border border-white/10"
              style={{ maxWidth: "42rem" }}
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
              <div style={{ padding: "2rem" }}>
                <div className="flex items-center" style={{ gap: "0.75rem", marginBottom: "1rem" }}>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] bg-brand-gold text-brand-black rounded-full" style={{ paddingLeft: "0.75rem", paddingRight: "0.75rem", paddingTop: "0.25rem", paddingBottom: "0.25rem" }}>
                    {selected.category}
                  </span>
                  <span className="font-mono text-xs text-brand-muted">
                    {selected.duration}
                  </span>
                  <span className="font-mono text-xs text-brand-muted">
                    {selected.intensity}
                  </span>
                </div>
                <h2 className="font-heading text-3xl uppercase tracking-wide" style={{ marginBottom: "1rem" }}>
                  {selected.name}
                </h2>
                <p className="text-brand-white/90 leading-relaxed" style={{ marginBottom: "1.5rem" }}>
                  {selected.description}
                </p>
                <p className="text-brand-muted text-sm" style={{ marginBottom: "1.5rem" }}>
                  Led by <span className="text-brand-gold">{selected.trainer}</span>
                </p>
                <div className="flex" style={{ gap: "1rem" }}>
                  <Button href="/free-trial" variant="primary">
                    BOOK THIS CLASS
                  </Button>
                  <Button onClick={closeModal} variant="ghost">
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
