// components/sections/service-page/Story.js
import SectionHeading from '@/components/ui/SectionHeading';
import SectionGraphic from '@/components/ui/SectionGraphic';

const Story = ({ data }) => {
	const { sectionLabel, heading, body } = data ? data : {};

	return (
		<div className='relative z-10 bg-light overflow-x-hidden'>
			<div className='section-x-padding grid lg:grid-cols-2 gap-0 lg:gap-0 divide-y lg:divide-x divide-accent/50'>
				<div className='relative lg:pr-2 pt-5 lg:py-8.75'>
					<SectionGraphic
						variant='wave'
						className='absolute z-0 top-1/2 right-0 lg:left-0 translate-x-[50%] md:translate-x-[40%] -translate-y-1/2 h-[100%] lg:h-full w-auto lg:-translate-x-[30%] text-secondary/10 pointer-events-none select-none overflow-hidden'
					/>
					<div className='relative z-10 pb-3.5 lg:pb-0'>
						<SectionHeading
							label={sectionLabel}
							heading={heading}
							as='h2'
							onDark={false}
						/>
					</div>
				</div>

				<div className='lg:pl-2 py-3.5 lg:py-8.75'>
					{body?.length > 0 && (
						<div className='space-y-2'>
							{body.map((paragraph, index) => (
								<p key={index} className='text-paragraph-lg'>
									{paragraph}
								</p>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Story;