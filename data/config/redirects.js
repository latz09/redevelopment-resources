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
];