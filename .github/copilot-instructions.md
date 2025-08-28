# Copilot Instructions for AI Coding Agents

## Project Overview

This is a TypeScript library for pluralizing and singularizing words, with support for custom rules, irregular forms, and uncountable nouns. The main implementation is in `src/pluralize.ts`. Tests are in `tests/unit/` and `tests/fixtures/`.

## Architecture

- **Core Logic:** All pluralization logic is in `src/pluralize.ts`. The module exposes a main function and several methods (`plural`, `singular`, `isPlural`, `isSingular`, rule addition methods).
- **Tests:** Unit tests use the Japa framework (`@japa/runner`). Test data is imported from `tests/fixtures/data.js`.
- **Build:** TypeScript compilation is managed via Wireit (`wireit` in `package.json`), outputting to `dist/`.
- **Lint/Format:** ESLint and Prettier are configured and run via Wireit scripts.
- **Coverage:** Code coverage is collected using `c8`.

## Developer Workflows

- **Build:** `npm run build` (runs Wireit, which calls `tsc --build --pretty`)
- **Test:** `npm test` (runs Japa tests via `bin/test.ts` with ts-node)
- **Lint:** `npm run lint` (runs both ESLint and Prettier checks)
- **Format:** `npm run format` (auto-formats code with ESLint and Prettier)
- **Coverage:** `npm run coverage` (generates lcov and text reports)

## GitHub Actions

- **Test Workflow:** Runs on PRs to `main`. Installs dependencies, lints, and runs tests across multiple OSes and Node versions.
- **Release Workflows:** 
  - `release.yml` triggers on version tags, runs tests, builds, generates changelog, creates a GitHub release, and publishes to npm.
  - `auto-release.yml` triggers on pushes to `main`, determines release type from commit messages, bumps version, builds, generates changelog, creates release, and publishes to npm.

## Project-Specific Patterns

- **Rule Extension:** New pluralization/singularization/irregular/uncountable rules can be added at runtime using the exposed API methods.
- **TypeScript:** All source code is in TypeScript, but tests import using `.js` extensions for compatibility with Japa and ts-node.
- **Test Data:** Shared test cases are stored in `tests/fixtures/data.js` and imported into multiple test suites.

## Integration Points

- **External Dependencies:** Uses Japa for testing, Wireit for build/lint/format orchestration, c8 for coverage, and conventional-changelog-cli for changelog generation.
- **NPM Publishing:** Automated via GitHub Actions with `NODE_AUTH_TOKEN` secret.

## Examples

- See `Readme.md` for API usage and extension examples.
- See `tests/unit/methods.spec.ts` for typical test patterns.

## Conventions

- All new rules and API extensions should be covered by unit tests in `tests/unit/`.
- Use Wireit scripts for all build, lint, and format operations.
- Commit messages should follow Conventional Commits for automated release type detection.
