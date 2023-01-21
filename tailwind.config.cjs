/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-900': '#20222F',
        'dark-800': '#1D1F29',
        'dark-700': '#333A55',
        'gray-500': '#8C98C6',
        'gray-600': '#AEB3CB',
        'gray-800': '#63687D',
        'gray-900': '#848BAB',
        'cream-white-800': '#F7F9FF',
        'white-900': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
