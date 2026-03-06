import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

const pageTitle = "Privacy Policy";
const pageDescription =
  "FORGE GYM privacy policy. Learn how we collect, use, and protect your personal data in compliance with UK GDPR, including your rights and cookie preferences.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/privacy/" },
  openGraph: { title: pageTitle, description: pageDescription, images: [{ url: "https://forgegym.co.uk/images/og-image.png", width: 1200, height: 630, alt: "FORGE GYM — Built to Push. Built to Last." }] },
  twitter: { title: pageTitle, description: pageDescription, card: "summary_large_image", images: ["https://forgegym.co.uk/images/og-image.png"] },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="section-padding bg-brand-black" style={{ paddingTop: "10rem", paddingBottom: "5rem" }}>
        <div style={{ maxWidth: "48rem", marginLeft: "auto", marginRight: "auto" }}>
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "0.75rem" }}>
            Legal
          </span>
          <h1 className="font-heading text-5xl md:text-6xl uppercase tracking-tight" style={{ marginBottom: "3rem" }}>
            Privacy Policy
          </h1>

          <div className="prose prose-invert prose-sm text-brand-white/90" style={{ maxWidth: "none", display: "flex", flexDirection: "column", gap: "2rem", lineHeight: "1.75" }}>
            <p className="text-brand-muted text-sm font-mono">
              Last updated: February 2026
            </p>

            <section>
              <h2 className="font-heading text-xl uppercase tracking-wide text-brand-white" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                1. Information We Collect
              </h2>
              <p>
                When you sign up for a free trial, membership, or contact us, we
                may collect your name, email address, phone number, and payment
                information. We also collect usage data through cookies to improve
                your experience on our website.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl uppercase tracking-wide text-brand-white" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                2. How We Use Your Data
              </h2>
              <p>
                We use your personal data to provide our fitness services, process
                payments, communicate about your membership, and improve our
                offerings. We never sell your data to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl uppercase tracking-wide text-brand-white" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                3. Data Protection
              </h2>
              <p>
                We implement appropriate technical and organisational measures to
                protect your personal data against unauthorised access, alteration,
                disclosure, or destruction. All payment processing is handled
                through PCI-compliant third-party providers.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl uppercase tracking-wide text-brand-white" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                4. Your Rights
              </h2>
              <p>
                Under UK GDPR, you have the right to access, rectify, or delete
                your personal data. You can also object to processing or request
                data portability. To exercise these rights, contact us at{" "}
                <a
                  href="mailto:privacy@forgegym.co.uk"
                  className="text-brand-gold hover:underline focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
                >
                  privacy@forgegym.co.uk
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl uppercase tracking-wide text-brand-white" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                5. Cookies
              </h2>
              <p>
                We use essential cookies to ensure our website functions correctly,
                and analytics cookies to understand how visitors use our site. You
                can manage your cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl uppercase tracking-wide text-brand-white" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                6. Contact
              </h2>
              <p>
                For any questions about this privacy policy, please contact us at{" "}
                <a
                  href="mailto:privacy@forgegym.co.uk"
                  className="text-brand-gold hover:underline focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
                >
                  privacy@forgegym.co.uk
                </a>{" "}
                or write to FORGE GYM, 123 Forge Street, London, EC2A 4NE.
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
