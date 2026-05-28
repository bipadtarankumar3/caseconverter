import CaseConverterTool from '../../../components/CaseConverterTool';
import Link from 'next/link';

export const metadata = {
  title: 'kebab-case Generator — Convert Text to kebab-case for URLs & CSS',
  description: 'Convert text to kebab-case (dash-case) for CSS class names, URL slugs, and HTML attributes. Instant, free, and runs in your browser.',
  keywords: 'kebab case generator, dash case converter, hyphen case, css class name generator, url slug generator, convert to kebab case',
  alternates: { canonical: 'https://caseconverter.revoxera.com/tools/kebab-case-generator' },
};

export default function KebabCasePage() {
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://caseconverter.revoxera.com' }, { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://caseconverter.revoxera.com/tools' }, { '@type': 'ListItem', position: 3, name: 'kebab-case Generator', item: 'https://caseconverter.revoxera.com/tools/kebab-case-generator' }] };
  const examples = [
    { input: 'Hello World', output: 'hello-world' },
    { input: 'background color', output: 'background-color' },
    { input: 'my blog post title', output: 'my-blog-post-title' },
    { input: 'User Profile Page', output: 'user-profile-page' },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px] py-10 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted">
          <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
          <Link href="/tools" className="hover:text-white transition-colors">Tools</Link><span>/</span>
          <span className="text-white">kebab-case Generator</span>
        </nav>
        <section className="mb-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 bg-gradient-to-b from-white to-muted bg-clip-text text-transparent">kebab-case Generator</h1>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">Convert any text to <strong className="text-white">kebab-case</strong> — all lowercase, words separated by hyphens. The standard format for CSS class names, URL slugs, and HTML data attributes.</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['CSS', 'HTML', 'URL Slugs', 'Vue.js', 'React', 'Tailwind'].map(t => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">{t}</span>
            ))}
          </div>
        </section>
        <section className="mb-16"><CaseConverterTool initialMode="kebab" /></section>
        <section className="mb-16">
          <h2 className="text-2xl font-black text-white mb-6">kebab-case Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {examples.map(({ input, output }) => (
              <div key={input} className="border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-4 bg-white/[0.02]"><p className="text-xs text-muted mb-1 font-bold">Input</p><p className="text-white font-mono text-sm">{input}</p></div>
                <div className="p-4 bg-purple-500/5 border-t border-white/10"><p className="text-xs text-purple-400 mb-1 font-bold">kebab-case</p><p className="text-white font-mono text-sm font-semibold">{output}</p></div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
            <h2 className="text-2xl font-black text-white mb-4">What is kebab-case?</h2>
            <p className="text-muted leading-relaxed mb-4">kebab-case (also called dash-case or hyphen-case) writes all words in lowercase and separates them with hyphens (-). The name refers to how letters are &ldquo;skewered&rdquo; together, like food on a kebab stick.</p>
            <p className="text-muted leading-relaxed">It is the standard for CSS class names, HTML attribute values, URL paths, and Vue.js component names.</p>
          </div>
          <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
            <h2 className="text-2xl font-black text-white mb-4">kebab-case Usage</h2>
            <div className="space-y-3">
              {[
                { use: 'CSS class names', example: '.primary-button { }' },
                { use: 'URL slugs', example: '/blog/my-article-title' },
                { use: 'HTML data attributes', example: 'data-user-id="123"' },
                { use: 'Vue.js components', example: '<my-component />' },
                { use: 'NPM package names', example: 'react-query, next-auth' },
              ].map(({ use, example }) => (
                <div key={use} className="text-sm">
                  <p className="text-purple-400 font-bold">{use}</p>
                  <code className="text-muted font-mono text-xs">{example}</code>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-black text-white mb-6">Related Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[{ label: 'snake_case Generator', href: '/tools/snake-case-generator' }, { label: 'camelCase Generator', href: '/tools/camel-case-generator' }, { label: 'lowercase Converter', href: '/tools/lowercase-converter' }].map(({ label, href }) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-muted hover:text-white hover:border-primary transition-all">{label} →</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
