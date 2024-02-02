/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textUnderlineOffset: {
        17: '17.5px',
        27: '27px',
      },
      colors: {
        gray: {
          1000: '#34495E',
        },
        blue: {
          1000: '#8894A0'
        },
        red: {
          1000: '#66332B',
          2000: '#D50000'
        },
        green: {
          1000: '#E4E4E4',
          2000: '#17A85F'
        },
        brown: {
          1000: '#2A292A'
        }
      },
      width: {
        '15': '4rem',
      },
      height: {
        '15': '4rem',
      },
    },
  },
  plugins: [],
}

