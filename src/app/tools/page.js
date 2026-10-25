import CaseConverterTool from '../../components/CaseConverterTool';
import Link from 'next/link';
import { ArrowRight, Layers, Sparkles, BookOpen, ShieldCheck, Zap } from 'lucide-react';

export const metadata = {
  title: 'Text Case Converter Tools Directory — All 11 Formats',
  description: 'Browse all text case conversion tools: Title Case, camelCase, snake_case, kebab-case, UPPER CASE, lowercase, PascalCase, Sentence case and more. Free, instant, browser-based.',
  alternates: { canonical: 'https://caseconverter.revoxera.com/tools' },
};

const TOOLS = [
  {
    href: '/tools/title-case',
    label: 'Title Case Converter',
    desc: 'Capitalize headings using APA, Chicago, MLA, or AP style rules.',
    prefix: 'TC',
    badgeColor: 'bg-emerald-500 text-white',
    hoverBorder: 'hover:border-emerald-500',
    keywords: ['blog titles', 'article headings', 'APA style', 'Chicago style'],
  },
  {
    href: '/tools/sentence-case',
    label: 'Sentence Case Converter',
    desc: 'Capitalize the first letter of each sentence. Perfect for polished writing.',
    prefix: 'Sc',
    badgeColor: 'bg-amber-500 text-white',
    hoverBorder: 'hover:border-amber-500',
    keywords: ['writing', 'grammar', 'email', 'professional'],
  },
  {
    href: '/tools/uppercase-converter',
    label: 'UPPER CASE Converter',
    desc: 'Transform any text to all capital letters instantly.',
    prefix: 'UC',
    badgeColor: 'bg-cyan-500 text-white',
    hoverBorder: 'hover:border-cyan-500',
    keywords: ['emphasis', 'headings', 'shouting', 'caps'],
  },
  {
    href: '/tools/lowercase-converter',
    label: 'lowercase Converter',
    desc: 'Convert all letters to lowercase for clean, consistent formatting.',
    prefix: 'lc',
    badgeColor: 'bg-green-500 text-white',
    hoverBorder: 'hover:border-green-500',
    keywords: ['code', 'SEO', 'URL', 'normalize'],
  },
  {
    href: '/tools/camel-case-generator',
    label: 'camelCase Generator',
    desc: 'Convert text to camelCase for JavaScript, Java, and TypeScript.',
    prefix: 'cC',
    badgeColor: 'bg-blue-500 text-white',
    hoverBorder: 'hover:border-blue-500',
    keywords: ['JavaScript', 'Java', 'variables', 'functions'],
  },
  {
    href: '/tools/pascal-case-generator',
    label: 'PascalCase Generator',
    desc: 'Generate PascalCase (UpperCamelCase) for C#, React, and class names.',
    prefix: 'PC',
    badgeColor: 'bg-teal-500 text-white',
    hoverBorder: 'hover:border-teal-500',
    keywords: ['C#', 'React', 'TypeScript', 'classes'],
  },
  {
    href: '/tools/snake-case-generator',
    label: 'snake_case Generator',
    desc: 'Convert text to snake_case for Python, Ruby, and SQL.',
    prefix: 'sc',
    badgeColor: 'bg-rose-500 text-white',
    hoverBorder: 'hover:border-rose-500',
    keywords: ['Python', 'Ruby', 'SQL', 'database'],
  },
  {
    href: '/tools/kebab-case-generator',
    label: 'kebab-case Generator',
    desc: 'Generate kebab-case for CSS class names, URL slugs, and HTML.',
    prefix: 'kc',
    badgeColor: 'bg-purple-500 text-white',
    hoverBorder: 'hover:border-purple-500',
    keywords: ['CSS', 'URL', 'HTML', 'slug'],
  },
];

export default function ToolsHub() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-[1400px] py-10 md:py-16">

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-900 font-bold">Tools Directory</span>
      </nav>

      {/* Hero */}
      <section className="mb-12 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-4">
          <Layers size={13} className="text-emerald-600" />
          <span>Full Transformation Suite</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
          All Text Case Conversion Tools
        </h1>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          Every text transformation protocol you need — from editorial headlines and SEO slugs to programming variables and database naming. Free, instant, and 100% private in your browser.
        </p>
      </section>

      {/* Quick converter */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-900">Live Converter Workspace</h2>
          <span className="text-xs text-slate-500">Instant multi-mode conversion</span>
        </div>
        <CaseConverterTool />
      </section>

      {/* Tool grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Dedicated Format Pages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className={`group p-6 bg-white border border-slate-200 rounded-3xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${tool.hoverBorder}`}
            >
              <div>
                <div className={`w-11 h-11 rounded-2xl ${tool.badgeColor} flex items-center justify-center text-xs font-black shadow-xs mb-4 group-hover:scale-110 transition-transform`}>
                  {tool.prefix}
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-emerald-600 transition-colors">
                  {tool.label}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  {tool.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-4 pt-3 border-t border-slate-100">
                  {tool.keywords.map(k => (
                    <span key={k} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/80 text-slate-600">
                      {k}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                  <span>Open tool page</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Guide links */}
      <section className="p-8 bg-slate-50 border border-slate-200 rounded-3xl">
        <h2 className="text-xl font-black text-slate-900 mb-2">Not sure which case convention to use?</h2>
        <p className="text-slate-600 text-xs md:text-sm mb-6">Our comprehensive developer and editorial guides explain when and why to use each format.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/guides/naming-conventions" className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:shadow-xs transition-all">
            Developer naming conventions guide →
          </Link>
          <Link href="/guides/apa-title-case" className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:shadow-xs transition-all">
            APA title case rules & examples →
          </Link>
          <Link href="/services" className="px-4 py-2.5 rounded-xl bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700 hover:bg-indigo-100 transition-all">
            Need enterprise API or codebase migration? →
          </Link>
        </div>
      </section>
    </div>
  );
}
