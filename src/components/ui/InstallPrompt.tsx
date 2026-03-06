"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const DISMISS_KEY = "forge-install-dismissed";

export function InstallPrompt() {
  const [visible, setVisible] = useState(false);
  const deferredPrompt = useRef<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem(DISMISS_KEY)) return;

    const handler = (e: Event) => {
      e.preventDefault();
      deferredPrompt.current = e as BeforeInstallPromptEvent;
      // Delay 3s to avoid overlapping CookieConsent
      const timer = setTimeout(() => setVisible(true), 3000);
      return () => clearTimeout(timer);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt.current) return;
    await deferredPrompt.current.prompt();
    deferredPrompt.current = null;
    setVisible(false);
  };

  const handleDismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          role="alertdialog"
          aria-label="Install app"
          className="fixed bottom-0 left-0 right-0 z-40 bg-brand-surface border-t border-white/10"
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
              Install FORGE GYM for quick access to class bookings and the timetable.
            </p>
            <div className="flex flex-shrink-0" style={{ gap: "0.75rem" }}>
              <button
                onClick={handleDismiss}
                className="font-mono text-xs uppercase tracking-[0.1em] text-brand-muted hover:text-brand-white border border-brand-muted/20 hover:border-white/20 rounded-full transition-colors duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none"
                style={{
                  paddingLeft: "1.25rem",
                  paddingRight: "1.25rem",
                  paddingTop: "0.625rem",
                  paddingBottom: "0.625rem",
                  minHeight: "44px",
                }}
              >
                Not Now
              </button>
              <button
                onClick={handleInstall}
                className="font-mono text-xs uppercase tracking-[0.1em] bg-brand-gold text-brand-black rounded-full hover:bg-brand-gold-light transition-colors duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none"
                style={{
                  paddingLeft: "1.25rem",
                  paddingRight: "1.25rem",
                  paddingTop: "0.625rem",
                  paddingBottom: "0.625rem",
                  minHeight: "44px",
                }}
              >
                Install App
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
