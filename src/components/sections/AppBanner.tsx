"use client";

import { Smartphone, Calendar, BarChart3, Bell } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const features = [
  { icon: Calendar, text: "Book classes and PT sessions in seconds" },
  { icon: BarChart3, text: "Track your workouts and progress" },
  { icon: Bell, text: "Get notified about schedule changes" },
  { icon: Smartphone, text: "Manage your membership on the go" },
];

export function AppBanner() {
  return (
    <section className="section-padding bg-brand-dark overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto", gap: "4rem" }}>
        {/* Phone mockup */}
        <AnimateOnScroll variant="slideLeft">
          <div
            className="relative rounded-[2rem] border-2 border-white/10 overflow-hidden"
            style={{
              width: "280px",
              height: "560px",
              marginLeft: "auto",
              marginRight: "auto",
              background: "linear-gradient(180deg, #0A0A0A 0%, #1a1a1a 100%)",
            }}
          >
            {/* Status bar */}
            <div className="flex items-center justify-between" style={{ padding: "1rem 1.25rem 0.5rem" }}>
              <span className="font-mono text-xs text-brand-muted">9:41</span>
              <div className="flex" style={{ gap: "0.375rem" }}>
                <div className="w-4 h-2 rounded-sm bg-brand-gold" />
              </div>
            </div>
            {/* App header */}
            <div style={{ padding: "1.5rem 1.25rem 1rem" }}>
              <span className="font-heading text-xl uppercase tracking-wider text-brand-white">
                FORGE
              </span>
              <span className="font-mono text-xs text-brand-gold" style={{ marginLeft: "0.375rem" }}>
                GYM
              </span>
            </div>
            {/* Welcome card */}
            <div className="rounded-xl border border-white/10" style={{ margin: "0 1.25rem", padding: "1rem", background: "rgba(212,168,67,0.05)" }}>
              <p className="font-mono text-xs text-brand-gold" style={{ marginBottom: "0.25rem" }}>
                Welcome back
              </p>
              <p className="font-heading text-lg uppercase text-brand-white">
                JAMES H.
              </p>
            </div>
            {/* Quick actions */}
            <div className="grid grid-cols-2" style={{ gap: "0.75rem", margin: "1rem 1.25rem" }}>
              {["Book Class", "My Plan", "Progress", "Messages"].map((label) => (
                <div
                  key={label}
                  className="rounded-lg border border-white/5 flex items-center justify-center"
                  style={{ padding: "0.75rem", background: "rgba(255,255,255,0.02)" }}
                >
                  <span className="font-mono text-xs text-brand-muted">{label}</span>
                </div>
              ))}
            </div>
            {/* Next class */}
            <div className="rounded-xl border border-brand-gold/20" style={{ margin: "0.5rem 1.25rem", padding: "1rem", background: "rgba(212,168,67,0.08)" }}>
              <p className="font-mono text-xs text-brand-gold" style={{ marginBottom: "0.375rem" }}>
                NEXT CLASS
              </p>
              <p className="font-heading text-sm uppercase text-brand-white">
                FORGE HIIT
              </p>
              <p className="font-mono text-xs text-brand-muted" style={{ marginTop: "0.25rem" }}>
                Today, 18:30 &middot; Jade Rivera
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Content */}
        <AnimateOnScroll variant="slideRight">
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "1rem" }}>
            Coming Soon
          </span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight leading-[1.2]" style={{ marginBottom: "1.5rem" }}>
            FORGE in
            <br />
            <span className="text-gradient">Your Pocket</span>
          </h2>
          <p className="text-brand-white/90 text-lg leading-relaxed" style={{ marginBottom: "2.5rem", maxWidth: "28rem" }}>
            Book classes, track your progress, and manage your membership — all
            from our upcoming mobile app.
          </p>

          {/* Feature bullets */}
          <div className="flex flex-col" style={{ gap: "1.25rem", marginBottom: "2.5rem" }}>
            {features.map((f) => (
              <div key={f.text} className="flex items-center" style={{ gap: "1rem" }}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <f.icon size={18} className="text-brand-gold" aria-hidden="true" />
                </div>
                <span className="text-brand-white/90 text-sm">{f.text}</span>
              </div>
            ))}
          </div>

          {/* App store buttons */}
          <div className="flex flex-wrap" style={{ gap: "0.75rem" }}>
            <a
              href="#"
              aria-label="Download on the App Store (coming soon)"
              className="rounded-lg border border-white/10 flex items-center hover:border-brand-gold/30 transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none"
              style={{ paddingLeft: "1.25rem", paddingRight: "1.25rem", paddingTop: "0.75rem", paddingBottom: "0.75rem", gap: "0.75rem" }}
              onClick={(e) => e.preventDefault()}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="white" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div>
                <span className="font-mono text-xs text-brand-muted block" style={{ lineHeight: 1 }}>
                  Download on the
                </span>
                <span className="font-heading text-sm uppercase text-brand-white">
                  App Store
                </span>
              </div>
            </a>
            <a
              href="#"
              aria-label="Get it on Google Play (coming soon)"
              className="rounded-lg border border-white/10 flex items-center hover:border-brand-gold/30 transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none"
              style={{ paddingLeft: "1.25rem", paddingRight: "1.25rem", paddingTop: "0.75rem", paddingBottom: "0.75rem", gap: "0.75rem" }}
              onClick={(e) => e.preventDefault()}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="white" aria-hidden="true">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              <div>
                <span className="font-mono text-xs text-brand-muted block" style={{ lineHeight: 1 }}>
                  Get it on
                </span>
                <span className="font-heading text-sm uppercase text-brand-white">
                  Google Play
                </span>
              </div>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
