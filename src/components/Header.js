'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export const TOOLS_NAV = [
  { label: 'Title Case', href: '/tools/title-case', desc: 'Headlines and titles' },
  { label: 'Sentence case', href: '/tools/sentence-case', desc: 'Normal sentences, fixes ALL CAPS' },
  { label: 'UPPER CASE', href: '/tools/uppercase-converter', desc: 'All capital letters' },
  { label: 'lowercase', href: '/tools/lowercase-converter', desc: 'All small letters' },
  { label: 'camelCase', href: '/tools/camel-case-generator', desc: 'JavaScript and Java names' },
  { label: 'PascalCase', href: '/tools/pascal-case-generator', desc: 'Classes and components' },
  { label: 'snake_case', href: '/tools/snake-case-generator', desc: 'Python and SQL names' },
  { label: 'kebab-case', href: '/tools/kebab-case-generator', desc: 'URLs and CSS classes' },
];

export const MORE_TOOLS_NAV = [
  { label: 'HTML Color Codes', href: 'https://colorcode.revoxera.com/' },
  { label: 'SQL Formatter', href: 'https://sqlformatter.revoxera.com/' },
  { label: 'JSON Formatter', href: 'https://json-formatter-mapper.revoxera.com/' },
  { label: 'AI Prompt Generator', href: 'https://ai-prompt.revoxera.com/' },
];

const GUIDES_NAV = [
  { label: 'Sentence case vs Title Case', href: '/guides/sentence-case-vs-title-case' },
  { label: 'APA title case rules', href: '/guides/apa-title-case' },
  { label: 'Code naming conventions', href: '/guides/naming-conventions' },
];

const LINKS = [
  { label: 'About', href: '/about', match: '/about' },
  { label: 'Contact', href: '/contact', match: '/contact' },
];

function Dropdown({ label, active, children, width = 'w-72' }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const close = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    const esc = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('keydown', esc); };
  }, [open]);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`flex items-center gap-1 px-3 py-2 rounded-md text-[15px] transition-colors ${active ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
      >
        {label}
        <ChevronDown size={15} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className={`absolute top-full left-0 pt-1 z-[1000] ${width}`}>
          <div className="bg-white border border-slate-200 rounded-lg shadow-lg py-2" onClick={() => setOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() || '/';
  const isActive = (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`);

  // Close the mobile menu on navigation and lock page scroll while it's open.
  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-[100] h-16 bg-white border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <img src="/logo.png" alt="" width={32} height={32} className="w-8 h-8 rounded-md" />
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Case<span className="text-emerald-600">Converter</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main">
          <Dropdown label="Tools" active={isActive('/tools')} width="w-[440px]">
            <div className="grid grid-cols-2 px-2">
              {TOOLS_NAV.map((t) => (
                <Link key={t.href} href={t.href} className="px-3 py-2 rounded-md hover:bg-slate-50">
                  <span className="block text-sm font-medium text-slate-900">{t.label}</span>
                  <span className="block text-xs text-slate-500">{t.desc}</span>
                </Link>
              ))}
            </div>
            <div className="border-t border-slate-100 mt-2 pt-2 px-5">
              <Link href="/tools" className="text-sm text-emerald-700 hover:underline">See all tools</Link>
            </div>
          </Dropdown>

          <Dropdown label="Guides" active={isActive('/guides')}>
            {GUIDES_NAV.map((g) => (
              <Link key={g.href} href={g.href} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900">
                {g.label}
              </Link>
            ))}
          </Dropdown>

          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.match) ? 'page' : undefined}
              className={`px-3 py-2 rounded-md text-[15px] transition-colors ${isActive(l.match) ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              {l.label}
            </Link>
          ))}

          <Dropdown label="More tools" active={isActive('/services')} width="w-60">
            {MORE_TOOLS_NAV.map((t) => (
              <a key={t.href} href={t.href} target="_blank" rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900">
                {t.label} <span className="text-slate-400">↗</span>
              </a>
            ))}
            <div className="border-t border-slate-100 mt-2 pt-2 px-4">
              <Link href="/services" className="text-sm text-emerald-700 hover:underline">About these tools</Link>
            </div>
          </Dropdown>
        </nav>

        <button
          className="md:hidden p-2 -mr-2 rounded-md text-slate-700 hover:bg-slate-100"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-white z-[999] overflow-y-auto border-t border-slate-200">
          <nav className="px-4 py-4" aria-label="Mobile">
            <p className="px-2 text-xs font-medium uppercase tracking-wide text-slate-400 mb-1">Tools</p>
            <div className="grid grid-cols-2 mb-4">
              {TOOLS_NAV.map((t) => (
                <Link key={t.href} href={t.href} className="px-2 py-2.5 text-[15px] text-slate-800">{t.label}</Link>
              ))}
              <Link href="/tools" className="px-2 py-2.5 text-[15px] text-emerald-700">All tools</Link>
            </div>

            <div className="border-t border-slate-200 pt-3 mb-4">
              <p className="px-2 text-xs font-medium uppercase tracking-wide text-slate-400 mb-1">Guides</p>
              {GUIDES_NAV.map((g) => (
                <Link key={g.href} href={g.href} className="block px-2 py-2.5 text-[15px] text-slate-800">{g.label}</Link>
              ))}
            </div>

            <div className="border-t border-slate-200 pt-2 mb-4">
              <Link href="/" className="block px-2 py-3 text-[15px] text-slate-800">Home</Link>
              {LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="block px-2 py-3 text-[15px] text-slate-800">{l.label}</Link>
              ))}
            </div>

            <div className="border-t border-slate-200 pt-3">
              <p className="px-2 text-xs font-medium uppercase tracking-wide text-slate-400 mb-1">More tools by Revoxera</p>
              {MORE_TOOLS_NAV.map((t) => (
                <a key={t.href} href={t.href} target="_blank" rel="noopener noreferrer" className="block px-2 py-2.5 text-[15px] text-slate-700">
                  {t.label} <span className="text-slate-400">↗</span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
