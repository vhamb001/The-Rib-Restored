"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import type { Book } from "@/data/books";
import { cn } from "../ui/button";

interface BookShowcaseProps {
  book: Book;
  layout?: "card" | "featured";
  className?: string;
  priority?: boolean;
}

export function BookShowcase({ book, layout = "card", className, priority = false }: BookShowcaseProps) {
  const isAvailable = book.status === "Available";

  if (layout === "featured") {
    return (
      <div
        className={cn(
          "flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-6 md:p-8 lg:p-10 rounded-sm bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-[var(--color-soft-gold)]/40 transition-all duration-500",
          className
        )}
      >
        {/* Lifestyle Book Mockup Photo (Landscape aspect-[3/2]) */}
        <div className="w-full lg:w-1/2 flex-shrink-0 aspect-[3/2] relative rounded-sm overflow-hidden border border-gray-100/60 shadow-[0_12px_35px_rgba(0,0,0,0.05)] bg-[var(--color-ivory)]">
          <Image
            src={book.cover}
            alt={book.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
            priority={priority}
            className="object-cover transition-transform duration-750 hover:scale-[1.02]"
          />
          {book.status === "Coming Soon" && (
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-[var(--color-royal)] text-[0.65rem] font-bold px-3 py-1.5 rounded-sm uppercase tracking-widest shadow-sm z-20">
              Coming Soon
            </div>
          )}
        </div>

        {/* Content Details */}
        <div className="flex-grow flex flex-col justify-center text-center lg:text-left w-full lg:w-1/2">
          {book.subtitle && (
            <span className="text-label text-[0.7rem] mb-2">
              {book.subtitle}
            </span>
          )}
          <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-royal-deep)] mb-4 leading-tight">
            {book.title}
          </h3>
          <p className="text-body-lg text-sm md:text-base text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {book.description}
          </p>

          <div className="mt-auto border-t border-gray-100 pt-6">
            <h4 className="text-micro text-gray-400 font-bold mb-3 uppercase">Available Formats</h4>
            {isAvailable && book.formats.length > 0 ? (
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {book.formats.map((format) => (
                  <Button
                    key={format.type}
                    variant="secondary"
                    size="default"
                    asChild
                    className="min-w-[130px] shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <a
                      href={format.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {format.type} {format.price ? `— ${format.price}` : ""}
                    </a>
                  </Button>
                ))}
              </div>
            ) : (
              <Button
                variant="gold"
                className="w-full sm:w-auto min-w-[200px]"
                disabled
              >
                Coming Soon
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Card Layout (Standard)
  return (
    <div
      className={cn(
        "group flex flex-col h-full bg-white rounded-sm border border-gray-100/80 shadow-sm hover:shadow-xl hover:border-[var(--color-soft-gold)]/40 transition-all duration-500",
        className
      )}
    >
      {/* Cover Area with Landscape Mockup Photo */}
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-[var(--color-ivory)] border-b border-gray-100/50">
        <Image
          src={book.cover}
          alt={book.title}
          fill
          sizes="(max-width: 640px) 100vw, 350px"
          priority={priority}
          className="object-cover transition-transform duration-750 group-hover:scale-[1.03]"
        />
        {!isAvailable && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[var(--color-royal)] text-[0.65rem] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider shadow-sm z-20">
            Soon
          </div>
        )}
      </div>

      {/* Metadata and content */}
      <div className="p-6 flex flex-col flex-grow">
        {book.subtitle && (
          <span className="text-label text-[0.625rem] text-center mb-1.5">
            {book.subtitle}
          </span>
        )}
        <h3 className="font-heading text-lg font-bold text-[var(--color-royal-deep)] text-center mb-3 line-clamp-2 leading-snug group-hover:text-[var(--color-royal)] transition-colors duration-300">
          {book.title}
        </h3>
        <p className="text-gray-500 text-xs line-clamp-3 text-center mb-5 flex-grow leading-relaxed">
          {book.description}
        </p>

        {/* Formats Action Area */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          {isAvailable && book.formats.length > 0 ? (
            <div className="grid grid-cols-2 gap-2">
              {book.formats.slice(0, 2).map((format) => (
                <Button
                  key={format.type}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="w-full text-[0.65rem] tracking-[0.1em] border border-gray-200 hover:border-[var(--color-gold)] font-bold text-gray-500 hover:text-[var(--color-gold)] px-1 py-1 rounded-sm transition-all duration-300"
                >
                  <a
                    href={format.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {format.type} {format.price ? `(${format.price})` : ""}
                  </a>
                </Button>
              ))}
              {book.formats.length > 2 && (
                <div className="col-span-2 text-center mt-1">
                  <span className="text-micro text-gray-400">+{book.formats.length - 2} more format(s)</span>
                </div>
              )}
            </div>
          ) : (
            <Button
              variant="gold"
              className="w-full text-[0.65rem] tracking-[0.1em] font-bold"
              disabled
            >
              Stay Tuned
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
