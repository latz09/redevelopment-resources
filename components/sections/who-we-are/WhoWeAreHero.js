'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Section from '@/components/layout/Section';
import SanityImage from '@/components/ui/SanityImage';
import SectionGraphic from '@/components/ui/SectionGraphic';

// Fixed per-position crop shapes read off the design. The SLOT keeps its
// shape regardless of which image occupies it — if the client swaps a photo
// in Sanity, it still gets cropped to whatever this position calls for.
const GRID_SLOTS = [
	{ aspectClass: 'aspect-[193/164]', preset: 'whoWeAreHeroGridOne' },
	{ aspectClass: 'aspect-[69/86]', preset: 'whoWeAreHeroGridTwo' },
	{ aspectClass: 'aspect-[103/75]', preset: 'whoWeAreHeroGridThree' },
];

const textContainer = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.12 } },
};

const textItem = {
	hidden: { opacity: 0, y: 12 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

const imageGridContainer = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const imageItem = {
	hidden: { opacity: 0, scale: 1.04 },
	visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const WhoWeAreHero = ({ data }) => {
	const { headline, subheadline, images } = data ? data : {};
	const firstImage = images?.[0];
	const reduceMotion = useReducedMotion();

	return (
		<Section
			bg='bg-dark'
			className='relative lg:border-t border-b border-accent/50 overflow-x-hidden'
			py='py-3.5 lg:py-5'
		>
			<SectionGraphic
				variant='flag'
				className='absolute z-0 top-0 right-0 h-full w-auto text-light/10 pointer-events-none select-none'
			/>

			<motion.div
				className='relative z-10 lg:w-1/2 space-y-1.5'
				initial={reduceMotion ? false : 'hidden'}
				animate='visible'
				variants={textContainer}
			>
				<motion.h1 variants={textItem} className='text-light'>
					{headline}
				</motion.h1>
				<motion.p variants={textItem} className='text-light text-paragraph-lg'>
					{subheadline}
				</motion.p>
			</motion.div>

			{images?.length > 0 && (
				<div className='relative z-10 mt-2 lg:mt-3'>
					{/* Below lg: first image only, slot 1's shape */}
					<motion.div
						initial={reduceMotion ? false : 'hidden'}
						animate='visible'
						variants={imageItem}
						className={`lg:hidden relative w-full rounded overflow-hidden ${GRID_SLOTS[0].aspectClass}`}
					>
						<SanityImage
							image={firstImage}
							alt='Redevelopment Resources team members at a community event'
							preset={GRID_SLOTS[0].preset}
							fill
							sizes='100vw'
						/>
					</motion.div>

					{/* lg and up: three fixed-shape slots, proportional widths — not equal columns */}
					<motion.div
						initial={reduceMotion ? false : 'hidden'}
						animate='visible'
						variants={imageGridContainer}
						className='hidden lg:grid lg:grid-cols-[31fr_29fr_40fr] lg:gap-1.25 lg:items-start'
					>
						{images.slice(0, 3).map((image, index) => {
							const slot = GRID_SLOTS[index];
							if (!slot) return null;
							return (
								<motion.div
									key={index}
									variants={imageItem}
									className={`relative w-full rounded overflow-hidden ${slot.aspectClass}`}
								>
									<SanityImage
										image={image}
										alt={`Redevelopment Resources community event photo ${index + 1}`}
										preset={slot.preset}
										fill
										sizes='40vw'
									/>
								</motion.div>
							);
						})}
					</motion.div>
				</div>
			)}
		</Section>
	);
};

export default WhoWeAreHero;