const nextConfig = {
  output: "export",
  // basePath: "/static-website",
  // assetPrefix: "/static-website",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "weboum.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.gstatic.com",
        pathname: "/recaptcha/api2/**",
      },
    ],
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  trailingSlash: true,
};

export default nextConfig;