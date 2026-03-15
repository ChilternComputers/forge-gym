"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { tickerMessages } from "@/data/ticker";
import type { NavLink } from "@/types";

const navLinks: NavLink[] = [
  { label: "Classes", href: "/classes" },
  { label: "Trainers", href: "/trainers" },
  { label: "Membership", href: "/membership" },
  { label: "Timetable", href: "/timetable" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      if (y > lastY && y > 100) {
        setHidden(true);
      } else if (y < lastY) {
        setHidden(false);
      }
      lastY = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-40 transition-transform duration-300"
        style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
      >
      {/* Ticker */}
      <div className="bg-brand-gold overflow-hidden whitespace-nowrap flex items-center" style={{ height: "2.5rem" }} aria-hidden="true">
        <div className="animate-ticker inline-flex" style={{ willChange: "transform" }}>
          {[...Array(3)].flatMap((_, set) =>
            tickerMessages.map((msg, i) => (
              <span
                key={`${set}-${i}`}
                className="font-mono text-xs uppercase tracking-[0.15em] text-brand-black font-semibold inline-flex items-center"
                style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
              >
                {msg}
                <span className="text-brand-black/40" style={{ paddingLeft: "3rem", paddingRight: "3rem" }}>★</span>
              </span>
            ))
          )}
        </div>
      </div>
      {/* Header */}
      <header
        className={cn(
          "transition-colors duration-300",
          scrolled
            ? "bg-brand-black/95 backdrop-blur-md border-b border-white/5"
            : "bg-brand-black/60 backdrop-blur-sm"
        )}
      >
        <div style={{ paddingLeft: "clamp(1.5rem, 8vw, 12rem)", paddingRight: "clamp(1.5rem, 8vw, 12rem)" }}>
          <nav aria-label="Main navigation" className="hidden lg:grid lg:grid-cols-[auto_1fr_auto] items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group" style={{ gap: "0.5rem" }}>
              <span className="font-heading text-2xl md:text-3xl uppercase tracking-wider text-brand-white group-hover:text-brand-gold transition-colors duration-300">
                FORGE
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-gold" style={{ marginTop: "0.25rem" }}>
                GYM
              </span>
            </Link>

            {/* Desktop nav — centred */}
            <div className="flex items-center justify-center" style={{ gap: "2.5rem" }}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname === `${link.href}/`;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={false}
                    className={cn(
                      "relative font-mono text-sm uppercase tracking-[0.15em] transition-colors duration-300 group",
                      isActive ? "text-brand-gold" : "text-brand-white hover:text-brand-gold"
                    )}
                    style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    <span className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-brand-gold transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )} />
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTAs — right */}
            <div className="flex items-center justify-end" style={{ gap: "1rem" }}>
              <Button href="/contact" variant="ghost" size="default">
                BOOK
              </Button>
              <Button href="/free-trial" variant="primary" size="default">
                JOIN
              </Button>
            </div>
          </nav>

          {/* Mobile nav */}
          <nav aria-label="Mobile navigation" className="flex lg:hidden items-center justify-between h-16" style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>
            <Link href="/" className="flex items-center group" style={{ gap: "0.5rem" }}>
              <span className="font-heading text-2xl uppercase tracking-wider text-brand-white group-hover:text-brand-gold transition-colors duration-300">
                FORGE
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-gold" style={{ marginTop: "0.25rem" }}>
                GYM
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="text-brand-white hover:text-brand-gold transition-colors focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded-lg"
              style={{ padding: "0.625rem", minWidth: "44px", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={24} aria-hidden="true" />
            </button>
          </nav>
        </div>
      </header>
      </div>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
}
