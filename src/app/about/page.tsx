import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Target, Eye, Hammer, ArrowRight, Quote } from "lucide-react";
import aboutData from "../../../content/data/about.json";
import siteData from "../../../content/data/site.json";

const pillarIcons: Record<string, React.ReactNode> = {
  heart: <Heart className="w-6 h-6" />,
  target: <Target className="w-6 h-6" />,
  eye: <Eye className="w-6 h-6" />,
  hammer: <Hammer className="w-6 h-6" />,
};

function renderBioText(text: string) {
  const parts = text.split(/<highlight>(.*?)<\/highlight>/g);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <span key={i} className="text-[var(--color-gold)] font-bold">{part}</span>
      : part
  );
}

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-[var(--color-ivory)] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-gold)]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center py-14 sm:py-20 lg:py-28">
            <div className="animate-fade-in-up order-2 lg:order-1 text-center lg:text-left">
              <span className="inline-block text-[0.6rem] font-bold tracking-[0.3em] text-[var(--color-gold)] uppercase mb-4">{aboutData.hero.sectionLabel}</span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-royal-deep)] mb-2 leading-tight">{aboutData.hero.headingLine1}</h1>
              <h1 className="font-script text-4xl sm:text-5xl md:text-6xl text-[var(--color-gold)] mb-6 sm:mb-8 leading-none">{aboutData.hero.headingLine2}</h1>
              <div className="w-12 h-[2px] bg-gradient-to-r from-[var(--color-gold)] to-transparent mb-6 sm:mb-8 mx-auto lg:mx-0" />
              {aboutData.hero.bioParagraphs.map((p, i) => (
                <p key={i} className="text-gray-500 text-sm lg:text-[0.95rem] leading-[1.9] mb-4 sm:mb-6 mx-auto lg:mx-0">
                  {renderBioText(p)}
                </p>
              ))}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center lg:justify-start mb-8">
                <Button variant="gold" size="sm" asChild>
                  <a href={siteData.links.amazonAuthorUrl} target="_blank" rel="noopener noreferrer">{aboutData.hero.amazonButtonText}</a>
                </Button>
                <a href={siteData.socialLinks.find(s => s.fullLabel === "Instagram")?.url || "#"} target="_blank" rel="noopener noreferrer" className="text-[0.6rem] font-bold tracking-[0.2em] text-[var(--color-royal-deep)] uppercase hover:text-[var(--color-gold)] transition-colors">
                  {aboutData.hero.instagramText}
                </a>
              </div>
              <div className="flex items-center gap-6 sm:gap-8 justify-center lg:justify-start">
                {aboutData.hero.stats.map((stat, i) => (
                  <div key={i} className="contents">
                    {i > 0 && <div className="w-px h-10 bg-gray-200" />}
                    <div className="text-center">
                      <span className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-royal-deep)]">{stat.value}</span>
                      <p className="text-[0.55rem] sm:text-[0.6rem] tracking-[0.2em] text-gray-400 uppercase mt-1">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <div className="relative aspect-[3/4] max-w-[280px] sm:max-w-sm md:max-w-md mx-auto rounded-sm overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <Image src="/images/author.png" alt="Shalaymah" fill className="object-cover" priority />
              </div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-full h-full border-2 border-[var(--color-gold)]/20 rounded-sm -z-10 hidden sm:block" />
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-20 h-20 sm:w-24 sm:h-24 border-t-2 border-l-2 border-[var(--color-gold)]/30 rounded-tl-sm hidden sm:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-[var(--color-royal-deep)] py-10 sm:py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center relative z-10">
          <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--color-gold)]/40 mx-auto mb-4 sm:mb-5 rotate-180" />
          <blockquote className="font-heading text-base sm:text-lg lg:text-xl text-white/90 italic leading-relaxed mb-4 sm:mb-5 px-2">
            &ldquo;{aboutData.quote.text}&rdquo;
          </blockquote>
          <cite className="text-[0.6rem] font-bold tracking-[0.3em] text-[var(--color-gold)] uppercase not-italic">{aboutData.quote.citation}</cite>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-[0.6rem] font-bold tracking-[0.3em] text-[var(--color-gold)] uppercase mb-4">{aboutData.pillars.sectionLabel}</span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-royal-deep)]">{aboutData.pillars.heading}</h2>
            <div className="gold-rule w-16 mx-auto mt-5" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 stagger-children">
            {aboutData.pillars.items.map((pillar) => (
              <div key={pillar.title} className="group bg-white p-6 sm:p-8 lg:p-10 rounded-sm border border-gray-100 hover:border-[var(--color-gold)]/30 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(200,151,62,0.06)]">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--color-ivory)] text-[var(--color-gold)] flex items-center justify-center transition-all duration-500 group-hover:bg-[var(--color-gold)] group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(200,151,62,0.25)] shrink-0">
                    {pillarIcons[pillar.iconName]}
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-[var(--color-royal-deep)]">{pillar.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-[1.8]">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[var(--color-ivory)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-[0.6rem] font-bold tracking-[0.3em] text-[var(--color-gold)] uppercase mb-4">{aboutData.beliefs.sectionLabel}</span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-royal-deep)]">{aboutData.beliefs.heading}</h2>
            <div className="gold-rule w-16 mx-auto mt-5" />
          </div>
          <div className="space-y-4 sm:space-y-6">
            {aboutData.beliefs.items.map((belief) => (
              <div key={belief.keyword} className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start bg-white p-5 sm:p-6 lg:p-8 rounded-sm border border-gray-100">
                <span className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--color-gold)] italic shrink-0 sm:w-28 sm:text-right">{belief.keyword}.</span>
                <div className="w-full sm:w-px h-px sm:h-12 bg-[var(--color-gold)]/30 shrink-0 sm:mt-1" />
                <p className="text-gray-500 text-sm lg:text-[0.95rem] leading-[1.8]">{belief.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="font-script text-3xl sm:text-4xl lg:text-5xl text-[var(--color-gold)] mb-3">{aboutData.cta.heading}</h2>
          <p className="text-gray-500 text-sm mb-6 sm:mb-8 max-w-sm mx-auto">{aboutData.cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button variant="gold" size="lg" asChild>
              <Link href={aboutData.cta.primaryButton.href}>{aboutData.cta.primaryButton.text}</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href={aboutData.cta.secondaryButton.href}>{aboutData.cta.secondaryButton.text}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
