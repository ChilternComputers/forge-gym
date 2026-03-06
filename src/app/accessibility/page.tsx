import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

const pageTitle = "Accessibility Statement";
const pageDescription =
  "FORGE GYM accessibility statement. Our commitment to WCAG 2.1 AA compliance and making our website and gym facilities accessible and inclusive for everyone.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/accessibility/" },
  openGraph: { title: pageTitle, description: pageDescription, images: [{ url: "https://forgegym.co.uk/images/og-image.png", width: 1200, height: 630, alt: "FORGE GYM — Built to Push. Built to Last." }] },
  twitter: { title: pageTitle, description: pageDescription, card: "summary_large_image", images: ["https://forgegym.co.uk/images/og-image.png"] },
};

export default function AccessibilityPage() {
  return (
    <>
      <section className="section-padding bg-brand-black" style={{ paddingTop: "10rem", paddingBottom: "5rem" }}>
        <div style={{ maxWidth: "48rem", marginLeft: "auto", marginRight: "auto" }}>
          <Breadcrumbs items={[{ label: "Accessibility" }]} />
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "0.75rem" }}>
            Accessibility
          </span>
          <h1 className="font-heading text-5xl md:text-6xl uppercase tracking-tight" style={{ marginBottom: "3rem" }}>
            Accessibility Statement
          </h1>

          <div className="prose prose-invert prose-sm text-brand-white/90" style={{ maxWidth: "none", display: "flex", flexDirection: "column", gap: "2rem", lineHeight: "1.75" }}>
            <p className="text-brand-muted text-sm font-mono">
              Last updated: March 2026
            </p>

            <section>
              <h2 className="font-heading text-xl uppercase tracking-wide text-brand-white" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                Our Commitment
              </h2>
              <p>
                FORGE GYM is committed to ensuring digital accessibility for
                people with disabilities. We are continually improving the user
                experience for everyone and applying the relevant accessibility
                standards to ensure we provide equal access to all users.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl uppercase tracking-wide text-brand-white" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                Accessibility Features
              </h2>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", paddingLeft: "1.25rem", listStyleType: "disc" }}>
                <li>Semantic HTML for screen reader compatibility</li>
                <li>Skip-to-content link for keyboard navigation</li>
                <li>ARIA labels on all interactive elements</li>
                <li>Sufficient colour contrast ratios throughout</li>
                <li>Fully keyboard-navigable interface</li>
                <li>Descriptive alt text on all images</li>
                <li>Respects prefers-reduced-motion settings</li>
                <li>Responsive design for all device sizes</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl uppercase tracking-wide text-brand-white" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                Standards
              </h2>
              <p>
                We aim to conform to the Web Content Accessibility Guidelines
                (WCAG) 2.1 at Level AA. These guidelines explain how to make web
                content more accessible to people with a wide range of
                disabilities, including visual, auditory, physical, speech,
                cognitive, language, learning, and neurological disabilities.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl uppercase tracking-wide text-brand-white" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                Feedback &amp; Contact
              </h2>
              <p>
                We welcome your feedback on the accessibility of the FORGE GYM
                website. If you encounter any accessibility barriers or have
                suggestions for improvement, please contact us:
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", paddingLeft: "1.25rem", listStyleType: "disc", marginTop: "1rem" }}>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:hello@forgegym.co.uk"
                    className="text-brand-gold hover:underline focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
                  >
                    hello@forgegym.co.uk
                  </a>
                </li>
                <li>Phone: 020 1234 5678</li>
                <li>Address: FORGE GYM, 123 Forge Street, London, EC2A 4NE</li>
              </ul>
              <p style={{ marginTop: "1rem" }}>
                We aim to respond to accessibility feedback within 5 working
                days and to resolve issues within 30 working days.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-dark" style={{ textAlign: "center" }}>
        <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "1rem" }}>
          Back to Training
        </span>
        <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight" style={{ marginBottom: "1.5rem" }}>
          Ready to Train?
        </h2>
        <p className="text-brand-muted text-lg" style={{ marginBottom: "2rem", maxWidth: "32rem", marginLeft: "auto", marginRight: "auto" }}>
          Now that the legal stuff is covered, get back to what matters.
        </p>
        <Button href="/free-trial" variant="primary" size="large">
          START YOUR FREE TRIAL
        </Button>
      </section>
    </>
  );
}
