import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// When VITE_SITE_URL is set, the build adds canonical, og:url, og:image (absolute URLs are required by social crawlers) and sitemap.xml.
const seo = (site) => ({
  name: 'seo-from-site-url',
  transformIndexHtml(html) {
    if (!site) return html;
    const tags = `<link rel="canonical" href="${site}/" /><meta property="og:url" content="${site}/" /><meta property="og:image" content="${site}/og-image.png" /><meta name="twitter:image" content="${site}/og-image.png" />`;
    return html.replace('</head>', `${tags}</head>`);
  },
  generateBundle() {
    if (site) this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${site}/</loc></url></urlset>` });
  },
});

// base './' keeps the build working on GitHub Pages sub-paths, Netlify and Vercel.
export default defineConfig(({ mode }) => {
  const site = (loadEnv(mode, process.cwd(), 'VITE_').VITE_SITE_URL || '').replace(/\/$/, '');
  return { plugins: [react(), seo(site)], base: './' };
});
