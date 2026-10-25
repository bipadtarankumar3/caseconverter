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
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500">
        <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link><span>/</span>
        <span className="text-slate-900">Contact</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-3">
          Contact Us
        </h1>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          Have a question, found a bug, or want to suggest a new feature? We would love to hear from you.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <a href="mailto:support@revoxera.com"
          className="group p-6 bg-white border border-slate-200 rounded-2xl hover:border-emerald-500 hover:shadow-xs transition-all">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 text-lg">
            ✉️
          </div>
          <h2 className="text-base font-bold text-slate-900 mb-1">Email Support</h2>
          <p className="text-slate-500 text-xs mb-3">For bugs and general inquiries.</p>
          <p className="text-emerald-600 font-bold text-sm">support@revoxera.com</p>
          <p className="text-slate-400 text-[11px] mt-0.5">Response within 24–48 hours</p>
        </a>

        <a href="https://github.com/revoxera" target="_blank" rel="noopener noreferrer"
          className="group p-6 bg-white border border-slate-200 rounded-2xl hover:border-emerald-500 hover:shadow-xs transition-all">
          <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-4 text-lg">
            🐙
          </div>
          <h2 className="text-base font-bold text-slate-900 mb-1">GitHub Issues</h2>
          <p className="text-slate-500 text-xs mb-3">Report bugs or contribute code.</p>
          <p className="text-emerald-600 font-bold text-sm">github.com/revoxera</p>
          <p className="text-slate-400 text-[11px] mt-0.5">Open source repository</p>
        </a>

        <Link href="/services"
          className="group p-6 bg-indigo-50/50 border border-indigo-200/80 rounded-2xl hover:border-indigo-500 hover:shadow-xs transition-all">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4 text-lg">
            ⚡
          </div>
          <h2 className="text-base font-bold text-slate-900 mb-1">Ecosystem Services</h2>
          <p className="text-slate-500 text-xs mb-3">Revoxera developer platforms suite.</p>
          <p className="text-indigo-600 font-bold text-sm">Explore Services →</p>
          <p className="text-slate-400 text-[11px] mt-0.5">Color, SQL, JSON & AI tools</p>
        </Link>
      </div>

      {/* Interactive contact form */}
      <ContactForm />

      <div className="flex flex-wrap gap-2 mt-8">
        <Link href="/about" className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all shadow-xs">About Us →</Link>
        <Link href="/privacy" className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all shadow-xs">Privacy Policy →</Link>
      </div>
    </div>
  );
}
