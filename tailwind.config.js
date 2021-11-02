// tailwind.config.js
module.exports = {
  purge: [],
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        50:'13.4rem',
        128: '38rem',
        126:'30rem',
      },
        colors: {
          'teal':'#5DADAB',
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}