# deadLetter — landing

Astro 5 + Tailwind v4 + Vercel. Static, zero client JS.

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
- **Vercel adapter** — static output, edge cache
- **System fonts** — zero network fonts
- **Dark mode** — `prefers-color-scheme` CSS only

## Deploy

Push to GitHub, import on Vercel. Framework auto-detected. Set custom domain → update `SITE` in `astro.config.mjs`.
