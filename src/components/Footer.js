'use client';

import { useState } from 'react';
import {
  GitBranch, X as XIcon, Link2, ShieldCheck, Heart,
  Zap, ArrowRight, Check, Send, Sparkles, Terminal,
  Cpu, FileCode, CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

const FOOTER_SECTIONS = {
  'Tools': [
    { label: 'Title Case Converter', href: '/tools/title-case', badge: 'Popular' },
    { label: 'Sentence Case Converter', href: '/tools/sentence-case' },
    { label: 'UPPER CASE Converter', href: '/tools/uppercase-converter' },
    { label: 'lowercase Converter', href: '/tools/lowercase-converter' },
    { label: 'camelCase Generator', href: '/tools/camel-case-generator' },
    { label: 'PascalCase Generator', href: '/tools/pascal-case-generator' },
    { label: 'snake_case Generator', href: '/tools/snake-case-generator' },
    { label: 'kebab-case Generator', href: '/tools/kebab-case-generator' },
    { label: 'View All 11 Tools →', href: '/tools' },
  ],
  'Ecosystem Services': [
    { label: 'HTML Color Codes & Picker', href: 'https://colorcode.revoxera.com/' },
    { label: 'SQL Formatter & Beautifier', href: 'https://sqlformatter.revoxera.com/' },
    { label: 'JSON Formatter & Mapper', href: 'https://json-formatter-mapper.revoxera.com/' },
    { label: 'AI Prompt Generator', href: 'https://ai-prompt.revoxera.com/' },
    { label: 'All Ecosystem Platforms →', href: '/services' },
  ],
  'Guides & Resources': [
    { label: 'APA Title Case Rules', href: '/guides/apa-title-case' },
    { label: 'Naming Conventions Guide', href: '/guides/naming-conventions' },
    { label: 'Interactive Techniques Matrix', href: '/#techniques' },
    { label: 'JavaScript Case Snippets', href: '/#techniques' },
    { label: 'Keyboard Shortcuts Guide', href: '/#faq' },
  ],
  'Company': [
    { label: 'About CaseConverter', href: '/about' },
    { label: 'Services & Platforms', href: '/services' },
    { label: 'Contact Support', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

const SOCIAL = [
  { icon: <XIcon className="w-4 h-4" />, href: 'https://x.com/revoxera', label: 'X (Twitter)' },
  { icon: <GitBranch className="w-4 h-4" />, href: 'https://github.com/revoxera', label: 'GitHub' },
  { icon: <Link2 className="w-4 h-4" />, href: 'https://www.linkedin.com/in/revoxera-digital', label: 'LinkedIn' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50/90 text-slate-600" role="contentinfo">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 md:py-16">
        
        {/* Top Newsletter / Status Banner */}
        <div className="mb-12 p-6 md:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                All Edge Systems Operational &bull; 99.99% SLA
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-black text-slate-900 tracking-tight mb-1">
              Join 50,000+ Developers & Writers
            </h3>
            <p className="text-xs md:text-sm text-slate-500">
              Get weekly developer utilities, naming convention cheat sheets, and text engine releases.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Thank you! You are subscribed to Revoxera developer updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter developer email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 text-xs text-slate-900 outline-none w-full sm:w-64"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-xs hover:shadow transition-all shrink-0 flex items-center justify-center gap-1.5"
                >
                  <Send size={13} />
                  <span>Subscribe</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-emerald-500/30 bg-gradient-to-br from-emerald-500 to-teal-700 p-0.5 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <img src="/logo.png" alt="CaseConverter Logo" className="w-full h-full object-cover rounded-lg" />
              </div>
              <span className="text-lg font-black tracking-tight text-slate-900">
                Case<span className="text-emerald-600">Converter</span>
              </span>
            </Link>
            
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Professional-grade text transformation engine & edge API by Revoxera. Convert case, optimize headlines, and refactor developer naming conventions with zero server data retention.
            </p>

            <div className="flex flex-col gap-2 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 w-fit">
                <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
                <span>100% Client-Side Privacy Guarantee</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-800 w-fit">
                <Zap size={14} className="text-indigo-600 shrink-0" />
                <span>Revoxera Developer Suite</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.entries(FOOTER_SECTIONS).map(([category, links]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-slate-500 hover:text-slate-900 transition-colors inline-flex items-center gap-1.5 group"
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">{link.label}</span>
                      {link.badge && (
                        <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p>© {new Date().getFullYear()} CaseConverter by Revoxera. All rights reserved.</p>
            <Link href="/about" className="hover:text-slate-900 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-2">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-all shadow-xs hover:scale-105"
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
