import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | CaseConverter',
  description: 'Read the terms and conditions governing usage of CaseConverter. Free online developer and content writer utility tool.',
  alternates: { canonical: 'https://caseconverter.revoxera.com/terms' },
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-[900px] py-10 md:py-16">
      <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted">
        <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
        <span className="text-white">Terms & Conditions</span>
      </nav>

      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-muted bg-clip-text text-transparent">
          Terms & Conditions
        </h1>
        <p className="text-muted text-xl leading-relaxed">
          Effective Date: May 2026. Please read the terms of service governing the usage of CaseConverter.
        </p>
      </header>

      <section className="space-y-8 mb-12">
        <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
          <h2 className="text-2xl font-black text-white mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted leading-relaxed">
            By accessing and utilizing CaseConverter (located at caseconverter.revoxera.com or running locally), you acknowledge and agree to comply with these Terms and Conditions and our Privacy Policy. If you do not accept these parameters, please do not use our utilities.
          </p>
        </div>

        <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
          <h2 className="text-2xl font-black text-white mb-4">2. Permitted Use</h2>
          <p className="text-muted leading-relaxed">
            CaseConverter is made available as a free utility. You are free to copy, paste, and run this application locally for personal or commercial development, writing, and editorial pipelines.
          </p>
        </div>

        <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
          <h2 className="text-2xl font-black text-white mb-4">3. Intellectual Property</h2>
          <p className="text-muted leading-relaxed">
            The design layout, branding, logos, graphics, and custom source code of CaseConverter are the property of the Revoxera team. You may use any converted text output from the tool without restriction or attribution.
          </p>
        </div>

        <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[28px]">
          <h2 className="text-2xl font-black text-white mb-4">4. Disclaimer of Warranties</h2>
          <p className="text-muted leading-relaxed">
            CaseConverter is provided "as is" and "as available" without any warranties of any kind. While we aim for 100% accuracy in text transformations, we are not responsible for any issues resulting from text transformation formatting or styling results.
          </p>
        </div>
      </section>
    </div>
  );
}
