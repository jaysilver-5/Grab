/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#FFBE34',
        secondary: '#091242',
        tertiary: '#F4F4F4',
        headingfont: '#1C1F35',
        paragraph: '#666C89'
      },
    },
  },
  plugins: [],
}