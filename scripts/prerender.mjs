// Renders each language to static HTML after `vite build`, so crawlers and
// link-preview bots receive the full page without running JavaScript.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = resolve(root, 'dist');
const ssrDir = resolve(root, 'dist-ssr');

// Set SITE_URL when using a custom domain. On Vercel the production URL is
// picked up automatically.
const siteUrl = (
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  'https://arun-baby-numerology.vercel.app'
).replace(/\/+$/, '');

const { render, content, contact, langPaths } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href);
const template = await readFile(resolve(distDir, 'index.html'), 'utf8');

const langs = ['ta', 'en'];
const absolute = (path) => `${siteUrl}${path}`;
const escapeAttr = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;

function buildHead(lang) {
  const t = content[lang];
  const url = absolute(langPaths[lang]);
  const image = absolute('/images/og-image.jpg');
  const verification = process.env.GOOGLE_SITE_VERIFICATION;

  const business = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: t.brand.name,
    alternateName: content[lang === 'en' ? 'ta' : 'en'].brand.name,
    description: t.meta.description,
    url,
    image,
    telephone: `+${contact.whatsappNumber}`,
    foundingDate: '1993',
    founder: { '@type': 'Person', name: t.hero.photoName, jobTitle: t.hero.photoRole, image: absolute('/images/profile.jpg') },
    address: { '@type': 'PostalAddress', addressRegion: 'Tamil Nadu', addressCountry: 'IN' },
    areaServed: 'Worldwide',
    availableLanguage: ['Tamil', 'English'],
    openingHours: 'Mo-Sa 09:00-20:00',
    priceRange: '₹500 – ₹10,000',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t.service.title,
      itemListElement: t.service.items.flatMap((item) =>
        item.fees.map((fee) => ({
          '@type': 'Offer',
          name: fee.label ? `${item.name} — ${fee.label}` : item.name,
          price: fee.amount.replace(/[^\d]/g, ''),
          priceCurrency: 'INR',
          itemOffered: { '@type': 'Service', name: item.name, alternateName: item.altName, description: item.text },
        })),
      ),
    },
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang,
    mainEntity: t.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return [
    `<title>${escapeAttr(t.meta.title)}</title>`,
    `<meta name="description" content="${escapeAttr(t.meta.description)}" />`,
    `<meta name="robots" content="index, follow" />`,
    `<link rel="canonical" href="${url}" />`,
    ...langs.map((l) => `<link rel="alternate" hreflang="${l}" href="${absolute(langPaths[l])}" />`),
    `<link rel="alternate" hreflang="x-default" href="${absolute(langPaths.ta)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeAttr(t.brand.name)}" />`,
    `<meta property="og:title" content="${escapeAttr(t.meta.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(t.meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1024" />`,
    `<meta property="og:image:height" content="576" />`,
    `<meta property="og:image:alt" content="${escapeAttr(t.hero.photoAlt)}" />`,
    `<meta property="og:locale" content="${t.meta.ogLocale}" />`,
    `<meta property="og:locale:alternate" content="${content[lang === 'en' ? 'ta' : 'en'].meta.ogLocale}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(t.meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(t.meta.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    verification && `<meta name="google-site-verification" content="${escapeAttr(verification)}" />`,
    jsonLd(business),
    jsonLd(faq),
  ]
    .filter(Boolean)
    .join('\n    ');
}

for (const lang of langs) {
  const { html, styles } = render(lang);
  const page = template
    .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
    .replace(/<title>[\s\S]*?<\/title>\s*/, '')
    .replace(/<meta\s+name="description"[\s\S]*?\/>\s*/, '')
    .replace('<!--app-head-->', `${buildHead(lang)}\n    ${styles}`)
    .replace('<!--app-html-->', html);

  const outDir = resolve(distDir, langPaths[lang].replace(/^\//, ''));
  await mkdir(outDir, { recursive: true });
  await writeFile(resolve(outDir, 'index.html'), page);
}

const today = new Date().toISOString().slice(0, 10);
const alternates = langs
  .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${absolute(langPaths[l])}" />`)
  .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(langPaths.ta)}" />`)
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${langs
  .map(
    (l) => `  <url>
    <loc>${absolute(langPaths[l])}</loc>
    <lastmod>${today}</lastmod>
${alternates}
  </url>`,
  )
  .join('\n')}
</urlset>
`;

await writeFile(resolve(distDir, 'sitemap.xml'), sitemap);
await writeFile(resolve(distDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${absolute('/sitemap.xml')}\n`);
await rm(ssrDir, { recursive: true, force: true });

console.log(`Prerendered ${langs.map((l) => langPaths[l]).join(', ')} for ${siteUrl}`);
