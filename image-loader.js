// image-loader.js

const { basePath = '' } = require('./next.config');

module.exports = function imageLoader({ src }) {
  // If the image is already an external URL, return as-is
  if (src.startsWith('http') || src.startsWith('//')) {
    return src;
  }

  // For local images, prefix with assetPrefix or basePath
  return `${basePath}${src}`;
};
