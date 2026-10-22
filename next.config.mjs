import { REDIRECTS } from './data/config/redirects.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				pathname: '/**',
			},
		],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						svgoConfig: {
							plugins: [
								{
									name: 'preset-default',
									params: {
										overrides: {
											removeViewBox: false,
										},
									},
								},
								'removeDimensions',
							],
						},
					},
				},
			],
		});
		return config;
	},
	async redirects() {
		return REDIRECTS;
	},
};

export default nextConfig;
