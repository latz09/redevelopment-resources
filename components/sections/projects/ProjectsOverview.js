// components/sections/our-projects/ProjectsOverview.js
import SplitContent from '@/components/layout/SplitContent';
import SectionHeading from '@/components/ui/SectionHeading';

const ProjectsOverview = ({ data }) => {
	const { sectionLabel, heading, body } = data || {};

	// Works whether body is a string (split on line breaks) or an array
	const paragraphs = (typeof body === 'string' ? body.split(/\n+/) : body || [])
		.map((p) => p.trim())
		.filter(Boolean);

	return (
		<SplitContent
			left={
				<div>
					<SectionHeading
						label={sectionLabel}
						heading={heading}
						as='h2'
						onDark={false}
					/>
				</div>
			}
			right={
				paragraphs.length > 0 && (
					<div className='space-y-2'>
						{paragraphs.map((paragraph, index) => (
							<p key={index} className='text-paragraph-lg'>
								{paragraph}
							</p>
						))}
					</div>
				)
			}
		/>
	);
};

export default ProjectsOverview;
