/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-700': '#333A55',
        'gray-600': '#AEB3CB',
      },
    },
  },
  plugins: [],
};
