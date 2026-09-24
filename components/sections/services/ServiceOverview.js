// components/sections/service-page/ServiceOverview.js
import SplitContent from '@/components/layout/SplitContent';
import SectionHeading from '@/components/ui/SectionHeading';
import ButtonLink from '@/components/ui/ButtonLink';

const ServiceOverview = ({ data }) => {
	const { sectionLabel, heading, body, cta } = data || {};

	const paragraphs = (typeof body === 'string' ? body.split(/\n+/) : body || [])
		.map((p) => p.trim())
		.filter(Boolean);

	const hasRight = paragraphs.length > 0 || cta?.label;

	return (
		<SplitContent
			left={
				<SectionHeading
					label={sectionLabel}
					heading={heading}
					as='h2'
					onDark={false}
				/>
			}
			right={
				hasRight && (
					<div className='space-y-2'>
						{paragraphs.length > 0 && (
							<div className='space-y-2'>
								{paragraphs.map((paragraph, index) => (
									<p key={index} className='text-paragraph-lg'>
										{paragraph}
									</p>
								))}
							</div>
						)}
						{cta?.label && (
							<ButtonLink
								href='/contact'
								variant='primary-on-light'
								event='Service Overview'
							>
								{cta.label}
							</ButtonLink>
						)}
					</div>
				)
			}
		/>
	);
};

export default ServiceOverview;