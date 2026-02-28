"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    alt: "Gym floor with weights and equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    alt: "Training session in progress",
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80",
    alt: "Modern gym interior with dramatic lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&q=80",
    alt: "HIIT class with battle ropes",
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
    alt: "Reformer pilates studio",
  },
  {
    src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80",
    alt: "Athlete in action",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

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
        className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-[1400px] mx-auto"
      >
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
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
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-12">
        <Button href="/gallery" variant="ghost">
          VIEW FULL GALLERY
        </Button>
      </div>
    </section>
  );
}
