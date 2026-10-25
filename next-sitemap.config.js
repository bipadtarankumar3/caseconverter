/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://caseconverter.revoxera.com',
  generateRobotsTxt: false, // We manage robots.txt manually
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*'],
  additionalPaths: async (config) => {
    const result = [];

    // Tool pages — high priority
    const toolPages = [
      '/tools',
      '/tools/title-case',
      '/tools/sentence-case',
      '/tools/uppercase-converter',
      '/tools/lowercase-converter',
      '/tools/camel-case-generator',
      '/tools/pascal-case-generator',
      '/tools/snake-case-generator',
      '/tools/kebab-case-generator',
      '/tools/alternating-case',
      '/tools/inverse-case',
    ];
    toolPages.forEach((path) => {
      result.push({ loc: path, changefreq: 'weekly', priority: 0.9 });
    });

    // Guide pages
    const guidePages = [
      '/guides/apa-title-case',
      '/guides/naming-conventions',
      '/guides/sentence-case-vs-title-case',
      '/guides/chicago-title-case',
    ];
    guidePages.forEach((path) => {
      result.push({ loc: path, changefreq: 'monthly', priority: 0.8 });
    });

    // Use case pages
    const useCasePages = [
      '/use-cases/developers',
      '/use-cases/content-writers',
      '/use-cases/seo-professionals',
      '/use-cases/students',
    ];
    useCasePages.forEach((path) => {
      result.push({ loc: path, changefreq: 'monthly', priority: 0.6 });
    });

    // Programmatic conversion pages
    const convertPages = [
      '/convert/uppercase-to-lowercase',
      '/convert/lowercase-to-uppercase',
      '/convert/sentence-case-to-title-case',
      '/convert/title-case-to-sentence-case',
      '/convert/camelcase-to-snake-case',
      '/convert/snake-case-to-camelcase',
      '/convert/camelcase-to-pascalcase',
      '/convert/pascalcase-to-camelcase',
      '/convert/snake-case-to-kebab-case',
      '/convert/kebab-case-to-snake-case',
      '/convert/text-to-slug',
      '/convert/spaces-to-underscores',
      '/convert/underscores-to-spaces',
      '/convert/spaces-to-hyphens',
    ];
    convertPages.forEach((path) => {
      result.push({ loc: path, changefreq: 'monthly', priority: 0.6 });
    });

    // Services page
    result.push({ loc: '/services', changefreq: 'weekly', priority: 0.8 });

    // Static pages
    ['/about', '/contact'].forEach((path) => {
      result.push({ loc: path, changefreq: 'monthly', priority: 0.5 });
    });

    return result;
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/_next/'] },
    ],
  },
};
