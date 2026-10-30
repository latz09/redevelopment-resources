// components/sections/article-page/PortableTextComponents.js
//
// Component map for @portabletext/react, covering every block/style/list/
// mark/type in blogPost.js's body field. Usage in the Article page:
//
//   <div className="space-y-1.5 lg:space-y-2">
//     <PortableText value={body} components={portableTextComponents} />
//   </div>
//
// The space-y wrapper is the caller's job, not this file's - keeps block
// spacing a presentation decision made where the body actually renders.

import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import SanityImage from '@/components/ui/SanityImage';
import ButtonLink from '@/components/ui/ButtonLink';

const getYouTubeId = (url) => {
	if (!url) return null;
	const match = url.match(
		/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
	);
	return match ? match[1] : null;
};

const isExternalLink = (href = '') => /^https?:\/\//.test(href);

// Shared small/medium/large display-size convention for the image and
// youTube body types - `large` (the default, for any content that predates
// this field) keeps the original full-width look; medium/small cap the
// width, but only from `md` up. Below that, a 45%-wide image on a ~375px
// phone screen is only ~170px wide - not usable - so small/medium both stay
// full-width on mobile and only shrink once there's enough room for it to
// matter.
const SIZE_CLASS = {
	small: 'max-w-full md:max-w-[45%]',
	medium: 'max-w-full md:max-w-[70%]',
	large: 'max-w-full',
};

export const portableTextComponents = {
	block: {
		// Flipped model from the first attempt: instead of only tightening the
		// one sibling right after a heading, every non-heading block gets its
		// own !mt-1.25 (the "within a section" gap), and headings are left to
		// inherit the wrapper's normal space-y-1.5/2 margin-top undisturbed
		// (the "between sections" gap). That's what makes two consecutive
		// paragraphs - or a paragraph followed by a list - sit tight
		// together, since each one's own margin-top is small regardless of
		// whether the previous sibling was a heading or more body copy.
		// first:!mt-0 matches space-y's own behavior of not adding margin-top
		// above the very first block in the body.
		normal: ({ children }) => (
			<p className='text-paragraph !mt-1.25 first:!mt-0'>{children}</p>
		),
		h2: ({ children }) => <h2>{children}</h2>,
		h3: ({ children }) => <h3>{children}</h3>,
		h4: ({ children }) => <h4>{children}</h4>,
		// Uses the guide's dedicated "Quote Callout" type style (.text-callout,
		// Cabinet Grotesk, larger/bolder) rather than italicized body text -
		// this is the actual pull-quote treatment defined in globals.css.
		blockquote: ({ children }) => (
			<blockquote className='border-l-4 border-primary pl-1.25 py-0.25 text-callout text-dark/80 !mt-1.25 first:!mt-0'>
				{children}
			</blockquote>
		),
		// Shaded-box alternative to blockquote - regular body copy, no left
		// rule, for pulling out a stat or key line rather than an attributed
		// quote. Distinct from the .text-callout CSS class above - same word,
		// unrelated concepts (schema block style vs. a typography class).
		callout: ({ children }) => (
			<div className='bg-secondary/20 border border-accent/50 rounded p-1.25 text-callout !mt-1.25 first:!mt-0'>
				{children}
			</div>
		),
	},

	list: {
		// Same !mt-1.25 first:!mt-0 pattern as every other non-heading block
		// now (see the comment on `normal` above) - a list is just another
		// "within a section" block, tight to whatever precedes it.
		bullet: ({ children }) => (
			<ul className='list-disc pl-2 space-y-0.5 text-paragraph !mt-1.25 first:!mt-0'>
				{children}
			</ul>
		),
		number: ({ children }) => (
			<ol className='list-decimal pl-2 space-y-0.5 text-paragraph !mt-1.25 first:!mt-0'>
				{children}
			</ol>
		),
	},
	listItem: {
		bullet: ({ children }) => <li>{children}</li>,
		number: ({ children }) => <li>{children}</li>,
	},

	marks: {
		strong: ({ children }) => (
			<strong className='font-semibold'>{children}</strong>
		),
		em: ({ children }) => <em className='italic'>{children}</em>,
		link: ({ value, children }) => {
			const href = value?.href || '#';
			// text-secondary, not text-primary - body copy already inherits
			// --heading-color (= primary/navy), so a primary-colored link would
			// be invisible without the underline. secondary is this project's
			// --accent-color, the designated "stands out" color.
			const linkClass =
				'underline underline-offset-4 font-[600] text-secondary hover:opacity-70 transition';
			if (isExternalLink(href)) {
				return (
					<a
						href={href}
						target='_blank'
						rel='noopener noreferrer'
						className={linkClass}
					>
						{children}
					</a>
				);
			}
			return (
				<Link href={href} className={linkClass}>
					{children}
				</Link>
			);
		},
	},

	types: {
		// Variable-aspect slot - each body image keeps its own source shape
		// (a chart screenshot and a photo aren't the same ratio), so this
		// computes customSize from the asset's own metadata rather than a
		// fixed IMAGE_PRESETS entry.
		//
		// Display size: `value.size` (small/medium/large, set in the Studio -
		// see SIZE_CLASS above) drives both the rendered width and the actual
		// fetched resolution (targetWidth scaled to match) - no point
		// requesting a 1400px-wide file for an image that only ever displays
		// at ~45% of the column.
		image: ({ value }) => {
			if (!value?.asset) return null;
			const ratio = value.asset?.metadata?.dimensions?.aspectRatio || 3 / 2;
			const size = value.size || 'large';
			const widthScale = { small: 0.45, medium: 0.7, large: 1 }[size] ?? 1;
			const targetWidth = Math.round(1400 * widthScale);
			const height = Math.round(targetWidth / ratio);
			// Breakpoint matches SIZE_CLASS's md cutoff, not lg - small/medium
			// stay full-width below md now, so the fetched resolution should
			// follow the same cutoff rather than switching a breakpoint early.
			const sizesAttr =
				size === 'small'
					? '(max-width: 768px) 100vw, 21rem'
					: size === 'medium'
						? '(max-width: 768px) 100vw, 32rem'
						: '(max-width: 1024px) 100vw, 46rem';
			return (
				<figure
					className={`space-y-0.5 !mt-1.25 first:!mt-0 ${SIZE_CLASS[size] || SIZE_CLASS.large}`}
				>
					<div
						className='relative w-full rounded overflow-hidden'
						style={{ aspectRatio: ratio }}
					>
						<SanityImage
							image={value}
							alt={value.alt || ''}
							customSize={{ width: targetWidth, height, quality: 90 }}
							fill
							sizes={sizesAttr}
						/>
					</div>
					{value.caption && (
						<figcaption className='text-paragraph-sm text-dark/60'>
							{value.caption}
						</figcaption>
					)}
				</figure>
			);
		},

		// Native Portable Text table (table -> rows -> cells -> value[]).
		// Each cell's value is itself a block array, so it recurses through
		// this same component map - a bold word or link inside a cell works.
		table: ({ value }) => {
			if (!value?.rows?.length) return null;
			const headerRows = value.headerRows || 0;
			return (
				<div className='overflow-x-auto !mt-1.25 first:!mt-0'>
					<table className='w-full border-collapse'>
						<tbody>
							{value.rows.map((row, rowIndex) => {
								const isHeaderRow = rowIndex < headerRows;
								const Cell = isHeaderRow ? 'th' : 'td';
								return (
									<tr key={row._key} className='border-b border-accent/50'>
										{row.cells.map((cell, cellIndex) => {
											const isHeaderCol = cellIndex === 0;
											return (
												<Cell
													key={cell._key}
													className={`text-left align-top p-1 text-paragraph ${
														isHeaderRow || isHeaderCol
															? 'bg-accent/15 font-semibold'
															: ''
													}`}
												>
													<PortableText
														value={cell.value}
														components={portableTextComponents}
													/>
												</Cell>
											);
										})}
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			);
		},

		// Same small/medium/large display-size convention as the image type
		// above - only the container width changes, aspect-video keeps the
		// player's own ratio correct at any size.
		youTube: ({ value }) => {
			const id = getYouTubeId(value?.url);
			if (!id) return null;
			const size = value?.size || 'large';
			return (
				<figure
					className={`space-y-0.5 !mt-1.25 first:!mt-0 ${SIZE_CLASS[size] || SIZE_CLASS.large}`}
				>
					<div className='relative w-full aspect-video rounded overflow-hidden'>
						<iframe
							src={`https://www.youtube.com/embed/${id}`}
							title={value.caption || 'YouTube video'}
							className='absolute inset-0 w-full h-full'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						/>
					</div>
					{value.caption && (
						<figcaption className='text-paragraph-sm text-dark/60'>
							{value.caption}
						</figcaption>
					)}
				</figure>
			);
		},

		// Inline CTA - text + button in a bordered card, deliberately not a
		// full-bleed section like the site's GlobalCTA.
		ctaBlock: ({ value }) => {
			if (!value?.label || !value?.url) return null;
			return (
				<div className='border border-accent/50 rounded p-1.5 lg:p-2 space-y-1 bg-accent/10 !mt-1.25 first:!mt-0'>
					{value.text && <p className='text-paragraph'>{value.text}</p>}
					<ButtonLink
						href={value.url}
						variant='primary-on-light'
						event={`Article CTA - ${value.label}`}
					>
						{value.label}
					</ButtonLink>
				</div>
			);
		},
	},
};