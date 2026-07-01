import { getRelativeLocaleUrl } from 'astro:i18n';

export const locales = ['it', 'en'] as const;
export type Locale = (typeof locales)[number];

export function getLangFromUrl(url: URL): Locale {
  return url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'it';
}

// Rimuove il prefisso di lingua da un path assoluto, es. "/en/jose" -> "/jose".
export function stripLocale(pathname: string): string {
  const bare = pathname.replace(/^\/en(\/|$)/, '/');
  return bare.startsWith('/') ? bare : `/${bare}`;
}

// Path della pagina gemella in un'altra lingua, mantenendo hash e query.
export function localizedPath(locale: Locale, url: URL): string {
  const bare = stripLocale(url.pathname).replace(/^\//, '');
  const path = getRelativeLocaleUrl(locale, bare);
  return `${path}${url.search}${url.hash}`;
}
