/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:8081/api/:path*', // Adjust this URL if your backend is hosted elsewhere
        },
      ];
    },
  };
  
  export default nextConfig;
  