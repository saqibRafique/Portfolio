# Muhammad Saqib Rafique — Portfolio

Modern portfolio built with Next.js, React, and TypeScript.

## Stack

- Next.js 16
- React 19
- TypeScript
- Vitest + Testing Library
- Storybook
- Firebase Hosting (static export)

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

Every pull request to `main` runs:

```bash
npm run typecheck
npm run lint
npm test
npm run storybook:build
npm run build
node scripts/verify-build.mjs
```

## Storybook

```bash
npm run storybook
```

Storybook includes accessibility checks and desktop/mobile component stories.

## Production build

The app uses Next.js static export and writes the deployable site to `out/`.

```bash
npm run build
firebase deploy --only hosting
```

Merges to `main` are deployed automatically to Firebase Hosting by GitHub Actions.
