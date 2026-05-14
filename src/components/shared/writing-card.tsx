import Image from "next/image";
import Link from "next/link";
import type { WritingMeta } from "@/lib/writings";

export function WritingCard({ writing }: { writing: WritingMeta }) {
  // Format the date
  const date = new Date(writing.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/writings/${writing.slug}`}
      className="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl transition-all hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-100"
    >
      <div className="relative w-full md:w-64 shrink-0 aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
        <Image
          src={writing.image}
          alt={writing.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="flex flex-col justify-center flex-grow">
        <div className="flex items-center space-x-3 mb-3">
          <span className="text-xs font-bold tracking-widest text-[var(--color-gold)] uppercase">
            {writing.category}
          </span>
          <span className="text-gray-300">•</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        
        <h3 className="font-heading text-2xl font-bold text-[var(--color-royal-deep)] mb-3 group-hover:text-[var(--color-royal)] transition-colors">
          {writing.title}
        </h3>
        
        <p className="text-gray-600 line-clamp-2 mb-4">
          {writing.excerpt}
        </p>
        
        <span className="inline-flex items-center text-sm font-medium text-[var(--color-royal)]">
          Read More 
          <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
