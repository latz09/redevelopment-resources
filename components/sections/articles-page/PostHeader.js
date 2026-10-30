// components/sections/article-page/PostHeader.js
//
// Back link, date eyebrow, H1 title, byline, hero image, divider - the top
// of the article detail page per the Figma. `category` isn't rendered here;
// the Figma doesn't show a category tag on the detail page header (only on
// the index grid cards), so it's left unused rather than guessed in.

import Link from 'next/link';

import SanityImage from '@/components/ui/SanityImage';
import { formatArticleDate } from '@/utils/formatDate';
import BlogSection from '@/components/layout/BlogSection';

const PostHeader = ({ title, author, publishedDate, heroImage }) => {
	return (
		<div className='border-y border-accent'>
			<BlogSection as='header' py='py-2.5 lg:py-4' className='  '>
				<Link
					href='/articles'
					className='text-[0.875rem] text-dark font-[700] hover:text-secondary transition-colors duration-300 inline-block'
				>
					← Back to all resources
				</Link>

				<div className='space-y-1.25 mt-1.5'>
					{publishedDate && (
						<p className='text-overline text-secondary'>
							{formatArticleDate(publishedDate)}
						</p>
					)}
					<h1>{title}</h1>
					{author?.name && (
						<div className='flex items-center gap-1'>
							{author.headshot?.asset && (
								<div className='relative size-4 rounded-full overflow-hidden shrink-0'>
									<SanityImage
										image={author.headshot}
										alt={author.name}
										preset='authorHeadshot'
										fill
										sizes='4rem'
									/>
								</div>
							)}
							<div>
								<p className='text-paragraph-lg text-dark'>By {author.name}</p>
								{author.title && (
									<p className='text-paragraph text-dark/75'>
										{author.title}
									</p>
								)}
							</div>
						</div>
					)}
				</div>

				{heroImage?.asset && (
					<div className='mt-2.5 relative aspect-[217/83] rounded overflow-hidden'>
						<SanityImage
							image={heroImage}
							alt={title || ''}
							preset='articleHero'
							fill
							priority
							sizes='100vw'
						/>
					</div>
				)}
			</BlogSection>
		</div>
	);
};

export default PostHeader;
