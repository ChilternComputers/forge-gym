"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { createStaggerContainer, createScaleUpVariants } from "@/lib/animations";

const containerVariants = createStaggerContainer(0.08);
const itemVariants = createScaleUpVariants();

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800&q=80",
    alt: "Dumbbell rack in the free weights area",
  },
  {
    src: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&q=80",
    alt: "Gym floor with moody lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80",
    alt: "Functional training zone",
  },
  {
    src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80",
    alt: "Member training with ropes",
  },
  {
    src: "https://images.unsplash.com/photo-1623874514711-0f321325f318?w=800&q=80",
    alt: "Kettlebell training station",
  },
  {
    src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80",
    alt: "Athlete mid-workout",
  },
];

export function GalleryPreview() {
  return (
    <section className="section-padding bg-brand-black">
      <SectionHeading
        overline="Gallery"
        title="See the Space"
        description="Where iron meets intention."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-2 md:grid-cols-3"
        style={{ gap: "1rem", maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}
      >
        {galleryImages.map((img, i) => (
          <motion.div key={i} variants={itemVariants}>
            <Link
              href="/gallery"
              className="group relative aspect-square rounded-lg overflow-hidden block"
              aria-label={`View gallery: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/50 transition-colors duration-300 flex items-center justify-center">
                <Eye
                  size={32}
                  className="text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <Button href="/gallery" variant="ghost">
          VIEW FULL GALLERY
        </Button>
      </div>
    </section>
  );
}
