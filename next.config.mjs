/** @type {import('next').NextConfig} */
const nextConfig = {
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
  },
  output: 'export',
};

export default nextConfig;