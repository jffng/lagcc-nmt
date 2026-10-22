import { existsSync, readdirSync } from "node:fs";
import path from "node:path";

const ASSIGNMENT_DIR = path.join(process.cwd(), "public", "assignment2");
const IMAGE_FILE = /\.(png|jpe?g)$/i;

export type Submission = {
  id: string;
  name: string;
  frames: string[];
};

function displayName(folder: string): string {
  const spaced = folder.replace(/[-_]+/g, " ").trim();
  // Only title-case folders that are all lowercase, so "Kai B" stays as typed.
  if (spaced !== spaced.toLowerCase()) return spaced;
  return spaced.replace(/\b\w/g, (c) => c.toUpperCase());
}

// Reads public/assignment2/<student-name>/*.png|jpg at build time.
// Frames are ordered by filename, numerically (1.png, 2.png, 10.png).
export function listSubmissions(): Submission[] {
  if (!existsSync(ASSIGNMENT_DIR)) return [];

  return readdirSync(ASSIGNMENT_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
    .map((entry) => {
      const frames = readdirSync(path.join(ASSIGNMENT_DIR, entry.name))
        .filter((f) => !f.startsWith(".") && IMAGE_FILE.test(f))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
        .map((f) => `/assignment2/${encodeURIComponent(entry.name)}/${encodeURIComponent(f)}`);
      return { id: entry.name, name: displayName(entry.name), frames };
    })
    .filter((s) => s.frames.length > 0)
    .sort((a, b) => a.name.localeCompare(b.name));
}
