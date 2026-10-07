// @ts-check
import { defineConfig } from 'astro/config';

// Static output. Every page is pre-rendered to HTML so the site scores
// perfectly on SEO, ships almost no JavaScript, and loads instantly.
export default defineConfig({
  output: 'static',
  site: 'https://example.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  markdown: {
    shikiConfig: { theme: 'github-dark' },
  },
});
