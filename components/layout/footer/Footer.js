import Logo from '../../lib/Logo';
import { fetchContent as fc } from '@/utils/cms/fetchContent';
import { FETCH_SEO_SETTINGS_QUERY as SEO_Q } from '@/data/queries/seo/FETCH_SEO_SETTINGS_QUERY';
import { FETCH_SITE_SETTINGS_QUERY as SITE_Q } from '@/data/queries/settings/FETCH_SITE_SETTINGS_QUERY';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { getNavLinks } from '@/data/config/getNavLinks';
import FooterBottomBar from './FooterBottomBar';
import Section from '@/components/layout/Section';

const Footer = async ({ businessName }) => {
	const navLinks = await getNavLinks();
	const [seo, siteSettings] = await Promise.all([fc(SEO_Q), fc(SITE_Q)]);
	const { phone, email, siteName } = seo ? seo : {};
	const { socialLinks, footerTagline } = siteSettings ? siteSettings : {};

	return (
		<footer>
			<Section
				as='div'
				py='pt-5 pb-4'
				bg='bg-dark'
				className='relative flex flex-col xl:flex-row xl:flex-wrap xl:items-center xl:justify-between gap-3 xl:gap-x-8 xl:gap-y-3'
			>
				<Logo className='order-1 w-[15.5rem] xl:w-[26rem]' variant='white' />

				<div className='order-2 xl:order-3 xl:basis-full flex flex-col gap-2 w-[90%] xl:w-full max-w-[26.5rem]'>
					{footerTagline && (
						<p className='text-paragraph-lg text-light'>{footerTagline}</p>
					)}
					<div className='grid gap-1'>
						{phone && (
							<a
								href={`tel:${phone}`}
								className='text-paragraph text-light hover:text-white transition duration-300'
							>
								{phone}
							</a>
						)}
						{email && (
							<a
								href={`mailto:${email}`}
								className='text-paragraph text-light hover:text-white transition duration-300'
							>
								{email}
							</a>
						)}
					</div>
					{socialLinks && (socialLinks.facebook || socialLinks.linkedin) && (
						<div className='flex items-center gap-1'>
							{socialLinks.facebook && (
								<a
									href={socialLinks.facebook}
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Facebook'
								>
									<AiOutlineFacebook className='w-[1.75rem] h-[1.75rem] text-light' />
								</a>
							)}
							{socialLinks.linkedin && (
								<a
									href={socialLinks.linkedin}
									target='_blank'
									rel='noopener noreferrer'
									aria-label='LinkedIn'
								>
									<AiOutlineLinkedin className='w-[1.75rem] h-[1.75rem] text-light' />
								</a>
							)}
						</div>
					)}
				</div>

				<nav className='order-3 xl:order-2 grid xl:flex flex-wrap gap-1.25'>
					{navLinks.map((link, index) => (
						<div key={index} className='relative flex flex-col gap-0.5'>
							{link.children?.length > 0 ? (
								<span className='text-paragraph text-light opacity-70'>
									{link.label}
								</span>
							) : (
								<Link
									href={link.url}
									className='text-paragraph text-light font-[500] hover:text-white transition duration-300'
								>
									{link.label}
								</Link>
							)}
							{link.children?.length > 0 && (
								<div className='flex flex-col gap-1 xl:absolute xl:top-full xl:left-0 xl:pt-0.5'>
									{link.children.map((child, childIndex) => (
										<Link
											key={childIndex}
											href={child.url}
											className='text-paragraph text-light font-[500]hover:text-white transition duration-300'
										>
											{child.label}
										</Link>
									))}
								</div>
							)}
						</div>
					))}
				</nav>

				
				<Image
					src='/badges/wisconsin-women-owned-enterprise.svg'
					alt='Wisconsin Woman-Owned Business Enterprise'
					width={177}
					height={161}
					className='absolute right-1 bottom-4 xl:right-[4.0625rem] xl:bottom-[4.0625rem] w-[11.0625rem] h-[10.0625rem]'
				/>
			</Section>

			<FooterBottomBar businessName={siteName} showPoweredBy={false} />
		</footer>
	);
};

export default Footer;

export const revalidate = 10;