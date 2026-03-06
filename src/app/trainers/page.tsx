import Image from "next/image";
import type { Metadata } from "next";
import { Instagram } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { trainers } from "@/data/trainers";

const pageTitle = "Our Trainers";
const pageDescription =
  "Meet the world-class coaches at FORGE GYM. Certified experts in strength, HIIT, reformer pilates, and boxing — dedicated to helping you reach your goals.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/trainers/" },
  openGraph: { title: pageTitle, description: pageDescription, images: [{ url: "https://forgegym.co.uk/images/og-image.png", width: 1200, height: 630, alt: "FORGE GYM — Built to Push. Built to Last." }] },
  twitter: { title: pageTitle, description: pageDescription, card: "summary_large_image", images: ["https://forgegym.co.uk/images/og-image.png"] },
};

export default function TrainersPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80"
          alt="FORGE GYM trainers"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
        <div className="relative z-10 section-padding" style={{ paddingBottom: "3rem" }}>
          <Breadcrumbs items={[{ label: "Trainers" }]} />
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "0.75rem" }}>
            The Team
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight">
            Meet Your Coaches
          </h1>
        </div>
      </section>

      {/* Trainer profiles */}
      <section className="section-padding bg-brand-black">
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto", display: "flex", flexDirection: "column", gap: "5rem" }}>
          {trainers.map((trainer, i) => (
            <AnimateOnScroll
              key={trainer.id}
              variant={i % 2 === 0 ? "slideLeft" : "slideRight"}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 items-center ${
                  i % 2 !== 0 ? "lg:direction-rtl" : ""
                }`}
                style={{ gap: "3rem" }}
              >
                {/* Image */}
                <div
                  className={`relative aspect-[3/4] rounded-lg overflow-hidden ${
                    i % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "0.75rem" }}>
                    {trainer.role}
                  </span>
                  <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight" style={{ marginBottom: "0.5rem" }}>
                    {trainer.name}
                  </h2>
                  <p className="font-mono text-sm text-brand-gold" style={{ marginBottom: "1.5rem" }}>
                    {trainer.specialty}
                  </p>
                  <p className="text-brand-white/90 text-lg leading-relaxed" style={{ marginBottom: "2rem" }}>
                    {trainer.bio}
                  </p>

                  {/* Certifications */}
                  <div style={{ marginBottom: "2rem" }}>
                    <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-brand-muted" style={{ marginBottom: "0.75rem" }}>
                      Certifications
                    </h3>
                    <div className="flex flex-wrap" style={{ gap: "0.5rem" }}>
                      {trainer.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="font-mono text-xs uppercase tracking-wider bg-brand-surface border border-white/5 text-brand-white/90 rounded-full"
                          style={{ paddingLeft: "0.75rem", paddingRight: "0.75rem", paddingTop: "0.375rem", paddingBottom: "0.375rem" }}
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center" style={{ gap: "1rem" }}>
                    <Button href={`/free-trial?class=${encodeURIComponent(trainer.specialty.split(" ")[0].toLowerCase())}`} variant="primary">
                      BOOK A SESSION
                    </Button>
                    {trainer.instagram && (
                      <a
                        href={`https://instagram.com/${trainer.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-brand-gold hover:text-brand-gold-light font-mono text-sm transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
                        style={{ gap: "0.5rem" }}
                      >
                        <Instagram size={18} />@{trainer.instagram}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
      {/* CTA */}
      <section className="section-padding bg-brand-dark" style={{ textAlign: "center" }}>
        <AnimateOnScroll>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "1rem" }}>
            Ready?
          </span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight" style={{ marginBottom: "1.5rem" }}>
            Train With the Best
          </h2>
          <p className="text-brand-muted text-lg" style={{ marginBottom: "2rem", maxWidth: "32rem", marginLeft: "auto", marginRight: "auto" }}>
            Book a free session with one of our coaches and experience the FORGE difference.
          </p>
          <Button href="/free-trial" variant="primary" size="large">
            START YOUR FREE TRIAL
          </Button>
        </AnimateOnScroll>
      </section>
    </>
  );
}
