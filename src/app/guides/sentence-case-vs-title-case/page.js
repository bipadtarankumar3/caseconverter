import Link from 'next/link';
import CaseConverterTool from '../../../components/CaseConverterTool';
import { pageMeta } from '@/lib/seo';

const PAGE_URL = 'https://caseconverter.revoxera.com/guides/sentence-case-vs-title-case';

export const metadata = pageMeta({
  path: "/guides/sentence-case-vs-title-case",
  title: "Sentence Case vs Title Case (With Examples)",
  description: "Sentence case vs Title Case: the rules, side-by-side examples, which style guides use each (APA, Chicago, Google), and a free converter.",
});

const COMPARISON = [
  {
    input: 'how to build a design system that scales',
    sentence: 'How to build a design system that scales',
    title: 'How to Build a Design System That Scales',
  },
  {
    input: 'the beginner’s guide to email marketing in 2026',
    sentence: 'The beginner’s guide to email marketing in 2026',
    title: 'The Beginner’s Guide to Email Marketing in 2026',
  },
  {
    input: 'why remote teams need better documentation: a case study',
    sentence: 'Why remote teams need better documentation: a case study',
    title: 'Why Remote Teams Need Better Documentation: A Case Study',
  },
];

const WHO_USES = [
  { style: 'APA 7th', sentence: 'Reference-list article titles', title: 'Paper title and headings' },
  { style: 'Chicago', sentence: 'Optional for some references', title: 'Book, article and chapter titles' },
  { style: 'AP (news)', sentence: '—', title: 'Headlines (AP uses its own rules)' },
  { style: 'Google developer docs', sentence: 'Headings, buttons, UI labels', title: 'Product names only' },
  { style: 'Microsoft style guide', sentence: 'Headings and UI text', title: 'Product and feature names' },
];

const FAQS = [
  {
    q: 'What is the difference between sentence case and title case?',
    a: 'Sentence case capitalizes only the first word and proper nouns, like a normal sentence. Title Case capitalizes the first letter of most words, leaving short articles, conjunctions, and prepositions (a, and, of, the) lowercase unless they are the first or last word.',
  },
  {
    q: 'Which is better for headlines and blog titles?',
    a: 'Both are correct; it is a style choice. Title Case looks more formal and is traditional for books, news, and academic papers. Sentence case is easier to read and is the default in most modern product, UX, and technical writing (Google, Microsoft, GOV.UK).',
  },
  {
    q: 'Should email subject lines use sentence case or title case?',
    a: 'Most modern brands use sentence case for subject lines because it reads as more personal and conversational. Pick one style and use it consistently.',
  },
  {
    q: 'Do I capitalize the word after a colon?',
    a: 'In Title Case, always capitalize the first word after a colon. In sentence case, APA capitalizes it when it begins a subtitle; many other guides keep it lowercase unless it starts a complete sentence.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://caseconverter.revoxera.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://caseconverter.revoxera.com/guides/naming-conventions' },
    { '@type': 'ListItem', position: 3, name: 'Sentence Case vs Title Case', item: PAGE_URL },
  ],
};

export default function SentenceVsTitleCaseGuide() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-[900px] py-10 md:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/guides/naming-conventions" className="hover:text-slate-900 transition-colors">Guides</Link>
        <span>/</span>
        <span className="text-slate-900 font-bold">Sentence Case vs Title Case</span>
      </nav>

      <header className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold mb-4">
          Writing Style Guide
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
          Sentence Case vs Title Case: Which Should You Use?
        </h1>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          The short answer: <strong className="text-slate-900">sentence case</strong> capitalizes only the first word and proper nouns;{' '}
          <strong className="text-slate-900">Title Case</strong> capitalizes most words. Here is how they differ, who uses which, and how to switch between them in one click.
        </p>
      </header>

      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Sentence case rules</h2>
          <ul className="space-y-2 text-slate-600 text-sm list-disc pl-5">
            <li>Capitalize the first word</li>
            <li>Capitalize proper nouns and acronyms (Google, NASA, iPhone)</li>
            <li>Lowercase everything else</li>
            <li>Reads like a normal sentence, so it is faster to scan</li>
          </ul>
          <Link href="/tools/sentence-case" className="inline-block mt-4 text-sm font-bold text-emerald-700 hover:underline">Sentence case converter →</Link>
        </div>
        <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Title Case rules</h2>
          <ul className="space-y-2 text-slate-600 text-sm list-disc pl-5">
            <li>Capitalize the first and last word</li>
            <li>Capitalize nouns, verbs, adjectives, adverbs and pronouns</li>
            <li>Lowercase short articles, conjunctions and prepositions (a, and, of, to)</li>
            <li>Capitalize the first word after a colon</li>
          </ul>
          <Link href="/tools/title-case" className="inline-block mt-4 text-sm font-bold text-emerald-700 hover:underline">Title Case converter →</Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Side-by-Side Examples</h2>
        <div className="space-y-4">
          {COMPARISON.map(({ input, sentence, title }) => (
            <div key={input} className="border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-xs">
              <div className="px-5 py-3 bg-slate-50 border-b border-slate-200">
                <p className="text-xs text-slate-500 font-mono">{input}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-5 border-b md:border-b-0 md:border-r border-slate-100">
                  <p className="text-xs text-amber-700 mb-1 font-bold">Sentence case</p>
                  <p className="text-slate-900 text-sm md:text-base font-semibold">{sentence}</p>
                </div>
                <div className="p-5 bg-emerald-50/30">
                  <p className="text-xs text-emerald-700 mb-1 font-bold">Title Case</p>
                  <p className="text-slate-900 text-sm md:text-base font-semibold">{title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Who Uses Which Style?</h2>
        <div className="overflow-x-auto border border-slate-200 rounded-2xl">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="p-3 font-bold">Style guide</th>
                <th className="p-3 font-bold">Sentence case for</th>
                <th className="p-3 font-bold">Title Case for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {WHO_USES.map((r) => (
                <tr key={r.style}>
                  <td className="p-3 font-semibold text-slate-900">{r.style}</td>
                  <td className="p-3">{r.sentence}</td>
                  <td className="p-3">{r.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-slate-500 text-xs mt-3">
          Rule of thumb: use Title Case for formal titles (books, papers, news) and sentence case for product UI, docs, emails and most web headings. Whatever you choose, be consistent.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Try Both on Your Own Heading</h2>
        <p className="text-slate-600 text-sm mb-6">
          Paste a heading, click <strong>Title Case</strong> or <strong>Sentence case</strong>, and use <strong>Undo</strong> to compare.
        </p>
        <CaseConverterTool initialMode="title" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
              <summary className="flex items-center justify-between gap-3 p-5 font-bold text-slate-900 cursor-pointer hover:bg-slate-50 transition-colors list-none text-sm md:text-base">
                <span>{q}</span>
                <span className="text-emerald-700 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
              </summary>
              <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">{a}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="p-6 md:p-8 bg-slate-50 border border-slate-200 rounded-3xl">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Related Guides & Tools</h2>
        <div className="flex flex-wrap gap-2.5">
          <Link href="/guides/apa-title-case" className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all shadow-xs">APA Title Case Rules →</Link>
          <Link href="/tools/title-case" className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all shadow-xs">Title Case Converter →</Link>
          <Link href="/tools/sentence-case" className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all shadow-xs">Sentence Case Converter →</Link>
        </div>
      </section>
    </div>
  );
}
