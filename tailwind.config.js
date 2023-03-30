/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Rubik', 'sans-serif'],
      secondary: ['Krub', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '150px',
      },
    },
    extend: {
      colors: {
        primary: '#FFBE34',
        secondary: '#091242',
        tertiary: '#F4F4F4',
        headingfont: '#1C1F35',
        paragraph: '#666C89'
      },
      backgroundImage: {
        banner: "url('./components/assets/site-bg.png')",
        about: "url('./components/assets/about-bg.png')",
      },
    },
  },
  plugins: [],
}