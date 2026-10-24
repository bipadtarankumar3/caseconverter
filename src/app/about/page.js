import Link from 'next/link';

export const metadata = {
  title: 'About CaseConverter — The Story Behind the Tool',
  description: 'Learn about CaseConverter — a free, privacy-focused text transformation tool built by the Revoxera team. Convert text to any case format instantly, without ever sending data to a server.',
  alternates: { canonical: 'https://caseconverter.revoxera.com/about' },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-[900px] py-10 md:py-16">
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500">
        <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link><span>/</span>
        <span className="text-slate-900">About</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-3">
          About CaseConverter
        </h1>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          CaseConverter is a free, professional-grade text transformation utility built by <strong className="text-slate-900 font-semibold">Revoxera</strong> —
          dedicated to creating fast, client-side developer and productivity tools.
        </p>
      </header>

      <section className="space-y-6 mb-10">
        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-2xl shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Why We Built This</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Every developer, writer, and content creator encounters the same issue: text is rarely in the case format you need.
            You paste from a legacy document and it is ALL CAPS. You copy a database column name and need camelCase for your JavaScript code.
            Or you draft a blog title and need proper Title Case with correct preposition handling.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            We wanted a tool that is clean, instant, and grammatically accurate — handling title case exceptions,
            developer conventions like snake_case and kebab-case, with zero server transmissions.
          </p>
        </div>

        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-2xl shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Our Privacy Guarantee</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Every text conversion is executed <strong className="text-slate-900 font-semibold">100% locally in your browser</strong> using client-side JavaScript.
            We do not log, transmit, or retain your text on any server.
            Once the page loads, the tool functions completely offline without an active internet connection.
          </p>
        </div>

        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-2xl shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Part of the Revoxera Ecosystem</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">CaseConverter is part of the Revoxera utility collection:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Case Converter', href: 'https://caseconverter.revoxera.com', current: true },
              { label: 'JSON Formatter', href: 'https://jsonformatter.revoxera.com' },
              { label: 'SQL Formatter', href: 'https://sqlformatter.revoxera.com' },
              { label: 'Color Code Tool', href: 'https://colorcode.revoxera.com' },
              { label: 'AI Prompt Generator', href: 'https://aiprompt.revoxera.com' },
            ].map(({ label, href, current }) => (
              <a key={label} href={href} target={current ? undefined : '_blank'} rel="noopener noreferrer"
                className={`flex items-center gap-3 p-3 rounded-xl border transition-all text-xs font-semibold ${current ? 'border-emerald-500 bg-emerald-50 text-emerald-800' : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300 text-slate-700'}`}>
                {current && <span className="w-2 h-2 rounded-full bg-emerald-600" />}
                <span>{label}</span>
                {current && <span className="ml-auto text-[11px] text-emerald-600">Current tool</span>}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-wrap gap-3">
        <Link href="/contact" className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-xs">
          Contact Us
        </Link>
        <Link href="/tools" className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 font-semibold text-sm transition-all shadow-xs">
          Explore All Tools →
        </Link>
      </section>
    </div>
  );
}
