"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Check, Target, TrendingUp, Users, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SkeletonCard } from "@/components/ui/Skeleton";
import { ptPackages } from "@/data/pt-packages";
import { trainers } from "@/data/trainers";

const benefits = [
  { icon: Target, title: "Personalised Programming", description: "Every session is tailored to your goals, ability, and progress. No generic templates." },
  { icon: TrendingUp, title: "Faster Results", description: "Research shows PT clients achieve goals 30% faster than training alone." },
  { icon: Users, title: "Expert Accountability", description: "Your coach tracks your progress, adjusts your plan, and keeps you on track." },
  { icon: Zap, title: "Technique Mastery", description: "Learn to move correctly from day one. Better form means better results and fewer injuries." },
];

const steps = [
  { num: "01", title: "Book a Free Consultation", description: "Meet your coach, discuss your goals, and get a feel for how we work." },
  { num: "02", title: "Assessment & Planning", description: "Full fitness assessment, movement screening, and bespoke programme design." },
  { num: "03", title: "Train with Purpose", description: "Structured, coached sessions with progressive overload and real-time feedback." },
  { num: "04", title: "Review & Evolve", description: "Regular progress reviews to adjust your programme as you grow stronger." },
];

export default function PersonalTrainingPage() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=1920&q=80"
          alt="Personal training session at FORGE GYM"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
        <div className="relative z-10 section-padding" style={{ paddingBottom: "3rem" }}>
          <Breadcrumbs items={[{ label: "Personal Training" }]} />
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "0.75rem" }}>
            1-to-1 Coaching
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight">
            Personal Training
          </h1>
        </div>
      </section>

      {/* Why PT */}
      <section className="section-padding bg-brand-black">
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "1rem" }}>
                Why Personal Training?
              </span>
              <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight">
                Your Goals. Your Coach. Your Programme.
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "2rem" }}>
            {benefits.map((b, i) => (
              <AnimateOnScroll key={b.title} delay={i * 0.1}>
                <div className="bg-brand-surface rounded-xl border border-white/5 flex" style={{ padding: "2rem", gap: "1.5rem" }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center">
                    <b.icon size={22} className="text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl uppercase tracking-wide" style={{ marginBottom: "0.5rem" }}>
                      {b.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section-padding bg-brand-dark">
        <div style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "1rem" }}>
                Packages
              </span>
              <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight">
                Choose Your Level
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1.5rem" }}>
            {!hydrated ? (
              Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
            ) : ptPackages.map((pkg, i) => (
              <AnimateOnScroll key={pkg.id} delay={i * 0.1}>
                <div
                  className={cn(
                    "relative rounded-xl flex flex-col h-full",
                    pkg.highlighted
                      ? "bg-brand-surface border-2 border-brand-gold"
                      : "bg-brand-surface border border-white/5"
                  )}
                  style={{ padding: "2rem" }}
                >
                  {pkg.highlighted && (
                    <span className="absolute left-1/2 -translate-x-1/2 bg-brand-gold text-brand-black font-mono text-xs uppercase tracking-[0.2em] rounded-full" style={{ top: "-0.875rem", paddingLeft: "1rem", paddingRight: "1rem", paddingTop: "0.375rem", paddingBottom: "0.375rem" }}>
                      Most Popular
                    </span>
                  )}

                  <h3 className="font-heading text-3xl uppercase tracking-wider" style={{ marginBottom: "0.5rem" }}>
                    {pkg.name}
                  </h3>
                  <p className="text-brand-muted text-sm" style={{ marginBottom: "1.5rem" }}>
                    {pkg.description}
                  </p>

                  <div style={{ marginBottom: "2rem" }}>
                    <span className="font-heading text-6xl text-brand-white">
                      &pound;{pkg.price}
                    </span>
                    <span className="text-brand-muted text-sm" style={{ marginLeft: "0.5rem" }}>
                      /{pkg.sessions} sessions
                    </span>
                  </div>

                  <ul className="flex flex-col flex-1" style={{ gap: "0.75rem", marginBottom: "2rem" }}>
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start" style={{ gap: "0.75rem" }}>
                        <Check
                          size={16}
                          className={cn(
                            "flex-shrink-0",
                            pkg.highlighted ? "text-brand-gold" : "text-brand-muted"
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
                    href="/contact"
                    variant={pkg.highlighted ? "primary" : "ghost"}
                    className="w-full"
                  >
                    ENQUIRE NOW
                  </Button>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer grid */}
      <section className="section-padding bg-brand-black">
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "1rem" }}>
                Your Coaches
              </span>
              <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight">
                Meet the Team
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "1.5rem" }}>
            {trainers.map((trainer, i) => (
              <AnimateOnScroll key={trainer.id} delay={i * 0.1} variant="scaleUp">
                <div className="group relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0" style={{ padding: "1.25rem" }}>
                    <h3 className="font-heading text-lg uppercase tracking-wide">
                      {trainer.name}
                    </h3>
                    <p className="font-mono text-xs text-brand-gold">
                      {trainer.specialty}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-brand-dark">
        <div style={{ maxWidth: "48rem", marginLeft: "auto", marginRight: "auto" }}>
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "1rem" }}>
                The Process
              </span>
              <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight">
                How It Works
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="flex flex-col" style={{ gap: "2rem" }}>
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.num} delay={i * 0.1}>
                <div className="flex" style={{ gap: "1.5rem" }}>
                  <span className="font-heading text-4xl text-brand-gold/20 flex-shrink-0" style={{ minWidth: "3rem" }}>
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl uppercase tracking-wide" style={{ marginBottom: "0.5rem" }}>
                      {step.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
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
            Start Today
          </span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight" style={{ marginBottom: "1.5rem" }}>
            Ready to Get Started?
          </h2>
          <p className="text-brand-muted text-lg" style={{ marginBottom: "2rem", maxWidth: "32rem", marginLeft: "auto", marginRight: "auto" }}>
            Book a free consultation with one of our coaches and find the right
            package for your goals.
          </p>
          <Button href="/contact" variant="primary" size="large">
            BOOK A CONSULTATION
          </Button>
        </AnimateOnScroll>
      </section>
    </>
  );
}
