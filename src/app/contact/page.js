import Link from 'next/link';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Us — CaseConverter Support',
  description: 'Get in touch with the CaseConverter team. Report bugs, suggest features, or ask questions about our text case conversion tools.',
  alternates: { canonical: 'https://caseconverter.revoxera.com/contact' },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-[800px] py-10 md:py-16">
      <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted">
        <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
        <span className="text-white">Contact</span>
      </nav>

      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-muted bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-muted text-xl leading-relaxed">
          Have a question, found a bug, or want to suggest a new feature? We would love to hear from you.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <a href="mailto:support@revoxera.com"
          className="group p-8 bg-white/[0.02] border border-white/10 rounded-[28px] hover:border-primary hover:-translate-y-1 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-6 text-xl group-hover:bg-violet-500/20 transition-colors">
            ✉️
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Email Support</h2>
          <p className="text-muted text-sm mb-4">For bugs, feature requests, and general questions.</p>
          <p className="text-primary font-bold text-sm">support@revoxera.com</p>
          <p className="text-muted text-xs mt-1">We respond within 24–48 hours</p>
        </a>

        <a href="https://github.com" target="_blank" rel="noopener noreferrer"
          className="group p-8 bg-white/[0.02] border border-white/10 rounded-[28px] hover:border-primary hover:-translate-y-1 transition-all">
          <div className="w-12 h-12 rounded-2xl bg-white/5 text-white flex items-center justify-center mb-6 text-xl group-hover:bg-white/10 transition-colors">
            🐙
          </div>
          <h2 className="text-xl font-bold text-white mb-2">GitHub Issues</h2>
          <p className="text-muted text-sm mb-4">Report bugs or request features via GitHub.</p>
          <p className="text-primary font-bold text-sm">github.com/revoxera</p>
          <p className="text-muted text-xs mt-1">Public bug tracker</p>
        </a>
      </div>

      {/* Interactive contact form — client component */}
      <ContactForm />

      <div className="flex flex-wrap gap-3 mt-8">
        <Link href="/about" className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-muted hover:text-white hover:border-primary transition-all">About Us →</Link>
        <Link href="/privacy" className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-muted hover:text-white hover:border-primary transition-all">Privacy Policy →</Link>
      </div>
    </div>
  );
}
