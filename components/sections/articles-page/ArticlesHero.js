// components/sections/articles-page/ArticlesHero.js
//
// Dark hero band for /articles — heading/subheading on the left, the
// featured post as an image + overlay info panel on the right. Decorative
// SectionGraphic behind the heading, same pattern as TestimonialSection's
// left column (wave variant, absolutely positioned behind the text, text
// kept in its own z-10 wrapper on top of it). Tinted text-light/10 here
// instead of TestimonialSection's text-secondary/10, since this sits on a
// dark bg-primary panel, not the light bg testimonials uses — adjust the
// tint if it doesn't read right once it's live.
//
// Featured image placeholder: same bg-secondary + white logo mark as
// ArticleCard/RelatedArticles - featuredPost can exist (a post is picked as
// featured) without that post having a heroImage set, so this checks
// featuredPost.heroImage?.asset specifically, not just featuredPost.

import Image from 'next/image';
import Section from '@/components/layout/Section';
import SanityImage from '@/components/ui/SanityImage';
import ButtonLink from '@/components/ui/ButtonLink';
import SectionGraphic from '@/components/ui/SectionGraphic';
import { formatArticleDate } from '@/utils/formatDate';
import DefaultLogo from '@/public/images/logos/redevelopment-resources-white.png';

const ArticlesHero = ({ heading, subheading, featuredPost }) => {
	return (
		<Section
			as='header'
			bg='bg-primary'
			py='pb-0'
			className='grid gap-2 lg:grid-cols-2  lg:gap-7.5'
		>
			<div className='relative'>
				<SectionGraphic
					variant='waveAlt'
					className='absolute z-0 top-1/2 left-0 translate-x-[0%] md:translate-x-[40%] -translate-y-1/2  h-[140%] lg:h-full w-auto lg:-translate-x-[5%] 3xl:-translate-x-[30%] text-light/10 pointer-events-none select-none overflow-hidden'
				/>
				<div className='relative z-10 space-y-1 max-w-[33.4375rem] 3xl:max-w-[40rem] pt-5 pb-8.75'>
					<h1 className='text-light'>{heading}</h1>
					{subheading && (
						<p className='text-paragraph-lg text-light'>{subheading}</p>
					)}
				</div>
			</div>

			{featuredPost && (
				<div className='overflow-hidden lg:border-x  border-accent/50'>
					<div className='relative aspect-[193/94] rounded overflow-hidden bg-secondary '>
						{featuredPost.heroImage?.asset ? (
							<SanityImage
								image={featuredPost.heroImage}
								alt={featuredPost.title || ''}
								preset='blogFeatured'
								fill
								priority
								sizes='(max-width: 1024px) 100vw, 50vw'
								className='rounded lg:rounded-none'
							/>
						) : (
							<div className='absolute inset-0 flex items-center justify-center p-5 '>
								<Image
									src={DefaultLogo}
									alt=''
									className='h-auto object-contain'
								/>
							</div>
						)}
					</div>
					<div className='lg:px-1.5 pt-1.5  mb-4'>
						<p className='text-overline text-white'>
							Featured Article
							{featuredPost.publishedDate &&
								` | ${formatArticleDate(featuredPost.publishedDate)}`}
						</p>
						<h4 className='text-light mb-1.5 mt-1'>{featuredPost.title}</h4>
						<ButtonLink
							href={`/articles/${featuredPost.slug}`}
							variant='tertiary-on-dark'
							event={`Blog Hero - Featured - ${featuredPost.title}`}
						>
							Read the featured article
						</ButtonLink>
					</div>
				</div>
			)}
		</Section>
	);
};

export default ArticlesHero;
