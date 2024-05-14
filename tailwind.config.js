/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verdeBase: "#26C24D",
        verdeEscuro: "#008A22",
        verdeClaro: "#32D45B"
      },
      backgroundImage: theme => ({
        'login': "url('/BG-Login.png')",
        'gradient-verde': `linear-gradient(to right, ${theme('colors.verdeEscuro')}, ${theme('colors.verdeClaro')})`,
      }),
      dropShadow: {
        'verde': '0px 0px 40px rgba(50, 212, 91, 0.5)'
      }
    },
  },
  plugins: [],
}

