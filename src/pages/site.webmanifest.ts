import type { APIRoute } from 'astro';

export const prerender = true;

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export const GET: APIRoute = () => {
  const manifest = {
    name: 'deadLetter — where messages go to rest',
    short_name: 'deadLetter',
    description:
      'Local-first message observability for development. Capture SMTP, inspect Kafka, monitor Redis, debug webhooks.',
    start_url: import.meta.env.BASE_URL,
    scope: import.meta.env.BASE_URL,
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#0b0a09',
    theme_color: '#0b0a09',
    categories: ['developer', 'productivity', 'utilities'],
    icons: [
      { src: withBase('favicon-16x16.png'), sizes: '16x16', type: 'image/png' },
      { src: withBase('favicon-32x32.png'), sizes: '32x32', type: 'image/png' },
      {
        src: withBase('android-chrome-192x192.png'),
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: withBase('android-chrome-512x512.png'),
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
      { src: withBase('apple-touch-icon.png'), sizes: '180x180', type: 'image/png' },
    ],
  };

  return new Response(JSON.stringify(manifest), {
    headers: {
      'Content-Type': 'application/manifest+json; charset=utf-8',
    },
  });
};
