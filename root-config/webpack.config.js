const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/abhiraj-root-config.ts",
  output: {
    filename: "root-config.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "auto",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.ejs",
    }),
  ],
  mode: "development",
  devServer: {
    port: 8500,
    historyApiFallback: true,
  },
};

// const { merge } = require("webpack-merge");
// const singleSpaDefaults = require("webpack-config-single-spa-ts");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
//
// module.exports = (webpackConfigEnv, argv) => {
//   const orgName = "abhiraj";
//   const defaultConfig = singleSpaDefaults({
//     orgName,
//     projectName: "root-config",
//     webpackConfigEnv,
//     argv,
//     disableHtmlGeneration: true,
//   });
//
//   return merge(defaultConfig, {
//     // modify the webpack config however you'd like to by adding to this object
//     plugins: [
//       new HtmlWebpackPlugin({
//         inject: false,
//         template: "src/index.ejs",
//         templateParameters: {
//           isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
//           orgName,
//         },
//       }),
//     ],
//   });
// };
