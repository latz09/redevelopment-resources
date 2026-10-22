// data/config/redirects.js
// Per-project: 301 redirects from old/indexed URLs to their new equivalents.
// Add an entry any time you relaunch a site and need to preserve link equity
// and SEO rankings for pages Google already has indexed.
export const REDIRECTS = [
	{
		source: '/our-team',
		destination: '/who-we-are',
		permanent: true,
	},
	{
		source: '/organizations',
		destination: '/who-we-serve#public-sector',
		permanent: true,
	},
	{
		source: '/what-we-do',
		destination: '/who-we-serve',
		permanent: true,
	},
	{
		source: '/downtown-feasibility-study-green-bay',
		destination: '/our-projects',
		permanent: true,
	},
	{
		source: '/municipal-tif-district-structure-green-bay',
		destination: '/our-projects',
		permanent: true,
	},
	{
		source: '/neighborhood-comprehensive-planning-milwaukee',
		destination: '/our-projects',
		permanent: true,
	},
	{
		source: '/community-development-grant-writing-green-bay',
		destination: '/our-projects',
		permanent: true,
	},
	{
		source: '/redevelopment',
		destination: '/services/redevelopment',
		permanent: true,
	},
	{
		source: '/contact-us',
		destination: '/contact',
		permanent: true,
	},
	{
		source: '/municipal-housing-study-services-milwaukee',
		destination: '/our-projects',
		permanent: true,
	},
	{
		source: '/implementation',
		destination: '/services/implementation',
		permanent: true,
	},
	{
		source: '/municipalities',
		destination: '/who-we-serve#public-sector',
		permanent: true,
	},
	{
		source: '/private-developers',
		destination: '/who-we-serve#private-sector',
		permanent: true,
	},
	{
		source: '/strategy',
		destination: '/services/strategy',
		permanent: true,
	},
	{
		source: '/master-planning-consultants-green-bay',
		destination: '/our-projects',
		permanent: true,
	},
	{
		source: '/analysis',
		destination: '/services/analysis',
		permanent: true,
	},
	{
		source: '/financing',
		destination: '/services/financing',
		permanent: true,
	},
	{
		source: '/entrepreneurs',
		destination: '/who-we-serve#private-sector',
		permanent: true,
	},
	{
		source: '/commercial-real-estate-market-analysis-madison',
		destination: '/our-projects',
		permanent: true,
	},
	{
		source: '/real-estate-deal-structuring-in-madison',
		destination: '/our-projects',
		permanent: true,
	},
	{
		source: '/property-redevelopment-planning-milwaukee',
		destination: '/our-projects',
		permanent: true,
	},
	{
		source: '/city-strategic-planning-consultants-milwaukee',
		destination: '/our-projects',
		permanent: true,
	},
];