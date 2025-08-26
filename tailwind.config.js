/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 9.0s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-50%)' },
        }
      },    
  fontFamily: {
mullish: ["Mulish", "sans-serif"],
},
        colors: {
  deepBlue: "#02042a",
  lightBlue: "#2b84ea",
  lightBlue300: "#4b94ed",
  lightBlue500: "#0b72e7",
  greenLight: "#61cea6",
  grayText: "#818597",
  lightGray: "#e2e2e2",
  grayBlue: "#344a6c",
  deepBlueHead: "#03042a",
  gray2: "#525a76",
}
},
  },
  plugins: [],
}