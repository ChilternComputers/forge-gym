"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useFocusTrap } from "@/lib/useFocusTrap";
import type { NavLink } from "@/types";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // ESC key to close + inert on main
  useEffect(() => {
    if (!isOpen) return;
    const main = document.getElementById("main-content");
    main?.toggleAttribute("inert", true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      main?.removeAttribute("inert");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleKeyDownTrap = useFocusTrap(menuRef);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          ref={menuRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-brand-black/98 backdrop-blur-sm"
          onKeyDown={handleKeyDownTrap}
        >
          <div className="flex flex-col h-full" style={{ padding: "1.5rem" }}>
            {/* Close button */}
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="text-brand-white hover:text-brand-gold transition-colors focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded-lg"
                style={{ padding: "0.625rem", minWidth: "44px", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
                aria-label="Close menu"
                autoFocus
              >
                <X size={28} aria-hidden="true" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col items-center justify-center flex-1" style={{ gap: "2rem" }}>
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="font-heading text-4xl uppercase text-brand-white hover:text-brand-gold transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + links.length * 0.05, duration: 0.4 }}
                className="flex flex-col w-full max-w-xs"
                style={{ gap: "1rem", marginTop: "2rem" }}
              >
                <Button href="/free-trial" variant="primary" className="w-full">
                  START FREE TRIAL
                </Button>
                <Button href="/contact" variant="ghost" className="w-full">
                  BOOK A CLASS
                </Button>
              </motion.div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
