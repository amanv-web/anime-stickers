module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#164863", // Replace with your primary color
          secondary: "#427D9D", // Replace with your secondary color
          tertiary: "#9BBEC8", // Replace with your tertiary color
          quaternary: "#DDF2FD", // Replace with your quaternary color
        },
      },
    },
  },
  plugins: [],
};
