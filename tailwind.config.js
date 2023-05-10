/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'custom-blue': '#1F1D2B',
      white: '#ffffff',
    },
    extend: {
      backgroundImage: {
        'border-image':
          'linear-gradient(#1f1d2b, #1f1d2b), linear-gradient(to right, #73e0a9, #5b68df)',
        'light-border-image':
          'linear-gradient(#ffffff, #ffffff), linear-gradient(to right, #73e0a9, #5b68df)',
      },
    },
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '768px',
        lg: '1024px',
        xl: '1226px',
      },
    },
  },
  plugins: [],
};
