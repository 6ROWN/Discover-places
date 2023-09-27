/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
		domains: ["maps.googleapis.com", "apis.google.com/"],
	},
	reactStrictMode: false,
};

module.exports = nextConfig;
