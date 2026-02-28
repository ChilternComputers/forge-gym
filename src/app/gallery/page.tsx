"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const galleryCategories = ["All", "Gym Floor", "Classes", "Trainers", "Facilities"] as const;
type GalleryCategory = (typeof galleryCategories)[number];

const images = [
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80", alt: "Gym floor equipment", category: "Gym Floor" },
  { src: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=1200&q=80", alt: "HIIT class in action", category: "Classes" },
  { src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=80", alt: "Training session", category: "Classes" },
  { src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&q=80", alt: "Gym interior dramatic lighting", category: "Gym Floor" },
  { src: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=1200&q=80", alt: "Coach Marcus Cole", category: "Trainers" },
  { src: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=1200&q=80", alt: "Coach Jade Rivera", category: "Trainers" },
  { src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80", alt: "Reformer studio", category: "Facilities" },
  { src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&q=80", alt: "Athlete training", category: "Classes" },
  { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80", alt: "Core training", category: "Classes" },
  { src: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1200&q=80", alt: "Boxing area", category: "Facilities" },
  { src: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=1200&q=80", alt: "Coach Sophie Chen", category: "Trainers" },
  { src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200&q=80", alt: "Coach Kai Thompson", category: "Trainers" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filtered.length : null
    );
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filtered.length) % filtered.length : null
    );

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-12 section-padding bg-brand-black">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold mb-3 block">
            Gallery
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight mb-4">
            See the Space
          </h1>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="section-padding pt-0 pb-8 bg-brand-black">
        <div className="max-w-[1400px] mx-auto flex flex-wrap gap-3">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setLightboxIndex(null);
              }}
              className={cn(
                "font-mono text-xs uppercase tracking-[0.15em] px-6 py-2.5 rounded-full border transition-all duration-300 cursor-pointer",
                filter === cat
                  ? "bg-brand-gold text-brand-black border-brand-gold"
                  : "bg-transparent text-brand-muted border-brand-muted/20 hover:border-brand-gold hover:text-brand-gold"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Image grid */}
      <section className="section-padding pt-0 bg-brand-black">
        <div className="max-w-[1400px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
            >
              {filtered.map((img, i) => (
                <AnimateOnScroll key={img.src} delay={i * 0.05} variant="scaleUp">
                  <div
                    onClick={() => openLightbox(i)}
                    className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-brand-white/60 hover:text-brand-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 md:left-8 text-brand-white/60 hover:text-brand-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={36} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 md:right-8 text-brand-white/60 hover:text-brand-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight size={36} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] h-[80vh] max-w-5xl"
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
