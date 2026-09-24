// components/sections/service-page/WorkExamples.js
import WorkShowcase from '@/components/sections/shared/WorkShowcase';

const toParagraphs = (d) =>
	(Array.isArray(d) ? d : typeof d === 'string' ? d.split(/\n+/) : [])
		.map((p) => p.trim())
		.filter(Boolean);

const WorkExamples = ({ data, examples }) => {
	const { sectionLabel, heading, intro } = data || {};

	const items = (examples || []).map((ex) => {
		// "Elkhorn, WI" -> "Elkhorn"
		const place = ex.location?.split(',')[0].trim();

		return {
			id: ex._id,
			image: ex.linkedCaseStudy?.heroImage ?? ex.image,
			location: ex.location,
			tags: ex.category ? [ex.category] : [],
			title: ex.title,
			paragraphs: toParagraphs(ex.description),
			cta: ex.linkedCaseStudy?.slug
				? {
						label: place
							? `Learn about the ${place} project`
							: 'Learn about this project',
						href: `/our-projects/${ex.linkedCaseStudy.slug}`,
					}
				: null,
		};
	});

	if (!items.length) return null;

	return (
		<WorkShowcase
			sectionLabel={sectionLabel}
			heading={heading}
			intro={intro}
			items={items}
		/>
	);
};

export default WorkExamples;
