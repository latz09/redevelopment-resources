'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SanityImage from '@/components/ui/SanityImage';

const ImageWindow = ({ image }) => {
	const containerRef = useRef(null);

const { scrollYProgress } = useScroll({
	target: containerRef,
	offset: ['start 0.85', 'end 0.15'],
});

	// The image sits 30% taller than its window. As the section scrolls
	// through view, it pans down slightly — the window reveals a bit more
	// of the image than what's shown at rest, per Alyssa's note.
	const y = useTransform(scrollYProgress, [0, 1], ['0%', '-28%']);

	if (!image?.asset) return null;

	return (
		<div
			ref={containerRef}
			className='hidden md:block relative h-[31.25rem] 2xl:h-[37.25rem] overflow-hidden rounded mt-2.5 lg:mt-4'
		>
			<motion.div className='absolute inset-x-0 top-0 h-[150%]' style={{ y }}>
				<SanityImage
					image={image}
					alt='Aerial view of a riverside community at sunset'
					preset='servicesWindow'
					fill
					sizes='(min-width: 1728px) 1728px, 100vw'
				/>
			</motion.div>
		</div>
	);
};

export default ImageWindow;