// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://tenutavillaguerra.it',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  // /menu: URL fisso per i QR code, punta sempre al PDF del menù in vigore.
  // Per aggiornare il menù: sostituire il PDF in public/pdf/ e aggiornare questo path.
  redirects: {
    '/menu': '/pdf/jose-menu-estate-2026.pdf',
  },
});
