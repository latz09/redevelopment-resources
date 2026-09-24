// components/sections/shared/TestimonialSection.js
'use client';

import { truncateQuote } from '@/lib/text/truncateQuote';
import { useEffect, useState } from 'react';
import {
	AnimatePresence,
	animate,
	motion,
	useMotionValue,
	useReducedMotion,
	useTransform,
} from 'framer-motion';
import SplitContent from '@/components/layout/SplitContent';
import SectionHeading from '@/components/ui/SectionHeading';

const stripQuoteMarks = (str) =>
	str?.trim().replace(/^["']+|["']+$/g, '') ?? '';

// Strip stray quote marks first, then cap the length. The hidden height-lock
// stack and the visible quote both use this so they always match.
const cleanQuote = (str) => truncateQuote(stripQuoteMarks(str));

// "Former Mayor, Elkhorn, WI" — skips the comma if either piece is missing
const attribution = (q) => [q?.title, q?.location].filter(Boolean).join(', ');

// Swipe thresholds — same shape as the drag-to-scroll carousels elsewhere in
// this codebase (GalleryCarousel, SuccessOnWater): a small distance OR a
// fast flick either counts as a deliberate swipe.
const SWIPE_DISTANCE = 60;
const SWIPE_VELOCITY = 400;

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

	// Dragging the quote itself swipes to the next/prev testimonial —
	// right-to-left (negative offset) goes next, left-to-right goes prev.
	const onDragEnd = (_, info) => {
		if (total <= 1) return;
		const { offset, velocity } = info;
		if (offset.x <= -SWIPE_DISTANCE || velocity.x <= -SWIPE_VELOCITY) {
			next();
		} else if (offset.x >= SWIPE_DISTANCE || velocity.x >= SWIPE_VELOCITY) {
			prev();
		}
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

					{/* Quote — draggable. touchAction: 'pan-y' lets the page still
					    scroll vertically on touch while this element claims
					    horizontal drag for the swipe. */}
					<div className='relative mb-1.25 lg:mb-4 overflow-hidden'>
						{/* height lock stack, unchanged */}
						<div
							className='grid invisible pointer-events-none'
							aria-hidden='true'
						>
							{quotes.map((quote) => (
								<div key={quote._id} className='col-start-1 row-start-1'>
									<p className='text-callout'>
										&ldquo;{cleanQuote(quote.quote)}&rdquo;
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
								drag={total > 1 ? 'x' : false}
								dragConstraints={{ left: 0, right: 0 }}
								dragElastic={0}
								dragMomentum={false}
								onDragEnd={onDragEnd}
								style={{ touchAction: 'pan-y' }}
								className='absolute inset-0 cursor-grab active:cursor-grabbing select-none'
							>
								<p className='text-callout'>
									&ldquo;{cleanQuote(current.quote)}&rdquo;
								</p>
							</motion.div>
						</AnimatePresence>
					</div>

					{/* Attribution */}
					<div className='relative mt-1.25 lg:mt-0'>
						{/* Same type classes as the visible layer below, so the
						    reserved height matches what's actually rendered. */}
						<div
							className='grid invisible pointer-events-none'
							aria-hidden='true'
						>
							{quotes.map((quote) => (
								<div
									key={quote._id}
									className='col-start-1 row-start-1 space-y-0.5'
								>
									<p className='text-paragraph-lg'>{quote.name}</p>
									<p className='text-paragraph'>{attribution(quote)}</p>
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
								<p className='text-paragraph-lg'>{current.name}</p>
								<p className='text-paragraph'>{attribution(current)}</p>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			}
		/>
	);
};

export default TestimonialSection;

const Arrows = ({
	onPrev,
	onNext,
	canPrev = true,
	canNext = true,
	className,
}) => {
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
