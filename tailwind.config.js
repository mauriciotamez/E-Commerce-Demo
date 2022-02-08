module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ['Dosis'],
        one: ['Manrope'],
        formal: ['Merriweather']
      },
      screens: {
        sm: '375px'
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}
