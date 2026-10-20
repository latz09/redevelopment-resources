// components/sections/shared/PageHero.js
import SanityImage from '@/components/ui/SanityImage';
import SectionGraphic from '@/components/ui/SectionGraphic';

const GRAPHIC_CLASSNAMES = {
	wave: 'absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-secondary/10 pointer-events-none select-none',
	flag: 'hidden lg:block absolute z-0 top-0 -left-1.5 md:left-0 h-full w-auto text-secondary/10 pointer-events-none select-none',
};

const PageHero = ({
	data,
	imageAlt = '',
	preset = 'pageHero',
	graphic,
	children,
}) => {
	const { headline, subheadline, heroImage } = data ? data : {};
	const graphicClassName = graphic ? GRAPHIC_CLASSNAMES[graphic] : null;

	return (
		<header className='sticky top-0 z-0 flex flex-col md:grid md:grid-rows-1 md:grid-cols-2 h-[calc(100svh-var(--hero-pt))] gap-0 bg-light border-t border-accent overflow-hidden'>
			<div
				className='relative overflow-hidden md:overflow-visible flex flex-col justify-start md:justify-end pt-4.25 md:pt-0 md:py-2.5 lg:py-5 gap-1.5 md:pr-2 lg:pr-4
		pl-[max(1rem,calc((100vw-1440px)/2+1rem))]
		sm:pl-[max(1.25rem,calc((100vw-1440px)/2+1.25rem))]
		md:pl-[max(2.5rem,calc((100vw-1440px)/2+2.5rem))]
		lg:pl-[max(5rem,calc((100vw-1440px)/2+5rem))]
		3xl:pl-[max(5rem,calc((100vw-1728px)/2+5rem))]'
			>
				{graphicClassName && (
					<SectionGraphic variant={graphic} className={graphicClassName} />
				)}

				<div className='relative z-10 flex flex-col gap-1.5 pb-[2.56rem] '>
					{headline && <h1>{headline}</h1>}
					{subheadline && (
						<p className='text-paragraph-lg w-[75%] md:w-full'>{subheadline}</p>
					)}
					{children}
				</div>
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
