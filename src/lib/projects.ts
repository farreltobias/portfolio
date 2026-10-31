import type { CollectionEntry } from "astro:content";

type Project = CollectionEntry<"projects">;

/* One ordering for every list of projects. An explicit `order` wins, lowest
   first, so Farrel decides what leads. Unordered projects follow, newest
   first, and a title tiebreak keeps equal years from shuffling between
   builds. */
export function byProjectOrder(a: Project, b: Project): number {
  const ao = a.data.order ?? Number.POSITIVE_INFINITY;
  const bo = b.data.order ?? Number.POSITIVE_INFINITY;
  if (ao !== bo) return ao - bo;
  if (a.data.year !== b.data.year) return b.data.year - a.data.year;
  return a.data.title.localeCompare(b.data.title);
}

/* Every project, in the one ordering. Sheet numbers come from this list, so a
   project carries the same number on Home, on Work and on its own sheet. */
export async function allProjects(): Promise<Project[]> {
  const { getCollection } = await import("astro:content");
  return (await getCollection("projects")).sort(byProjectOrder);
}

export const sheetNo = (n: number) => String(n).padStart(3, "0");

export function sheetNumberOf(projects: Project[], id: string): string {
  return sheetNo(projects.findIndex((project) => project.id === id) + 1);
}

/* A display title with a non-breaking space before its separator, so a
   wrapped title never starts a line with "/" ("Rare Candy / Customer
   Success"). Dashes are covered too, for any title still using one. */
export const displayTitle = (title: string) =>
  title.replace(/ ([—–/])/g, "\u00a0$1");
