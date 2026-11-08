import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

const POPULAR = [
  { href: '/tools/title-case', label: 'Title Case Converter' },
  { href: '/tools/sentence-case', label: 'Sentence Case Converter' },
  { href: '/tools/camel-case-generator', label: 'camelCase Converter' },
  { href: '/tools/snake-case-generator', label: 'snake_case Converter' },
  { href: '/tools/uppercase-converter', label: 'Uppercase Converter' },
  { href: '/tools/lowercase-converter', label: 'Lowercase Converter' },
];

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-[800px] py-16 md:py-24 text-center">
      <p className="text-sm font-bold text-emerald-700 mb-2">404</p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
        This page doesn&rsquo;t exist
      </h1>
      <p className="text-slate-600 text-base md:text-lg mb-8">
        The link may be old or mistyped. Try one of our most popular tools instead.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-8">
        {POPULAR.map(({ href, label }) => (
          <Link key={href} href={href}
            className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 text-sm font-bold text-slate-800 transition-all">
            {label} →
          </Link>
        ))}
      </div>
      <Link href="/" className="inline-block px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm">
        Go to the homepage
      </Link>
    </div>
  );
}
