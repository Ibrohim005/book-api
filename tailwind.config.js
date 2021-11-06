module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
      extend: {
        zIndex: {
          '-1': '-1',
         }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }