// components/sections/home-page/WhoWeServe.js
'use client';

import { motion } from 'framer-motion';
import ButtonLink from '@/components/ui/ButtonLink';
import SectionHeading from '@/components/ui/SectionHeading';
import SanityImage from '@/components/ui/SanityImage';

const topRowContainer = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUpItem = {
	hidden: { opacity: 0, y: 12 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

const barsContainer = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const barItem = {
	hidden: { scaleY: 0 },
	visible: { scaleY: 1, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

const cardGridContainer = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.15 } },
};

const cardItem = {
	hidden: { opacity: 0, y: 12 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

const WhoWeServe = ({ data }) => {
	const { sectionLabel, heading, publicSectorCard, privateSectorCard } = data
		? data
		: {};
	return (
		<section className='relative overflow-hidden bg-dark'>
			<div className='relative z-10 section-x-padding pb-5 lg:pb-8.75'>
				<motion.div
					className='relative lg:flex lg:items-end lg:justify-between'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.4 }}
					variants={topRowContainer}
				>
					<motion.div variants={fadeUpItem} className='relative z-10 py-2.5 lg:py-4'>
						<SectionHeading onDark={true} label={sectionLabel} heading={heading} />
					</motion.div>
					<motion.div
						variants={barsContainer}
						className='absolute lg:static top-0 right-0 flex items-end gap-5.5 lg:gap-8.5 h-full lg:h-[25rem] pointer-events-none select-none'
					>
						<motion.div
							variants={barItem}
							style={{ transformOrigin: 'bottom' }}
							className='w-2.5 lg:w-4.5 h-[61%] bg-light/15'
						/>
						<motion.div
							variants={barItem}
							style={{ transformOrigin: 'bottom' }}
							className='w-2.5 lg:w-4.5 h-full bg-light/15'
						/>
						<motion.div
							variants={barItem}
							style={{ transformOrigin: 'bottom' }}
							className='hidden lg:block w-2.5 lg:w-4.5 h-[61%] bg-light/15'
						/>
					</motion.div>
				</motion.div>

				<motion.div
					className='grid lg:grid-cols-2 gap-[1px] bg-accent/50 border border-accent/50'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}
					variants={cardGridContainer}
				>
					<motion.div variants={cardItem} className='h-full'>
						<SectorCard
							data={publicSectorCard}
							alt='State capitol building surrounded by autumn trees'
							href='/who-we-serve/#public-sector'
						/>
					</motion.div>
					<motion.div variants={cardItem} className='h-full'>
						<SectorCard
							data={privateSectorCard}
							alt='Hands reviewing architectural floor plans at a table'
							href='/who-we-serve/#private-sector'
						/>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default WhoWeServe;

const SectorCard = ({ data, alt, href }) => {
	const { title, description, ctaLabel, image } = data ? data : {};
	return (
		<div className='h-full bg-dark space-y-2.5 p-1.25 group hover:bg-light transition duration-500'>
			<div className='relative h-[12.5rem] md:h-[23.625rem] 2xl:h-[26rem]'>
				<SanityImage
					image={image}
					alt={alt}
					preset='sectorCard'
					fill
					className='rounded'
					sizes='(min-width: 1024px) 50vw, 100vw'
				/>
			</div>
			<div>
				<h4 className='text-light group-hover:text-dark transition duration-500'>
					{title}
				</h4>
				<p className='text-paragraph text-light group-hover:text-dark transition duration-500'>
					{description}
				</p>
			</div>
			<ButtonLink
				href={href}
				variant='primary-on-dark'
				className='group-hover:text-dark group-hover:bg-light transition duration-1000 hover:border-dark'
			>
				{ctaLabel}
			</ButtonLink>
		</div>
	);
};