const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        astongreen: {
              900: "#00211D",
              100: "#EEFFFB"
        }
      }
    },
  },
  plugins: [],
});
