import CaseConverterTool from '../../../components/CaseConverterTool';
import Link from 'next/link';

export const metadata = {
  title: 'Lowercase Text Converter — Convert Text to Lowercase Online Free',
  description: 'Instantly convert any text to lowercase. Works in your browser with full privacy. No account needed. Great for coding, SEO, and content editing.',
  keywords: 'lowercase converter, convert to lowercase, text to lowercase, lowercase text online, all lowercase tool',
  alternates: { canonical: 'https://caseconverter.revoxera.com/tools/lowercase-converter' },
};

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
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted">
          <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
          <Link href="/tools" className="hover:text-white transition-colors">Tools</Link><span>/</span>
          <span className="text-white">lowercase Converter</span>
        </nav>
        <section className="mb-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 bg-gradient-to-b from-white to-muted bg-clip-text text-transparent">Lowercase Text Converter</h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">Convert any text to <strong className="text-white">all lowercase</strong> instantly. Useful for normalizing data, writing URL slugs, preparing code, and cleaning up imported text.</p>
        </section>
        <section className="mb-16"><CaseConverterTool initialMode="lower" /></section>
        <section className="mb-16">
          <h2 className="text-2xl font-black text-white mb-6">lowercase Examples</h2>
          <div className="space-y-3">
            {examples.map(({ input, output }) => (
              <div key={input} className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-5 bg-white/[0.02]"><p className="text-xs text-muted mb-2 font-bold uppercase tracking-wider">Input</p><p className="text-white font-mono text-sm">{input}</p></div>
                <div className="p-5 bg-green-500/5 border-l border-white/10"><p className="text-xs text-green-400 mb-2 font-bold uppercase tracking-wider">lowercase Output</p><p className="text-white font-mono text-sm font-semibold">{output}</p></div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
            <h2 className="text-2xl font-black text-white mb-4">What is lowercase?</h2>
            <p className="text-muted leading-relaxed">Lowercase means all letters are the small form — no capital letters at all. In code, <code className="text-primary bg-white/5 px-1 rounded">"Hello World".toLowerCase()</code> returns <code className="text-primary bg-white/5 px-1 rounded">"hello world"</code>. Lowercase is the default for most programming variables, email addresses, URL paths, and database values.</p>
          </div>
          <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
            <h2 className="text-2xl font-black text-white mb-4">When to Use Lowercase</h2>
            <ul className="space-y-3 text-muted text-sm">
              {['URL slugs and paths (/my-page-title)', 'Email addresses and usernames', 'HTML and CSS attribute values', 'Python and Ruby variable names', 'Database table and column names', 'JSON keys and API responses', 'Normalizing data for comparison'].map(item => (
                <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />{item}</li>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-black text-white mb-6">Related Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[{ label: 'UPPER CASE', href: '/tools/uppercase-converter' }, { label: 'snake_case Generator', href: '/tools/snake-case-generator' }, { label: 'kebab-case Generator', href: '/tools/kebab-case-generator' }].map(({ label, href }) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-muted hover:text-white hover:border-primary transition-all">{label} →</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
