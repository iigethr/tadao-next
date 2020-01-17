// next.config.js

const withPlugins       = require("next-compose-plugins");
const withTM            = require("next-transpile-modules");
const withCss           = require("@zeit/next-css");
const withSass          = require("@zeit/next-sass");
const withImages        = require("next-optimized-images");
const withYml           = require("js-yaml-loader");

// withTM
const withTMConfig = {
  transpileModules: [
    "@hankyo/hankyo",
    "@iigethr/zaha_alignments"
  ]
}

// withSass
const withSassConfig = {
  cssModules: false
  // sassLoaderOptions: {
  //   outputStyle: "compressed"
  // }
};

// withImages
const withImagesConfig = {
  inlineImageLimit: 8192,
  imagesFolder: "images",
  imagesName: "[name]-[hash].[ext]",
  handleImages: ["jpg", "jpeg", "png", "svg", "webp", "gif"],
  optimizeImages: true
}

// nextEnvConfig
const nextEnvConfig = {
  env: {
    HANKYO_ACCESS_TOKEN: process.env.HANKYO_ACCESS_TOKEN,
    HANKYO_SECRET_ACCESS_TOKEN: process.env.HANKYO_SECRET_ACCESS_TOKEN,
    PROJECT_SLUG: process.env.PROJECT_SLUG
  }
};

const nextConfig = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module.
    config.node = { // eslint-disable-line no-param-reassign
      fs: "empty",
    };
    return config;
  }
};

module.exports = withPlugins([
  [nextEnvConfig],
  [withTM, withTMConfig],
  [withCss],
  [withSass, withSassConfig],
  [withImages, withImagesConfig],
  [withYml]
], nextConfig);
