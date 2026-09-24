// components/sections/our-projects/FlagshipProject.js
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import SanityImage from '@/components/ui/SanityImage';
import ButtonLink from '@/components/ui/ButtonLink';

const FlagshipProject = ({ data }) => {
	const { sectionLabel, body, cta, caseStudy } = data || {};

	// No case study picked in Studio yet, so there's nothing to feature
	if (!caseStudy?.title) return null;

	const paragraphs = (typeof body === 'string' ? body.split(/\n+/) : body || [])
		.map((p) => p.trim())
		.filter(Boolean);

	const hasImage = Boolean(caseStudy.heroImage?.asset);

	return (
		<Section py='py-5 lg:py-8.75 border-t border-accent/50'>
			{/* Header row: title left, blurb + button right, rule underneath */}
			<div className='grid lg:grid-cols-2 gap-1.5 lg:gap-4 pb-3.5 lg:pb-4 border-b border-dark/50'>
				<SectionHeading
					label={sectionLabel}
					heading={caseStudy.title}
					as='h2'
					onDark={false}
				/>
				<div className='space-y-2'>
					{paragraphs.length > 0 && (
						<div className='space-y-2'>
							{paragraphs.map((paragraph, index) => (
								<p key={index} className='text-paragraph-lg'>
									{paragraph}
								</p>
							))}
						</div>
					)}
					{cta?.label && caseStudy.slug && (
						<ButtonLink
							href={`/our-projects/${caseStudy.slug}`}
							variant='primary-on-light'
							event='Flagship Project'
						>
							{cta.label}
						</ButtonLink>
					)}
				</div>
			</div>

			{/* Image below the grid. Skipped entirely until the case study has a
			    hero (it's null on all of them right now). */}
			{hasImage && (
				<div className='relative aspect-[3/2] md:aspect-[16/9] lg:aspect-auto lg:h-[29rem] rounded overflow-hidden mt-3.5 lg:mt-4'>
					<SanityImage
						image={caseStudy.heroImage}
						alt={caseStudy.title}
						preset='flagshipImage'
						fill
						sizes='(min-width: 1728px) 1728px, 100vw'
					/>
				</div>
			)}
		</Section>
	);
};

export default FlagshipProject;
