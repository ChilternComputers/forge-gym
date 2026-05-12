import Image from "next/image";
import type { Metadata } from "next";
import { Target, Heart, Flame, Users } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CountUp } from "@/components/ui/CountUp";
import { Button } from "@/components/ui/Button";

const pageTitle = "About Us";
const pageDescription =
  "The story behind FORGE GYM. Built by fitness obsessives who believe premium coaching and world-class facilities should be the standard, not the exception.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/about/" },
  openGraph: { title: pageTitle, description: pageDescription, images: [{ url: "https://forgegym.co.uk/images/og-image.png", width: 1200, height: 630, alt: "FORGE GYM — Built to Push. Built to Last." }] },
  twitter: { title: pageTitle, description: pageDescription, card: "summary_large_image", images: ["https://forgegym.co.uk/images/og-image.png"] },
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
  { value: 500, suffix: "+", label: "Active Members" },
  { value: 4, suffix: "", label: "World-Class Coaches" },
  { value: 98, suffix: "%", label: "Class Return Rate" },
  { value: 6, suffix: "", label: "Class Types" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <Image
          src="/images/unsplash/1577221084712-45b0445d2b00.webp"
          alt="FORGE GYM interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
        <div className="relative z-10 section-padding" style={{ paddingBottom: "3rem" }}>
          <Breadcrumbs items={[{ label: "About" }]} />
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "0.75rem" }}>
            Our Story
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight">
            About Forge
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-brand-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto", gap: "3rem" }}>
          <AnimateOnScroll variant="slideLeft">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/unsplash/1584735935682-2f2b69dff9d2.webp"
                alt="Inside FORGE GYM"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="slideRight">
            <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "1rem" }}>
              The Beginning
            </span>
            <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight leading-[0.95]" style={{ marginBottom: "1.5rem" }}>
              We Built the Gym
              <br />
              <span className="text-gradient">We Always Wanted</span>
            </h2>
            <div className="flex flex-col text-brand-white/90 text-lg leading-relaxed" style={{ gap: "1rem" }}>
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
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto", gap: "2rem" }}>
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 0.1}>
              <div style={{ textAlign: "center" }}>
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  duration={2000}
                  className="font-heading text-5xl md:text-6xl text-gradient block"
                  style={{ marginBottom: "0.5rem" }}
                />
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
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "1rem" }}>
                What We Stand For
              </span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight">
                Our Values
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "2rem" }}>
            {values.map((value, i) => (
              <AnimateOnScroll key={value.title} delay={i * 0.1}>
                <div className="bg-brand-surface rounded-xl border border-white/5 flex" style={{ padding: "2rem", gap: "1.5rem" }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center">
                    <value.icon size={22} className="text-brand-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl uppercase tracking-wide" style={{ marginBottom: "0.5rem" }}>
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
      <section className="section-padding bg-brand-dark" style={{ textAlign: "center" }}>
        <AnimateOnScroll>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "1rem" }}>
            Your Move
          </span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight" style={{ marginBottom: "1.5rem" }}>
            Come See for Yourself
          </h2>
          <p className="text-brand-muted text-lg" style={{ marginBottom: "2rem", maxWidth: "32rem", marginLeft: "auto", marginRight: "auto" }}>
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
