/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#F08A06",
        "primary-gray": "#586174"
      },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif"
      }
    },
  },
  plugins: [],
}

