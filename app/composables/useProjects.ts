import type { Project } from "~/types/project";

interface ContentProject {
  title: string;
  description: string;
  stack?: string[];
  year: string;
  role: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  order?: number;
  highlights?: string[];
  published?: boolean;
  path?: string;
  stem?: string;
  slug?: string;
  body?: unknown;
  rawbody?: string;
}

function getSlug(item: ContentProject): string {
  if (item.slug) return item.slug;
  if (item.stem) return item.stem.split("/").pop() || item.stem;
  if (item.path) return item.path.split("/").pop() || "";
  return "";
}

function mapContentToProject(item: ContentProject): Project {
  const slug =
    item.slug ||
    item.path?.split("/").pop() ||
    item.stem?.split("/").pop() ||
    "";

  return {
    slug,
    title: item.title,
    description: item.description,
    stack: item.stack || [],
    year: item.year,
    role: item.role,
    github: item.github || undefined,
    demo: item.demo || undefined,
    featured: Boolean(item.featured),
    order: item.order ?? 0,
    highlights: item.highlights || [],
    body: typeof item.rawbody === "string" ? item.rawbody : "",
    published: item.published !== false,
  };
}

export function useProjects() {
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase as string;

  async function list(): Promise<Project[]> {
    // Backend API
    if (apiBase) {
      return await $fetch<Project[]>(`${apiBase}/projects/`);
    }

    // Nuxt Content
    const items = await queryCollection("projects")
      .where("published", "=", true)
      .order("order", "ASC")
      .all();

    return items.map(mapContentToProject);
  }

  async function bySlug(
    slug: string,
  ): Promise<{ project: Project; document: ContentProject | null } | null> {
    if (apiBase) {
      try {
        const project = await $fetch<Project>(`${apiBase}/projects/${slug}/`);
        return { project, document: null };
      } catch {
        return null;
      }
    }

    const items = await queryCollection("projects").all();
    const found = (items as ContentProject[]).find(
      (item) => getSlug(item) === slug,
    );

    if (!found || found.published === false) return null;

    return {
      project: mapContentToProject(found),
      document: found,
    };
  }

  async function featured(limit = 3): Promise<Project[]> {
    const projects = await list();
    return projects.filter((p) => p.featured).slice(0, limit);
  }

  return { list, bySlug, featured };
}
