import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Crown, Home, Headphones, Lightbulb, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import projectsPageData from "../../../content/data/projects-page.json";

const iconMap: Record<string, React.ReactNode> = {
  crown: <Crown className="w-6 h-6 text-[var(--color-gold)]" strokeWidth={1.25} />,
  home: <Home className="w-6 h-6 text-[var(--color-gold)]" strokeWidth={1.25} />,
  headphones: <Headphones className="w-6 h-6 text-[var(--color-gold)]" strokeWidth={1.25} />,
  lightbulb: <Lightbulb className="w-6 h-6 text-[var(--color-gold)]" strokeWidth={1.25} />,
};

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ════════════════════════════════════════════
          1. HERO — Section Title Header
          ════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-white via-[var(--color-ivory)]/40 to-white py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-gray-100/35">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <SectionHeader
              label={projectsPageData.hero.sectionLabel}
              heading={projectsPageData.hero.heading}
              description={projectsPageData.hero.description}
              align="center"
            />
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2. PROJECTS GRID — Consistent & Premium
          ════════════════════════════════════════════ */}
      <section className="section-padding py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <StaggerContainer staggerDelay={0.12} className="grid sm:grid-cols-2 gap-6 lg:gap-10">
            {projects.map((project) => (
              <StaggerItem key={project.id} className="card-premium h-full bg-white rounded-sm border border-gray-100/80 overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all duration-500">
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  {/* Top Header with Icon and Tagline */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-ivory)] flex items-center justify-center shadow-sm">
                      {iconMap[project.iconName] || <Lightbulb className="w-6 h-6 text-[var(--color-gold)]" strokeWidth={1.25} />}
                    </div>
                    {project.tagline && (
                      <span className="text-micro text-[0.6rem] text-gray-400 font-semibold tracking-wider max-w-[200px] text-right line-clamp-1">
                        {project.tagline}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--color-royal-deep)] mb-3 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-[1.75] mb-8 flex-grow">
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
          3. CTA — Strategic Engagement Link
          ════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 bg-[var(--color-ivory)]/40 border-t border-gray-100/35">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <FadeIn>
            <h2 className="font-script text-4xl sm:text-5xl text-[var(--color-gold)] mb-4">
              {projectsPageData.cta.heading}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
              {projectsPageData.cta.description}
            </p>
            <Button variant="gold" size="lg" asChild className="shadow-sm">
              <Link href={projectsPageData.cta.ctaHref}>
                {projectsPageData.cta.ctaText}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
