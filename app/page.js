// app/page.js
import { buildPageMetadata as BPM } from '@/utils/seo/buildPageMetadata';
import { fetchContent as fc } from '@/utils/cms/fetchContent';
import { FETCH_HOME_PAGE_QUERY as Q } from '@/data/queries/pages/FETCH_HOME_PAGE_QUERY';
import PageContainer from '@/components/animations/PageContainer';
import Hero from '@/components/sections/home-page/Hero';
import Approach from '@/components/sections/home-page/Approach';
import Services from '@/components/sections/home-page/Services';
import ByTheNumbers from '@/components/sections/shared/ByTheNumbers';
import WhoWeServe from '@/components/sections/home-page/WhoWeServe';

export async function generateMetadata() {
	return BPM({ slug: '/', query: Q });
}

const Home = async () => {
	const data = await fc(Q);

	const { hero, approach, services, whoWeServe } = data.page || {};
	const { siteSettings, testimonials } = data || {};

	return (
		<PageContainer>
			<div>
				<Hero data={hero} />
				<Approach data={approach} />
			</div>
			<Services data={services} />
			<ByTheNumbers data={siteSettings} />
			<WhoWeServe data={whoWeServe} />
		</PageContainer>
	);
};

export default Home;

export const revalidate = 10;
