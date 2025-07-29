/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'modern-negra': ['"Modern Negra"', 'sans-serif'],
        'serif': ['"DM Serif Text"', 'serif'],
        'sans': ['"Mona Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
