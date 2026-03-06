"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface NewsletterSignupProps {
  variant?: "section" | "inline";
}

export function NewsletterSignup({ variant = "section" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && emailRegex.test(email)) setSubmitted(true);
  };

  if (variant === "inline") {
    return (
      <div style={{ marginTop: "1.5rem" }}>
        <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-brand-gold" style={{ marginBottom: "0.75rem" }}>
          Newsletter
        </h4>
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.p
              key="success"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-gold text-sm flex items-center"
              style={{ gap: "0.5rem" }}
            >
              <Check size={16} /> You&apos;re in. Watch your inbox.
            </motion.p>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="flex"
              style={{ gap: "0.5rem" }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                aria-label="Email address for newsletter"
                className="flex-1 bg-brand-surface border border-brand-muted/20 rounded-full text-brand-white text-sm focus:outline-none focus:border-brand-gold focus-visible:ring-2 focus-visible:ring-brand-gold transition-colors duration-200"
                style={{ paddingLeft: "1rem", paddingRight: "1rem", paddingTop: "0.5rem", paddingBottom: "0.5rem", minWidth: "11rem" }}
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="bg-brand-gold text-brand-black rounded-full font-mono text-xs uppercase tracking-wider hover:bg-brand-gold-light transition-colors duration-300 flex-shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none inline-flex items-center justify-center"
                style={{ paddingLeft: "1rem", paddingRight: "1rem", paddingTop: "0.5rem", paddingBottom: "0.5rem", minWidth: "44px", minHeight: "44px" }}
              >
                <Mail size={16} aria-hidden="true" />
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <section className="section-padding bg-brand-dark">
      <div style={{ maxWidth: "42rem", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
        <SectionHeading
          overline="Stay Updated"
          title="Join the Newsletter"
          description="Training tips, gym news, and exclusive offers straight to your inbox. No spam — just gains."
        />

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center"
              style={{ gap: "1rem" }}
            >
              <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center">
                <Check size={28} className="text-brand-gold" />
              </div>
              <p className="font-heading text-2xl uppercase tracking-wide">
                You&apos;re In
              </p>
              <p className="text-brand-muted text-sm">
                Watch your inbox. Welcome to the FORGE community.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center justify-center"
              style={{ gap: "0.75rem", maxWidth: "32rem", marginLeft: "auto", marginRight: "auto" }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address for newsletter"
                className="w-full sm:flex-1 bg-brand-surface border border-brand-muted/20 rounded-full text-brand-white text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 focus-visible:ring-2 focus-visible:ring-brand-gold transition-colors duration-200"
                style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem", paddingTop: "0.875rem", paddingBottom: "0.875rem" }}
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-brand-gold text-brand-black rounded-full font-mono text-sm uppercase tracking-wider hover:bg-brand-gold-light transition-colors duration-300 flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none"
                style={{ paddingLeft: "2rem", paddingRight: "2rem", paddingTop: "0.875rem", paddingBottom: "0.875rem", gap: "0.5rem" }}
              >
                <Mail size={16} /> Subscribe
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
