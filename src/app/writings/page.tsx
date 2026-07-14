import { getSortedWritingsData } from "@/lib/writings";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { WritingsList } from "@/components/writings/writings-list";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import writingsPageData from "../../../content/data/writings-page.json";
import siteData from "../../../content/data/site.json";

export default function WritingsPage() {
  const writings = getSortedWritingsData();

  return (
    <div className="bg-white min-h-screen">
      {/* ════════════════════════════════════════════
          1. HERO — Section Title Header
          ════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-white via-[var(--color-ivory)]/40 to-white py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-gray-100/35">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-royal)]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <SectionHeader
              label={writingsPageData.hero.sectionLabel}
              heading={writingsPageData.hero.heading}
              description={writingsPageData.hero.description}
              align="center"
            />
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2. CONTENT — Interactive Listing & Filtering
          ════════════════════════════════════════════ */}
      <section className="section-padding-sm py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <WritingsList writings={writings} categories={writingsPageData.categories} />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3. NEWSLETTER CTA — Callout Invitation
          ════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-ivory)]/40 border-t border-b border-gray-100/35">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <FadeIn>
            <div className="bg-[var(--color-royal-deep)] text-white p-8 sm:p-12 lg:p-16 rounded-sm relative overflow-hidden shadow-md">
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[var(--color-gold)]/35" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[var(--color-gold)]/35" />
              <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
              
              <div className="relative z-10">
                <h2 className="font-script text-3xl sm:text-4xl lg:text-5xl text-[var(--color-gold)] mb-4">{writingsPageData.newsletter.heading}</h2>
                <p className="text-white/60 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">{writingsPageData.newsletter.description}</p>
                <div className="flex justify-center">
                  <Button variant="gold" size="lg" className="rounded-sm text-[0.7rem] tracking-[0.2em] font-bold px-12 group hover:scale-104 transition-all duration-300" asChild>
                    <a href={siteData.links.substackUrl} target="_blank" rel="noopener noreferrer">
                      {writingsPageData.newsletter.ctaText}
                      <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
