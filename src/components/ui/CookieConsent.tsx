"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useFocusTrap } from "@/lib/useFocusTrap";

const COOKIE_NAME = "forge-cookie-consent";

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax; Secure`;
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const acceptRef = useRef<HTMLButtonElement>(null);
  const handleKeyDownTrap = useFocusTrap(bannerRef);

  useEffect(() => {
    const stored = getCookie(COOKIE_NAME);
    if (stored !== "accepted" && stored !== "rejected") {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Auto-focus accept button when banner appears
  useEffect(() => {
    if (visible) {
      requestAnimationFrame(() => acceptRef.current?.focus());
    }
  }, [visible]);

  const handleConsent = (value: "accepted" | "rejected") => {
    setCookie(COOKIE_NAME, value, 365);
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
          ref={bannerRef}
          onKeyDown={handleKeyDownTrap}
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
                prefetch={false}
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
                ref={acceptRef}
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
