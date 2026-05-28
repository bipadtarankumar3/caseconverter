import CaseConverterTool from '../../components/CaseConverterTool';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Text Case Converter Tools — All Formats in One Place',
  description: 'Browse all text case conversion tools: Title Case, camelCase, snake_case, kebab-case, UPPER CASE, lowercase, PascalCase, Sentence case and more. Free, instant, browser-based.',
  alternates: { canonical: 'https://caseconverter.revoxera.com/tools' },
};

const TOOLS = [
  {
    href: '/tools/title-case',
    label: 'Title Case Converter',
    desc: 'Capitalize headings using APA, Chicago, MLA, or AP style rules.',
    prefix: 'TC', color: 'from-[#10b981] to-[#34d399]',
    keywords: ['blog titles', 'article headings', 'APA style', 'Chicago style'],
  },
  {
    href: '/tools/sentence-case',
    label: 'Sentence Case Converter',
    desc: 'Capitalize the first letter of each sentence. Perfect for polished writing.',
    prefix: 'Sc', color: 'from-[#f97316] to-[#fb923c]',
    keywords: ['writing', 'grammar', 'email', 'professional'],
  },
  {
    href: '/tools/uppercase-converter',
    label: 'UPPER CASE Converter',
    desc: 'Transform any text to all capital letters instantly.',
    prefix: 'UC', color: 'from-[#06b6d4] to-[#22d3ee]',
    keywords: ['emphasis', 'headings', 'shouting', 'caps'],
  },
  {
    href: '/tools/lowercase-converter',
    label: 'lowercase Converter',
    desc: 'Convert all letters to lowercase for clean, consistent formatting.',
    prefix: 'lc', color: 'from-[#22c55e] to-[#4ade80]',
    keywords: ['code', 'SEO', 'URL', 'normalize'],
  },
  {
    href: '/tools/camel-case-generator',
    label: 'camelCase Generator',
    desc: 'Convert text to camelCase for JavaScript, Java, and TypeScript.',
    prefix: 'cC', color: 'from-[#3b82f6] to-[#60a5fa]',
    keywords: ['JavaScript', 'Java', 'variables', 'functions'],
  },
  {
    href: '/tools/pascal-case-generator',
    label: 'PascalCase Generator',
    desc: 'Generate PascalCase (UpperCamelCase) for C#, React, and class names.',
    prefix: 'PC', color: 'from-[#14b8a6] to-[#2dd4bf]',
    keywords: ['C#', 'React', 'TypeScript', 'classes'],
  },
  {
    href: '/tools/snake-case-generator',
    label: 'snake_case Generator',
    desc: 'Convert text to snake_case for Python, Ruby, and SQL.',
    prefix: 'sn', color: 'from-[#f43f5e] to-[#fb7185]',
    keywords: ['Python', 'Ruby', 'SQL', 'database'],
  },
  {
    href: '/tools/kebab-case-generator',
    label: 'kebab-case Generator',
    desc: 'Generate kebab-case for CSS class names, URL slugs, and HTML.',
    prefix: 'kc', color: 'from-[#a855f7] to-[#c084fc]',
    keywords: ['CSS', 'URL', 'HTML', 'slug'],
  },
];

export default function ToolsHub() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-[1400px] py-10 md:py-16">

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white">Tools</span>
      </nav>

      {/* Hero */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 bg-gradient-to-b from-white to-muted bg-clip-text text-transparent">
          All Text Case Tools
        </h1>
        <p className="text-muted text-lg max-w-2xl">
          Every text transformation you need — from writing and SEO to programming and database naming.
          All tools are free, instant, and run entirely in your browser.
        </p>
      </section>

      {/* Quick converter */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-white mb-4">Quick Converter</h2>
        <CaseConverterTool />
      </section>

      {/* Tool grid */}
      <section>
        <h2 className="text-2xl font-black text-white mb-8 tracking-tight">Dedicated Tool Pages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOOLS.map((tool) => (
            <Link key={tool.href} href={tool.href}
              className="group p-6 bg-white/[0.02] border border-white/10 rounded-[28px] hover:border-primary hover:-translate-y-2 transition-all duration-300 flex flex-col gap-4">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white text-sm font-black shrink-0`}>
                {tool.prefix}
              </div>
              <div>
                <h3 className="font-bold text-white mb-2 group-hover:text-primary transition-colors">{tool.label}</h3>
                <p className="text-muted text-sm leading-relaxed">{tool.desc}</p>
              </div>
              <div className="flex flex-wrap gap-1 mt-auto">
                {tool.keywords.map(k => (
                  <span key={k} className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-muted">{k}</span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-primary">
                Open tool <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Guide links */}
      <section className="mt-16 p-8 bg-white/[0.02] border border-white/10 rounded-[32px]">
        <h2 className="text-xl font-black text-white mb-2">Not sure which case to use?</h2>
        <p className="text-muted text-sm mb-6">Our guides explain when and why to use each format.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/guides/naming-conventions" className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-muted hover:text-white hover:border-primary transition-all">
            Developer naming conventions →
          </Link>
          <Link href="/guides/apa-title-case" className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-muted hover:text-white hover:border-primary transition-all">
            APA title case rules →
          </Link>
          <Link href="/guides/sentence-case-vs-title-case" className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-muted hover:text-white hover:border-primary transition-all">
            Sentence case vs title case →
          </Link>
        </div>
      </section>
    </div>
  );
}
