"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { pricingTiers } from "@/data/pricing";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

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
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto"
      >
        {pricingTiers.map((tier) => (
          <motion.div
            key={tier.id}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "relative rounded-xl p-8 flex flex-col",
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

            <h3 className="font-heading text-2xl uppercase tracking-wider mb-2">
              {tier.name}
            </h3>
            <p className="text-brand-muted text-sm mb-6">{tier.description}</p>

            <div className="mb-8">
              <span className="font-heading text-5xl text-brand-white">
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
                      tier.highlighted ? "text-brand-gold" : "text-brand-muted"
                    )}
                  />
                  <span className="text-brand-white/80 text-sm">{feature}</span>
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

      <div className="text-center mt-10">
        <Button href="/membership" variant="text">
          View full comparison &rarr;
        </Button>
      </div>
    </section>
  );
}
