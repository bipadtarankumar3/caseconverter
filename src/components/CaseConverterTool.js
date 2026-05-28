'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import {
  Copy, Share2, Download, Trash2,
  Check, Hash, FileText, Type, Link2,
  History, X, Keyboard, ChevronDown,
} from 'lucide-react';
import Link from 'next/link';

// All conversion modes
export const CONVERSION_MODES = [
  { id: 'sentence',    label: 'Sentence case',     prefix: 'Sc', color: 'from-[#f97316] to-[#fb923c]' },
  { id: 'lower',       label: 'lower case',         prefix: 'lc', color: 'from-[#22c55e] to-[#4ade80]' },
  { id: 'upper',       label: 'UPPER CASE',         prefix: 'UC', color: 'from-[#06b6d4] to-[#22d3ee]' },
  { id: 'capitalized', label: 'Capitalized Case',   prefix: 'CC', color: 'from-[#8b5cf6] to-[#a78bfa]' },
  { id: 'alternating', label: 'aLtErNaTiNg cAsE',  prefix: 'aC', color: 'from-[#eab308] to-[#facc15]' },
  { id: 'title',       label: 'Title Case',         prefix: 'TC', color: 'from-[#10b981] to-[#34d399]' },
  { id: 'inverse',     label: 'iNVeRsE CaSe',       prefix: 'iC', color: 'from-[#ec4899] to-[#f472b6]' },
  { id: 'camel',       label: 'camelCase',          prefix: 'cC', color: 'from-[#3b82f6] to-[#60a5fa]' },
  { id: 'pascal',      label: 'PascalCase',         prefix: 'PC', color: 'from-[#14b8a6] to-[#2dd4bf]' },
  { id: 'snake',       label: 'snake_case',         prefix: 'sc', color: 'from-[#f43f5e] to-[#fb7185]' },
  { id: 'kebab',       label: 'kebab-case',         prefix: 'kc', color: 'from-[#a855f7] to-[#c084fc]' },
];

// ── Conversion logic ──────────────────────────────────────────────────────────
function convertText(text, mode) {
  if (!text) return text;
  const TITLE_EXCEPTIONS = new Set(['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'from', 'by', 'in', 'of', 'as', 'up']);

  switch (mode) {
    case 'sentence':
      return text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
    case 'lower':
      return text.toLowerCase();
    case 'upper':
      return text.toUpperCase();
    case 'capitalized':
      return text.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    case 'alternating':
      return text.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join('');
    case 'title': {
      const words = text.toLowerCase().split(' ');
      return words.map((word, i) => {
        if (i !== 0 && i !== words.length - 1 && TITLE_EXCEPTIONS.has(word)) return word;
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    }
    case 'inverse':
      return text.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
    case 'camel': {
      return text.replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
        .replace(/^[A-Z]/, c => c.toLowerCase())
        .replace(/[^a-zA-Z0-9]/g, '');
    }
    case 'pascal': {
      return text.replace(/(?:^|\s+|[^a-zA-Z0-9]+)(.)/g, (_, chr) => chr.toUpperCase())
        .replace(/[^a-zA-Z0-9]/g, '');
    }
    case 'snake':
      return text.trim().replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '').toLowerCase();
    case 'kebab':
      return text.trim().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();
    default:
      return text;
  }
}

// ── Keyboard shortcut map ─────────────────────────────────────────────────────
const SHORTCUTS = [
  { keys: ['Ctrl', 'Shift', 'S'], mode: 'sentence', label: 'Sentence case' },
  { keys: ['Ctrl', 'Shift', 'T'], mode: 'title',    label: 'Title Case' },
  { keys: ['Ctrl', 'Shift', 'U'], mode: 'upper',    label: 'UPPER CASE' },
  { keys: ['Ctrl', 'Shift', 'L'], mode: 'lower',    label: 'lower case' },
  { keys: ['Ctrl', 'Shift', 'M'], mode: 'camel',    label: 'camelCase' },
  { keys: ['Ctrl', 'Shift', 'P'], mode: 'pascal',   label: 'PascalCase' },
  { keys: ['Ctrl', 'Shift', 'N'], mode: 'snake',    label: 'snake_case' },
  { keys: ['Ctrl', 'Shift', 'K'], mode: 'kebab',    label: 'kebab-case' },
];

const MAX_HISTORY = 20;
const HISTORY_KEY = 'cc_history';

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  } catch { return []; }
}

function saveHistory(entries) {
  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(entries)); } catch {}
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function CaseConverterTool({ initialMode = null, compact = false }) {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [history, setHistory] = useState([]);
  const textareaRef = useRef(null);

  // Load history + parse URL params on mount
  useEffect(() => {
    setHistory(loadHistory());

    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlText = params.get('t');
      const urlMode = params.get('m');
      if (urlText) {
        const decoded = decodeURIComponent(urlText);
        const result = urlMode ? convertText(decoded, urlMode) : decoded;
        setText(result);
      }
    }
  }, []);

  // Reset copied state
  useEffect(() => {
    if (copied) { const t = setTimeout(() => setCopied(false), 2000); return () => clearTimeout(t); }
  }, [copied]);
  useEffect(() => {
    if (linkCopied) { const t = setTimeout(() => setLinkCopied(false), 2000); return () => clearTimeout(t); }
  }, [linkCopied]);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e) => {
      if (e.key === '?') { setShowShortcuts(prev => !prev); return; }
      if (e.key === 'Escape') { setShowShortcuts(false); setShowHistory(false); return; }

      if (e.ctrlKey && e.shiftKey) {
        const shortcut = SHORTCUTS.find(s => s.keys[2].toLowerCase() === e.key.toLowerCase());
        if (shortcut) {
          e.preventDefault();
          applyConversion(shortcut.mode);
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [text]);

  // ── Stats ────────────────────────────────────────────────────────────────────
  const stats = {
    chars: text.length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    lines: text.split('\n').filter(l => l.length > 0).length,
    sentences: text.split(/[.!?]+/).filter(s => s.trim()).length,
  };

  // ── Apply conversion ─────────────────────────────────────────────────────────
  const applyConversion = useCallback((mode) => {
    if (!text) return;
    const converted = convertText(text, mode);
    setText(converted);

    // Save to history
    const entry = {
      id: Date.now(),
      original: text.slice(0, 120),
      result: converted.slice(0, 120),
      mode,
      modeLabel: CONVERSION_MODES.find(m => m.id === mode)?.label || mode,
      time: new Date().toISOString(),
    };
    const updated = [entry, ...loadHistory()].slice(0, MAX_HISTORY);
    setHistory(updated);
    saveHistory(updated);
  }, [text]);

  // ── Actions ───────────────────────────────────────────────────────────────────
  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const handleShareLink = () => {
    if (!text) return;
    const url = `${window.location.origin}${window.location.pathname}?t=${encodeURIComponent(text)}`;
    navigator.clipboard.writeText(url);
    setLinkCopied(true);
  };

  const handleDownload = () => {
    if (!text) return;
    const el = document.createElement('a');
    el.href = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
    el.download = 'converted-text.txt';
    el.click();
  };

  const handleClear = () => setText('');

  const restoreFromHistory = (entry) => {
    setText(entry.result);
    setShowHistory(false);
  };

  const clearHistory = () => {
    setHistory([]);
    saveHistory([]);
  };

  const modesDisplay = initialMode
    ? CONVERSION_MODES.filter(m => m.id === initialMode || true) // show all, highlight preferred
    : CONVERSION_MODES;

  return (
    <div className="relative">
      {/* ── Main Card ── */}
      <div className="bg-glass backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-premium overflow-hidden">
        
        {/* Text area */}
        <div className="p-4 md:p-10 pb-5">
          <label htmlFor="text-input" className="sr-only">Enter text to convert</label>
          <textarea
            id="text-input"
            ref={textareaRef}
            placeholder="Type or paste your content here to transform it instantly..."
            className="w-full h-[180px] bg-transparent border-none text-white text-lg md:text-2xl resize-none outline-none leading-relaxed font-normal placeholder:text-white/20"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center p-2 md:px-10 md:py-2 bg-white/[0.02] border-t border-b border-white/10 gap-4">
          <div className="flex gap-2 flex-wrap">
            <button suppressHydrationWarning onClick={handleCopy} title="Copy (Ctrl+Enter)" aria-label="Copy to clipboard"
              className="text-muted p-2.5 rounded-xl bg-white/[0.03] border border-transparent hover:bg-white/[0.08] hover:text-primary hover:border-white/10 transition-all hover:-translate-y-0.5">
              {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
            </button>
            <button suppressHydrationWarning onClick={handleShareLink} title="Copy shareable link" aria-label="Share link"
              className="text-muted p-2.5 rounded-xl bg-white/[0.03] border border-transparent hover:bg-white/[0.08] hover:text-primary hover:border-white/10 transition-all hover:-translate-y-0.5">
              {linkCopied ? <Check size={20} className="text-green-400" /> : <Link2 size={20} />}
            </button>
            <button suppressHydrationWarning onClick={handleDownload} title="Download as .txt" aria-label="Download as text file"
              className="text-muted p-2.5 rounded-xl bg-white/[0.03] border border-transparent hover:bg-white/[0.08] hover:text-primary hover:border-white/10 transition-all hover:-translate-y-0.5">
              <Download size={20} />
            </button>
            <button suppressHydrationWarning onClick={handleClear} title="Clear text" aria-label="Clear all text"
              className="text-muted p-2.5 rounded-xl bg-white/[0.03] border border-transparent hover:bg-white/[0.08] hover:text-primary hover:border-white/10 transition-all hover:-translate-y-0.5">
              <Trash2 size={20} />
            </button>
            <button suppressHydrationWarning onClick={() => setShowHistory(!showHistory)} title="Conversion history" aria-label="Show history"
              className={`text-muted p-2.5 rounded-xl bg-white/[0.03] border border-transparent hover:bg-white/[0.08] hover:text-primary hover:border-white/10 transition-all hover:-translate-y-0.5 ${showHistory ? 'border-white/10 text-primary' : ''}`}>
              <History size={20} />
            </button>
            <button suppressHydrationWarning onClick={() => setShowShortcuts(!showShortcuts)} title="Keyboard shortcuts (?)" aria-label="Keyboard shortcuts"
              className={`text-muted p-2.5 rounded-xl bg-white/[0.03] border border-transparent hover:bg-white/[0.08] hover:text-primary hover:border-white/10 transition-all hover:-translate-y-0.5 ${showShortcuts ? 'border-white/10 text-primary' : ''}`}>
              <Keyboard size={20} />
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-4 md:gap-8 text-sm text-muted">
            <div className="flex items-center gap-2"><Hash size={16} /> <span><strong className="text-white text-lg">{stats.chars}</strong> Chars</span></div>
            <div className="flex items-center gap-2"><Type size={16} /> <span><strong className="text-white text-lg">{stats.words}</strong> Words</span></div>
            <div className="flex items-center gap-2"><FileText size={16} /> <span><strong className="text-white text-lg">{stats.lines}</strong> Lines</span></div>
          </div>
        </div>

        {/* Conversion buttons */}
        <div className="p-4 md:p-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-11 gap-3">
            {modesDisplay.map((btn) => (
              <button
                key={btn.id}
                suppressHydrationWarning
                onClick={() => applyConversion(btn.id)}
                aria-label={`Convert to ${btn.label}`}
                className={`group relative overflow-hidden flex items-center justify-start gap-2.5 p-3 bg-white/[0.03] border rounded-2xl text-muted font-bold text-sm hover:bg-white/[0.08] hover:text-white transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(56,189,248,0.3)]
                  ${initialMode === btn.id ? 'border-primary/50 bg-white/[0.06] text-white' : 'border-white/10 hover:border-primary'}`}
              >
                <span className={`w-7 h-7 flex items-center justify-center rounded-lg text-[10px] uppercase font-black text-white shrink-0 bg-gradient-to-br ${btn.color}`}>
                  {btn.prefix}
                </span>
                <span className="text-xs leading-tight">{btn.label}</span>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white/10 rounded-full group-hover:w-[300px] group-hover:h-[300px] transition-all duration-700 pointer-events-none" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── History Panel ── */}
      {showHistory && (
        <div className="mt-4 bg-glass backdrop-blur-2xl border border-white/10 rounded-[24px] overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <h3 className="font-bold text-white flex items-center gap-2"><History size={18} className="text-primary" /> Conversion History</h3>
            <div className="flex gap-2">
              {history.length > 0 && (
                <button onClick={clearHistory} className="text-xs text-muted hover:text-red-400 transition-colors px-3 py-1 rounded-lg bg-white/[0.03]">Clear all</button>
              )}
              <button onClick={() => setShowHistory(false)} className="text-muted hover:text-white transition-colors p-1"><X size={18} /></button>
            </div>
          </div>
          {history.length === 0 ? (
            <p className="text-muted text-center py-8 text-sm">No conversions yet. Start converting text above.</p>
          ) : (
            <ul className="divide-y divide-white/5 max-h-72 overflow-y-auto">
              {history.map((entry) => (
                <li key={entry.id}
                  onClick={() => restoreFromHistory(entry)}
                  className="flex items-start justify-between gap-4 p-4 hover:bg-white/[0.03] cursor-pointer transition-colors group">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-muted mb-1">{entry.modeLabel} · {new Date(entry.time).toLocaleTimeString()}</p>
                    <p className="text-sm text-white truncate">{entry.result}</p>
                  </div>
                  <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1">Restore →</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* ── Keyboard Shortcuts Modal ── */}
      {showShortcuts && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowShortcuts(false)}>
          <div className="bg-[#0a0a14] border border-white/10 rounded-[28px] p-8 max-w-md w-full shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-black text-white text-xl flex items-center gap-2"><Keyboard size={20} className="text-primary" /> Keyboard Shortcuts</h3>
              <button onClick={() => setShowShortcuts(false)} className="text-muted hover:text-white transition-colors"><X size={20} /></button>
            </div>
            <ul className="space-y-3">
              {SHORTCUTS.map((s) => (
                <li key={s.mode} className="flex items-center justify-between">
                  <span className="text-muted text-sm">{s.label}</span>
                  <div className="flex gap-1">
                    {s.keys.map((k) => (
                      <kbd key={k} className="px-2 py-1 rounded-lg bg-white/10 border border-white/10 text-white text-xs font-mono">{k}</kbd>
                    ))}
                  </div>
                </li>
              ))}
              <li className="flex items-center justify-between pt-2 border-t border-white/10">
                <span className="text-muted text-sm">Toggle shortcuts</span>
                <kbd className="px-2 py-1 rounded-lg bg-white/10 border border-white/10 text-white text-xs font-mono">?</kbd>
              </li>
            </ul>
            <p className="text-xs text-muted mt-6 text-center">Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[10px] font-mono">Esc</kbd> to close</p>
          </div>
        </div>
      )}
    </div>
  );
}
