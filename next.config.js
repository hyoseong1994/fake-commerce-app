/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com"],
    loader: "default",
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     domain: "fakestoreapi.com",
    //     port: "",
    //     pathname: "/img/**",
    //   },
    // ],
  },
};

export default nextConfig;
