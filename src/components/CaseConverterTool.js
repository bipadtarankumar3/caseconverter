'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
  Copy, Share2, Download, Trash2,
  Check, Hash, FileText, Type, Link2,
  History, X, Keyboard, ChevronLeft, ChevronRight, Undo2,
} from 'lucide-react';
import { convertText } from '@/lib/caseEngine';

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

export { convertText };

// ── Keyboard shortcut map ─────────────────────────────────────────────────────
const SHORTCUTS = [
  { keys: ['Alt', 'Shift', 'S'], mode: 'sentence', label: 'Sentence case' },
  { keys: ['Alt', 'Shift', 'T'], mode: 'title',    label: 'Title Case' },
  { keys: ['Alt', 'Shift', 'U'], mode: 'upper',    label: 'UPPER CASE' },
  { keys: ['Alt', 'Shift', 'L'], mode: 'lower',    label: 'lower case' },
  { keys: ['Alt', 'Shift', 'M'], mode: 'camel',    label: 'camelCase' },
  { keys: ['Alt', 'Shift', 'P'], mode: 'pascal',   label: 'PascalCase' },
  { keys: ['Alt', 'Shift', 'N'], mode: 'snake',    label: 'snake_case' },
  { keys: ['Alt', 'Shift', 'K'], mode: 'kebab',    label: 'kebab-case' },
];

const MAX_HISTORY = 20;
const MAX_UNDO = 30;
const HISTORY_KEY = 'cc_history';
const DRAFT_KEY = 'cc_draft';

const isEditable = (el) =>
  el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || el.isContentEditable);

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
  const [mounted, setMounted] = useState(false);
  const [undoStack, setUndoStack] = useState([]);
  const textareaRef = useRef(null);

  // Replace the text but keep the previous value so the user can undo
  // (programmatic updates wipe the browser's native Ctrl+Z history).
  const commitText = useCallback((next, prev) => {
    if (next === prev) return;
    setUndoStack((s) => [...s.slice(-(MAX_UNDO - 1)), prev]);
    setText(next);
  }, []);

  const handleUndo = () => {
    setUndoStack((s) => {
      if (!s.length) return s;
      setText(s[s.length - 1]);
      return s.slice(0, -1);
    });
  };

  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      // Run once initially
      checkScroll();
      // Handle window resize
      window.addEventListener('resize', checkScroll);
      // Run checking after a short delay to ensure rendering completes
      const t = setTimeout(checkScroll, 100);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
        clearTimeout(t);
      };
    }
  }, [checkScroll]);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Load history + parse URL params on mount
  useEffect(() => {
    setMounted(true);
    setHistory(loadHistory());

    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      // URLSearchParams already decodes; decoding again throws on any "%" in the text.
      const urlText = params.get('t');
      const urlMode = params.get('m');
      if (urlText) {
        setText(urlMode ? convertText(urlText, urlMode) : urlText);
      } else {
        try {
          const draft = localStorage.getItem(DRAFT_KEY);
          if (draft) setText(draft);
        } catch {}
      }
    }
  }, []);

  // Autosave the draft locally so returning visitors pick up where they left off.
  useEffect(() => {
    if (!mounted) return;
    const t = setTimeout(() => {
      try {
        if (text) localStorage.setItem(DRAFT_KEY, text);
        else localStorage.removeItem(DRAFT_KEY);
      } catch {}
    }, 400);
    return () => clearTimeout(t);
  }, [text, mounted]);

  // Reset copied state
  useEffect(() => {
    if (copied) { const t = setTimeout(() => setCopied(false), 2000); return () => clearTimeout(t); }
  }, [copied]);
  useEffect(() => {
    if (linkCopied) { const t = setTimeout(() => setLinkCopied(false), 2000); return () => clearTimeout(t); }
  }, [linkCopied]);

  // ── Apply conversion ─────────────────────────────────────────────────────────
  const applyConversion = useCallback((mode) => {
    if (!text) return;
    const converted = convertText(text, mode);
    commitText(converted, text);

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
  }, [text, commitText]);

  // Keyboard shortcuts — Alt+Shift+<letter>. (Ctrl+Shift+T/N/P are reserved by
  // browsers for reopen-tab / incognito / private window and can't be overridden.)
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') { setShowShortcuts(false); setShowHistory(false); return; }
      // Only treat "?" as a shortcut when the user isn't typing.
      if (e.key === '?' && !isEditable(e.target)) { setShowShortcuts(prev => !prev); return; }

      if (e.altKey && e.shiftKey && !e.ctrlKey && !e.metaKey && e.code?.startsWith('Key')) {
        const letter = e.code.slice(3);
        const shortcut = SHORTCUTS.find(s => s.keys[2] === letter);
        if (shortcut) {
          e.preventDefault();
          applyConversion(shortcut.mode);
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [applyConversion]);

  // ── Stats ────────────────────────────────────────────────────────────────────
  const stats = {
    chars: text.length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    lines: text.split('\n').filter(l => l.length > 0).length,
    sentences: text.split(/[.!?]+/).filter(s => s.trim()).length,
  };

  // ── Actions ───────────────────────────────────────────────────────────────────
  const copyToClipboard = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch {
      // Fallback for non-secure contexts / older browsers
      const ta = document.createElement('textarea');
      ta.value = value;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      return ok;
    }
  };

  const handleCopy = async () => {
    if (!text) return;
    if (await copyToClipboard(text)) setCopied(true);
  };

  const handleShareLink = async () => {
    if (!text) return;
    const url = `${window.location.origin}${window.location.pathname}?t=${encodeURIComponent(text)}`;
    if (await copyToClipboard(url)) setLinkCopied(true);
  };

  const handleDownload = () => {
    if (!text) return;
    const el = document.createElement('a');
    el.href = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
    el.download = 'converted-text.txt';
    el.click();
    setTimeout(() => URL.revokeObjectURL(el.href), 0);
  };

  const handleClear = () => commitText('', text);

  const restoreFromHistory = (entry) => {
    commitText(entry.result, text);
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
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        
        {/* Text area */}
        <div className="p-4 md:p-6 pb-3">
          <label htmlFor="text-input" className="sr-only">Enter text to convert</label>
          <textarea
            id="text-input"
            ref={textareaRef}
            placeholder="Type or paste your content here to transform it instantly..."
            className="w-full h-[180px] md:h-[220px] bg-slate-50/50 border border-slate-200 rounded-xl p-4 text-slate-900 text-base md:text-lg resize-y outline-none leading-relaxed font-normal placeholder:text-slate-400 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-3.5 sm:px-4 md:px-6 py-2.5 bg-slate-50/80 border-t border-b border-slate-200 gap-3">
          <div className="flex gap-1.5 sm:gap-2 flex-wrap items-center">
            <button suppressHydrationWarning onClick={handleCopy} title="Copy to clipboard" aria-label="Copy to clipboard"
              className="text-slate-600 p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300 transition-all shadow-xs flex items-center justify-center">
              {copied ? <Check size={18} className="text-emerald-600" /> : <Copy size={18} />}
            </button>
            <button suppressHydrationWarning onClick={handleShareLink} title="Copy shareable link" aria-label="Share link"
              className="text-slate-600 p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300 transition-all shadow-xs flex items-center justify-center">
              {linkCopied ? <Check size={18} className="text-emerald-600" /> : <Link2 size={18} />}
            </button>
            <button suppressHydrationWarning onClick={handleDownload} title="Download as .txt" aria-label="Download as text file"
              className="text-slate-600 p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300 transition-all shadow-xs flex items-center justify-center">
              <Download size={18} />
            </button>
            <button suppressHydrationWarning onClick={handleClear} title="Clear text" aria-label="Clear all text"
              className="text-slate-600 p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 hover:text-red-600 hover:border-slate-300 transition-all shadow-xs flex items-center justify-center">
              <Trash2 size={18} />
            </button>
            <button suppressHydrationWarning onClick={handleUndo} disabled={!undoStack.length} title="Undo last change" aria-label="Undo last change"
              className="text-slate-600 p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300 transition-all shadow-xs flex items-center justify-center disabled:opacity-40 disabled:pointer-events-none">
              <Undo2 size={18} />
            </button>
            <button suppressHydrationWarning onClick={() => setShowHistory(!showHistory)} title="Conversion history" aria-label="Show history"
              className={`text-slate-600 p-2 rounded-lg bg-white border transition-all shadow-xs flex items-center justify-center ${showHistory ? 'border-emerald-500 text-emerald-600 bg-emerald-50/40' : 'border-slate-200 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300'}`}>
              <History size={18} />
            </button>
            <button suppressHydrationWarning onClick={() => setShowShortcuts(!showShortcuts)} title="Keyboard shortcuts (?)" aria-label="Keyboard shortcuts"
              className={`text-slate-600 p-2 rounded-lg bg-white border transition-all shadow-xs flex items-center justify-center ${showShortcuts ? 'border-emerald-500 text-emerald-600 bg-emerald-50/40' : 'border-slate-200 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300'}`}>
              <Keyboard size={18} />
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-3 sm:gap-4 md:gap-6 text-xs text-slate-500 flex-wrap justify-between sm:justify-end w-full sm:w-auto pt-1.5 sm:pt-0 border-t sm:border-t-0 border-slate-200/60">
            <div className="flex items-center gap-1.5"><Hash size={14} /> <span><strong className="text-slate-900 text-xs sm:text-sm font-bold">{stats.chars}</strong> Chars</span></div>
            <div className="flex items-center gap-1.5"><Type size={14} /> <span><strong className="text-slate-900 text-xs sm:text-sm font-bold">{stats.words}</strong> Words</span></div>
            <div className="flex items-center gap-1.5"><span><strong className="text-slate-900 text-xs sm:text-sm font-bold">{stats.sentences}</strong> Sentences</span></div>
            <div className="flex items-center gap-1.5"><FileText size={14} /> <span><strong className="text-slate-900 text-xs sm:text-sm font-bold">{stats.lines}</strong> Lines</span></div>
          </div>
        </div>

        {/* Conversion buttons */}
        <div className="p-3 md:p-4 relative group/scroll bg-slate-50/40">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-2.5 py-1 scrollbar-premium scroll-smooth select-none"
          >
            {modesDisplay.map((btn) => (
              <button
                key={btn.id}
                suppressHydrationWarning
                onClick={() => applyConversion(btn.id)}
                aria-label={`Convert to ${btn.label}`}
                className={`shrink-0 flex items-center gap-2 px-3 py-2 rounded-xl font-semibold text-xs transition-all shadow-xs active:scale-95 border
                  ${initialMode === btn.id
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-800 shadow-xs'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900'}`}
              >
                <span className={`w-6 h-6 flex items-center justify-center rounded-lg text-[10px] uppercase font-black text-white shrink-0 bg-gradient-to-br ${btn.color} shadow-xs`}>
                  {btn.prefix}
                </span>
                <span className="leading-tight">{btn.label}</span>
              </button>
            ))}
          </div>

          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => handleScroll('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white border border-slate-200 shadow-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} />
            </button>
          )}

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => handleScroll('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white border border-slate-200 shadow-md text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight size={16} />
            </button>
          )}
        </div>
      </div>

      {/* ── History Panel ── */}
      {showHistory && (
        <div className="mt-4 bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50/60">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2"><History size={16} className="text-emerald-600" /> Conversion History</h3>
            <div className="flex gap-2">
              {history.length > 0 && (
                <button onClick={clearHistory} className="text-xs text-slate-500 hover:text-red-600 transition-colors px-2.5 py-1 rounded-lg bg-white border border-slate-200">Clear all</button>
              )}
              <button onClick={() => setShowHistory(false)} className="text-slate-500 hover:text-slate-800 transition-colors p-1"><X size={16} /></button>
            </div>
          </div>
          {history.length === 0 ? (
            <p className="text-slate-500 text-center py-6 text-xs">No conversions yet. Start converting text above.</p>
          ) : (
            <ul className="divide-y divide-slate-100 max-h-64 overflow-y-auto">
              {history.map((entry) => (
                <li key={entry.id}
                  onClick={() => restoreFromHistory(entry)}
                  className="flex items-start justify-between gap-4 p-3 hover:bg-slate-50 cursor-pointer transition-colors group">
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] text-slate-500 mb-0.5">{entry.modeLabel} · {new Date(entry.time).toLocaleTimeString()}</p>
                    <p className="text-xs text-slate-900 font-mono truncate">{entry.result}</p>
                  </div>
                  <span className="text-xs text-emerald-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5">Restore →</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* ── Keyboard Shortcuts Modal ── */}
      {showShortcuts && mounted && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs" onClick={() => setShowShortcuts(false)}>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 max-w-md w-full shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2"><Keyboard size={18} className="text-emerald-600" /> Keyboard Shortcuts</h3>
              <button onClick={() => setShowShortcuts(false)} className="text-slate-400 hover:text-slate-700 transition-colors"><X size={18} /></button>
            </div>
            <ul className="space-y-2.5">
              {SHORTCUTS.map((s) => (
                <li key={s.mode} className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-medium">{s.label}</span>
                  <div className="flex gap-1">
                    {s.keys.map((k) => (
                      <kbd key={k} className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-[11px] font-mono font-medium">{k}</kbd>
                    ))}
                  </div>
                </li>
              ))}
              <li className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                <span className="text-slate-600 font-medium">Toggle shortcuts</span>
                <kbd className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-[11px] font-mono font-medium">?</kbd>
              </li>
            </ul>
            <p className="text-[11px] text-slate-400 mt-4 text-center">Press <kbd className="px-1 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-mono">Esc</kbd> to close</p>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
