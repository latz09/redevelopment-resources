// components/sections/projects/CaseStudies.js
import WorkShowcase from '@/components/sections/shared/WorkShowcase';

// Header copy is hardcoded until it has a home in the ourProjectsPage schema.
// If the label renders without a dash, use '— Our work'. The dash handling
// is still the open item between the CMS values and SectionHeading.
const HEADER = {
	sectionLabel: 'Our work',
	heading: 'Project case studies',
	intro:
		'See how our research and strategy have helped clients evaluate opportunities, guide investment, and plan for what\u2019s next.',
};

const CaseStudies = ({ caseStudies }) => {
	const items = (caseStudies || []).map((cs) => {
		// "Elkhorn, WI" -> "Elkhorn"
		const place = cs.location?.split(',')[0].trim();

		return {
			id: cs._id,
			image: cs.heroImage,
			location: cs.location,
			tags: cs.relatedServices?.map((s) => s.title).filter(Boolean) || [],
			title: cs.title,
			paragraphs: [],
			cta: cs.slug
				? {
						label: place
							? `Learn about the ${place} project`
							: 'Learn about this project',
						href: `/our-projects/${cs.slug}`,
				  }
				: null,
		};
	});

	if (!items.length) return null;

	return <WorkShowcase {...HEADER} items={items} centerText/>;
};

export default CaseStudies;