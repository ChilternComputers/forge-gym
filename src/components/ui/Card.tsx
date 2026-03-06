import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  subtitle?: string;
  image: string;
  href?: string;
  className?: string;
  aspectRatio?: "square" | "portrait" | "landscape";
}

export function Card({
  title,
  subtitle,
  image,
  href,
  className,
  aspectRatio = "portrait",
}: CardProps) {
  const aspectClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[16/9]",
  };

  const content = (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg cursor-pointer",
        aspectClasses[aspectRatio],
        className
      )}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0" style={{ padding: "1.5rem" }}>
        {subtitle && (
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-brand-gold block" style={{ marginBottom: "0.5rem" }}>
            {subtitle}
          </span>
        )}
        <h3 className="font-heading text-2xl md:text-3xl uppercase text-brand-white leading-tight">
          {title}
        </h3>
        <div className="h-0.5 w-0 bg-brand-gold transition-all duration-300 group-hover:w-12" style={{ marginTop: "0.75rem" }} />
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
