import Link from 'next/link';
import Section from '@/components/layout/Section';

const currentYear = new Date().getFullYear();

// Always-included legal/credit row — every project needs Privacy Policy
// and Accessibility, no exceptions. "Powered by" is NOT universal (Premier
// Federal Logistics shipped without it), so it's an opt-out per project,
// not something to assume. Terms of Use is also NOT universal — added
// here for Redevelopment Resources specifically, per their footer mockup.
const FooterBottomBar = ({
	businessName = 'Your Business Name',
	email,
	phone,
	showPoweredBy = true,
}) => {
	return (
		<Section
			as='div'
			py='py-1'
			bg='bg-dark'
			className='flex flex-col sm:flex-row items-center justify-between gap-1 text-paragraph-sm text-light border-t'
		>
			<p className='text-paragraph-sm text-accent'>{`© ${currentYear} by ${businessName}`}</p>
			{showPoweredBy && (
				<a
					href='https://www.latzwebdesign.com'
					target='_blank'
					rel='noopener noreferrer'
					className='text-paragraph-sm text-light'
				>
					Powered by LatzWebDesign
				</a>
			)}
			<div className='flex items-center gap-1.5'>
				<Link
					href='/legal/privacy-policy'
					className='text-paragraph-sm text-accent'
				>
					Privacy Policy
				</Link>
				{/* <Link
					href='/legal/terms-of-use'
					className='text-paragraph-sm text-accent'
				>
					Terms of Use
				</Link> */}
				<Link
					href='/legal/accessibility'
					className='text-paragraph-sm text-accent'
				>
					Accessibility
				</Link>
			</div>
		</Section>
	);
};

export default FooterBottomBar;
