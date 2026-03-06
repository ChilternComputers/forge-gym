"use client";

import Image from "next/image";
import { Instagram, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { instaPosts } from "@/data/instagram";
import { createStaggerContainer, createScaleUpVariants } from "@/lib/animations";

const containerVariants = createStaggerContainer(0.08);
const itemVariants = createScaleUpVariants();

export function InstagramFeed() {
  return (
    <section className="section-padding bg-brand-black">
      <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between" style={{ marginBottom: "3rem", gap: "1rem" }}>
          <div className="flex items-center" style={{ gap: "0.75rem" }}>
            <Instagram size={24} className="text-brand-gold" />
            <span className="font-heading text-2xl uppercase tracking-wide">
              @forgegym
            </span>
          </div>
          <a
            href="https://instagram.com/forgegym"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.15em] text-brand-gold hover:text-brand-gold-light transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
          >
            Follow Us &rarr;
          </a>
        </div>

        {/* Image grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-3"
          style={{ gap: "0.75rem" }}
        >
          {instaPosts.map((post) => (
            <motion.a
              key={post.id}
              variants={itemVariants}
              href="https://instagram.com/forgegym"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${post.alt} — ${post.likes} likes`}
              className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none"
            >
              <Image
                src={post.image}
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/60 transition-colors duration-300 flex items-center justify-center">
                <div className="flex items-center text-brand-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ gap: "0.5rem" }}>
                  <Heart size={20} className="text-red-500 fill-red-500" aria-hidden="true" />
                  <span className="font-mono text-sm">{post.likes}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
