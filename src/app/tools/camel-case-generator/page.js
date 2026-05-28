import CaseConverterTool from '../../../components/CaseConverterTool';
import Link from 'next/link';

export const metadata = {
  title: 'camelCase Generator — Convert Text to camelCase Online Free',
  description: 'Convert any text or phrase to camelCase format instantly. Essential for JavaScript, Java, TypeScript, and API development. Free, fast, browser-based, no login required.',
  keywords: 'camelcase generator, convert to camelcase, camel case converter, text to camelcase, javascript naming convention tool, camelCase online',
  alternates: { canonical: 'https://caseconverter.revoxera.com/tools/camel-case-generator' },
};

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
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted">
          <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
          <Link href="/tools" className="hover:text-white transition-colors">Tools</Link><span>/</span>
          <span className="text-white">camelCase Generator</span>
        </nav>
        <section className="mb-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 bg-gradient-to-b from-white to-muted bg-clip-text text-transparent">camelCase Generator</h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">Convert any phrase to <strong className="text-white">camelCase</strong> — the standard naming convention for variables and functions in JavaScript, Java, TypeScript, and Swift.</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['JavaScript', 'TypeScript', 'Java', 'Swift', 'C++', 'Go'].map(t => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">{t}</span>
            ))}
          </div>
        </section>
        <section className="mb-16"><CaseConverterTool initialMode="camel" /></section>
        <section className="mb-16">
          <h2 className="text-2xl font-black text-white mb-6">camelCase Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {examples.map(({ input, output }) => (
              <div key={input} className="border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-4 bg-white/[0.02]"><p className="text-xs text-muted mb-1 font-bold">Input</p><p className="text-white font-mono text-sm">{input}</p></div>
                <div className="p-4 bg-blue-500/5 border-t border-white/10"><p className="text-xs text-blue-400 mb-1 font-bold">camelCase</p><p className="text-white font-mono text-sm font-semibold">{output}</p></div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
            <h2 className="text-2xl font-black text-white mb-4">What is camelCase?</h2>
            <p className="text-muted leading-relaxed mb-4">camelCase writes compound words without spaces, where each word after the first starts with a capital letter. The name comes from the humps of a camel. It always starts with a <strong className="text-white">lowercase letter</strong>.</p>
            <p className="text-muted leading-relaxed">Compare: <code className="text-blue-400 bg-white/5 px-1 rounded text-xs">camelCase</code> vs <code className="text-teal-400 bg-white/5 px-1 rounded text-xs">PascalCase</code> — the only difference is the first letter.</p>
          </div>
          <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
            <h2 className="text-2xl font-black text-white mb-4">camelCase in Different Languages</h2>
            <div className="space-y-3">
              {[
                { lang: 'JavaScript', use: 'Variables, function names: getUserName()' },
                { lang: 'TypeScript', use: 'Same as JS + interface properties' },
                { lang: 'Java', use: 'Variables, methods: calculateTotalPrice()' },
                { lang: 'Swift', use: 'Variables and functions: firstName' },
                { lang: 'Go', use: 'Unexported identifiers: myFunction' },
              ].map(({ lang, use }) => (
                <div key={lang} className="flex gap-3 text-sm">
                  <span className="text-blue-400 font-bold w-24 shrink-0">{lang}</span>
                  <span className="text-muted">{use}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-black text-white mb-6">Related Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[{ label: 'PascalCase Generator', href: '/tools/pascal-case-generator' }, { label: 'snake_case Generator', href: '/tools/snake-case-generator' }, { label: 'Naming Conventions Guide', href: '/guides/naming-conventions' }].map(({ label, href }) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-muted hover:text-white hover:border-primary transition-all">{label} →</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
