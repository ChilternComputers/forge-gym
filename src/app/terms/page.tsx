import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

const pageTitle = "Terms & Conditions";
const pageDescription =
  "FORGE GYM terms and conditions. Membership terms, facility use, payment and cancellation policy, liability, and governing law for all members.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/terms/" },
  openGraph: { title: pageTitle, description: pageDescription, images: [{ url: "https://forgegym.co.uk/images/og-image.png", width: 1200, height: 630, alt: "FORGE GYM — Built to Push. Built to Last." }] },
  twitter: { title: pageTitle, description: pageDescription, card: "summary_large_image", images: ["https://forgegym.co.uk/images/og-image.png"] },
};

export default function TermsPage() {
  return (
    <>
      <section className="section-padding bg-brand-black" style={{ paddingTop: "10rem", paddingBottom: "5rem" }}>
        <div style={{ maxWidth: "48rem", marginLeft: "auto", marginRight: "auto" }}>
          <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "0.75rem" }}>
            Legal
          </span>
          <h1 className="font-heading text-5xl md:text-6xl uppercase tracking-tight" style={{ marginBottom: "3rem" }}>
            Terms &amp; Conditions
          </h1>

          <div className="prose prose-invert prose-sm text-brand-white/90" style={{ maxWidth: "none", display: "flex", flexDirection: "column", gap: "2rem", lineHeight: "1.75" }}>
            <p className="text-brand-muted text-sm font-mono">
              Last updated: February 2026
            </p>

            <section>
              <h2 className="font-heading text-xl uppercase tracking-wide text-brand-white" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the FORGE GYM website and facilities, you
                agree to be bound by these Terms &amp; Conditions. If you do not agree
                with any part of these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl uppercase tracking-wide text-brand-white" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                2. Membership Terms
              </h2>
              <p>
                Membership is subject to completion of our registration process
                and acceptance by FORGE GYM. Members must be at least 16 years of
                age, or 14 with parental consent. Membership is personal and
                non-transferable. We reserve the right to refuse or revoke
                membership at our discretion.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl uppercase tracking-wide text-brand-white" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                3. Facility Use
              </h2>
              <p>
                Members must follow all posted rules, safety guidelines, and
                instructions from staff at all times. Appropriate athletic attire
                and clean indoor trainers are required in all training areas.
                Equipment must be wiped down after use and returned to its
                designated location. FORGE GYM reserves the right to restrict
                access to facilities for maintenance, events, or safety reasons.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl uppercase tracking-wide text-brand-white" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                4. Payment &amp; Cancellation
              </h2>
              <p>
                Membership fees are billed monthly in advance on the date of
                sign-up. You may cancel your membership at any time by giving 30
                days&apos; written notice. Cancellations can be submitted via email to{" "}
                <a
                  href="mailto:hello@forgegym.co.uk"
                  className="text-brand-gold underline hover:text-brand-gold-light focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
                >
                  hello@forgegym.co.uk
                </a>{" "}
                or in person at reception. Refunds are not provided for partial
                billing periods. We reserve the right to adjust membership fees
                with 30 days&apos; notice.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl uppercase tracking-wide text-brand-white" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                5. Liability
              </h2>
              <p>
                You use FORGE GYM facilities and participate in classes at your
                own risk. We recommend consulting a medical professional before
                beginning any new exercise programme. FORGE GYM shall not be
                liable for any personal injury, loss, or damage to property except
                where caused by our negligence. We strongly advise against leaving
                valuables in changing areas; lockers are provided for your
                convenience.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl uppercase tracking-wide text-brand-white" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                6. Governing Law
              </h2>
              <p>
                These terms are governed by and construed in accordance with the
                laws of England and Wales. Any disputes shall be subject to the
                exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl uppercase tracking-wide text-brand-white" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                7. Contact
              </h2>
              <p>
                For any questions about these terms, please contact us at{" "}
                <a
                  href="mailto:hello@forgegym.co.uk"
                  className="text-brand-gold underline hover:text-brand-gold-light focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
                >
                  hello@forgegym.co.uk
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
