"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SkeletonCard } from "@/components/ui/Skeleton";
import { blogPosts } from "@/data/blog";

const categories = ["All", "Training Tips", "Nutrition", "Recovery", "Mindset"] as const;
type Category = (typeof categories)[number];

export default function BlogPage() {
  const [filter, setFilter] = useState<Category>("All");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);

  const filtered =
    filter === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-brand-black" style={{ paddingTop: "10rem", paddingBottom: "3rem" }}>
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "0.75rem" }}>
            Insights
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight" style={{ marginBottom: "1rem" }}>
            Blog
          </h1>
          <p className="text-brand-muted text-lg" style={{ maxWidth: "36rem" }}>
            Training tips, nutrition science, recovery strategies, and mindset
            shifts from our coaching team.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="responsive-px bg-brand-black" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div className="flex flex-wrap" style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto", gap: "0.75rem" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
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

      {/* Post grid */}
      <section className="responsive-px bg-brand-black" style={{ paddingBottom: "6rem" }}>
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          {!hydrated ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "1.5rem" }}>
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : (
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
              {filtered.map((post, i) => (
                <AnimateOnScroll key={post.slug} delay={i * 0.08}>
                  <Link href={`/blog/${post.slug}`} className="group block focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded-lg">
                    <div className="bg-brand-surface rounded-lg overflow-hidden border border-white/5 hover:border-brand-gold/30 transition-all duration-300">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute" style={{ top: "1rem", left: "1rem" }}>
                          <span className="font-mono text-xs uppercase tracking-[0.2em] bg-brand-gold text-brand-black rounded-full" style={{ paddingLeft: "0.75rem", paddingRight: "0.75rem", paddingTop: "0.25rem", paddingBottom: "0.25rem" }}>
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div style={{ padding: "1.5rem" }}>
                        <h2 className="font-heading text-xl uppercase tracking-wide group-hover:text-brand-gold transition-colors duration-300" style={{ marginBottom: "0.5rem" }}>
                          {post.title}
                        </h2>
                        <p className="text-brand-muted text-sm leading-relaxed" style={{ marginBottom: "1rem" }}>
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-brand-muted">
                          <span className="flex items-center text-xs font-mono" style={{ gap: "0.375rem" }}>
                            <Clock size={14} /> {post.readTime}
                          </span>
                          <span className="flex items-center text-xs font-mono text-brand-gold" style={{ gap: "0.25rem" }}>
                            Read <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </motion.div>
          </AnimatePresence>
          )}
        </div>
      </section>
      {/* CTA */}
      <section className="section-padding bg-brand-dark" style={{ textAlign: "center" }}>
        <AnimateOnScroll>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "1rem" }}>
            Ready to Start?
          </span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight" style={{ marginBottom: "1.5rem" }}>
            Put It Into Practice
          </h2>
          <p className="text-brand-muted text-lg" style={{ marginBottom: "2rem", maxWidth: "32rem", marginLeft: "auto", marginRight: "auto" }}>
            Stop reading, start training. Your first session at FORGE is free.
          </p>
          <Button href="/free-trial" variant="primary" size="large">
            START YOUR FREE TRIAL
          </Button>
        </AnimateOnScroll>
      </section>
    </>
  );
}
