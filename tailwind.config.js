/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bowlby': ['Bowlby One', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
      lineHeight: {
        'extra-tight': '0.9', 
      },
      fontSize: {
        '7rem': '6.5rem',
      },
      colors: {
        parrotGreen: '#3DBE29', // Custom color for parrot green
        bgDark: '#1e1e1e',
        primaryText: '#E9E3DC',
      },
    },
  },
  plugins: [],
}