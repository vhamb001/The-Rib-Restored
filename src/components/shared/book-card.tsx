import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import type { Book } from "@/data/books";

export function BookCard({ book }: { book: Book }) {
  return (
    <div className="group flex flex-col h-full bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md hover:border-[var(--color-soft-gold)]">
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-[var(--color-ivory)]/30 border-b border-gray-100/50 flex items-center justify-center p-4">
        <div className="relative w-full h-full rounded-sm overflow-hidden shadow-sm">
          <Image
            src={book.cover}
            alt={book.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        {book.status === "Coming Soon" && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[var(--color-royal)] text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
            Coming Soon
          </div>
        )}
      </div>
      <div className="p-5 sm:p-5 flex flex-col flex-grow">
        {book.subtitle && (
          <span className="text-xs font-semibold tracking-widest text-[var(--color-gold)] uppercase mb-2 text-center sm:text-left">
            {book.subtitle}
          </span>
        )}
        <h3 className="font-heading text-lg sm:text-xl font-bold text-[var(--color-royal-deep)] mb-3 line-clamp-2 text-center sm:text-left">
          {book.title}
        </h3>
        <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3 text-center sm:text-left">
          {book.description}
        </p>
        <div className="mt-auto pt-4 border-t border-gray-100">
          {book.status === "Available" && book.formats.length > 0 ? (
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {book.formats.map((format) => (
                <a
                  key={format.type}
                  href={format.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[90px] sm:flex-none inline-flex justify-center sm:justify-start items-center gap-1 text-[0.6rem] sm:text-[0.55rem] font-bold tracking-[0.1em] uppercase border border-gray-200 hover:border-[var(--color-gold)] text-gray-500 hover:text-[var(--color-gold)] px-2.5 py-2.5 sm:px-2 sm:py-1.5 rounded-sm transition-all duration-300"
                >
                  <span>{format.type}</span>
                </a>
              ))}
            </div>
          ) : (
            <Button
              variant="gold"
              className="w-full"
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
