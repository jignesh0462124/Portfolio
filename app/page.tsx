import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { ProjectVisual } from "@/components/project/ProjectVisual";
import { experience, skills } from "@/data/profile";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { VisualIcon } from "@/lib/icons";

const featuredProjects = projects.filter((project) => project.featured);

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero" id="hero" aria-label="Introduction">
        <div className="hero__inner">
          <div className="hero__status reveal">
            <span className="hero__status-dot" aria-hidden="true" />
            Open to opportunities
          </div>

          <p className="hero__greeting reveal">
            Hey there, I am <strong>Jignesh</strong>
          </p>

          <h1 className="hero__headline reveal">
            A <em className="accent">cybersecurity-focused developer</em>
            <br />
            building secure systems and
            <br />
            full-stack products that ship.
          </h1>

          <div className="hero__cta reveal">
            <Link href="#work" className="btn btn-primary">
              See my work
            </Link>
            <Link href="#contact" className="btn btn-outline">
              Get in touch
            </Link>
          </div>
        </div>

        <div className="hero__scroll" aria-hidden="true">
          <span>Scroll</span>
        </div>
      </section>

      <section className="cluster-section" aria-label="Developer and security snapshots">
        <div className="cluster-wrapper reveal">
          <span className="badge badge-blue cluster__badge cluster__badge--left">Open to Internships</span>
          <span className="badge badge-grey cluster__badge cluster__badge--right">Building in public</span>
          <div className="photo-cluster">
            <div className="photo-frame photo-frame--1">
              <div className="photo-card" style={{ "--visual-gradient": "linear-gradient(135deg,#1a1a1a,#4a3a32,#e05c2a)" } as React.CSSProperties}>
                <VisualIcon name="shield" />
                CTF Practice
              </div>
            </div>
            <div className="photo-frame photo-frame--2">
              <div className="photo-card" style={{ "--visual-gradient": "linear-gradient(135deg,#e05c2a,#f59e0b)" } as React.CSSProperties}>
                <VisualIcon name="server" />
                Late-Night Builds
              </div>
            </div>
            <div className="photo-frame photo-frame--3">
              <div className="photo-card" style={{ "--visual-gradient": "linear-gradient(135deg,#4f46e5,#0ea5e9)" } as React.CSSProperties}>
                <VisualIcon name="spark" />
                Forensics Lab
              </div>
            </div>
          </div>
        </div>
        <div className="work-teaser reveal">
          <div className="work-teaser__sticker" aria-hidden="true">
            J
          </div>
          <p className="work-teaser__text">A peek into how I build and break things</p>
        </div>
      </section>

      <section className="work-section" id="work" aria-label="Selected work">
        <div className="section-header">
          <p className="section-label reveal">Selected Work</p>
          <h2 className="section-heading reveal">Projects I&apos;ve shipped</h2>
        </div>

        <div className="projects-list">
          {featuredProjects.map((project) => (
            <article className="project-card reveal" aria-label={`Project: ${project.title}`} key={project.slug}>
              <div className="project-card__visual">
                <ProjectVisual project={project} />
              </div>
              <div className="project-card__body">
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-card__row">
                  <h3 className="project-card__title">{project.shortTitle}</h3>
                  <Link href={`/work/${project.slug}`} className="btn btn-dark" aria-label={`View ${project.shortTitle} case study`}>
                    View Case Study
                  </Link>
                </div>
                <p className="project-card__desc">{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about" aria-label="About me">
        <div className="about-grid">
          <div className="about-content">
            <p className="section-label reveal">About</p>
            <h2 className="about-heading reveal">
              Where security thinking meets <em className="accent">shipping product.</em>
            </h2>
            <p className="about-bio reveal">
              I&apos;m a Computer Science student at G. H. Raisoni College of Engineering, Nagpur, specializing in Cyber
              Security. My work sits at the intersection of two things: understanding how systems get attacked, and
              building the systems themselves - full-stack, end to end.
            </p>
            <p className="about-bio reveal">
              I&apos;ve spent time inside a real Cyber Police unit handling live cybercrime cases, and inside a digital
              forensics lab reconstructing incidents from disk images. Outside of that, I build production web products
              - from hackathon infrastructure used by hundreds of people live, to CracklePDF, an offline-first PDF
              toolkit I maintain across Chrome and Android.
            </p>
            <div className="reveal">
              <p className="skills-label">Skills & Tools</p>
              <div className="skills-wrap">
                {skills.map((skill) => (
                  <span className="skill-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="social-links reveal">
              <Link href={siteConfig.socials.linkedin} className="social-link">
                LinkedIn
              </Link>
              <Link href={siteConfig.socials.github} className="social-link">
                GitHub
              </Link>
            </div>
          </div>

          <div className="about-photo-wrap reveal">
            <div className="profile-visual" role="img" aria-label="Graphic portrait mark for Jignesh">
              J
            </div>
            {experience.map((item) => (
              <div className="exp-card" key={`${item.role}-${item.period}`}>
                <div className="exp-card__header">
                  <span className="exp-card__role">{item.role}</span>
                  <span className="exp-card__year">{item.period}</span>
                </div>
                <span className="exp-card__company">{item.company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-label="Contact">
        <div className="contact-inner">
          <p className="section-label reveal">Get in touch</p>
          <h2 className="contact-heading reveal">
            Let&apos;s build
            <br />
            <em className="accent">something secure.</em>
          </h2>
          <p className="contact-sub reveal">
            Open to internships, full-stack development work, and cybersecurity-focused collaborations. If you&apos;re
            working on something interesting, I&apos;d like to hear about it.
          </p>
          <a href={`mailto:${siteConfig.email}`} className="contact-email reveal">
            {siteConfig.email}
          </a>
          <div className="contact-socials reveal">
            <Link href={siteConfig.socials.linkedin} className="contact-social" aria-label="LinkedIn">
              <Linkedin />
            </Link>
            <Link href={siteConfig.socials.github} className="contact-social" aria-label="GitHub">
              <Github />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
