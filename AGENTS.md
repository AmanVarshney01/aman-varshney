# Repository Guidelines

## Project Structure & Module Organization

- `src/pages/`: Astro routes (including dynamic routes like `blog/[...slug].astro` and `projects/[project].astro`).
- `src/components/`: Reusable UI pieces (`Header.astro`, `ProjectCard.astro`, etc.).
- `src/layouts/`: Shared page shells.
- `src/lib/` and `src/actions/`: Typed helpers and server-side actions.
- `src/content/blog/`: Markdown blog content.
- `src/assets/icons/` and `public/`: Bundled icons and static assets.
- `db/`: Astro DB schema and seed files for guestbook data.
- `dist/`: Build output (generated; do not edit manually).

## Build, Test, and Development Commands

- `bun install`: Install dependencies (Node `22`, from `.nvmrc`).
- `bun run dev`: Start local dev server.
- `bun run build`: Production build (`astro build --remote`).
- `bun run preview`: Preview the production build locally.
- `bun run check`: Type and Astro diagnostics (run before opening a PR).
- `bun run format:check`: Validate formatting.
- `bun run format`: Auto-format files.

## Coding Style & Naming Conventions

- Formatting is enforced by Prettier (`.prettierrc`): tabs, single quotes, no semicolons, no trailing commas, `printWidth: 100`.
- TypeScript runs in strict mode (`astro/tsconfigs/strict` + `strictNullChecks`).
- Use `PascalCase` for Astro components/layouts, `camelCase` for TS utilities, and route-aligned file names for pages/content.
- Keep components focused and prefer shared UI in `src/components/` over duplicating markup in pages.

## Testing Guidelines

- There is no dedicated automated test suite yet.
- Minimum validation for each change:
  - `bun run check`
  - `bun run build`
  - Manual smoke test of key routes: `/`, `/projects`, `/blog`, `/guestbook`
- For content/schema changes, verify blog rendering and guestbook behavior locally.

## Commit & Pull Request Guidelines

- Existing history favors short, imperative commit messages (e.g., `update deps`, `fix blogs`, `add wrangler.jsonc`).
- Keep commits scoped to one logical change.
- PRs should include:
  - Clear summary and motivation
  - Linked issue/task (if available)
  - Screenshots/GIFs for UI changes
  - Local verification steps run (`astro check`, build, manual smoke test)

## Security & Configuration Tips

- Keep secrets in `.env`; never commit credentials.
- Review deployment-impacting config changes carefully (`astro.config.mjs`, `wrangler.jsonc`, `.vercel/`).
