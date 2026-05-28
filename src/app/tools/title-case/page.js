import CaseConverterTool from '../../../components/CaseConverterTool';
import Link from 'next/link';

export const metadata = {
  title: 'Title Case Converter — AP, APA, Chicago, MLA Style Title Case',
  description: 'Convert text to proper Title Case following AP, APA, Chicago, or MLA style guides. Handles exceptions like "of", "and", "the" automatically. Free, instant, browser-based.',
  keywords: 'title case converter, title case generator, apa title case, chicago title case, mla title case, ap style title case, capitalize headings online',
  alternates: { canonical: 'https://caseconverter.revoxera.com/tools/title-case' },
  openGraph: {
    title: 'Title Case Converter — AP, APA, Chicago & MLA Style',
    description: 'Free title case converter that handles every style guide correctly. Paste your heading and get proper Title Case instantly.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Title Case?', acceptedAnswer: { '@type': 'Answer', text: 'Title Case capitalizes the first letter of most words, but keeps short articles, prepositions, and conjunctions (like "a", "of", "and") lowercase unless they are the first or last word. Example: "the art of war" → "The Art of War".' } },
    { '@type': 'Question', name: 'Does APA title case differ from Chicago style?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. APA 7th edition title case capitalizes all "major" words including words of 4+ letters. Chicago style has a more detailed list of exceptions. Both capitalize the first and last word regardless of part of speech.' } },
    { '@type': 'Question', name: 'Which words are NOT capitalized in Title Case?', acceptedAnswer: { '@type': 'Answer', text: 'Short articles (a, an, the), prepositions (of, in, on, at, to, from, by, for), and coordinating conjunctions (and, but, or, nor) are typically lowercase unless they are the first or last word in the title.' } },
    { '@type': 'Question', name: 'Is this title case converter free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. No sign-up required. All processing runs in your browser — your text is never sent to a server.' } },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Convert Text to Title Case',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Paste your heading or text', text: 'Type or paste the text you want to convert into the editor above.' },
    { '@type': 'HowToStep', position: 2, name: 'Click "Title Case"', text: 'Click the Title Case button. The text converts instantly using smart rules for articles, prepositions, and conjunctions.' },
    { '@type': 'HowToStep', position: 3, name: 'Copy the result', text: 'Click Copy to copy the title-cased text to your clipboard.' },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://caseconverter.revoxera.com' },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://caseconverter.revoxera.com/tools' },
    { '@type': 'ListItem', position: 3, name: 'Title Case Converter', item: 'https://caseconverter.revoxera.com/tools/title-case' },
  ],
};

const EXAMPLES = [
  { input: 'the quick brown fox jumps over the lazy dog', output: 'The Quick Brown Fox Jumps over the Lazy Dog' },
  { input: 'a guide to machine learning in python', output: 'A Guide to Machine Learning in Python' },
  { input: 'how to write better seo titles for your blog', output: 'How to Write Better SEO Titles for Your Blog' },
  { input: 'war and peace by leo tolstoy', output: 'War and Peace by Leo Tolstoy' },
];

export default function TitleCasePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="container mx-auto px-4 md:px-6 max-w-[1400px] py-10 md:py-16">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-white transition-colors">Tools</Link>
          <span>/</span>
          <span className="text-white">Title Case Converter</span>
        </nav>

        {/* Hero */}
        <section className="mb-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 bg-gradient-to-b from-white to-muted bg-clip-text text-transparent">
            Title Case Converter
          </h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            Instantly convert headings, titles, and text to proper <strong className="text-white">Title Case</strong>.
            Handles style-guide exceptions (APA, Chicago, MLA, AP) — words like &ldquo;of&rdquo;, &ldquo;and&rdquo;, and &ldquo;the&rdquo; stay lowercase automatically.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            {['APA Style', 'Chicago Style', 'MLA Style', 'AP Style', 'Blog Titles', 'Book Titles'].map(tag => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-muted">{tag}</span>
            ))}
          </div>
        </section>

        {/* Tool */}
        <section id="tool" className="mb-16">
          <CaseConverterTool initialMode="title" />
        </section>

        {/* Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-white mb-6">Title Case Examples</h2>
          <div className="space-y-3">
            {EXAMPLES.map(({ input, output }) => (
              <div key={input} className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-5 bg-white/[0.02]">
                  <p className="text-xs text-muted mb-2 font-bold uppercase tracking-wider">Input</p>
                  <p className="text-white font-mono text-sm">{input}</p>
                </div>
                <div className="p-5 bg-primary/5 border-l border-white/10">
                  <p className="text-xs text-primary mb-2 font-bold uppercase tracking-wider">Title Case Output</p>
                  <p className="text-white font-mono text-sm font-semibold">{output}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What is section */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
            <h2 className="text-2xl font-black text-white mb-4">What is Title Case?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Title Case is a capitalization style where the first letter of most words is capitalized.
              Short prepositions, articles, and conjunctions (such as &ldquo;a&rdquo;, &ldquo;of&rdquo;, &ldquo;and&rdquo;, &ldquo;the&rdquo;) remain lowercase,
              unless they appear as the first or last word.
            </p>
            <p className="text-muted leading-relaxed">
              Title Case is used for book titles, movie names, article headings, blog post titles, chapter headings,
              and anywhere a formal, professional capitalization style is needed.
            </p>
          </div>
          <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
            <h2 className="text-2xl font-black text-white mb-4">Style Guide Differences</h2>
            <div className="space-y-4 text-sm">
              {[
                { style: 'APA', rule: 'Capitalize words of 4+ letters. Lowercase short prepositions and articles.' },
                { style: 'Chicago', rule: 'Comprehensive exception list. Always capitalize first/last word and all "major" words.' },
                { style: 'MLA', rule: 'Similar to Chicago. Lowercase articles, prepositions, and coordinating conjunctions.' },
                { style: 'AP', rule: 'Capitalize all words of 4+ letters. Lowercase articles, conjunctions, prepositions under 4 letters.' },
              ].map(({ style, rule }) => (
                <div key={style} className="flex gap-3">
                  <span className="px-2 py-0.5 rounded-lg bg-primary/10 text-primary text-xs font-black shrink-0 h-fit mt-0.5">{style}</span>
                  <p className="text-muted">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When to use */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-white mb-6">When to Use Title Case</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Blog Post Titles', icon: '📝' },
              { label: 'Book & Article Headings', icon: '📚' },
              { label: 'Email Subject Lines', icon: '📧' },
              { label: 'Resume Section Headers', icon: '💼' },
              { label: 'YouTube Video Titles', icon: '▶️' },
              { label: 'Academic Paper Titles', icon: '🎓' },
              { label: 'Presentation Slides', icon: '📊' },
              { label: 'Product Names', icon: '🏷️' },
            ].map(({ label, icon }) => (
              <div key={label} className="p-4 bg-white/[0.02] border border-white/10 rounded-2xl text-center hover:border-primary transition-colors">
                <div className="text-2xl mb-2">{icon}</div>
                <p className="text-sm text-muted">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl">
            {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
              <details key={name} className="group bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 font-bold cursor-pointer hover:bg-white/[0.03] transition-colors list-none">
                  <span>{name}</span>
                  <span className="text-primary group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <div className="p-5 pt-0 text-muted leading-relaxed border-t border-white/5 mt-4">{acceptedAnswer.text}</div>
              </details>
            ))}
          </div>
        </section>

        {/* Related Tools */}
        <section>
          <h2 className="text-2xl font-black text-white mb-6">Related Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Sentence Case', href: '/tools/sentence-case' },
              { label: 'UPPER CASE', href: '/tools/uppercase-converter' },
              { label: 'lowercase', href: '/tools/lowercase-converter' },
              { label: 'APA Title Case Guide', href: '/guides/apa-title-case' },
              { label: 'Sentence Case vs Title Case', href: '/guides/sentence-case-vs-title-case' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-muted hover:text-white hover:border-primary transition-all">
                {label} →
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
