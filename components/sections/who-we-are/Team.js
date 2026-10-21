// components/sections/who-we-are/Team.js
'use client';

import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import MemberGrid from '@/components/ui/MemberGrid';

const rowContainer = {
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

const Team = ({ data }) => {
	const { sectionLabel, heading, intro, members } = data ? data : {};
	return (
		<Section bg='bg-dark' className='border-t border-dark/50'>
			<motion.div
				className='relative pb-2.5 lg:pb-4'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.4 }}
				variants={rowContainer}
			>
				<motion.div
					variants={barsContainer}
					className='flex absolute right-0 bottom-0 items-end gap-[9.3rem] lg:gap-8.5 h-[20rem] lg:h-[22.72rem] pointer-events-none select-none'
				>
					<motion.div
						variants={barItem}
						style={{ transformOrigin: 'bottom' }}
						className='w-4.5 h-[61%] bg-light/15'
					/>
					<motion.div
						variants={barItem}
						style={{ transformOrigin: 'bottom' }}
						className='w-4.5 h-full bg-light/15'
					/>
					<motion.div
						variants={barItem}
						style={{ transformOrigin: 'bottom' }}
						className='hidden lg:block w-4.5 h-[61%] bg-light/15'
					/>
				</motion.div>
				<div className='relative z-10 grid lg:grid-cols-2 items-center gap-1.5 lg:gap-6.5'>
					<motion.div variants={fadeUpItem} className='max-w-[34.625rem]'>
						<SectionHeading label={sectionLabel} heading={heading} onDark='true' />
					</motion.div>
					<motion.p variants={fadeUpItem} className='text-paragraph-lg text-light'>
						{intro}
					</motion.p>
				</div>
			</motion.div>
			<MemberGrid members={members} columns={3} />
		</Section>
	);
};

export default Team;