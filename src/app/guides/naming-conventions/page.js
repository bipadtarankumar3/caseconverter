import Link from 'next/link';
import CaseConverterTool from '../../../components/CaseConverterTool';
import { ArrowRight, Code2, BookOpen, Layers } from 'lucide-react';

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
    toolSlug: 'camel-case-generator',
    colorClass: 'text-blue-700 bg-blue-50 border-blue-200',
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
    toolSlug: 'pascal-case-generator',
    colorClass: 'text-teal-700 bg-teal-50 border-teal-200',
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
    toolSlug: 'snake-case-generator',
    colorClass: 'text-rose-700 bg-rose-50 border-rose-200',
    desc: 'All lowercase, words separated by underscores. Standard for Python PEP 8 and relational database schemas.',
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
    toolSlug: 'kebab-case-generator',
    colorClass: 'text-purple-700 bg-purple-50 border-purple-200',
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
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-400">Guides</span>
          <span>/</span>
          <span className="text-slate-900 font-bold">Naming Conventions</span>
        </nav>

        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-4">
            Developer Standards &bull; Multi-Language Guide
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
            camelCase vs PascalCase vs snake_case vs kebab-case
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl">
            Every programming language and framework enforces conventions for naming variables, functions, and files. This guide compares the four major naming formats, explains when to use each, and provides real-world examples across modern languages.
          </p>
        </header>

        {/* Quick Comparison Table */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Quick Comparison Matrix</h2>
          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full text-xs md:text-sm text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="p-4 font-bold text-slate-700">Convention</th>
                  <th className="p-4 font-bold text-slate-700">Example</th>
                  <th className="p-4 font-bold text-slate-700">Separator</th>
                  <th className="p-4 font-bold text-slate-700">First Letter</th>
                  <th className="p-4 font-bold text-slate-700">Primary Languages</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: 'camelCase', ex: 'userName', sep: 'None', first: 'Lowercase', langs: 'JS, Java, Swift', color: 'text-blue-600' },
                  { name: 'PascalCase', ex: 'UserName', sep: 'None', first: 'Uppercase', langs: 'C#, React, Kotlin', color: 'text-teal-600' },
                  { name: 'snake_case', ex: 'user_name', sep: 'Underscore _', first: 'Lowercase', langs: 'Python, Ruby, SQL', color: 'text-rose-600' },
                  { name: 'kebab-case', ex: 'user-name', sep: 'Hyphen -', first: 'Lowercase', langs: 'CSS, HTML, URLs', color: 'text-purple-600' },
                  { name: 'SCREAMING_SNAKE', ex: 'USER_NAME', sep: 'Underscore _', first: 'UPPERCASE', langs: 'Constants in all languages', color: 'text-amber-600' },
                ].map(({ name, ex, sep, first, langs, color }) => (
                  <tr key={name} className="hover:bg-slate-50 transition-colors">
                    <td className={`p-4 font-mono font-bold ${color}`}>{name}</td>
                    <td className="p-4 font-mono font-semibold text-slate-900">{ex}</td>
                    <td className="p-4 text-slate-600">{sep}</td>
                    <td className="p-4 text-slate-600">{first}</td>
                    <td className="p-4 text-slate-600">{langs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed breakdown per convention */}
        <div className="space-y-12 mb-14">
          {CONVENTIONS.map((c) => (
            <section key={c.name} className="p-6 md:p-8 bg-white border border-slate-200 rounded-3xl shadow-xs">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-xl border font-mono font-bold text-xs ${c.colorClass}`}>{c.example}</span>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">{c.name}</h2>
              </div>
              <p className="text-slate-600 text-xs md:text-sm mb-6 leading-relaxed">{c.desc}</p>
              
              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50/50 mb-4">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-100/70">
                      <th className="p-3 font-bold text-slate-700 w-48">Language / Context</th>
                      <th className="p-3 font-bold text-slate-700">Used For</th>
                      <th className="p-3 font-bold text-slate-700">Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {c.when.map(({ lang, use, ex }) => (
                      <tr key={lang} className="hover:bg-white transition-colors">
                        <td className="p-3 font-bold text-slate-900">{lang}</td>
                        <td className="p-3 text-slate-600">{use}</td>
                        <td className="p-3 font-mono text-slate-800 font-semibold">{ex}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between pt-2">
                <Link
                  href={`/tools/${c.toolSlug}`}
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                >
                  <span>Open {c.name} Generator Tool</span>
                  <ArrowRight size={13} />
                </Link>
                <Link
                  href="/services"
                  className="text-[11px] font-semibold text-indigo-600 hover:text-indigo-700 hidden sm:block"
                >
                  Explore Revoxera Services →
                </Link>
              </div>
            </section>
          ))}
        </div>

        {/* Quick Converter */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Convert to Any Naming Convention Online</h2>
          <p className="text-slate-600 text-sm mb-6">Use the interactive editor below to instantly convert any phrase or database identifier.</p>
          <CaseConverterTool />
        </section>

        {/* Related */}
        <section className="p-6 md:p-8 bg-slate-50 border border-slate-200 rounded-3xl">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Related Tools & Resources</h2>
          <div className="flex flex-wrap gap-2.5">
            {[
              { label: 'camelCase Generator', href: '/tools/camel-case-generator' },
              { label: 'PascalCase Generator', href: '/tools/pascal-case-generator' },
              { label: 'snake_case Generator', href: '/tools/snake-case-generator' },
              { label: 'kebab-case Generator', href: '/tools/kebab-case-generator' },
              { label: 'APA Title Case Guide', href: '/guides/apa-title-case' },
              { label: 'Developer Services & APIs', href: '/services' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all shadow-xs">{label} →</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
