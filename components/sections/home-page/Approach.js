import SplitContent from '@/components/layout/SplitContent';
import SectionHeading from '@/components/ui/SectionHeading';

const Approach = ({ data }) => {
	const { sectionLabel, heading, body } = data ? data : {};
	return (
		<SplitContent
			left={
				<SectionHeading label={sectionLabel} heading={heading} as='h2' onDark={false} />
			}
			right={
				body?.length > 0 && (
					<div className='space-y-2'>
						{body.map((paragraph, index) => (
							<p key={index} className='text-paragraph-lg'>{paragraph}</p>
						))}
					</div>
				)
			}
		/>
	);
};

export default Approach;