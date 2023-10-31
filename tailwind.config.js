/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./dist/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: 16,
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#06b6d4',
        dark900: '#0f172a',
        dark500: '#64748b',
        dark400: '#94a3b8',
        whatsapp: '#25D366',
        instagram: '#E4405F',
        facebook: '#0866FF',
        discord: '#5865F2',
        linkedin: '#0A66C2',
        figma: '#F24E1E',
      },
      scale: {
        '140': '1.4',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

