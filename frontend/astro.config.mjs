import { defineConfig } from 'astro/config';

export default defineConfig({
  prefetch: {
    defaultStrategy: 'viewport',
  },
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'dracula-soft',
    },
  },
});

