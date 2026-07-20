import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Target, Eye, Hammer, ArrowRight, Quote, Sparkles, BookOpen, Scroll } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, ParallaxSection, CountUp } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
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

const renderStatValue = (value: string) => {
  const num = parseInt(value);
  if (!isNaN(num)) {
    const suffix = value.replace(num.toString(), "");
    return <CountUp end={num} suffix={suffix} />;
  }
  return value;
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ════════════════════════════════════════════
          1. HERO — Elegant Editorial Intro
          ════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-white via-[var(--color-ivory)]/40 to-white overflow-hidden border-b border-gray-100/30">
        {/* Soft glowing orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[45vw] h-[45vw] bg-[var(--color-gold)]/8 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10 py-16 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Biography content */}
            <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
              <FadeIn>
                <SectionHeader
                  label={aboutData.hero.sectionLabel}
                  heading={aboutData.hero.headingLine1}
                  headingAccent={aboutData.hero.headingLine2}
                  align="left"
                  className="mb-8"
                />
              </FadeIn>

              <FadeIn delay={0.2} className="space-y-6 mb-10 text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                {aboutData.hero.bioParagraphs.map((p, i) => (
                  <p key={i} className="text-body leading-[1.85]">
                    {renderBioText(p)}
                  </p>
                ))}
              </FadeIn>

              {/* Action Area */}
              <FadeIn delay={0.3} className="flex flex-wrap items-center gap-6 justify-center lg:justify-start mb-10 pb-8 border-b border-gray-100">
                <Button variant="gold" size="sm" asChild>
                  <a href={siteData.links.amazonAuthorUrl} target="_blank" rel="noopener noreferrer">{aboutData.hero.amazonButtonText}</a>
                </Button>
                
                <a
                  href={siteData.socialLinks.find(s => s.fullLabel === "Instagram")?.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-micro font-bold text-[var(--color-royal-deep)] hover:text-[var(--color-gold)] uppercase tracking-wider transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-px after:bg-[var(--color-gold)] after:scale-x-100 hover:after:scale-x-0 after:origin-left after:transition-transform after:duration-300"
                >
                  {aboutData.hero.instagramText}
                </a>

                <a
                  href={siteData.links.facebookUrl || siteData.socialLinks.find(s => s.fullLabel === "Facebook")?.url || "https://www.facebook.com/profile.php?id=61579278413766"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-micro font-bold text-[var(--color-royal-deep)] hover:text-[var(--color-gold)] uppercase tracking-wider transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-px after:bg-[var(--color-gold)] after:scale-x-100 hover:after:scale-x-0 after:origin-left after:transition-transform after:duration-300"
                >
                  Facebook Page
                </a>
              </FadeIn>

              {/* Stats */}
              <StaggerContainer staggerDelay={0.12} className="flex items-center justify-center lg:justify-start gap-8 md:gap-12">
                {aboutData.hero.stats.map((stat, i) => {
                  const statIcons = [BookOpen, Scroll, Sparkles];
                  const StatIcon = statIcons[i] || Sparkles;
                  return (
                  <StaggerItem key={i} className="flex items-center">
                    {i > 0 && <div className="w-px h-12 bg-gray-200 mr-8 md:mr-12" />}
                    <div className="text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <StatIcon className="w-4 h-4 text-[var(--color-gold)]" />
                        <div className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-royal-deep)] tracking-tight">
                          {renderStatValue(stat.value)}
                        </div>
                      </div>
                      <div className="text-micro text-gray-400 font-bold tracking-wider mt-1">{stat.label}</div>
                    </div>
                  </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>

            {/* Photo Column */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <FadeIn delay={0.3} className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-full">
                <ParallaxSection speed={0.04} className="relative z-10">
                  <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-[var(--color-ivory)] border border-white/60">
                    <Image
                      src="/images/author.png"
                      alt="Shalaymah"
                      fill
                      priority
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  {/* Decorative Frame */}
                  <div className="absolute -bottom-5 -right-5 w-full h-full border border-[var(--color-gold)]/30 rounded-sm -z-10" />
                  <div className="absolute -top-5 -left-5 w-20 h-20 border-t border-l border-[var(--color-gold)]/30 rounded-sm -z-10" />
                </ParallaxSection>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2. INTERLUDE — Scripture Glow
          ════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-[var(--color-royal-deep)] via-[var(--color-royal-mid)] to-[var(--color-royal-darkest)] py-16 sm:py-20 overflow-hidden relative bg-gradient-shift">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 2px, transparent 0)", backgroundSize: "36px 36px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-36 bg-[var(--color-gold)]/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
          <FadeIn>
            <Quote className="w-9 h-9 text-[var(--color-gold)]/35 mx-auto mb-6 rotate-180" />
            <blockquote className="font-heading text-lg sm:text-xl lg:text-2xl text-white/90 italic leading-relaxed mb-6 px-4">
              &ldquo;{aboutData.quote.text}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-8 h-px bg-[var(--color-gold)]/35" />
              <cite className="text-micro font-bold tracking-[0.25em] text-[var(--color-gold)] uppercase not-italic">
                {aboutData.quote.citation}
              </cite>
              <div className="w-8 h-px bg-[var(--color-gold)]/35" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3. PILLARS — Core Foundations
          ════════════════════════════════════════════ */}
      <section className="section-padding bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <SectionHeader
            label={aboutData.pillars.sectionLabel}
            heading={aboutData.pillars.heading}
            align="center"
            className="mb-14 md:mb-20"
          />

          <StaggerContainer className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {aboutData.pillars.items.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <div className="group bg-white p-8 sm:p-10 rounded-sm border border-gray-100/80 hover:border-[var(--color-soft-gold)]/40 hover:shadow-xl transition-all duration-500 flex flex-col h-full hover-glow-gold relative overflow-hidden">
                  {/* Royal blue left accent on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--color-royal)] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-ivory)] text-[var(--color-gold)] flex items-center justify-center transition-all duration-500 group-hover:bg-[var(--color-gold)] group-hover:text-white group-hover:shadow-[0_6px_20px_rgba(200,151,62,0.2)] shrink-0">
                      {pillarIcons[pillar.iconName]}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[var(--color-royal-deep)]">{pillar.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-[1.8] flex-grow">{pillar.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          4. BELIEFS — Poetic Timelines
          ════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--color-ivory)]/40 border-t border-b border-gray-100/35">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeader
            label={aboutData.beliefs.sectionLabel}
            heading={aboutData.beliefs.heading}
            align="center"
            className="mb-14 md:mb-20"
          />

          <StaggerContainer staggerDelay={0.15} className="space-y-6">
            {aboutData.beliefs.items.map((belief) => (
              <StaggerItem key={belief.keyword}>
                <div className="group flex flex-col sm:flex-row gap-4 sm:gap-8 items-start bg-white p-6 sm:p-8 rounded-sm border border-gray-100 hover:shadow-md hover:border-[var(--color-royal)]/15 transition-all duration-300 relative overflow-hidden">
                  {/* Subtle left accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--color-gold)] to-[var(--color-royal)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--color-gold)] italic shrink-0 sm:w-32 sm:text-right select-none">
                    {belief.keyword}.
                  </span>
                  <div className="hidden sm:block w-px h-12 bg-[var(--color-gold)]/20 shrink-0 sm:mt-1" />
                  <p className="text-gray-500 text-sm lg:text-[0.95rem] leading-[1.8]">{belief.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          5. CTA — Sacred Invitation
          ════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white border-t border-gray-100/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <FadeIn>
            <h2 className="font-script text-4xl sm:text-5xl text-[var(--color-gold)] mb-4">{aboutData.cta.heading}</h2>
            <p className="text-gray-500 text-sm sm:text-base mb-10 max-w-md mx-auto leading-relaxed">{aboutData.cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" className="w-full sm:w-auto px-10" asChild>
                <Link href={aboutData.cta.primaryButton.href}>{aboutData.cta.primaryButton.text}</Link>
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto px-10" asChild>
                <Link href={aboutData.cta.secondaryButton.href}>{aboutData.cta.secondaryButton.text}</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
