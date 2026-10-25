'use client';

import { useState, useEffect } from 'react';
import {
  CodeXml, Menu, X, Home, Sparkles, BookOpen, Layers,
  ChevronDown, ArrowRight, Zap, Shield, Cpu, Terminal,
  ExternalLink, Check, Briefcase, FileCode2
} from 'lucide-react';
import Link from 'next/link';

export const TOOLS_NAV = [
  {
    label: 'Title Case',
    href: '/tools/title-case',
    desc: 'Capitalize words for headlines & APA/Chicago',
    prefix: 'TC',
    badgeBg: 'bg-emerald-500',
    lightBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    label: 'Sentence Case',
    href: '/tools/sentence-case',
    desc: 'Standard capitalization for articles & emails',
    prefix: 'Sc',
    badgeBg: 'bg-amber-500',
    lightBg: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    label: 'UPPER CASE',
    href: '/tools/uppercase-converter',
    desc: 'Convert all letters to capital characters',
    prefix: 'UC',
    badgeBg: 'bg-cyan-500',
    lightBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  },
  {
    label: 'lowercase',
    href: '/tools/lowercase-converter',
    desc: 'Clean, normalize, and lowercase any text',
    prefix: 'lc',
    badgeBg: 'bg-green-500',
    lightBg: 'bg-green-50 text-green-700 border-green-200',
  },
  {
    label: 'camelCase',
    href: '/tools/camel-case-generator',
    desc: 'Standard JavaScript & Java identifier syntax',
    prefix: 'cC',
    badgeBg: 'bg-blue-500',
    lightBg: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    label: 'PascalCase',
    href: '/tools/pascal-case-generator',
    desc: 'React component & C# class naming convention',
    prefix: 'PC',
    badgeBg: 'bg-teal-500',
    lightBg: 'bg-teal-50 text-teal-700 border-teal-200',
  },
  {
    label: 'snake_case',
    href: '/tools/snake-case-generator',
    desc: 'Python identifiers & SQL database columns',
    prefix: 'sc',
    badgeBg: 'bg-rose-500',
    lightBg: 'bg-rose-50 text-rose-700 border-rose-200',
  },
  {
    label: 'kebab-case',
    href: '/tools/kebab-case-generator',
    desc: 'CSS class names & clean SEO URL slugs',
    prefix: 'kc',
    badgeBg: 'bg-purple-500',
    lightBg: 'bg-purple-50 text-purple-700 border-purple-200',
  },
];

export const SERVICES_NAV = [
  {
    title: 'Text Transformation API',
    desc: 'High-throughput edge API for batch casing, slugification & sanitization.',
    href: '/services#api',
    icon: <Zap className="w-4 h-4 text-emerald-600" />,
    tag: 'Edge Ready',
  },
  {
    title: 'AST & Codebase Migration',
    desc: 'Automated refactoring of legacy databases & code identifiers.',
    href: '/services#migration',
    icon: <Cpu className="w-4 h-4 text-indigo-600" />,
    tag: 'Enterprise',
  },
  {
    title: 'Custom Typography Engines',
    desc: 'Rule-based headline casing & editorial compliance software.',
    href: '/services#typography',
    icon: <FileCode2 className="w-4 h-4 text-purple-600" />,
    tag: 'Custom',
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] transition-all duration-200 ${
        scrolled
          ? 'h-[68px] bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm'
          : 'h-[76px] bg-white border-b border-slate-200/60'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-full w-full max-w-[1400px]">

        {/* ── Brand Logo ── */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-emerald-500/20 bg-gradient-to-br from-emerald-500 to-teal-700 p-0.5 flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/10 group-hover:scale-105 group-hover:shadow-emerald-500/20 transition-all duration-300">
              <img src="/logo.png" alt="CaseConverter Logo" className="w-full h-full object-cover rounded-[10px]" />
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white"></span>
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                Case<span className="text-emerald-600">Converter</span>
              </span>
              <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200/60 tracking-wider">
                PRO
              </span>
            </div>
            <span className="text-[11px] font-medium text-slate-500 tracking-tight -mt-0.5 hidden sm:block">
              100% Private Text Transformation Suite
            </span>
          </div>
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2" role="navigation" aria-label="Main Navigation">
          
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-emerald-600 hover:bg-slate-50 transition-all"
          >
            <Home size={16} className="text-slate-500" />
            <span>Home</span>
          </Link>

          {/* Tools Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setToolsOpen(true)}
            onMouseLeave={() => setToolsOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-emerald-600 hover:bg-slate-50 transition-all group"
              aria-haspopup="true"
              aria-expanded={toolsOpen}
            >
              <div className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Layers size={13} />
              </div>
              <span>Tools</span>
              <ChevronDown
                size={14}
                className={`text-slate-400 group-hover:text-emerald-600 transition-transform duration-200 ${
                  toolsOpen ? 'rotate-180 text-emerald-600' : ''
                }`}
              />
            </button>

            {toolsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[1000] w-[540px] animate-fade-in">
                <div className="bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-900/10 p-4">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Conversion Formats
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                        11 Modes
                      </span>
                    </div>
                    <Link
                      href="/tools"
                      className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                    >
                      <span>Browse All Tools Directory</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {TOOLS_NAV.map((tool) => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        className="group flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                      >
                        <span
                          className={`w-7 h-7 rounded-lg ${tool.badgeBg} text-white flex items-center justify-center text-[11px] font-black shrink-0 shadow-xs group-hover:scale-105 transition-transform`}
                        >
                          {tool.prefix}
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
                            {tool.label}
                          </p>
                          <p className="text-[11px] text-slate-500 truncate max-w-[190px]">
                            {tool.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 bg-slate-50/70 -mx-4 -mb-4 p-3.5 rounded-b-2xl flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium flex items-center gap-1.5">
                      <Shield size={14} className="text-emerald-600" />
                      Client-side processing &bull; Zero server storage
                    </span>
                    <kbd className="px-2 py-0.5 text-[10px] rounded bg-white border border-slate-200 text-slate-500 font-mono">
                      Press ? for shortcuts
                    </kbd>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-all group"
            >
              <div className="w-5 h-5 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Briefcase size={13} />
              </div>
              <span>Services</span>
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200/50">
                API & Agency
              </span>
              <ChevronDown
                size={14}
                className={`text-slate-400 group-hover:text-indigo-600 transition-transform duration-200 ${
                  servicesOpen ? 'rotate-180 text-indigo-600' : ''
                }`}
              />
            </Link>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[1000] w-[380px] animate-fade-in">
                <div className="bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-900/10 p-3.5">
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Developer & Business Suite
                    </span>
                    <Link
                      href="/services"
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                    >
                      <span>All Services</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>

                  <div className="space-y-1.5">
                    {SERVICES_NAV.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-indigo-50/50 border border-transparent hover:border-indigo-100 transition-all"
                      >
                        <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-white border border-slate-200 group-hover:border-indigo-200 flex items-center justify-center shrink-0 shadow-xs transition-colors">
                          {service.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between mb-0.5">
                            <p className="text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                              {service.title}
                            </p>
                            <span className="text-[10px] font-semibold text-indigo-600 px-1.5 py-0.2 bg-indigo-50 rounded">
                              {service.tag}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-snug line-clamp-2">
                            {service.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 text-center">
                    <Link
                      href="/services#quote"
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-xs font-bold hover:brightness-105 shadow-sm transition-all"
                    >
                      <Zap size={13} className="text-amber-300" />
                      <span>Request Custom Integration or API Key</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Modern Techniques link */}
          <Link
            href="/#techniques"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-cyan-600 hover:bg-slate-50 transition-all"
          >
            <div className="w-5 h-5 rounded-md bg-cyan-50 text-cyan-600 flex items-center justify-center">
              <Terminal size={13} />
            </div>
            <span>Techniques</span>
          </Link>

          {/* Guides link */}
          <Link
            href="/guides/naming-conventions"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-amber-600 hover:bg-slate-50 transition-all"
          >
            <div className="w-5 h-5 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center">
              <BookOpen size={13} />
            </div>
            <span>Guides</span>
          </Link>

          {/* About */}
          <Link
            href="/about"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-purple-600 hover:bg-slate-50 transition-all"
          >
            <div className="w-5 h-5 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center">
              <Sparkles size={13} />
            </div>
            <span>About</span>
          </Link>
        </nav>

        {/* ── Action Buttons & Mobile Trigger ── */}
        <div className="flex items-center gap-2.5">
          <Link
            href="https://github.com/revoxera"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-2 rounded-xl font-bold text-xs shadow-xs hover:shadow-md transition-all"
          >
            <CodeXml size={14} className="text-emerald-400" />
            <span>GitHub</span>
          </Link>

          <Link
            href="/services#quote"
            className="hidden lg:inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-xl font-bold text-xs shadow-sm hover:shadow transition-all"
          >
            <Zap size={14} className="text-emerald-200" />
            <span>Get API Access</span>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Responsive Drawer Menu ── */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[68px] bottom-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 z-[999] overflow-y-auto px-4 py-6 animate-fade-in flex flex-col justify-between">
          <div className="space-y-6">

            {/* Quick Navigation Links */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Navigation
              </p>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 text-sm font-bold border border-slate-200/70"
                >
                  <Home size={16} className="text-emerald-600" />
                  <span>Home Tool</span>
                </Link>
                <Link
                  href="/services"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-900 text-sm font-bold border border-indigo-200/70"
                >
                  <Briefcase size={16} className="text-indigo-600" />
                  <span>Services</span>
                </Link>
                <Link
                  href="/#techniques"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-cyan-900 text-sm font-bold border border-cyan-200/70"
                >
                  <Terminal size={16} className="text-cyan-600" />
                  <span>Techniques</span>
                </Link>
                <Link
                  href="/guides/naming-conventions"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-sm font-bold border border-amber-200/70"
                >
                  <BookOpen size={16} className="text-amber-600" />
                  <span>Guides</span>
                </Link>
              </div>
            </div>

            {/* Popular Conversion Tools */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Popular Tools
                </p>
                <Link
                  href="/tools"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xs font-bold text-emerald-600 flex items-center gap-1"
                >
                  <span>All 11 Tools</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {TOOLS_NAV.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:border-emerald-500 hover:bg-emerald-50/30 transition-all"
                  >
                    <span
                      className={`w-6 h-6 rounded-md ${tool.badgeBg} text-white flex items-center justify-center text-[10px] font-black shrink-0`}
                    >
                      {tool.prefix}
                    </span>
                    <span className="truncate">{tool.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Services Highlight Card in Mobile */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-900 text-white shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1 rounded-md bg-indigo-500/30 text-indigo-300">
                  <Zap size={14} />
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-indigo-300">
                  Revoxera Developer Suite
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                Edge APIs & Naming Migration
              </h4>
              <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                Need high-throughput casing APIs or automated AST codebase refactoring?
              </p>
              <Link
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-bold transition-all shadow-sm"
              >
                <span>Explore Services</span>
                <ArrowRight size={12} />
              </Link>
            </div>

          </div>

          {/* Bottom mobile info */}
          <div className="pt-6 border-t border-slate-200 mt-6 flex items-center justify-between text-xs text-slate-500">
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-slate-900 font-semibold">
              About
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-slate-900 font-semibold">
              Contact Support
            </Link>
            <Link href="/privacy" onClick={() => setIsMenuOpen(false)} className="hover:text-slate-900 font-semibold">
              Privacy
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
