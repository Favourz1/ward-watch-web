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
        dmSans: "'DM Sans', sans-serif"
      }
    },
  },
  plugins: [],
}

