// components/ui/TrackedLink.js
'use client';

import Link from 'next/link';
import { track } from '@vercel/analytics';

/**
 * Unstyled Link with built-in click tracking — the "escape hatch" for spots
 * that need custom markup/styling (nav items, cards) but still want the
 * same event-tracking convention as ButtonLink.
 * @param {string} href - The destination link.
 * @param {string} event - Event name passed straight to track() — no prefix
 *   added, since conventions vary by spot (e.g. "CTA Click - Navbar - X" vs
 *   "services-overview-X"). Build the full string at the call site.
 * @param {object} eventData - Extra fields merged into the tracked payload
 *   (destination is always included automatically).
 */
export default function TrackedLink({
	href = '/',
	event,
	eventData = {},
	onClick,
	children,
	...props
}) {
	const handleClick = (e) => {
		if (event) {
			track(event, { destination: href, ...eventData });
		}
		onClick?.(e);
	};

	return (
		<Link href={href} onClick={handleClick} {...props}>
			{children}
		</Link>
	);
}