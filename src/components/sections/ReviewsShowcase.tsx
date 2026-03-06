"use client";

import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { reviews, reviewSummary } from "@/data/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex" style={{ gap: "0.25rem" }} role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "text-brand-gold fill-brand-gold" : "text-brand-muted/30"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function ReviewsShowcase() {
  return (
    <section className="section-padding bg-brand-dark">
      <SectionHeading overline="Reviews" title="What People Say" />

      {/* Aggregate rating */}
      <AnimateOnScroll>
        <div className="flex flex-col items-center" style={{ marginBottom: "3rem", gap: "0.75rem" }}>
          <div className="flex items-center" style={{ gap: "0.75rem" }}>
            <span className="font-heading text-5xl text-brand-white">
              {reviewSummary.average}
            </span>
            <div>
              <div className="flex" style={{ gap: "0.25rem" }} role="img" aria-label={`${reviewSummary.average} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="text-brand-gold fill-brand-gold" aria-hidden="true" />
                ))}
              </div>
              <p className="font-mono text-xs text-brand-muted" style={{ marginTop: "0.25rem" }}>
                Based on {reviewSummary.total} reviews
              </p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Review cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto", gap: "1.5rem" }}>
        {reviews.map((review, i) => (
          <AnimateOnScroll key={review.id} delay={i * 0.08}>
            <div className="bg-brand-surface rounded-lg border border-white/5 flex flex-col" style={{ padding: "1.5rem", gap: "1rem" }}>
              <div className="flex items-center justify-between">
                <Stars rating={review.rating} />
                <span className="font-mono text-xs text-brand-muted/50 bg-brand-muted/5 rounded-full" style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem", paddingTop: "0.125rem", paddingBottom: "0.125rem" }}>
                  via Google
                </span>
              </div>
              <p className="text-brand-white/90 text-sm leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <span className="font-heading text-sm uppercase tracking-wide text-brand-white">
                  {review.name}
                </span>
                <span className="font-mono text-xs text-brand-muted">
                  {review.date}
                </span>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
