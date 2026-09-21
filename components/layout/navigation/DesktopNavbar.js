'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { useIsDarkRoute } from '@/hooks/useIsDarkRoute';
import { useIsDarkRoute } from '@/app/hooks/useIsDarkRoute';
import { track } from '@vercel/analytics';
import Logo from '@/components/lib/Logo';

const DesktopNavbar = ({ navLinks, logoUrl }) => {
	const isDark = useIsDarkRoute();
	const pathname = usePathname();
	const mainLinks = navLinks.filter((link) => !link.isButton);
	const contactLink = navLinks.find((link) => link.isButton);

	const handleNavClick = (label, url) => {
		track(`CTA Click - Navbar - ${label}`, {
			destination: url,
			buttonText: label,
		});
	};

	return (
		<div
			data-debug-pathname={pathname}
			data-debug-isdark={String(isDark)}
			className={`hidden h-full lg:flex items-center backdrop-blur-lg w-full  ${
				isDark ? 'bg-dark' : 'bg-light'
			}`}
		>
			<div className='flex items-center w-full section-x-padding '>
				<Logo
					className='w-[13.725rem] 3xl:w-[16.5rem] h-auto'
					variant={isDark ? 'white' : 'default'}
				/>
				<nav className='flex gap-6 items-center ml-auto'>
					<div className='flex gap-2 items-center ml-auto'>
						{mainLinks.map((link, index) =>
							link.children?.length ? (
								<DropdownNavItem
									key={index}
									link={link}
									isDark={isDark}
									onNavClick={handleNavClick}
								/>
							) : (
								<Link
									key={index}
									href={link.url}
									onClick={() => handleNavClick(link.label, link.url)}
									className={`block text-button font-[500] transition-all duration-200 cursor-pointer hover:underline hover:underline-offset-2 ${
										isDark ? 'text-light' : ''
									}`}
								>
									{link.label}
								</Link>
							),
						)}
					</div>

					{contactLink && (
						<div>
							<Link
								href={contactLink.url}
								onClick={() =>
									handleNavClick(contactLink.label, contactLink.url)
								}
								className={`block text-button  transition-all duration-200 cursor-pointer border px-1.25 py-0.75 rounded ${
									isDark
										? 'border-light bg-light text-dark hover:bg-dark hover:text-light'
										: 'border-dark bg-dark text-white hover:bg-light hover:text-dark'
								}`}
							>
								{contactLink.label}
							</Link>
						</div>
					)}
				</nav>
			</div>
		</div>
	);
};

export default DesktopNavbar;

const DropdownNavItem = ({ link, isDark, onNavClick }) => {
	const DEV_FORCE_MENU_OPEN = false;
	return (
		<div className='relative group '>
			<button
				type='button'
				aria-haspopup='true'
				className={`flex items-center gap-0.25 text-button font-[500] transition-all duration-200 cursor-pointer group-hover:underline group-hover:underline-offset-2 ${
					isDark ? 'text-light' : ''
				}`}
			>
				{link.label}
				<svg
					className='w-[0.75rem] h-[0.75rem] transition-transform duration-200 group-hover:rotate-180'
					viewBox='0 0 12 8'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M1 1.5L6 6.5L11 1.5'
						stroke='currentColor'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</button>

			<div
				className={`fixed inset-x-0 top-[var(--nav-h)] transition-all duration-200 section-x-padding ${
					DEV_FORCE_MENU_OPEN
						? 'opacity-100 visible translate-y-0'
						: 'opacity-0 invisible -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0'
				}`}
			>
				<div
					className={`grid grid-cols-5 backdrop-blur-[13px]  lg:p-1.25 2xl:p-4 border rounded w-full ${
						isDark
							? 'bg-dark/90 border-accent'
							: 'bg-light/90 border-accent'
					}`}
				>
					{link.children.map((child, index) => (
						<Link
							key={index}
							href={child.url}
							onClick={() => onNavClick(child.label, child.url)}
							className={`group/card flex flex-col lg:p-1 2xl:p-3 border-x-[0.25px] border-y transition duration-300 ${
								isDark
									? 'border-accent hover:bg-light group-hover/card:border-light '
									: 'border-accent hover:bg-primary group-hover/card:border-accent'
							}`}
						>
							<span
								className={`text-paragraph-lg mb-1 font-[700] transition duration-300 ${
									isDark
										? 'text-light group-hover/card:text-primary'
										: 'text-dark group-hover/card:text-light'
								}`}
							>
								{child.label}
							</span>
							<p
								className={`text-paragraph mb-2.5 transition duration-300 ${
									isDark
										? 'text-light group-hover/card:text-primary'
										: 'text-dark group-hover/card:text-light'
								}`}
							>
								{child.description}
							</p>
							<span
								className={`text-button mt-auto transition duration-300 ${
									isDark
										? 'text-light group-hover/card:text-primary'
										: 'text-dark group-hover/card:text-light'
								}`}
							>
								Explore {child.label.toLowerCase()} →
							</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};