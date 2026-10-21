// components/sections/who-we-are/Interns.js
'use client';

import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import MemberGrid from '@/components/ui/MemberGrid';

const barsContainer = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const barItem = {
	hidden: { scaleY: 0 },
	visible: { scaleY: 1, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

const Interns = ({ data }) => {
	const { sectionLabel, heading, intro, members } = data ? data : {};
	return (
		<Section bg='bg-dark' py='pb-5 lg:pb-8.75'>
			<div className='relative pb-2.5 lg:pb-4'>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.4 }}
					variants={barsContainer}
					className='flex absolute right-0 bottom-0 items-end gap-[9.3rem] lg:gap-8.5 h-[16.75rem] lg:h-[18.65rem] pointer-events-none select-none'
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
					<div className='max-w-[34.625rem]'>
						<SectionHeading label={sectionLabel} heading={heading} onDark='true' />
					</div>
					<p className='text-paragraph-lg text-light'>{intro}</p>
				</div>
			</div>
			<MemberGrid members={members} columns={4} />
		</Section>
	);
};

export default Interns;