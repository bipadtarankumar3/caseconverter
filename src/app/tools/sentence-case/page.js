import CaseConverterTool from '../../../components/CaseConverterTool';
import Link from 'next/link';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  path: "/tools/sentence-case",
  title: "Sentence Case Converter – Free & Instant",
  description: "Convert text to sentence case: capitalizes the first letter of each sentence and fixes ALL CAPS. Free, instant, and private in your browser.",
  keywords: 'sentence case converter, convert to sentence case, sentence case online, capitalize first letter of sentence, sentence case tool',
});

const EXAMPLES = [
  { input: 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.', output: 'The quick brown fox jumps over the lazy dog.' },
  { input: 'hello world. this is sentence case. it works great.', output: 'Hello world. This is sentence case. It works great.' },
  { input: 'FIRST SENTENCE! second sentence? third one here.', output: 'First sentence! Second sentence? Third one here.' },
];

export default function SentenceCasePage() {
  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://caseconverter.revoxera.com' },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://caseconverter.revoxera.com/tools' },
      { '@type': 'ListItem', position: 3, name: 'Sentence Case Converter', item: 'https://caseconverter.revoxera.com/tools/sentence-case' },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px] py-10 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-slate-600">
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link><span>/</span>
          <Link href="/tools" className="hover:text-slate-900 transition-colors">Tools</Link><span>/</span>
          <span className="text-slate-900">Sentence Case</span>
        </nav>
        <section className="mb-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-slate-900">Sentence Case Converter</h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">Convert any text to <strong className="text-slate-900">sentence case</strong> — capitalizes the first letter of each sentence, lowercases everything else. Works with periods, exclamation marks, and question marks.</p>
        </section>
        <section className="mb-16"><CaseConverterTool initialMode="sentence" /></section>

        <section className="mb-16">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Sentence Case Examples</h2>
          <div className="space-y-3">
            {EXAMPLES.map(({ input, output }) => (
              <div key={input} className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-200 rounded-2xl overflow-hidden">
                <div className="p-5 bg-white"><p className="text-xs text-slate-600 mb-2 font-bold uppercase tracking-wider">Input</p><p className="text-slate-900 font-mono text-sm">{input}</p></div>
                <div className="p-5 bg-emerald-50 border-l border-slate-200"><p className="text-xs text-emerald-700 mb-2 font-bold uppercase tracking-wider">Sentence Case Output</p><p className="text-slate-900 font-mono text-sm font-semibold">{output}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-slate-200 rounded-[28px]">
            <h2 className="text-2xl font-black text-slate-900 mb-4">What is Sentence Case?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">Sentence case capitalizes only the first letter of the first word in a sentence (and proper nouns), while keeping all other letters lowercase. It mirrors standard grammatical writing rules used in everyday prose, emails, and professional documents.</p>
            <p className="text-slate-600 leading-relaxed">It differs from Title Case (which capitalizes most words) and from ALL CAPS. Sentence case is the default writing style for body text, emails, and user-interface copy in modern apps.</p>
          </div>
          <div className="p-8 bg-white border border-slate-200 rounded-[28px]">
            <h2 className="text-2xl font-black text-slate-900 mb-4">When to Use Sentence Case</h2>
            <ul className="space-y-3 text-slate-600 text-sm">
              {['Body text and paragraphs', 'Email subject lines (modern style)', 'UI button and label copy', 'Social media posts', 'Subheadings in articles', 'Product descriptions', 'Chat messages and captions'].map(item => (
                <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">Related Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Title Case', href: '/tools/title-case' },
              { label: 'UPPER CASE', href: '/tools/uppercase-converter' },
              { label: 'lowercase', href: '/tools/lowercase-converter' },
              { label: 'Sentence vs Title Case Guide', href: '/guides/sentence-case-vs-title-case' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-600 hover:text-slate-900 hover:border-primary transition-all">{label} →</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
