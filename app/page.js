// app/page.js
import { buildPageMetadata as BPM } from '@/utils/seo/buildPageMetadata';
import { fetchContent as fc } from '@/utils/cms/fetchContent';
import { FETCH_HOME_PAGE_QUERY as Q } from '@/data/queries/pages/FETCH_HOME_PAGE_QUERY';
import PageContainer from '@/components/animations/PageContainer';
import Hero from '@/components/sections/home-page/Hero';

export async function generateMetadata() {
	return BPM({ slug: '/', query: Q });
}

const Home = async () => {
	const data = await fc(Q);
	
	const { hero, approach, services, whoWeServe, siteSettings, testimonials } =
		data.page ? data.page : {};

	return (
		<PageContainer>
			<Hero data={hero} />
      <div className='relative z-10 bg-light h-screen'>
	<p className='text-paragraph p-2'>Placeholder — next section</p>
</div>
		</PageContainer>
	);
};

export default Home;

export const revalidate = 10;
