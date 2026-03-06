"use client";

import { Button } from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-svh flex items-center justify-center bg-brand-black" style={{ padding: "2rem", textAlign: "center" }}>
      <div style={{ maxWidth: "32rem" }}>
        <span className="font-mono text-sm uppercase tracking-[0.3em] text-brand-gold block" style={{ marginBottom: "1.5rem" }}>
          Something Went Wrong
        </span>
        <h1 className="font-heading text-6xl md:text-7xl uppercase tracking-tight" style={{ marginBottom: "1.5rem" }}>
          Error
        </h1>
        <p className="text-brand-muted text-lg" style={{ marginBottom: "2.5rem" }}>
          An unexpected error occurred. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row justify-center" style={{ gap: "1rem" }}>
          <Button onClick={() => reset()} variant="primary">
            TRY AGAIN
          </Button>
          <Button href="/" variant="ghost">
            GO HOME
          </Button>
        </div>
      </div>
    </section>
  );
}
