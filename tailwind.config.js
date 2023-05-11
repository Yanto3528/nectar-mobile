/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      dark: {
        25: "#7A7E80",
        50: "#464A4D",
        75: "#161719",
        100: "#0D0E0F",
        DEFAULT: "#0D0E0F",
      },
      light: {
        20: "#E3E5E5",
        40: "#F2F4F5",
        60: "#F7F9FA",
        80: "#FBFBFB",
        100: "#FFFFFF",
        DEFAULT: "#FFFFFF",
      },
      primary: {
        20: "#EEE5FF",
        40: "#D3BDFF",
        60: "#B18AFF",
        80: "#8F57FF",
        100: "#7F3DFF",
        DEFAULT: "#7F3DFF",
      },
      red: {
        20: "#FDD5D7",
        40: "#FDA2A9",
        60: "#FD6F7A",
        80: "#FD5662",
        100: "#FD3C4A",
        DEFAULT: "#FD3C4A",
      },
      green: {
        20: "#CFFAEA",
        40: "#93EACA",
        60: "#65D1AA",
        80: "#2AB784",
        100: "#00A86B",
        DEFAULT: "#00A86B",
      },
      yellow: {
        20: "#FCEED4",
        40: "#FCDDA1",
        60: "#FCCC6F",
        80: "#FCBB3C",
        100: "#FCAC12",
        DEFAULT: "#FCAC12",
      },
      blue: {
        20: "#BDDCFF",
        40: "#8AC0FF",
        60: "#57A5FF",
        80: "#248AFF",
        100: "#0077FF",
        DEFAULT: "#0077FF",
      },
    },
    fontFamily: {
      "inter-thin": ["inter-thin"],
      inter: ["inter"],
      "inter-medium": ["inter-medium"],
      "inter-semibold": ["inter-semibold"],
      "inter-bold": ["inter-bold"],
      "inter-extrabold": ["inter-extrabold"],
      "inter-black": ["inter-black"],
    },
    extend: {},
  },
  plugins: [],
};
