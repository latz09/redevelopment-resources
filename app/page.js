// app/page.js
import { buildPageMetadata as BPM } from '@/utils/seo/buildPageMetadata';
import { fetchContent as fc } from '@/utils/cms/fetchContent';
import { FETCH_HOME_PAGE_QUERY as Q } from '@/data/queries/pages/FETCH_HOME_PAGE_QUERY';
import PageContainer from '@/components/animations/PageContainer';
import Hero from '@/components/sections/home-page/Hero';
import Approach from '@/components/sections/home-page/Approach';

export async function generateMetadata() {
	return BPM({ slug: '/', query: Q });
}

const Home = async () => {
	const data = await fc(Q);
	
	const { hero, approach, services, whoWeServe, siteSettings, testimonials } =
		data.page ? data.page : {};

	return (
		<PageContainer>
			{/* Hero + Approach share a parent so Hero's sticky release timing
			    is bound to just these two — not to whatever else eventually
			    gets added further down the page. Anything after Approach
			    goes OUTSIDE this wrapper, as a sibling of it. */}
			<div>
				<Hero data={hero} />
				<Approach data={approach} />
			</div>

			{/* future sections go here */}
		</PageContainer>
	);
};

export default Home;

export const revalidate = 10;
