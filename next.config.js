/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/plan-your-trip",
        destination: "/flights",
        permanent: true
      },
      {
        source: "/itineraries",
        destination: "/pre-order",
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
