"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
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
      <section className="pt-36 pb-12 section-padding bg-brand-black">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold mb-3 block">
            Membership
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight mb-4">
            Choose Your Path
          </h1>
          <p className="text-brand-muted text-lg max-w-xl">
            No contracts. No hidden fees. No nonsense. Just pick the plan that
            fits how you train.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section-padding pt-8 bg-brand-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
          {pricingTiers.map((tier, i) => (
            <AnimateOnScroll key={tier.id} delay={i * 0.1}>
              <div
                className={cn(
                  "relative rounded-xl p-8 flex flex-col h-full",
                  tier.highlighted
                    ? "bg-brand-surface border-2 border-brand-gold"
                    : "bg-brand-surface border border-white/5"
                )}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-black font-mono text-[0.6rem] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                )}

                <h2 className="font-heading text-3xl uppercase tracking-wider mb-2">
                  {tier.name}
                </h2>
                <p className="text-brand-muted text-sm mb-6">
                  {tier.description}
                </p>

                <div className="mb-8">
                  <span className="font-heading text-6xl text-brand-white">
                    &pound;{tier.price}
                  </span>
                  <span className="text-brand-muted text-sm ml-2">
                    /{tier.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className={cn(
                          "flex-shrink-0 mt-0.5",
                          tier.highlighted
                            ? "text-brand-gold"
                            : "text-brand-muted"
                        )}
                      />
                      <span className="text-brand-white/80 text-sm">
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

      {/* FAQ section */}
      <section className="section-padding bg-brand-dark">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            overline="FAQ"
            title="Common Questions"
            align="center"
          />

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={i} delay={i * 0.05}>
                <div className="border border-white/5 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                  >
                    <span className="font-body text-brand-white text-sm pr-4">
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
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-brand-muted text-sm leading-relaxed">
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
    </>
  );
}
