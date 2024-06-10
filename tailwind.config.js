/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 
  theme: {
    extend: {
      colors:{
        'primary': '#000000',
        'secondary': '#BFBFBF',
        'terceary': '#FA3D3B',

      }
    },
  },
  plugins: [],
}

