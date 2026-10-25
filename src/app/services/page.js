import Link from 'next/link';
import {
  Palette, Database, FileCode2, Rocket, ArrowRight,
  ExternalLink, Sparkles, ShieldCheck, Zap, Lock,
  Clock, CheckCircle2, RefreshCw, Layers
} from 'lucide-react';

export const metadata = {
  title: 'Services & Ecosystem Platforms — Revoxera Developer Suite',
  description: 'Explore the Revoxera suite of free online developer utilities: HTML Color Codes, SQL Formatter, JSON Formatter & Mapper, AI Prompt Generator, and CaseConverter.',
  alternates: { canonical: 'https://caseconverter.revoxera.com/services' },
};

const ECOSYSTEM_SERVICES = [
  {
    id: 'colorcode',
    title: 'HTML Color Codes & Picker',
    url: 'https://colorcode.revoxera.com/',
    tagline: 'HEX, RGB, HSL & OKLCH Color Tools & Generator',
    desc: 'Professional color palette generator and picker with multi-format code output, WCAG accessibility contrast auditing, and shade generation.',
    icon: <Palette className="w-6 h-6 text-emerald-600" />,
    badge: 'Color Studio',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    colorGradient: 'from-emerald-500 to-teal-600',
    features: [
      'Multi-format converter (HEX, RGB, HSL, HSV, CMYK, OKLCH)',
      'Real-time WCAG 2.1 AA/AAA contrast ratio checker',
      'Harmonic palette generation (complementary, triadic, analogous)',
      'One-click CSS variables, Tailwind config & SCSS exports',
      'Zero server tracking with instantaneous client-side updates',
    ],
    cta: 'Open ColorCode Tool',
  },
  {
    id: 'sqlformatter',
    title: 'SQL Formatter & Beautifier',
    url: 'https://sqlformatter.revoxera.com/',
    tagline: 'Multi-Dialect Database Query Formatter',
    desc: 'Format, beautify, and standardize complex SQL queries across major database dialects with customizable indenting and keyword casing.',
    icon: <Database className="w-6 h-6 text-blue-600" />,
    badge: 'Database Tool',
    badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
    colorGradient: 'from-blue-500 to-indigo-600',
    features: [
      'Multi-dialect support: PostgreSQL, MySQL, BigQuery, Snowflake, SQLite',
      'Customizable keyword casing (UPPERCASE vs lowercase clauses)',
      'Custom tab spacing, 2/4 space indentation, and comma alignment',
      'Minification mode for compact network payload transmission',
      '100% private in-browser AST parsing without database connections',
    ],
    cta: 'Open SQL Formatter',
  },
  {
    id: 'jsonmapper',
    title: 'JSON Formatter & Mapper',
    url: 'https://json-formatter-mapper.revoxera.com/',
    tagline: 'Interactive Schema Mapper, Validator & Tree Visualizer',
    desc: 'Inspect, validate, format, and map nested JSON objects with collapsible tree nodes, JSONPath queries, and schema verification.',
    icon: <FileCode2 className="w-6 h-6 text-purple-600" />,
    badge: 'Data Pipeline',
    badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
    colorGradient: 'from-purple-500 to-pink-600',
    features: [
      'Interactive collapsible tree visualizer with search filter',
      'JSON syntax validation with precise line error markers',
      'Schema mapping and path extractor (JSONPath & dot notation)',
      'Compact minifier and clean multi-level beautifier',
      'Local-first client memory parsing — sensitive data stays on device',
    ],
    cta: 'Open JSON Formatter & Mapper',
  },
  {
    id: 'aiprompt',
    title: 'AI Prompt Generator',
    url: 'https://ai-prompt.revoxera.com/',
    tagline: 'Engineering-Grade System Prompt & Meta-Prompt Builder',
    desc: 'Craft, structure, and optimize prompts for LLMs (Claude, GPT-4o, Gemini) with few-shot examples, role definitions, and token optimization.',
    icon: <Rocket className="w-6 h-6 text-amber-600" />,
    badge: 'AI Engineering',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    colorGradient: 'from-amber-500 to-orange-600',
    features: [
      'Role, task, context, constraint, and output format scaffolding',
      'Meta-prompt optimizer to refine vague instructions into high-precision prompts',
      'Token estimator across Claude 3.5, GPT-4o, and Gemini models',
      'Curated prompt templates for coding, data analysis, and copywriting',
      'Clean Markdown and XML tag code block formatting',
    ],
    cta: 'Open AI Prompt Generator',
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] py-10 md:py-16">
      
      {/* ── Breadcrumb ── */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumbs">
        <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-900 font-bold">Services & Ecosystem Platforms</span>
      </nav>

      {/* ── Hero Section ── */}
      <section className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/70 text-indigo-700 text-xs font-bold mb-5">
          <Sparkles size={14} className="text-indigo-600" />
          <span>Revoxera Production Suite</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-5 leading-[1.15]">
          Developer Tools & <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent">Web Services</span>
        </h1>
        
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
          A dedicated collection of high-performance developer utilities engineered for speed, privacy, and precision formatting. 100% free, browser-based, and zero data logging.
        </p>

        {/* Highlight Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-slate-200">
          {[
            { label: 'Data Retention', value: '0 Bytes', sub: '100% Local-First & Private' },
            { label: 'Cost', value: '100% Free', sub: 'No Subscriptions or Paywalls' },
            { label: 'Latency', value: '< 1ms', sub: 'In-Browser Execution' },
            { label: 'Access', value: 'No Sign-Up', sub: 'Instant Online Availability' },
          ].map((stat) => (
            <div key={stat.label} className="p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{stat.value}</div>
              <div className="text-xs font-bold text-slate-700 mt-1">{stat.label}</div>
              <div className="text-[10px] sm:text-[11px] text-slate-500">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Ecosystem Platforms Grid ── */}
      <section className="max-w-6xl mx-auto mb-20 md:mb-28">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Featured Developer Platforms
          </h2>
          <p className="text-slate-600 text-xs md:text-sm max-w-xl mx-auto">
            Click any platform below to launch its dedicated online workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ECOSYSTEM_SERVICES.map((eco) => (
            <div
              key={eco.id}
              className="bg-white border border-slate-200 hover:border-slate-300 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    {eco.icon}
                  </div>
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${eco.badgeColor}`}>
                    {eco.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                  {eco.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mb-3">
                  {eco.tagline}
                </p>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
                  {eco.desc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                  {eco.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={eco.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs group-hover:shadow-md"
              >
                <span>{eco.cta}</span>
                <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── Flagship Companion Tool Spotlight: CaseConverter ── */}
      <section className="max-w-6xl mx-auto mb-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold mb-4">
            <Zap size={14} />
            <span>Flagship Text Utility</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            CaseConverter — 11 Text Transformation Modes
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
            Transform text between Title Case, camelCase, snake_case, PascalCase, kebab-case, and UPPER CASE with real-time character counters and style guide compliance.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-emerald-300">
            <span>&bull; Title Case (APA & Chicago)</span>
            <span>&bull; Developer Identifier Conventions</span>
            <span>&bull; 100% In-Browser Privacy</span>
          </div>
        </div>

        <Link
          href="/"
          className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 shrink-0 w-full md:w-auto"
        >
          <span>Use CaseConverter Tool</span>
          <ArrowRight size={14} />
        </Link>
      </section>

      {/* ── Core Commitments ── */}
      <section className="max-w-5xl mx-auto mb-16 p-6 md:p-10 bg-slate-50 border border-slate-200 rounded-3xl">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight text-center mb-8">
          Universal Architecture & Privacy Standards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <Lock size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1.5">Zero Data Retention</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              All tools process inputs entirely inside your local browser memory. No code snippets, colors, SQL queries, or text are transmitted to remote servers.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
              <Clock size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1.5">Sub-Millisecond Speed</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Transformations run synchronously using compiled regex and JavaScript automata without API network latency or background queue delays.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1.5">Free & Accessible</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Every utility is free forever with no account creation, no credit cards, and no invasive tracking cookies.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
