"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, Mail } from "lucide-react";
import { useFocusTrap } from "@/lib/useFocusTrap";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const handleKeyDownTrap = useFocusTrap(dialogRef);

  useEffect(() => {
    if (open && dialogRef.current) {
      const firstLink = dialogRef.current.querySelector<HTMLElement>("a[href]");
      firstLink?.focus();
    }
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="fixed z-40" style={{ bottom: "1.5rem", right: "1.5rem" }}>
      <AnimatePresence>
        {open && (
          <motion.div
            ref={dialogRef}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-label="Contact options"
            onKeyDown={handleKeyDownTrap}
            className="bg-brand-surface border border-white/10 rounded-xl shadow-2xl overflow-hidden"
            style={{ marginBottom: "0.75rem", width: "240px" }}
          >
            <div className="border-b border-white/5" style={{ padding: "1rem" }}>
              <p className="font-heading text-sm uppercase tracking-wide">
                Get in Touch
              </p>
              <p className="text-brand-muted text-xs" style={{ marginTop: "0.25rem" }}>
                Choose how to reach us
              </p>
            </div>
            <div className="flex flex-col" style={{ padding: "0.5rem" }}>
              <a
                href="https://wa.me/442012345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-lg hover:bg-white/5 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none"
                style={{ padding: "0.75rem", gap: "0.75rem" }}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#25D366" }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-brand-white">
                  WhatsApp
                </span>
              </a>
              <a
                href="tel:+442012345678"
                className="flex items-center rounded-lg hover:bg-white/5 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none"
                style={{ padding: "0.75rem", gap: "0.75rem" }}
              >
                <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center">
                  <Phone size={16} className="text-brand-black" aria-hidden="true" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-brand-white">
                  Call Us
                </span>
              </a>
              <a
                href="mailto:hello@forgegym.co.uk"
                className="flex items-center rounded-lg hover:bg-white/5 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none"
                style={{ padding: "0.75rem", gap: "0.75rem" }}
              >
                <div className="w-8 h-8 rounded-full bg-brand-white flex items-center justify-center">
                  <Mail size={16} className="text-brand-black" aria-hidden="true" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-brand-white">
                  Email
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-brand-gold text-brand-black flex items-center justify-center shadow-lg hover:bg-brand-gold-light transition-colors duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black focus-visible:outline-none"
        aria-label={open ? "Close contact options" : "Open contact options"}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={24} aria-hidden="true" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={24} aria-hidden="true" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
