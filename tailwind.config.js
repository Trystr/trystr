module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '192': '48rem',
      },
      minWidth: {
        '96': '24rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
