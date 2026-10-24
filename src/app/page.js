'use client';

import {
  Zap as ZapIcon, ShieldCheck, Sparkles,
  Star, Trophy, MessageSquare, Plus, HelpCircle, Lock,
  Rocket, ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import CaseConverterTool from '../components/CaseConverterTool';

const TOOL_LINKS = [
  { href: '/tools/title-case',           label: 'Title Case',       color: 'from-[#10b981] to-[#34d399]' },
  { href: '/tools/sentence-case',        label: 'Sentence Case',    color: 'from-[#f97316] to-[#fb923c]' },
  { href: '/tools/uppercase-converter',  label: 'UPPER CASE',       color: 'from-[#06b6d4] to-[#22d3ee]' },
  { href: '/tools/lowercase-converter',  label: 'lowercase',        color: 'from-[#22c55e] to-[#4ade80]' },
  { href: '/tools/camel-case-generator', label: 'camelCase',        color: 'from-[#3b82f6] to-[#60a5fa]' },
  { href: '/tools/pascal-case-generator',label: 'PascalCase',       color: 'from-[#14b8a6] to-[#2dd4bf]' },
  { href: '/tools/snake-case-generator', label: 'snake_case',       color: 'from-[#f43f5e] to-[#fb7185]' },
  { href: '/tools/kebab-case-generator', label: 'kebab-case',       color: 'from-[#a855f7] to-[#c084fc]' },
];

export default function CaseConverterHome() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">

      {/* ── Hero ── */}
      <section className="text-center mb-8 md:mb-10 max-w-[900px] mx-auto pt-10 md:pt-14">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
          Case <span className="text-emerald-600">Converter</span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed mx-auto max-w-2xl">
          Convert text to Title Case, UPPER CASE, camelCase, snake_case, kebab-case and 6 more formats
          — instantly in your browser. <span className="text-slate-900 font-semibold">100% free, zero data sent to servers.</span>
        </p>

        {/* Quick-access tool chips */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {TOOL_LINKS.map((t) => (
            <Link key={t.href} href={t.href}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-900 transition-all">
              {t.label}
            </Link>
          ))}
        </div>
      </section>

      {/* ── Tool ── */}
      <section className="relative z-10 max-w-5xl mx-auto mb-16 md:mb-20">
        <CaseConverterTool />
      </section>

      {/* ── Feature Cards ── */}
      <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16 md:mb-20" aria-label="Features">
        {[
          {
            icon: <ZapIcon size={24} />,
            title: 'Real-time Statistics',
            desc: 'Character, word, line, and sentence counts update automatically as you type with zero latency.',
          },
          {
            icon: <ShieldCheck size={24} />,
            title: '100% Privacy First',
            desc: 'All processing runs client-side in your browser. Your text is never uploaded, tracked, or stored.',
          },
          {
            icon: <Sparkles size={24} />,
            title: '11 Conversion Modes',
            desc: 'From Title Case and camelCase to snake_case and kebab-case — plus APA & Chicago style support.',
          },
        ].map(({ icon, title, desc }) => (
          <article key={title} className="p-6 md:p-8 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all">
            <div className="w-12 h-12 flex items-center justify-center bg-emerald-50 text-emerald-600 rounded-xl mb-6">
              {icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">{title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
          </article>
        ))}
      </section>

      {/* ── Tool Hub Strip ── */}
      <section className="max-w-5xl mx-auto mb-16 md:mb-20 p-6 md:p-10 bg-slate-50 border border-slate-200 rounded-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-slate-900 tracking-tight">Explore All Tools</h2>
        <p className="text-slate-600 text-sm mb-6">Dedicated pages for every conversion type with style rules, examples, and documentation.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {TOOL_LINKS.map((t) => (
            <Link key={t.href} href={t.href}
              className="group flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-xs transition-all">
              <span className={`w-7 h-7 rounded-lg bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-[11px] font-black shrink-0 shadow-xs`}>
                {t.label.slice(0, 2).toUpperCase()}
              </span>
              <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900 transition-colors truncate">{t.label}</span>
              <ArrowRight size={14} className="ml-auto text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold">
          <Link href="/tools" className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
            <span>View all tools directory</span> <ArrowRight size={12} />
          </Link>
          <Link href="/guides/naming-conventions" className="text-slate-600 hover:text-slate-900 flex items-center gap-1">
            <span>Naming conventions guide</span> <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="max-w-5xl mx-auto mb-16 md:mb-20" aria-label="How to use">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-slate-900 tracking-tight">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Input Your Text', desc: 'Type or paste content directly into the editor. There is no character limit.' },
            { step: '02', title: 'Choose a Format', desc: 'Click any of the 11 conversion buttons. Text updates instantaneously.' },
            { step: '03', title: 'Copy or Download', desc: 'Copy to clipboard with one click, or download directly as a .txt file.' },
          ].map(({ step, title, desc }) => (
            <div key={step} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <div className="text-3xl font-black text-slate-300 mb-3">{step}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="max-w-5xl mx-auto mb-16 md:mb-20" aria-label="Testimonials">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-slate-900 tracking-tight">Trusted by Developers & Writers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              quote: "Clean, fast, and completely private. It converts developer naming conventions like snake_case and camelCase accurately without hassle.",
              name: 'Alex Rivera', role: 'Full-Stack Software Engineer',
              icon: <Trophy size={18} className="text-amber-500" />,
            },
            {
              quote: "The Title Case conversion handles prepositions and style guide rules properly. Easily my favorite text utility.",
              name: 'Sarah Jenkins', role: 'Content Strategist',
              icon: <MessageSquare size={18} className="text-emerald-500" />,
            },
          ].map(({ quote, name, role, icon }) => (
            <div key={name} className="p-6 md:p-8 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between gap-6">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={15} fill="currentColor" />)}
                  </div>
                  {icon}
                </div>
                <p className="text-base text-slate-700 italic leading-relaxed">
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
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-slate-900 tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            { icon: <HelpCircle size={18} className="text-emerald-600" />, q: 'What cases does this converter support?', a: 'CaseConverter supports 11 formats: Sentence case, lower case, UPPER CASE, Capitalized Case, Alternating Case, Title Case, Inverse Case, camelCase, PascalCase, snake_case, and kebab-case.' },
            { icon: <HelpCircle size={18} className="text-emerald-600" />, q: 'What is Sentence Case?', a: 'Sentence case capitalizes the first letter of every sentence and converts the rest to lowercase. It follows standard grammatical rules for professional writing.' },
            { icon: <HelpCircle size={18} className="text-emerald-600" />, q: 'What is the difference between camelCase and PascalCase?', a: 'camelCase starts with a lowercase letter (e.g., myVariableName) and is used in JavaScript and Java. PascalCase starts with an uppercase letter (e.g., MyVariableName) and is used in C# and for class names.' },
            { icon: <HelpCircle size={18} className="text-emerald-600" />, q: 'When should I use snake_case vs kebab-case?', a: 'Use snake_case for Python variables and database column names. Use kebab-case for CSS class names, URL slugs, and HTML attributes.' },
            { icon: <Lock size={18} className="text-emerald-600" />, q: 'Is this tool safe for sensitive text?', a: 'Yes. All transformations run entirely in your browser with client-side JavaScript. No text is ever sent to or stored on our servers — your data is 100% private.' },
            { icon: <HelpCircle size={18} className="text-emerald-600" />, q: 'Is there a character limit?', a: 'No. CaseConverter processes text of any length entirely in your browser. Large documents, code files, and entire articles are all supported.' },
            { icon: <Rocket size={18} className="text-emerald-600" />, q: 'Can I use keyboard shortcuts?', a: 'Yes! Press ? to see all shortcuts. For example: Ctrl+Shift+T converts to Title Case, Ctrl+Shift+M converts to camelCase, and Ctrl+Shift+N converts to snake_case.' },
            { icon: <HelpCircle size={18} className="text-emerald-600" />, q: 'Does the tool save my conversion history?', a: 'Yes. Your last 20 conversions are saved locally in your browser (localStorage). Click the history icon in the toolbar to browse and restore past conversions. Nothing is stored on our servers.' },
          ].map(({ icon, q, a }) => (
            <details key={q} className="group bg-white border border-slate-200 rounded-xl overflow-hidden transition-all shadow-xs">
              <summary className="flex items-center gap-3 p-4 md:p-5 font-semibold text-slate-900 cursor-pointer hover:bg-slate-50 transition-colors list-none text-base">
                {icon}
                <span>{q}</span>
                <Plus size={16} className="ml-auto text-slate-400 group-open:rotate-45 transition-transform shrink-0" />
              </summary>
              <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">{a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* ── Community Newsletter ── */}
      <section id="newsletter" className="max-w-4xl mx-auto mb-16 p-8 md:p-12 bg-emerald-50/50 border border-emerald-200 rounded-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 tracking-tight">Stay Updated</h2>
        <p className="text-slate-600 text-sm mb-6 max-w-xl mx-auto">Get notified about new developer utilities, text transformation guides, and productivity tips.</p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input suppressHydrationWarning type="email" placeholder="Enter your email" className="flex-1 bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-slate-900 placeholder:text-slate-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 text-sm" required />
          <button suppressHydrationWarning type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-xs shrink-0">Subscribe</button>
        </form>
      </section>

    </div>
  );
}
