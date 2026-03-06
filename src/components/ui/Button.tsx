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
    "inline-flex items-center justify-center font-mono uppercase tracking-wider text-sm font-medium transition-all duration-300 ease-in-out cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black focus-visible:outline-none";

  const variants = {
    primary:
      "bg-brand-gold text-brand-black hover:bg-brand-gold-light active:scale-[0.98]",
    ghost:
      "bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black active:scale-[0.98]",
    text: "bg-transparent text-brand-gold hover:text-brand-gold-light underline-offset-4 hover:underline",
  };

  const sizeStyles = {
    default: { paddingLeft: "2.5rem", paddingRight: "2.5rem", paddingTop: "0.875rem", paddingBottom: "0.875rem", minHeight: "44px" },
    large: { paddingLeft: "3rem", paddingRight: "3rem", paddingTop: "1.125rem", paddingBottom: "1.125rem" },
  };

  const sizes = {
    default: "rounded-full min-w-[120px]",
    large: "rounded-full min-w-[180px] text-sm",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} style={sizeStyles[size]}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} style={sizeStyles[size]}>
      {children}
    </button>
  );
}
