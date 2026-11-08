import Link from 'next/link';
import ContactForm from './ContactForm';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  path: "/contact",
  title: "Contact Us",
  description: "Contact the CaseConverter team to report a bug, request a feature, or ask a question about our free text case conversion tools.",
});

const EMAIL = 'support@revoxera.com';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-[960px] py-10 md:py-16">
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link><span>/</span>
        <span className="text-slate-900">Contact</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14">
        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">Contact us</h1>
          <p className="text-slate-600 leading-relaxed mb-6">
            Questions, bug reports and feature ideas are all welcome. A real person reads every message.
          </p>

          <div className="mb-8">
            <p className="text-sm text-slate-500 mb-1">Email</p>
            <a href={`mailto:${EMAIL}`} className="text-lg font-semibold text-slate-900 hover:text-emerald-700 underline underline-offset-4 decoration-slate-300">
              {EMAIL}
            </a>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-base font-semibold text-slate-900 mb-2">Reporting a wrong conversion?</h2>
            <p className="text-sm text-slate-600 mb-3">These three things help us fix it quickly:</p>
            <ol className="list-decimal pl-5 space-y-1.5 text-sm text-slate-600">
              <li>The text you pasted in</li>
              <li>Which button you clicked</li>
              <li>What you expected to get instead</li>
            </ol>
          </div>

          <div className="border-t border-slate-200 pt-6 mt-6 text-sm text-slate-600">
            Looking for something else? See the <Link href="/about" className="text-emerald-700 underline underline-offset-2">About page</Link> or
            our <Link href="/privacy" className="text-emerald-700 underline underline-offset-2">privacy policy</Link>.
          </div>
        </div>

        <div className="md:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
