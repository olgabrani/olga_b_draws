import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://olgabrani.github.io',
  base: '/olga_b_draws',
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
