/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
         'hero-image': "url('../public/assets/hero-bg.png')",
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        "inter": ['Inter var', 'sans-serif']
      }
    },
  },
  plugins: [],
};
