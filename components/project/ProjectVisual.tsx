import type { Project } from "@/types";
import { VisualIcon } from "@/lib/icons";

export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  if (compact) {
    return (
      <div className="pe-images">
        {project.visuals.map((visual) => (
          <div className="visual-tile" style={{ "--visual-gradient": visual.gradient } as React.CSSProperties} key={visual.label}>
            <VisualIcon name={visual.icon} />
            <span>{visual.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="project-visual" style={{ "--visual-gradient": project.gradient } as React.CSSProperties}>
      <div className="project-visual__panel">
        <div className="project-visual__top">
          <span className="project-visual__dot" />
          <span className="project-visual__dot" />
          <span className="project-visual__dot" />
        </div>
        <h3 className="project-visual__title">{project.visualLabel}</h3>
        <div className="project-visual__cards">
          {project.visuals.map((visual) => (
            <div className="project-visual__mini" key={visual.label}>
              <VisualIcon name={visual.icon} />
              <span>{visual.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
