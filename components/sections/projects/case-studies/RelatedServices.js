// RelatedServices.js
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import SanityImage from '@/components/ui/SanityImage';
import ButtonLink from '@/components/ui/ButtonLink';

const RelatedServices = ({ data, promo }) => {
	const relatedServices = data || [];
	if (!relatedServices.length) return null;

	const { sectionLabel, heading, subheading } = promo || {};
	const count = relatedServices.length;

	return (
		<Section
			bg='bg-dark'
			className='border-t border-dark/50 space-y-2.5 lg:space-y-4'
		>
			<div className='grid lg:grid-cols-2 items-center gap-1.5 lg:gap-6.5'>
				<div className='max-w-[34.625rem]'>
					<SectionHeading
						label={sectionLabel}
						heading={heading}
						onDark='true'
					/>
				</div>
				<p className='text-paragraph-lg text-light'>{subheading}</p>
			</div>

			{count === 1 ? (
				<SingleRelatedServiceCard {...relatedServices[0]} />
			) : (
				<div
					className={`grid ${
						count === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'
					} gap-[1px] bg-accent/50 border border-accent/50`}
				>
					{relatedServices.map((service, index) => (
						<RelatedServiceCard key={index} {...service} />
					))}
				</div>
			)}
		</Section>
	);
};

export default RelatedServices;

const RelatedServiceCard = ({ title, blurb, image, slug }) => {
	return (
		<div className='p-1.25 bg-dark space-y-2.5'>
			<div className='relative w-full aspect-[3/2] overflow-hidden rounded'>
				{image ? (
					<SanityImage
						image={image}
						alt={title}
						preset='relatedServiceCard'
						fill
						sizes='(min-width: 1024px) 33vw, 100vw'
						className='rounded'
					/>
				) : (
					<div className='w-full h-full bg-accent/20' />
				)}
			</div>
			<div className='space-y-1'>
				{title && <h4 className='text-light'>{title}</h4>}
				{blurb && <p className='text-paragraph text-light'>{blurb}</p>}
			</div>
			{slug && title && (
				<ButtonLink
					href={slug}
					variant='tertiary-on-dark'
					className='px-0 py-0'
				>
					{`Explore ${title}`}
				</ButtonLink>
			)}
		</div>
	);
};

const SingleRelatedServiceCard = ({ title, blurb, image, slug }) => {
	return (
		<div className='grid lg:grid-cols-2 border border-accent/50'>
			<div className='relative w-full aspect-[3/2] lg:aspect-auto overflow-hidden'>
				{image ? (
					<SanityImage
						image={image}
						alt={title}
						preset='relatedServiceCard'
						fill
						sizes='(min-width: 1024px) 50vw, 100vw'
					/>
				) : (
					<div className='w-full h-full bg-accent/20' />
				)}
			</div>
			<div className='p-1.25 lg:p-2.5 flex flex-col items-start justify-center space-y-2.5'>
				<div className='space-y-1'>
					{title && <h4 className='text-light'>{title}</h4>}
					{blurb && <p className='text-paragraph text-light'>{blurb}</p>}
				</div>
				{slug && title && (
					<ButtonLink
						href={slug}
						variant='tertiary-on-dark'
						className='px-0 py-0'
					>
						{`Explore ${title}`}
					</ButtonLink>
				)}
			</div>
		</div>
	);
};
