/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        textHover: '#1d4ed8',
        dark: '#0f172a',
        primary: '#7e22ce'
      },
      width: {
        128: '26rem',
      },
      height: {
        129: '38rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
  },
  plugins: [],
}
