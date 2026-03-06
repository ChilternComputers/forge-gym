export function Skeleton({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`animate-pulse bg-brand-surface rounded-lg ${className}`}
      style={style}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-brand-surface rounded-lg overflow-hidden border border-white/5">
      <Skeleton style={{ height: "200px", borderRadius: 0 }} />
      <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <Skeleton style={{ height: "1.5rem", width: "60%" }} />
        <Skeleton style={{ height: "1rem", width: "100%" }} />
        <Skeleton style={{ height: "1rem", width: "80%" }} />
        <div className="flex" style={{ gap: "0.75rem", marginTop: "0.5rem" }}>
          <Skeleton style={{ height: "1rem", width: "4rem" }} />
          <Skeleton style={{ height: "1rem", width: "4rem" }} />
        </div>
      </div>
    </div>
  );
}

export function SkeletonGalleryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{ gap: "0.75rem" }}>
      {Array.from({ length: 12 }).map((_, i) => (
        <Skeleton key={i} className="aspect-square" />
      ))}
    </div>
  );
}
