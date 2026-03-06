import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://forgegym.co.uk" },
      ...items.map((item, i) => ({
        "@type": "ListItem" as const,
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: `https://forgegym.co.uk${item.href}` } : {}),
      })),
    ],
  };

  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: "1rem" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex items-center flex-wrap" style={{ gap: "0.5rem" }}>
        <li className="flex items-center" style={{ gap: "0.5rem" }}>
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-[0.1em] text-brand-muted hover:text-brand-gold transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
          >
            Home
          </Link>
          <ChevronRight size={12} className="text-brand-muted/50" aria-hidden="true" />
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center" style={{ gap: "0.5rem" }}>
            {item.href && i < items.length - 1 ? (
              <>
                <Link
                  href={item.href}
                  className="font-mono text-xs uppercase tracking-[0.1em] text-brand-muted hover:text-brand-gold transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
                >
                  {item.label}
                </Link>
                <ChevronRight size={12} className="text-brand-muted/50" aria-hidden="true" />
              </>
            ) : (
              <span className="font-mono text-xs uppercase tracking-[0.1em] text-brand-gold" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
