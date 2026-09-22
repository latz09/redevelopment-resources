import Section from '@/components/layout/Section';
import ButtonLink from '@/components/ui/ButtonLink';
import SectionHeading from '@/components/ui/SectionHeading';
import SanityImage from '@/components/ui/SanityImage';

const WhoWeServe = ({ data }) => {
	const { sectionLabel, heading, publicSectorCard, privateSectorCard } = data
		? data
		: {};
	return (
		<Section
			bg='bg-dark '
			py='0'
			className='pb-5 lg:pb-8.75 space-y-2.5 lg:space-y-4'
		>
			<SectionHeading onDark={true} label={sectionLabel} heading={heading} />
			<div className='grid lg:grid-cols-2 gap-[1px] bg-accent/50 border border-accent/50'>
				<SectorCard
					data={publicSectorCard}
					alt='State capitol building surrounded by autumn trees'
					href='/who-we-serve/#public-sector'
				/>
				<SectorCard
					data={privateSectorCard}
					alt='Hands reviewing architectural floor plans at a table'
					href='/who-we-serve/#private-sector'
				/>
			</div>
		</Section>
	);
};

export default WhoWeServe;

const SectorCard = ({ data, alt, href }) => {
	const { title, description, ctaLabel, image } = data ? data : {};
	return (
		<div className='bg-dark space-y-2.5 p-1.25 group group hover:bg-light transition duration-500'>
			<div className='relative h-[12.5rem] md:h-[23.625rem] 2xl:h-[26rem] '>
				<SanityImage
					image={image}
					alt={alt}
					preset='sectorCard'
					fill
					className='rounded'
					sizes='(min-width: 1024px) 50vw, 100vw'
				/>
			</div>
			<div>
				<h4 className='text-light group-hover:text-dark transition duration-500'>
					{title}
				</h4>
				<p className='text-paragraph text-light group-hover:text-dark transition duration-500'>
					{description}
				</p>
			</div>
			<ButtonLink
				href={href}
				variant='primary-on-dark'
				className='group-hover:text-dark group-hover:bg-light transition duration-1000 hover:border-dark'
			>
				{ctaLabel}
			</ButtonLink>
		</div>
	);
};
