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
          start: "#2A1E36",
          mid: "#000000",
          mid2:"#201C25",
          end: "#1B1B1B",
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #1a1b1e, #2a2c36, #3c4155, #5a637d)',
        'violet-gradient': 'linear-gradient(360deg , #1B1B1B 0%, #040113 50%, #2A1E36 70% , #3A2152 100%)',
      }, 
    },
  },
  plugins: [],
}