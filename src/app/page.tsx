import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { books } from "@/data/books";
import { projects } from "@/data/projects";
import { getSortedWritingsData } from "@/lib/writings";
import { Crown, Home, Headphones, Lightbulb, ArrowRight, BookOpen, Quote } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

const projectIcons: Record<string, React.ReactNode> = {
  crown: <Crown className="w-6 h-6" strokeWidth={1.25} />,
  home: <Home className="w-6 h-6" strokeWidth={1.25} />,
  headphones: <Headphones className="w-6 h-6" strokeWidth={1.25} />,
  lightbulb: <Lightbulb className="w-6 h-6" strokeWidth={1.25} />,
};

export default function HomePage() {
  const writings = getSortedWritingsData().slice(0, 3);
  const featuredBooks = books.filter((b) => b.category !== "Children" && b.status === "Available");
  const childrensBooks = books.filter((b) => b.category === "Children");

  return (
    <>
      {/* ════════════════════════════════════════════
          1. HERO — Full-width immersive layout
          ════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[85vh] md:min-h-[600px] lg:min-h-[720px] flex items-center overflow-hidden">
        {/* Soft background wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[var(--color-ivory)] to-white" />

        {/* Decorative light effects */}
        <div className="absolute top-20 right-[15%] w-72 h-72 bg-[var(--color-gold)]/8 rounded-full blur-[100px] animate-pulse-gold pointer-events-none" />
        <div className="absolute bottom-10 left-[10%] w-48 h-48 bg-[var(--color-royal)]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text content — full-width on mobile */}
            <div className="animate-fade-in-up order-2 lg:order-1 text-center lg:text-left">
              <span className="inline-block text-[0.6rem] font-bold tracking-[0.35em] text-gray-400 uppercase mb-4 sm:mb-6">
                Welcome to
              </span>

              {/* Title lockup */}
              <div className="relative mb-6 sm:mb-8">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.06em] text-[var(--color-royal-deep)] uppercase leading-[0.95]">
                  The Rib
                </h1>
                <span className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] text-[var(--color-gold)] block -mt-2 sm:-mt-3 ml-4 sm:ml-6 lg:ml-10">
                  Restored
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-[var(--color-gold)]" />
                <span className="font-heading text-sm sm:text-base lg:text-lg font-bold tracking-[0.25em] text-[var(--color-royal-deep)] uppercase">
                  By Shalaymah
                </span>
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-[var(--color-gold)]" />
              </div>

              <p className="text-gray-500 text-sm lg:text-[0.95rem] leading-[1.9] mb-8 sm:mb-10 max-w-md mx-auto lg:mx-0">
                Author. Dreamer. Visionary. I write to restore, to reveal, and to remember. 
                This is a space for books, writings, projects, reflections, and purpose.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button variant="gold" size="lg" asChild>
                  <Link href="/books">Explore My Books</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/writings">Read My Writings</Link>
                </Button>
              </div>
            </div>

            {/* Author image — right side */}
            <div className="relative order-1 lg:order-2 animate-fade-in-up flex justify-center lg:justify-end" style={{ animationDelay: "0.15s" }}>
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                  <Image
                    src="/images/author.png"
                    alt="Shalaymah – Author & Visionary"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                {/* Decorative frames */}
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-full h-full border-2 border-[var(--color-gold)]/20 rounded-sm -z-10" />
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-20 h-20 sm:w-24 sm:h-24 border-t-2 border-l-2 border-[var(--color-gold)]/30 rounded-tl-sm" />
                {/* Floating gold accent */}
                <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[var(--color-gold)]/20 to-transparent rounded-full blur-lg animate-float pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Gold accent bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />
      </section>

      {/* ════════════════════════════════════════════
          2. ABOUT THE AUTHOR
          ════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Subtle decorative blob */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[var(--color-gold)]/3 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Author Image */}
            <div className="relative animate-fade-in-up">
              <div className="relative aspect-[3/4] max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0 rounded-sm overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <Image
                  src="/images/author.png"
                  alt="Shalaymah"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[var(--color-gold)]/20 rounded-sm -z-10 hidden sm:block" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[var(--color-gold)]/30 rounded-tl-sm hidden sm:block" />
            </div>

            {/* Text content */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <span className="inline-block text-[0.6rem] font-bold tracking-[0.3em] text-[var(--color-gold)] uppercase mb-4">
                About the Author
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--color-royal-deep)] mb-2 leading-tight">
                My Story.
              </h2>
              <h2 className="font-script text-4xl lg:text-5xl text-[var(--color-gold)] mb-6 sm:mb-8 leading-none">
                My Calling.
              </h2>
              <div className="w-12 h-[2px] bg-gradient-to-r from-[var(--color-gold)] to-transparent mb-6 sm:mb-8" />
              <p className="text-gray-500 text-sm lg:text-[0.95rem] leading-[1.9] mb-4 sm:mb-6">
                I am Shalaymah — a prophetic dreamer, watchwoman, and author called to remember, 
                to heal, and to build through words, wisdom, and divine revelation.
              </p>
              <p className="text-gray-500 text-sm lg:text-[0.95rem] leading-[1.9] mb-6 sm:mb-8">
                Everything I create flows from purpose. From the pages of my books to the reflections 
                I share, my heart beats for restoration — for the quiet moments where healing begins, 
                and for the deep waters of understanding that transform lives.
              </p>
              <div className="flex items-center gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div className="text-center">
                  <span className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-royal-deep)]">2+</span>
                  <p className="text-[0.55rem] sm:text-[0.6rem] tracking-[0.2em] text-gray-400 uppercase mt-1">Books Published</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <span className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-royal-deep)]">∞</span>
                  <p className="text-[0.55rem] sm:text-[0.6rem] tracking-[0.2em] text-gray-400 uppercase mt-1">Dreams Decoded</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <span className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-royal-deep)]">4</span>
                  <p className="text-[0.55rem] sm:text-[0.6rem] tracking-[0.2em] text-gray-400 uppercase mt-1">Active Ventures</p>
                </div>
              </div>
              <Button variant="ghost" size="lg" className="group" asChild>
                <Link href="/about">
                  Learn More About Me
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3. FEATURED BOOKS SHOWCASE
          ════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[var(--color-ivory)] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Section header */}
          <div className="text-center mb-10 sm:mb-14 animate-fade-in-up">
            <span className="inline-block text-[0.6rem] font-bold tracking-[0.3em] text-[var(--color-gold)] uppercase mb-4">
              Library
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--color-royal-deep)] mb-4">
              Featured Books
            </h2>
            <div className="gold-rule w-20 mx-auto mb-6" />
            <p className="text-gray-500 text-sm lg:text-base max-w-md mx-auto">
              Words that restore. Stories that reveal. Kingdom understanding, one page at a time.
            </p>
          </div>

          {/* Books */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto stagger-children">
            {featuredBooks.map((book) => (
              <div key={book.id} className="group bg-white rounded-sm border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:border-[var(--color-gold)]/20 h-full">
                <div className="flex flex-col sm:flex-row h-full">
                  <div className="shrink-0 sm:w-44 lg:w-48 bg-[var(--color-ivory)]/30 sm:bg-gray-50 flex justify-center items-center py-8 sm:p-6 lg:p-8 border-b sm:border-b-0 sm:border-r border-gray-100">
                    <div className="relative w-36 sm:w-full aspect-[2/3] rounded-sm overflow-hidden shadow-md">
                      <Image
                        src={book.cover}
                        alt={book.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                  <div className="p-5 sm:p-5 lg:p-7 flex flex-col justify-center flex-grow">
                    <span className="text-[0.55rem] font-bold tracking-[0.25em] text-[var(--color-gold)] uppercase mb-2">
                      {book.subtitle}
                    </span>
                    <h3 className="font-heading text-xl lg:text-2xl font-bold text-[var(--color-royal-deep)] mb-3 leading-tight">
                      {book.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-[1.7] mb-5">
                      {book.description}
                    </p>
                    {book.formats.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                        {book.formats.map((format) => (
                          <a
                            key={format.type}
                            href={format.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 min-w-[90px] sm:flex-none inline-flex justify-center sm:justify-start items-center gap-1 text-[0.6rem] sm:text-[0.55rem] font-bold tracking-[0.15em] sm:tracking-wider uppercase border border-gray-200 hover:border-[var(--color-gold)] text-gray-500 hover:text-[var(--color-gold)] px-3 py-2.5 sm:px-2 sm:py-1.5 rounded-sm transition-all duration-300 hover:shadow-sm"
                          >
                            <span>{format.type}</span>
                            {format.price && <span className="text-gray-300 hidden sm:inline">·</span>}
                            {format.price && <span className="text-[var(--color-gold)] ml-1 sm:ml-0">{format.price}</span>}
                          </a>
                        ))}
                      </div>
                    )}
                    {book.formats.length === 0 && (
                      <Button variant="secondary" className="w-fit mt-auto" disabled>
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Teaser */}
          <div className="text-center mt-10 sm:mt-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 bg-white border border-gray-100 px-5 sm:px-6 py-3 sm:py-4 rounded-sm">
              <BookOpen className="w-5 h-5 text-[var(--color-gold)]" />
              <div className="text-left">
                <p className="text-sm font-semibold text-[var(--color-royal-deep)]">More revelations coming soon</p>
                <p className="text-[0.6rem] text-gray-400 tracking-wider uppercase">New books are in the works. Stay tuned!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3B. CHILDREN'S CORNER
          ════════════════════════════════════════════ */}
      {childrensBooks.length > 0 && (
        <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[var(--color-ivory)]/30 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-10 sm:mb-14 animate-fade-in-up">
              <span className="inline-block text-[0.6rem] font-bold tracking-[0.3em] text-[var(--color-gold)] uppercase mb-4">
                For The Little Ones
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--color-royal-deep)] mb-4">
                Children&apos;s Corner
              </h2>
              <div className="gold-rule w-20 mx-auto mb-6" />
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 stagger-children">
              {childrensBooks.map((book) => (
                <div key={book.id} className="group bg-white rounded-3xl border-2 border-[var(--color-ivory)] overflow-hidden transition-all duration-500 hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] hover:border-[var(--color-gold)]/30 h-full">
                  <div className="flex flex-col sm:flex-row h-full">
                    <div className="shrink-0 sm:w-44 lg:w-48 bg-gradient-to-br from-[#fdfbf7] to-[#f4f1e9] flex justify-center items-center py-8 sm:p-6 lg:p-8 border-b sm:border-b-0 sm:border-r border-gray-100/50">
                      <div className="relative w-36 sm:w-full aspect-[3/4] rounded-xl overflow-hidden shadow-sm border border-gray-100/50">
                        <Image
                          src={book.cover}
                          alt={book.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                        />
                      </div>
                    </div>
                    <div className="p-5 sm:p-5 lg:p-7 flex flex-col justify-center flex-grow">
                      <span className="text-[0.6rem] font-bold tracking-widest text-[#d4af37] uppercase mb-2 bg-[#fdfbf7] w-fit px-2 py-1 rounded-md">
                        {book.subtitle}
                      </span>
                      <h3 className="font-heading text-xl lg:text-2xl font-bold text-[var(--color-royal-deep)] mb-3 leading-tight">
                        {book.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-[1.7] mb-5">
                        {book.description}
                      </p>
                      <div className="mt-auto">
                        <Button variant="gold" className="w-fit rounded-full px-6" disabled={book.status === "Coming Soon"}>
                          {book.status === "Coming Soon" ? "Coming Soon" : "View Book"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════
          4. SCRIPTURE / QUOTE INTERLUDE
          ════════════════════════════════════════════ */}
      <section className="relative bg-[var(--color-royal-deep)] py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        {/* Gold glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[var(--color-gold)]/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center relative z-10">
          <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--color-gold)]/40 mx-auto mb-4 sm:mb-6 rotate-180" />
          <blockquote className="font-heading text-lg sm:text-xl lg:text-2xl text-white/90 italic leading-relaxed mb-4 sm:mb-6 px-2">
            &ldquo;She is clothed with strength and dignity, and she laughs without fear of the future.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-px bg-[var(--color-gold)]/40" />
            <cite className="text-[0.6rem] font-bold tracking-[0.3em] text-[var(--color-gold)] uppercase not-italic">
              Proverbs 31:25
            </cite>
            <div className="w-8 h-px bg-[var(--color-gold)]/40" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          5. LATEST WRITINGS
          ════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-14">
            <div className="animate-fade-in-up">
              <span className="inline-block text-[0.6rem] font-bold tracking-[0.3em] text-[var(--color-gold)] uppercase mb-4">
                From the Journal
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--color-royal-deep)]">
                Latest Writings
              </h2>
            </div>
            <Link
              href="/writings"
              className="group inline-flex items-center text-sm font-bold tracking-wider text-[var(--color-royal-deep)] uppercase mt-4 sm:mt-0 hover:text-[var(--color-gold)] transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Writings Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 stagger-children">
            {writings.map((writing) => {
              const date = new Date(writing.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
              return (
                <Link
                  key={writing.slug}
                  href={`/writings/${writing.slug}`}
                  className="group flex flex-col"
                >
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-[var(--color-ivory)] mb-4 sm:mb-5">
                    <Image
                      src={writing.image}
                      alt={writing.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex items-center gap-3 mb-2 sm:mb-3">
                    <span className="text-[0.55rem] font-bold tracking-[0.2em] text-[var(--color-gold)] uppercase">{writing.category}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="text-[0.65rem] text-gray-400">{date}</span>
                  </div>
                  <h3 className="font-heading text-lg lg:text-xl font-bold text-[var(--color-royal-deep)] mb-2 group-hover:text-[var(--color-gold)] transition-colors duration-300 leading-tight">
                    {writing.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-[1.7] line-clamp-2 mb-3 sm:mb-4">
                    {writing.excerpt}
                  </p>
                  <span className="inline-flex items-center text-[0.65rem] font-bold tracking-wider text-[var(--color-royal)] uppercase mt-auto">
                    Read More <ArrowRight className="w-3 h-3 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          6. PROJECTS & VENTURES
          ════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[var(--color-ivory)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Section header */}
          <FadeIn className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-[0.6rem] font-bold tracking-[0.3em] text-[var(--color-gold)] uppercase mb-4">
              Initiatives
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--color-royal-deep)] mb-4">
              Projects & Ventures
            </h2>
            <div className="gold-rule w-20 mx-auto mb-6" />
            <p className="text-gray-500 text-sm lg:text-base max-w-md mx-auto">
              Ideas. Impact. Purpose in motion.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <Link href={project.url} className="group block h-full">
                  <div className="h-full bg-white p-6 sm:p-7 lg:p-8 rounded-sm border border-gray-100 hover:border-[var(--color-gold)]/20 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(200,151,62,0.06)] flex items-start gap-4 sm:gap-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[var(--color-ivory)] to-white border border-gray-100 shadow-sm text-[var(--color-royal-deep)] flex items-center justify-center shrink-0 transition-all duration-500 group-hover:from-[var(--color-gold)] group-hover:to-[var(--color-soft-gold)] group-hover:text-white group-hover:shadow-[0_8px_16px_rgba(200,151,62,0.25)] group-hover:border-transparent">
                      {projectIcons[project.iconName] || <Lightbulb className="w-5 h-5" strokeWidth={1.25} />}
                    </div>
                    <div>
                      <h3 className="font-heading text-base sm:text-lg font-bold text-[var(--color-royal-deep)] mb-1.5 group-hover:text-[var(--color-gold)] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-[1.7]">{project.description}</p>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          7. NEWSLETTER CTA
          ════════════════════════════════════════════ */}
      <section id="newsletter" className="relative bg-[var(--color-royal-deep)] py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[var(--color-gold)]/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center relative z-10">
          <h2 className="font-script text-2xl sm:text-3xl lg:text-4xl text-[var(--color-gold)] mb-3">
            Stay connected. Be the first to know.
          </h2>
          <p className="text-white/40 text-sm mb-6 sm:mb-8 max-w-md mx-auto">
            Subscribe to receive updates on new books, writings, and announcements directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 bg-white/5 border border-white/10 text-white px-5 py-3.5 rounded-sm outline-none placeholder:text-white/25 text-sm focus:border-[var(--color-gold)] transition-colors"
              required
            />
            <Button variant="gold" className="rounded-sm text-[0.65rem] tracking-[0.2em] px-8 h-auto py-3.5">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
