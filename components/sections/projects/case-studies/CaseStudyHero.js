// components/sections/projects/case-studies/CaseStudyHero.js
import Section from '@/components/layout/Section';
import SanityImage from '@/components/ui/SanityImage';
import SectionGraphic from '@/components/ui/SectionGraphic';

const CaseStudyHero = ({ data }) => {
	const { title, description, heroImage } = data || {};

	return (
		<>
			<header className='relative overflow-hidden lg:border-y border-accent'>
				<SectionGraphic
					variant='hook'
					className='absolute z-0 top-1/2 -translate-y-1/2 right-0 w-[200%] translate-x-1/2 lg:w-1/2 lg:translate-x-1/2 text-secondary/10 pointer-events-none select-none overflow-hidden'
				/>

				<div className='relative z-10 section-x-padding pt-3.5 lg:pt-5 pb-5 space-y-1.5 lg:space-y-2'>
					<h1>{title}</h1>
					<p className='max-w-[40rem] text-paragraph-lg pb-1.5 lg:pb-2'>
						{description}
					</p>
				</div>
			</header>
			<div className='border-b border-accent'>
				<Section py='lg:py-5'>
					<div className='relative aspect-[3/2] lg:h-[29rem] 3xl:h-[35rem] lg:aspect-auto lg:w-full overflow-hidden pt-2.25 lg:pt-5 ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] lg:mx-0 rounded-none lg:rounded '>
						{heroImage ? (
							<>
								<SanityImage
									image={heroImage}
									alt={`${title} exterior`}
									preset='caseStudyHeroMobile'
									fill
									sizes='100vw'
									className='lg:hidden'
								/>
								<SanityImage
									image={heroImage}
									alt={`${title} exterior`}
									preset='caseStudyHero'
									fill
									sizes='82rem'
									className='hidden lg:block'
								/>
							</>
						) : (
							<div className='w-full h-full bg-accent/40' />
						)}
					</div>
				</Section>
			</div>
		</>
	);
};

export default CaseStudyHero;
