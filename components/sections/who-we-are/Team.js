// components/sections/who-we-are/Team.js
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import MemberGrid from '@/components/ui/MemberGrid';

const Team = ({ data }) => {
	const { sectionLabel, heading, intro, members } = data ? data : {};
	return (
		<Section bg='bg-dark' className='border-t border-dark/50'>
			<div className='relative pb-2.5 lg:pb-4'>
				<div className='flex absolute right-0 bottom-0 items-end gap-[9.3rem] lg:gap-8.5 h-[20rem] lg:h-[22.72rem] pointer-events-none select-none'>
					<div className='w-4.5 h-[61%] bg-light/15' />
					<div className='w-4.5 h-full bg-light/15' />
					<div className='hidden lg:block w-4.5 h-[61%] bg-light/15' />
				</div>
				<div className='relative z-10 grid lg:grid-cols-2 items-center gap-1.5 lg:gap-6.5'>
					<div className='max-w-[34.625rem]'>
						<SectionHeading label={sectionLabel} heading={heading} onDark='true' />
					</div>
					<p className='text-paragraph-lg text-light'>{intro}</p>
				</div>
			</div>
			<MemberGrid members={members} columns={3} />
		</Section>
	);
};

export default Team;