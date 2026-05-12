'use client';

import { useState, useRef } from 'react';
import { 
  Copy, Share2, Download, Trash2, Settings, Coffee, 
  CheckCircle, ShieldCheck, Zap as ZapIcon, Check, Star 
} from 'lucide-react';

export default function CaseConverter() {
  const [text, setText] = useState('');
  const textareaRef = useRef(null);

  const getStats = () => {
    const chars = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const lines = text.split('\n').filter(l => l.length > 0).length;
    return { chars, words, lines };
  };

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
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
    <div className="container animate-fade-in">
      <section className="hero-section">
        <h1 className="hero-title">
          Unleash the <span className="hero-title-highlight">BEAST</span> in your text.
        </h1>
        <p className="hero-subtitle">
          Professional-grade case conversion with a stunning glassmorphic interface. 
          The most reliable online tool for changing text case effortlessly.
        </p>
      </section>

      <section className="converter-section">
        <div className="converter-card">
          <div className="textarea-container">
            <label htmlFor="text-input" className="sr-only">Enter text to convert</label>
            <textarea
              id="text-input"
              ref={textareaRef}
              placeholder="Type or paste your content here to transform it instantly..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="toolbar">
            <div className="action-icons">
              <button onClick={handleCopy} title="Copy to clipboard" aria-label="Copy to clipboard"><Copy size={20} /></button>
              <button onClick={() => {}} title="Share" aria-label="Share"><Share2 size={20} /></button>
              <button onClick={handleDownload} title="Download as .txt" aria-label="Download as text file"><Download size={20} /></button>
              <button onClick={handleClear} title="Clear text" aria-label="Clear all text"><Trash2 size={20} /></button>
              <button onClick={() => {}} title="Settings" aria-label="Settings"><Settings size={20} /></button>
            </div>
            <div className="stats">
              <span><strong>{stats.chars}</strong> Characters</span>
              <span><strong>{stats.words}</strong> Words</span>
              <span><strong>{stats.lines}</strong> Lines</span>
            </div>
          </div>

          <div className="converter-actions">
            <div className="case-buttons">
              <button onClick={toSentenceCase} className="case-btn" aria-label="Convert to Sentence case">
                <span className="btn-prefix sc">Sc</span> Sentence case
              </button>
              <button onClick={toLowerCase} className="case-btn" aria-label="Convert to lower case">
                <span className="btn-prefix lc">lc</span> lower case
              </button>
              <button onClick={toUpperCase} className="case-btn" aria-label="Convert to UPPER CASE">
                <span className="btn-prefix uc">UC</span> UPPER CASE
              </button>
              <button onClick={toCapitalizedCase} className="case-btn" aria-label="Convert to Capitalized Case">
                <span className="btn-prefix cc">CC</span> Capitalized Case
              </button>
              <button onClick={toAlternatingCase} className="case-btn" aria-label="Convert to aLtErNaTiNg cAsE">
                <span className="btn-prefix ac">aC</span> aLtErNaTiNg cAsE
              </button>
              <button onClick={toTitleCase} className="case-btn" aria-label="Convert to Title Case">
                <span className="btn-prefix tc">TC</span> Title Case
              </button>
              <button onClick={toInverseCase} className="case-btn" aria-label="Convert to iNVeRsE CaSe">
                <span className="btn-prefix ic">iC</span> iNVeRsE CaSe
              </button>
            </div>
            
            <a href="https://buymeacoffee.com" className="coffee-btn" target="_blank" rel="noopener noreferrer" aria-label="Support us by buying a coffee">
              <Coffee size={20} className="coffee-icon" /> Buy me a coffee
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="features-grid">
        <article className="feature-card">
          <ZapIcon className="feature-icon" size={24} />
          <h3 className="feature-title">Real-time Statistics</h3>
          <p className="feature-description">Our advanced engine calculates character, word, and line counts in real-time as you type or paste.</p>
        </article>
        <article className="feature-card">
          <ShieldCheck className="feature-icon" size={24} />
          <h3 className="feature-title">Privacy Focused</h3>
          <p className="feature-description">All processing happens locally in your browser. Your data never leaves your machine.</p>
        </article>
        <article className="feature-card">
          <CheckCircle className="feature-icon" size={24} />
          <h3 className="feature-title">Smart Title Case</h3>
          <p className="feature-description">Optimized algorithm that correctly handles minor words like 'of', 'and', and 'the'.</p>
        </article>
      </section>

      <section id="testimonials" className="testimonials-section">
        <h2 className="info-title">Trusted by Power Users</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div style={{ display: 'flex', gap: '4px', color: '#fbbf24' }}>
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
            <p className="testimonial-text">"The interface is stunning. I've never seen a case converter that looks this good and works this fast."</p>
            <div className="testimonial-user">
              <div className="testimonial-avatar" />
              <div className="testimonial-info">
                <h4>Alex Rivera</h4>
                <p>Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div style={{ display: 'flex', gap: '4px', color: '#fbbf24' }}>
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
            <p className="testimonial-text">"As a copywriter, I use this daily. The Title Case tool is the most accurate I've found online."</p>
            <div className="testimonial-user">
              <div className="testimonial-avatar" style={{ background: 'linear-gradient(45deg, #ec4899, #8b5cf6)' }} />
              <div className="testimonial-info">
                <h4>Sarah Jenkins</h4>
                <p>Content Strategist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing-section">
        <h2 className="info-title">Flexible Plans for Every User</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Community</h3>
            <div className="pricing-price">$0<span>/forever</span></div>
            <ul className="pricing-features">
              <li><Check size={18} /> 7+ Case Transformations</li>
              <li><Check size={18} /> Real-time Statistics</li>
              <li><Check size={18} /> Local Browser Processing</li>
              <li><Check size={18} /> Ad-free Experience</li>
            </ul>
            <button className="pricing-btn">Get Started</button>
          </div>
          <div className="pricing-card popular">
            <span className="pricing-badge">BEST VALUE</span>
            <h3>Beast Pro</h3>
            <div className="pricing-price">$9<span>/month</span></div>
            <ul className="pricing-features">
              <li><Check size={18} /> <strong>Unlimited</strong> Transformations</li>
              <li><Check size={18} /> <strong>API</strong> Access Integration</li>
              <li><Check size={18} /> <strong>Custom</strong> Case Profiles</li>
              <li><Check size={18} /> Priority Support</li>
            </ul>
            <button className="pricing-btn primary">Unlock Beast Mode</button>
          </div>
        </div>
      </section>

      <section id="newsletter" className="newsletter-section">
        <h2 className="info-title">Join the Beast Community</h2>
        <p className="hero-subtitle">Get notified about new features, power-user tips, and text transformation guides.</p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" className="newsletter-input" required />
          <button type="submit" className="newsletter-btn">Subscribe</button>
        </form>
      </section>

      <section id="how-it-works" className="info-section">
        <h2 className="info-title">How to Use the Online Case Converter</h2>
        <div className="info-grid">
          <div>
            <h4 className="info-item-title">1. Input Your Text</h4>
            <p className="info-item-text">Simply type or paste the text you want to transform into the main editor area above.</p>
          </div>
          <div>
            <h4 className="info-item-title">2. Choose Your Transformation</h4>
            <p className="info-item-text">Click on one of the seven case conversion buttons. Your text will instantly change format.</p>
          </div>
          <div>
            <h4 className="info-item-title">3. Export and Use</h4>
            <p className="info-item-text">Use the copy button to send the result to your clipboard or download it as a clean text file.</p>
          </div>
        </div>
      </section>

      <section id="faq" className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          <details className="faq-item">
            <summary className="faq-summary">What is Sentence Case?</summary>
            <p className="faq-content">Sentence case capitalizes the first letter of every sentence and converts the rest to lowercase.</p>
          </details>
          <details className="faq-item">
            <summary className="faq-summary">How secure is my data?</summary>
            <p className="faq-content">We prioritize your security. All transformations happen locally in your browser session.</p>
          </details>
        </div>
      </section>
    </div>
  );
}
