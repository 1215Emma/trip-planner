module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      formColor: "#5a5858e6",
      navBarColor: "#242424",
      white: "#ffffff",
      radiusGreen: "#128b7a",
      radiusOrange: "#f9b341",
      offWhite: "#FAF9F6",
      radiusButton: "#dfcdcd",
      radiusButtonOpen: "#9c8090",
      radiusBanner: "#00000033",
      black: "#000000",
      progressSpinner: "#888686",
      inputField: "#ffffff80",
    },
    boxShadow: {
      heavy: "box-shadow: 13px 10px 10px 20px #888888",
      input: "0px 2px 10px 2px rgba(0, 0, 0, 0.25)",
    },
    fontFamily: {
      merriweather: ["Merriweather", "serif"],
      IBMPlexSans: ["IBM Plex Sans", "sans-serif"],
    },
    keyframes: {
      progress0: {
        "100%": { transform: "rotate(0deg)" },
      },
      progress1: {
        "100%": { transform: "rotate(-90deg)" },
      },
      progress2: {
        "100%": { transform: "rotate(-180deg)" },
      },
      reverseProgress1: {
        "100%": { transform: "rotate(0)" },
      },
      reverseProgress2: {
        "100%": { transform: "rotate(-90deg)" },
      },
    },
    animation: {
      progress0: "progress0 0.5s ease-in-out forwards",
      progress1: "progress1 0.5s ease-in-out forwards",
      progress2: "progress2 0.5s ease-in-out forwards",
      reverseProgress1: "reverseProgress1 1s ease-in-out forwards",
      reverseProgress2: "reverseProgress2 1s ease-in-out forwards",
    },
    extend: {},
  },
  plugins: [],
};
