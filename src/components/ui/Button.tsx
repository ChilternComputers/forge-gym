"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "text";
  size?: "default" | "large";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-mono uppercase tracking-widest text-xs font-medium transition-all duration-300 ease-in-out cursor-pointer";

  const variants = {
    primary:
      "bg-brand-gold text-brand-black hover:bg-brand-gold-light active:scale-[0.98]",
    ghost:
      "bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black active:scale-[0.98]",
    text: "bg-transparent text-brand-gold hover:text-brand-gold-light underline-offset-4 hover:underline",
  };

  const sizes = {
    default: "px-8 py-3.5 rounded-full min-h-[48px]",
    large: "px-10 py-4.5 rounded-full min-h-[56px] text-sm",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
