import { buildPageMetadata as BPM } from '@/utils/seo/buildPageMetadata';
import { fetchContent as fc } from '@/utils/cms/fetchContent';
import { sanityClient } from '@/utils/cms/sanityConnection';
import { FETCH_CASE_STUDY_QUERY as Q } from '@/data/queries/caseStudy/FETCH_CASE_STUDY_QUERY';
import { FETCH_CASE_STUDY_SLUGS_QUERY as SLUGS_Q } from '@/data/queries/caseStudy/FETCH_CASE_STUDY_SLUGS_QUERY';
import PageContainer from '@/components/animations/PageContainer';
import CaseStudyHero from '@/components/sections/projects/case-studies/CaseStudyHero';
import QuickFacts from '@/components/sections/projects/case-studies/QuickFacts';
import Story from '@/components/sections/projects/case-studies/Story';
import CaseStudyTestimonial from '@/components/sections/projects/case-studies/CaseStudyTestimonial';
import RelatedServices from '@/components/sections/projects/case-studies/RelatedServices';
import GlobalCTA from '@/components/sections/shared/GlobalCTA';

export async function generateStaticParams() {
	// Build-time, no request scope — bypass fetchContent (it calls draftMode()).
	const caseStudies = await sanityClient.fetch(SLUGS_Q);
	return (caseStudies || []).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	return BPM({ slug: `/our-projects/${slug}`, query: Q, params: { slug } });
}

const CaseStudy = async ({ params }) => {
	const { slug } = await params;
	const data = await fc(Q, { slug });
	const {
		title,
		location,
		description,
		heroImage,
		quickFacts,
		story,
		testimonial,
		relatedServices,
		relatedServicesPromo,
		globalCta,
	} = data || {};

	return (
		<PageContainer>
			<CaseStudyHero data={{ title, description, heroImage }} />
			<QuickFacts data={quickFacts} />
			<Story data={story} />
			{testimonial && <CaseStudyTestimonial data={testimonial} />}
			<RelatedServices data={relatedServices} promo={relatedServicesPromo} />
			<GlobalCTA data={globalCta} />
		</PageContainer>
	);
};

export default CaseStudy;
export const revalidate = 10;