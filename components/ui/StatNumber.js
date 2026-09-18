// components/ui/StatNumber.js
'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

// Parses "165+" → target 165, suffix "+". Starts the count a little below
// the target (not from zero) so it reads as a quick tick-up, not a countdown.
const StatNumber = ({ value }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	const match = String(value ?? '').match(/^(\d+)(.*)$/);
	const target = match ? parseInt(match[1], 10) : 0;
	const suffix = match ? match[2] : '';
	const start = Math.max(0, target - 16);

	const [display, setDisplay] = useState(start);

	useEffect(() => {
		if (!isInView) return;

		const reduceMotion =
			typeof window !== 'undefined' &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (reduceMotion) {
			setDisplay(target);
			return;
		}

		const controls = animate(start, target, {
			duration: 1.2,
			ease: 'easeOut',
			onUpdate: (v) => setDisplay(Math.round(v)),
		});

		return () => controls.stop();
	}, [isInView, start, target]);

	return (
		<span ref={ref}>
			{display}
			{suffix}
		</span>
	);
};

export default StatNumber;