'use client';

import { useState } from 'react';
import { Zap, CodeXml, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header" role="banner">
      <div className="container header-inner">
        <div className="logo">
          <Zap className="logo-icon" size={28} aria-hidden="true" />
          <span>CASE<span>BEAST</span></span>
        </div>
        
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`} role="navigation" aria-label="Main Navigation">
          <a href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How it Works</a>
          <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github-btn">
            <CodeXml size={18} aria-hidden="true" />
            <span>Star on GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
