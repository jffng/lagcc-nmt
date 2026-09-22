import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type NoteMeta = {
  course: string;
  slug: string;
  title: string;
  type: string;
  term?: string;
  order?: number;
};

export type Note = NoteMeta & { html: string };

export function listCourses(): string[] {
  if (!existsSync(CONTENT_DIR)) return [];
  return readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

export function listNotes(course: string): NoteMeta[] {
  const courseDir = path.join(CONTENT_DIR, course);
  if (!existsSync(courseDir)) return [];
  return readdirSync(courseDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data } = matter(readFileSync(path.join(courseDir, f), "utf-8"));
      return data as NoteMeta;
    })
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function listAllNotes(): NoteMeta[] {
  return listCourses().flatMap((course) => listNotes(course));
}

export function listCoursesWithRoster(): string[] {
  return listCourses().filter((course) =>
    existsSync(path.join(CONTENT_DIR, course, "roster.csv"))
  );
}

export function getRoster(course: string): string[] {
  const filePath = path.join(CONTENT_DIR, course, "roster.csv");
  if (!existsSync(filePath)) return [];

  return readFileSync(filePath, "utf-8")
    .split(",")
    .map((name) => name.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

export function getNote(course: string, slug: string): Note | null {
  const filePath = path.join(CONTENT_DIR, course, `${slug}.md`);
  if (!existsSync(filePath)) return null;

  const { data, content } = matter(readFileSync(filePath, "utf-8"));
  const html = remark().use(remarkGfm).use(remarkHtml).processSync(content).toString();

  return { ...(data as NoteMeta), html };
}
