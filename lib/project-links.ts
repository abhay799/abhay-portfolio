import type { Project } from "@/data/site";

export type ProjectLinkKey =
  | "demo"
  | "apiDocs"
  | "api"
  | "health"
  | "readiness"
  | "github";

export type ExperienceLink = {
  key: ProjectLinkKey;
  title: string;
  description: string;
  label: string;
  href: string;
  primary?: boolean;
};

export type ProjectCardAction = {
  kind: "internal" | "external";
  label: string;
  href: string;
};

export function isUsableExternalUrl(value?: string): value is string {
  const candidate = value?.trim();

  return Boolean(
    candidate &&
      candidate !== "#" &&
      !candidate.toUpperCase().startsWith("PASTE_") &&
      /^https:\/\//i.test(candidate),
  );
}

export function getExperienceLinks(project: Project): ExperienceLink[] {
  const candidates: Array<ExperienceLink | null> = [
    isUsableExternalUrl(project.demo)
      ? {
          key: "demo",
          title: "Live Application",
          description:
            "Use the deployed interface and explore the project from a user's perspective.",
          label: "Launch Application ↗",
          href: project.demo,
          primary: true,
        }
      : null,
    isUsableExternalUrl(project.apiDocs)
      ? {
          key: "apiDocs",
          title: "Interactive API",
          description:
            "Inspect supported backend endpoints through the deployed FastAPI/OpenAPI interface.",
          label: "Open API Docs ↗",
          href: project.apiDocs,
        }
      : null,
    isUsableExternalUrl(project.api)
      ? {
          key: "api",
          title: "Backend Service",
          description: "Access the deployed Railway API that powers the frontend.",
          label: "Open API ↗",
          href: project.api,
        }
      : null,
    isUsableExternalUrl(project.health)
      ? {
          key: "health",
          title: "Service Health",
          description: "Check whether the public service is currently reachable.",
          label: "Check Health ↗",
          href: project.health,
        }
      : null,
    isUsableExternalUrl(project.readiness)
      ? {
          key: "readiness",
          title: "Service Readiness",
          description: "Inspect the service's public readiness response.",
          label: "Check Readiness ↗",
          href: project.readiness,
        }
      : null,
    isUsableExternalUrl(project.github)
      ? {
          key: "github",
          title: "Source Code",
          description: "Inspect the implementation, architecture, tests and documentation.",
          label: "View GitHub ↗",
          href: project.github,
        }
      : null,
  ];

  return candidates.filter((link): link is ExperienceLink => link !== null);
}

export function getProjectCardActions(project: Project): ProjectCardAction[] {
  const actions: Array<ProjectCardAction | null> = [
    project.caseStudy
      ? { kind: "internal", label: "Case Study →", href: project.caseStudy }
      : null,
    isUsableExternalUrl(project.demo)
      ? { kind: "external", label: "Live Demo ↗", href: project.demo }
      : null,
    isUsableExternalUrl(project.github)
      ? { kind: "external", label: "GitHub ↗", href: project.github }
      : null,
  ];

  return actions.filter((action): action is ProjectCardAction => action !== null);
}

