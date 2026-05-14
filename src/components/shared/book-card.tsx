import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import type { Book } from "@/data/books";

export function BookCard({ book }: { book: Book }) {
  return (
    <div className="group flex flex-col h-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md hover:border-[var(--color-soft-gold)]">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-50">
        <Image
          src={book.cover}
          alt={book.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {book.status === "Coming Soon" && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[var(--color-royal)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Coming Soon
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        {book.subtitle && (
          <span className="text-xs font-semibold tracking-widest text-[var(--color-gold)] uppercase mb-2">
            {book.subtitle}
          </span>
        )}
        <h3 className="font-heading text-xl font-bold text-[var(--color-royal-deep)] mb-3 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
          {book.description}
        </p>
        <div className="mt-auto pt-4 border-t border-gray-100">
          {book.status === "Available" ? (
            <Button
              variant="secondary"
              className="w-full"
              asChild
            >
              <Link href={book.amazonUrl || "#"}>View on Amazon</Link>
            </Button>
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
