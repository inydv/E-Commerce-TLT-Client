/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#191919',
        customBlack: '#020202'
      },
      maxHeight: {
        banner: "600px"
      },
      minHeight: {
        content: "calc(100vh - 436px)",
        footer: "356px"
      },
    },
  },
  plugins: [],
}
