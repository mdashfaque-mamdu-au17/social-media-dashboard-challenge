/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-600': '#252B42',
        'dark-700': '#333A55',
        'dark-800': '#1D1F29',
        'dark-900': '#20222F',
        'gray-500': '#8C98C6',
        'gray-600': '#AEB3CB',
        'gray-800': '#63687D',
        'gray-900': '#848BAB',
        'cream-white-600': '#E1E4F0',
        'cream-white-700': '#F1F3FA',
        'cream-white-800': '#F7F9FF',
        'white-900': '#FFFFFF',
        'green-800': '#1EB589',
        'red-900': '#C4032B',
        'red-800': '#DC414C',
        'blue-800': '#178FF5',
        'blue-700': '#1DA1F2',
      },
    },
  },
  plugins: [],
};
