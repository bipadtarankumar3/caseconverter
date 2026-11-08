import { ImageResponse } from 'next/og';

export const alt = 'CaseConverter — Free online text case converter';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const SAMPLES = [
  ['Title Case', 'The Art of War', '#10b981'],
  ['camelCase', 'userProfileSettings', '#3b82f6'],
  ['snake_case', 'user_profile_settings', '#f43f5e'],
  ['kebab-case', 'user-profile-settings', '#a855f7'],
];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#ffffff',
          color: '#0f172a',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 76, fontWeight: 800, letterSpacing: -2 }}>
            Case<span style={{ color: '#059669' }}>Converter</span>
          </div>
          <div style={{ display: 'flex', fontSize: 34, color: '#475569', marginTop: 16 }}>
            Free, instant text case conversion — right in your browser
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {SAMPLES.map(([label, value, color]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', fontSize: 32 }}>
              <div
                style={{
                  display: 'flex',
                  width: 220,
                  color,
                  fontWeight: 700,
                }}
              >
                {label}
              </div>
              <div style={{ display: 'flex', fontFamily: 'monospace', color: '#0f172a' }}>{value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', fontSize: 26, color: '#64748b' }}>
          caseconverter.revoxera.com · No sign-up · Your text never leaves your device
        </div>
      </div>
    ),
    size,
  );
}
