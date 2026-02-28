import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "FORGE GYM privacy policy. How we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-36 pb-20 section-padding bg-brand-black">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold mb-3 block">
            Legal
          </span>
          <h1 className="font-heading text-5xl md:text-6xl uppercase tracking-tight mb-12">
            Privacy Policy
          </h1>

          <div className="prose prose-invert prose-sm max-w-none space-y-8 text-brand-white/80 leading-relaxed">
            <p className="text-brand-muted text-sm font-mono">
              Last updated: February 2026
            </p>

            <section>
              <h2 className="font-heading text-xl uppercase tracking-wide text-brand-white mt-8 mb-4">
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
              <h2 className="font-heading text-xl uppercase tracking-wide text-brand-white mt-8 mb-4">
                2. How We Use Your Data
              </h2>
              <p>
                We use your personal data to provide our fitness services, process
                payments, communicate about your membership, and improve our
                offerings. We never sell your data to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl uppercase tracking-wide text-brand-white mt-8 mb-4">
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
              <h2 className="font-heading text-xl uppercase tracking-wide text-brand-white mt-8 mb-4">
                4. Your Rights
              </h2>
              <p>
                Under UK GDPR, you have the right to access, rectify, or delete
                your personal data. You can also object to processing or request
                data portability. To exercise these rights, contact us at{" "}
                <a
                  href="mailto:privacy@forgegym.co.uk"
                  className="text-brand-gold hover:underline"
                >
                  privacy@forgegym.co.uk
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl uppercase tracking-wide text-brand-white mt-8 mb-4">
                5. Cookies
              </h2>
              <p>
                We use essential cookies to ensure our website functions correctly,
                and analytics cookies to understand how visitors use our site. You
                can manage your cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl uppercase tracking-wide text-brand-white mt-8 mb-4">
                6. Contact
              </h2>
              <p>
                For any questions about this privacy policy, please contact us at{" "}
                <a
                  href="mailto:privacy@forgegym.co.uk"
                  className="text-brand-gold hover:underline"
                >
                  privacy@forgegym.co.uk
                </a>{" "}
                or write to FORGE GYM, 123 Forge Street, London, EC2A 4NE.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
