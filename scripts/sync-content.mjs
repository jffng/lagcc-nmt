#!/usr/bin/env node
// Scans SECONDBRAIN for markdown notes with `publish: true` frontmatter,
// copies them (plus any local images they reference) into ./content and
// ./public/content-assets, and rewrites image paths to match.
//
// Netlify builds from this repo only — it has no access to SECONDBRAIN —
// so this script must be run locally and its output committed.

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, readdirSync, statSync, copyFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = path.resolve(import.meta.dirname, "..");
const SOURCE_DIR = process.env.SECONDBRAIN_DIR ?? path.resolve(ROOT, "../../SECONDBRAIN");
const CONTENT_DIR = path.join(ROOT, "content");
const ASSETS_DIR = path.join(ROOT, "public", "content-assets");

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"]);
const WIKILINK_IMAGE = /!\[\[([^\]|]+?)(\|[^\]]*)?\]\]/g;
const MD_IMAGE = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    if (entry.startsWith(".")) continue;
    const full = path.join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      if (entry === "__archive" || entry === ".obsidian" || entry === ".claude" || entry === ".git") continue;
      walk(full, files);
    } else if (entry.endsWith(".md")) {
      files.push(full);
    }
  }
  return files;
}

function findAsset(filename) {
  // Obsidian stores all images flat at the vault root by default.
  const direct = path.join(SOURCE_DIR, filename);
  if (existsSync(direct)) return direct;
  return null;
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function processNote(filePath) {
  const raw = readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  if (!data.publish) return null;
  if (!data.course || !data.type) {
    console.warn(`Skipping ${filePath}: missing "course" or "type" frontmatter.`);
    return null;
  }

  const course = slugify(String(data.course));
  const slug = slugify(String(data.slug ?? data.title ?? path.basename(filePath, ".md")));
  const usedAssets = [];

  let body = content.replace(WIKILINK_IMAGE, (match, name) => {
    const asset = findAsset(name.trim());
    if (!asset) {
      console.warn(`  ! image not found: ${name} (referenced in ${path.basename(filePath)})`);
      return match;
    }
    usedAssets.push(asset);
    return `![](/content-assets/${path.basename(asset)})`;
  });

  body = body.replace(MD_IMAGE, (match, alt, src) => {
    if (/^https?:\/\//.test(src)) return match;
    const asset = findAsset(decodeURIComponent(path.basename(src)));
    if (!asset) {
      console.warn(`  ! image not found: ${src} (referenced in ${path.basename(filePath)})`);
      return match;
    }
    usedAssets.push(asset);
    return `![${alt}](/content-assets/${path.basename(asset)})`;
  });

  const courseDir = path.join(CONTENT_DIR, course);
  mkdirSync(courseDir, { recursive: true });
  writeFileSync(
    path.join(courseDir, `${slug}.md`),
    matter.stringify(body, { ...data, course, slug })
  );

  mkdirSync(ASSETS_DIR, { recursive: true });
  for (const asset of usedAssets) {
    copyFileSync(asset, path.join(ASSETS_DIR, path.basename(asset)));
  }

  return { course, slug, title: data.title ?? slug, type: data.type };
}

function main() {
  if (!existsSync(SOURCE_DIR)) {
    console.error(`SECONDBRAIN not found at ${SOURCE_DIR}. Set SECONDBRAIN_DIR to override.`);
    process.exit(1);
  }

  rmSync(CONTENT_DIR, { recursive: true, force: true });
  rmSync(ASSETS_DIR, { recursive: true, force: true });

  const notes = walk(SOURCE_DIR).map(processNote).filter(Boolean);

  console.log(`Synced ${notes.length} published note(s):`);
  for (const note of notes) {
    console.log(`  - ${note.course}/${note.slug} (${note.type})`);
  }
}

main();
