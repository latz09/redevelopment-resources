import SanityImage from '@/components/ui/SanityImage';
import ButtonLink from '@/components/ui/ButtonLink';

const Hero = ({ data }) => {
	const { headline, subheadline, primaryCta, secondaryCta, heroImage } = data
		? data
		: {};

	return (
		<header className='sticky top-0 z-0 grid grid-rows-[11fr_9fr] md:grid-rows-1 md:grid-cols-2 h-[calc(100svh-var(--hero-pt))]'>
			{/* Text panel — manually restoring the left inset that
			    section-x-padding used to give us for free */}
			<div
				className='bg-primary flex flex-col justify-center gap-1.5 py-2
		pl-[max(1rem,calc((100vw-1440px)/2+1rem))]
		sm:pl-[max(1.25rem,calc((100vw-1440px)/2+1.25rem))]
		md:pl-[max(2.5rem,calc((100vw-1440px)/2+2.5rem))]
		lg:pl-[max(5rem,calc((100vw-1440px)/2+5rem))]
		3xl:pl-[max(5rem,calc((100vw-1728px)/2+5rem))]'
			>
				<div className='max-w-[36rem]'>
					{headline && <h1 className='hero-title text-light'>{headline}</h1>}
					{subheadline && (
						<p className='text-paragraph text-light/80 mt-1'>{subheadline}</p>
					)}
					<div className='flex flex-wrap gap-1 mt-1.5'>
						{primaryCta?.label && (
							<ButtonLink
								href={'/#services'}
								variant='primary-on-dark'
								event='Hero - Primary CTA'
							>
								{primaryCta.label}
							</ButtonLink>
						)}
						{secondaryCta?.label && (
							<ButtonLink
								href={'/our-projects'}
								variant='secondary-on-dark'
								event='Hero - Secondary CTA'
							>
								{secondaryCta.label}
							</ButtonLink>
						)}
					</div>
				</div>
			</div>

			{/* Image panel — already flush to the viewport edge now that
			    there's no padded parent to escape, so no bleed class needed */}
			<div className='relative h-full'>
				<SanityImage
					image={heroImage}
					alt={headline || 'Hero image'}
					preset='hero'
					fill
					priority
					sizes='(max-width: 767px) 100vw, 50vw'
				/>
			</div>
		</header>
	);
};

export default Hero;
