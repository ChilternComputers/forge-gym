import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <label
          htmlFor={id}
          className="block font-mono text-sm uppercase tracking-[0.1em] text-brand-white/80"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          style={{ paddingLeft: "1rem", paddingRight: "1rem", paddingTop: "0.875rem", paddingBottom: "0.875rem" }}
          className={cn(
            "w-full bg-brand-surface border border-brand-muted/20 rounded-lg text-brand-white placeholder:text-brand-muted/50 font-body text-sm",
            "focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30",
            "transition-colors duration-200",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/30",
            className
          )}
          {...props}
        />
        {error && (
          <p id={`${id}-error`} className="text-red-500 text-xs font-mono" style={{ marginTop: "0.25rem" }} role="alert">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <label
          htmlFor={id}
          className="block font-mono text-sm uppercase tracking-[0.1em] text-brand-white/80"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={id}
          rows={5}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          style={{ paddingLeft: "1rem", paddingRight: "1rem", paddingTop: "0.875rem", paddingBottom: "0.875rem" }}
          className={cn(
            "w-full bg-brand-surface border border-brand-muted/20 rounded-lg text-brand-white placeholder:text-brand-muted/50 font-body text-sm resize-none",
            "focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30",
            "transition-colors duration-200",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/30",
            className
          )}
          {...props}
        />
        {error && (
          <p id={`${id}-error`} className="text-red-500 text-xs font-mono" style={{ marginTop: "0.25rem" }} role="alert">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
