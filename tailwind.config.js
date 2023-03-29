/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      primary: 'Rubik',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
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