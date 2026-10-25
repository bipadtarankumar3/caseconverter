import Link from 'next/link';
import CaseConverterTool from '../../../components/CaseConverterTool';

export const metadata = {
  title: 'APA Title Case Rules & Free Converter — 7th Edition Guide',
  description: 'Complete guide to APA Title Case (7th edition). Learn which words to capitalize, which to lowercase, with real examples and our free APA title case converter tool.',
  alternates: { canonical: 'https://caseconverter.revoxera.com/guides/apa-title-case' },
};

const ALWAYS_CAP = [
  'First word of the title and subtitle',
  'First word after a colon, em dash, or end punctuation',
  'Major words: nouns, verbs, adjectives, adverbs, pronouns',
  'Words of four or more letters (e.g., "With", "Between", "From")',
  'Both words in a hyphenated compound (e.g., "Self-Report", "Non-Significant")',
];

const USUALLY_LOWER = [
  'Short conjunctions (3 or fewer letters): and, as, but, for, if, nor, or, so, yet',
  'Short prepositions (3 or fewer letters): at, by, for, in, of, off, on, out, per, to, up, via',
  'Articles: a, an, the',
];

const EXAMPLES = [
  {
    title: 'Short prepositions lowercase, 4+ letters capitalized',
    input: 'the role of artificial intelligence in modern healthcare systems',
    output: 'The Role of Artificial Intelligence in Modern Healthcare Systems',
  },
  {
    title: 'Subtitle after a colon capitalized',
    input: 'digital transformation: a comprehensive study on enterprise agility',
    output: 'Digital Transformation: A Comprehensive Study on Enterprise Agility',
  },
  {
    title: 'Hyphenated compounds with both words capitalized',
    input: 'self-reported symptoms and peer-reviewed clinical outcomes',
    output: 'Self-Reported Symptoms and Peer-Reviewed Clinical Outcomes',
  },
];

export default function ApaTitleCaseGuide() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-[900px] py-10 md:py-16">
      
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/guides/naming-conventions" className="hover:text-slate-900 transition-colors">Guides</Link>
        <span>/</span>
        <span className="text-slate-900 font-bold">APA Title Case</span>
      </nav>

      <header className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-4">
          APA 7th Edition Style Guide
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
          APA Title Case: Complete Rules & Examples
        </h1>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          APA Style 7th edition specifies strict title case rules for academic headings, figure titles, and article references. This guide covers every rule with clear examples — and lets you convert text instantly with our free tool.
        </p>
      </header>

      {/* Quick Rules */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">APA Title Case Rules at a Glance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-emerald-50/50 border border-emerald-200 rounded-3xl">
            <h3 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">✅ Always Capitalize</h3>
            <ul className="space-y-2 text-xs md:text-sm text-slate-700">
              {ALWAYS_CAP.map(r => (
                <li key={r} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold shrink-0">&bull;</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-rose-50/50 border border-rose-200 rounded-3xl">
            <h3 className="font-bold text-rose-900 mb-4 flex items-center gap-2">🔻 Usually Lowercase</h3>
            <ul className="space-y-2 text-xs md:text-sm text-slate-700">
              {USUALLY_LOWER.map(r => (
                <li key={r} className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold shrink-0">&bull;</span>
                  <span>{r}</span>
                </li>
              ))}
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold shrink-0">&bull;</span>
                <span>Infinitive marker: to (e.g., &ldquo;to Learn&rdquo; vs &ldquo;to learn&rdquo;)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">APA Title Case Examples</h2>
        <div className="space-y-4">
          {EXAMPLES.map(({ title, input, output }) => (
            <div key={title} className="border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-xs">
              <div className="px-5 py-3 bg-slate-50 border-b border-slate-200">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">{title}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-5 border-b md:border-b-0 md:border-r border-slate-100">
                  <p className="text-xs text-slate-400 mb-1 font-bold">Original</p>
                  <p className="text-slate-700 font-mono text-xs md:text-sm">{input}</p>
                </div>
                <div className="p-5 bg-emerald-50/30">
                  <p className="text-xs text-emerald-700 mb-1 font-bold">APA Title Case</p>
                  <p className="text-slate-900 font-mono text-xs md:text-sm font-bold">{output}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APA vs Sentence Case */}
      <section className="mb-12 p-6 md:p-8 bg-white border border-slate-200 rounded-3xl shadow-xs">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">APA Title Case vs Sentence Case</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">APA utilizes distinct capitalization depending on paper sections:</p>
        <div className="space-y-3">
          <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl">
            <p className="text-emerald-700 font-bold text-sm mb-1">Title Case — Use for:</p>
            <p className="text-slate-600 text-xs md:text-sm">Paper title, headings (Levels 1–3), table titles, and figure titles. Also used when citing published books or articles inside body paragraphs.</p>
          </div>
          <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl">
            <p className="text-amber-700 font-bold text-sm mb-1">Sentence Case — Use for:</p>
            <p className="text-slate-600 text-xs md:text-sm">Article and chapter titles inside your reference list at the end of the document. Only the first word, proper nouns, and the word following a colon are capitalized.</p>
          </div>
        </div>
      </section>

      {/* Free Tool CTA */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Convert to Title Case — Live Tool</h2>
        <p className="text-slate-600 text-sm mb-6">Paste your heading below to apply style-compliant capitalization instantly.</p>
        <CaseConverterTool initialMode="title" />
      </section>

      {/* Related */}
      <section className="p-6 md:p-8 bg-slate-50 border border-slate-200 rounded-3xl">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Related Guides & Tools</h2>
        <div className="flex flex-wrap gap-2.5">
          <Link href="/tools/title-case" className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all shadow-xs">Title Case Tool →</Link>
          <Link href="/guides/naming-conventions" className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all shadow-xs">Naming Conventions Guide →</Link>
          <Link href="/services" className="px-4 py-2 rounded-xl bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700 hover:bg-indigo-100 transition-all">Typography API & Enterprise Suite →</Link>
        </div>
      </section>
    </div>
  );
}
