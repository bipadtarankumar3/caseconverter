// Builds consistent per-page metadata: title, description, canonical,
// Open Graph and Twitter tags all derive from the same values.
//
// Why this exists: in Next.js a page's `openGraph` object replaces the
// layout's entirely, and pages without one inherit the homepage's og:title,
// og:description and og:url — so every shared link looked like the homepage.
//
// Guidelines: keep `title` <= ~44 chars (the layout appends " | CaseConverter",
// Google truncates around 60) and `description` <= 160 chars.

export const SITE_URL = 'https://caseconverter.revoxera.com';
export const SITE_NAME = 'CaseConverter';
const OG_IMAGE = '/opengraph-image';

export function pageMeta({ title, description, path, keywords, absoluteTitle = false }) {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: path === '/' ? 'website' : 'article',
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} — free online text case converter` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}
