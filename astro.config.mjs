// @ts-check
import { defineConfig } from 'astro/config';

const site = process.env.SITE ?? 'https://futurelegal.ru';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto', format: 'directory' },
});
