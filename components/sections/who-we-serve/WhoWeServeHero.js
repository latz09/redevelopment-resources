// components/sections/who-we-serve/WhoWeServeHero.js
import PageHero from '@/components/sections/shared/PageHero';

const WhoWeServeHero = ({ data }) => {
	return (
		<PageHero
			data={data}
			imageAlt={data?.headline || 'Who we serve hero image'}
			preset='whoWeServeHero'
		/>
	);
};

export default WhoWeServeHero;