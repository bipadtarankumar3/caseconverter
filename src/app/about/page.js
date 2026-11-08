import Link from 'next/link';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  path: "/about",
  title: "About CaseConverter",
  description: "Who makes CaseConverter, why it exists, how the conversions work, and what it deliberately doesn't do. A small, free tool from Revoxera.",
});

const OTHER_TOOLS = [
  { label: 'HTML Color Codes', href: 'https://colorcode.revoxera.com/', note: 'Pick colors, convert HEX/RGB/HSL, check contrast.' },
  { label: 'SQL Formatter', href: 'https://sqlformatter.revoxera.com/', note: 'Tidy up messy queries for most SQL dialects.' },
  { label: 'JSON Formatter & Mapper', href: 'https://json-formatter-mapper.revoxera.com/', note: 'Format, validate and explore JSON.' },
  { label: 'AI Prompt Generator', href: 'https://ai-prompt.revoxera.com/', note: 'Build structured prompts for chat models.' },
];

const CHANGELOG = [
  {
    date: 'November 2026',
    items: [
      'snake_case, kebab-case and camelCase now split camelCase input properly (userProfileId → user_profile_id).',
      'Pasting a list converts each line separately instead of merging everything into one long name.',
      'Title Case keeps acronyms and brand spellings like SEO and iPhone.',
      'Added an Undo button, and your text is kept in your browser if you close the tab.',
      'Keyboard shortcuts moved to Alt+Shift so they no longer clash with browser shortcuts.',
    ],
  },
];

function Section({ title, children }) {
  return (
    <section className="py-8 border-t border-slate-200 first:border-t-0 first:pt-0">
      <h2 className="text-xl font-bold text-slate-900 mb-3">{title}</h2>
      <div className="space-y-4 text-slate-700 leading-relaxed">{children}</div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-[720px] py-10 md:py-16">
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link><span>/</span>
        <span className="text-slate-900">About</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
          About CaseConverter
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          CaseConverter is a small, free website for changing the capitalization of text. Paste something in,
          click a button, copy it out. That&rsquo;s most of it.
        </p>
      </header>

      <div>
        <Section title="Why it exists">
          <p>
            Text rarely arrives in the case you need. A heading comes through in ALL CAPS. A spreadsheet export
            has column names like <code className="text-sm bg-slate-100 px-1 rounded">Customer First Name</code> that
            need to become <code className="text-sm bg-slate-100 px-1 rounded">customer_first_name</code>. A blog title needs
            proper Title Case and you can never remember whether &ldquo;with&rdquo; gets a capital.
          </p>
          <p>
            Fixing that by hand is tedious, and plenty of converter sites are heavy with ads or send your text to
            a server for something a browser can do on its own. CaseConverter aims to be quick, uncluttered, and
            never need to see what you type.
          </p>
        </Section>

        <Section title="Who makes it">
          <p>
            CaseConverter is built and maintained by <strong className="text-slate-900">Revoxera</strong>, a small
            team that makes free web tools for developers and writers. The tool is free to use, with no paid plan and
            no account to create.
          </p>
        </Section>

        <Section title="How it handles your text">
          <p>
            All conversions run in your browser with JavaScript. The text you type is never uploaded to us.
            If you&rsquo;d like to check, open your browser&rsquo;s developer tools, go to the Network tab and
            convert something — you won&rsquo;t see a request carrying your text.
          </p>
          <p>
            Your recent conversions and the text in the editor are saved in your own browser (localStorage) so
            they&rsquo;re still there next time. You can clear them at any time. We use Google Analytics to count
            visits, which is covered in the <Link href="/privacy" className="text-emerald-700 underline underline-offset-2">privacy policy</Link>.
          </p>
        </Section>

        <Section title="How the conversions decide things">
          <p>
            Some formats are simple (UPPER and lower case). Others involve judgement calls, so here is what we do:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-slate-900">Title Case</strong> capitalizes every word except short articles,
              conjunctions and prepositions (a, an, the, and, of, to, in…). The first and last word, and the word
              after a colon, are always capitalized. Words that already have deliberate capitals, like SEO or iPhone,
              are left alone.
            </li>
            <li>
              <strong className="text-slate-900">Sentence case</strong>{" "}capitalizes the first letter after a full stop,
              question mark, exclamation mark or line break, and fixes a lone &ldquo;i&rdquo; to &ldquo;I&rdquo;.
            </li>
            <li>
              <strong className="text-slate-900">camelCase, PascalCase, snake_case and kebab-case</strong> first split
              the text into words, including words hidden inside existing camelCase, then join them in the new style.
              Each line is converted on its own.
            </li>
          </ul>
        </Section>

        <Section title="What it doesn't do">
          <p>Being upfront about the limits saves you time:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              It doesn&rsquo;t know grammar or names. Sentence case will lowercase &ldquo;London&rdquo; or &ldquo;Maria&rdquo;
              if they were in caps, so give proper nouns a quick check.
            </li>
            <li>
              Style guides disagree on Title Case. APA capitalizes words of four letters or more (&ldquo;With&rdquo;),
              while Chicago lowercases all prepositions. Our rules sit in the middle, so check against your guide for
              formal work. The <Link href="/guides/apa-title-case" className="text-emerald-700 underline underline-offset-2">APA guide</Link> covers
              the details.
            </li>
            <li>It isn&rsquo;t a code refactoring tool. It converts the text you paste, not identifiers across a project.</li>
          </ul>
        </Section>

        <Section title="Recent changes">
          {CHANGELOG.map(({ date, items }) => (
            <div key={date}>
              <p className="text-sm font-semibold text-slate-900 mb-2">{date}</p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                {items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </Section>

        <Section title="Our other tools">
          <p>If CaseConverter is useful to you, these might be too. They&rsquo;re free and work the same way.</p>
          <ul className="divide-y divide-slate-200 border-y border-slate-200">
            {OTHER_TOOLS.map(({ label, href, note }) => (
              <li key={label} className="py-3">
                <a href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-900 hover:text-emerald-700">
                  {label} ↗
                </a>
                <p className="text-sm text-slate-600">{note}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Get in touch">
          <p>
            Found a conversion that came out wrong, or want a format we don&rsquo;t have? Send us an
            example and we&rsquo;ll look into it.
          </p>
          <p>
            <Link href="/contact" className="inline-block px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-700 text-white font-semibold text-sm transition-colors">
              Contact us
            </Link>
          </p>
        </Section>
      </div>
    </div>
  );
}
