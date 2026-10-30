// components/sections/article-page/RelatedArticles.js
//
// Dark 3-col section at the bottom of the article detail page. Card titles
// use the same arbitrary-size override as ArticleCard on the index page,
// for the same reason (h3/h4's global clamp sizes are too large for a
// repeated card title). Same no-image placeholder as ArticleCard - but the
// placeholder box itself is bg-light here (not bg-secondary), so it uses
// the dark logo mark instead of the white one, same light-background
// pairing ArticleCard uses when it's not hovered.
//
// Borders: an outer border-y wrapper plus border-x on each card, so the
// grid lines read correctly across every column width (3-up on desktop,
// 1-up on mobile) without relying on a gap+bg trick.
//
// Spacing/datapoints matched to ArticleCard: gap-1, p-1.25, and the same
// date eyebrow (text-overline text-secondary) above the title - no hover
// color override needed here since, unlike ArticleCard, this card's
// background never changes on hover.

import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/layout/Section';
import SanityImage from '@/components/ui/SanityImage';
import { ArrowGrow } from '@/components/ui/ButtonLink';
import { formatArticleDate } from '@/utils/formatDate';
import DefaultLogo from '@/public/images/logos/redevelopment-resources-dark.png';

const RelatedArticles = ({ posts = [] }) => {
	if (!posts.length) return null;

	return (
		<Section bg='bg-primary' py='py-5 lg:py-8.75' className='space-y-2'>
			<h2 className='text-light'>Related articles</h2>

			<div className='grid grid-cols-1 md:grid-cols-3 border-y border-light/10 '>
				{posts.map((post) => (
					<Link
						key={post._id}
						href={`/articles/${post.slug}`}
						className='group flex flex-col gap-1 p-1.25 bg-primary hover:bg-light transition duration-500 border-x border-light/10'
					>
						<div className='relative aspect-[397/219] rounded overflow-hidden bg-light'>
							{post.heroImage?.asset ? (
								<SanityImage
									image={post.heroImage}
									alt={post.title || ''}
									preset='articleCard'
									fill
									sizes='(max-width: 768px) 100vw, 33vw'
								/>
							) : (
								<div className='absolute inset-0 flex items-center justify-center p-2 group-hover:border group-hover:border-light/40 group-hover:bg-secondary/20 transition duration-500'>
									<Image
										src={DefaultLogo}
										alt=''
										className='h-auto object-contain'
									/>
								</div>
							)}
						</div>

						{post.publishedDate && (
							<p className='text-overline text-white group-hover:text-secondary '>
								{formatArticleDate(post.publishedDate)}
							</p>
						)}

						<h3 className='text-[1.2rem] lg:text-[1.4rem] leading-tight text-light group-hover:text-primary'>
							{post.title}
						</h3>
						<span className='mt-auto inline-flex items-center gap-0.5 text-button text-light/80 pt-0.5 group-hover:text-primary'>
							Read more
							<ArrowGrow />
						</span>
					</Link>
				))}
			</div>
		</Section>
	);
};

export default RelatedArticles;