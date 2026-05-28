import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | CaseConverter',
  description: 'Understand how CaseConverter handles your data. 100% offline, local browser processing, no server connections, no tracking.',
  alternates: { canonical: 'https://caseconverter.revoxera.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-[900px] py-10 md:py-16">
      <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted">
        <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
        <span className="text-white">Privacy Policy</span>
      </nav>

      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-muted bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-muted text-xl leading-relaxed">
          Effective Date: May 2026. Learn why CaseConverter is 100% secure, offline-safe, and runs completely in your browser without cloud dependencies.
        </p>
      </header>

      <section className="space-y-8 mb-12">
        <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
          <h2 className="text-2xl font-black text-white mb-4">1. Local-First Processing</h2>
          <p className="text-muted leading-relaxed">
            CaseConverter processes all text conversions entirely inside your local browser instance. We do not transmit, log, or store your texts, documents, code, or other contents to any remote servers. Your data never leaves your device.
          </p>
        </div>

        <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
          <h2 className="text-2xl font-black text-white mb-4">2. Local Storage Usage</h2>
          <p className="text-muted leading-relaxed mb-4">
            We utilize your browser's standard <code>localStorage</code> solely to provide features like Conversion History (saving your last 20 conversions) and formatting preferences.
          </p>
          <p className="text-muted leading-relaxed">
            This data remains completely under your control and on your local device. You can clear it at any time by clicking the "Clear all" button in the history panel or clearing your browser cache.
          </p>
        </div>

        <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
          <h2 className="text-2xl font-black text-white mb-4">3. No Advertising or Tracking</h2>
          <p className="text-muted leading-relaxed">
            We do not load third-party ad networks, tracking pixels, or data collection cookies. We run minimal, privacy-compliant telemetry (like Google Analytics) simply to measure aggregate page visits without tracking individual user parameters or logging converted text.
          </p>
        </div>

        <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
          <h2 className="text-2xl font-black text-white mb-4">4. Updates and Inquiries</h2>
          <p className="text-muted leading-relaxed">
            We may review this Privacy Policy from time to time as browser standards or new conversion formats roll out. For privacy questions, please contact our support team at <strong>support@revoxera.com</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
