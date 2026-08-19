# Portfolio

Personal website built with Astro, featuring:

- a homepage with profile + selected projects
- a dedicated blog (`/blog`)
- a guestbook (`/guestbook`)

## Stack

- Astro 7
- Tailwind CSS 4
- Drizzle + Turso/libSQL (guestbook)
- Cloudflare adapter + Wrangler config
- Bun (package manager/runtime)
- TypeScript + Prettier

## Local Development

```bash
bun install
bun run dev
```

## Quality Checks

```bash
bun run check
bun run build
bun run format:check
```

## Routes

- `/` - homepage
- `/blog` - blog index
- `/blog/[...slug]` - blog post pages
- `/guestbook` - guestbook page with Astro actions + Drizzle/Turso

## Theme

Neutral dark grayscale palette with a CLI-session layout: a clack-style
prompt rail with node markers per section.
