import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata = {
  title: {
    default: 'Case Converter | Free Online Text Transformation Tool',
    template: '%s | CaseConverter',
  },
  description: 'Convert text to Sentence case, Title Case, UPPER CASE, lower case, camelCase, PascalCase, snake_case & more — instantly, free, and 100% private. No sign-up required.',
  keywords: 'case converter, text case converter online, convert text case, title case converter, sentence case, upper case, lower case, camelcase, pascalcase, snake_case, kebab-case, online case changer',
  authors: [{ name: 'CaseConverter', url: 'https://caseconverter.revoxera.com' }],
  metadataBase: new URL('https://caseconverter.revoxera.com'),
  openGraph: {
    title: 'Case Converter — Free Online Text Transformation Tool',
    description: 'Convert text to Title Case, UPPER CASE, camelCase, snake_case & 7+ more formats instantly. Browser-based, 100% private, no sign-up.',
    url: 'https://caseconverter.revoxera.com',
    siteName: 'CaseConverter',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Converter — Free Online Text Transformation Tool',
    description: 'Convert text to Title Case, UPPER CASE, camelCase, snake_case & 7+ more. Free, instant, private.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// ── Schema: SoftwareApplication ──────────────────────────────────────────────
const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'CaseConverter',
  operatingSystem: 'All',
  applicationCategory: 'UtilitiesApplication',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Professional-grade online case conversion tool. Converts text to Sentence case, Title Case, UPPER CASE, lower case, camelCase, PascalCase, snake_case, and kebab-case instantly in the browser.',
  url: 'https://caseconverter.revoxera.com',
  featureList: [
    'Sentence Case Conversion',
    'Title Case Conversion (APA, Chicago, MLA)',
    'UPPER CASE Conversion',
    'lowercase Conversion',
    'camelCase Generator',
    'PascalCase Generator',
    'snake_case Generator',
    'kebab-case Generator',
    'Alternating Case',
    'Inverse Case',
    'Real-time Character & Word Count',
    '100% Browser-based — No data sent to server',
  ],
};

// ── Schema: WebSite + Sitelinks Search ───────────────────────────────────────
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CaseConverter',
  url: 'https://caseconverter.revoxera.com',
  description: 'Free online text case conversion tools — Title Case, camelCase, snake_case and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-white text-slate-900 min-h-screen flex flex-col font-sans" suppressHydrationWarning>
        <Header />

        <main className="main-content flex-grow" id="main-content">
          {children}
        </main>
        <Footer />

        <GoogleAnalytics gaId="G-2Y0DSV87D7" />
      </body>
    </html>
  );
}
