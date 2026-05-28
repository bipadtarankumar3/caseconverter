import Link from 'next/link';
import CaseConverterTool from '../../../components/CaseConverterTool';

export const metadata = {
  title: 'Code Naming Conventions — camelCase vs PascalCase vs snake_case vs kebab-case',
  description: 'Master the differences between camelCase, PascalCase, snake_case, and kebab-case. Learn which naming convention to use in JavaScript, Python, CSS, SQL, and more.',
  keywords: 'camelcase vs pascalcase, naming conventions programming, snake case vs camel case, code naming standards, variable naming conventions, kebab case css',
  alternates: { canonical: 'https://caseconverter.revoxera.com/guides/naming-conventions' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Code Naming Conventions: camelCase vs PascalCase vs snake_case vs kebab-case',
  description: 'A complete developer guide to choosing the right naming convention — camelCase, PascalCase, snake_case, or kebab-case — for each programming language and context.',
  author: { '@type': 'Organization', name: 'CaseConverter' },
  publisher: { '@type': 'Organization', name: 'CaseConverter', url: 'https://caseconverter.revoxera.com' },
};

const breadcrumb = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://caseconverter.revoxera.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://caseconverter.revoxera.com/guides' },
    { '@type': 'ListItem', position: 3, name: 'Naming Conventions', item: 'https://caseconverter.revoxera.com/guides/naming-conventions' },
  ],
};

const CONVENTIONS = [
  {
    name: 'camelCase',
    example: 'userProfileName',
    color: 'blue',
    colorClass: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    desc: 'Starts with lowercase. Each subsequent word starts with uppercase. No separators.',
    when: [
      { lang: 'JavaScript / TypeScript', use: 'Variables, functions, object properties', ex: 'getUserName(), firstName' },
      { lang: 'Java', use: 'Variables, methods', ex: 'calculateTotal(), itemCount' },
      { lang: 'Swift', use: 'Variables and functions', ex: 'viewDidLoad(), userName' },
      { lang: 'Go (unexported)', use: 'Package-level unexported identifiers', ex: 'myFunction, localVar' },
      { lang: 'JSON keys', use: 'Standard API response format', ex: '{ "userId": 1 }' },
    ],
  },
  {
    name: 'PascalCase',
    example: 'UserProfileName',
    color: 'teal',
    colorClass: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    desc: 'Same as camelCase but the very first letter is also uppercase. Also called UpperCamelCase.',
    when: [
      { lang: 'C#', use: 'Classes, methods, properties, namespaces', ex: 'UserController, GetById()' },
      { lang: 'React (JSX)', use: 'All component names', ex: 'ShoppingCart, NavBar' },
      { lang: 'TypeScript', use: 'Types, interfaces, enums', ex: 'UserProfile, OrderStatus' },
      { lang: 'Kotlin', use: 'Class and object names', ex: 'DataRepository, ApiClient' },
      { lang: 'Dart / Flutter', use: 'Classes and widgets', ex: 'StatefulWidget, MyApp' },
    ],
  },
  {
    name: 'snake_case',
    example: 'user_profile_name',
    color: 'red',
    colorClass: 'text-red-400 bg-red-500/10 border-red-500/20',
    desc: 'All lowercase, words separated by underscores. Reads like a snake stretched across the text.',
    when: [
      { lang: 'Python', use: 'Variables, functions, modules (PEP 8)', ex: 'get_user_name(), total_price' },
      { lang: 'Ruby / Rails', use: 'Methods and local variables', ex: 'find_by_id(), user_count' },
      { lang: 'PostgreSQL', use: 'Table and column names', ex: 'user_profiles, created_at' },
      { lang: 'MySQL', use: 'Tables and columns', ex: 'order_items, product_id' },
      { lang: 'Rust', use: 'Variables and functions', ex: 'my_variable, calculate_sum()' },
    ],
  },
  {
    name: 'kebab-case',
    example: 'user-profile-name',
    color: 'purple',
    colorClass: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    desc: 'All lowercase, words separated by hyphens. Also called dash-case or hyphen-case.',
    when: [
      { lang: 'CSS', use: 'Class names and custom properties', ex: '.primary-button, --text-color' },
      { lang: 'HTML', use: 'data-* attributes', ex: 'data-user-id, data-item-count' },
      { lang: 'URL slugs', use: 'Page paths and route segments', ex: '/blog/my-post-title' },
      { lang: 'Vue.js', use: 'Component names in templates', ex: '<my-component />' },
      { lang: 'NPM packages', use: 'Package names', ex: 'react-query, next-auth' },
    ],
  },
];

export default function NamingConventionsGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="container mx-auto px-4 md:px-6 max-w-[1100px] py-10 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted">
          <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
          <span className="text-muted">Guides</span><span>/</span>
          <span className="text-white">Naming Conventions</span>
        </nav>

        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6">Developer Guide · All Languages</div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-muted bg-clip-text text-transparent">
            camelCase vs PascalCase vs snake_case vs kebab-case
          </h1>
          <p className="text-muted text-xl leading-relaxed">
            Every programming language has conventions for naming variables, functions, and files.
            This guide explains the four major naming styles, when to use each, and provides real-world examples by language.
          </p>
        </header>

        {/* Quick Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-6">Quick Comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="text-left p-4 font-bold text-muted">Convention</th>
                  <th className="text-left p-4 font-bold text-muted">Example</th>
                  <th className="text-left p-4 font-bold text-muted">Separator</th>
                  <th className="text-left p-4 font-bold text-muted">First Letter</th>
                  <th className="text-left p-4 font-bold text-muted">Primary Languages</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { name: 'camelCase', ex: 'userName', sep: 'None', first: 'Lowercase', langs: 'JS, Java, Swift', color: 'text-blue-400' },
                  { name: 'PascalCase', ex: 'UserName', sep: 'None', first: 'Uppercase', langs: 'C#, React, Kotlin', color: 'text-teal-400' },
                  { name: 'snake_case', ex: 'user_name', sep: 'Underscore _', first: 'Lowercase', langs: 'Python, Ruby, SQL', color: 'text-red-400' },
                  { name: 'kebab-case', ex: 'user-name', sep: 'Hyphen -', first: 'Lowercase', langs: 'CSS, HTML, URLs', color: 'text-purple-400' },
                  { name: 'SCREAMING_SNAKE', ex: 'USER_NAME', sep: 'Underscore _', first: 'UPPERCASE', langs: 'Constants in most langs', color: 'text-amber-400' },
                ].map(({ name, ex, sep, first, langs, color }) => (
                  <tr key={name} className="hover:bg-white/[0.02] transition-colors">
                    <td className={`p-4 font-mono font-bold ${color}`}>{name}</td>
                    <td className="p-4 font-mono text-white/80">{ex}</td>
                    <td className="p-4 text-muted">{sep}</td>
                    <td className="p-4 text-muted">{first}</td>
                    <td className="p-4 text-muted">{langs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed breakdown per convention */}
        {CONVENTIONS.map((c) => (
          <section key={c.name} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className={`px-3 py-1.5 rounded-xl border font-mono font-bold text-sm ${c.colorClass}`}>{c.example}</span>
              <h2 className="text-2xl font-black text-white">{c.name}</h2>
            </div>
            <p className="text-muted mb-6 leading-relaxed">{c.desc}</p>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02]">
                    <th className="text-left p-3 font-bold text-muted w-48">Language / Context</th>
                    <th className="text-left p-3 font-bold text-muted">Used For</th>
                    <th className="text-left p-3 font-bold text-muted">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {c.when.map(({ lang, use, ex }) => (
                    <tr key={lang} className="hover:bg-white/[0.02]">
                      <td className={`p-3 font-bold ${c.colorClass.split(' ')[0]}`}>{lang}</td>
                      <td className="p-3 text-muted">{use}</td>
                      <td className="p-3 font-mono text-white/80 text-xs">{ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <Link href={`/tools/${c.name.toLowerCase().replace('case', '-case').replace('_', '_').replace('pascal-case', 'pascal-case-generator').replace('camel-case', 'camel-case-generator').replace('snake-case', 'snake-case-generator').replace('kebab-case', 'kebab-case-generator')}`}
                className="text-sm font-bold text-primary hover:underline">
                → Open {c.name} Generator
              </Link>
            </div>
          </section>
        ))}

        {/* Quick Converter */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-4">Convert to Any Naming Convention</h2>
          <p className="text-muted mb-6">Use the tool below to instantly convert any phrase to your preferred naming convention.</p>
          <CaseConverterTool />
        </section>

        {/* Related */}
        <section>
          <h2 className="text-2xl font-black text-white mb-6">Related Tools & Guides</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'camelCase Generator', href: '/tools/camel-case-generator' },
              { label: 'PascalCase Generator', href: '/tools/pascal-case-generator' },
              { label: 'snake_case Generator', href: '/tools/snake-case-generator' },
              { label: 'kebab-case Generator', href: '/tools/kebab-case-generator' },
              { label: 'APA Title Case Guide', href: '/guides/apa-title-case' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-muted hover:text-white hover:border-primary transition-all">{label} →</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
