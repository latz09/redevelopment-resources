// components/sections/our-projects/FlagshipProject.js
'use client';

import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import SanityImage from '@/components/ui/SanityImage';
import ButtonLink from '@/components/ui/ButtonLink';

const headerContainer = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.12 } },
};

const headerItem = {
	hidden: { opacity: 0, y: 12 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

const FlagshipProject = ({ data }) => {
	const { sectionLabel, body, cta, caseStudy } = data || {};

	// No case study picked in Studio yet, so there's nothing to feature
	if (!caseStudy?.title) return null;

	const paragraphs = (typeof body === 'string' ? body.split(/\n+/) : body || [])
		.map((p) => p.trim())
		.filter(Boolean);

	const hasImage = Boolean(caseStudy.heroImage?.asset);

	return (
		<Section py='py-5 lg:py-8.75'>
			{/* Header row: title left, blurb + button right, rule underneath */}
			<motion.div
				className='grid lg:grid-cols-2 gap-1.5 lg:gap-4 pb-3.5 lg:pb-4 '
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.4 }}
				variants={headerContainer}
			>
				<motion.div variants={headerItem}>
					<SectionHeading
						label={sectionLabel}
						heading={caseStudy.title}
						as='h2'
						onDark={false}
					/>
				</motion.div>
				<motion.div variants={headerItem} className='space-y-2'>
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
				</motion.div>
			</motion.div>

			{/* Image below the grid. Skipped entirely until the case study has a
			    hero (it's null on all of them right now). */}
			{hasImage && (
				<motion.div
					className='relative aspect-[3/2] md:aspect-[16/9] lg:aspect-auto lg:h-[29rem] rounded overflow-hidden mt-3.5 lg:mt-4'
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
				>
					<SanityImage
						image={caseStudy.heroImage}
						alt={caseStudy.title}
						preset='flagshipImage'
						fill
						sizes='(min-width: 1728px) 1728px, 100vw'
					/>
				</motion.div>
			)}
		</Section>
	);
};

export default FlagshipProject;