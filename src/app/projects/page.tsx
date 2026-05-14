import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Crown, Home, Headphones, Lightbulb } from "lucide-react";
import { projects } from "@/data/projects";

const iconMap: Record<string, React.ReactNode> = {
  crown: <Crown className="w-7 h-7" />,
  home: <Home className="w-7 h-7" />,
  headphones: <Headphones className="w-7 h-7" />,
  lightbulb: <Lightbulb className="w-7 h-7" />,
};

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-[var(--color-ivory)] py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <span className="inline-block text-[0.6rem] font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">Initiatives</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-royal-deep)] mb-4">
            Projects & Ventures
          </h1>
          <div className="gold-rule w-24 mx-auto mb-6" />
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            Ideas. Impact. Purpose in motion. These are the initiatives assigned to build and impact lives.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 stagger-children">
            {projects.map((project) => (
              <Link key={project.id} href={project.url} className="group block">
                <div className="h-full bg-white p-8 lg:p-10 rounded-sm border border-gray-100 hover:border-[var(--color-gold)]/30 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(200,151,62,0.08)] flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-ivory)] text-[var(--color-royal-deep)] flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-[var(--color-gold)] group-hover:text-white group-hover:shadow-[0_4px_16px_rgba(200,151,62,0.3)]">
                    {iconMap[project.iconName] || <Lightbulb className="w-7 h-7" />}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[var(--color-royal-deep)] mb-2">{project.title}</h3>
                    <p className="text-gray-500 text-sm leading-[1.7]">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
