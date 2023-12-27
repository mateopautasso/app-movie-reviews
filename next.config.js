/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// domains: ['https://image.tmdb.org'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'image.tmdb.org',
			},
			{
				protocol: 'https',
				hostname: 'cnnespanol.cnn.com',
			},
		],
	},
};

module.exports = nextConfig;
