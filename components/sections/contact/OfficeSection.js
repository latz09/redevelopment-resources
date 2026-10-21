// components/sections/contact/OfficeSection.js
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';

const OfficeSection = ({ heading, address, phone, email }) => {
	const items = [
		{ label: 'Address', ...address },
		{ label: 'Phone', ...phone },
		{ label: 'Email', ...email },
	].filter((item) => item.value);

	return (
		<Section className='border-b border-accent'>
			<SectionHeading heading={heading} as='h2' />
			<div className='grid md:grid-cols-3 gap-[1px] bg-dark/50 border border-dark/50 mt-2.5 lg:mt-4'>
				{items.map((item, index) => (
					<OfficeCard key={index} {...item} />
				))}
			</div>
		</Section>
	);
};

export default OfficeSection;

const OfficeCard = ({ label, value, iconUrl }) => {
	return (
		<div className='flex flex-col bg-light p-1.25'>
			{iconUrl && (
				<div className='size-4.5 grid place-items-center rounded'>
					<img src={iconUrl} alt='' className='size-4.5' />
				</div>
			)}
			<div className={` ${iconUrl ? 'mt-2 lg:mt-2.5' : ''}`}>
				{label && <h5>{label}</h5>}
				{value && <p className='mt-1 text-paragraph-lg whitespace-pre-line'>{value}</p>}
			</div>
		</div>
	);
};