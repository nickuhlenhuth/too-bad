// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://toobadtattoostudio.com',
  integrations: [
    sanity({
      projectId: 'xvdpgu0i',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/studio',
    }),
    react(),
  ],
});
