Course materials site, built with Next.js and deployed to Netlify.

## Content model

Notes live in Obsidian at `../../SECONDBRAIN` (relative to this repo), not in
this repo. To publish a note:

1. Add frontmatter to the note in Obsidian:

   ```yaml
   ---
   publish: true
   course: HUW112       # becomes the URL segment, e.g. /huw112
   type: syllabus        # freeform label shown next to the note
   title: "HUW 112 — Syllabus"
   term: "Fall 2026"      # optional
   order: 1                # optional, controls sort order within a course
   ---
   ```

2. Run `npm run sync`. This copies published notes into `content/` and any
   referenced images into `public/content-assets/`, rewriting image links to
   match. It fully replaces both directories each run.
3. Review the diff (`git status` / `git diff`), then commit and push.

Netlify has no access to your Obsidian vault, so it builds straight from the
committed `content/` directory — the sync step must be run locally before
every push that changes published content.

## Local development

```bash
npm run sync   # pull published notes from SECONDBRAIN
npm run dev    # http://localhost:3000
```

## Deployment

Netlify builds with `npx next build` (see `netlify.toml`) and publishes the
static export in `out/`.
