/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui"],
      },
      colors: {
        kraken: {
          orange: "#ff5a0a",
          orange2: "#ff7a1a",
          teal: "#09a8b6",
          ink: "#070b18",
          muted: "#5d6473",
        },
      },
      boxShadow: {
        soft: "0 18px 55px rgba(7, 11, 24, 0.12)",
        card: "0 14px 35px rgba(7, 11, 24, 0.08)",
      },
    },
  },
  safelist: [
    "bg-kraken-orange",
    "bg-kraken-teal",
    "text-kraken-orange",
    "text-kraken-teal",
    "border-kraken-teal",
    "shadow-soft",
    "shadow-card",
  ],
  plugins: [],
};
