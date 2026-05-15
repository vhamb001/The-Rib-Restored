import Image from "next/image";
import Link from "next/link";
import { getWritingData, getSortedWritingsData } from "@/lib/writings";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const writings = getSortedWritingsData();
  return writings.map((writing) => ({
    slug: writing.slug,
  }));
}

export default async function WritingPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const writingData = await getWritingData(slug);

  const date = new Date(writingData.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="bg-white min-h-screen">
      {/* Cover Image */}
      <div className="relative w-full h-[35vh] sm:h-[45vh] lg:h-[55vh] min-h-[280px] sm:min-h-[380px] bg-[var(--color-royal-deep)]">
        <Image
          src={writingData.image}
          alt={writingData.title}
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-royal-darkest)]/90 via-[var(--color-royal-deep)]/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pb-8 sm:pb-12 lg:pb-16 animate-fade-in-up">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="text-[0.55rem] sm:text-[0.6rem] font-bold tracking-[0.25em] text-[var(--color-gold)] uppercase">
                {writingData.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="text-xs sm:text-sm text-white/60">{date}</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight max-w-3xl">
              {writingData.title}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-white/60 max-w-2xl leading-relaxed line-clamp-3 sm:line-clamp-none">
              {writingData.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24">
        <Link
          href="/writings"
          className="inline-flex items-center text-sm text-gray-400 hover:text-[var(--color-royal-deep)] font-medium mb-8 sm:mb-12 transition-colors duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Writings
        </Link>

        <div
          className="prose prose-base sm:prose-lg md:prose-xl max-w-none prose-headings:font-heading prose-headings:text-[var(--color-royal-deep)] prose-a:text-[var(--color-royal)] hover:prose-a:text-[var(--color-gold)] prose-p:text-gray-600 prose-p:leading-[1.85] prose-strong:text-[var(--color-royal-deep)]"
          dangerouslySetInnerHTML={{ __html: writingData.contentHtml }}
        />

        {/* Author Bio */}
        <div className="mt-14 sm:mt-20 pt-8 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 bg-[var(--color-ivory)] p-5 sm:p-7 lg:p-8 rounded-sm text-center sm:text-left">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 relative border-3 border-white shadow-sm">
              <Image src="/images/author.png" alt="Shalaymah" fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-[var(--color-royal-deep)] mb-1">Shalaymah</h4>
              <p className="text-gray-500 text-sm leading-[1.7]">
                A prophetic dreamer, watchwoman, and author called to remember, restore, heal, and build through words, wisdom, and divine revelation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
