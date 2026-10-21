// components/sections/home-page/Hero.js
'use client';

import { motion, useReducedMotion } from 'framer-motion';
import SanityImage from '@/components/ui/SanityImage';
import ButtonLink from '@/components/ui/ButtonLink';
import SectionGraphic from '@/components/ui/SectionGraphic';

const textContainer = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const textItem = {
	hidden: { opacity: 0, y: 12 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

const Hero = ({ data }) => {
	const { headline, subheadline, primaryCta, secondaryCta, heroImage } = data
		? data
		: {};
	const reduceMotion = useReducedMotion();

	return (
		<header className='sticky top-0 z-0 grid grid-rows-[11fr_9fr] md:grid-rows-1 md:grid-cols-2 h-[calc(100svh-var(--hero-pt))]'>
			<div
				className='relative overflow-hidden md:overflow-visible bg-primary flex flex-col justify-end gap-1.5 py-5
		pl-[max(1rem,calc((100vw-1440px)/2+1rem))]
		sm:pl-[max(1.25rem,calc((100vw-1440px)/2+1.25rem))]
		md:pl-[max(2.5rem,calc((100vw-1440px)/2+2.5rem))]
		lg:pl-[max(5rem,calc((100vw-1440px)/2+5rem))]
		3xl:pl-[max(5rem,calc((100vw-1728px)/2+5rem))]'
			>
				<SectionGraphic
					variant='flag'
					className='absolute z-0 top-0 -left-0 md:left-0 h-full w-auto text-light/10 pointer-events-none select-none'
				/>

				<motion.div
					className='relative z-10 max-w-[36rem]'
					initial={reduceMotion ? false : 'hidden'}
					animate='visible'
					variants={textContainer}
				>
					{headline && (
						<motion.h1 variants={textItem} className='hero-title text-light'>
							{headline}
						</motion.h1>
					)}
					{subheadline && (
						<motion.p variants={textItem} className='text-paragraph text-light/80 mt-1'>
							{subheadline}
						</motion.p>
					)}
					<motion.div variants={textItem} className='flex flex-wrap gap-1 mt-1.5'>
						{primaryCta?.label && (
							<ButtonLink href={'/#services'} variant='primary-on-dark' event='Hero - Primary CTA'>
								{primaryCta.label}
							</ButtonLink>
						)}
						{secondaryCta?.label && (
							<ButtonLink href={'/our-projects'} variant='secondary-on-dark' event='Hero - Secondary CTA'>
								{secondaryCta.label}
							</ButtonLink>
						)}
					</motion.div>
				</motion.div>
			</div>

			<div className='relative h-full overflow-hidden'>
				<motion.div
					className='relative h-full'
					initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
				>
					<SanityImage
						image={heroImage}
						alt={headline || 'Hero image'}
						preset='hero'
						fill
						priority
						sizes='(max-width: 767px) 100vw, 50vw'
					/>
				</motion.div>
			</div>
		</header>
	);
};

export default Hero;