// utils/lib/truncateQuote.js
export const QUOTE_MAX_CHARS = 300; // keep in sync with Rule.max() on pullQuote in Studio

export function truncateQuote(text, max = QUOTE_MAX_CHARS) {
	if (!text || text.length <= max) return text;

	// Leave room for the ellipsis, then back up to the last full word
	const cut = text.slice(0, max - 1);
	const lastSpace = cut.lastIndexOf(' ');
	const base = lastSpace > 0 ? cut.slice(0, lastSpace) : cut;

	// Don't end on dangling punctuation ("plan," → "plan…")
	return base.replace(/[\s,;:.\-–—]+$/, '') + '…';
}