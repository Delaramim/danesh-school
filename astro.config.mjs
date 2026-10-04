import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'fa',
    locales: ['fa', 'de', 'en'],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
});
