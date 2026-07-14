import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getWritingData, getSortedWritingsData } from "@/lib/writings";
import { ArrowLeft, Clock } from "lucide-react";

export async function generateStaticParams() {
  const writings = getSortedWritingsData();
  return writings.map((writing) => ({
    slug: writing.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const writing = await getWritingData(slug);
  return {
    title: `${writing.title} | Shalaymah`,
    description: writing.excerpt,
    openGraph: {
      title: writing.title,
      description: writing.excerpt,
      images: [{ url: writing.image }],
      type: "article",
      publishedTime: writing.date,
    },
    twitter: {
      card: "summary_large_image",
      title: writing.title,
      description: writing.excerpt,
      images: [writing.image],
    },
  };
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
      {/* Hero Header with background image */}
      <div className="relative w-full h-[45vh] sm:h-[55vh] lg:h-[65vh] min-h-[320px] sm:min-h-[420px] bg-[var(--color-royal-deep)]">
        <Image
          src={writingData.image}
          alt={writingData.title}
          fill
          className="object-cover opacity-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-royal-darkest)] via-[var(--color-royal-deep)]/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pb-10 sm:pb-14 lg:pb-20 animate-fade-in-up">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="text-[0.6rem] font-bold tracking-[0.25em] text-[var(--color-gold)] uppercase">
                {writingData.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span className="text-micro sm:text-xs text-white/70 font-medium">{date}</span>
              {writingData.readingTime && (
                <>
                  <span className="w-1 h-1 rounded-full bg-white/40" />
                  <span className="inline-flex items-center gap-1 text-micro sm:text-xs text-white/70 font-medium">
                    <Clock className="w-3 h-3 text-[var(--color-gold)]" />
                    {writingData.readingTime} min read
                  </span>
                </>
              )}
            </div>
            
            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight max-w-4xl tracking-tight">
              {writingData.title}
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg text-white/70 max-w-2xl leading-relaxed font-medium">
              {writingData.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Main content body */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-24 lg:pb-28">
        <Link
          href="/writings"
          className="inline-flex items-center text-xs font-bold tracking-wider text-gray-400 hover:text-[var(--color-royal-deep)] uppercase mb-10 sm:mb-14 transition-colors duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Writings
        </Link>

        {/* Prose text */}
        <div
          className="prose prose-base sm:prose-lg max-w-none prose-headings:font-heading prose-headings:text-[var(--color-royal-deep)] prose-a:text-[var(--color-royal)] hover:prose-a:text-[var(--color-gold)] prose-p:text-gray-600 prose-p:leading-[1.9] prose-strong:text-[var(--color-royal-deep)]"
          dangerouslySetInnerHTML={{ __html: writingData.contentHtml }}
        />

        {/* Author Bio Section */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 bg-[var(--color-ivory)]/40 p-6 sm:p-8 rounded-sm text-center sm:text-left border border-gray-100/50">
            <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 relative border-2 border-white shadow-sm">
              <Image
                src="/images/author.png"
                alt="Shalaymah"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-[var(--color-royal-deep)] mb-1.5">Shalaymah</h4>
              <p className="text-gray-500 text-sm leading-[1.8]">
                A prophetic dreamer, watchwoman, and author called to remember, restore, heal, and build through words, wisdom, and divine revelation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
