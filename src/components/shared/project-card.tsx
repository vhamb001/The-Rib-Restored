import Link from "next/link";
import { Crown, Home, Headphones, Lightbulb, type LucideIcon } from "lucide-react";
import type { Project } from "@/data/projects";

const iconMap: Record<string, LucideIcon> = {
  crown: Crown,
  home: Home,
  headphones: Headphones,
  lightbulb: Lightbulb,
};

export function ProjectCard({ project }: { project: Project }) {
  const Icon = iconMap[project.iconName] || Lightbulb;

  return (
    <Link href={project.url} className="block h-full">
      <div className="group h-full bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-[var(--color-gold)] flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-[var(--color-ivory)] text-[var(--color-royal)] flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:bg-[var(--color-royal)] group-hover:text-white">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="font-heading text-xl font-bold text-[var(--color-royal-deep)] mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm">
          {project.description}
        </p>
      </div>
    </Link>
  );
}
