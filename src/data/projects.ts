import { Crown, Home, Headphones, Lightbulb, LucideIcon } from "lucide-react";

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
}

export const projects: Project[] = [
  {
    id: "rib-restored",
    title: "The Rib Restored",
    description:
      "A platform focused on healing, restoration, spiritual growth, discernment, and prophetic teaching. Shared through writings, scrolls, and reflections designed to help navigate spiritual experiences.",
    iconName: "crown",
    url: "/",
    image: "/images/second logo .png",
    socialUrl: "https://instagram.com/the.rib.restored",
    socialLabel: "Instagram",
    socialHandle: "@the.rib.restored",
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
    description: "A spiritual mission focused on restoration, discernment, and strengthening families. Bridging spiritual depth with scriptural maturity.",
    iconName: "home",
    url: "https://www.BeitYahwehHaGoel.org",
    socialUrl: "https://facebook.com/BeitYahwehHaGoel",
    socialLabel: "Facebook",
    socialHandle: "BeitYahwehHaGoel",
  },
  {
    id: "future-projects",
    title: "Future Projects",
    description: "Ideas, apps, and ventures assigned to build and impact lives.",
    iconName: "lightbulb",
    url: "#",
  },
];
