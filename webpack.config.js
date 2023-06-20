const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  devServer: {
    // Serve index.html as the base
    // contentBase: resolveAppPath("public"),
    static: { directory: path.join(__dirname, "public") },
    compress: true,
    port: 9000,
    hot: "true",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
