import Image from "next/image";
import type { Metadata } from "next";
import { Target, Heart, Flame, Users } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind FORGE GYM. Built by fitness obsessives who believe premium training should be the standard, not the exception.",
};

const values = [
  {
    icon: Flame,
    title: "Intensity with Intent",
    description:
      "Every session is designed with purpose. No filler reps, no wasted time. Just intelligent programming that delivers results.",
  },
  {
    icon: Users,
    title: "Community Over Competition",
    description:
      "We push each other, not against each other. FORGE is a team — from first-timers to seasoned athletes, everyone belongs.",
  },
  {
    icon: Target,
    title: "Precision Coaching",
    description:
      "Our coaches don't just count reps. They correct form, adjust loads, and hold you accountable to your goals.",
  },
  {
    icon: Heart,
    title: "Recovery Matters",
    description:
      "Training hard means recovering hard. Our cold plunge, sauna, and mobility sessions are part of the programme, not an afterthought.",
  },
];

const stats = [
  { number: "500+", label: "Active Members" },
  { number: "4", label: "World-Class Coaches" },
  { number: "98%", label: "Class Return Rate" },
  { number: "6", label: "Class Types" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1920&q=80"
          alt="FORGE GYM interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
        <div className="relative z-10 section-padding pb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold mb-3 block">
            Our Story
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight">
            About Forge
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-brand-black">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimateOnScroll variant="slideLeft">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80"
                alt="Inside FORGE GYM"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="slideRight">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold mb-4 block">
              The Beginning
            </span>
            <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight mb-6 leading-[0.95]">
              We Built the Gym
              <br />
              <span className="text-gradient">We Always Wanted</span>
            </h2>
            <div className="space-y-4 text-brand-white/80 text-lg leading-relaxed">
              <p>
                FORGE started with a simple frustration: every gym we joined was
                either too corporate, too crowded, or too careless about
                coaching quality.
              </p>
              <p>
                We wanted a space where the equipment was world-class, the
                coaches actually knew your name, and the programming was backed
                by science — not just thrown together.
              </p>
              <p>
                So we built it. FORGE is the gym we always wanted to train in.
                Premium without the pretension. Intense without the
                intimidation. A place where everyone — from complete beginners
                to competitive athletes — can push their limits in a supportive,
                expertly coached environment.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-brand-dark">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <span className="font-heading text-5xl md:text-6xl text-gradient block mb-2">
                  {stat.number}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-brand-muted">
                  {stat.label}
                </span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-brand-black">
        <div className="max-w-[1400px] mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold mb-4 block">
                What We Stand For
              </span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight">
                Our Values
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <AnimateOnScroll key={value.title} delay={i * 0.1}>
                <div className="bg-brand-surface rounded-xl p-8 border border-white/5 flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center">
                    <value.icon size={22} className="text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl uppercase tracking-wide mb-2">
                      {value.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-dark text-center">
        <AnimateOnScroll>
          <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight mb-6">
            Come See for Yourself
          </h2>
          <p className="text-brand-muted text-lg mb-8 max-w-lg mx-auto">
            The best way to understand FORGE is to experience it. Book your free
            trial and see what training with intent feels like.
          </p>
          <Button href="/free-trial" variant="primary" size="large">
            START YOUR FREE TRIAL
          </Button>
        </AnimateOnScroll>
      </section>
    </>
  );
}
