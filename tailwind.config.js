module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}', 
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'red-400': '#ed2f52',
        'red-500': '#EB173C',
        'red-700': '#b30b2a'
      },
      screens: {
        'maxLg': {'max': '860px'}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}