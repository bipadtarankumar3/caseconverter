import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  path: "/privacy",
  title: "Privacy Policy",
  description: "How CaseConverter handles your data: text is processed locally in your browser and never uploaded. What we store locally and how we use analytics.",
});

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-[900px] py-10 md:py-16">
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-900 font-bold">Privacy Policy</span>
      </nav>

      <header className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-4">
          <ShieldCheck size={14} className="text-emerald-600" />
          <span>Local-First Guarantee</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          Effective Date: October 2026. Learn why CaseConverter is 100% secure, offline-capable, and runs completely in your browser without cloud storage.
        </p>
      </header>

      <section className="space-y-6 mb-12">
        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-3xl shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 mb-3">1. Local-First Processing</h2>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            CaseConverter processes all text transformations entirely inside your local browser instance memory. We do not transmit, log, or store your texts, documents, code, or personal information on any remote servers. Your data never leaves your device.
          </p>
        </div>

        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-3xl shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 mb-3">2. Local Storage Usage</h2>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-3">
            We utilize your browser standard <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800 font-mono">localStorage</code> solely to provide client-side conveniences: your Conversion History (the last 20 conversions) and an autosaved draft of the text in the editor, so it is still there when you come back.
          </p>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            This data remains completely under your device control. You can clear the draft with the trash icon, clear history from the History panel, or clear your browser&rsquo;s site data at any time.
          </p>
        </div>

        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-3xl shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 mb-3">3. Analytics and Cookies</h2>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            We do not sell user data or run third-party advertising networks. We use Google Analytics to understand aggregate traffic (such as page views, referrers, and device type). Google Analytics sets its own cookies; see <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-semibold hover:underline">how Google uses data</a>. The text you type or convert is never sent to Google Analytics or to us.
          </p>
        </div>

        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-3xl shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 mb-3">4. Links to Other Revoxera Tools</h2>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            Our Services page links to other Revoxera tools hosted on separate subdomains. Each of those sites runs independently and may have its own privacy notice.
          </p>
        </div>

        <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-3xl shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 mb-3">5. Updates and Inquiries</h2>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            For privacy questions, please contact our support team at <strong className="text-slate-900">support@revoxera.com</strong> or visit our <Link href="/contact" className="text-emerald-600 font-semibold hover:underline">Contact page</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
