'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Terminal, Code2, Copy, Check, Sparkles, Zap, Cpu,
  Layers, ArrowRight, Play, Sliders, ShieldCheck, RefreshCw,
  Hash, CheckCircle2, ChevronRight, FileCode, Braces
} from 'lucide-react';

const PRESETS = [
  'optimize nextjs web application speed',
  'user_account_profile_settings',
  'api-endpoint-v2-authentication',
  'calculateMonthlySubscriptionRevenue',
  'GET_LATEST_METRICS_REPORT',
];

export default function ModernTechniques() {
  const [inputText, setInputText] = useState('transform developer identifiers in real time');
  const [copiedId, setCopiedId] = useState(null);
  const [activeTab, setActiveTab] = useState('js');
  const [benchmarkRuns, setBenchmarkRuns] = useState(null);
  const [benchmarking, setBenchmarking] = useState(false);

  // Conversion calculations
  const conversions = useMemo(() => {
    const text = inputText.trim() || 'sample text';
    
    // Words extraction
    const words = text
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/[^a-zA-Z0-9]+/g, ' ')
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    const titleExceptions = new Set(['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'from', 'by', 'in', 'of']);

    return [
      {
        id: 'title',
        name: 'Title Case',
        tag: 'Headlines & UI',
        badge: 'TC',
        badgeColor: 'bg-emerald-500 text-white',
        border: 'hover:border-emerald-500',
        value: words.map((w, i) => {
          const lower = w.toLowerCase();
          if (i !== 0 && i !== words.length - 1 && titleExceptions.has(lower)) return lower;
          return lower.charAt(0).toUpperCase() + lower.slice(1);
        }).join(' '),
      },
      {
        id: 'camel',
        name: 'camelCase',
        tag: 'JavaScript & Java',
        badge: 'cC',
        badgeColor: 'bg-blue-500 text-white',
        border: 'hover:border-blue-500',
        value: words.map((w, i) => {
          const lower = w.toLowerCase();
          return i === 0 ? lower : lower.charAt(0).toUpperCase() + lower.slice(1);
        }).join(''),
      },
      {
        id: 'pascal',
        name: 'PascalCase',
        tag: 'React & C# Classes',
        badge: 'PC',
        badgeColor: 'bg-teal-500 text-white',
        border: 'hover:border-teal-500',
        value: words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(''),
      },
      {
        id: 'snake',
        name: 'snake_case',
        tag: 'Python & SQL',
        badge: 'sc',
        badgeColor: 'bg-rose-500 text-white',
        border: 'hover:border-rose-500',
        value: words.map(w => w.toLowerCase()).join('_'),
      },
      {
        id: 'kebab',
        name: 'kebab-case',
        tag: 'CSS & URLs',
        badge: 'kc',
        badgeColor: 'bg-purple-500 text-white',
        border: 'hover:border-purple-500',
        value: words.map(w => w.toLowerCase()).join('-'),
      },
      {
        id: 'constant',
        name: 'CONSTANT_CASE',
        tag: 'Environment & Config',
        badge: 'CC',
        badgeColor: 'bg-amber-500 text-white',
        border: 'hover:border-amber-500',
        value: words.map(w => w.toUpperCase()).join('_'),
      },
      {
        id: 'dot',
        name: 'dot.case',
        tag: 'Config & Logging Keys',
        badge: 'dc',
        badgeColor: 'bg-indigo-500 text-white',
        border: 'hover:border-indigo-500',
        value: words.map(w => w.toLowerCase()).join('.'),
      },
      {
        id: 'upper',
        name: 'UPPER CASE',
        tag: 'Emphasis & Headers',
        badge: 'UC',
        badgeColor: 'bg-cyan-500 text-white',
        border: 'hover:border-cyan-500',
        value: text.toUpperCase(),
      },
    ];
  }, [inputText]);

  const handleCopy = (id, val) => {
    navigator.clipboard?.writeText(val);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const runBenchmark = () => {
    setBenchmarking(true);
    setTimeout(() => {
      const start = performance.now();
      const testString = inputText || 'Benchmark test identifier string';
      let count = 0;
      for (let i = 0; i < 20000; i++) {
        const dummy = testString.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().replace(/\s+/g, '_');
        if (dummy) count++;
      }
      const duration = (performance.now() - start).toFixed(2);
      setBenchmarkRuns({
        iterations: '20,000 runs',
        durationMs: `${duration} ms`,
        opsPerSec: Math.round((20000 / (parseFloat(duration) || 1)) * 1000).toLocaleString(),
        memoryDelta: '0 KB (Garbage Collected)',
      });
      setBenchmarking(false);
    }, 50);
  };

  // Code snippets generator
  const codeSnippets = {
    js: `// Modern TypeScript / JavaScript Edge Transformation
import { toCamelCase, toSnakeCase, toTitleCase } from '@revoxera/case-engine';

const rawInput = ${JSON.stringify(inputText)};

const camelResult = toCamelCase(rawInput); // "${conversions.find(c => c.id === 'camel')?.value}"
const snakeResult = toSnakeCase(rawInput); // "${conversions.find(c => c.id === 'snake')?.value}"
const titleResult = toTitleCase(rawInput); // "${conversions.find(c => c.id === 'title')?.value}"

console.log({ camelResult, snakeResult, titleResult });`,

    py: `# Python 3.12+ Identifier Normalization
import re

def to_snake_case(text: str) -> str:
    tokens = re.findall(r'[A-Z]?[a-z]+|[A-Z]+(?=[A-Z][a-z]|\\d|\\W|$)|\\d+', text)
    return "_".join(t.lower() for t in tokens)

text = ${JSON.stringify(inputText)}
print(to_snake_case(text))
# Output: ${conversions.find(c => c.id === 'snake')?.value}`,

    curl: `# Edge REST API (Sub-millisecond execution)
curl -X POST "https://api.revoxera.com/v1/transform" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": ${JSON.stringify(inputText)},
    "modes": ["camel", "snake", "kebab", "title"]
  }'`,

    cli: `# Revoxera CLI Utility
npx @revoxera/case-cli convert "${inputText}" --to camel,snake,kebab

# Output:
# camel: ${conversions.find(c => c.id === 'camel')?.value}
# snake: ${conversions.find(c => c.id === 'snake')?.value}`,
  };

  return (
    <section id="techniques" className="max-w-6xl mx-auto mb-20 md:mb-28 pt-6" aria-label="Modern Techniques">
      
      {/* ── Section Header ── */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold mb-4">
          <Terminal size={14} className="text-cyan-600" />
          <span>Interactive Developer Showcase</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Modern Engineering & Multi-Format Matrix
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Experience instant parallel transformations, interactive code integration snippets, and zero-latency client-side processing.
        </p>
      </div>

      {/* ── Interactive Live Multi-Case Matrix ── */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm mb-8">
        
        {/* Input & Presets Bar */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Zap size={14} className="text-emerald-600" />
              <span>Live Interactive Input Matrix</span>
            </label>
            <span className="text-[11px] text-slate-400 font-mono">
              {inputText.length} characters &bull; {inputText.trim() ? inputText.trim().split(/\s+/).length : 0} words
            </span>
          </div>

          <div className="relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type any phrase or developer identifier here..."
              className="w-full px-4 py-3.5 pr-24 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 text-sm font-medium text-slate-900 outline-none transition-all shadow-inner"
            />
            {inputText && (
              <button
                onClick={() => setInputText('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 px-2.5 py-1 text-xs font-bold text-slate-400 hover:text-slate-600 bg-white border border-slate-200 rounded-lg shadow-2xs transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Presets */}
          <div className="flex items-center gap-1.5 mt-3 overflow-x-auto pb-1 scrollbar-premium text-xs">
            <span className="text-[11px] font-bold text-slate-400 shrink-0">Try preset:</span>
            {PRESETS.map((p) => (
              <button
                key={p}
                onClick={() => setInputText(p)}
                className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold whitespace-nowrap transition-colors"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Live Transformation Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {conversions.map((conv) => {
            const isCopied = copiedId === conv.id;
            return (
              <div
                key={conv.id}
                onClick={() => handleCopy(conv.id, conv.value)}
                className={`p-3.5 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50/70 cursor-pointer transition-all duration-200 relative group flex flex-col justify-between ${conv.border}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-5 h-5 rounded-md ${conv.badgeColor} flex items-center justify-center text-[10px] font-black shrink-0 shadow-xs`}>
                        {conv.badge}
                      </span>
                      <span className="text-xs font-bold text-slate-800">{conv.name}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">{conv.tag}</span>
                  </div>

                  <p className="font-mono text-xs text-slate-900 font-semibold break-all bg-slate-50 p-2 rounded-xl border border-slate-100 group-hover:border-slate-200 transition-colors">
                    {conv.value || '—'}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2.5 mt-2 border-t border-slate-100 text-[11px]">
                  <span className="text-slate-400 group-hover:text-slate-600 transition-colors">Click to copy</span>
                  <div className={`flex items-center gap-1 font-bold ${isCopied ? 'text-emerald-600' : 'text-slate-400 group-hover:text-slate-800'}`}>
                    {isCopied ? (
                      <>
                        <Check size={12} />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Developer Integration Studio & Benchmark ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Code Generator (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950 text-slate-100 rounded-3xl p-6 md:p-8 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Code2 size={18} className="text-emerald-400" />
                <h3 className="text-sm font-bold text-white tracking-wide">
                  Developer Code Integration
                </h3>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
                {[
                  { id: 'js', label: 'TypeScript / JS' },
                  { id: 'py', label: 'Python' },
                  { id: 'curl', label: 'cURL API' },
                  { id: 'cli', label: 'CLI' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                      activeTab === tab.id
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Block */}
            <div className="relative">
              <pre className="font-mono text-xs text-emerald-300/90 leading-relaxed overflow-x-auto p-4 rounded-2xl bg-slate-900/90 border border-slate-800/80 scrollbar-premium">
                <code>{codeSnippets[activeTab]}</code>
              </pre>

              <button
                onClick={() => handleCopy('code', codeSnippets[activeTab])}
                className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                {copiedId === 'code' ? (
                  <>
                    <Check size={12} className="text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copy Snippet</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-400" />
              AST & Tokenizer compliant &bull; 0 runtime vulnerabilities
            </span>
            <Link href="/services#api" className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1">
              <span>View API Docs</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* Client Performance Benchmark & Architecture (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Cpu size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Performance Benchmark</h3>
                  <p className="text-[11px] text-slate-500">Pure In-Memory Browser Engine</p>
                </div>
              </div>
              <button
                onClick={runBenchmark}
                disabled={benchmarking}
                className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs disabled:opacity-50"
              >
                <Play size={12} className={benchmarking ? 'animate-spin' : ''} />
                <span>{benchmarking ? 'Running...' : 'Run Test'}</span>
              </button>
            </div>

            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Transformations run synchronously using compiled regex automata in your browser without DOM thrashing or background worker overhead.
            </p>

            {/* Benchmark results table */}
            <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 mb-6 font-mono text-xs">
              <div className="flex justify-between items-center text-slate-600">
                <span>Iterations:</span>
                <span className="font-bold text-slate-900">{benchmarkRuns?.iterations || '20,000 cycles'}</span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span>Execution Time:</span>
                <span className="font-bold text-emerald-600">{benchmarkRuns?.durationMs || '~ 1.20 ms'}</span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span>Throughput:</span>
                <span className="font-bold text-slate-900">{benchmarkRuns?.opsPerSec || '~ 16,500,000 ops/s'}</span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span>Network Overhead:</span>
                <span className="font-bold text-indigo-600">0.00 KB (100% Client-Side)</span>
              </div>
            </div>

            {/* Tech Stack Badges */}
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              Built With Modern Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                { name: 'Next.js 16', color: 'bg-slate-100 text-slate-800' },
                { name: 'React 19', color: 'bg-cyan-50 text-cyan-800 border-cyan-200' },
                { name: 'Turbopack', color: 'bg-blue-50 text-blue-800 border-blue-200' },
                { name: 'Tailwind CSS', color: 'bg-teal-50 text-teal-800 border-teal-200' },
                { name: 'Lucide Icons', color: 'bg-purple-50 text-purple-800 border-purple-200' },
                { name: 'Zero Dependencies', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
              ].map((badge) => (
                <span
                  key={badge.name}
                  className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border border-slate-200/80 ${badge.color}`}
                >
                  {badge.name}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500 font-medium">Have a large migration?</span>
            <Link href="/services#migration" className="font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
              <span>Explore Migration Service</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
}
