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
    <header className="sticky top-0 z-[100] h-[70px] md:h-[90px] flex items-center bg-background/70 backdrop-blur-xl border-b border-glass-border" role="banner">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center w-full">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 font-black text-2xl tracking-tighter text-foreground">
          <img src="/logo.png" alt="CaseConverter Logo" className="w-10 h-10 object-contain invert dark:invert-0 hue-rotate-180 dark:hue-rotate-0 contrast-125 dark:contrast-100 saturate-150 dark:saturate-100 rounded-xl" />
          <span className="hidden sm:inline text-lg font-black tracking-tight">CaseConverter</span>
        </Link>

        {/* Mobile burger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-xl bg-foreground/5 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Nav */}
        <nav className={`
          fixed md:static top-[70px] md:top-auto left-0 w-full md:w-auto
          bg-background md:bg-transparent p-8 md:p-0
          flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-6
          border-b md:border-none border-glass-border
          transition-all duration-300 z-[1000]
          ${isMenuOpen ? 'flex' : 'hidden md:flex'}
        `} role="navigation" aria-label="Main Navigation">

          <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors">
            <Home size={16} />
            <span>Home</span>
          </Link>

          {/* Tools dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
              onClick={() => setToolsOpen(!toolsOpen)}
              aria-haspopup="true"
            >
              <Layers size={16} />
              <span>Tools</span>
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
            </button>

            {/* Dropdown menu */}
            <div className="hidden group-hover:grid md:absolute md:top-full md:left-1/2 md:-translate-x-1/2 pt-3 z-[1000] grid-cols-1">
              <div className="w-[240px] bg-background border border-glass-border rounded-2xl overflow-hidden shadow-2xl p-2 grid grid-cols-1 gap-1">
                {TOOLS_DROPDOWN.map((t) => (
                  <Link
                    key={t.href}
                    href={t.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-sm text-muted hover:text-foreground hover:bg-foreground/[0.06] transition-colors font-medium"
                  >
                    {t.label}
                  </Link>
                ))}
                <div className="border-t border-glass-border mt-1 pt-1">
                  <Link href="/tools" onClick={() => setIsMenuOpen(false)} className="px-4 py-2.5 rounded-xl text-sm text-primary hover:bg-foreground/[0.06] transition-colors font-bold flex items-center gap-2">
                    View all tools →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/guides/naming-conventions" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors">
            <BookOpen size={16} />
            <span>Guides</span>
          </Link>

          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors">
            <Sparkles size={16} />
            <span>About</span>
          </Link>

          {/* CTA */}
          <Link
            href="https://github.com/revoxera"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-foreground/5 hover:bg-foreground/10 px-5 py-2.5 rounded-2xl border border-glass-border hover:border-primary transition-all hover:-translate-y-0.5 hover:shadow-[0_0_20px_var(--primary-glow)] font-semibold w-full md:w-auto justify-center"
          >
            <CodeXml size={18} aria-hidden="true" />
            <span>GitHub</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
