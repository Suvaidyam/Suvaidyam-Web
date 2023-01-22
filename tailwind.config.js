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
        fontsans:"'Source Sans Pro', sans-serif",
        fontspar:"'Zen Kurenaido', sans-seri",
        fontserif: "'Palanquin', sans-serif",
        fontNunito:" 'Nunito Sans', sans-serif",
        fontthin:" 'Josefin Slab', serif",
        fontgetDown: "'Jost', sans-serif",
      },
      fontSize:{
        fsm:'16px',
      }
    },
  },
  plugins: [],
}
