import CaseConverterTool from '../../../components/CaseConverterTool';
import Link from 'next/link';

export const metadata = {
  title: 'Uppercase Text Converter — Convert Any Text to CAPITALS Online',
  description: 'Convert any text to UPPER CASE instantly. No login needed, works in your browser, 100% free and private. Copy, download, or share your result.',
  keywords: 'uppercase converter, convert to uppercase, text to caps, all caps converter, uppercase text online, capital letters converter',
  alternates: { canonical: 'https://caseconverter.revoxera.com/tools/uppercase-converter' },
};

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
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted">
          <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
          <Link href="/tools" className="hover:text-white transition-colors">Tools</Link><span>/</span>
          <span className="text-white">UPPER CASE Converter</span>
        </nav>
        <section className="mb-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 bg-gradient-to-b from-white to-muted bg-clip-text text-transparent">Uppercase Text Converter</h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">Transform any text into <strong className="text-white">ALL CAPS (UPPER CASE)</strong> in one click. Great for banners, headings, acronyms, emphasis, and design work.</p>
        </section>
        <section className="mb-16"><CaseConverterTool initialMode="upper" /></section>
        <section className="mb-16">
          <h2 className="text-2xl font-black text-white mb-6">UPPER CASE Examples</h2>
          <div className="space-y-3">
            {EXAMPLES.map(({ input, output }) => (
              <div key={input} className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-5 bg-white/[0.02]"><p className="text-xs text-muted mb-2 font-bold uppercase tracking-wider">Input</p><p className="text-white font-mono text-sm">{input}</p></div>
                <div className="p-5 bg-cyan-500/5 border-l border-white/10"><p className="text-xs text-cyan-400 mb-2 font-bold uppercase tracking-wider">UPPER CASE Output</p><p className="text-white font-mono text-sm font-semibold">{output}</p></div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
            <h2 className="text-2xl font-black text-white mb-4">What is UPPER CASE?</h2>
            <p className="text-muted leading-relaxed mb-4">UPPER CASE (also called ALL CAPS) means every letter in the text is a capital letter. Numbers and special characters remain unchanged. It is created by applying the <code className="text-primary bg-white/5 px-1 rounded">toUpperCase()</code> function to each character.</p>
            <p className="text-muted leading-relaxed">UPPER CASE text is used for emphasis, acronyms, headings, warnings, and design elements where visual impact matters.</p>
          </div>
          <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
            <h2 className="text-2xl font-black text-white mb-4">Common Uses</h2>
            <ul className="space-y-3 text-muted text-sm">
              {['Acronyms and abbreviations (NASA, HTML, API)', 'Warning and error messages', 'Banner and poster text', 'CSS text-transform styling', 'Database column naming (some styles)', 'Section labels in forms', 'Emphasis in informal writing'].map(item => (
                <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />{item}</li>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-black text-white mb-6">Related Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[{ label: 'lowercase Converter', href: '/tools/lowercase-converter' }, { label: 'Title Case', href: '/tools/title-case' }, { label: 'Sentence Case', href: '/tools/sentence-case' }].map(({ label, href }) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-muted hover:text-white hover:border-primary transition-all">{label} →</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
