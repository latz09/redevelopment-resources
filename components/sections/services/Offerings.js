// components/sections/service-page/Offerings.js
'use client';

import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import ImageWindow from '@/components/ui/ImageWindow';

const gridContainer = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.08 } },
};

const gridItem = {
	hidden: { opacity: 0, y: 12 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
	},
};

const Offerings = ({ data }) => {
	const { sectionLabel, heading, items, image } = data || {};

	const cols =
		items?.length === 2 || items?.length === 4
			? 'md:grid-cols-2'
			: 'md:grid-cols-2 lg:grid-cols-3';

	const hasIcons = items?.some((item) => item?.icon?.url);

	return (
		<Section className='border-t border-dark/50'>
			<motion.div
				initial={{ opacity: 0, y: 12 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.4 }}
				transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
			>
				<SectionHeading label={sectionLabel} heading={heading} as='h2' />
			</motion.div>

			{items?.length > 0 && (
				<motion.ul
					className={`grid ${cols} border-t border-l border-dark/50 mt-2.5 lg:my-4`}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}
					variants={gridContainer}
				>
					{items.map((item, index) => (
						<OfferingCard key={index} hasIcons={hasIcons} {...item} />
					))}
				</motion.ul>
			)}
			<ImageWindow
				image={image}
				alt=''
				preset='servicesWindow'
				sizes='(min-width: 1728px) 1728px, 100vw'
				className='hidden md:block h-[31.25rem] 2xl:h-[37.25rem] rounded mt-2.5 lg:mt-4'
			/>
		</Section>
	);
};

export default Offerings;

const OfferingCard = ({ icon, title, description, hasIcons }) => {
	const iconUrl = icon?.url;

	return (
		<motion.li
			variants={gridItem}
			className='row-span-3 grid [grid-template-rows:subgrid] gap-0 bg-light p-1.25 border-r border-b border-dark/50'
		>
			<div>
				{iconUrl && (
					<div className='size-4.5 grid place-items-center rounded'>
						<img src={iconUrl} alt='' className='size-4.5' />
					</div>
				)}
			</div>
			<div className={hasIcons ? 'mt-2 lg:mt-2.5' : ''}>
				{title && <h4>{title}</h4>}
			</div>
			<div className='mt-1'>
				{description && <p className='text-paragraph'>{description}</p>}
			</div>
		</motion.li>
	);
};
