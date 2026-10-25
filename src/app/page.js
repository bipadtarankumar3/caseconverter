'use client';

import {
  Zap as ZapIcon, ShieldCheck, Sparkles,
  Star, Trophy, MessageSquare, Plus, HelpCircle, Lock,
  Rocket, ArrowRight, Terminal, Cpu, Check, Layers,
  ExternalLink, ChevronRight, Briefcase
} from 'lucide-react';
import Link from 'next/link';
import CaseConverterTool from '../components/CaseConverterTool';
import ModernTechniques from '../components/ModernTechniques';

const TOOL_CHIPS = [
  { href: '/tools/title-case',           label: 'Title Case',       prefix: 'TC', color: 'bg-emerald-500' },
  { href: '/tools/sentence-case',        label: 'Sentence Case',    prefix: 'Sc', color: 'bg-amber-500' },
  { href: '/tools/uppercase-converter',  label: 'UPPER CASE',       prefix: 'UC', color: 'bg-cyan-500' },
  { href: '/tools/lowercase-converter',  label: 'lowercase',        prefix: 'lc', color: 'bg-green-500' },
  { href: '/tools/camel-case-generator', label: 'camelCase',        prefix: 'cC', color: 'bg-blue-500' },
  { href: '/tools/pascal-case-generator',label: 'PascalCase',       prefix: 'PC', color: 'bg-teal-500' },
  { href: '/tools/snake-case-generator', label: 'snake_case',       prefix: 'sc', color: 'bg-rose-500' },
  { href: '/tools/kebab-case-generator', label: 'kebab-case',       prefix: 'kc', color: 'bg-purple-500' },
];

export default function CaseConverterHome() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">

      {/* ── Hero ── */}
      <section className="text-center mb-8 md:mb-12 max-w-[950px] mx-auto pt-8 md:pt-12">
        
        {/* Modern Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/80 border border-slate-200/90 text-slate-700 text-xs font-bold mb-5 transition-colors">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Zero Server Latency</span>
          <span className="text-slate-400">&bull;</span>
          <span className="text-emerald-700 font-extrabold">100% Client-Side Privacy</span>
          <span className="text-slate-400">&bull;</span>
          <Link href="/services" className="text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-0.5 font-bold">
            <span>Explore Services</span>
            <ChevronRight size={12} />
          </Link>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-4 leading-[1.1]">
          Case <span className="text-emerald-600">Converter</span> & Text Engine
        </h1>
        
        <p className="text-base md:text-lg text-slate-600 leading-relaxed mx-auto max-w-2xl">
          Instantly convert text to Title Case, camelCase, snake_case, UPPER CASE, and 7 more formats in your browser.
          <span className="text-slate-900 font-bold block sm:inline sm:ml-1">
            Free forever &bull; Zero server tracking &bull; API & AST refactoring ready.
          </span>
        </p>

        {/* Quick-access tool chips with colored badges */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {TOOL_CHIPS.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all shadow-2xs hover:shadow-xs group"
            >
              <span className={`w-4 h-4 rounded-md ${t.color} text-white flex items-center justify-center text-[9px] font-black group-hover:scale-110 transition-transform`}>
                {t.prefix}
              </span>
              <span>{t.label}</span>
            </Link>
          ))}
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 transition-all shadow-2xs"
          >
            <Briefcase size={12} className="text-indigo-600" />
            <span>Developer Services</span>
            <span className="text-[10px] bg-indigo-200 text-indigo-900 px-1 rounded-sm">NEW</span>
          </Link>
        </div>
      </section>

      {/* ── Main Tool Workspace ── */}
      <section className="relative z-10 max-w-5xl mx-auto mb-16 md:mb-20">
        <CaseConverterTool />
      </section>

      {/* ── Modern Techniques & Interactive Showcase ── */}
      <ModernTechniques />

      {/* ── Feature Cards Grid ── */}
      <section id="features" className="max-w-6xl mx-auto mb-16 md:mb-20" aria-label="Features">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">
            Engineered for Precision & Security
          </h2>
          <p className="text-slate-600 text-xs md:text-sm">
            Everything you need for clean typography, codebase refactoring, and editorial compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <ZapIcon size={24} className="text-emerald-600" />,
              iconBg: 'bg-emerald-50 border-emerald-200',
              badge: 'Real-Time',
              badgeColor: 'bg-emerald-100 text-emerald-800',
              title: 'Zero-Latency Statistics',
              desc: 'Characters, words, lines, and sentence counts calculate synchronously on every keystroke with zero UI delay.',
            },
            {
              icon: <ShieldCheck size={24} className="text-indigo-600" />,
              iconBg: 'bg-indigo-50 border-indigo-200',
              badge: 'Local-First',
              badgeColor: 'bg-indigo-100 text-indigo-800',
              title: '100% Privacy Guarantee',
              desc: 'All processing runs client-side in your browser memory. Your text never touches external cloud servers or analytics.',
            },
            {
              icon: <Sparkles size={24} className="text-purple-600" />,
              iconBg: 'bg-purple-50 border-purple-200',
              badge: 'Comprehensive',
              badgeColor: 'bg-purple-100 text-purple-800',
              title: '11 Formatting Protocols',
              desc: 'From Title Case (APA & Chicago style) to camelCase, snake_case, PascalCase, kebab-case, and alternating cAsE.',
            },
          ].map(({ icon, iconBg, badge, badgeColor, title, desc }) => (
            <article key={title} className="p-6 md:p-8 bg-white rounded-3xl border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-2xl border ${iconBg} shadow-xs`}>
                    {icon}
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${badgeColor}`}>
                    {badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">{title}</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Services Spotlight Banner ── */}
      <section className="max-w-6xl mx-auto mb-16 md:mb-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold mb-4">
              <Cpu size={14} />
              <span>Revoxera Developer Suite</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-3">
              Need High-Volume Edge APIs or Automated Codebase Migration?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              Our engineering team builds edge-deployed text processing microservices, custom headline engines for media publications, and automated AST identifier migrations for enterprise codebases.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-emerald-400" />
                Sub-millisecond REST/GraphQL API
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-emerald-400" />
                AST-based Zero Regression Refactoring
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-emerald-400" />
                Enterprise SLA & Custom DPAs
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
            <Link
              href="/services"
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm text-center shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Explore All Services</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/services#quote"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm text-center border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Request API Key</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Tool Hub Strip ── */}
      <section className="max-w-6xl mx-auto mb-16 md:mb-20 p-6 md:p-10 bg-slate-50 border border-slate-200 rounded-3xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-1 text-slate-900 tracking-tight">Explore Dedicated Tools</h2>
            <p className="text-slate-600 text-xs md:text-sm">Dedicated pages for every conversion format with detailed style rules, documentation, and examples.</p>
          </div>
          <Link href="/tools" className="text-emerald-600 hover:text-emerald-700 font-bold text-xs flex items-center gap-1 shrink-0">
            <span>Browse All Tools Directory</span> <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {TOOL_CHIPS.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-xs transition-all"
            >
              <span className={`w-7 h-7 rounded-lg ${t.color} flex items-center justify-center text-white text-[11px] font-black shrink-0 shadow-xs group-hover:scale-105 transition-transform`}>
                {t.prefix}
              </span>
              <span className="text-xs font-bold text-slate-700 group-hover:text-slate-900 transition-colors truncate">{t.label}</span>
              <ArrowRight size={14} className="ml-auto text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="max-w-5xl mx-auto mb-16 md:mb-20" aria-label="How to use">
        <h2 className="text-3xl md:text-4xl font-black mb-10 text-center text-slate-900 tracking-tight">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Input or Paste Text', desc: 'Type, paste, or drag text directly into the editor. There are zero character or file size limitations.' },
            { step: '02', title: 'Choose Format', desc: 'Select any of the 11 conversion buttons. Transformations render in memory in less than a millisecond.' },
            { step: '03', title: 'Copy or Export', desc: 'Copy formatted output to your clipboard with one click, or export directly as a .txt file or shareable link.' },
          ].map(({ step, title, desc }) => (
            <div key={step} className="p-6 md:p-8 bg-white border border-slate-200 rounded-3xl shadow-xs">
              <div className="text-3xl font-black text-slate-300 mb-3">{step}</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="max-w-5xl mx-auto mb-16 md:mb-20" aria-label="Testimonials">
        <h2 className="text-3xl md:text-4xl font-black mb-10 text-center text-slate-900 tracking-tight">Trusted by Developers & Publishers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              quote: "Clean, blazing fast, and completely private. It converts developer naming conventions like snake_case and camelCase accurately without hassle.",
              name: 'Alex Rivera', role: 'Staff Software Engineer',
              icon: <Trophy size={18} className="text-amber-500" />,
            },
            {
              quote: "The Title Case conversion handles prepositions and style guide rules properly. Easily my favorite text utility for editorial headlines.",
              name: 'Sarah Jenkins', role: 'Managing Editor & Content Strategist',
              icon: <MessageSquare size={18} className="text-emerald-500" />,
            },
          ].map(({ quote, name, role, icon }) => (
            <div key={name} className="p-6 md:p-8 bg-white rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between gap-6">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={15} fill="currentColor" />)}
                  </div>
                  {icon}
                </div>
                <p className="text-sm md:text-base text-slate-700 italic leading-relaxed">
                  &ldquo;{quote}&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 text-sm">{name}</h4>
                <p className="text-xs text-slate-500">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="max-w-4xl mx-auto mb-16 md:mb-20" aria-label="Frequently asked questions">
        <h2 className="text-3xl md:text-4xl font-black mb-10 text-center text-slate-900 tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            { icon: <HelpCircle size={18} className="text-emerald-600 shrink-0" />, q: 'What cases does this converter support?', a: 'CaseConverter supports 11 formats: Sentence case, lower case, UPPER CASE, Capitalized Case, Alternating Case, Title Case, Inverse Case, camelCase, PascalCase, snake_case, and kebab-case.' },
            { icon: <Briefcase size={18} className="text-indigo-600 shrink-0" />, q: 'Do you offer an API or enterprise services?', a: 'Yes! We offer high-throughput edge REST & GraphQL APIs, automated AST codebase refactoring migrations, and custom editorial headline engines. Check out our Services page for details.' },
            { icon: <Lock size={18} className="text-emerald-600 shrink-0" />, q: 'Is this tool safe for sensitive text & proprietary code?', a: 'Yes. All transformations run entirely in your local browser with client-side JavaScript. No text is ever uploaded, logged, or stored on our servers — your data remains 100% private.' },
            { icon: <HelpCircle size={18} className="text-emerald-600 shrink-0" />, q: 'What is the difference between camelCase and PascalCase?', a: 'camelCase starts with a lowercase letter (e.g., myVariableName) and is used in JavaScript and Java. PascalCase starts with an uppercase letter (e.g., MyVariableName) and is used in C# and for React/class names.' },
            { icon: <HelpCircle size={18} className="text-emerald-600 shrink-0" />, q: 'When should I use snake_case vs kebab-case?', a: 'Use snake_case for Python variables and database column names. Use kebab-case for CSS class names, URL slugs, and HTML attributes.' },
            { icon: <Rocket size={18} className="text-emerald-600 shrink-0" />, q: 'Can I use keyboard shortcuts?', a: 'Yes! Press ? at any time to open keyboard shortcuts. For example: Ctrl+Shift+T converts to Title Case, Ctrl+Shift+M converts to camelCase, and Ctrl+Shift+N converts to snake_case.' },
            { icon: <HelpCircle size={18} className="text-emerald-600 shrink-0" />, q: 'Is there a character limit?', a: 'No. CaseConverter processes text of any length in your browser. Large documents, code files, and entire articles are all supported with sub-millisecond execution.' },
          ].map(({ icon, q, a }) => (
            <details key={q} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-xs">
              <summary className="flex items-center gap-3 p-4 md:p-5 font-bold text-slate-900 cursor-pointer hover:bg-slate-50 transition-colors list-none text-sm md:text-base">
                {icon}
                <span>{q}</span>
                <Plus size={16} className="ml-auto text-slate-400 group-open:rotate-45 transition-transform shrink-0" />
              </summary>
              <div className="px-5 pb-5 pt-1 text-slate-600 text-xs md:text-sm leading-relaxed border-t border-slate-100">{a}</div>
            </details>
          ))}
        </div>
      </section>

    </div>
  );
}
