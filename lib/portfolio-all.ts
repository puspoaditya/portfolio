import { projects } from "./portfolio";
import { projectsId } from "./portfolio-id";

export function getProjectFromAll(slug: string) {
  return projects.find((p) => p.slug === slug) ?? projectsId.find((p) => p.slug === slug);
}

export function getAllSlugs() {
  return [
    ...projects.map((p) => ({ slug: p.slug })),
    ...projectsId.map((p) => ({ slug: p.slug })),
  ];
}
