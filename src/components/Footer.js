'use client';

import { GitBranch, X as XIcon, Link2, ShieldCheck, Heart } from 'lucide-react';
import Link from 'next/link';

const FOOTER_LINKS = {
  'Tools': [
    { label: 'Title Case Converter', href: '/tools/title-case' },
    { label: 'Sentence Case Converter', href: '/tools/sentence-case' },
    { label: 'UPPER CASE Converter', href: '/tools/uppercase-converter' },
    { label: 'lowercase Converter', href: '/tools/lowercase-converter' },
    { label: 'camelCase Generator', href: '/tools/camel-case-generator' },
    { label: 'PascalCase Generator', href: '/tools/pascal-case-generator' },
    { label: 'snake_case Generator', href: '/tools/snake-case-generator' },
    { label: 'kebab-case Generator', href: '/tools/kebab-case-generator' },
  ],
  'Guides': [
    { label: 'APA Title Case Rules', href: '/guides/apa-title-case' },
    { label: 'Naming Conventions', href: '/guides/naming-conventions' },
    { label: 'Sentence vs Title Case', href: '/guides/sentence-case-vs-title-case' },
  ],
  'Other Tools': [
    { label: 'AI Prompt Generator', href: 'https://aiprompt.revoxera.com' },
    { label: 'SQL Formatter', href: 'https://sqlformatter.revoxera.com' },
    { label: 'JSON Formatter', href: 'https://jsonformatter.revoxera.com' },
    { label: 'Color Code Tool', href: 'https://colorcode.revoxera.com' },
  ],
  'Company': [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
};

const SOCIAL = [
  { icon: <XIcon className="w-4 h-4" />, href: 'https://x.com/revoxera', label: 'X (Twitter)' },
  { icon: <GitBranch className="w-4 h-4" />, href: 'https://github.com/revoxera', label: 'GitHub' },
  { icon: <Link2 className="w-4 h-4" />, href: 'https://www.linkedin.com/in/revoxera-digital', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-slate-200 bg-slate-950 flex items-center justify-center shrink-0 shadow-xs">
                <img src="/logo.png" alt="CaseConverter Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">CaseConverter</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Free, 100% private online text transformation utility. Convert between Title Case, sentence case, camelCase, snake_case, and more with zero server uploads.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span>100% Client-Side Processing</span>
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} CaseConverter by Revoxera. All rights reserved.</p>
          
          {/* Social Links */}
          <div className="flex items-center gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-all shadow-xs"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
