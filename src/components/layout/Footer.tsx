import Link from "next/link";
import { Instagram, Youtube, Facebook } from "lucide-react";

const quickLinks = [
  { label: "Classes", href: "/classes" },
  { label: "Trainers", href: "/trainers" },
  { label: "Membership", href: "/membership" },
  { label: "Timetable", href: "/timetable" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
];

const hours = [
  { day: "Monday — Friday", time: "05:30 — 22:00" },
  { day: "Saturday", time: "07:00 — 20:00" },
  { day: "Sunday", time: "08:00 — 18:00" },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="font-heading text-3xl uppercase tracking-wider text-brand-white">
                FORGE
              </span>
              <span className="font-mono text-[0.5rem] uppercase tracking-[0.3em] text-brand-gold ml-2">
                GYM
              </span>
            </Link>
            <p className="text-brand-muted text-sm leading-relaxed mb-6">
              Built to push. Built to last. Premium fitness for those who demand
              more from themselves.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-muted hover:text-brand-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-muted hover:text-brand-gold transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-muted hover:text-brand-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-muted hover:text-brand-white text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold mb-6">
              Contact
            </h3>
            <address className="not-italic space-y-3 text-sm text-brand-muted">
              <p>123 Forge Street</p>
              <p>London, EC2A 4NE</p>
              <p className="pt-2">
                <a
                  href="tel:+442012345678"
                  className="hover:text-brand-white transition-colors duration-300"
                >
                  020 1234 5678
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@forgegym.co.uk"
                  className="hover:text-brand-white transition-colors duration-300"
                >
                  hello@forgegym.co.uk
                </a>
              </p>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold mb-6">
              Opening Hours
            </h3>
            <ul className="space-y-3">
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
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-muted text-xs font-mono">
            &copy; {new Date().getFullYear()} FORGE GYM. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-brand-muted hover:text-brand-white text-xs font-mono transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-brand-muted hover:text-brand-white text-xs font-mono transition-colors duration-300"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
