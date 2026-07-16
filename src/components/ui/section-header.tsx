"use client";

import { FadeIn } from "./fade-in";
import { cn } from "./button";

interface SectionHeaderProps {
  label?: string;
  heading: string;
  headingAccent?: string; // Optional script-font accent line
  description?: string;
  align?: "center" | "left";
  className?: string;
  headingClassName?: string;
  children?: React.ReactNode; // For a right-side action (e.g., "View All" link)
}

export function SectionHeader({
  label,
  heading,
  headingAccent,
  description,
  align = "center",
  className,
  headingClassName,
  children,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  // Split layout: heading left, children (action link) right
  if (!isCenter && children) {
    return (
      <FadeIn
        className={cn(
          "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 lg:mb-16",
          className
        )}
      >
        <div>
          {label && (
            <span className="text-label block mb-3">{label}</span>
          )}
          <h2 className={cn("text-h2", headingClassName)}>{heading}</h2>
          {headingAccent && (
            <span className="font-script text-[clamp(1.75rem,3vw,2.75rem)] text-[var(--color-gold)] block -mt-1">
              {headingAccent}
            </span>
          )}
          {description && (
            <p className="text-body-sm mt-3 max-w-lg">{description}</p>
          )}
        </div>
        <div className="shrink-0">{children}</div>
      </FadeIn>
    );
  }

  return (
    <FadeIn
      className={cn(
        "mb-12 lg:mb-16",
        isCenter && "text-center",
        className
      )}
    >
      {label && (
        <span className="text-label block mb-3">{label}</span>
      )}
      <h2 className={cn("text-h2", headingClassName)}>{heading}</h2>
      {headingAccent && (
        <span
          className={cn(
            "font-script text-[clamp(1.75rem,3vw,2.75rem)] text-[var(--color-gold)] block -mt-1",
            isCenter && "mx-auto"
          )}
        >
          {headingAccent}
        </span>
      )}
      {/* Diamond ornament divider — ─── ◆ ─── */}
      {!headingAccent && (
        <div
          className={cn(
            "flex items-center gap-2 mt-5",
            isCenter ? "justify-center" : ""
          )}
        >
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-[var(--color-gold)]" />
          <span className="text-[var(--color-gold)] text-[0.5rem] opacity-60">◆</span>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-[var(--color-gold)]" />
        </div>
      )}
      {description && (
        <p
          className={cn(
            "text-body-sm mt-4",
            isCenter && "max-w-md mx-auto"
          )}
        >
          {description}
        </p>
      )}
      {children}
    </FadeIn>
  );
}
