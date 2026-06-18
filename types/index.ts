export type SocialKey = "resume" | "linkedin" | "github";

export interface SiteConfig {
  name: string;
  handle: string;
  role: string;
  location: string;
  email: string;
  openToWork: boolean;
  socials: Record<SocialKey, string>;
}

export interface ProjectVisual {
  label: string;
  icon: string;
  gradient: string;
}

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  meta: string;
  summary: string;
  year: string;
  tags: string[];
  disciplines: string[];
  featured: boolean;
  gradient: string;
  visualLabel: string;
  visuals: ProjectVisual[];
  metrics: {
    value: string;
    label: string;
  }[];
  body: string[];
  caseStudy: {
    heading: string;
    content: string[];
  }[];
  tools: string[];
}
