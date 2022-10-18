/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      quicksand: ['quicksand'],
    },
    colors: {
      "blue": '#0f61a0',
      "black": '#3D3D3D',
      "white": '#fff',
    },
    extend: {
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
      },
      padding: {
        full: '100%',
      },
      content: {
        link: 'url("./images/link.svg")',
      },
    },
  },
  plugins: [],
}
