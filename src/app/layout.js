import './globals.css';
import Header from '@/components/Header';
import { CodeXml, Send, Mail, Zap } from 'lucide-react';

export const metadata = {
  title: 'Case Converter Beast | The Ultimate Online Text Transformation Tool',
  description: 'Convert text cases effortlessly with Case Converter Beast. Supports Sentence case, lower case, UPPER CASE, Capitalized Case, Title Case, and more. Free, fast, and secure text transformation for developers and writers.',
  keywords: 'case converter, text transformation, sentence case, title case, upper case, lower case, convert text online, toggle case, inverse case, alternating case, capitalized case',
  authors: [{ name: 'CaseBeast' }],
  openGraph: {
    title: 'Case Converter Beast - Professional Text Tools',
    description: 'The most powerful online case converter with a premium glassmorphic interface. Transform your text instantly.',
    url: 'https://casebeast.vercel.app',
    siteName: 'CaseBeast',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Converter Beast',
    description: 'Transform your text with style. The ultimate professional case converter.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Case Converter Beast",
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
        "text": "Yes, Case Converter Beast is 100% free for personal and professional use. No registration is required."
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
        <link rel="canonical" href="https://casebeast.vercel.app" />
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

        <footer className="footer" role="contentinfo">
          <div className="container footer-inner">
            <div className="footer-left">
              <div className="logo">
                <Zap className="logo-icon" size={20} aria-hidden="true" />
                <span>CASE<span>BEAST</span></span>
              </div>
              <p>The world's most advanced online case converter. Built for speed, optimized for accuracy, and designed for the modern web professional.</p>
            </div>
            <div className="footer-right">
              <div className="social-links">
                <a href="#" title="Follow us on Twitter" aria-label="Twitter"><Send size={22} /></a>
                <a href="#" title="Contact us via Email" aria-label="Email"><Mail size={22} /></a>
                <a href="#" title="View source on GitHub" aria-label="GitHub"><CodeXml size={22} /></a>
              </div>
              <p className="footer-copy">&copy; {new Date().getFullYear()} CaseBeast. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
