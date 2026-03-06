import type { Metadata } from "next";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CountUp } from "@/components/ui/CountUp";
import { transformations } from "@/data/transformations";

const pageTitle = "Success Stories";
const pageDescription =
  "Real transformations from real FORGE GYM members. See how expert coaching and dedication deliver life-changing fitness results with before-and-after stories.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/transformations/" },
  openGraph: { title: pageTitle, description: pageDescription, images: [{ url: "https://forgegym.co.uk/images/og-image.png", width: 1200, height: 630, alt: "FORGE GYM — Built to Push. Built to Last." }] },
  twitter: { title: pageTitle, description: pageDescription, card: "summary_large_image", images: ["https://forgegym.co.uk/images/og-image.png"] },
};

const aggregateStats = [
  { value: 4, suffix: "", label: "Members Featured" },
  { value: 127, suffix: "kg", label: "Fat Lost Combined" },
  { value: 36, suffix: "", label: "Avg. Weeks" },
  { value: 100, suffix: "%", label: "Would Recommend" },
];

export default function TransformationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-brand-black" style={{ paddingTop: "10rem", paddingBottom: "3rem" }}>
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <Breadcrumbs items={[{ label: "Transformations" }]} />
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "0.75rem" }}>
            Success Stories
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight" style={{ marginBottom: "1rem" }}>
            Real Results
          </h1>
          <p className="text-brand-muted text-lg" style={{ maxWidth: "36rem" }}>
            These members showed up, put in the work, and trusted the process.
            Their stories speak for themselves.
          </p>
        </div>
      </section>

      {/* Aggregate stats */}
      <section className="section-padding bg-brand-dark">
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto", gap: "2rem" }}>
          {aggregateStats.map((stat, i) => (
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

      {/* Transformation cards */}
      <section className="section-padding bg-brand-black">
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto", display: "flex", flexDirection: "column", gap: "5rem" }}>
          {transformations.map((t, i) => (
            <AnimateOnScroll
              key={t.id}
              variant={i % 2 === 0 ? "slideLeft" : "slideRight"}
            >
              <div
                className="grid grid-cols-1 lg:grid-cols-2 items-center"
                style={{ gap: "3rem" }}
              >
                {/* Image */}
                <div
                  className={`relative aspect-[3/4] rounded-lg overflow-hidden ${
                    i % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "0.75rem" }}>
                    {t.duration} Transformation
                  </span>
                  <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight" style={{ marginBottom: "0.25rem" }}>
                    {t.name}
                  </h2>
                  <p className="font-mono text-xs text-brand-muted" style={{ marginBottom: "1.5rem" }}>
                    Age {t.age} &middot; {t.membership}
                  </p>

                  <blockquote className="text-xl text-brand-white/90 italic" style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <p className="text-brand-white/80 leading-relaxed" style={{ marginBottom: "2rem" }}>
                    {t.story}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3" style={{ gap: "1rem", marginBottom: "2rem" }}>
                    {t.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-brand-surface rounded-lg border border-white/5"
                        style={{ padding: "1rem", textAlign: "center" }}
                      >
                        <span className="font-mono text-xs uppercase tracking-[0.1em] text-brand-muted block" style={{ marginBottom: "0.5rem" }}>
                          {stat.label}
                        </span>
                        <div className="flex items-center justify-center" style={{ gap: "0.5rem" }}>
                          <span className="text-brand-muted text-sm line-through">
                            {stat.before}
                          </span>
                          <span className="text-brand-gold font-heading text-lg">
                            {stat.after}
                          </span>
                        </div>
                      </div>
                    ))}
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
            Your Turn
          </span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight" style={{ marginBottom: "1.5rem" }}>
            Write Your Own Story
          </h2>
          <p className="text-brand-muted text-lg" style={{ marginBottom: "2rem", maxWidth: "32rem", marginLeft: "auto", marginRight: "auto" }}>
            Every transformation starts with a single session. Book your free
            trial and discover what you&apos;re capable of.
          </p>
          <Button href="/free-trial" variant="primary" size="large">
            START YOUR FREE TRIAL
          </Button>
        </AnimateOnScroll>
      </section>
    </>
  );
}
