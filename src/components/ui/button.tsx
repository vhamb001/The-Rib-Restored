import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* ─── Slot: renders child element with merged props ─── */
function Slot({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) {
  if (React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      ...props,
      ...(children.props as Record<string, unknown>),
      className: cn(
        (props as { className?: string }).className,
        (children.props as { className?: string }).className
      ),
    });
  }
  return <>{children}</>;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "ghost" | "icon";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      asChild = false,
      loading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const variants: Record<string, string> = {
      primary:
        "bg-[var(--color-royal)] text-white hover:bg-[var(--color-royal-deep)] shadow-[0_2px_8px_rgba(10,45,122,0.25)] hover:shadow-[0_4px_16px_rgba(10,45,122,0.35)] border border-transparent",
      secondary:
        "bg-white text-[var(--color-royal-deep)] border-2 border-[var(--color-royal-deep)] hover:bg-[var(--color-royal-deep)] hover:text-white shadow-sm hover:shadow-md",
      gold: "bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-soft-gold)] text-white hover:from-[var(--color-soft-gold)] hover:to-[var(--color-gold)] shadow-[0_2px_12px_rgba(200,151,62,0.35)] hover:shadow-[0_4px_20px_rgba(200,151,62,0.5)] border border-transparent",
      ghost:
        "bg-transparent text-[var(--color-royal-deep)] hover:bg-[var(--color-ivory)] border border-transparent",
      icon: "bg-transparent text-[var(--color-royal-deep)] hover:bg-[var(--color-ivory)] hover:text-[var(--color-gold)] border border-transparent p-0",
    };

    const sizes: Record<string, string> = {
      default: "h-11 px-6 py-2 text-sm min-w-[44px] min-h-[44px]",
      sm: "h-9 px-4 text-xs min-w-[44px] min-h-[44px]",
      lg: "h-13 px-10 py-3 text-base min-w-[44px] min-h-[44px]",
    };

    const baseClasses = cn(
      "inline-flex items-center justify-center rounded-sm font-semibold tracking-wider uppercase transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none",
      variants[variant],
      variant !== "icon" && sizes[size],
      loading && "pointer-events-none",
      className
    );

    if (asChild) {
      return (
        <Slot className={baseClasses}>
          {children}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        className={baseClasses}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
