import projectsData from "../../content/data/projects.json";

export interface Project {
  id: string;
  title: string;
  description: string;
  iconName: string;
  url: string;
  image?: string;
  socialUrl?: string;
  socialLabel?: string;
  socialHandle?: string;
  tagline?: string;
}

export const projects: Project[] = projectsData as Project[];
