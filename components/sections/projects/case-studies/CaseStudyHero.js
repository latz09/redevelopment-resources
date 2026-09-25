import Section from '@/components/layout/Section';
import SanityImage from '@/components/ui/SanityImage';

const CaseStudyHero = ({ data }) => {
	const { title, description, heroImage } = data || {};

	return (
		<Section
			as='header'
			py='pt-3.5 lg:pt-5 pb-5'
			className='lg:border-y border-accent'
		>
			<div className='space-y-1.5 lg:space-y-2'>
				<h1>{title}</h1>
				<p className='max-w-[40rem] text-paragraph-lg pb-1.5 lg:pb-2'>
					{description}
				</p>
			</div>

			<div className='relative aspect-[3/2] lg:h-[29rem] lg:aspect-auto lg:w-full overflow-hidden pt-2.25 lg:pt-5 ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] lg:mx-0 rounded-none lg:rounded'>
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
	);
};

export default CaseStudyHero;
