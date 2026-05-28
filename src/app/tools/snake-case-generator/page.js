import CaseConverterTool from '../../../components/CaseConverterTool';
import Link from 'next/link';

export const metadata = {
  title: 'snake_case Generator — Convert Text to snake_case for Python, SQL',
  description: 'Instantly convert any text or phrase to snake_case format. Perfect for Python variable names, database fields, and URL slugs. 100% free and browser-based.',
  keywords: 'snake case generator, convert to snake case, snake case converter, text to snake_case, python naming convention, sql column naming',
  alternates: { canonical: 'https://caseconverter.revoxera.com/tools/snake-case-generator' },
};

export default function SnakeCasePage() {
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://caseconverter.revoxera.com' }, { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://caseconverter.revoxera.com/tools' }, { '@type': 'ListItem', position: 3, name: 'snake_case Generator', item: 'https://caseconverter.revoxera.com/tools/snake-case-generator' }] };
  const examples = [
    { input: 'hello world', output: 'hello_world' },
    { input: 'User Profile Settings', output: 'user_profile_settings' },
    { input: 'created at timestamp', output: 'created_at_timestamp' },
    { input: 'Total Price USD', output: 'total_price_usd' },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px] py-10 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted">
          <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
          <Link href="/tools" className="hover:text-white transition-colors">Tools</Link><span>/</span>
          <span className="text-white">snake_case Generator</span>
        </nav>
        <section className="mb-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 bg-gradient-to-b from-white to-muted bg-clip-text text-transparent">snake_case Generator</h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">Convert any text to <strong className="text-white">snake_case</strong> — all lowercase, words separated by underscores. The standard naming convention for Python, Ruby, PostgreSQL, and database schemas.</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Python', 'Ruby', 'PostgreSQL', 'MySQL', 'Rails', 'FastAPI'].map(t => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400">{t}</span>
            ))}
          </div>
        </section>
        <section className="mb-16"><CaseConverterTool initialMode="snake" /></section>
        <section className="mb-16">
          <h2 className="text-2xl font-black text-white mb-6">snake_case Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {examples.map(({ input, output }) => (
              <div key={input} className="border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-4 bg-white/[0.02]"><p className="text-xs text-muted mb-1 font-bold">Input</p><p className="text-white font-mono text-sm">{input}</p></div>
                <div className="p-4 bg-red-500/5 border-t border-white/10"><p className="text-xs text-red-400 mb-1 font-bold">snake_case</p><p className="text-white font-mono text-sm font-semibold">{output}</p></div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
            <h2 className="text-2xl font-black text-white mb-4">What is snake_case?</h2>
            <p className="text-muted leading-relaxed mb-4">snake_case is a naming convention where all words are lowercase and separated by underscores (_). It reads like a snake stretching across the word — hence the name.</p>
            <p className="text-muted leading-relaxed">It is the PEP 8 standard for Python and the conventional style for database column names in most SQL databases.</p>
          </div>
          <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
            <h2 className="text-2xl font-black text-white mb-4">snake_case Usage by Language</h2>
            <div className="space-y-3">
              {[
                { lang: 'Python', use: 'Variables, functions, modules: get_user_name()' },
                { lang: 'Ruby', use: 'Variables and methods: calculate_total' },
                { lang: 'PostgreSQL', use: 'Table and column names: user_profiles' },
                { lang: 'MySQL', use: 'Table names: order_items, created_at' },
                { lang: 'FastAPI', use: 'Route parameters and field names' },
              ].map(({ lang, use }) => (
                <div key={lang} className="flex gap-3 text-sm">
                  <span className="text-red-400 font-bold w-24 shrink-0">{lang}</span>
                  <span className="text-muted">{use}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-black text-white mb-6">Related Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[{ label: 'kebab-case Generator', href: '/tools/kebab-case-generator' }, { label: 'camelCase Generator', href: '/tools/camel-case-generator' }, { label: 'lowercase Converter', href: '/tools/lowercase-converter' }, { label: 'Naming Conventions Guide', href: '/guides/naming-conventions' }].map(({ label, href }) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-muted hover:text-white hover:border-primary transition-all">{label} →</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
