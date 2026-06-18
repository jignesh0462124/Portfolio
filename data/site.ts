import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Jignesh Sonewane",
  handle: "@jignesh-sonewane",
  role: "Cybersecurity Developer & Full-Stack Engineer",
  location: "Nagpur, Maharashtra, India",
  email: "jigneshsonewane@gmail.com",
  openToWork: true,
  socials: {
    resume: "/resume.pdf",
    linkedin: "https://linkedin.com/in/jignesh-sonewane",
    github: "https://github.com/jignesh0462124"
  }
};

export const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
  { label: "Experience", href: "/about" }
];
