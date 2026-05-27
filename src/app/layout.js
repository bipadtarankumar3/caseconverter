import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CodeXml, X, Mail, Zap } from 'lucide-react';
import { GoogleAnalytics } from '@next/third-parties/google';


export const metadata = {
  title: 'Case Converter | The Ultimate Online Text Transformation Tool',
  description: 'Convert text cases effortlessly with Case Converter. Supports Sentence case, lower case, UPPER CASE, Capitalized Case, Title Case, and more. Free, fast, and secure text transformation for developers and writers.',
  keywords: 'case converter, text transformation, sentence case, title case, upper case, lower case, convert text online, toggle case, inverse case, alternating case, capitalized case',
  authors: [{ name: 'CaseConverter' }],
  openGraph: {
    title: 'Case Converter - Professional Text Tools',
    description: 'The most powerful online case converter with a premium glassmorphic interface. Transform your text instantly.',
    url: 'https://caseconverter.revoxera.com',
    siteName: 'CaseConverter',
    locale: 'en_US',
    type: 'website',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Converter',
    description: 'Transform your text with style. The ultimate professional case converter.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.png',
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Case Converter",
  "operatingSystem": "All",
  "applicationCategory": "UtilitiesApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Professional-grade case conversion tool with a premium glassmorphic interface. Supports Sentence case, Title case, and more.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "1250"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Sentence Case?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sentence case capitalizes the first letter of every sentence and converts the rest of the text to lowercase, following standard grammatical rules."
      }
    },
    {
      "@type": "Question",
      "name": "Is this text converter free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Case Converter is 100% free for personal and professional use. No registration is required."
      }
    },
    {
      "@type": "Question",
      "name": "How secure is my data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We prioritize your security. All transformations happen locally in your browser session. We do not store or transmit any of the text you enter."
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://caseconverter.revoxera.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body suppressHydrationWarning>
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
        <div className="bg-blob blob-3"></div>

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
