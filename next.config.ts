import type { NextConfig } from "next";
import Icons from "unplugin-icons/webpack";

const nextConfig: NextConfig = {
  output: "export",
  webpack(config) {
    config.plugins.push(
      Icons({
        compiler: "jsx",
        jsx: "react",
        //autoInstall: true,
      }),
    );
    return config;
  },
  images: {
    remotePatterns: [
      {
        hostname: "aqua-tricky-mammal-620.mypinata.cloud",
        protocol: "https",
        pathname: "**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
