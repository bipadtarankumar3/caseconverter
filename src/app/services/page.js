'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Zap, Cpu, ShieldCheck, FileCode2, Globe2, ArrowRight,
  CheckCircle2, Terminal, Code2, Server, Sliders, Sparkles,
  HelpCircle, MessageSquare, Send, Check, Layers, Workflow,
  Lock, Clock, Building2, Database, Rocket, Palette, ExternalLink
} from 'lucide-react';

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'api',
    volume: '100k-1m',
    budget: '$500-$2,000',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // scroll to confirmation or reset after timeout if needed
    }, 1000);
  };

  const SERVICES = [
    {
      id: 'api',
      icon: <Zap className="w-6 h-6 text-emerald-600" />,
      color: 'from-emerald-500/10 to-teal-500/10',
      badge: 'Edge Deployed',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      title: 'High-Throughput Text & Casing API',
      subtitle: 'Ultra-low latency REST & GraphQL edge service',
      desc: 'Process millions of text transformations per second across Cloudflare and Vercel edge networks. Perfect for CMS ingestion, search indexing, URL slugification, and dynamic content pipelines.',
      features: [
        'Sub-millisecond execution (<0.4ms avg response)',
        '11 casing formats + custom regex delimiter transformations',
        'Batch array conversion endpoints (up to 5,000 items/call)',
        'Zero-logging architecture with 100% GDPR compliance',
        'TypeScript, Python, Go, and PHP SDKs available',
      ],
      cta: 'Explore API Documentation',
    },
    {
      id: 'migration',
      icon: <Cpu className="w-6 h-6 text-indigo-600" />,
      color: 'from-indigo-500/10 to-blue-500/10',
      badge: 'Codebase Engineering',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      title: 'AST & Codebase Identifier Migration',
      subtitle: 'Automated semantic refactoring for large repositories',
      desc: 'Migrating from Python snake_case databases to GraphQL camelCase or TypeScript schemas? Our custom AST (Abstract Syntax Tree) toolchains perform full repository refactoring without syntax regression.',
      features: [
        'AST parsing for JavaScript, TypeScript, Python, Go, and SQL',
        'Automatic identifier renaming with scope preservation',
        'Database column, ORM mapping, and JSON serializer updates',
        'Zero downtime migration plans with pre/post diff audits',
        'Dedicated senior refactoring engineer oversight',
      ],
      cta: 'Request Migration Audit',
    },
    {
      id: 'typography',
      icon: <FileCode2 className="w-6 h-6 text-purple-600" />,
      color: 'from-purple-500/10 to-pink-500/10',
      badge: 'Editorial Suite',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
      title: 'Custom Typography & Styleguide Engines',
      subtitle: 'Rule-based headline capitalization for publishers',
      desc: 'Automate strict adherence to APA 7th Edition, Chicago Manual of Style, AP News, or custom corporate brand guidelines across editorial teams, headless CMSs, and marketing platforms.',
      features: [
        'Complex preposition & hyphenated compound word algorithms',
        'Brand-specific exceptions list & protected trademark dictionaries',
        'Webhook integrations with Contentful, Sanity, Strapi & WordPress',
        'Browser extensions & Figma headline auto-formatter plugins',
        'Quality assurance dashboards for editorial directors',
      ],
      cta: 'Consult on Style Engine',
    },
    {
      id: 'portals',
      icon: <Layers className="w-6 h-6 text-cyan-600" />,
      color: 'from-cyan-500/10 to-sky-500/10',
      badge: 'White-Label Portals',
      badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      title: 'Bespoke Internal Developer Portals',
      subtitle: 'Custom tool suites tailored for engineering teams',
      desc: 'We design and build bespoke, high-performance web applications, internal calculators, formatters, and developer utilities tailored to your company’s internal design system and security requirements.',
      features: [
        'Built with Next.js 16, React 19, and Tailwind CSS',
        'SSO Integration (Okta, Azure AD, Google Workspace)',
        'Self-hosted Docker or cloud-managed deployments',
        'Complete source code ownership & zero vendor lock-in',
        'High-density keyboard navigation & developer shortcuts',
      ],
      cta: 'Build Custom Portal',
    },
    {
      id: 'unicode',
      icon: <Globe2 className="w-6 h-6 text-amber-600" />,
      color: 'from-amber-500/10 to-orange-500/10',
      badge: 'Internationalization',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      title: 'Unicode & Multilingual Casing Solutions',
      subtitle: 'Complex international casing & diacritics',
      desc: 'Standard capitalization algorithms break on languages with special casing rules (Turkish dotless I, German sharp S, Greek final sigma). We engineer resilient localization pipelines for global products.',
      features: [
        'Locale-aware casing (TR, AZ, DE, EL, LT language handling)',
        'Diacritic folding and accent-preserving slugification',
        'Right-to-Left (RTL) script boundary & bi-directional text support',
        'Custom unicode normalization forms (NFC, NFD, NFKC, NFKD)',
        'Comprehensive multi-language automated test suites',
      ],
      cta: 'Discuss Localization',
    },
    {
      id: 'integrations',
      icon: <Workflow className="w-6 h-6 text-rose-600" />,
      color: 'from-rose-500/10 to-red-500/10',
      badge: 'Workflow Automation',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
      title: 'CI/CD Linters & Workflow Bots',
      subtitle: 'Enforce naming consistency across git commits',
      desc: 'Prevent naming inconsistencies before code gets merged. We deploy custom GitHub Actions, pre-commit hooks, and Slack/Discord bots that automatically detect and fix non-standard identifiers.',
      features: [
        'Custom GitHub Actions & GitLab CI pipeline jobs',
        'Git pre-commit hooks with zero latency overhead',
        'Automated pull request comments & fix suggestions',
        'Slack & Discord conversational transformation bots',
        'Figma plugins for design token naming synchronization',
      ],
      cta: 'Configure CI/CD Hooks',
    },
  ];

  const TIERS = [
    {
      name: 'Community',
      badge: 'Free Forever',
      badgeColor: 'bg-slate-100 text-slate-700',
      price: '$0',
      period: 'no credit card required',
      desc: 'Ideal for individual writers, developers, and quick ad-hoc transformations.',
      features: [
        '100% Client-side browser tool with 11 formats',
        'Unlimited text conversions',
        'Local browser history storage (last 20 items)',
        'Full keyboard shortcut support',
        'Community guides & documentation',
      ],
      cta: 'Use Online Tool',
      href: '/',
      featured: false,
    },
    {
      name: 'Developer API',
      badge: 'Most Popular',
      badgeColor: 'bg-emerald-100 text-emerald-800 border border-emerald-300',
      price: '$29',
      period: 'per month / billed annually',
      desc: 'Engineered for developers building applications requiring high-speed text processing APIs.',
      features: [
        '1,000,000 API requests / month included',
        'Edge response time < 1ms global SLA',
        'Batch transformation endpoint support',
        'API keys with rate-limiting controls',
        'SDK access (TypeScript, Python, Go)',
        'Standard email support (24hr turnaround)',
      ],
      cta: 'Get API Access',
      href: '#quote',
      featured: true,
    },
    {
      name: 'Enterprise & Agency',
      badge: 'Tailored Solutions',
      badgeColor: 'bg-indigo-100 text-indigo-800 border border-indigo-300',
      price: 'Custom',
      period: 'volume licensing & custom contracts',
      desc: 'For enterprise organizations with custom style guides, codebases, and compliance needs.',
      features: [
        'Unlimited API volume & dedicated edge clusters',
        'Custom AST codebase migration services',
        'Custom style engine (APA, Chicago, brand rules)',
        'Self-hosted Docker container & VPC deployment',
        '99.99% Uptime SLA with financial guarantee',
        'Dedicated Solutions Architect & Slack channel',
      ],
      cta: 'Contact Solutions Team',
      href: '#quote',
      featured: false,
    },
  ];

  const ECOSYSTEM_SERVICES = [
    {
      title: 'HTML Color Codes & Picker',
      url: 'https://colorcode.revoxera.com/',
      desc: 'HEX, RGB, HSL & OKLCH color generator with live contrast tools, palette builder, and visualizer.',
      icon: <Palette className="w-5 h-5 text-emerald-600" />,
      badge: 'Color Studio',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'SQL Formatter & Beautifier',
      url: 'https://sqlformatter.revoxera.com/',
      desc: 'Multi-dialect SQL query formatter for PostgreSQL, BigQuery, Snowflake, MySQL, and SQLite.',
      icon: <Database className="w-5 h-5 text-blue-600" />,
      badge: 'Database Tool',
      badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'JSON Formatter & Mapper',
      url: 'https://json-formatter-mapper.revoxera.com/',
      desc: 'Interactive JSON schema mapper, validator, AST tree visualizer, and data transformation engine.',
      icon: <FileCode2 className="w-5 h-5 text-purple-600" />,
      badge: 'Data Pipeline',
      badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'AI Prompt Generator',
      url: 'https://ai-prompt.revoxera.com/',
      desc: 'Structured system prompt designer, meta-prompt optimizer, and token efficiency engine for LLMs.',
      icon: <Rocket className="w-5 h-5 text-amber-600" />,
      badge: 'AI Engineering',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      gradient: 'from-amber-500 to-orange-600',
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 max-w-[1400px] py-10 md:py-16">
      
      {/* ── Breadcrumb ── */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumbs">
        <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-900 font-bold">Services & Developer Suite</span>
      </nav>

      {/* ── Hero Section ── */}
      <section className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/70 text-indigo-700 text-xs font-bold mb-6">
          <Sparkles size={14} className="text-indigo-600" />
          <span>Revoxera Engineering & Text Solutions</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-5 leading-[1.15]">
          Modern Text APIs, Casing Engines & <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent">Enterprise Services</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
          From microsecond edge-deployed text transformation APIs to automated AST codebase identifier migrations and bespoke editorial style engines — we build high-precision tools for modern engineering and media teams.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#quote"
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            <Zap size={16} className="text-emerald-400" />
            <span>Request API Key or Custom Quote</span>
          </a>
          <a
            href="#services-list"
            className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex items-center gap-1.5"
          >
            <span>Explore Offerings</span>
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Highlight Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12 pt-8 sm:pt-10 border-t border-slate-200">
          {[
            { label: 'Avg API Latency', value: '< 0.38ms', sub: 'Global Cloudflare Edge' },
            { label: 'Uptime SLA', value: '99.99%', sub: 'Contract-backed guarantee' },
            { label: 'Data Retention', value: '0 Bytes', sub: '100% GDPR & HIPAA safe' },
            { label: 'Supported Protocols', value: '11+ Formats', sub: 'REST, GraphQL, AST' },
          ].map((stat) => (
            <div key={stat.label} className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{stat.value}</div>
              <div className="text-xs font-bold text-slate-700 mt-1">{stat.label}</div>
              <div className="text-[10px] sm:text-[11px] text-slate-500">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services Cards Grid ── */}
      <section id="services-list" className="max-w-6xl mx-auto mb-20 md:mb-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Enterprise & Developer Capabilities
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            Choose from plug-and-play developer services or collaborate with our engineering team for bespoke implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {s.icon}
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${s.badgeColor}`}>
                    {s.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mb-3">
                  {s.subtitle}
                </p>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                  {s.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#quote"
                onClick={() => setFormData({ ...formData, service: s.id })}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200 hover:border-emerald-300 text-xs font-bold transition-all shadow-xs"
              >
                <span>{s.cta}</span>
                <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing Tiers ── */}
      <section id="pricing" className="max-w-6xl mx-auto mb-20 md:mb-28">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3">
            Transparent Engagement Models
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Flexible Plans for Every Scale
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto">
            From free client-side conversions to million-request edge APIs and enterprise contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                tier.featured
                  ? 'bg-slate-900 text-white border-2 border-emerald-500 shadow-xl shadow-emerald-950/10 scale-100 md:-translate-y-2'
                  : 'bg-white text-slate-900 border border-slate-200 shadow-xs hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">{tier.name}</h3>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tier.badgeColor}`}>
                    {tier.badge}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-4xl font-black tracking-tight">{tier.price}</span>
                  <span className={`text-xs ml-2 ${tier.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                    {tier.period}
                  </span>
                </div>

                <p className={`text-xs leading-relaxed mb-6 ${tier.featured ? 'text-slate-300' : 'text-slate-600'}`}>
                  {tier.desc}
                </p>

                <div className="space-y-3 pt-6 border-t border-slate-200/20 mb-8">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 text-xs">
                      <Check
                        size={15}
                        className={`shrink-0 mt-0.5 ${tier.featured ? 'text-emerald-400' : 'text-emerald-600'}`}
                      />
                      <span className={tier.featured ? 'text-slate-200' : 'text-slate-700'}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={tier.href}
                className={`w-full py-3 px-4 rounded-xl text-center text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 ${
                  tier.featured
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/50'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                <span>{tier.cta}</span>
                <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── Revoxera Ecosystem Platforms & Developer Sites ── */}
      <section className="max-w-6xl mx-auto mb-20 md:mb-28">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold mb-3">
            <Sparkles size={13} className="text-indigo-600" />
            <span>Revoxera Production Platforms</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Ecosystem Developer Tools & Web Services
          </h2>
          <p className="text-slate-600 text-xs md:text-sm max-w-xl mx-auto">
            Explore our specialized developer applications built for performance, privacy, and precision formatting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {ECOSYSTEM_SERVICES.map((eco) => (
            <a
              key={eco.title}
              href={eco.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-slate-200 hover:border-slate-300 rounded-3xl p-5 md:p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {eco.icon}
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${eco.badgeColor}`}>
                    {eco.badge}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-indigo-600 transition-colors">
                  {eco.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">
                  {eco.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                <span>Launch platform</span>
                <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Interactive Quote / Ingestion Request Form ── */}
      <section id="quote" className="max-w-4xl mx-auto mb-20 md:mb-28 p-6 md:p-12 bg-white border border-slate-200 rounded-3xl shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center mx-auto mb-4">
            <Send size={22} />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">
            Request an API Key or Project Quote
          </h2>
          <p className="text-slate-600 text-xs md:text-sm">
            Let us know your requirements. Our engineering team typically responds within 4 business hours.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center animate-fade-in">
            <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <Check size={24} />
            </div>
            <h3 className="text-lg font-bold text-emerald-900 mb-1">Inquiry Received Successfully!</h3>
            <p className="text-xs md:text-sm text-emerald-700 max-w-md mx-auto mb-4">
              Thank you, <span className="font-semibold">{formData.name || 'there'}</span>. A Revoxera technical representative will review your project requirements and follow up at <span className="font-semibold">{formData.email}</span> shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs font-bold text-emerald-800 underline hover:text-emerald-900"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Johnson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 text-xs outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 text-xs outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Company / Organization</label>
                <input
                  type="text"
                  placeholder="Acme Corp"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 text-xs outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Service Required</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 text-xs outline-none transition-all bg-white"
                >
                  <option value="api">Edge Text & Casing API</option>
                  <option value="migration">AST Codebase Migration</option>
                  <option value="typography">Custom Typography Engine</option>
                  <option value="portals">Internal Developer Portal</option>
                  <option value="unicode">Unicode & Multilingual Casing</option>
                  <option value="integrations">CI/CD & Git Linters</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Estimated Monthly Volume</label>
                <select
                  value={formData.volume}
                  onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 text-xs outline-none transition-all bg-white"
                >
                  <option value="under-100k">&lt; 100,000 req/mo</option>
                  <option value="100k-1m">100,000 - 1M req/mo</option>
                  <option value="1m-10m">1M - 10M req/mo</option>
                  <option value="10m-plus">10M+ Enterprise Scale</option>
                  <option value="consulting">One-time Codebase Migration</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Project Details & Questions</label>
              <textarea
                rows={4}
                placeholder="Tell us about your architecture, current pain points, or specific custom casing styles you need supported..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 text-xs outline-none transition-all"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send size={15} />
                <span>Submit Request & Connect with Engineer</span>
              </button>
              <p className="text-[11px] text-slate-400 text-center mt-2.5">
                We respect your privacy. Zero spam, NDA available on request, and your data is never sold.
              </p>
            </div>
          </form>
        )}
      </section>

      {/* ── Enterprise Security & Guarantees ── */}
      <section className="max-w-5xl mx-auto mb-16 p-6 md:p-10 bg-slate-50 border border-slate-200 rounded-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight text-center mb-8">
          Enterprise Security & Privacy Commitments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <Lock size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1.5">Zero Data Persistence</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Transformations run purely in volatile edge memory. No user payloads, database columns, or article texts are written to disk.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
              <Clock size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1.5">Sub-Millisecond Edge SLA</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Distributed across 300+ edge locations worldwide for near-instant execution without cross-continental routing hops.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1.5">GDPR & SOC2 Ready</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Standard Data Processing Agreements (DPA), signed NDAs, and enterprise custom security reviews available on request.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
