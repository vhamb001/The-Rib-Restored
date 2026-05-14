import { cn } from "../ui/button";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  alignment?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  eyebrow,
  alignment = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-3",
        alignment === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow && (
        <span className="font-script text-4xl text-[var(--color-gold)]">
          {eyebrow}
        </span>
      )}
      <h2 className={cn("font-heading text-3xl md:text-4xl font-bold", !className?.includes('text-') ? "text-[var(--color-royal-deep)]" : "")}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl text-lg">{subtitle}</p>
      )}
    </div>
  );
}
