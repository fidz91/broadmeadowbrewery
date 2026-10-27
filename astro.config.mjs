import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://fidz91.github.io',
  base: '/broadmeadowbrewery',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
