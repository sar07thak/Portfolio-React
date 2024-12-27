/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#1e3a8a",
        customGreen: "#10b981",
      },
      gradientColorStops: {
        custom: {
          start: "#412944",
          mid: "#1C1B22",
          mid2:"#201C25",
          end: "#37253B",
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #1a1b1e, #2a2c36, #3c4155, #5a637d)',
        'violet-gradient': 'linear-gradient(135deg, #5b2c6f, #8e44ad, #9b59b6, #d2a6e1)',
      }, 
    },
  },
  plugins: [],
}