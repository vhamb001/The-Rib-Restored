import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { books } from "@/data/books";
import { projects } from "@/data/projects";
import { getSortedWritingsData } from "@/lib/writings";
import { Crown, Home, Headphones, Lightbulb, ArrowRight, BookOpen, Quote } from "lucide-react";
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem, ParallaxSection, CountUp, TextReveal } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { BookShowcase } from "@/components/shared/book-showcase";
import homepageData from "../../content/data/homepage.json";
import siteData from "../../content/data/site.json";
import communityData from "../../content/data/community.json";

const projectIcons: Record<string, React.ReactNode> = {
  crown: <Crown className="w-6 h-6 text-[var(--color-gold)]" strokeWidth={1.25} />,
  home: <Home className="w-6 h-6 text-[var(--color-gold)]" strokeWidth={1.25} />,
  headphones: <Headphones className="w-6 h-6 text-[var(--color-gold)]" strokeWidth={1.25} />,
  lightbulb: <Lightbulb className="w-6 h-6 text-[var(--color-gold)]" strokeWidth={1.25} />,
};

function renderBioText(text: string) {
  const parts = text.split(/<highlight>(.*?)<\/highlight>/g);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <span key={i} className="text-[var(--color-gold)] font-bold">{part}</span>
      : part
  );
}

const renderStatValue = (value: string) => {
  const num = parseInt(value);
  if (!isNaN(num)) {
    const suffix = value.replace(num.toString(), "");
    return <CountUp end={num} suffix={suffix} />;
  }
  return value;
};

export default function HomePage() {
  const writings = getSortedWritingsData().slice(0, 3);
  const featuredBooks = books.filter((b) => b.category !== "Children" && b.status === "Available");
  const childrensBooks = books.filter((b) => b.category === "Children");

  return (
    <div className="overflow-hidden">
      {/* ════════════════════════════════════════════
          1. HERO — Immersive Editorial Layout
          ════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[92vh] flex items-center bg-gradient-to-br from-white via-[var(--color-ivory)]/40 to-white overflow-hidden border-b border-gray-100/30">
        {/* Decorative soft glowing orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[45vw] h-[45vw] bg-[var(--color-gold)]/10 rounded-full blur-[130px] animate-pulse-gold pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[35vw] h-[35vw] bg-[var(--color-royal)]/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Floating fine grid line accents */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "linear-gradient(to right, var(--color-royal) 1px, transparent 1px), linear-gradient(to bottom, var(--color-royal) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text content — left side */}
            <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
              <FadeIn className="mb-4">
                <span className="inline-block text-micro text-[0.7rem] font-bold tracking-[0.3em] text-[var(--color-gold)] uppercase">
                  {homepageData.hero.welcomeLabel}
                </span>
              </FadeIn>

              {/* Responsive title block */}
              <div className="relative mb-6">
                <h1 className="text-display tracking-tight text-[var(--color-royal-deep)] leading-[0.9] select-none">
                  <TextReveal text={homepageData.hero.titleLine1} delay={0.1} />
                </h1>
                <span className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] text-[var(--color-gold)] block mt-2 ml-4 lg:ml-12 select-none animate-fade-in" style={{ animationDelay: "0.8s" }}>
                  {homepageData.hero.titleLine2}
                </span>
              </div>

              {/* Byline with gold-rule brackets */}
              <FadeIn delay={0.4} className="flex items-center gap-4 mb-8 justify-center lg:justify-start">
                <div className="w-10 h-px bg-gradient-to-r from-transparent to-[var(--color-gold)]" />
                <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.25em] text-[var(--color-royal-deep)] uppercase">
                  {homepageData.hero.authorByline}
                </span>
                <div className="w-10 h-px bg-gradient-to-l from-transparent to-[var(--color-gold)]" />
              </FadeIn>

              {/* Short descriptive block */}
              <FadeIn delay={0.5}>
                <p className="text-body-lg text-sm sm:text-base md:text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed text-gray-500">
                  {homepageData.hero.description}
                </p>
              </FadeIn>

              {/* CTAs */}
              <FadeIn delay={0.6} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="gold" size="lg" asChild className="shadow-md hover:shadow-lg transition-all duration-300">
                  <Link href={homepageData.hero.ctaPrimary.href}>{homepageData.hero.ctaPrimary.text}</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild className="hover:shadow-sm transition-all duration-300">
                  <Link href={homepageData.hero.ctaSecondary.href}>{homepageData.hero.ctaSecondary.text}</Link>
                </Button>
              </FadeIn>
            </div>

            {/* Author Portrait Image — right side */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <FadeIn delay={0.3} className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-full">
                {/* Parallax elements */}
                <ParallaxSection speed={0.06} className="relative z-10">
                  <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(12,45,122,0.12)] bg-[var(--color-ivory)] border border-white/60">
                    <img
                      src="/images/author.png"
                      alt={homepageData.hero.heroImageAlt}
                      className="w-full h-full object-cover"
                    />
                    {/* Shadow overlay overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Absolute Gold Frames */}
                  <div className="absolute -bottom-6 -right-6 w-full h-full border border-[var(--color-gold)]/35 rounded-sm -z-10" />
                  <div className="absolute -top-6 -left-6 w-16 h-16 border-t border-l border-[var(--color-gold)]/40 rounded-sm -z-10" />
                </ParallaxSection>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2. ABOUT THE AUTHOR — Poetic Storytelling
          ════════════════════════════════════════════ */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Delicate floating shapes */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[var(--color-gold)]/3 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-[var(--color-royal)]/3 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <FadeIn direction="right" className="relative max-w-xs sm:max-w-sm mx-auto lg:mx-0">
                <ParallaxSection speed={0.03} className="relative z-10">
                  <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.08)] bg-[var(--color-ivory)] border border-gray-100">
                    <Image
                      src={homepageData.aboutAuthor.authorImage}
                      alt={homepageData.aboutAuthor.authorImageAlt}
                      fill
                      sizes="(max-width: 640px) 300px, 450px"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  {/* Outer Frame */}
                  <div className="absolute -bottom-5 -right-5 w-full h-full border border-[var(--color-gold)]/30 rounded-sm -z-10" />
                  <div className="absolute -top-5 -left-5 w-20 h-20 border-t border-l border-[var(--color-gold)]/30 rounded-sm -z-10" />
                </ParallaxSection>
              </FadeIn>
            </div>

            {/* Text details column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <SectionHeader
                label={homepageData.aboutAuthor.sectionLabel}
                heading={homepageData.aboutAuthor.headingLine1}
                headingAccent={homepageData.aboutAuthor.headingLine2}
                align="left"
                className="mb-8"
              />

              <FadeIn delay={0.2} className="space-y-6 mb-10">
                {homepageData.aboutAuthor.bioParagraphs.map((p, i) => (
                  <p key={i} className="text-body text-sm md:text-base leading-[1.85] text-gray-500">
                    {renderBioText(p)}
                  </p>
                ))}
              </FadeIn>

              {/* Action buttons and Amazon Link */}
              <FadeIn delay={0.3} className="flex flex-wrap items-center gap-6 mb-10 pb-8 border-b border-gray-100">
                <Button variant="gold" size="sm" asChild>
                  <Link href={homepageData.aboutAuthor.bioCta.href}>{homepageData.aboutAuthor.bioCta.text}</Link>
                </Button>
                <a
                  href={siteData.links.amazonAuthorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-micro font-bold text-[var(--color-royal-deep)] hover:text-[var(--color-gold)] transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-px after:bg-[var(--color-gold)] after:scale-x-100 hover:after:scale-x-0 after:origin-left after:transition-transform after:duration-300"
                >
                  {homepageData.aboutAuthor.amazonLinkText}
                </a>
              </FadeIn>

              {/* Animated statistics row */}
              <StaggerContainer staggerDelay={0.15} className="flex items-center gap-8 md:gap-12">
                {homepageData.aboutAuthor.stats.map((stat, i) => (
                  <StaggerItem key={i} className="flex items-center">
                    {i > 0 && <div className="w-px h-12 bg-gray-200 mr-8 md:mr-12" />}
                    <div className="text-left">
                      <div className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-royal-deep)] tracking-tight">
                        {renderStatValue(stat.value)}
                      </div>
                      <div className="text-micro text-gray-400 font-bold tracking-wider mt-1">{stat.label}</div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3. FEATURED BOOKS — Curated Editorial Showcase
          ════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-ivory)]/40 border-t border-b border-gray-100/35 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SectionHeader
            label={homepageData.featuredBooks.sectionLabel}
            heading={homepageData.featuredBooks.heading}
            description={homepageData.featuredBooks.description}
            align="center"
            className="mb-14 md:mb-20"
          />

          {/* Book Showcase Stagger Row */}
          <div className="space-y-12 max-w-5xl mx-auto">
            {featuredBooks.map((book, index) => (
              <FadeIn key={book.id} delay={index * 0.15}>
                <BookShowcase book={book} layout="featured" priority={index === 0} />
              </FadeIn>
            ))}
          </div>

          {/* Coming Soon Teaser */}
          <FadeIn className="text-center mt-16 md:mt-20">
            <div className="inline-flex items-center gap-4 bg-white border border-gray-100/80 px-6 py-4 rounded-sm shadow-[0_4px_16px_rgba(0,0,0,0.02)] max-w-md mx-auto">
              <div className="w-10 h-10 rounded-full bg-[var(--color-ivory)] flex items-center justify-center text-[var(--color-gold)] flex-shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-[var(--color-royal-deep)] leading-tight">{homepageData.featuredBooks.comingSoonHeading}</h4>
                <p className="text-[0.6875rem] text-gray-400 font-bold uppercase tracking-wider mt-0.5">{homepageData.featuredBooks.comingSoonDescription}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3B. CHILDREN'S CORNER — Whimsical, Warm Grid
          ════════════════════════════════════════════ */}
      {childrensBooks.length > 0 && (
        <section className="section-padding bg-white relative overflow-hidden">
          {/* Gentle background wash */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-[var(--color-ivory)]/25 pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
            <SectionHeader
              label={homepageData.childrensCorner.sectionLabel}
              heading={homepageData.childrensCorner.heading}
              align="center"
              className="mb-14"
            />

            <StaggerContainer className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {childrensBooks.map((book) => (
                <StaggerItem key={book.id}>
                  <BookShowcase book={book} layout="card" />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════
          3C. COMMUNITY CORNER — Fellowship Grid
          ════════════════════════════════════════════ */}
      {communityData.length > 0 && (
        <section className="section-padding bg-white border-t border-gray-100/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <SectionHeader
              label={homepageData.communityCorner.sectionLabel}
              heading={homepageData.communityCorner.heading}
              align="center"
              className="mb-14"
            />

            <StaggerContainer className="grid md:grid-cols-2 gap-8 lg:gap-12 justify-center">
              {communityData.map((item: any) => (
                <StaggerItem key={item.id}>
                  <div className="group flex flex-col h-full bg-white rounded-sm border border-gray-100 hover:border-[var(--color-soft-gold)]/40 hover:shadow-xl transition-all duration-500">
                    <div className="w-full bg-[var(--color-ivory)]/30 flex justify-center items-center p-6 border-b border-gray-100/40 relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={item.cover}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 450px"
                        className="object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-grow text-center md:text-left">
                      {item.subtitle && (
                        <span className="text-label text-[0.625rem] mb-2">
                          {item.subtitle}
                        </span>
                      )}
                      <h3 className="font-heading text-xl font-bold text-[var(--color-royal-deep)] mb-3 leading-snug group-hover:text-[var(--color-royal)] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                        {item.description}
                      </p>
                      <div className="mt-auto">
                        <Button variant="gold" className="w-full sm:w-auto" asChild>
                          <Link href={item.link}>Explore</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════
          4. POETIC INTERLUDE — Scripture Glow
          ════════════════════════════════════════════ */}
      <section className="relative bg-[var(--color-royal-deep)] py-16 sm:py-24 lg:py-28 overflow-hidden">
        {/* Soft elegant mesh background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 2px, transparent 0)", backgroundSize: "36px 36px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[var(--color-gold)]/15 rounded-full blur-[90px] pointer-events-none animate-pulse-gold" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
          <FadeIn>
            <Quote className="w-10 h-10 text-[var(--color-gold)]/35 mx-auto mb-6 rotate-180" />
            <blockquote className="font-heading text-xl sm:text-2xl lg:text-3xl text-white/90 italic leading-relaxed mb-8 px-4">
              &ldquo;{homepageData.scriptureQuote.text}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-px bg-[var(--color-gold)]/30" />
              <cite className="text-micro font-bold tracking-[0.25em] text-[var(--color-gold)] uppercase not-italic">
                {homepageData.scriptureQuote.citation}
              </cite>
              <div className="w-10 h-px bg-[var(--color-gold)]/30" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          5. JOURNAL — Magazine Layout
          ════════════════════════════════════════════ */}
      <section className="section-padding bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Split row header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 lg:mb-16">
            <SectionHeader
              label={homepageData.latestWritings.sectionLabel}
              heading={homepageData.latestWritings.heading}
              align="left"
              className="mb-6 md:mb-0"
            />
            <FadeIn>
              <Button variant="ghost" asChild className="group pr-0 hover:text-[var(--color-gold)]">
                <Link href="/writings">
                  {homepageData.latestWritings.viewAllText}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </Button>
            </FadeIn>
          </div>

          {/* Writings Editorial Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {writings.map((writing, index) => {
              const date = new Date(writing.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
              return (
                <StaggerItem key={writing.slug} className="group">
                  <Link href={`/writings/${writing.slug}`} className="flex flex-col h-full">
                    {/* Cover Wrap */}
                    <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-[var(--color-ivory)] mb-5 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      <Image
                        src={writing.image}
                        alt={writing.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                        className="object-cover transition-transform duration-700 group-hover:scale-104"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    {/* Metatags */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[0.6rem] font-bold tracking-widest text-[var(--color-gold)] uppercase">{writing.category}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-200" />
                      <span className="text-micro text-gray-400 font-medium">{date}</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[var(--color-royal-deep)] mb-3 leading-snug group-hover:text-[var(--color-gold)] transition-colors duration-300">
                      {writing.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-[1.7] line-clamp-3 mb-5">
                      {writing.excerpt}
                    </p>
                    <span className="inline-flex items-center text-micro text-[var(--color-royal)] font-bold tracking-wider mt-auto group-hover:text-[var(--color-gold)] transition-colors duration-300">
                      Read Entry <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          6. PROJECTS & VENTURES — Lightweight Grid
          ════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-ivory)]/40 border-t border-b border-gray-100/35">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <SectionHeader
            label={homepageData.projectsVentures.sectionLabel}
            heading={homepageData.projectsVentures.heading}
            description={homepageData.projectsVentures.description}
            align="center"
            className="mb-16"
          />

          <StaggerContainer className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project) => (
              <StaggerItem key={project.id} className="card-premium h-full bg-white rounded-sm border border-gray-100 overflow-hidden flex flex-col">
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  {/* Top line with Icon and category tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-ivory)] flex items-center justify-center shadow-sm">
                      {projectIcons[project.iconName] || <Lightbulb className="w-6 h-6 text-[var(--color-gold)]" strokeWidth={1.25} />}
                    </div>
                    {project.tagline && (
                      <span className="text-micro text-[0.6rem] text-gray-400 font-semibold tracking-wider max-w-[200px] text-right line-clamp-1">
                        {project.tagline}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-[var(--color-royal-deep)] mb-3 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-[1.7] mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-100 flex flex-wrap gap-4 items-center justify-between">
                    {project.url !== "#" ? (
                      <Button variant="ghost" size="sm" asChild className="group font-bold text-[var(--color-royal-deep)] pr-0 hover:text-[var(--color-gold)]">
                        <Link href={project.url}>
                          Explore Project
                          <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    ) : (
                      <span className="text-micro text-gray-300 font-bold uppercase">Development Phase</span>
                    )}

                    {project.socialUrl && (
                      <a
                        href={project.socialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[0.625rem] font-bold text-gray-400 hover:text-[var(--color-gold)] tracking-wider uppercase transition-colors"
                      >
                        {project.socialHandle || project.socialLabel}
                      </a>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          6B. LISTEN & READ — Premium Glass Layout
          ════════════════════════════════════════════ */}
      <section className="section-padding bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SectionHeader
            label={homepageData.listenRead.sectionLabel}
            heading={homepageData.listenRead.heading}
            description={homepageData.listenRead.description}
            align="center"
            className="mb-16"
          />

          <StaggerContainer className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Substack Card */}
            <StaggerItem>
              <div className="group relative bg-gradient-to-br from-[#fdfbf7] to-white border border-gray-100/80 rounded-sm p-8 sm:p-12 overflow-hidden shadow-sm hover:shadow-xl hover:border-[var(--color-gold)]/35 transition-all duration-500 h-full flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white border border-gray-100 rounded-full flex items-center justify-center text-[var(--color-gold)] mb-8 group-hover:bg-[var(--color-gold)] group-hover:text-white transition-colors duration-500 shadow-sm">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
                </div>
                <h3 className="font-heading text-2xl font-bold text-[var(--color-royal-deep)] mb-4">
                  {homepageData.listenRead.substack.heading}
                </h3>
                <p className="text-gray-500 text-sm leading-[1.8] mb-10 max-w-sm">
                  {homepageData.listenRead.substack.description}
                </p>
                <Button variant="gold" size="lg" className="rounded-sm w-full sm:w-auto px-8 mt-auto shadow-sm hover:scale-103 transition-transform duration-300" asChild>
                  <a href={siteData.links.substackUrl} target="_blank" rel="noopener noreferrer">{homepageData.listenRead.substack.ctaText}</a>
                </Button>
              </div>
            </StaggerItem>

            {/* Spotify Card */}
            <StaggerItem>
              <div className="group relative bg-[var(--color-royal-darkest)] border border-white/5 rounded-sm p-8 sm:p-12 overflow-hidden shadow-[0_20px_50px_rgba(6,27,78,0.15)] hover:shadow-[0_25px_60px_rgba(6,27,78,0.25)] hover:border-[var(--color-gold)]/40 transition-all duration-500 h-full flex flex-col items-center text-center">
                {/* Glowing light effect */}
                <div className="absolute top-[-10%] right-[-10%] w-60 h-60 bg-[var(--color-gold)]/10 rounded-full blur-[80px] pointer-events-none" />

                <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white mb-8 group-hover:bg-[var(--color-gold)] group-hover:border-[var(--color-gold)] transition-colors duration-500 backdrop-blur-md shadow-sm">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.6 14.4c-.2.3-.6.4-.9.2-2.5-1.5-5.7-1.8-9.4-1-.3.1-.7-.1-.8-.4-.1-.3.1-.7.4-.8 4.1-.9 7.6-.5 10.4 1.2.3.1.4.5.3.8zm1.2-2.7c-.2.4-.7.5-1 .3-2.9-1.8-6.6-2.2-10-1.2-.4.1-.9-.1-1-.5-.1-.4.1-.9.5-1 3.9-1.2 8.1-.7 11.4 1.3.3.3.4.8.1 1.1zm.1-2.9c-3.4-2-8.1-2.2-11-1.2-.5.2-1-.1-1.2-.6-.2-.5.1-1 .6-1.2 3.4-1.2 8.6-1 12.5 1.3.5.3.6.9.3 1.4-.2.4-.7.6-1.2.3z"/></svg>
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4 relative z-10">
                  {homepageData.listenRead.spotify.heading}
                </h3>
                <p className="text-white/60 text-sm leading-[1.8] mb-10 max-w-sm relative z-10">
                  {homepageData.listenRead.spotify.description}
                </p>
                <Button variant="secondary" size="lg" className="rounded-sm w-full sm:w-auto px-8 mt-auto border-white/20 text-white hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] hover:text-white hover:scale-103 transition-all duration-300 relative z-10" asChild>
                  <a href={siteData.links.spotifyUrl} target="_blank" rel="noopener noreferrer">{homepageData.listenRead.spotify.ctaText}</a>
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          7. NEWSLETTER — Elegant Frame Callout
          ════════════════════════════════════════════ */}
      <section id="newsletter" className="relative bg-[var(--color-royal-deep)] py-20 sm:py-28 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[var(--color-gold)]/10 rounded-full blur-[110px] pointer-events-none animate-pulse-gold" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center relative z-10">
          <FadeIn className="bg-white/[0.02] border border-white/10 rounded-sm p-8 sm:p-12 backdrop-blur-sm relative">
            {/* Elegant corner brackets */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[var(--color-gold)]/50" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[var(--color-gold)]/50" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[var(--color-gold)]/50" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[var(--color-gold)]/50" />

            <h2 className="font-script text-4xl sm:text-5xl text-[var(--color-gold)] mb-4">
              {homepageData.newsletter.heading}
            </h2>
            <p className="text-white/60 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
              {homepageData.newsletter.description}
            </p>
            <div className="flex justify-center">
              <Button variant="gold" size="lg" className="rounded-sm text-[0.7rem] tracking-[0.2em] font-bold px-12 group hover:scale-104 transition-all duration-300" asChild>
                <a href={siteData.links.substackUrl} target="_blank" rel="noopener noreferrer">
                  {homepageData.newsletter.ctaText}
                  <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
