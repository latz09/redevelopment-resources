// components/sections/shared/WorkShowcase.js
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import SanityImage from '@/components/ui/SanityImage';
import ButtonLink from '@/components/ui/ButtonLink';

const rowVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

const WorkShowcase = ({
	sectionLabel,
	heading,
	intro,
	items = [],
	centerText = false,
	initialCount = 5, // rows shown on first load
	step = 3, // rows added per "Load more" click
}) => {
	const [visible, setVisible] = useState(initialCount);
	const reduceMotion = useReducedMotion();

	const total = items.length;
	const shown = Math.min(visible, total);
	const hasMore = shown < total;

	// Tracks how many rows were on screen BEFORE the latest render, so only
	// rows added by the most recent click get a stagger delay — rows already
	// on screen don't replay their entrance animation (Framer only runs
	// initial → animate once per mount, and these rows never unmount).
	const priorShown = useRef(initialCount);
	useEffect(() => {
		priorShown.current = shown;
	}, [shown]);

	return (
		<section className='bg-primary pb-5 lg:pb-8.75'>
			<div className='section-x-padding grid lg:grid-cols-2 gap-1.5 lg:gap-0 pt-5 pb-3.5 lg:pt-8.75 lg:pb-4'>
				<div className='lg:pr-2 w-[90%]'>
					<SectionHeading
						label={sectionLabel}
						heading={heading}
						as='h2'
						onDark
					/>
				</div>
				{intro && (
					<div className='lg:pl-2 flex flex-col justify-end'>
						<p className='text-paragraph-lg text-light'>{intro}</p>
					</div>
				)}
			</div>

			{total > 0 && (
				<ul>
					{items.slice(0, shown).map((item, i) => {
						const newlyAdded = i >= priorShown.current;
						const delay =
							!reduceMotion && newlyAdded ? (i - priorShown.current) * 0.08 : 0;

						return (
							<motion.li
								key={item.id}
								initial={reduceMotion ? false : 'hidden'}
								animate='visible'
								variants={rowVariants}
								transition={{
									duration: reduceMotion ? 0 : 0.45,
									delay,
									ease: [0.22, 1, 0.36, 1],
								}}
								className='border-t border-accent/50'
							>
								<WorkRow centerText={centerText} {...item} />
							</motion.li>
						);
					})}
				</ul>
			)}

			{hasMore && (
				<div className='border-t border-accent/50'>
					<div className='section-x-padding pt-3.5 lg:pt-4 flex flex-col items-center gap-1'>
						<motion.button
							type='button'
							onClick={() => setVisible((v) => v + step)}
							whileTap={{ scale: 0.95 }}
							transition={{ duration: 0.15 }}
							className='text-button inline-flex items-center justify-center rounded transition-all duration-300 py-[0.62rem] px-1 bg-primary text-white border border-white hover:border-light hover:bg-light hover:text-primary'
						>
							Load more
						</motion.button>
						<p className='text-caption text-accent' aria-live='polite'>
							{shown} of {total}
						</p>
					</div>
				</div>
			)}
		</section>
	);
};

export default WorkShowcase;

const WorkRow = ({
	image,
	location,
	tags = [],
	title,
	paragraphs = [],
	cta,
	centerText = false,
}) => {
	const hasImage = Boolean(image?.asset);
	const hasContentAbove = hasImage || paragraphs.length > 0;

	return (
		<div className='section-x-padding grid lg:grid-cols-2 lg:divide-x divide-accent/50'>
			<div className='lg:pr-4 pt-3.5 pb-1.5 lg:py-4'>
				{hasImage ? (
					<div className='relative aspect-[589/393] rounded overflow-hidden bg-light/10'>
						<SanityImage
							image={image}
							alt=''
							preset='workShowcase'
							fill
							sizes='(max-width: 1023px) 100vw, 50vw'
						/>
						{location && (
							<span className='absolute top-0.75 left-0.75 bg-light text-secondary text-overline px-1 py-0.5 rounded border border-secondary/50 font-[600]'>
								{location}
							</span>
						)}
					</div>
				) : (
					<div className='flex flex-col items-start gap-1.5'>
						{location && (
							<span className='bg-light text-secondary text-overline px-1 py-0.5 rounded border border-secondary/50 font-[600]'>
								{location}
							</span>
						)}
						<Heading tags={tags} title={title} />
					</div>
				)}
			</div>

			<div
				className={`lg:pl-4 pb-3.5 lg:py-4 flex flex-col ${
					centerText ? 'lg:justify-center' : ''
				}`}
			>
				{hasImage && <Heading tags={tags} title={title} className='mb-1.5' />}
				{paragraphs.length > 0 && (
					<div className='space-y-1.5'>
						{paragraphs.map((p, i) => (
							<p key={i} className='text-paragraph text-light'>
								{p}
							</p>
						))}
					</div>
				)}
				{cta && (
					<ButtonLink
						href={cta.href}
						variant='secondary-on-dark'
						className={`self-start ${hasContentAbove ? 'mt-2.5' : ''}`}
					>
						{cta.label}
					</ButtonLink>
				)}
			</div>
		</div>
	);
};

const Heading = ({ tags = [], title, className = '' }) => {
	if (!tags.length && !title) return null;
	return (
		<div className={`space-y-1 ${className}`}>
			{tags.length > 0 && (
				<p className='text-caption text-accent capitalize'>
					{tags.join(' · ')}
				</p>
			)}
			{title && <h4 className='text-light'>{title}</h4>}
		</div>
	);
};
