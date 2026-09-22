import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import { ArrowGrow } from '@/components/ui/ButtonLink';
import ImageWindow from '@/components/ui/ImageWindow';

const Services = ({ data }) => {
	const {
		sectionLabel,
		heading,
		analysisCard,
		strategyCard,
		redevelopmentCard,
		financingCard,
		implementationCard,
		notSureCard,
		servicesImage,
	} = data ? data : {};
	const cards = [
		analysisCard,
		strategyCard,
		redevelopmentCard,
		financingCard,
		implementationCard,
		notSureCard,
	].filter(Boolean);

	return (
		<Section id='services' className='border-t border-dark/50'>
			<SectionHeading label={sectionLabel} heading={heading} as='h2' />
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-dark/50 border border-dark/50 mt-2.5 lg:my-4'>
				{cards.map((card, index) => (
					<ServiceCard key={index} {...card} />
				))}
			</div>
			<ImageWindow
				image={servicesImage}
				alt='Aerial view of a riverside community at sunset'
				preset='servicesWindow'
				sizes='(min-width: 1728px) 1728px, 100vw'
				className='hidden md:block h-[31.25rem] 2xl:h-[37.25rem] rounded mt-2.5 lg:mt-4'
			/>
		</Section>
	);
};

export default Services;

const ServiceCard = ({ title, description, url, iconUrl, ctaLabel }) => {
	return (
		<Link
			href={url || '#'}
			className='group/card flex flex-col h-full bg-light hover:bg-primary transition-colors duration-300 p-1.25'
		>
			{iconUrl && (
				<div className='size-4.5 grid place-items-center rounded'>
					<img src={iconUrl} alt='' className='size-4.5' />
				</div>
			)}
			<div className={`space-y-1 ${iconUrl ? 'mt-2 lg:mt-2.5' : ''}`}>
				{title && (
					<h4 className=' group-hover/card:text-light transition-colors duration-300'>
						{title}
					</h4>
				)}
				{description && (
					<p className='text-paragraph mt-0.5 group-hover/card:text-light transition-colors duration-300'>
						{description}
					</p>
				)}
			</div>
			<span className='self-start text-button inline-flex items-center gap-0.5 text-secondary group-hover/card:text-light group-hover/card:flex-row-reverse transition-colors duration-300 mt-auto pt-2 lg:pt-2.5'>
				<span>{ctaLabel || `Explore ${title}`}</span>
				<ArrowGrow />
			</span>
		</Link>
	);
};
