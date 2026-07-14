"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import type { WritingMeta } from "@/lib/writings";
import { StaggerContainer, StaggerItem } from "../ui/fade-in";

interface WritingsListProps {
  writings: WritingMeta[];
  categories: string[];
}

export function WritingsList({ writings, categories }: WritingsListProps) {
  const [selectedCategory, setSelectedCategory] = useState("All Writings");

  const filteredWritings = selectedCategory === "All Writings"
    ? writings
    : writings.filter((w) => w.category === selectedCategory);

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
      {/* Category Sidebar */}
      <aside className="w-full lg:w-60 shrink-0">
        <h3 className="font-heading font-bold text-xs tracking-[0.2em] text-[var(--color-royal-deep)] uppercase mb-4 sm:mb-6">
          Categories
        </h3>
        
        {/* Horizontal scroll on mobile, vertical list on desktop */}
        <ul className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <li key={cat} className="shrink-0 lg:shrink">
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs text-left tracking-wide whitespace-nowrap lg:whitespace-normal w-auto lg:w-full py-2.5 px-4 rounded-sm transition-all duration-300 font-bold uppercase ${
                    isActive
                      ? "bg-[var(--color-royal-deep)] text-white shadow-sm"
                      : "text-gray-500 hover:bg-[var(--color-ivory)] hover:text-[var(--color-royal-deep)]"
                  }`}
                >
                  {cat}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Posts List */}
      <div className="flex-grow">
        {filteredWritings.length > 0 ? (
          <StaggerContainer key={selectedCategory} staggerDelay={0.08} className="space-y-6">
            {filteredWritings.map((writing) => {
              const date = new Date(writing.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              });
              
              return (
                <StaggerItem key={writing.slug} className="group">
                  <Link
                    href={`/writings/${writing.slug}`}
                    className="flex flex-col md:flex-row gap-6 p-5 sm:p-6 rounded-sm border border-gray-100 hover:border-[var(--color-soft-gold)]/40 hover:bg-[var(--color-warm-white)]/20 hover:shadow-md transition-all duration-500"
                  >
                    {/* Thumbnail wrapper */}
                    <div className="relative w-full md:w-48 shrink-0 aspect-[4/3] rounded-sm overflow-hidden bg-[var(--color-ivory)]">
                      <Image
                        src={writing.image}
                        alt={writing.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 192px"
                        className="object-cover transition-transform duration-750 group-hover:scale-104"
                      />
                    </div>

                    {/* Metadata & Title */}
                    <div className="flex flex-col justify-center flex-grow min-w-0">
                      <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                        <span className="text-[0.6rem] font-bold tracking-widest text-[var(--color-gold)] uppercase">
                          {writing.category}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-gray-200" />
                        <span className="text-micro text-gray-400 font-medium">
                          {date}
                        </span>
                        {writing.readingTime && (
                          <>
                            <span className="w-1 h-1 rounded-full bg-gray-200" />
                            <span className="inline-flex items-center gap-1 text-micro text-gray-400 font-medium">
                              <Clock className="w-3 h-3 text-gray-300" />
                              {writing.readingTime} min read
                            </span>
                          </>
                        )}
                      </div>

                      <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-[var(--color-royal-deep)] mb-2.5 group-hover:text-[var(--color-gold)] transition-colors duration-300 leading-snug">
                        {writing.title}
                      </h3>

                      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                        {writing.excerpt}
                      </p>

                      <span className="inline-flex items-center text-micro text-[var(--color-royal)] font-bold tracking-wider group-hover:text-[var(--color-gold)] transition-colors duration-300">
                        Read Full Entry <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        ) : (
          <div className="text-center py-16 border border-dashed border-gray-200 rounded-sm bg-[var(--color-ivory)]/20">
            <p className="text-gray-400 text-sm font-medium">No writings found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
