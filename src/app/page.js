'use client';

import {
  Zap as ZapIcon, ShieldCheck, Sparkles,
  Star, MessageSquare, Trophy, Plus, HelpCircle, Lock,
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
    <div className="container mx-auto px-4 md:px-6 animate-fade-in max-w-[1600px]">

      {/* ── Hero ── */}
      <section className="text-center mb-8 md:mb-10 max-w-[1200px] mx-auto pt-10">
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 leading-none bg-gradient-to-b from-white to-muted bg-clip-text text-transparent">
          Case{' '}
          <span className="inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-2 after:bg-primary/40 after:blur-lg after:-z-10">
            Converter
          </span>
        </h1>
        <p className="text-base md:text-xl text-muted leading-relaxed mx-auto max-w-2xl">
          Convert text to Title Case, UPPER CASE, camelCase, snake_case, kebab-case and 6 more formats
          — instantly in your browser. <span className="text-white font-semibold">100% free, zero data sent to servers.</span>
        </p>

        {/* Quick-access tool chips */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {TOOL_LINKS.map((t) => (
            <Link key={t.href} href={t.href}
              className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-muted hover:text-white hover:border-primary transition-all hover:-translate-y-0.5">
              {t.label}
            </Link>
          ))}
        </div>
      </section>

      {/* ── Tool ── */}
      <section className="relative z-10">
        <CaseConverterTool />
      </section>

      {/* ── Feature Cards ── */}
      <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-20" aria-label="Features">
        {[
          {
            icon: <ZapIcon size={28} />,
            title: 'Real-time Statistics',
            desc: 'Character, word, line, and sentence counts update as you type — with zero latency.',
          },
          {
            icon: <ShieldCheck size={28} />,
            title: 'Privacy First',
            desc: 'All processing runs locally in your browser. Your text never leaves your device.',
          },
          {
            icon: <Sparkles size={28} />,
            title: '11 Conversion Modes',
            desc: 'From Title Case and camelCase to snake_case and kebab-case — plus APA & Chicago style support.',
          },
        ].map(({ icon, title, desc }) => (
          <article key={title} className="p-8 md:p-12 bg-white/[0.02] rounded-[32px] border border-white/10 relative overflow-hidden group hover:border-primary hover:-translate-y-2 transition-all duration-500">
            <div className="w-14 h-14 flex items-center justify-center bg-primary/10 text-primary rounded-2xl mb-8 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
              {icon}
            </div>
            <h3 className="text-2xl font-extrabold mb-5 text-white">{title}</h3>
            <p className="text-muted text-lg leading-relaxed">{desc}</p>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </article>
        ))}
      </section>

      {/* ── Tool Hub Strip ── */}
      <section className="mt-12 md:mt-20 p-8 md:p-12 bg-white/[0.02] rounded-[40px] border border-white/10">
        <h2 className="text-2xl md:text-4xl font-black mb-2 text-white tracking-tighter">Explore All Tools</h2>
        <p className="text-muted mb-8">Dedicated pages for every conversion type — with style guides, examples, and FAQs.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {TOOL_LINKS.map((t) => (
            <Link key={t.href} href={t.href}
              className="group flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary hover:-translate-y-1 transition-all">
              <span className={`w-8 h-8 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-black shrink-0`}>
                {t.label.slice(0, 2).toUpperCase()}
              </span>
              <span className="text-sm font-semibold text-muted group-hover:text-white transition-colors">{t.label}</span>
              <ArrowRight size={14} className="ml-auto text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
        <div className="mt-6 flex gap-4">
          <Link href="/tools" className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
            View all tools <ArrowRight size={14} />
          </Link>
          <Link href="/guides/naming-conventions" className="text-sm font-bold text-muted hover:text-white flex items-center gap-1">
            Naming convention guide <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="mt-12 md:mt-24" aria-label="Testimonials">
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-center tracking-tighter">Trusted by Power Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              quote: "The interface is stunning. I've never seen a case converter that looks this good and works this fast.",
              name: 'Alex Rivera', role: 'Software Engineer', grad: 'from-primary to-accent',
              icon: <Trophy size={20} className="text-primary/60" />,
            },
            {
              quote: "As a copywriter, I use this daily. The Title Case tool is the most accurate I've found online.",
              name: 'Sarah Jenkins', role: 'Content Strategist', grad: 'from-pink-500 to-violet-600',
              icon: <MessageSquare size={20} className="text-accent/60" />,
            },
          ].map(({ quote, name, role, grad, icon }) => (
            <div key={name} className="p-10 md:p-14 bg-white/[0.04] backdrop-blur-md rounded-[32px] border border-white/10 flex flex-col gap-8 relative">
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                {icon}
              </div>
              <p className="text-xl md:text-2xl leading-relaxed text-slate-200 italic relative z-10 before:content-[open-quote] before:absolute before:-top-5 before:-left-5 before:text-7xl before:text-primary/30">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${grad}`} />
                <div>
                  <h4 className="font-bold text-white">{name}</h4>
                  <p className="text-sm text-muted">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section id="newsletter" className="mt-12 md:mt-24 p-8 md:p-24 bg-gradient-to-br from-accent/5 via-primary/5 to-transparent rounded-[60px] border border-white/10 text-center relative overflow-hidden">
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Join the Community</h2>
        <p className="text-muted text-xl mb-12 max-w-2xl mx-auto">Get notified about new tools, power-user tips, and text transformation guides.</p>
        <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input suppressHydrationWarning type="email" placeholder="Enter your email" className="flex-1 bg-white/[0.03] border border-white/10 px-8 py-4 rounded-2xl outline-none focus:border-primary focus:bg-white/[0.06] transition-all" required />
          <button suppressHydrationWarning type="submit" className="bg-primary hover:bg-primary/90 text-slate-950 px-10 py-4 rounded-2xl font-black transition-all shadow-lg shadow-primary/20">Subscribe</button>
        </form>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="mt-12 md:mt-24" aria-label="How to use">
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-center tracking-tighter">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { step: '01', title: 'Input Your Text', desc: 'Type or paste content into the editor. There is no character limit.' },
            { step: '02', title: 'Choose a Format', desc: 'Click any of the 11 conversion buttons. Conversion is instant and local.' },
            { step: '03', title: 'Copy or Share', desc: 'Copy to clipboard, download as .txt, or generate a shareable link.' },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex flex-col gap-4">
              <div className="text-5xl font-black text-white/10">{step}</div>
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="mt-12 md:mt-24 pb-20" aria-label="Frequently asked questions">
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-center tracking-tighter">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { icon: <HelpCircle size={20} className="text-primary" />, q: 'What cases does this converter support?', a: 'CaseConverter supports 11 formats: Sentence case, lower case, UPPER CASE, Capitalized Case, Alternating Case, Title Case, Inverse Case, camelCase, PascalCase, snake_case, and kebab-case.' },
            { icon: <HelpCircle size={20} className="text-primary" />, q: 'What is Sentence Case?', a: 'Sentence case capitalizes the first letter of every sentence and converts the rest to lowercase. It follows standard grammatical rules for professional writing.' },
            { icon: <HelpCircle size={20} className="text-primary" />, q: 'What is the difference between camelCase and PascalCase?', a: 'camelCase starts with a lowercase letter (e.g., myVariableName) and is used in JavaScript and Java. PascalCase starts with an uppercase letter (e.g., MyVariableName) and is used in C# and for class names.' },
            { icon: <HelpCircle size={20} className="text-primary" />, q: 'When should I use snake_case vs kebab-case?', a: 'Use snake_case for Python variables and database column names. Use kebab-case for CSS class names, URL slugs, and HTML attributes.' },
            { icon: <Lock size={20} className="text-primary" />, q: 'Is this tool safe for sensitive text?', a: 'Yes. All transformations run entirely in your browser with JavaScript. No text is ever sent to or stored on our servers — your data is 100% private.' },
            { icon: <HelpCircle size={20} className="text-primary" />, q: 'Is there a character limit?', a: 'No. CaseConverter processes text of any length entirely in your browser. Large documents, code files, and entire articles are all supported.' },
            { icon: <Rocket size={20} className="text-primary" />, q: 'Can I use keyboard shortcuts?', a: 'Yes! Press ? to see all shortcuts. For example: Ctrl+Shift+T converts to Title Case, Ctrl+Shift+M converts to camelCase, and Ctrl+Shift+N converts to snake_case.' },
            { icon: <HelpCircle size={20} className="text-primary" />, q: 'Does the tool save my conversion history?', a: 'Yes. Your last 20 conversions are saved locally in your browser (localStorage). Click the history icon in the toolbar to browse and restore past conversions. Nothing is stored on our servers.' },
          ].map(({ icon, q, a }) => (
            <details key={q} className="group bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden transition-all">
              <summary className="flex items-center gap-4 p-6 font-bold text-lg cursor-pointer hover:bg-white/[0.03] transition-all list-none">
                {icon}
                <span>{q}</span>
                <Plus className="ml-auto group-open:rotate-45 transition-transform shrink-0" />
              </summary>
              <div className="p-6 pt-0 text-muted leading-relaxed border-t border-white/5 mt-4">{a}</div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
