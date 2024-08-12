/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkorange: {
          "100": "#fd6f00",
          "200": "rgba(253, 111, 0, 0.6)",
        },
        black: "#000",
        dimgray: "#545454",
        gray: {
          "100": "#797979",
          "200": "#1e1e1e",
        },
        whitesmoke: {
          "100": "#f8f8f8",
          "200": "#edecec",
        },
        darkgray: "#afafaf",
        gainsboro: "#d9d9d9",
        darkslategray: "#424242",
        antiquewhite: "#ffebdb",
      },
      spacing: {},
      fontFamily: {
        "nav-bar-text-21": "Poppins",
        montserrat: "Montserrat",
      },
      borderRadius: {
        "8xs": "5px",
        sm: "14px",
      },
    },
    fontSize: {
      "2xl": "21px",
      "81xl": "100px",
      "13xl": "32px",
      "5xl": "24px",
      "29xl": "48px",
      "46xl": "65px",
      lgi: "19px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
