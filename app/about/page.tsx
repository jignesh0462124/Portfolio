import type { Metadata } from "next";
import Link from "next/link";
import { Bookmark, Home, Mail, Monitor } from "lucide-react";
import { ProjectVisual } from "@/components/project/ProjectVisual";
import { education, professionalExperience, responsibilities, skillGroups } from "@/data/profile";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Cyber Security specialization at G. H. Raisoni College of Engineering. Internships with Maharashtra Cyber Police and IIT Guwahati. Full-stack projects in React, Next.js, and Node.js."
};

export default function AboutPage() {
  return (
    <div className="about-page" id="main">
      <aside className="profile-sidebar" aria-label="Profile sidebar">
        <div className="profile-sidebar__card reveal">
          <div>
            <div className="profile-avatar" role="img" aria-label="Profile mark of Jignesh">
              J
            </div>
            <span className="open-badge">Open to Internships</span>
            <h1 className="sidebar__name">Jignesh</h1>
            <p className="sidebar__handle">{siteConfig.handle} - Nagpur, India</p>
            <p className="sidebar__role">Cybersecurity-Focused Developer</p>
            <p className="sidebar__meta">Specializing in Cyber Security - CGPA 8.25/10</p>
            <div className="company-chips" aria-label="Tools and platforms">
              <span className="chip">React</span>
              <span className="chip">AWS</span>
              <span className="chip">Kali Linux</span>
              <span className="chip">Docker</span>
            </div>
          </div>

          <div className="sidebar__actions">
            <a href={`mailto:${siteConfig.email}`} className="btn-msg">
              <Mail size={15} aria-hidden="true" />
              Message
            </a>
            <button className="btn-save" type="button" aria-label="Save profile">
              <Bookmark size={15} aria-hidden="true" />
            </button>
          </div>

          <nav className="sidebar__tabs" aria-label="Profile sections">
            <Link href="/" className="sidebar__tab">
              <Home size={15} aria-hidden="true" />
              Home
            </Link>
            <Link href="/about" className="sidebar__tab active" aria-current="page">
              <Monitor size={15} aria-hidden="true" />
              Portfolio
            </Link>
          </nav>

          <div className="sidebar__socials" aria-label="Social links">
            <Link href={siteConfig.socials.resume}>Resume</Link>
            <span>|</span>
            <Link href={siteConfig.socials.linkedin}>LinkedIn</Link>
            <span>|</span>
            <Link href={siteConfig.socials.github}>GitHub</Link>
          </div>
        </div>
      </aside>

      <main className="about-main">
        <div className="about-main__body">
          <div className="content-col">
            <h2 className="intro__heading reveal">
              Hi, I&apos;m <em>Jignesh</em>
            </h2>
            <p className="intro__bio reveal">
              I&apos;m a Computer Science student specializing in Cyber Security at G. H. Raisoni College of Engineering,
              Nagpur (CGPA 8.25/10, expected 2027). I work across two worlds that most people treat as separate:
              breaking systems to understand them, and building production software that has to hold up in the real
              world.
            </p>
            <p className="intro__bio reveal">
              I&apos;ve completed an on-site cybersecurity internship with the Maharashtra Cyber Police, handling live
              cybercrime cases and incident documentation, and a digital forensics internship with IIT Guwahati (via
              1STOP.AI), reconstructing incidents from disk images using Autopsy. Alongside that, I build full-stack
              products - React/Next.js frontends, Node.js and PHP backends, and payment-integrated platforms that have
              run live for hundreds of real users.
            </p>
            <p className="intro__links reveal">
              <span>-&gt;</span>
              <Link href={siteConfig.socials.resume}>Resume</Link>
              <span>|</span>
              <Link href={siteConfig.socials.linkedin}>LinkedIn</Link>
              <span>|</span>
              <Link href={siteConfig.socials.github}>GitHub</Link>
            </p>

            <ContentBlock title="Education">
              {education.map((item) => (
                <div className="skills-item" key={item}>
                  {item}
                </div>
              ))}
            </ContentBlock>

            <ContentBlock title="Technical Skills">
              {skillGroups.map((group) => (
                <div className="content-subgroup" key={group.title}>
                  <p className="pe-disciplines-label">{group.title}</p>
                  <p className="block-text">{group.items.join(" - ")}</p>
                </div>
              ))}
            </ContentBlock>

            <ExperienceBlock title="Professional Experience" entries={professionalExperience} />
            <ExperienceBlock title="Positions of Responsibility" entries={responsibilities} />
          </div>

          <div className="projects-col">
            {projects.map((project) => (
              <article className="project-entry reveal" aria-label={project.title} key={project.slug}>
                <div className="pe-header">
                  <h3 className="pe-header-title">{project.title}</h3>
                  <p className="pe-header-sub">{project.tagline}</p>
                </div>
                <div className="pe-row">
                  <div className="pe-text">
                    {project.body.map((paragraph) => (
                      <p className="pe-description" key={paragraph}>
                        {paragraph}
                      </p>
                    ))}
                    <p className="pe-disciplines-label">Tools</p>
                    <div className="pe-disciplines">
                      {project.tools.map((tool) => (
                        <span key={tool}>
                          {tool}
                          <br />
                        </span>
                      ))}
                    </div>
                    <Link href={`/work/${project.slug}`} className="social-link">
                      View Case Study
                    </Link>
                  </div>
                  <ProjectVisual project={project} compact />
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function ContentBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="content-block reveal">
      <p className="block-heading">{title}</p>
      {children}
    </div>
  );
}

function ExperienceBlock({
  title,
  entries
}: {
  title: string;
  entries: { title: string; meta: string; bullets: string[] }[];
}) {
  return (
    <ContentBlock title={title}>
      {entries.map((entry) => (
        <div className="content-subgroup" key={entry.title}>
          <p className="pe-disciplines-label">{entry.title}</p>
          <p className="block-text">{entry.meta}</p>
          {entry.bullets.map((bullet) => (
            <div className="skills-item" key={bullet}>
              - {bullet}
            </div>
          ))}
        </div>
      ))}
    </ContentBlock>
  );
}
