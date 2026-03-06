"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase, Heart, TrendingUp, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { positions } from "@/data/careers";

const perks = [
  { icon: Briefcase, title: "Free Membership", description: "Full unlimited access to FORGE for all staff." },
  { icon: Heart, title: "Wellness Budget", description: "Annual budget for CPD, courses, and health-related expenses." },
  { icon: TrendingUp, title: "Career Growth", description: "Mentorship, internal promotions, and ongoing development." },
  { icon: Users, title: "Team Culture", description: "Work with passionate people who love what they do." },
];

export default function CareersPage() {
  const [openPosition, setOpenPosition] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-brand-black" style={{ paddingTop: "10rem", paddingBottom: "3rem" }}>
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <Breadcrumbs items={[{ label: "Careers" }]} />
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "0.75rem" }}>
            Join the Team
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight" style={{ marginBottom: "1rem" }}>
            Careers at Forge
          </h1>
          <p className="text-brand-muted text-lg" style={{ maxWidth: "36rem" }}>
            We&apos;re building something special. If you&apos;re passionate about
            fitness and helping others reach their potential, we want to hear
            from you.
          </p>
        </div>
      </section>

      {/* Why work here */}
      <section className="section-padding bg-brand-black" style={{ paddingTop: "2rem" }}>
        <div style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "1rem" }}>
                Perks
              </span>
              <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight">
                Why Work Here?
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "2rem" }}>
            {perks.map((perk, i) => (
              <AnimateOnScroll key={perk.title} delay={i * 0.1}>
                <div className="bg-brand-surface rounded-xl border border-white/5 flex" style={{ padding: "2rem", gap: "1.5rem" }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center">
                    <perk.icon size={22} className="text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl uppercase tracking-wide" style={{ marginBottom: "0.5rem" }}>
                      {perk.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      {perk.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-brand-dark">
        <div style={{ maxWidth: "48rem", marginLeft: "auto", marginRight: "auto" }}>
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "1rem" }}>
                Open Roles
              </span>
              <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight">
                Current Openings
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="flex flex-col" style={{ gap: "0.75rem" }}>
            {positions.map((pos, i) => (
              <AnimateOnScroll key={pos.id} delay={i * 0.05}>
                <div className="border border-white/5 rounded-lg overflow-hidden">
                  <button
                    id={`position-button-${pos.id}`}
                    onClick={() => setOpenPosition(openPosition === i ? null : i)}
                    aria-expanded={openPosition === i}
                    aria-controls={`position-panel-${pos.id}`}
                    className="w-full flex items-center justify-between text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none"
                    style={{ padding: "1.25rem", minHeight: "44px" }}
                  >
                    <div>
                      <span className="font-heading text-lg uppercase tracking-wide text-brand-white block">
                        {pos.title}
                      </span>
                      <span className="font-mono text-xs text-brand-muted" style={{ marginTop: "0.25rem", display: "block" }}>
                        {pos.type} &middot; {pos.department}
                      </span>
                    </div>
                    <ChevronDown
                      size={18}
                      className={cn(
                        "text-brand-gold flex-shrink-0 transition-transform duration-300",
                        openPosition === i && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {openPosition === i && (
                      <motion.div
                        id={`position-panel-${pos.id}`}
                        role="region"
                        aria-labelledby={`position-button-${pos.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div style={{ paddingLeft: "1.25rem", paddingRight: "1.25rem", paddingBottom: "1.5rem" }}>
                          <p className="text-brand-white/90 text-sm leading-relaxed" style={{ marginBottom: "1rem" }}>
                            {pos.description}
                          </p>
                          <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-brand-gold" style={{ marginBottom: "0.75rem" }}>
                            Requirements
                          </h4>
                          <ul style={{ display: "flex", flexDirection: "column", gap: "0.375rem", marginBottom: "1.5rem" }}>
                            {pos.requirements.map((req) => (
                              <li key={req} className="text-brand-muted text-sm flex items-start" style={{ gap: "0.5rem" }}>
                                <span className="text-brand-gold flex-shrink-0">&bull;</span>
                                {req}
                              </li>
                            ))}
                          </ul>
                          <a
                            href={`mailto:careers@forgegym.co.uk?subject=Application: ${pos.title}`}
                            className="inline-flex items-center font-mono text-xs uppercase tracking-[0.1em] bg-brand-gold text-brand-black rounded-full hover:bg-brand-gold-light transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none"
                            style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem", paddingTop: "0.625rem", paddingBottom: "0.625rem" }}
                          >
                            APPLY NOW
                          </a>
                        </div>
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
            Get in Touch
          </span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight" style={{ marginBottom: "1.5rem" }}>
            Don&apos;t See Your Role?
          </h2>
          <p className="text-brand-muted text-lg" style={{ marginBottom: "2rem", maxWidth: "32rem", marginLeft: "auto", marginRight: "auto" }}>
            We&apos;re always looking for talented people. Send us your CV and tell
            us why you&apos;d be a great fit.
          </p>
          <Button href="mailto:careers@forgegym.co.uk" variant="primary" size="large">
            SEND YOUR CV
          </Button>
        </AnimateOnScroll>
      </section>
    </>
  );
}
