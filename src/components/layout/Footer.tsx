import Link from "next/link";
import { Instagram, Youtube, Facebook } from "lucide-react";
import { NewsletterSignup } from "@/components/ui/NewsletterSignup";

const trainingLinks = [
  { label: "Classes", href: "/classes" },
  { label: "Trainers", href: "/trainers" },
  { label: "Personal Training", href: "/personal-training" },
  { label: "Membership", href: "/membership" },
  { label: "Timetable", href: "/timetable" },
  { label: "Free Trial", href: "/free-trial" },
  { label: "Corporate", href: "/corporate" },
];

const exploreLinks = [
  { label: "Transformations", href: "/transformations" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const hours = [
  { day: "Monday — Friday", time: "05:30 — 22:00" },
  { day: "Saturday", time: "07:00 — 20:00" },
  { day: "Sunday", time: "08:00 — 18:00" },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5">
      <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto", paddingLeft: "1.5rem", paddingRight: "1.5rem", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5" style={{ gap: "3rem" }}>
          {/* Brand + Socials + Newsletter */}
          <div>
            <Link href="/" className="inline-block" style={{ marginBottom: "1.5rem" }}>
              <span className="font-heading text-3xl uppercase tracking-wider text-brand-white">
                FORGE
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-gold" style={{ marginLeft: "0.5rem" }}>
                GYM
              </span>
            </Link>
            <p className="text-brand-muted text-sm leading-relaxed" style={{ marginBottom: "1.5rem" }}>
              Built to push. Built to last. Premium fitness for those who demand
              more from themselves.
            </p>
            <div className="flex" style={{ gap: "1rem" }}>
              <a
                href="https://instagram.com/forgegym"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-muted hover:text-brand-gold transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded-full"
                style={{ minWidth: "44px", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
                aria-label="Instagram"
              >
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a
                href="https://youtube.com/forgegym"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-muted hover:text-brand-gold transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded-full"
                style={{ minWidth: "44px", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
                aria-label="YouTube"
              >
                <Youtube size={20} aria-hidden="true" />
              </a>
              <a
                href="https://facebook.com/forgegym"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-muted hover:text-brand-gold transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded-full"
                style={{ minWidth: "44px", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
                aria-label="Facebook"
              >
                <Facebook size={20} aria-hidden="true" />
              </a>
            </div>
            <NewsletterSignup variant="inline" />
          </div>

          {/* Training links */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold" style={{ marginBottom: "1.5rem" }}>
              Training
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {trainingLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-muted hover:text-brand-white text-sm transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore links */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold" style={{ marginBottom: "1.5rem" }}>
              Explore
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-muted hover:text-brand-white text-sm transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold" style={{ marginBottom: "1.5rem" }}>
              Contact
            </h3>
            <address className="not-italic text-sm text-brand-muted" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <p>123 Forge Street</p>
              <p>London, EC2A 4NE</p>
              <p style={{ paddingTop: "0.5rem" }}>
                <a
                  href="tel:+442012345678"
                  className="hover:text-brand-white transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
                >
                  020 1234 5678
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@forgegym.co.uk"
                  className="hover:text-brand-white transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
                >
                  hello@forgegym.co.uk
                </a>
              </p>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold" style={{ marginBottom: "1.5rem" }}>
              Opening Hours
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {hours.map((h) => (
                <li key={h.day} className="text-sm">
                  <span className="text-brand-muted">{h.day}</span>
                  <br />
                  <span className="text-brand-white">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center" style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto", paddingLeft: "1.5rem", paddingRight: "1.5rem", paddingTop: "1.5rem", paddingBottom: "1.5rem", gap: "1rem" }}>
          <p className="text-brand-muted text-xs font-mono">
            &copy; {new Date().getFullYear()} FORGE GYM. All rights reserved.
          </p>
          <div className="flex" style={{ gap: "1.5rem" }}>
            <Link
              href="/privacy"
              className="text-brand-muted hover:text-brand-white text-xs font-mono transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-brand-muted hover:text-brand-white text-xs font-mono transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
            >
              Terms
            </Link>
            <Link
              href="/accessibility"
              className="text-brand-muted hover:text-brand-white text-xs font-mono transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
