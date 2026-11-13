/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fiery: {
          DEFAULT: '#F04400',
          hover: '#FF5714',
          muted: '#FFF1EC',
          border: '#FFD5C7',
        },
        sunshine: {
          DEFAULT: '#FFD91A',
          hover: '#FFE24A',
          muted: '#FFFDEB',
          border: '#FFEBA4',
        },
        neon: {
          DEFAULT: '#D0F030',
          hover: '#DCF74D',
          muted: '#F8FDE8',
          border: '#E8FAB3',
        },
        jet: {
          DEFAULT: '#000000',
          dark: '#0A0A0C',
          card: '#121216',
          border: '#24242A',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 2px 12px rgba(0, 0, 0, 0.04)',
        'soft-md': '0 6px 20px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 12px 32px rgba(0, 0, 0, 0.08)',
        'glow-sunshine': '0 0 24px rgba(255, 217, 26, 0.28)',
      },
    },
  },
  plugins: [],
}
