// QuickFacts.js
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';

const QuickFacts = ({ data }) => {
	const quickFacts = data || [];
	if (!quickFacts.length) return null;

	const cols =
		quickFacts.length === 2 || quickFacts.length === 4
			? 'md:grid-cols-2'
			: 'md:grid-cols-2 lg:grid-cols-3';

	return (
		<Section className='space-y-2.5 lg:space-y-4'>
			<SectionHeading label='Quick facts' heading='Project overview' />
			<ul className={`grid ${cols} border-t border-l border-dark/50`}>
				{quickFacts.map((fact, index) => (
					<QuickFactCard key={index} {...fact} />
				))}
			</ul>
		</Section>
	);
};

export default QuickFacts;

const QuickFactCard = ({ icon, text }) => {
	const iconUrl = icon?.url;

	return (
		<li className='row-span-2 grid [grid-template-rows:subgrid] gap-0 bg-light p-1.25 border-r border-b border-dark/50'>
			<div>
				{iconUrl && (
					<div className='size-4.5 '>
						<img src={iconUrl} alt='' className='size-4.5 rounded' />
					</div>
				)}
			</div>
			<div className='mt-2 lg:mt-2.5'>
				{text && <h6 className=''>{text}</h6>}
			</div>
		</li>
	);
};