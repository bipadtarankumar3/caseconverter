import CaseConverterTool from '../../../components/CaseConverterTool';
import Link from 'next/link';

export const metadata = {
  title: 'PascalCase Generator — Convert Text to PascalCase (UpperCamelCase)',
  description: 'Convert text to PascalCase (UpperCamelCase) for C#, TypeScript, and class naming. Instant browser-based conversion with no sign-up.',
  keywords: 'pascalcase generator, pascal case converter, uppercamelcase, convert to pascalcase, C# naming convention, React component naming',
  alternates: { canonical: 'https://caseconverter.revoxera.com/tools/pascal-case-generator' },
};

export default function PascalCasePage() {
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://caseconverter.revoxera.com' }, { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://caseconverter.revoxera.com/tools' }, { '@type': 'ListItem', position: 3, name: 'PascalCase Generator', item: 'https://caseconverter.revoxera.com/tools/pascal-case-generator' }] };
  const examples = [
    { input: 'user profile', output: 'UserProfile' },
    { input: 'shopping cart item', output: 'ShoppingCartItem' },
    { input: 'get all products', output: 'GetAllProducts' },
    { input: 'my react component', output: 'MyReactComponent' },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px] py-10 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted">
          <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
          <Link href="/tools" className="hover:text-white transition-colors">Tools</Link><span>/</span>
          <span className="text-white">PascalCase Generator</span>
        </nav>
        <section className="mb-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 bg-gradient-to-b from-white to-muted bg-clip-text text-transparent">PascalCase Generator</h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">Generate <strong className="text-white">PascalCase</strong> (also called UpperCamelCase) — where every word starts with a capital letter. The standard for class names, React components, and C# identifiers.</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['C#', 'React', 'TypeScript', '.NET', 'Kotlin', 'Dart'].map(t => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400">{t}</span>
            ))}
          </div>
        </section>
        <section className="mb-16"><CaseConverterTool initialMode="pascal" /></section>
        <section className="mb-16">
          <h2 className="text-2xl font-black text-white mb-6">PascalCase Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {examples.map(({ input, output }) => (
              <div key={input} className="border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-4 bg-white/[0.02]"><p className="text-xs text-muted mb-1 font-bold">Input</p><p className="text-white font-mono text-sm">{input}</p></div>
                <div className="p-4 bg-teal-500/5 border-t border-white/10"><p className="text-xs text-teal-400 mb-1 font-bold">PascalCase</p><p className="text-white font-mono text-sm font-semibold">{output}</p></div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
            <h2 className="text-2xl font-black text-white mb-4">PascalCase vs camelCase</h2>
            <div className="space-y-4 text-sm">
              <div className="p-4 bg-white/[0.03] rounded-xl"><p className="text-teal-400 font-bold mb-1">PascalCase</p><code className="text-white font-mono">MyClassName</code><p className="text-muted mt-1">Starts with uppercase. Used for classes, types, React components.</p></div>
              <div className="p-4 bg-white/[0.03] rounded-xl"><p className="text-blue-400 font-bold mb-1">camelCase</p><code className="text-white font-mono">myVariableName</code><p className="text-muted mt-1">Starts with lowercase. Used for variables and functions.</p></div>
            </div>
          </div>
          <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
            <h2 className="text-2xl font-black text-white mb-4">PascalCase in Different Languages</h2>
            <div className="space-y-3">
              {[
                { lang: 'C#', use: 'All public members, classes: UserController' },
                { lang: 'React', use: 'All components: ShoppingCart, NavBar' },
                { lang: 'TypeScript', use: 'Types, interfaces, enums: UserProfile' },
                { lang: 'Kotlin', use: 'Class names: DataRepository' },
                { lang: 'Dart/Flutter', use: 'Class names: StatefulWidget' },
              ].map(({ lang, use }) => (
                <div key={lang} className="flex gap-3 text-sm">
                  <span className="text-teal-400 font-bold w-24 shrink-0">{lang}</span>
                  <span className="text-muted">{use}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-black text-white mb-6">Related Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[{ label: 'camelCase Generator', href: '/tools/camel-case-generator' }, { label: 'snake_case Generator', href: '/tools/snake-case-generator' }, { label: 'Naming Conventions Guide', href: '/guides/naming-conventions' }].map(({ label, href }) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-muted hover:text-white hover:border-primary transition-all">{label} →</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
