"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { pricingTiers } from "@/data/pricing";
import { createStaggerContainer, createSlideUpVariants } from "@/lib/animations";

const containerVariants = createStaggerContainer(0.12);
const cardVariants = createSlideUpVariants(40);

export function MembershipPreview() {
  return (
    <section className="section-padding bg-brand-black">
      <SectionHeading
        overline="Membership"
        title="Choose Your Path"
        description="No contracts. No hidden fees. Cancel anytime."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ gap: "2rem", maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}
      >
        {pricingTiers.map((tier) => (
          <motion.div
            key={tier.id}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "relative rounded-xl flex flex-col",
              tier.highlighted
                ? "bg-brand-surface border-2 border-brand-gold"
                : "bg-brand-surface border border-white/5"
            )}
            style={{ padding: "2.5rem" }}
          >
            {tier.highlighted && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-black font-mono text-xs uppercase tracking-[0.2em] rounded-full" style={{ paddingLeft: "1rem", paddingRight: "1rem", paddingTop: "0.375rem", paddingBottom: "0.375rem" }}>
                Most Popular
              </span>
            )}

            <h3 className="font-heading text-2xl uppercase tracking-wider" style={{ marginBottom: "0.75rem" }}>
              {tier.name}
            </h3>
            <p className="text-brand-muted text-sm" style={{ marginBottom: "1.5rem" }}>{tier.description}</p>

            <div style={{ marginBottom: "2rem" }}>
              <span className="font-heading text-5xl text-brand-white">
                &pound;{tier.price}
              </span>
              <span className="text-brand-muted text-sm" style={{ marginLeft: "0.5rem" }}>
                /{tier.period}
              </span>
            </div>

            <ul className="flex-1" style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2rem" }}>
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start" style={{ gap: "0.75rem" }}>
                  <Check
                    size={16}
                    className={cn(
                      "flex-shrink-0",
                      tier.highlighted ? "text-brand-gold" : "text-brand-muted"
                    )}
                    style={{ marginTop: "0.125rem" }}
                    aria-hidden="true"
                  />
                  <span className="text-brand-white/90 text-sm">{feature}</span>
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
          </motion.div>
        ))}
      </motion.div>

      <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
        <Button href="/membership" variant="text">
          View full comparison &rarr;
        </Button>
      </div>
    </section>
  );
}
