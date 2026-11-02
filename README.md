# Manish - Web3 Creator

Personal portfolio built with React, TypeScript, and Vite. It includes a folder-style hero, content previews, selected brand work, Xento campaign results, Creator Network, About Me, and contact links.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:5173/.

## Production build

```sh
npm run build
npm run preview
```

The build checks TypeScript and writes the static website to `dist/`. Deploy that directory with any Vite-compatible static host.

## Project structure

- `src/main.tsx`: page sections, navigation, filters, preview dialogs, and interactions.
- `src/data/`: biography, campaign details, content, and social links.
- `src/editorial.css`: editorial design and folder styling.
- `src/spacing.css`: section spacing.
- `src/mobile.css`: final mobile-specific rules.
- `public/`: supplied photos, logos, content previews, and social assets.
- `reference/brand-post-subjects.json`: public X post text used for brand-work labels.

Navigation shows Content, Campaigns, About, and Let's talk. Mobile uses visible inline links with avatar branding. Motion respects reduced-motion preferences, and folder cards lift independently on hover or keyboard focus.

The palette uses cream, burgundy, and dark brown with paper and blush surfaces. Typography uses DM Serif Display, DM Sans, and IBM Plex Mono.

Content dialogs retain the original X captions and media. Contact links go directly to X and Telegram, without an email form. About Me contains one story block.

## Saved original design

The original cream-and-burgundy design is preserved as a standalone snapshot at `public/versions/cream-burgundy.html`. After starting the dev server, open http://127.0.0.1:5173/versions/cream-burgundy.html to compare it.

The original full source archive and restoration script remain in the separate local project backup. They are not required to run this version.

## Standalone preview

After building, run `node scripts/export-preview.mjs` to export a standalone HTML preview to the parent directory.

The page title is `Manish - Web3 Creator`. Review canonical and social metadata when assigning a public domain.
