import StickyNav from './StickyNav';
import { getNavLinks } from '@/data/config/getNavLinks';
import { getIsDarkRoute } from '@/app/hooks/getIsDarkRoute';

const NavigationContainer = async () => {
	const [navLinks, isDark] = await Promise.all([getNavLinks(), getIsDarkRoute()]);
	return <StickyNav navLinks={navLinks} isDark={isDark} />;
};

export default NavigationContainer;
export const revalidate = 10;