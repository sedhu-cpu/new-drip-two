/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#111',
        'dark-border': '#333',
        purple: '#A855F7',

        'input-dark': '#1a1f2e',
        'gradient-start': '#6366f1',
        'gradient-mid': '#A855F7',
        'gradient-end': '#ec4899',
      },
      borderRadius: {
        'custom': '12px',
      },
      fontSize: {
        'custom-sm': '0.95rem',
      },
      boxShadow: {
        'custom': '0 4px 10px rgba(0,0,0,0.4)',
        'custom-hover': '0 6px 15px rgba(168,85,247,0.4)',

        'input-glow': '0 0 15px rgba(163, 94, 255, 0.5)',
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
