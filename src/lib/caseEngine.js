// Shared, Unicode-aware text case conversion engine.
// Used by CaseConverterTool; pure functions so they are easy to test.

const TITLE_EXCEPTIONS = new Set([
  'a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'from',
  'by', 'in', 'of', 'as', 'up', 'vs', 'via', 'per',
]);

const capFirstLetter = (s) => s.replace(/\p{L}/u, (c) => c.toUpperCase());

// Split an identifier or phrase into words, understanding camelCase,
// PascalCase, ACRONYMS, snake_case, kebab-case, dot.case and plain spaces.
export function splitWords(str) {
  return str
    .replace(/([\p{Ll}\p{N}])(\p{Lu})/gu, '$1 $2') // fooBar -> foo Bar
    .replace(/(\p{Lu})(\p{Lu}\p{Ll})/gu, '$1 $2') // XMLParser -> XML Parser
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean);
}

// Developer formats convert each line separately so a pasted list of
// identifiers (e.g. column names) stays a list.
function perLine(text, join) {
  return text
    .split('\n')
    .map((line) => {
      const words = splitWords(line);
      return words.length ? join(words) : '';
    })
    .join('\n');
}

function titleWord(word, forceCap, allCaps) {
  const core = word.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '');
  // Keep intentional mixed case (iPhone, SEO, JavaScript) unless the whole input is shouting.
  if (!allCaps && /\p{Lu}/u.test(core.slice(1))) return word;
  const lower = word.toLowerCase();
  if (!forceCap && TITLE_EXCEPTIONS.has(core.toLowerCase())) return lower;
  return lower.split('-').map(capFirstLetter).join('-');
}

function titleCase(text) {
  const allCaps = text === text.toUpperCase();
  return text
    .split('\n')
    .map((line) => {
      const parts = line.split(/(\s+)/);
      const wordIdx = parts.flatMap((p, i) => (/\S/.test(p) ? [i] : []));
      const first = wordIdx[0];
      const last = wordIdx[wordIdx.length - 1];
      let afterBreak = false;
      return parts
        .map((p, i) => {
          if (!/\S/.test(p)) return p;
          const out = titleWord(p, i === first || i === last || afterBreak, allCaps);
          afterBreak = /[:—–?!]$/.test(p);
          return out;
        })
        .join('');
    })
    .join('\n');
}

export function convertText(text, mode) {
  if (!text) return text;

  switch (mode) {
    case 'sentence':
      return text
        .toLowerCase()
        .replace(/(^|[.!?]\s+|\n\s*)([^\p{L}\p{N}]*)(\p{L})/gu, (_, a, b, c) => a + b + c.toUpperCase())
        .replace(/(^|[^\p{L}\p{N}_])i(?=$|[^\p{L}\p{N}_])/gu, '$1I');
    case 'lower':
      return text.toLowerCase();
    case 'upper':
      return text.toUpperCase();
    case 'capitalized':
      return text.toLowerCase().replace(/(^|[^\p{L}\p{N}'’])(\p{L})/gu, (_, a, b) => a + b.toUpperCase());
    case 'alternating': {
      let n = 0;
      return text.replace(/\p{L}/gu, (c) => (n++ % 2 ? c.toUpperCase() : c.toLowerCase()));
    }
    case 'title':
      return titleCase(text);
    case 'inverse':
      return text.replace(/\p{L}/gu, (c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()));
    case 'camel':
      return perLine(text, (w) =>
        w.map((x, i) => (i ? capFirstLetter(x.toLowerCase()) : x.toLowerCase())).join(''));
    case 'pascal':
      return perLine(text, (w) => w.map((x) => capFirstLetter(x.toLowerCase())).join(''));
    case 'snake':
      return perLine(text, (w) => w.map((x) => x.toLowerCase()).join('_'));
    case 'kebab':
      return perLine(text, (w) => w.map((x) => x.toLowerCase()).join('-'));
    default:
      return text;
  }
}
