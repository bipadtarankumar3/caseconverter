'use client';

import { useState } from 'react';
import { CodeXml, Menu, X, Home, Sparkles, BookOpen, Layers, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const TOOLS_DROPDOWN = [
  { label: 'Title Case',      href: '/tools/title-case' },
  { label: 'Sentence Case',   href: '/tools/sentence-case' },
  { label: 'UPPER CASE',      href: '/tools/uppercase-converter' },
  { label: 'lowercase',       href: '/tools/lowercase-converter' },
  { label: 'camelCase',       href: '/tools/camel-case-generator' },
  { label: 'PascalCase',      href: '/tools/pascal-case-generator' },
  { label: 'snake_case',      href: '/tools/snake-case-generator' },
  { label: 'kebab-case',      href: '/tools/kebab-case-generator' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] h-[70px] md:h-[80px] flex items-center bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs" role="banner">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center w-full max-w-[1400px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl overflow-hidden border border-slate-200 bg-slate-950 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
            <img src="/logo.png" alt="CaseConverter Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">CaseConverter</span>
        </Link>

        {/* Mobile burger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Navigation */}
        <nav className={`
          fixed md:static top-[70px] md:top-auto left-0 w-full md:w-auto
          bg-white md:bg-transparent p-6 md:p-0
          flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6
          border-b md:border-none border-slate-200 shadow-lg md:shadow-none
          transition-all duration-200 z-[1000]
          ${isMenuOpen ? 'flex' : 'hidden md:flex'}
        `} role="navigation" aria-label="Main Navigation">

          <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            <Home size={16} />
            <span>Home</span>
          </Link>

          {/* Tools dropdown */}
          <div className="relative group w-full md:w-auto">
            <button
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors py-1"
              onClick={() => setToolsOpen(!toolsOpen)}
              aria-haspopup="true"
            >
              <Layers size={16} />
              <span>Tools</span>
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
            </button>

            {/* Dropdown menu */}
            <div className="hidden group-hover:grid md:absolute md:top-full md:left-1/2 md:-translate-x-1/2 pt-2 z-[1000] grid-cols-1">
              <div className="w-[240px] bg-white border border-slate-200 rounded-2xl shadow-xl p-2 grid grid-cols-1 gap-0.5">
                {TOOLS_DROPDOWN.map((t) => (
                  <Link
                    key={t.href}
                    href={t.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-3.5 py-2 rounded-xl text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors font-medium"
                  >
                    {t.label}
                  </Link>
                ))}
                <div className="border-t border-slate-100 mt-1 pt-1">
                  <Link href="/tools" onClick={() => setIsMenuOpen(false)} className="px-3.5 py-2 rounded-xl text-sm text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors font-bold flex items-center justify-between">
                    <span>All Tools</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/guides/naming-conventions" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            <BookOpen size={16} />
            <span>Guides</span>
          </Link>

          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            <Sparkles size={16} />
            <span>About</span>
          </Link>

          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            Contact
          </Link>

          {/* GitHub CTA */}
          <Link
            href="https://github.com/revoxera"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 px-3.5 py-1.5 rounded-xl font-semibold text-xs transition-all shadow-xs w-full md:w-auto justify-center"
          >
            <CodeXml size={15} />
            <span>GitHub</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
