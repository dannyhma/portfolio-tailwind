/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#06b6d4',
        dark900: '#0f172a',
        dark500: '#64748b',
        dark400: '#94a3b8',
      },
    },
  },
  plugins: [],
}

