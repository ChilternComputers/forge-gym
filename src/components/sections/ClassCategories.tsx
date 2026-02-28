"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const categories = [
  {
    name: "Strength",
    subtitle: "Build Power",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    href: "/classes?category=strength",
  },
  {
    name: "HIIT",
    subtitle: "Push Limits",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&q=80",
    href: "/classes?category=hiit",
  },
  {
    name: "Reformer",
    subtitle: "Sculpt & Strengthen",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
    href: "/classes?category=reformer",
  },
  {
    name: "Boxing",
    subtitle: "Fight Ready",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80",
    href: "/classes?category=boxing",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function ClassCategories() {
  return (
    <section className="section-padding bg-brand-black">
      <SectionHeading
        overline="What We Offer"
        title="Train Your Way"
        description="Four disciplines. One goal. Find the class that matches your fire."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-[1400px] mx-auto"
      >
        {categories.map((cat) => (
          <motion.div key={cat.name} variants={itemVariants}>
            <Card
              title={cat.name}
              subtitle={cat.subtitle}
              image={cat.image}
              href={cat.href}
              aspectRatio="portrait"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
