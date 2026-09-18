import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import SanityImage from '@/components/ui/SanityImage';
import StatNumber from '@/components/ui/StatNumber';

const ByTheNumbers = ({ data }) => {
	return (
		<Section bg='bg-dark'>
			<div className='grid lg:grid-cols-2 gap-4 border-b border-light pb-5 lg:pb-8.75'>
				<div className='relative h-[22rem] lg:h-[37.5rem]'>
					<SanityImage
						image={data?.statsImage}
						alt='Evening outdoor market scene under string lights'
						preset='statsImage'
						fill
						sizes='(min-width: 1024px) 50vw, 100vw'
                        className="rounded"
					/>
				</div>
				<div className='space-y-2.5 lg:space-y-4'>
					<SectionHeading
						label='Statistics'
						heading='By the numbers'
						onDark={true}
					/>
					<div className='grid lg:grid-cols-2 gap-y-2 gap-x-1.25'>
						{data?.stats?.map((stat, index) => (
							<div key={index} className='border-t border-light pt-1.25 space-y-1'>
								<p className='text-numbers text-light'>
									{index === 0 ? <StatNumber value={stat.value} /> : stat.value}
								</p>
								<p className='text-paragraph text-light'>{stat.label}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</Section>
	);
};

export default ByTheNumbers;