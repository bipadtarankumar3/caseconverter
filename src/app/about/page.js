import Link from 'next/link';

export const metadata = {
  title: 'About CaseConverter — The Story Behind the Tool',
  description: 'Learn about CaseConverter — a free, privacy-focused text transformation tool built by the Revoxera team. Convert text to any case format instantly, without ever sending data to a server.',
  alternates: { canonical: 'https://caseconverter.revoxera.com/about' },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-[900px] py-10 md:py-16">
      <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted">
        <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
        <span className="text-white">About</span>
      </nav>

      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-muted bg-clip-text text-transparent">
          About CaseConverter
        </h1>
        <p className="text-muted text-xl leading-relaxed">
          CaseConverter is a free, professional-grade text transformation tool built by <strong className="text-white">Revoxera</strong> —
          a suite of precision-crafted developer and productivity utilities.
        </p>
      </header>

      <section className="space-y-8 mb-12">
        <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
          <h2 className="text-2xl font-black text-white mb-4">Why We Built This</h2>
          <p className="text-muted leading-relaxed mb-4">
            Every developer, writer, and content creator encounters the same problem: text is rarely in the format you need it.
            You paste something from a Word doc and it is ALL CAPS. You copy a database column name and need camelCase for your API.
            You write a blog title in lowercase and need proper Title Case.
          </p>
          <p className="text-muted leading-relaxed">
            We wanted a case converter that was beautiful, fast, and actually correct — one that handles title case exceptions properly,
            supports developer naming conventions like snake_case and camelCase, and does it all without sending a single character to any server.
          </p>
        </div>

        <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
          <h2 className="text-2xl font-black text-white mb-4">Our Privacy Promise</h2>
          <p className="text-muted leading-relaxed">
            Every transformation happens <strong className="text-white">entirely in your browser</strong> using JavaScript.
            We do not transmit, log, or store any text you enter — ever.
            Your documents, code, and content remain 100% on your device.
            You can verify this by running the tool offline — it works without an internet connection once the page loads.
          </p>
        </div>

        <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
          <h2 className="text-2xl font-black text-white mb-4">Part of the Revoxera Ecosystem</h2>
          <p className="text-muted leading-relaxed mb-6">CaseConverter is one of several tools in the Revoxera suite:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Case Converter', href: 'https://caseconverter.revoxera.com', current: true },
              { label: 'JSON Formatter', href: 'https://jsonformatter.revoxera.com' },
              { label: 'SQL Formatter', href: 'https://sqlformatter.revoxera.com' },
              { label: 'Color Code Tool', href: 'https://colorcode.revoxera.com' },
              { label: 'AI Prompt Generator', href: 'https://aiprompt.revoxera.com' },
            ].map(({ label, href, current }) => (
              <a key={label} href={href} target={current ? undefined : '_blank'} rel="noopener noreferrer"
                className={`flex items-center gap-3 p-4 rounded-2xl border transition-all ${current ? 'border-primary/40 bg-primary/5 text-primary' : 'border-white/10 bg-white/[0.02] text-muted hover:text-white hover:border-white/20'}`}>
                {current && <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
                <span className="font-semibold text-sm">{label}</span>
                {current && <span className="ml-auto text-xs opacity-60">You are here</span>}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-wrap gap-4">
        <Link href="/contact" className="px-6 py-3 rounded-2xl bg-primary hover:bg-primary/90 text-slate-950 font-black transition-all">
          Contact Us
        </Link>
        <Link href="/tools" className="px-6 py-3 rounded-2xl bg-white/[0.05] border border-white/10 hover:bg-white/10 text-white font-semibold transition-all">
          Explore All Tools →
        </Link>
      </section>
    </div>
  );
}
