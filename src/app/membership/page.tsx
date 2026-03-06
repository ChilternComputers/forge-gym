"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { pricingTiers } from "@/data/pricing";

const faqs = [
  {
    q: "Is there a joining fee?",
    a: "No. We don't believe in hidden costs. The price you see is the price you pay — nothing more.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. All memberships are rolling monthly with no minimum contract. Cancel with 30 days' notice, no questions asked.",
  },
  {
    q: "What's included in the free trial?",
    a: "Your free trial gives you full access to the gym floor and one group class of your choice. A coach will meet you for a brief orientation and help you get started.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Absolutely. You can change your membership tier at any time. Changes take effect from your next billing date.",
  },
  {
    q: "Do you offer corporate or group rates?",
    a: "Yes. We offer tailored corporate wellness packages for teams of 5+. Contact us for a bespoke quote.",
  },
];

export default function MembershipPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-brand-black" style={{ paddingTop: "10rem", paddingBottom: "3rem" }}>
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <Breadcrumbs items={[{ label: "Membership" }]} />
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "0.75rem" }}>
            Membership
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight" style={{ marginBottom: "1rem" }}>
            Choose Your Path
          </h1>
          <p className="text-brand-muted text-lg" style={{ maxWidth: "36rem" }}>
            No contracts. No hidden fees. No nonsense. Just pick the plan that
            fits how you train.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section-padding bg-brand-black" style={{ paddingTop: "2rem" }}>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1.5rem", maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>
          {pricingTiers.map((tier, i) => (
            <AnimateOnScroll key={tier.id} delay={i * 0.1}>
              <div
                className={cn(
                  "relative rounded-xl flex flex-col h-full",
                  tier.highlighted
                    ? "bg-brand-surface border-2 border-brand-gold"
                    : "bg-brand-surface border border-white/5"
                )}
                style={{ padding: "2rem" }}
              >
                {tier.highlighted && (
                  <span className="absolute left-1/2 -translate-x-1/2 bg-brand-gold text-brand-black font-mono text-xs uppercase tracking-[0.2em] rounded-full" style={{ top: "-0.875rem", paddingLeft: "1rem", paddingRight: "1rem", paddingTop: "0.375rem", paddingBottom: "0.375rem" }}>
                    Most Popular
                  </span>
                )}

                <h2 className="font-heading text-3xl uppercase tracking-wider" style={{ marginBottom: "0.5rem" }}>
                  {tier.name}
                </h2>
                <p className="text-brand-muted text-sm" style={{ marginBottom: "1.5rem" }}>
                  {tier.description}
                </p>

                <div style={{ marginBottom: "2rem" }}>
                  <span className="font-heading text-6xl text-brand-white">
                    &pound;{tier.price}
                  </span>
                  <span className="text-brand-muted text-sm" style={{ marginLeft: "0.5rem" }}>
                    /{tier.period}
                  </span>
                </div>

                <ul className="flex flex-col flex-1" style={{ gap: "0.75rem", marginBottom: "2rem" }}>
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start" style={{ gap: "0.75rem" }}>
                      <Check
                        size={16}
                        className={cn(
                          "flex-shrink-0",
                          tier.highlighted
                            ? "text-brand-gold"
                            : "text-brand-muted"
                        )}
                        style={{ marginTop: "0.125rem" }}
                      />
                      <span className="text-brand-white/90 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="/free-trial"
                  variant={tier.highlighted ? "primary" : "ghost"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Social proof cross-link */}
      <section className="section-padding bg-brand-black" style={{ paddingTop: 0 }}>
        <AnimateOnScroll>
          <div className="bg-brand-surface rounded-xl border border-white/5 flex flex-col sm:flex-row items-center justify-between" style={{ maxWidth: "48rem", marginLeft: "auto", marginRight: "auto", padding: "2rem", gap: "1.5rem" }}>
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "0.5rem" }}>
                Real Results
              </span>
              <p className="text-brand-white text-sm">
                See how our members transformed their fitness — and their lives.
              </p>
            </div>
            <Link
              href="/transformations"
              className="inline-flex items-center text-brand-gold hover:text-brand-gold-light font-mono text-sm uppercase tracking-[0.1em] transition-colors duration-300 flex-shrink-0 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
              style={{ gap: "0.5rem" }}
            >
              See Transformations <ArrowRight size={16} />
            </Link>
          </div>
        </AnimateOnScroll>
      </section>

      {/* FAQ section */}
      <section className="section-padding bg-brand-dark">
        <div style={{ maxWidth: "48rem", marginLeft: "auto", marginRight: "auto" }}>
          <SectionHeading
            overline="FAQ"
            title="Common Questions"
            align="center"
          />

          <div className="flex flex-col" style={{ gap: "0.75rem" }}>
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={i} delay={i * 0.05}>
                <div className="border border-white/5 rounded-lg overflow-hidden">
                  <button
                    id={`faq-button-${i}`}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-panel-${i}`}
                    className="w-full flex items-center justify-between text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none"
                    style={{ padding: "1.25rem", minHeight: "44px" }}
                  >
                    <span className="font-body text-brand-white text-sm" style={{ paddingRight: "1rem" }}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        "text-brand-gold flex-shrink-0 transition-transform duration-300",
                        openFaq === i && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-button-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-brand-muted text-sm leading-relaxed" style={{ paddingLeft: "1.25rem", paddingRight: "1.25rem", paddingBottom: "1.25rem" }}>
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-dark" style={{ textAlign: "center" }}>
        <AnimateOnScroll>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "1rem" }}>
            Ready to Join?
          </span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight" style={{ marginBottom: "1.5rem" }}>
            Start Training Today
          </h2>
          <p className="text-brand-muted text-lg" style={{ marginBottom: "2rem", maxWidth: "32rem", marginLeft: "auto", marginRight: "auto" }}>
            Your first session is free. Pick a plan later — no pressure, no commitment.
          </p>
          <Button href="/free-trial" variant="primary" size="large">
            START YOUR FREE TRIAL
          </Button>
        </AnimateOnScroll>
      </section>
    </>
  );
}
