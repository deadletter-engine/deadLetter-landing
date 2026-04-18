// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://deadletter.app';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: 'static',
  adapter: vercel({ webAnalytics: { enabled: false } }),
  compressHTML: true,
  prefetch: false,
  build: {
    inlineStylesheets: 'always',
    assets: '_a',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
      minify: 'esbuild',
    },
  },
});
