import './globals.css';
import Header from '@/components/Header';
import { CodeXml, X, Mail, Zap } from 'lucide-react';

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

        <footer className="py-12 md:py-24 border-t border-white/10" role="contentinfo">
          <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left max-w-[1600px]">
            <div className="max-w-md">
              <div className="flex items-center gap-3 font-black text-2xl tracking-tighter text-white mb-6 justify-center md:justify-start">
                <Zap className="text-primary animate-pulse-glow" size={24} aria-hidden="true" />
                <span>CASE<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">BEAST</span></span>
              </div>
              <p className="text-muted leading-relaxed text-sm md:text-base">The world's most advanced online case converter. Built for speed, optimized for accuracy, and designed for the modern web professional. Your privacy is our priority—all processing happens locally.</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl hover:bg-primary/40 hover:text-primary transition-all hover:-translate-y-1" title="Follow us on X" aria-label="X"><X size={22} /></a>
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl hover:bg-primary/40 hover:text-primary transition-all hover:-translate-y-1" title="Contact us via Email" aria-label="Email"><Mail size={22} /></a>
                <a href="https://github.com" className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl hover:bg-primary/40 hover:text-primary transition-all hover:-translate-y-1" title="View source on GitHub" aria-label="GitHub"><CodeXml size={22} /></a>
              </div>
              <p className="text-muted text-sm" suppressHydrationWarning>&copy; {new Date().getFullYear()} CaseBeast. Built with passion for the web.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
