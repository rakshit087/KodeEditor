module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkest: '#21252b',
      dark: '#282c34', 
      offwhite: '#abb2bf',
      cyan: '#56b6c2', 
      green: '#98c379', 
      purple: '#c678dd', 
      red: '#e06c75', 
      yellow: '#e5c07b',
      blue: '#61afef',
      transparent: 'transparent'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
