/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        authBgS: '#6C63AC',
        authBgE: '#7873B5',
        btnBg: '#63489D',
        mainBg: '#7E7BB9'
      }
    }
  },
  plugins: []
};
