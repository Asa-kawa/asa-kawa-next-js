const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: isProd? "/asa-kawa-next-js" : "",
    output: "export",
  }
  
module.exports = nextConfig
