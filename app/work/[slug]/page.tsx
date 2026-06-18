import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/project/ProjectVisual";
import { getProject, projects } from "@/data/projects";

interface WorkPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: WorkPageProps): Metadata {
  const project = getProject(params.slug);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: project.shortTitle,
    description: project.tagline
  };
}

export default function WorkPage({ params }: WorkPageProps) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="case-study" id="main">
      <div className="case-study__inner">
        <Link href="/#work" className="case-study__back">
          Back to work
        </Link>

        <section className="case-hero" aria-label={`${project.title} case study`}>
          <div className="reveal">
            <p className="case-hero__meta">
              {project.meta}
            </p>
            <h1 className="case-hero__title">{project.title}</h1>
            <p className="case-hero__tagline">{project.tagline}</p>
            <div className="metric-row">
              {project.metrics.map((metric) => (
                <div className="metric-card" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <ProjectVisual project={project} />
          </div>
        </section>

        <section className="case-body" aria-label="Project details">
          <div>
            {project.caseStudy.map((section) => (
              <div className="reveal" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
          <div className="reveal">
            <h2>Tools</h2>
            <div className="skills-wrap">
              {project.tools.map((tool) => (
                <span className="skill-pill" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
            <div style={{ marginTop: 24 }}>
              <ProjectVisual project={project} compact />
            </div>
          </div>
        </section>

        <div className="next-project reveal">
          <p>Next project</p>
          <Link href={`/work/${nextProject.slug}`}>{nextProject.title}</Link>
        </div>
      </div>
    </main>
  );
}
