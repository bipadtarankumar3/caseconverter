import Link from 'next/link';

const COLUMNS = [
  {
    title: 'Converters',
    links: [
      { label: 'Title Case', href: '/tools/title-case' },
      { label: 'Sentence case', href: '/tools/sentence-case' },
      { label: 'UPPER CASE', href: '/tools/uppercase-converter' },
      { label: 'lowercase', href: '/tools/lowercase-converter' },
      { label: 'camelCase', href: '/tools/camel-case-generator' },
      { label: 'PascalCase', href: '/tools/pascal-case-generator' },
      { label: 'snake_case', href: '/tools/snake-case-generator' },
      { label: 'kebab-case', href: '/tools/kebab-case-generator' },
    ],
  },
  {
    title: 'Guides',
    links: [
      { label: 'Sentence case vs Title Case', href: '/guides/sentence-case-vs-title-case' },
      { label: 'APA title case rules', href: '/guides/apa-title-case' },
      { label: 'Code naming conventions', href: '/guides/naming-conventions' },
    ],
  },
  {
    title: 'More from Revoxera',
    links: [
      { label: 'HTML Color Codes', href: 'https://colorcode.revoxera.com/' },
      { label: 'SQL Formatter', href: 'https://sqlformatter.revoxera.com/' },
      { label: 'JSON Formatter', href: 'https://json-formatter-mapper.revoxera.com/' },
      { label: 'AI Prompt Generator', href: 'https://ai-prompt.revoxera.com/' },
    ],
  },
  {
    title: 'Site',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy policy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50 text-slate-600">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <img src="/logo.png" alt="" width={28} height={28} className="w-7 h-7 rounded-md" />
              <span className="font-bold text-slate-900">
                Case<span className="text-emerald-600">Converter</span>
              </span>
            </Link>
            <p className="text-sm mt-3 max-w-xs leading-relaxed">
              A free tool for changing text case. Everything runs in your browser, and your text is never uploaded.
            </p>
          </div>

          {COLUMNS.map(({ title, links }) => (
            <div key={title}>
              <h2 className="text-sm font-semibold text-slate-900 mb-3">{title}</h2>
              <ul className="space-y-2">
                {links.map(({ label, href }) => {
                  const external = href.startsWith('http');
                  return (
                    <li key={href}>
                      {external ? (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-slate-900">{label}</a>
                      ) : (
                        <Link href={href} className="text-sm hover:text-slate-900">{label}</Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between gap-3 text-sm">
          <p>© {new Date().getFullYear()} Revoxera</p>
          <p>
            Spotted a wrong conversion? <Link href="/contact" className="text-slate-900 underline underline-offset-2">Tell us</Link>.
          </p>
        </div>
      </div>
    </footer>
  );
}
