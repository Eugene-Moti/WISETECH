/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A1428',
          800: '#0f172a',
          950: '#020617',
        },
        cyan: {
          electric: '#00f0ff',
          deep: '#00bfff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-whatsapp': 'pulse-whatsapp 2s infinite',
      },
      keyframes: {
        'pulse-whatsapp': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 0 15px rgba(37, 211, 102, 0)' },
        },
      },
    },
  },
  plugins: [],
}

