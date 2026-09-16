// utils/seo/buildPageMetadata.js

import { fetchContent } from '@/utils/cms/fetchContent';
import { fetchSeoSettings } from '@/utils/cms/fetchSeoSettings';

export async function buildPageMetadata({ slug, query, params }) {
	const [pageData, site] = await Promise.all([
		fetchContent(query, params),
		fetchSeoSettings(),
	]);

	// seoSettings document not created in Sanity yet — return empty until it exists
	if (!site) return {};

	// Compound queries return { page: {...}, ... } instead of the page doc
	// directly — fall back to the nested shape so metadata still resolves.
	const seo = pageData?.seo ?? pageData?.page?.seo;

	return {
		title: seo?.title ?? site.defaultTitle,
		description: seo?.description ?? site.defaultDescription,
		keywords: seo?.keywords ?? site.keywords,
		alternates: {
			canonical: slug,
		},
		robots: {
			index: seo?.noIndex ? false : true,
			follow: true,
		},
		openGraph: {
			title: seo?.title ?? site.defaultTitle,
			description: seo?.description ?? site.defaultDescription,
			images: [
				{
					url: seo?.ogImage ?? site.ogImage,
					width: 1200,
					height: 630,
				},
			],
		},
	};
}