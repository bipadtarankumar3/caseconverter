import Link from 'next/link';
import CaseConverterTool from '../../../components/CaseConverterTool';

export const metadata = {
  title: 'APA Title Case Rules — Complete Guide with Examples & Free Tool',
  description: 'Learn APA 7th edition title case rules with detailed examples. Use our free tool to auto-convert headings to APA style. Updated for 2025 guidelines.',
  keywords: 'apa title case, apa title capitalization, apa heading format, apa style title, apa 7th edition capitalization',
  alternates: { canonical: 'https://caseconverter.revoxera.com/guides/apa-title-case' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'APA Title Case Rules — Complete Guide with Examples',
  description: 'A complete guide to APA 7th edition title case rules with examples, exceptions, and a free online converter.',
  author: { '@type': 'Organization', name: 'CaseConverter' },
  publisher: { '@type': 'Organization', name: 'CaseConverter', url: 'https://caseconverter.revoxera.com' },
  mainEntityOfPage: 'https://caseconverter.revoxera.com/guides/apa-title-case',
};

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://caseconverter.revoxera.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://caseconverter.revoxera.com/guides' },
    { '@type': 'ListItem', position: 3, name: 'APA Title Case', item: 'https://caseconverter.revoxera.com/guides/apa-title-case' },
  ],
};

const ALWAYS_CAP = ['Capitalize', 'Nouns', 'Verbs', 'Adjectives', 'Adverbs', 'Pronouns', 'Subordinating conjunctions (After, Because, Since, When)', 'Words of 4+ letters'];
const USUALLY_LOWER = ['Articles: a, an, the', 'Coordinating conjunctions: and, but, for, nor, or, so, yet', 'Short prepositions: at, by, in, of, on, to, up'];

const EXAMPLES = [
  { title: 'Journal Article Title', input: 'the effects of social media on mental health in teenagers', output: 'The Effects of Social Media on Mental Health in Teenagers' },
  { title: 'Book Chapter', input: 'a guide to cognitive behavioral therapy for anxiety and depression', output: 'A Guide to Cognitive Behavioral Therapy for Anxiety and Depression' },
  { title: 'Research Paper', input: 'understanding machine learning algorithms: from theory to practice', output: 'Understanding Machine Learning Algorithms: From Theory to Practice' },
  { title: 'Heading with Subtitle', input: 'art in the digital age: an analysis of online culture and aesthetics', output: 'Art in the Digital Age: An Analysis of Online Culture and Aesthetics' },
];

export default function APATitleCaseGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="container mx-auto px-4 md:px-6 max-w-[1000px] py-10 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted">
          <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
          <span className="text-muted">Guides</span><span>/</span>
          <span className="text-white">APA Title Case</span>
        </nav>

        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">APA 7th Edition · Updated 2025</div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-muted bg-clip-text text-transparent">
            APA Title Case: Complete Rules & Examples
          </h1>
          <p className="text-muted text-xl leading-relaxed">
            APA Style 7th edition has specific title case rules for headings, figure titles, and references. This guide covers every rule with examples — and lets you convert instantly with our free tool.
          </p>
        </header>

        {/* Quick Rules */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-6">APA Title Case Rules at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-green-500/5 border border-green-500/20 rounded-[24px]">
              <h3 className="font-bold text-green-400 mb-4 flex items-center gap-2">✅ Always Capitalize</h3>
              <ul className="space-y-2">
                {ALWAYS_CAP.map(r => <li key={r} className="text-sm text-muted flex items-start gap-2"><span className="text-green-400 shrink-0">·</span>{r}</li>)}
                <li className="text-sm text-muted flex items-start gap-2"><span className="text-green-400 shrink-0">·</span>First and last word of the title/subtitle</li>
                <li className="text-sm text-muted flex items-start gap-2"><span className="text-green-400 shrink-0">·</span>First word after a colon or em dash</li>
              </ul>
            </div>
            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-[24px]">
              <h3 className="font-bold text-red-400 mb-4 flex items-center gap-2">🔻 Usually Lowercase</h3>
              <ul className="space-y-2">
                {USUALLY_LOWER.map(r => <li key={r} className="text-sm text-muted flex items-start gap-2"><span className="text-red-400 shrink-0">·</span>{r}</li>)}
                <li className="text-sm text-muted flex items-start gap-2"><span className="text-red-400 shrink-0">·</span>Infinitive marker: to (e.g., "to learn")</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-6">APA Title Case Examples</h2>
          <div className="space-y-4">
            {EXAMPLES.map(({ title, input, output }) => (
              <div key={title} className="border border-white/10 rounded-2xl overflow-hidden">
                <div className="px-5 py-3 bg-white/[0.01] border-b border-white/10">
                  <p className="text-xs font-bold text-muted uppercase tracking-wider">{title}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-5 bg-white/[0.02]"><p className="text-xs text-muted mb-2 font-bold">Original</p><p className="text-white/70 font-mono text-sm">{input}</p></div>
                  <div className="p-5 bg-primary/5 border-l border-white/10"><p className="text-xs text-primary mb-2 font-bold">APA Title Case</p><p className="text-white font-mono text-sm font-semibold">{output}</p></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* APA vs Sentence Case */}
        <section className="mb-12 p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
          <h2 className="text-2xl font-black text-white mb-4">APA Title Case vs Sentence Case</h2>
          <p className="text-muted leading-relaxed mb-6">APA uses <strong className="text-white">different capitalization rules depending on context</strong>:</p>
          <div className="space-y-4">
            <div className="p-4 bg-white/[0.03] rounded-xl">
              <p className="text-primary font-bold text-sm mb-1">Title Case — Use for:</p>
              <p className="text-muted text-sm">Book titles, journal article titles, report titles (in the body of your paper). Also used for titles of works in your reference list.</p>
            </div>
            <div className="p-4 bg-white/[0.03] rounded-xl">
              <p className="text-amber-400 font-bold text-sm mb-1">Sentence Case — Use for:</p>
              <p className="text-muted text-sm">Article and chapter titles in your reference list. Only the first word, proper nouns, and the first word after a colon are capitalized.</p>
            </div>
          </div>
        </section>

        {/* Free Tool CTA */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-4">Convert to APA Title Case — Free Tool</h2>
          <p className="text-muted mb-6">Paste your heading below and click &ldquo;Title Case&rdquo; to apply proper APA-style capitalization instantly.</p>
          <CaseConverterTool initialMode="title" />
        </section>

        {/* Related */}
        <section>
          <h2 className="text-2xl font-black text-white mb-6">Related Guides & Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Title Case Converter Tool', href: '/tools/title-case' },
              { label: 'Chicago Style Title Case', href: '/guides/chicago-title-case' },
              { label: 'Sentence Case vs Title Case', href: '/guides/sentence-case-vs-title-case' },
              { label: 'Naming Conventions Guide', href: '/guides/naming-conventions' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-muted hover:text-white hover:border-primary transition-all">{label} →</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
