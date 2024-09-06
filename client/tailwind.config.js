/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#E0F7FA',  // Lighter blue
        lightSky: '#7dd3fc',   // Soft sky blue
        lightGray: '#F1F1F1',  // Gentle gray for backgrounds
        blue: "#38bdf8", 
        softWhite: '#FAFAFA',  // Almost white for a clean look
      },
    },
  },
  plugins: [],
}

