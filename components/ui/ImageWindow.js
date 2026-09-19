// components/ui/ImageWindow.js
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SanityImage from '@/components/ui/SanityImage';

/**
 * Scroll-parallax "window" effect: the image renders 50% taller than its
 * visible frame (`h-[150%]`) and pans upward as the section scrolls
 * through view, revealing more of the image than what's shown at rest.
 *
 * Sizing (height, rounding, responsive visibility) is entirely up to the
 * caller via `className` — this component only owns the scroll math and
 * the oversized-image-plus-pan mechanism, so it drops into any aspect
 * ratio or layout position.
 */
const ImageWindow = ({
	image,
	alt,
	preset,
	customSize,
	sizes = '100vw',
	className = '',
	panPercent = 28,
}) => {
	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start 0.85', 'end 0.15'],
	});

	const y = useTransform(scrollYProgress, [0, 1], ['0%', `-${panPercent}%`]);

	if (!image?.asset) return null;

	return (
		<div ref={containerRef} className={`relative overflow-hidden ${className}`}>
			<motion.div className='absolute inset-x-0 top-0 h-[150%]' style={{ y }}>
				<SanityImage image={image} alt={alt} preset={preset} customSize={customSize} fill sizes={sizes} />
			</motion.div>
		</div>
	);
};

export default ImageWindow;