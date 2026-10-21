// QuickFacts.js
'use client';

import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';

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

const QuickFacts = ({ data }) => {
	const quickFacts = data || [];
	if (!quickFacts.length) return null;

	const cols =
		quickFacts.length === 2 || quickFacts.length === 4
			? 'md:grid-cols-2'
			: 'md:grid-cols-2 lg:grid-cols-3';

	return (
		<Section className='space-y-2.5 lg:space-y-4'>
			<motion.div
				initial={{ opacity: 0, y: 12 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.4 }}
				transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
			>
				<SectionHeading label='Quick facts' heading='Project overview' />
			</motion.div>
			<motion.ul
				className={`grid ${cols} border-t border-l border-dark/50`}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.2 }}
				variants={gridContainer}
			>
				{quickFacts.map((fact, index) => (
					<QuickFactCard key={index} {...fact} />
				))}
			</motion.ul>
		</Section>
	);
};

export default QuickFacts;

const QuickFactCard = ({ icon, text }) => {
	const iconUrl = icon?.url;

	return (
		<motion.li
			variants={gridItem}
			className='row-span-2 grid [grid-template-rows:subgrid] gap-0 bg-light p-1.25 border-r border-b border-dark/50'
		>
			<div>
				{iconUrl && (
					<div className='size-4.5'>
						<img src={iconUrl} alt='' className='size-4.5 rounded' />
					</div>
				)}
			</div>
			<div className='mt-2 lg:mt-2.5'>{text && <h6>{text}</h6>}</div>
		</motion.li>
	);
};
