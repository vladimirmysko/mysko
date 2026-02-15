# Repository Guidelines

## Project Structure & Module Organization

This repository is a Next.js App Router project using TypeScript.

- Application code lives in `src/app` (`layout.tsx`, `page.tsx`, and global styles in `globals.css`).
- Static assets live in `public/` (SVGs, icons, and other files served from `/`).
- Build and tooling config is at the root: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, and `prettier.config.mjs`.
- Generated output (`.next/`, `out/`, `build/`) and dependencies (`node_modules/`) are not committed.

## Build, Test, and Development Commands

Use Bun (lockfile is `bun.lock`), or run equivalent `npm run` commands.

- `bun run dev`: start local dev server at `http://localhost:3000`.
- `bun run build`: create a production build.
- `bun run start`: run the production build locally.
- `bun run lint`: run ESLint with Next.js + TypeScript rules.
- `bun run format`: auto-format files with Prettier.
- `bun run format:check`: verify formatting in CI/pre-merge checks.

## Coding Style & Naming Conventions

- TypeScript is strict (`tsconfig.json`), so prefer explicit, type-safe code.
- Use 2-space indentation and keep files Prettier-formatted.
- Follow import order enforced by Prettier plugins: built-ins, third-party, `@/` aliases, then relative imports.
- Use `PascalCase` for React components and `camelCase` for variables/functions.
- Keep route files aligned with Next.js conventions (`page.tsx`, `layout.tsx`, etc.).

## Testing Guidelines

A dedicated test framework is not configured yet.

- For now, treat `bun run lint`, `bun run format:check`, and `bun run build` as required quality gates.
- When adding tests, colocate them near source as `*.test.ts` or `*.test.tsx` and document any new test command in `package.json`.

## Commit & Pull Request Guidelines

Recent history uses concise, imperative commit subjects (for example: `Add ESLint and Prettier configuration...`).

- Write commits in imperative mood and keep subject lines focused on one change.
- PRs should include: purpose, key changes, validation steps run, and linked issue(s).
- For UI updates, include screenshots or short recordings.
- Keep PR scope small; separate refactors from behavior changes when possible.
