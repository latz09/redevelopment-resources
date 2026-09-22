// components/sections/who-we-serve/SectorSection.js
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import ImageWindow from '@/components/ui/ImageWindow';
import ButtonLink from '@/components/ui/ButtonLink';

const THEME = {
	dark: {
		bg: 'bg-dark',
		heading: 'text-light',
		body: 'text-light/80',
		border: 'border-light/20',
		divider: 'bg-light/20',
		button: 'secondary-on-dark',
	},
	light: {
		bg: 'bg-light',
		heading: 'text-dark',
		body: 'text-dark/70',
		border: 'border-dark/20',
		divider: 'bg-dark/20',
		button: 'secondary-on-light',
	},
};

const SectorSection = ({ data, theme = 'dark', id = '' }) => {
	const { heading, intro, sectionImage, rows } = data || {};
	const t = THEME[theme] || THEME.dark;

	return (
		<Section bg={`${t.bg} relative z-10`} className='space-y-2.5 lg:space-y-4' id={id}>
			<div className='grid lg:grid-cols-2 gap-1.5 lg:gap-6.5 items-start'>
				<h2 className={t.heading}>{heading}</h2>
				<p className={`text-paragraph-lg ${t.body}`}>{intro}</p>
			</div>

			{rows?.length > 0 && (
				<div
					className={`grid lg:grid-cols-2 gap-[1px] ${t.divider} border ${t.border}`}
				>
					{rows.map((row, index) => (
						<SectorRow
							key={index}
							row={row}
							sectionHeading={heading}
							theme={theme}
						/>
					))}
				</div>
			)}

			{/* Below lg: closer-to-square crop */}
			<ImageWindow
				image={sectionImage}
				alt={heading || 'Section image'}
				preset='sectorSectionImageMobile'
				sizes='100vw'
				className='lg:hidden w-full aspect-[6/5] rounded'
			/>

			{/* lg and up: wide banner crop */}
			<ImageWindow
				image={sectionImage}
				alt={heading || 'Section image'}
				preset='sectorSectionImage'
				sizes='100vw'
				className='hidden lg:block w-full aspect-[328/129] rounded'
			/>
		</Section>
	);
};

const SectorRow = ({ row, sectionHeading, theme }) => {
	const { heading, body, cta } = row || {};
	const t = THEME[theme] || THEME.dark;
	const href = cta?.caseStudy?.slug ? `/projects/${cta.caseStudy.slug}` : '#';

	return (
		<>
			<div className={`${t.bg} p-1.5 lg:p-2.5`}>
				<SectionHeading
					label={sectionHeading}
					heading={heading}
					as='h3'
					onDark={theme === 'dark'}
				/>
			</div>
			<div className={`${t.bg} p-1.5 lg:p-2.5 space-y-1.5`}>
				<p className={`text-paragraph ${t.body}`}>{body}</p>
				{cta?.label && (
					<ButtonLink
						href={'/'}
						variant={t.button}
						event={`Who We Serve - ${heading}`}
					>
						{cta.label}
					</ButtonLink>
				)}
			</div>
		</>
	);
};

export default SectorSection;