import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://olga-b-draws.gr',
  output: 'static',
  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
