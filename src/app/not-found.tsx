import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-svh flex items-center justify-center bg-brand-black" style={{ padding: "2rem", textAlign: "center" }}>
      <div style={{ maxWidth: "32rem" }}>
        <span className="font-mono text-sm uppercase tracking-[0.3em] text-brand-gold block" style={{ marginBottom: "1.5rem" }}>
          Page Not Found
        </span>
        <h1 className="font-heading text-8xl md:text-9xl uppercase tracking-tight text-brand-white" style={{ marginBottom: "1rem" }}>
          4<span className="text-brand-gold">0</span>4
        </h1>
        <p className="text-brand-muted text-lg" style={{ marginBottom: "2.5rem" }}>
          This page doesn&apos;t exist — but your next workout does.
        </p>
        <div className="flex flex-col sm:flex-row justify-center" style={{ gap: "1rem" }}>
          <Button href="/" variant="primary">
            GO HOME
          </Button>
          <Button href="/classes" variant="ghost">
            VIEW CLASSES
          </Button>
        </div>
      </div>
    </section>
  );
}
