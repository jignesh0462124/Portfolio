import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const baseUrl = "https://jignesh.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date()
    },
    ...projects.map((project) => ({
      url: `${baseUrl}/work/${project.slug}`,
      lastModified: new Date()
    }))
  ];
}
