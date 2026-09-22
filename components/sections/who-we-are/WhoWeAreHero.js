import Section from '@/components/layout/Section';
import SanityImage from '@/components/ui/SanityImage';

// Fixed per-position crop shapes read off the design. The SLOT keeps its
// shape regardless of which image occupies it — if the client swaps a photo
// in Sanity, it still gets cropped to whatever this position calls for.
const GRID_SLOTS = [
	{ aspectClass: 'aspect-[193/164]', preset: 'whoWeAreHeroGridOne' },
	{ aspectClass: 'aspect-[69/86]', preset: 'whoWeAreHeroGridTwo' },
	{ aspectClass: 'aspect-[103/75]', preset: 'whoWeAreHeroGridThree' },
];

const WhoWeAreHero = ({ data }) => {
	const { headline, subheadline, images } = data ? data : {};
	const firstImage = images?.[0];

	return (
		<Section
			bg='bg-dark'
			className='lg:border-t border-b border-accent/50'
			py='py-3.5 lg:py-5'
		>
			<div className='lg:w-1/2 space-y-1.5'>
				<h1 className='text-light'>{headline}</h1>
				<p className='text-light text-paragraph-lg'>{subheadline}</p>
			</div>

			{images?.length > 0 && (
				<div className='mt-2 lg:mt-3'>
					{/* Below lg: first image only, slot 1's shape */}
					<div
						className={`lg:hidden relative w-full rounded overflow-hidden ${GRID_SLOTS[0].aspectClass}`}
					>
						<SanityImage
							image={firstImage}
							alt='Redevelopment Resources team members at a community event'
							preset={GRID_SLOTS[0].preset}
							fill
							sizes='100vw'
						/>
					</div>

					{/* lg and up: three fixed-shape slots, proportional widths — not equal columns */}
					<div className='hidden lg:grid lg:grid-cols-[31fr_29fr_40fr] lg:gap-1.25 lg:items-start'>
						{images.slice(0, 3).map((image, index) => {
							const slot = GRID_SLOTS[index];
							if (!slot) return null;
							return (
								<div
									key={index}
									className={`relative w-full rounded overflow-hidden ${slot.aspectClass}`}
								>
									<SanityImage
										image={image}
										alt={`Redevelopment Resources community event photo ${index + 1}`}
										preset={slot.preset}
										fill
										sizes='40vw'
									/>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</Section>
	);
};

export default WhoWeAreHero;