import Link from "next/link";
import { Button } from "@/components/ui/button";
import { books } from "@/data/books";
import { BookOpen } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { BookShowcase } from "@/components/shared/book-showcase";
import booksPageData from "../../../content/data/books-page.json";

export default function BooksPage() {
  const availableBooks = books.filter((b) => b.status === "Available");
  const comingBooks = books.filter((b) => b.status === "Coming Soon");

  return (
    <div className="bg-white min-h-screen">
      {/* ════════════════════════════════════════════
          1. HERO — Editorial Header
          ════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-white via-[var(--color-ivory)]/40 to-white py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-gray-100/35">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-gold)]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[var(--color-royal)]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <SectionHeader
              label={booksPageData.hero.sectionLabel}
              heading={booksPageData.hero.heading}
              description={booksPageData.hero.description}
              align="center"
            />
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2. FEATURED BOOKS — High prominent list
          ════════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="space-y-12">
            {availableBooks.map((book, index) => (
              <FadeIn key={book.id} delay={index * 0.15}>
                <BookShowcase book={book} layout="featured" priority={index === 0} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3. COMING SOON — Sacred teaser
          ════════════════════════════════════════════ */}
      {comingBooks.length > 0 && (
        <section className="section-padding bg-[var(--color-ivory)]/40 border-t border-gray-100/35">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <FadeIn>
              <div className="bg-white p-8 sm:p-12 lg:p-16 rounded-sm border border-gray-100/80 shadow-sm relative overflow-hidden">
                {/* Accent frames */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[var(--color-gold)]/35" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[var(--color-gold)]/35" />

                <div className="w-16 h-16 rounded-full bg-[var(--color-ivory)] text-[var(--color-gold)] flex items-center justify-center mx-auto mb-8 shadow-sm">
                  <BookOpen className="w-8 h-8" />
                </div>
                
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-royal-deep)] mb-4">{booksPageData.comingSoon.heading}</h2>
                <div className="gold-rule w-16 mx-auto mb-6" />
                
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">{booksPageData.comingSoon.description}</p>
                
                <Button variant="gold" size="lg" asChild className="shadow-sm">
                  <Link href={booksPageData.comingSoon.ctaHref}>{booksPageData.comingSoon.ctaText}</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      )}
    </div>
  );
}
