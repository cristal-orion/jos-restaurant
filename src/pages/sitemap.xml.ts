const site = 'https://tenutavillaguerra.it';

// /cantina/ è esclusa: pagina orfana (non linkata da nav/footer) e con
// immagini reali non ancora pronte (vedi noindex in src/pages/cantina.astro).
// Va riaggiunta qui quando la pagina è pubblicabile.
const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/tenuta/', priority: '0.8', changefreq: 'monthly' },
  { path: '/jose/', priority: '0.8', changefreq: 'monthly' },
];

const lastmod = new Date().toISOString().slice(0, 10);

export function GET() {
  const urls = pages
    .map(
      ({ path, priority, changefreq }) => `  <url>
    <loc>${site}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
