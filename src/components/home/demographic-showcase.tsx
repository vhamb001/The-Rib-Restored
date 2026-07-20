"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";
import { BookShowcase } from "@/components/shared/book-showcase";
import type { Book } from "@/data/books";

interface DemographicShowcaseProps {
  books: Book[];
}

interface DemographicCategoryConfig {
  id: string;
  categoryKey: NonNullable<Book["category"]>;
  label: string;
  tagline: string;
  description: string;
}

const demographicCategories: DemographicCategoryConfig[] = [
  {
    id: "children",
    categoryKey: "Children",
    label: "Children’s Corner",
    tagline: "For the Next Generation",
    description: "Gentle, whimsical stories and guides introducing young dreamers to faith, imagination, and wisdom.",
  },
  {
    id: "teen",
    categoryKey: "Teen",
    label: "Teen Section",
    tagline: "For Formative Years",
    description: "Navigating identity, divine dreams, emotional health, and purpose during pivotal teenage years.",
  },
  {
    id: "youth",
    categoryKey: "Youth",
    label: "Youth Section",
    tagline: "For the Rising Generation",
    description: "Empowering young adults to step into kingdom leadership, vision, and career callings.",
  },
  {
    id: "women",
    categoryKey: "Women",
    label: "Women’s Section",
    tagline: "Restoration & Inheritance",
    description: "Restorative teachings on identity, virtue, spiritual inheritance, and the Rib Restored.",
  },
  {
    id: "men",
    categoryKey: "Men",
    label: "Men’s Section",
    tagline: "Brotherhood & Stewardship",
    description: "Brotherhood, spiritual strength, moral courage, and authentic kingdom leadership.",
  },
  {
    id: "elderly",
    categoryKey: "Elderly",
    label: "Elderly Section",
    tagline: "Golden Heritage",
    description: "Honoring golden heritage, timeless spiritual legacy, and intergenerational wisdom.",
  },
];

export function DemographicShowcase({ books }: DemographicShowcaseProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Active categories that have books
  const activeCategories = demographicCategories.filter((cat) =>
    books.some((b) => b.category === cat.categoryKey)
  );

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollPos = el.scrollLeft;
      const width = el.clientWidth;
      const index = Math.round(scrollPos / width);
      setActiveIndex(index);
      setCanScrollLeft(scrollPos > 10);
      setCanScrollRight(scrollPos < el.scrollWidth - width - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, [activeCategories.length]);

  const scrollToSlide = (index: number) => {
    const el = scrollContainerRef.current;
    if (el) {
      el.scrollTo({
        left: index * el.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scroll = (direction: "left" | "right") => {
    const targetIndex = direction === "left" ? activeIndex - 1 : activeIndex + 1;
    if (targetIndex >= 0 && targetIndex < activeCategories.length) {
      scrollToSlide(targetIndex);
    }
  };

  if (activeCategories.length === 0) return null;

  return (
    <section className="section-padding bg-gradient-to-b from-white via-[var(--color-ivory)]/30 to-white relative overflow-hidden border-t border-b border-gray-100/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        {/* Navigation Indicator Bar at Top */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200/60">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {activeCategories.map((cat, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToSlide(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? "bg-[var(--color-royal-deep)] text-white shadow-md ring-1 ring-[var(--color-gold)]/50 scale-[1.02]"
                      : "bg-white text-gray-500 hover:bg-[var(--color-ivory)] border border-gray-200 hover:border-[var(--color-gold)]/40 hover:text-[var(--color-royal-deep)]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Left / Right Arrow Controls */}
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0 ml-4">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 text-[var(--color-royal-deep)] shadow-sm flex items-center justify-center hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all duration-300"
              aria-label="Previous corner"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 text-[var(--color-royal-deep)] shadow-sm flex items-center justify-center hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all duration-300"
              aria-label="Next corner"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Full-Section Track */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {activeCategories.map((cat) => {
              const catBooks = books.filter((b) => b.category === cat.categoryKey);
              return (
                <div
                  key={cat.id}
                  className="w-full min-w-full flex-shrink-0 snap-start px-1"
                >
                  <SectionHeader
                    label={cat.tagline}
                    heading={cat.label}
                    description={cat.description}
                    align="center"
                    className="mb-10"
                  />

                  <div className="space-y-10 max-w-5xl mx-auto">
                    {catBooks.map((book) => (
                      <FadeIn key={book.id}>
                        <BookShowcase book={book} layout="featured" />
                      </FadeIn>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Swipe / Scroll Hint */}
        <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-100 text-[0.7rem] text-gray-400 font-medium">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] animate-pulse" />
            Scroll horizontally to navigate demographic corners
          </span>
          <div className="flex items-center gap-1.5">
            {activeCategories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "bg-[var(--color-gold)] w-6"
                    : "bg-gray-200 hover:bg-gray-300 w-2"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
