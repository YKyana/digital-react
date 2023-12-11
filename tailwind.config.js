/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#222136",
          "200": "#1e1c31",
          "300": "rgba(34, 33, 54, 0.7)",
          "400": "rgba(34, 33, 54, 0.8)",
          "500": "rgba(0, 0, 0, 0.5)",
          "600": "rgba(30, 28, 49, 0.6)",
          "700": "rgba(30, 28, 49, 0.5)",
        },
        royalblue: "#4270ec",
        steelblue: "#006380",
        goldenrod: "#f0bb1f",
        black: "#000",
        aliceblue: "#ecf0fc",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        mid: "17px",
        mini: "15px",
        lg: "18px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      "29xl": "48px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
