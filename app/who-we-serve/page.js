// app/who-we-serve/page.js
import { buildPageMetadata as BPM } from '@/utils/seo/buildPageMetadata';
import { fetchContent as fc } from '@/utils/cms/fetchContent';
import { FETCH_WHO_WE_SERVE_PAGE_QUERY as Q } from '@/data/queries/pages/FETCH_WHO_WE_SERVE_PAGE_QUERY';
import PageContainer from '@/components/animations/PageContainer';
import WhoWeServeHero from '@/components/sections/who-we-serve/WhoWeServeHero';
import SectorSection from '@/components/sections/who-we-serve/SectorSection';
import GlobalCTA from '@/components/sections/shared/GlobalCTA';

export async function generateMetadata() {
	return BPM({ slug: '/who-we-serve', query: Q });
}

const WhoWeServe = async () => {
	const data = await fc(Q);
	const { hero, publicSector, privateSector } = data.page || {};
	const { globalCta } = data.siteSettings || {};

	return (
		<PageContainer>
			<div>
				<WhoWeServeHero data={hero} />
				<SectorSection
					theme='dark'
					data={{
						heading: publicSector?.heading,
						intro: publicSector?.intro,
						sectionImage: publicSector?.sectionImage,
						rows: [publicSector?.municipalities, publicSector?.organizations].filter(Boolean),
					}}
				/>
			</div>
			<SectorSection
				theme='light'
				data={{
					heading: privateSector?.heading,
					intro: privateSector?.intro,
					sectionImage: privateSector?.sectionImage,
					rows: [privateSector?.entrepreneurs, privateSector?.privateDevelopers].filter(Boolean),
				}}
			/>
			<GlobalCTA data={globalCta} />
		</PageContainer>
	);
};

export default WhoWeServe;

export const revalidate = 10;