const colors = require('./src/core/constants/config/tailwindcss/colors')
const extend = require('./src/core/constants/config/tailwindcss/extend')
const fontFamily = require('./src/core/constants/config/tailwindcss/font-family')
const screens = require('./src/core/constants/config/tailwindcss/screens')

module.exports = {
  mode: 'jit', // New in 2.1+
  // See tailwindCSS darkmode docs: https://tailwindcss.com/docs/dark-mode
  // Use with other variants: https://tailwindcss.com/docs/dark-mode#stacking-with-other-variants
  darkMode: 'class', // or false or 'media'
  important: true,
  theme: {
    extend: {
      screens,
      colors,
      fontFamily,
    },
  },
  variants: {
    extend,
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    mode: 'all',
    preserveHtmlElements: false,
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,css,scss}'],
    options: {
      // safeList: [/^el-/] // For element UI CSS classes
    },
  },
}
