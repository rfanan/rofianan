/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        textHover: '#1d4ed8',
        dark: '#0f172a',
        primary: '#7e22ce',
        pelangi: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
      },
      width: {
        128: '26rem',
      },
      height: {
        129: '35rem',
      },
      screens: {
        '2xl': '1280px',
      },
      borderRadius: {
        cekung: '0.9rem',
      },
      fontFamily: {
        body: 'Nunito Sans',
      },
    },
  },
  plugins: [],
}
