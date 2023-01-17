/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        bgblue:'#0C1D39',
        bgfooter:'#3A4961'
      },
      fontFamily:{
        playfire:"'Playfair Display', serif",
        fontsans:"'Source Sans Pro', sans-serif"
      },
      fontSize:{
        fsm:'16px',
      }
    },
  },
  plugins: [],
}
