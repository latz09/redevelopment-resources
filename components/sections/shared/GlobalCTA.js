// components/sections/home-page/GlobalCTA.js
'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import ButtonLink from '@/components/ui/ButtonLink';
import ImageWindow from '@/components/ui/ImageWindow';

const textContainer = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.12 } },
};

const textItem = {
	hidden: { opacity: 0, y: 12 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

const GlobalCTA = ({ data, page }) => {
	const { sectionLabel, headingLine1, headingLine2, ctaLabel, image } = data || {};
	return (
		<div className='grid lg:grid-cols-2'>
			<ImageWindow
				image={image}
				alt='Historic downtown Main Street with shops, parked cars, and string lights'
				preset='globalCtaWindow'
				sizes='(max-width: 767px) 100vw, 50vw'
				className='h-[20rem] lg:h-auto 3xl:h-[35rem] order-2 lg:order-1 mx-1 sm:mx-1.25 md:mx-2.5 lg:mx-0 mb-5 lg:mb-0'
			/>
			<motion.div
				className='order-1 lg:order-2 py-5 lg:py-8.75 px-1 sm:px-1.25 lg:px-0 lg:pl-6.25 lg:pr-4 space-y-2.5 border-t border-dark/50 flex flex-col justify-center'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.4 }}
				variants={textContainer}
			>
				<motion.div variants={textItem}>
					<SectionHeading
						label={sectionLabel}
						heading={headingLine1}
						headingLine2={headingLine2}
					/>
				</motion.div>
				<motion.div variants={textItem}>
					<ButtonLink href='/contact' variant='primary-on-light' className='self-start' event={`Global CTA - ${page}-page`}>
						{ctaLabel}
					</ButtonLink>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default GlobalCTA;