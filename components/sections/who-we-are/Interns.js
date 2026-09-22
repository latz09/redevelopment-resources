// components/sections/who-we-are/Interns.js
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import MemberGrid from '@/components/ui/MemberGrid';

const Interns = ({ data }) => {
	const { sectionLabel, heading, intro, members } = data ? data : {};
	return (
		<Section bg='bg-dark' py='pb-5 lg:pb-8.75' className='space-y-2.5 lg:space-y-4'>
			<div className='grid lg:grid-cols-2 items-center gap-1.5 lg:gap-6.5'>
				<div className='max-w-[34.625rem]'>
					<SectionHeading label={sectionLabel} heading={heading} onDark='true' />
				</div>
				<p className='text-paragraph-lg text-light'>{intro}</p>
			</div>
			<MemberGrid members={members} columns={4} />
		</Section>
	);
};

export default Interns;