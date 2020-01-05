// next.config.js

const withPlugins   = require("next-compose-plugins");
const withTM        = require("next-transpile-modules");
const withCss       = require("@zeit/next-css");
const withSass      = require("@zeit/next-sass");
const withImages    = require("next-optimized-images");

// const resourcesLoader = {
//   loader: "sass-resources-loader",
//   options: {
//       resources: [
//           "./assets/stylesheets/tadao.scss"
//       ]
//   }
// };

// const resourcesConfig = {
//   webpack: (config, options) => {
//     config.module.rules.map(rule => {
//       if (
//         rule.test.source.includes("scss") ||
//         rule.test.source.includes("sass")
//       ) {
//         rule.use.push(resourcesLoader);
//       }
//     });
//     return config;
//   },
// }

module.exports = withPlugins([
  [withTM, {
    transpileModules: [
      "@iigethr/zaha_alignments"
    ],
  }],
  [withCss],
  [withSass, {
    cssModules: false
  }],
  [withImages, {
    inlineImageLimit: 8192,
    imagesFolder: "images",
    imagesName: "[name]-[hash].[ext]",
    handleImages: ["jpg", "jpeg", "png", "svg", "webp", "gif"],
    optimizeImages: true
  }],
]);
