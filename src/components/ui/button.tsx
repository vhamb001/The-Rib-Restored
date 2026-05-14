import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "ghost";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    const variants = {
      primary:
        "bg-[var(--color-royal)] text-white hover:bg-[var(--color-royal-deep)] shadow-[0_2px_8px_rgba(10,45,122,0.25)] hover:shadow-[0_4px_16px_rgba(10,45,122,0.35)] border border-transparent",
      secondary:
        "bg-white text-[var(--color-royal-deep)] border-2 border-[var(--color-royal-deep)] hover:bg-[var(--color-royal-deep)] hover:text-white shadow-sm hover:shadow-md",
      gold:
        "bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-soft-gold)] text-white hover:from-[var(--color-soft-gold)] hover:to-[var(--color-gold)] shadow-[0_2px_12px_rgba(200,151,62,0.35)] hover:shadow-[0_4px_20px_rgba(200,151,62,0.5)] border border-transparent",
      ghost:
        "bg-transparent text-[var(--color-royal-deep)] hover:bg-[var(--color-ivory)] border border-transparent",
    };

    const sizes = {
      default: "h-11 px-6 py-2 text-sm",
      sm: "h-9 px-4 text-xs",
      lg: "h-13 px-10 py-3 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-sm font-semibold tracking-wider uppercase transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
