# deadLetter — landing

Astro 6 + Tailwind v4. Static, zero client JS.

## Setup

```sh
pnpm install
```

## Commands

| Command          | Action                                        |
| :--------------- | :-------------------------------------------- |
| `pnpm dev`       | Dev server @ `localhost:4321`                 |
| `pnpm build`     | Build to `./dist/`                            |
| `pnpm preview`   | Preview build locally                         |

## Stack

- **Astro 6** — static HTML, zero JS shipped
- **Tailwind v4** — via `@tailwindcss/vite`, no config file
- **GitHub Pages** — deploy via GitHub Actions
- **System fonts** — zero network fonts
- **Dark mode** — `prefers-color-scheme` CSS only

## Deploy

Push to `main` and the workflow in `.github/workflows/deploy.yml` builds and deploys the site to GitHub Pages.

This repo is configured for the current custom domain `https://deadletter.app`, so keep `site` in `astro.config.mjs` pointing there and set the same custom domain in the repository's GitHub Pages settings.

If you want to publish only to the default GitHub Pages project URL instead of the custom domain, change `site` to your `https://<user>.github.io` URL and add `base: '/deadLetter-landing'` in `astro.config.mjs`.
