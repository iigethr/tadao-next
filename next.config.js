// next.config.js

const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass')
const withImages = require('next-optimized-images');
// const resourcesLoader = {
//   loader: "sass-resources-loader",
//   options: {
//       resources: [
//           "./assets/stylesheets/tadao.scss"
//       ]
//   }
// };

module.exports = withPlugins([
  [withSass, {
    cssModules: false,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]__[hash:base64:5]",
    },
    // webpack: (config, options) => {
    //   config.module.rules.map(rule => {
    //     if (
    //       rule.test.source.includes("scss") ||
    //       rule.test.source.includes("sass")
    //     ) {
    //       rule.use.push(resourcesLoader);
    //     }
    //   });
    //   return config;
    // },
  }],
  [withImages, {
    /* config for next-optimized-images */
    inlineImageLimit: 8192,
    imagesFolder: 'assets/images',
    imagesName: '[name]-[hash].[ext]',
    handleImages: ['jpg', 'jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true
  }],
]);
