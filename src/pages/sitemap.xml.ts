const site = 'https://tenutavillaguerra.it';

// /cantina/ è esclusa: pagina orfana (non linkata da nav/footer), con
// immagini reali non ancora pronte (vedi noindex in src/pages/cantina.astro)
// e senza versione inglese. Va riaggiunta qui quando la pagina è pubblicabile.
const pageGroups = [
  { it: '/', en: '/en/', priority: '1.0', changefreq: 'weekly' },
  { it: '/tenuta/', en: '/en/tenuta/', priority: '0.8', changefreq: 'monthly' },
  { it: '/jose/', en: '/en/jose/', priority: '0.8', changefreq: 'monthly' },
];

const lastmod = new Date().toISOString().slice(0, 10);

function urlEntry(path: string, priority: string, changefreq: string, alternates: { hreflang: string; href: string }[]) {
  const links = alternates
    .map(({ hreflang, href }) => `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${site}${href}" />`)
    .join('\n');
  return `  <url>
    <loc>${site}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${links}
  </url>`;
}

export function GET() {
  const urls = pageGroups
    .flatMap(({ it, en, priority, changefreq }) => {
      const alternates = [
        { hreflang: 'it', href: it },
        { hreflang: 'en', href: en },
        { hreflang: 'x-default', href: it },
      ];
      return [
        urlEntry(it, priority, changefreq, alternates),
        urlEntry(en, priority, changefreq, alternates),
      ];
    })
    .join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
