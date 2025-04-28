/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "weboum.com",
          pathname: "/wp-content/uploads/**",
        },
      ],
    },
  };
  
  export default nextConfig;