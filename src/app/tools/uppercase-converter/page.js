import CaseConverterTool from '../../../components/CaseConverterTool';
import Link from 'next/link';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  path: "/tools/uppercase-converter",
  title: "Uppercase Converter – Text to ALL CAPS",
  description: "Convert any text to UPPER CASE (all caps) instantly. Free, private and browser-based — copy, download or share the result.",
  keywords: 'uppercase converter, convert to uppercase, text to caps, all caps converter, uppercase text online, capital letters converter',
});

const EXAMPLES = [
  { input: 'hello world', output: 'HELLO WORLD' },
  { input: 'The quick brown fox', output: 'THE QUICK BROWN FOX' },
  { input: 'coming soon — new features available', output: 'COMING SOON — NEW FEATURES AVAILABLE' },
];

export default function UpperCasePage() {
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://caseconverter.revoxera.com' }, { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://caseconverter.revoxera.com/tools' }, { '@type': 'ListItem', position: 3, name: 'UPPER CASE Converter', item: 'https://caseconverter.revoxera.com/tools/uppercase-converter' }] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px] py-10 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-slate-600">
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link><span>/</span>
          <Link href="/tools" className="hover:text-slate-900 transition-colors">Tools</Link><span>/</span>
          <span className="text-slate-900">UPPER CASE Converter</span>
        </nav>
        <section className="mb-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-slate-900">Uppercase Text Converter</h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">Transform any text into <strong className="text-slate-900">ALL CAPS (UPPER CASE)</strong> in one click. Great for banners, headings, acronyms, emphasis, and design work.</p>
        </section>
        <section className="mb-16"><CaseConverterTool initialMode="upper" /></section>
        <section className="mb-16">
          <h2 className="text-2xl font-black text-slate-900 mb-6">UPPER CASE Examples</h2>
          <div className="space-y-3">
            {EXAMPLES.map(({ input, output }) => (
              <div key={input} className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-200 rounded-2xl overflow-hidden">
                <div className="p-5 bg-white"><p className="text-xs text-slate-600 mb-2 font-bold uppercase tracking-wider">Input</p><p className="text-slate-900 font-mono text-sm">{input}</p></div>
                <div className="p-5 bg-cyan-50 border-l border-slate-200"><p className="text-xs text-cyan-700 mb-2 font-bold uppercase tracking-wider">UPPER CASE Output</p><p className="text-slate-900 font-mono text-sm font-semibold">{output}</p></div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-slate-200 rounded-[28px]">
            <h2 className="text-2xl font-black text-slate-900 mb-4">What is UPPER CASE?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">UPPER CASE (also called ALL CAPS) means every letter in the text is a capital letter. Numbers and special characters remain unchanged. It is created by applying the <code className="text-emerald-700 bg-slate-100 px-1 rounded">toUpperCase()</code> function to each character.</p>
            <p className="text-slate-600 leading-relaxed">UPPER CASE text is used for emphasis, acronyms, headings, warnings, and design elements where visual impact matters.</p>
          </div>
          <div className="p-8 bg-white border border-slate-200 rounded-[28px]">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Common Uses</h2>
            <ul className="space-y-3 text-slate-600 text-sm">
              {['Acronyms and abbreviations (NASA, HTML, API)', 'Warning and error messages', 'Banner and poster text', 'CSS text-transform styling', 'Database column naming (some styles)', 'Section labels in forms', 'Emphasis in informal writing'].map(item => (
                <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />{item}</li>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">Related Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[{ label: 'lowercase Converter', href: '/tools/lowercase-converter' }, { label: 'Title Case', href: '/tools/title-case' }, { label: 'Sentence Case', href: '/tools/sentence-case' }].map(({ label, href }) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-600 hover:text-slate-900 hover:border-primary transition-all">{label} →</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
