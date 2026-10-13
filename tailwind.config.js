/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        signature: ["Great Vibes"],
        outfit: ["Outfit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#000000", // Pure black for extreme dark mode
        "card-bg": "rgba(10, 10, 15, 0.6)", // Much darker glass effect
        primary: "#8b5cf6", // Violet
        secondary: "#06b6d4", // Cyan
        accent: "#f43f5e", // Pink
        "neon-blue": "#00f3ff",
        "neon-purple": "#bc13fe",
      },
      boxShadow: {
        "neon-blue": "0 0 10px #00f3ff, 0 0 20px #00f3ff",
        "neon-purple": "0 0 10px #bc13fe, 0 0 20px #bc13fe",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "blob": "blob 7s infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
