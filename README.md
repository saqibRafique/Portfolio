# Muhammad Saqib Rafique — Portfolio

Modern portfolio built with Next.js, React, and TypeScript.

## Stack

- Next.js 16
- React 19
- TypeScript
- CSS
- Firebase Hosting (static export)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Production build

The app uses Next.js static export and writes the deployable site to `out/`.

```bash
npm run build
firebase deploy --only hosting
```

## Branch

The Next.js migration was developed on `modernize-nextjs-2026`.
