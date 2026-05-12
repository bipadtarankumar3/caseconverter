'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  Copy, Share2, Download, Trash2, Settings, Coffee, 
  CheckCircle, ShieldCheck, Zap as ZapIcon, Check, Star,
  Type, CaseUpper, CaseLower, CaseSensitive, Hash, FileText,
  Sparkles, Rocket, Layers, HelpCircle, Lock, MessageSquare, Trophy, Plus
} from 'lucide-react';

export default function CaseConverter() {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const getStats = () => {
    const chars = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const lines = text.split('\n').filter(l => l.length > 0).length;
    return { chars, words, lines };
  };

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const handleDownload = () => {
    if (!text) return;
    const element = document.createElement("a");
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "converted-text.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleClear = () => setText('');

  // Conversion functions
  const toSentenceCase = () => {
    const converted = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
    setText(converted);
  };

  const toLowerCase = () => setText(text.toLowerCase());
  const toUpperCase = () => setText(text.toUpperCase());

  const toCapitalizedCase = () => {
    const converted = text.toLowerCase().split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    setText(converted);
  };

  const toAlternatingCase = () => {
    const converted = text.split('').map((char, i) => 
      i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
    ).join('');
    setText(converted);
  };

  const toTitleCase = () => {
    const converted = text.toLowerCase().split(' ').map(word => {
      const exceptions = ['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'from', 'by', 'in', 'of'];
      if (exceptions.includes(word) && text.indexOf(word) !== 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
    setText(converted);
  };

  const toInverseCase = () => {
    const converted = text.split('').map(char => 
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    ).join('');
    setText(converted);
  };

  const stats = getStats();

  return (
    <div className="container mx-auto px-4 md:px-6 animate-fade-in max-w-[1600px]">
      <section className="text-center mb-8 md:mb-10 max-w-[1200px] mx-auto pt-10 md:pt-10">
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 leading-none bg-gradient-to-b from-white to-muted bg-clip-text text-transparent">
          Unleash the <span className="inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-2 after:bg-primary/40 after:blur-lg after:-z-10">BEAST</span> in your text.
        </h1>
        <p className="text-base md:text-xl text-muted leading-relaxed mx-auto">
          Professional-grade case conversion with a stunning glassmorphic interface.
        </p>
      </section>

      <section className="relative z-10">
        <div className="bg-glass backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-premium overflow-hidden">
          <div className="p-4 md:p-10 pb-5">
            <label htmlFor="text-input" className="sr-only">Enter text to convert</label>
            <textarea
              id="text-input"
              ref={textareaRef}
              placeholder="Type or paste your content here to transform it instantly..."
              className="w-full h-[180px] md:h-[180px] bg-transparent border-none text-white text-lg md:text-2xl resize-none outline-none leading-relaxed font-normal placeholder:text-white/20"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center p-2 md:px-10 md:py-2 bg-white/[0.02] border-t border-b border-white/10 gap-4">
            <div className="flex gap-4">
              <button suppressHydrationWarning onClick={handleCopy} className="text-muted p-2.5 rounded-xl bg-white/[0.03] border border-transparent hover:bg-white/[0.08] hover:text-primary hover:border-white/10 transition-all hover:-translate-y-0.5" title="Copy to clipboard" aria-label="Copy to clipboard">
                {copied ? <Check size={20} className="text-success" /> : <Copy size={20} />}
              </button>
              <button suppressHydrationWarning onClick={() => {}} className="text-muted p-2.5 rounded-xl bg-white/[0.03] border border-transparent hover:bg-white/[0.08] hover:text-primary hover:border-white/10 transition-all hover:-translate-y-0.5" title="Share" aria-label="Share"><Share2 size={20} /></button>
              <button suppressHydrationWarning onClick={handleDownload} className="text-muted p-2.5 rounded-xl bg-white/[0.03] border border-transparent hover:bg-white/[0.08] hover:text-primary hover:border-white/10 transition-all hover:-translate-y-0.5" title="Download as .txt" aria-label="Download as text file"><Download size={20} /></button>
              <button suppressHydrationWarning onClick={handleClear} className="text-muted p-2.5 rounded-xl bg-white/[0.03] border border-transparent hover:bg-white/[0.08] hover:text-primary hover:border-white/10 transition-all hover:-translate-y-0.5" title="Clear text" aria-label="Clear all text"><Trash2 size={20} /></button>
              <button suppressHydrationWarning onClick={() => {}} className="text-muted p-2.5 rounded-xl bg-white/[0.03] border border-transparent hover:bg-white/[0.08] hover:text-primary hover:border-white/10 transition-all hover:-translate-y-0.5" title="Settings" aria-label="Settings"><Settings size={20} /></button>
            </div>
            <div className="flex gap-4 md:gap-8 text-sm text-muted">
              <div className="flex items-center gap-2"><Hash size={16} /> <span><strong className="text-white text-lg">{stats.chars}</strong> Characters</span></div>
              <div className="flex items-center gap-2"><Type size={16} /> <span><strong className="text-white text-lg">{stats.words}</strong> Words</span></div>
              <div className="flex items-center gap-2"><FileText size={16} /> <span><strong className="text-white text-lg">{stats.lines}</strong> Lines</span></div>
            </div>
          </div>

          <div className="p-4 md:p-3 flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 w-full flex-1">
              {[
                { label: 'Sentence case', fn: toSentenceCase, color: 'from-[#f97316] to-[#fb923c]', prefix: 'Sc' },
                { label: 'lower case', fn: toLowerCase, color: 'from-[#22c55e] to-[#4ade80]', prefix: 'lc' },
                { label: 'UPPER CASE', fn: toUpperCase, color: 'from-[#06b6d4] to-[#22d3ee]', prefix: 'UC' },
                { label: 'Capitalized Case', fn: toCapitalizedCase, color: 'from-[#8b5cf6] to-[#a78bfa]', prefix: 'CC' },
                { label: 'aLtErNaTiNg cAsE', fn: toAlternatingCase, color: 'from-[#eab308] to-[#facc15]', prefix: 'aC' },
                { label: 'Title Case', fn: toTitleCase, color: 'from-[#10b981] to-[#34d399]', prefix: 'TC' },
                { label: 'iNVeRsE CaSe', fn: toInverseCase, color: 'from-[#ec4899] to-[#f472b6]', prefix: 'iC' },
              ].map((btn, i) => (
                <button 
                  key={i}
                  suppressHydrationWarning 
                  onClick={btn.fn} 
                  className="group relative overflow-hidden flex items-center justify-start gap-3 p-3 md:p-2 bg-white/[0.03] border border-white/10 rounded-2xl text-muted font-bold text-sm hover:bg-white/[0.08] hover:border-primary hover:text-white transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(56,189,248,0.3)]"
                >
                  <span className={`w-7 h-7 flex items-center justify-center rounded-lg text-[10px] uppercase font-black text-white shrink-0 bg-gradient-to-br ${btn.color}`}>{btn.prefix}</span>
                  <span>{btn.label}</span>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white/10 rounded-full group-hover:w-[300px] group-hover:h-[300px] transition-all duration-700 pointer-events-none" />
                </button>
              ))}
            </div>
{/*             
            <a href="https://buymeacoffee.com" className="flex items-center gap-3 bg-[#fcd34d] text-black px-7 py-4 rounded-[18px] font-black shadow-[0_10px_20px_-5px_rgba(252,211,77,0.3)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_15px_30px_-5px_rgba(252,211,77,0.4)] transition-all shrink-0 w-full lg:w-auto justify-center" target="_blank" rel="noopener noreferrer">
              <Coffee size={22} className="text-[#b45309]" /> Buy me a coffee
            </a> */}
          </div>
        </div>
      </section>

      <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-20">
        <article className="p-8 md:p-12 bg-white/[0.02] rounded-[32px] border border-white/10 relative overflow-hidden group hover:border-primary hover:-translate-y-2 transition-all duration-500">
          <div className="w-14 h-14 flex items-center justify-center bg-primary/10 text-primary rounded-2xl mb-8 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
            <ZapIcon size={28} />
          </div>
          <h3 className="text-2xl font-extrabold mb-5 text-white">Real-time Statistics</h3>
          <p className="text-muted text-lg leading-relaxed">Our advanced engine calculates character, word, and line counts in real-time as you type or paste.</p>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </article>
        <article className="p-8 md:p-12 bg-white/[0.02] rounded-[32px] border border-white/10 relative overflow-hidden group hover:border-primary hover:-translate-y-2 transition-all duration-500">
          <div className="w-14 h-14 flex items-center justify-center bg-primary/10 text-primary rounded-2xl mb-8 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
            <ShieldCheck size={28} />
          </div>
          <h3 className="text-2xl font-extrabold mb-5 text-white">Privacy Focused</h3>
          <p className="text-muted text-lg leading-relaxed">All processing happens locally in your browser. Your data never leaves your machine.</p>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </article>
        <article className="p-8 md:p-12 bg-white/[0.02] rounded-[32px] border border-white/10 relative overflow-hidden group hover:border-primary hover:-translate-y-2 transition-all duration-500">
          <div className="w-14 h-14 flex items-center justify-center bg-primary/10 text-primary rounded-2xl mb-8 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
            <Sparkles size={28} />
          </div>
          <h3 className="text-2xl font-extrabold mb-5 text-white">Smart Title Case</h3>
          <p className="text-muted text-lg leading-relaxed">Optimized algorithm that correctly handles minor words like 'of', 'and', and 'the'.</p>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </article>
      </section>

      <section id="testimonials" className="mt-12 md:mt-24">
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-center tracking-tighter">Trusted by Power Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 md:p-14 bg-white/[0.04] backdrop-blur-md rounded-[32px] border border-white/10 flex flex-col gap-8 relative">
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-1 text-amber-400">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <Trophy size={20} className="text-primary/60" />
            </div>
            <p className="text-xl md:text-2xl leading-relaxed text-slate-200 italic relative z-10 before:content-['“'] before:absolute before:-top-5 before:-left-5 before:text-7xl before:text-primary/30">
              "The interface is stunning. I've never seen a case converter that looks this good and works this fast."
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-accent" />
              <div>
                <h4 className="font-bold text-white">Alex Rivera</h4>
                <p className="text-sm text-muted text-nowrap">Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="p-10 md:p-14 bg-white/[0.04] backdrop-blur-md rounded-[32px] border border-white/10 flex flex-col gap-8 relative">
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-1 text-amber-400">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <MessageSquare size={20} className="text-accent/60" />
            </div>
            <p className="text-xl md:text-2xl leading-relaxed text-slate-200 italic relative z-10 before:content-['“'] before:absolute before:-top-5 before:-left-5 before:text-7xl before:text-primary/30">
              "As a copywriter, I use this daily. The Title Case tool is the most accurate I've found online."
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 to-violet-600" />
              <div>
                <h4 className="font-bold text-white">Sarah Jenkins</h4>
                <p className="text-sm text-muted text-nowrap">Content Strategist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="pricing" className="mt-12 md:mt-24">
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-center tracking-tighter">Flexible Plans for Every User</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
          <div className="p-12 md:p-16 bg-slate-900/50 rounded-[40px] border border-white/10 hover:border-primary transition-all duration-500 group">
            <Layers className="text-primary w-14 h-14 mb-8 group-hover:scale-110 transition-transform" />
            <h3 className="text-3xl font-bold mb-4">Community</h3>
            <div className="text-5xl font-black mb-8">$0<span className="text-xl text-muted font-normal ml-2">/forever</span></div>
            <ul className="space-y-4 mb-10 text-muted">
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-success" /> 7+ Case Transformations</li>
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-success" /> Real-time Statistics</li>
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-success" /> Local Browser Processing</li>
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-success" /> Ad-free Experience</li>
            </ul>
            <button suppressHydrationWarning className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-bold">Get Started</button>
          </div>
          <div className="p-12 md:p-16 bg-gradient-to-br from-primary/10 to-slate-900/80 rounded-[40px] border border-primary shadow-[0_30px_60px_-20px_rgba(56,189,248,0.2)] scale-105 relative z-20 group">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase">BEST VALUE</div>
            <Rocket className="text-white w-14 h-14 mb-8 group-hover:scale-110 transition-transform" />
            <h3 className="text-3xl font-bold mb-4">Beast Pro</h3>
            <div className="text-5xl font-black mb-8">$9<span className="text-xl text-muted font-normal ml-2">/month</span></div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-slate-200"><CheckCircle size={18} className="text-primary" /> <strong>Unlimited</strong> Transformations</li>
              <li className="flex items-center gap-3 text-slate-200"><CheckCircle size={18} className="text-primary" /> <strong>API</strong> Access Integration</li>
              <li className="flex items-center gap-3 text-slate-200"><CheckCircle size={18} className="text-primary" /> <strong>Custom</strong> Case Profiles</li>
              <li className="flex items-center gap-3 text-slate-200"><CheckCircle size={18} className="text-primary" /> Priority Support</li>
            </ul>
            <button suppressHydrationWarning className="w-full py-4 rounded-2xl bg-primary hover:bg-primary/90 transition-all font-black text-slate-950 shadow-lg shadow-primary/20">Unlock Beast Mode</button>
          </div>
        </div>
      </section> */}

      <section id="newsletter" className="mt-12 md:mt-24 p-8 md:p-24 bg-gradient-to-br from-accent/5 via-primary/5 to-transparent rounded-[60px] border border-white/10 text-center relative overflow-hidden">
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Join the Beast Community</h2>
        <p className="text-muted text-xl mb-12 max-w-2xl mx-auto">Get notified about new features, power-user tips, and text transformation guides.</p>
        <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input suppressHydrationWarning type="email" placeholder="Enter your email" className="flex-1 bg-white/[0.03] border border-white/10 px-8 py-4 rounded-2xl outline-none focus:border-primary focus:bg-white/[0.06] transition-all" required />
          <button suppressHydrationWarning type="submit" className="bg-primary hover:bg-primary/90 text-slate-950 px-10 py-4 rounded-2xl font-black transition-all shadow-lg shadow-primary/20">Subscribe</button>
        </form>
      </section>

      <section id="how-it-works" className="mt-12 md:mt-24">
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-center tracking-tighter">How to Use CaseBeast</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <div className="text-5xl font-black text-white/10">01</div>
            <h4 className="text-2xl font-bold">Input Your Text</h4>
            <p className="text-muted leading-relaxed">Simply type or paste the text you want to transform into the main editor area above. No size limits.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-5xl font-black text-white/10">02</div>
            <h4 className="text-2xl font-bold">Choose Your Transformation</h4>
            <p className="text-muted leading-relaxed">Click on one of the seven case conversion buttons. Your text will instantly change format locally.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-5xl font-black text-white/10">03</div>
            <h4 className="text-2xl font-bold">Export and Use</h4>
            <p className="text-muted leading-relaxed">Use the copy button to send the result to your clipboard or download it as a clean text file.</p>
          </div>
        </div>
      </section>

      <section id="faq" className="mt-12 md:mt-24 pb-20">
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-center tracking-tighter">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <details className="group bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden transition-all">
            <summary className="flex items-center gap-4 p-6 font-bold text-lg cursor-pointer hover:bg-white/[0.03] transition-all list-none">
              <HelpCircle size={20} className="text-primary" />
              <span>What is Sentence Case?</span>
              <Plus className="ml-auto group-open:rotate-45 transition-transform" />
            </summary>
            <div className="p-6 pt-0 text-muted leading-relaxed border-t border-white/5 mt-4">
              Sentence case capitalizes the first letter of every sentence and converts the rest to lowercase. It follows standard grammatical rules for professional writing.
            </div>
          </details>
          <details className="group bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden transition-all">
            <summary className="flex items-center gap-4 p-6 font-bold text-lg cursor-pointer hover:bg-white/[0.03] transition-all list-none">
              <Lock size={20} className="text-primary" />
              <span>How secure is my data?</span>
              <Plus className="ml-auto group-open:rotate-45 transition-transform" />
            </summary>
            <div className="p-6 pt-0 text-muted leading-relaxed border-t border-white/5 mt-4">
              We prioritize your security. All transformations happen locally in your browser session using JavaScript. No text is ever uploaded to our servers, ensuring 100% data privacy.
            </div>
          </details>
        </div>
      </section>
    </div>
  );
}
