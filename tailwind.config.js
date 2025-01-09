/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', 'Rubik', 'cursive'],
        cursive: ['"Dancing Script"', 'cursive'],
        tomorrow: ['"Tomorrow"', 'sans-serif'],
        nova: ['"Nova Square"', 'sans-serif'],
        league: ['"League Gothic"', 'sans-serif'], 
        gabarito: ['Gabarito', 'sans-serif'],
        'varela-round': ['"Varela Round"', 'sans-serif'],
      },
      colors: {
        primary: '#ff5722', 
        secondary: '#009688', 
        greybg: '#1a1919',
      },
      spacing: {
        '128': '32rem',
      },
      screens: {
        'custom': '767px',
        'custom-md': '1007px',
      },
      animation: {
        'fade-in-down': 'fadeInDown 0.5s ease-out',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
