/** @type {import('next-sitemap').IConfig} */
// Only real, built routes are included (next-sitemap discovers them from the build).
// Do NOT add paths here for pages that don't exist yet — 404s in a sitemap hurt crawling.
module.exports = {
  siteUrl: 'https://caseconverter.revoxera.com',
  generateRobotsTxt: false, // We manage robots.txt manually
  sitemapSize: 5000,
  exclude: ['/api/*', '/icon.png', '/apple-icon.png', '/favicon.ico', '/opengraph-image*'],
  transform: async (config, path) => {
    let priority = 0.5;
    let changefreq = 'monthly';
    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path.startsWith('/tools')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.startsWith('/guides')) {
      priority = 0.8;
    } else if (path === '/services') {
      priority = 0.6;
    } else if (path === '/privacy' || path === '/terms') {
      priority = 0.3;
      changefreq = 'yearly';
    }
    return { loc: path, changefreq, priority, lastmod: new Date().toISOString() };
  },
};
