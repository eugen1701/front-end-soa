module.exports = {
  prefix: '',
  mode: 'jit',
  content: [
    './src/**/*.{html,ts}',
    './projects/app2-store/src/**/*.{html,ts}',
    './projects/app3-orders/src/**/*.{html,ts}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        'picton-blue': {
          light: '#aab7e1',
          DEFAULT: '#182b8d',
          dark: '#1aa18b',
        },
        'nav-hover-blue': {
          DEFAULT: '#072a91',
        },
        'nav-menu-active': {
          DEFAULT: '#7850a9',
        },
        'new': {
          DEFAULT: '#D9EDF7',
        },
      }
    },
  },
  corePlugins: {
    preflight: true,
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
