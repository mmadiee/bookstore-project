/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baskervville: ['"Baskervville SC"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'raisin-black': '#2a201e',
        bone: '#ddd3c5',
      },
    },
  },
  plugins: [],
}

