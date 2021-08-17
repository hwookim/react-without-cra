const path = require("path");

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@": path.resolve(__dirname, "../src"),
  };
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
