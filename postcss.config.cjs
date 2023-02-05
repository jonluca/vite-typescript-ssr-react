// postcss.config.js
const dotenvCra = require("dotenv-cra");
process.env.NODE_ENV = process.env.NODE_ENV || "development";
dotenvCra.config();
//

const plugins = {
  tailwindcss: {},
  autoprefixer: {},
};

if (process.env.VITE_LRT_OR_RTL === "rtl") {
  plugins["postcss-cssjanus"] = {
    transformDirInUrl: false,
    transformEdgeInUrl: false,
  };
}

module.exports = () => {
  return {
    plugins,
  };
};