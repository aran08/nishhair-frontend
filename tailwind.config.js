/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // 's': '320px',
      // // => @media (min-width: 320px)

      // 'm': '375px',
      // // => @media (min-width: 375px)

      // 'sm': '425px',
      // // => @media (min-width: 425px)

      'md': '768px',
      // => @media (min-width: 768px)

      'lg': '1024px',
      // => @media (min-width: 1024px)
    },
  },
  plugins: [],
}