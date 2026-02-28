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
      <div className="space-y-2">
        <label
          htmlFor={id}
          className="block font-mono text-xs uppercase tracking-[0.15em] text-brand-muted"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className={cn(
            "w-full bg-brand-surface border border-brand-muted/20 rounded-lg px-4 py-3.5 text-brand-white placeholder:text-brand-muted/50 font-body text-sm",
            "focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30",
            "transition-colors duration-200",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/30",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-red-400 text-xs font-mono mt-1">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label
          htmlFor={id}
          className="block font-mono text-xs uppercase tracking-[0.15em] text-brand-muted"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={id}
          rows={5}
          className={cn(
            "w-full bg-brand-surface border border-brand-muted/20 rounded-lg px-4 py-3.5 text-brand-white placeholder:text-brand-muted/50 font-body text-sm resize-none",
            "focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30",
            "transition-colors duration-200",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/30",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-red-400 text-xs font-mono mt-1">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
