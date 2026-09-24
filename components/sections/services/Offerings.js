// components/sections/service-page/Offerings.js
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import ImageWindow from '@/components/ui/ImageWindow';

const Offerings = ({ data }) => {
	const { sectionLabel, heading, items, image } = data || {};

	const cols =
		items?.length === 2 || items?.length === 4
			? 'md:grid-cols-2'
			: 'md:grid-cols-2 lg:grid-cols-3';

	const hasIcons = items?.some((item) => item?.icon?.url);

	return (
		<Section className='border-t border-dark/50'>
			<SectionHeading label={sectionLabel} heading={heading} as='h2' />
			{items?.length > 0 && (
				<ul className={`grid ${cols} border-t border-l border-dark/50 mt-2.5 lg:my-4`}>
					{items.map((item, index) => (
						<OfferingCard key={index} hasIcons={hasIcons} {...item} />
					))}
				</ul>
			)}
			<ImageWindow
				image={image}
				alt=''
				preset='servicesWindow'
				sizes='(min-width: 1728px) 1728px, 100vw'
				className='hidden md:block h-[31.25rem] 2xl:h-[37.25rem] rounded mt-2.5 lg:mt-4'
			/>
		</Section>
	);
};

export default Offerings;

const OfferingCard = ({ icon, title, description, hasIcons }) => {
	const iconUrl = icon?.url;

	return (
		<li className='row-span-3 grid [grid-template-rows:subgrid] gap-0 bg-light p-1.25 border-r border-b border-dark/50'>
			<div>
				{iconUrl && (
					<div className='size-4.5 grid place-items-center rounded'>
						<img src={iconUrl} alt='' className='size-4.5' />
					</div>
				)}
			</div>
			<div className={hasIcons ? 'mt-2 lg:mt-2.5' : ''}>
				{title && <h4>{title}</h4>}
			</div>
			<div className='mt-1'>
				{description && <p className='text-paragraph'>{description}</p>}
			</div>
		</li>
	);
};