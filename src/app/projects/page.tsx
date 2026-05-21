import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Crown, Home, Headphones, Lightbulb, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import projectsPageData from "../../../content/data/projects-page.json";

const iconMap: Record<string, React.ReactNode> = {
  crown: <Crown className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.25} />,
  home: <Home className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.25} />,
  headphones: <Headphones className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.25} />,
  lightbulb: <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.25} />,
};

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-[var(--color-ivory)] py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <span className="inline-block text-[0.6rem] font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">{projectsPageData.hero.sectionLabel}</span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-royal-deep)] mb-4">
            {projectsPageData.hero.heading}
          </h1>
          <div className="gold-rule w-24 mx-auto mb-6" />
          <p className="text-gray-500 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            {projectsPageData.hero.description}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 stagger-children">
            {projects.map((project) => (
              <div key={project.id} className="group block">
                <div className="flex flex-col h-full bg-white rounded-3xl border-2 border-[var(--color-ivory)] overflow-hidden transition-all duration-500 hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] hover:border-[var(--color-gold)]/30">
                  <div className="w-full bg-gradient-to-br from-[#fdfbf7] to-[#f4f1e9] flex justify-center items-center p-4 sm:p-6 border-b border-gray-100/50">
                    <Link href={project.url} className="relative w-full aspect-[3/2] rounded-xl overflow-hidden shadow-sm border border-gray-100/50 block">
                      {project.image ? (
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-white text-[var(--color-gold)] transition-transform duration-700 group-hover:scale-[1.05]">
                          {iconMap[project.iconName] || <Lightbulb className="w-12 h-12" strokeWidth={1.25} />}
                        </div>
                      )}
                    </Link>
                  </div>
                  <div className="p-5 sm:p-6 lg:p-8 flex flex-col flex-grow">
                    <span className="text-[0.6rem] font-bold tracking-widest text-[#d4af37] uppercase mb-3 bg-[#fdfbf7] w-fit px-2 py-1 rounded-md">
                      {project.tagline || "Initiative"}
                    </span>
                    <Link href={project.url} className="block group/title">
                      <h3 className="font-heading text-xl lg:text-2xl font-bold text-[var(--color-royal-deep)] mb-3 leading-tight group-hover/title:text-[var(--color-gold)] transition-colors duration-300">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="text-gray-500 text-sm leading-[1.7] mb-6 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="mt-auto pt-5 border-t border-gray-100 flex flex-col gap-3">
                      {project.url !== '#' && (
                         <Link href={project.url} className="inline-flex items-center text-xs font-bold tracking-wider text-[var(--color-royal-deep)] uppercase hover:text-[var(--color-gold)] transition-colors group/link">
                           Explore Project <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                         </Link>
                      )}
                      {project.socialUrl && (
                        <a 
                          href={project.socialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[var(--color-gold)] font-bold text-[0.7rem] tracking-widest uppercase hover:text-[var(--color-royal-deep)] transition-colors duration-300"
                        >
                          <span className="opacity-50 italic normal-case tracking-normal">Visit on {project.socialLabel}:</span> {project.socialHandle || project.socialLabel}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[var(--color-ivory)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="font-script text-3xl sm:text-4xl lg:text-5xl text-[var(--color-gold)] mb-3">
            {projectsPageData.cta.heading}
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto">
            {projectsPageData.cta.description}
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link href={projectsPageData.cta.ctaHref}>
              {projectsPageData.cta.ctaText} <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
