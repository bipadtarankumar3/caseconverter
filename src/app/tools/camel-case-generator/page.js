import CaseConverterTool from '../../../components/CaseConverterTool';
import Link from 'next/link';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  path: "/tools/camel-case-generator",
  title: "camelCase Converter for JavaScript & Java",
  description: "Convert any text, snake_case or kebab-case to camelCase instantly. Converts each line separately — ideal for JavaScript, Java and TypeScript.",
  keywords: 'camelcase generator, convert to camelcase, camel case converter, text to camelcase, javascript naming convention tool, camelCase online',
});

export default function CamelCasePage() {
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://caseconverter.revoxera.com' }, { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://caseconverter.revoxera.com/tools' }, { '@type': 'ListItem', position: 3, name: 'camelCase Generator', item: 'https://caseconverter.revoxera.com/tools/camel-case-generator' }] };
  const examples = [
    { input: 'hello world', output: 'helloWorld' },
    { input: 'user profile settings', output: 'userProfileSettings' },
    { input: 'get all user orders', output: 'getAllUserOrders' },
    { input: 'first name', output: 'firstName' },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px] py-10 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-slate-600">
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link><span>/</span>
          <Link href="/tools" className="hover:text-slate-900 transition-colors">Tools</Link><span>/</span>
          <span className="text-slate-900">camelCase Generator</span>
        </nav>
        <section className="mb-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-slate-900">camelCase Generator</h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">Convert any phrase to <strong className="text-slate-900">camelCase</strong> — the standard naming convention for variables and functions in JavaScript, Java, TypeScript, and Swift.</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['JavaScript', 'TypeScript', 'Java', 'Swift', 'C++', 'Go'].map(t => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700">{t}</span>
            ))}
          </div>
        </section>
        <section className="mb-16"><CaseConverterTool initialMode="camel" /></section>
        <section className="mb-16">
          <h2 className="text-2xl font-black text-slate-900 mb-6">camelCase Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {examples.map(({ input, output }) => (
              <div key={input} className="border border-slate-200 rounded-2xl overflow-hidden">
                <div className="p-4 bg-white"><p className="text-xs text-slate-600 mb-1 font-bold">Input</p><p className="text-slate-900 font-mono text-sm">{input}</p></div>
                <div className="p-4 bg-blue-50 border-t border-slate-200"><p className="text-xs text-blue-700 mb-1 font-bold">camelCase</p><p className="text-slate-900 font-mono text-sm font-semibold">{output}</p></div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white border border-slate-200 rounded-[28px]">
            <h2 className="text-2xl font-black text-slate-900 mb-4">What is camelCase?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">camelCase writes compound words without spaces, where each word after the first starts with a capital letter. The name comes from the humps of a camel. It always starts with a <strong className="text-slate-900">lowercase letter</strong>.</p>
            <p className="text-slate-600 leading-relaxed">Compare: <code className="text-blue-700 bg-slate-100 px-1 rounded text-xs">camelCase</code> vs <code className="text-teal-700 bg-slate-100 px-1 rounded text-xs">PascalCase</code> — the only difference is the first letter.</p>
          </div>
          <div className="p-8 bg-white border border-slate-200 rounded-[28px]">
            <h2 className="text-2xl font-black text-slate-900 mb-4">camelCase in Different Languages</h2>
            <div className="space-y-3">
              {[
                { lang: 'JavaScript', use: 'Variables, function names: getUserName()' },
                { lang: 'TypeScript', use: 'Same as JS + interface properties' },
                { lang: 'Java', use: 'Variables, methods: calculateTotalPrice()' },
                { lang: 'Swift', use: 'Variables and functions: firstName' },
                { lang: 'Go', use: 'Unexported identifiers: myFunction' },
              ].map(({ lang, use }) => (
                <div key={lang} className="flex gap-3 text-sm">
                  <span className="text-blue-700 font-bold w-24 shrink-0">{lang}</span>
                  <span className="text-slate-600">{use}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">Related Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[{ label: 'PascalCase Generator', href: '/tools/pascal-case-generator' }, { label: 'snake_case Generator', href: '/tools/snake-case-generator' }, { label: 'Naming Conventions Guide', href: '/guides/naming-conventions' }].map(({ label, href }) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-600 hover:text-slate-900 hover:border-primary transition-all">{label} →</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
