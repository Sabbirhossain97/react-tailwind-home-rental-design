/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('../public/assets/hero/hero-bg.png')",
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
        inter: ["Inter var", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "features-icon": "0 12px 19px 0 rgba(0,0,0,0.15)",
        "properties-button": "0 2px 3px 0 rgba(248,90,71,0.02)",
        "form-wrapper": "0 4px 63px 0 rgba(0,0,0,0.15)",
      },
      backgroundColor: {
        testimonial: "rgba(244, 81, 30, 0.07)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1780px",
        "4xl": "2000px",
      },
    },
  },
  plugins: [],
};
