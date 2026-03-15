"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { useFocusTrap } from "@/lib/useFocusTrap";

const galleryCategories = ["All", "Gym Floor", "Classes", "Trainers", "Facilities"] as const;
type GalleryCategory = (typeof galleryCategories)[number];

const images = [
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=75&fm=webp", alt: "Dumbbell rack on the gym floor", category: "Gym Floor" },
  { src: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=1200&q=75&fm=webp", alt: "Gym floor under dramatic lighting", category: "Gym Floor" },
  { src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=1200&q=75&fm=webp", alt: "Strength training area", category: "Gym Floor" },
  { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=75&fm=webp", alt: "Coached push-up session", category: "Classes" },
  { src: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=1200&q=75&fm=webp", alt: "Coach Marcus Cole", category: "Trainers" },
  { src: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=1200&q=75&fm=webp", alt: "Coach Jade Rivera", category: "Trainers" },
  { src: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=1200&q=75&fm=webp", alt: "Recovery and locker facilities", category: "Facilities" },
  { src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=1200&q=75&fm=webp", alt: "Battle ropes conditioning", category: "Classes" },
  { src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&q=75&fm=webp", alt: "Barbell strength training", category: "Classes" },
  { src: "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=1200&q=75&fm=webp", alt: "Cardio and machine zone", category: "Facilities" },
  { src: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=1200&q=75&fm=webp", alt: "Coach Sophie Chen", category: "Trainers" },
  { src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200&q=75&fm=webp", alt: "Coach Kai Thompson", category: "Trainers" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const filtered =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  const openLightbox = (index: number, trigger?: HTMLElement) => {
    if (trigger) triggerRef.current = trigger;
    setLightboxIndex(index);
  };
  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);
  const nextImage = useCallback(() =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filtered.length : null
    ), [filtered.length]);
  const prevImage = useCallback(() =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filtered.length) % filtered.length : null
    ), [filtered.length]);

  // ESC key + arrow key navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") prevImage();
      else if (e.key === "ArrowRight") nextImage();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  const handleLightboxKeyDown = useFocusTrap(lightboxRef);

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-brand-black" style={{ paddingTop: "10rem", paddingBottom: "3rem" }}>
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <Breadcrumbs items={[{ label: "Gallery" }]} />
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "0.75rem" }}>
            Gallery
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight" style={{ marginBottom: "1rem" }}>
            See the Space
          </h1>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="responsive-px bg-brand-black" style={{ paddingTop: "2.5rem", paddingBottom: "2rem" }}>
        <div className="flex flex-wrap" style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto", gap: "0.75rem" }}>
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setLightboxIndex(null);
              }}
              aria-pressed={filter === cat}
              className={cn(
                "font-mono text-xs uppercase tracking-[0.15em] rounded-full border transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none",
                filter === cat
                  ? "bg-brand-gold text-brand-black border-brand-gold"
                  : "bg-transparent text-brand-muted border-brand-muted/20 hover:border-brand-gold hover:text-brand-gold"
              )}
              style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem", paddingTop: "0.75rem", paddingBottom: "0.75rem", minHeight: "44px" }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Image grid */}
      <section className="responsive-px bg-brand-black" style={{ paddingTop: 0, paddingBottom: "5rem" }}>
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                style={{ gap: "0.75rem" }}
              >
                {filtered.map((img, i) => (
                  <AnimateOnScroll key={img.src} delay={i * 0.05} variant="scaleUp">
                    <div
                      onClick={(e) => openLightbox(i, e.currentTarget)}
                      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(i, e.currentTarget); } }}
                      tabIndex={0}
                      role="button"
                      className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/40 transition-colors duration-300" />
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
            Ready?
          </span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight" style={{ marginBottom: "1.5rem" }}>
            Train Here
          </h2>
          <p className="text-brand-muted text-lg" style={{ marginBottom: "2rem", maxWidth: "32rem", marginLeft: "auto", marginRight: "auto" }}>
            Your first session is free. Come see the space for yourself.
          </p>
          <Button href="/free-trial" variant="primary" size="large">
            START YOUR FREE TRIAL
          </Button>
        </AnimateOnScroll>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`Image ${lightboxIndex + 1} of ${filtered.length}: ${filtered[lightboxIndex].alt}`}
            ref={lightboxRef}
            onKeyDown={handleLightboxKeyDown}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-brand-white/60 hover:text-brand-white transition-colors z-10 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded-lg"
              style={{ minWidth: "44px", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
              aria-label="Close lightbox"
              autoFocus
            >
              <X size={28} aria-hidden="true" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 md:left-8 text-brand-white/60 hover:text-brand-white transition-colors z-10 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded-lg"
              style={{ minWidth: "44px", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
              aria-label="Previous image"
            >
              <ChevronLeft size={36} aria-hidden="true" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 md:right-8 text-brand-white/60 hover:text-brand-white transition-colors z-10 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded-lg"
              style={{ minWidth: "44px", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
              aria-label="Next image"
            >
              <ChevronRight size={36} aria-hidden="true" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] h-[80vh]"
              style={{ maxWidth: "64rem" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs text-brand-muted">
              {lightboxIndex + 1} / {filtered.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
