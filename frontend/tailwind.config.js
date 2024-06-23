/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
      'xs':{min:'0px', max: '639px' },
      'xxs':{max:'580px'}
    },

    extend: {
      
      backgroundImage: {
        'blue-black-gradient': 'linear-gradient(to bottom, #0d1b2a, #1f3550)'
      },
    },
  },
  plugins: [],

}


