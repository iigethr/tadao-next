// next.config.js

const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass')
const withImages = require('next-optimized-images');

module.exports = withPlugins([
  [withSass, {
    // cssModules: true
    // cssLoaderOptions: {
    //   importLoaders: 1,
    //   localIdentName: "[local]__[hash:base64:5]",
    // }
  }],
  [withImages, {
    /* config for next-optimized-images */
    inlineImageLimit: 8192,
    imagesFolder: 'assets/images',
    imagesName: '[name]-[hash].[ext]',
    handleImages: ['jpg', 'jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true
  }]
]);
