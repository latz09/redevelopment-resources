import Section from '@/components/layout/Section';
import ButtonLink from '@/components/ui/ButtonLink';
import SectionHeading from '@/components/ui/SectionHeading';

const Purpose = ({ data }) => {
	const { sectionLabel, heading, body, cta, values } = data ? data : {};

	return (
		<Section className='border-t border-accent/50 space-y-2.5 lg:space-y-4'>
			<div className='grid lg:grid-cols-2 gap-1.5'>
				<div className='space-y-2.5'>
					<SectionHeading label={sectionLabel} heading={heading} />
					<ButtonLink href={'/contact'} variant='primary-on-light'>
						{cta?.label}
					</ButtonLink>
				</div>
				<p className='text-paragraph-lg'>{body}</p>
			</div>
			{values?.length > 0 && <ValueGrid data={values} />}
		</Section>
	);
};

export default Purpose;


const ValueGrid = ({ data }) => {
	return (<div className="grid lg:grid-cols-2 border border-accent/50 gap-[1px] bg-accent/50">
		{
			data.map((value, index) => (
				<div key={index} className="p-1.25 bg-light space-y-1 ">
					<h5>{value.heading}</h5>
					<p className="text-paragraph">{value.body}</p>
				</div>
			))
		}
	</div>);
}