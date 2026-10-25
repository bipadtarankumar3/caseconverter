import Link from 'next/link';
import { FileCheck } from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions | CaseConverter',
  description: 'Read the terms and conditions governing usage of CaseConverter. Free online developer and content writer utility tool.',
  alternates: { canonical: 'https://caseconverter.revoxera.com/terms' },
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-[900px] py-10 md:py-16">
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-900 font-bold">Terms & Conditions</span>
      </nav>

      <header className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold mb-4">
          <FileCheck size={14} className="text-slate-600" />
          <span>User Agreement &bull; Updated 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
          Terms & Conditions
        </h1>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          Please read the terms of service governing the usage of CaseConverter and Revoxera developer tools.
        </p>
      </header>

      <section className="space-y-6 mb-12">
        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-3xl shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            By accessing and utilizing CaseConverter (located at caseconverter.revoxera.com or running locally), you acknowledge and agree to comply with these Terms and Conditions and our Privacy Policy.
          </p>
        </div>

        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-3xl shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 mb-3">2. Permitted Commercial & Personal Use</h2>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            CaseConverter is provided as a free utility. You are permitted to use this application for personal or commercial development, copywriting, editorial publication, programming, and database schema migrations without restriction.
          </p>
        </div>

        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-3xl shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 mb-3">3. Output Ownership</h2>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            You retain 100% intellectual property ownership of any and all text, source code, data, and articles that you process through CaseConverter. We assert zero ownership or rights over your outputs.
          </p>
        </div>

        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-3xl shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 mb-3">4. Disclaimer of Warranties</h2>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            CaseConverter is provided &ldquo;as is&rdquo; without warranties of any kind. While our conversion algorithms are rigorously tested against APA, Chicago, and AST programming standards, users are encouraged to verify critical text before production publication.
          </p>
        </div>
      </section>
    </div>
  );
}
