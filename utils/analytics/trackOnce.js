// utils/analytics/trackOnce.js
import { track } from '@vercel/analytics';

/**
 * Fires a Vercel Analytics event at most once per browser session (per tab,
 * cleared on close — sessionStorage not localStorage, since this is meant to
 * catch "did this person engage at all this visit," not across visits).
 *
 * Use for interactions you only care about the FIRST time they happen (did
 * they click through testimonials at all?) rather than every repeat click,
 * which would otherwise flood the data from one visitor flipping through
 * every quote.
 *
 * @param {string} key - Unique sessionStorage key for this event (e.g.
 *   'testimonial-interaction'). Scope it to the interaction, not the page,
 *   if the same page has multiple independently-tracked-once things.
 * @param {string} eventName - Event name passed to track().
 * @param {object} eventData - Extra fields merged into the tracked payload.
 */
export const trackOnce = (key, eventName, eventData = {}) => {
	if (typeof window === 'undefined') return;

	const storageKey = `tracked:${key}`;
	try {
		if (sessionStorage.getItem(storageKey)) return;
		sessionStorage.setItem(storageKey, '1');
	} catch {
		// sessionStorage unavailable (privacy mode, etc.) — fall through and
		// track anyway rather than silently dropping the event
	}

	track(eventName, eventData);
};