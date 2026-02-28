"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  overline?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  overline,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {overline && (
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold mb-4 block">
          {overline}
        </span>
      )}
      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-brand-white leading-none">
        {title}
      </h2>
      {description && (
        <p className="mt-6 max-w-2xl text-brand-muted text-lg leading-relaxed mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
