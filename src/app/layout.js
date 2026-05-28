import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';

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
    images: [
      {
        url: '/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'CaseConverter — Free Online Text Case Conversion Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Converter — Free Online Text Transformation Tool',
    description: 'Convert text to Title Case, UPPER CASE, camelCase, snake_case & 7+ more. Free, instant, private.',
    images: ['/og-preview.png'],
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
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '1250',
    bestRating: '5',
    worstRating: '1',
  },
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
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://caseconverter.revoxera.com/tools/{search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

// ── Schema: FAQPage ───────────────────────────────────────────────────────────
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a case converter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A case converter is a tool that transforms text between different capitalization formats such as Sentence case, Title Case, UPPER CASE, lowercase, camelCase, PascalCase, snake_case, and kebab-case. It is used by writers, developers, SEO professionals, and students to quickly reformat text.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Sentence Case?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sentence case capitalizes only the first letter of the first word in a sentence (and proper nouns) while keeping the rest lowercase. Example: "the quick brown fox" → "The quick brown fox". It follows standard grammatical rules for professional writing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Title Case?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Title Case capitalizes the first letter of most words in a title while keeping short prepositions, conjunctions, and articles lowercase (e.g., "of", "and", "the"). Example: "the art of war" → "The Art of War". Different style guides (APA, Chicago, MLA) have slightly different rules.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is camelCase?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'camelCase writes compound words with no spaces, where each word after the first starts with a capital letter. Example: "user profile settings" → "userProfileSettings". It is widely used in JavaScript, Java, and TypeScript for variable and function names.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is snake_case?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'snake_case writes compound words in all lowercase separated by underscores. Example: "user profile settings" → "user_profile_settings". It is the standard naming convention in Python, Ruby, and SQL databases.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is kebab-case?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'kebab-case (also called dash-case or hyphen-case) writes compound words in all lowercase separated by hyphens. Example: "user profile settings" → "user-profile-settings". It is used in CSS class names, URL slugs, and HTML attributes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this case converter free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, CaseConverter is 100% free for personal and professional use with no registration or sign-up required. All text transformations happen locally in your browser — your text is never sent to any server.',
      },
    },
    {
      '@type': 'Question',
      name: 'How secure is my data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completely secure. All case conversions are processed entirely within your browser using JavaScript. No text is ever uploaded to or stored on our servers. Your data never leaves your device.',
      },
    },
  ],
};

// ── Schema: HowTo ─────────────────────────────────────────────────────────────
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Convert Text Case Online',
  description: 'Use CaseConverter to transform text between Sentence case, Title Case, UPPER CASE, camelCase, snake_case, and more in seconds.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Paste or Type Your Text',
      text: 'Type directly into the text editor or paste your content using Ctrl+V (Cmd+V on Mac). There is no character limit.',
      image: 'https://caseconverter.revoxera.com/og-preview.png',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Choose a Conversion Format',
      text: 'Click any of the conversion buttons — Sentence case, Title Case, UPPER CASE, lower case, camelCase, PascalCase, snake_case, or kebab-case. Your text converts instantly.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Copy or Download Your Result',
      text: 'Click the Copy button to copy the converted text to your clipboard, or click Download to save it as a .txt file. You can also use the Share button to generate a shareable link.',
    },
  ],
  totalTime: 'PT10S',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Font preconnect + preload for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      </head>
      <body suppressHydrationWarning>
        <div className="bg-blob blob-1" />
        <div className="bg-blob blob-2" />
        <div className="bg-blob blob-3" />

        <Header />

        <main className="main-content" id="main-content">
          {children}
        </main>
        <Footer />

        <GoogleAnalytics gaId="G-2Y0DSV87D7" />
      </body>
    </html>
  );
}
