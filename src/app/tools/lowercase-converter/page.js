import CaseConverterTool from '../../../components/CaseConverterTool';
import Link from 'next/link';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  path: "/tools/lowercase-converter",
  title: "Lowercase Converter – Free Online Tool",
  description: "Convert any text to lowercase instantly. Free, private and runs in your browser — no sign-up. Copy, download or share the result.",
  keywords: 'lowercase converter, convert to lowercase, text to lowercase, lowercase text online, all lowercase tool',
});

export default function LowerCasePage() {
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://caseconverter.revoxera.com' }, { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://caseconverter.revoxera.com/tools' }, { '@type': 'ListItem', position: 3, name: 'lowercase Converter', item: 'https://caseconverter.revoxera.com/tools/lowercase-converter' }] };
  const examples = [
    { input: 'HELLO WORLD', output: 'hello world' },
    { input: 'The Quick Brown Fox', output: 'the quick brown fox' },
    { input: 'Mixed CASE Text HERE', output: 'mixed case text here' },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px] py-10 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-slate-600">
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link><span>/</span>
          <Link href="/tools" className="hover:text-slate-900 transition-colors">Tools</Link><span>/</span>
          <span className="text-slate-900">lowercase Converter</span>
        </nav>
        <section className="mb-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-slate-900">Lowercase Text Converter</h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">Convert any text to <strong className="text-slate-900">all lowercase</strong> instantly. Useful for normalizing data, writing URL slugs, preparing code, and cleaning up imported text.</p>
        </section>
        <section className="mb-16"><CaseConverterTool initialMode="lower" /></section>
        <section className="mb-16">
          <h2 className="text-2xl font-black text-slate-900 mb-6">lowercase Examples</h2>
          <div className="space-y-3">
            {examples.map(({ input, output }) => (
              <div key={input} className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-200 rounded-2xl overflow-hidden">
                <div className="p-5 bg-white"><p className="text-xs text-slate-600 mb-2 font-bold uppercase tracking-wider">Input</p><p className="text-slate-900 font-mono text-sm">{input}</p></div>
                <div className="p-5 bg-green-50 border-l border-slate-200"><p className="text-xs text-green-700 mb-2 font-bold uppercase tracking-wider">lowercase Output</p><p className="text-slate-900 font-mono text-sm font-semibold">{output}</p></div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-slate-200 rounded-[28px]">
            <h2 className="text-2xl font-black text-slate-900 mb-4">What is lowercase?</h2>
            <p className="text-slate-600 leading-relaxed">Lowercase means all letters are the small form — no capital letters at all. In code, <code className="text-emerald-700 bg-slate-100 px-1 rounded">"Hello World".toLowerCase()</code> returns <code className="text-emerald-700 bg-slate-100 px-1 rounded">"hello world"</code>. Lowercase is the default for most programming variables, email addresses, URL paths, and database values.</p>
          </div>
          <div className="p-8 bg-white border border-slate-200 rounded-[28px]">
            <h2 className="text-2xl font-black text-slate-900 mb-4">When to Use Lowercase</h2>
            <ul className="space-y-3 text-slate-600 text-sm">
              {['URL slugs and paths (/my-page-title)', 'Email addresses and usernames', 'HTML and CSS attribute values', 'Python and Ruby variable names', 'Database table and column names', 'JSON keys and API responses', 'Normalizing data for comparison'].map(item => (
                <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />{item}</li>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">Related Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[{ label: 'UPPER CASE', href: '/tools/uppercase-converter' }, { label: 'snake_case Generator', href: '/tools/snake-case-generator' }, { label: 'kebab-case Generator', href: '/tools/kebab-case-generator' }].map(({ label, href }) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-600 hover:text-slate-900 hover:border-primary transition-all">{label} →</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
