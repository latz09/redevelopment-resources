// components/sections/shared/PageHero.js
import SanityImage from '@/components/ui/SanityImage';

const PageHero = ({ data, imageAlt = '', preset = 'pageHero', children }) => {
	const { headline, subheadline, heroImage } = data ? data : {};

	return (
		<header className='sticky top-0 z-0 flex flex-col md:grid md:grid-rows-1 md:grid-cols-2 h-[calc(100svh-var(--hero-pt))] gap-[2.56rem] md:gap-0 bg-light'>
			<div
				className='flex flex-col justify-start md:justify-end pt-4.25 md:pt-0 md:py-2.5 lg:py-5 gap-1.5 md:pr-2 lg:pr-4
		pl-[max(1rem,calc((100vw-1440px)/2+1rem))]
		sm:pl-[max(1.25rem,calc((100vw-1440px)/2+1.25rem))]
		md:pl-[max(2.5rem,calc((100vw-1440px)/2+2.5rem))]
		lg:pl-[max(5rem,calc((100vw-1440px)/2+5rem))]
		3xl:pl-[max(5rem,calc((100vw-1728px)/2+5rem))]'
			>
				{headline && <h1>{headline}</h1>}
				{subheadline && <p className='text-paragraph-lg'>{subheadline}</p>}
				{children}
			</div>

			{/* bg-primary is the fallback when heroImage is null (SanityImage
			    returns null with no asset), so the panel never collapses */}
			<div className='relative flex-1 min-h-0 md:aspect-auto md:h-full bg-primary'>
				<SanityImage
					image={heroImage}
					alt={imageAlt}
					preset={preset}
					fill
					priority
					sizes='(max-width: 767px) 100vw, 50vw'
				/>
			</div>
		</header>
	);
};

export default PageHero;