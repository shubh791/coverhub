/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow all local network IPv4 addresses and hostnames for Fast Refresh HMR WebSockets
  allowedDevOrigins: [
    "*.*.*.*",
    "**.*",
    "192.168.*.*",
    "10.*.*.*",
    "172.*.*.*",
    "localhost",
    "127.0.0.1",
  ],
};

export default nextConfig;
