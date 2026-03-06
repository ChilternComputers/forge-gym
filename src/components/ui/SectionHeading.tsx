"use client";

import { motion, useReducedMotion } from "framer-motion";
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
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: "easeOut" }}
      className={cn(className)}
      style={{
        marginBottom: "4rem",
        textAlign: align === "center" ? "center" : "left",
      }}
    >
      {overline && (
        <span
          className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block"
          style={{ marginBottom: "1rem" }}
        >
          {overline}
        </span>
      )}
      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-brand-white" style={{ lineHeight: 1.2 }}>
        {title}
      </h2>
      {description && (
        <p
          className="text-brand-muted text-lg leading-relaxed"
          style={{
            marginTop: "1.5rem",
            maxWidth: "42rem",
            marginLeft: align === "center" ? "auto" : undefined,
            marginRight: align === "center" ? "auto" : undefined,
          }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
