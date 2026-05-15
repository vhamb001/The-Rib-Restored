import { Crown, Home, Headphones, Lightbulb, LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  iconName: string;
  url: string;
}

export const projects: Project[] = [
  {
    id: "rib-restored",
    title: "The Rib Restored",
    description:
      "My personal brand and platform for books, writings, and resources that restore identity and purpose.",
    iconName: "crown",
    url: "/",
  },
  {
    id: "listen-selah",
    title: "Listen Selah",
    description:
      "A premium headphone brand created for deep listening and purpose.",
    iconName: "headphones",
    url: "#",
  },
  {
    id: "beit-yahweh",
    title: "Beit Yahweh HaGo’el - A House of Redeemer",
    description: "A house of restoration, healing, and divine purpose.",
    iconName: "home",
    url: "#",
  },
  {
    id: "future-projects",
    title: "Future Projects",
    description: "Ideas, apps, and ventures assigned to build and impact lives.",
    iconName: "lightbulb",
    url: "#",
  },
];
