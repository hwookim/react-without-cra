const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mode = process.env.NODE_ENV || "development";
const isDev = mode === "development";

module.exports = {
  mode,
  entry: {
    app: path.join(__dirname, "src", "index.tsx"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: isDev || {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
  ],
  devtool: isDev && "inline-source-map",
  devServer: {
    contentBase: "./public",
    host: "localhost",
    port: 9000,
    historyApiFallback: true,
  },
};
