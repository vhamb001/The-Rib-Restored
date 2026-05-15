import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Crown, Home, Headphones, Lightbulb, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

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
          <span className="inline-block text-[0.6rem] font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">Initiatives</span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-royal-deep)] mb-4">
            Projects & Ventures
          </h1>
          <div className="gold-rule w-24 mx-auto mb-6" />
          <p className="text-gray-500 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            Ideas. Impact. Purpose in motion. These are the initiatives assigned to build and impact lives.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 stagger-children">
            {projects.map((project) => (
              <div key={project.id} className="group block">
                <div className="h-full bg-white p-5 sm:p-8 lg:p-10 rounded-sm border border-gray-100 hover:border-[var(--color-gold)]/30 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(200,151,62,0.08)]">
                  <Link href={project.url} className="flex items-start gap-4 sm:gap-5 lg:gap-6 mb-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[var(--color-ivory)] to-white border border-gray-100 shadow-sm text-[var(--color-royal-deep)] flex items-center justify-center shrink-0 transition-all duration-500 group-hover:from-[var(--color-gold)] group-hover:to-[var(--color-soft-gold)] group-hover:text-white group-hover:shadow-[0_8px_16px_rgba(200,151,62,0.25)] group-hover:border-transparent overflow-hidden">
                      {project.image ? (
                        <img src={project.image} alt={project.title} className="w-full h-full object-contain p-2" />
                      ) : (
                        iconMap[project.iconName] || <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.25} />
                      )}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading text-base sm:text-lg lg:text-xl font-bold text-[var(--color-royal-deep)] mb-1.5 sm:mb-2 group-hover:text-[var(--color-gold)] transition-colors duration-300">{project.title}</h3>
                      <p className="text-gray-500 text-sm leading-[1.7]">{project.description}</p>
                    </div>
                  </Link>
                  
                  {project.igHandle && (
                    <div className="pl-[4.5rem] sm:pl-[5.25rem]">
                      <a 
                        href={`https://instagram.com/${project.igHandle.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[var(--color-gold)] font-bold text-[0.7rem] tracking-widest uppercase hover:text-[var(--color-royal-deep)] transition-colors duration-300"
                      >
                        <span className="opacity-50 italic normal-case tracking-normal">Follow on Instagram:</span> {project.igHandle}
                      </a>
                    </div>
                  )}
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
            Have an idea or collaboration?
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto">
            I&apos;m always open to new partnerships and purposeful ventures. Let&apos;s build together.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link href="/contact">
              Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
