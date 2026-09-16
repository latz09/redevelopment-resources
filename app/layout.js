import { Analytics } from '@vercel/analytics/next';
import Footer from '@/components/layout/footer/Footer';
import { fetchSeoSettings } from '@/utils/cms/fetchSeoSettings';
import { buildOrganizationSchema } from '@/lib/seo/buildOrganizationSchema';
import JsonLd from '@/components/seo/JsonLd';
import NavigationContainer from '@/components/layout/navigation/NavigationContainer';
import './globals.css';
import localFont from 'next/font/local';
import DesignSystemBadge from '@/components/design/DesignSystemBadge';

// Cabinet Grotesk — heading face. Files live in app/fonts/ (sibling to this
// file). Only Regular/Medium/Bold are loaded — that's all the guide uses.
const cabinetGrotesk = localFont({
	src: [
		{ path: './fonts/CabinetGrotesk-Regular.woff2', weight: '400', style: 'normal' },
		{ path: './fonts/CabinetGrotesk-Medium.woff2', weight: '500', style: 'normal' },
		{ path: './fonts/CabinetGrotesk-Bold.woff2', weight: '700', style: 'normal' },
	],
	display: 'swap',
	variable: '--font-heading',
});

// Satoshi — body face. Only Regular/Medium are loaded.
const satoshi = localFont({
	src: [
		{ path: './fonts/Satoshi-Regular.woff2', weight: '400', style: 'normal' },
		{ path: './fonts/Satoshi-Medium.woff2', weight: '500', style: 'normal' },
	],
	display: 'swap',
	variable: '--font-body',
});

export async function generateMetadata() {
	const seo = await fetchSeoSettings();
	if (!seo?.siteUrl) return {};

	return {
		metadataBase: new URL(seo.siteUrl),
		applicationName: seo.siteName,
		title: {
			default: seo.defaultTitle,
			template: seo.titleTemplate,
		},
		description: seo.defaultDescription,
		keywords: seo.keywords,
		icons: { icon: '/favicon.ico' },
		verification: {
			google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
		},
		openGraph: {
			title: seo.defaultTitle,
			description: seo.defaultDescription,
			url: seo.siteUrl,
			siteName: seo.siteName,
			images: [{ url: seo.ogImage, width: 1200, height: 630 }],
			type: 'website',
		},
		twitter: {
			card: 'summary_large_image',
			title: seo.defaultTitle,
			description: seo.defaultDescription,
			...(seo.twitterHandle && { creator: seo.twitterHandle }),
			images: [seo.ogImage],
		},
	};
}

export default async function RootLayout({ children }) {
	const seo = await fetchSeoSettings(); // same cached call — no extra Sanity hit
	const schema = buildOrganizationSchema(seo);

	return (
		<html lang='en'>
			<body className={`min-h-screen ${cabinetGrotesk.variable} ${satoshi.variable}`}>
				{schema && <JsonLd data={schema} />}
				<NavigationContainer />
				<main>{children}</main>
				<Analytics />
				<Footer businessName={seo?.siteName} />
				<DesignSystemBadge />
			</body>
		</html>
	);
}