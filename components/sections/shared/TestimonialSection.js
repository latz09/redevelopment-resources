// components/sections/shared/TestimonialSection.js
'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, animate, motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import SplitContent from '@/components/layout/SplitContent';
import SectionHeading from '@/components/ui/SectionHeading';

const stripQuoteMarks = (str) =>
	str?.trim().replace(/^["']+|["']+$/g, '') ?? '';

// Counts up/down to `value` instead of sliding — used for the "01 / 03" index,
// which shouldn't share the quote's enter/exit slide animation.
const Counter = ({ value }) => {
	const reduceMotion = useReducedMotion();
	const motionVal = useMotionValue(value);
	const rounded = useTransform(motionVal, (v) => Math.round(v));
	const [display, setDisplay] = useState(value);

	useEffect(() => {
		if (reduceMotion) {
			motionVal.set(value);
			setDisplay(value);
			return;
		}
		const controls = animate(motionVal, value, {
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1],
		});
		return controls.stop;
	}, [value, reduceMotion, motionVal]);

	useEffect(() => rounded.on('change', (v) => setDisplay(v)), [rounded]);

	return <>{String(display).padStart(2, '0')}</>;
};

const TestimonialSection = ({ data, quotes }) => {
	const { sectionLabel, heading } = data ? data : {};
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(0);
	const reduceMotion = useReducedMotion();

	if (!quotes?.length) return null;

	const total = quotes.length;
	const current = quotes[index];

	const prev = () => {
		setDirection(-1);
		setIndex((i) => (i - 1 + total) % total);
	};
	const next = () => {
		setDirection(1);
		setIndex((i) => (i + 1) % total);
	};

	const variants = {
		enter: (dir) => ({ opacity: 0, x: reduceMotion ? 0 : dir > 0 ? 24 : -24 }),
		center: { opacity: 1, x: 0 },
		exit: (dir) => ({ opacity: 0, x: reduceMotion ? 0 : dir > 0 ? -24 : 24 }),
	};
	const transition = {
		duration: reduceMotion ? 0.25 : 0.5,
		ease: [0.22, 1, 0.36, 1],
	};

	return (
		<SplitContent
			left={
				<div className='flex flex-col justify-between h-full gap-2.5 lg:gap-5.75'>
					<SectionHeading
						label={sectionLabel}
						heading={heading}
						as='h2'
						onDark={false}
					/>
					<Arrows onPrev={prev} onNext={next} className='place-self-end' />
				</div>
			}
			right={
				<div className='flex flex-col justify-between h-full gap-1.5 lg:gap-3.5 pb-1.75 lg:pb-0 '>
					{/* Index counter — counts, doesn't slide */}
					<p className='text-overline'>
						<Counter value={index + 1} />
						{` / ${String(total).padStart(2, '0')}`}
					</p>

					{/* Quote */}
					<div className='relative mb-4'>
						<div
							className='grid invisible pointer-events-none'
							aria-hidden='true'
						>
							{quotes.map((quote) => (
								<div
									key={quote._id}
									className='col-start-1 row-start-1'
								>
									<p className='text-'>
										&ldquo;{stripQuoteMarks(quote.quote)}d\&rdquo;
									</p>
								</div>
							))}
						</div>
						<AnimatePresence custom={direction} initial={false}>
							<motion.div
								key={current._id}
								custom={direction}
								variants={variants}
								initial='enter'
								animate='center'
								exit='exit'
								transition={transition}
								className='absolute inset-0'
							>
							<p className='text-callout '>&ldquo;{stripQuoteMarks(current.quote)}&rdquo;</p>
							</motion.div>
						</AnimatePresence>
					</div>

					{/* Attribution */}
					<div className='relative mt-3 lg:mt-0'>
						<div
							className='grid invisible pointer-events-none '
							aria-hidden='true'
						>
							{quotes.map((quote) => (
								<div key={quote._id} className='col-start-1  row-start-1'>
									<p className='text-caption font-semibold'>{quote.name}</p>
									<p className='text-caption'>
										{quote.title}, {quote.location}
									</p>
								</div>
							))}
						</div>
						<AnimatePresence custom={direction} initial={false}>
							<motion.div
								key={current._id}
								custom={direction}
								variants={variants}
								initial='enter'
								animate='center'
								exit='exit'
								transition={{ ...transition, delay: reduceMotion ? 0 : 0.06 }}
								className='absolute inset-0 space-y-0.5'
							>
								<p className='text-paragraph-lg '>{current.name}</p>
								<p className='text-paragraph'>
									{current.title}, {current.location}
								</p>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			}
		/>
	);
};

export default TestimonialSection;

const Arrows = ({ onPrev, onNext, canPrev = true, canNext = true, className }) => {
	return (
		<div className={`flex ${className || ''}`}>
			<motion.button
				type='button'
				onClick={onPrev}
				disabled={!canPrev}
				aria-label='Previous testimonial'
				whileTap={{ scale: 0.85 }}
				transition={{ duration: 0.15 }}
				className='text-dark px-[1.12rem] py-[0.75rem] border-b border-t border-l rounded-l hover:border-dark  transition disabled:opacity-30 enabled:hover:bg-dark enabled:hover:text-light'
			>
				<svg
					className='h-[1.08rem] w-[1.08rem] lg:h-[1.16rem] lg:w-[1.16rem] 3xl:w-[1.35rem] 3xl:h-[1.35rem]'
					viewBox='0 0 20 18'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M9.19828 0.534667L1.06925 8.53467L9.19828 16.5347M1.06925 8.53467L15.0692 8.53467L19.0854 8.53467'
						stroke='currentColor'
						strokeWidth='1.5'
					/>
				</svg>
			</motion.button>
			<motion.button
				type='button'
				onClick={onNext}
				disabled={!canNext}
				aria-label='Next testimonial'
				whileTap={{ scale: 0.85 }}
				transition={{ duration: 0.15 }}
				className='text-dark px-[1.12rem] py-[0.75rem] border-b border-t border-r border-l rounded-r hover:border-dark  transition disabled:bg-dark enabled:hover:bg-dark enabled:hover:text-light'
			>
				<svg
					className='h-[1.08rem] w-[1.08rem] lg:h-[1.16rem] lg:w-[1.16rem] 3xl:w-[1.35rem] 3xl:h-[1.35rem]'
					viewBox='0 0 20 18'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M9.88708 16.5347L18.0161 8.53467L9.88708 0.534668M18.0161 8.53467H4.01611H0'
						stroke='currentColor'
						strokeWidth='1.5'
					/>
				</svg>
			</motion.button>
		</div>
	);
};