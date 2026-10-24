/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          glow: "var(--primary-glow)",
        },
        secondary: "var(--secondary)",
        accent: {
          DEFAULT: "var(--accent)",
          glow: "var(--accent-glow)",
        },
        success: "var(--success)",
        muted: "var(--text-muted)",
        glass: {
          DEFAULT: "var(--glass)",
          border: "var(--glass-border)",
        }
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        premium: "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
      },
    },
  },
  plugins: [],
}
