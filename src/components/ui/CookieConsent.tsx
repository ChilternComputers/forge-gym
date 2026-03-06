"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "forge-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored !== "accepted" && stored !== "rejected") {
        const timer = setTimeout(() => setVisible(true), 1500);
        return () => clearTimeout(timer);
      }
    } catch {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // localStorage unavailable (e.g. private browsing)
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          role="alertdialog"
          aria-label="Cookie consent"
          className="fixed bottom-0 left-0 right-0 z-50 bg-brand-surface border-t border-white/10"
        >
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between"
            style={{
              maxWidth: "1400px",
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              paddingTop: "1.25rem",
              paddingBottom: "1.25rem",
              gap: "1rem",
            }}
          >
            <p className="text-brand-white/90 text-sm leading-relaxed">
              We use cookies to improve your experience.{" "}
              <Link
                href="/privacy"
                className="text-brand-gold-light underline hover:text-brand-white focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
              >
                Privacy Policy
              </Link>
            </p>
            <div className="flex flex-shrink-0" style={{ gap: "0.75rem" }}>
              <button
                onClick={() => handleConsent("rejected")}
                className="font-mono text-xs uppercase tracking-[0.1em] text-brand-muted hover:text-brand-white border border-brand-muted/20 hover:border-white/20 rounded-full transition-colors duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none"
                style={{
                  paddingLeft: "1.25rem",
                  paddingRight: "1.25rem",
                  paddingTop: "0.625rem",
                  paddingBottom: "0.625rem",
                  minHeight: "44px",
                }}
              >
                Reject All
              </button>
              <button
                onClick={() => handleConsent("accepted")}
                className="font-mono text-xs uppercase tracking-[0.1em] bg-brand-gold text-brand-black rounded-full hover:bg-brand-gold-light transition-colors duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none"
                style={{
                  paddingLeft: "1.25rem",
                  paddingRight: "1.25rem",
                  paddingTop: "0.625rem",
                  paddingBottom: "0.625rem",
                  minHeight: "44px",
                }}
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
