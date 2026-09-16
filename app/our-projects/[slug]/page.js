// app/our-projects/[slug]/page.js
import { buildPageMetadata as BPM } from '@/utils/seo/buildPageMetadata'
import { fetchContent as fc } from '@/utils/cms/fetchContent'
import { FETCH_CASE_STUDY_QUERY as Q } from '@/data/queries/caseStudy/FETCH_CASE_STUDY_QUERY'
import { FETCH_CASE_STUDY_SLUGS_QUERY as SLUGS_Q } from '@/data/queries/caseStudy/FETCH_CASE_STUDY_SLUGS_QUERY'
import PageContainer from '@/components/animations/PageContainer'
import Section from '@/components/layout/Section'

export async function generateStaticParams() {
  const caseStudies = await fc(SLUGS_Q)
  return (caseStudies || []).map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  return BPM({ slug: `/our-projects/${slug}`, query: Q, params: { slug } })
}

const CaseStudy = async ({ params }) => {
  const { slug } = await params
  const data = await fc(Q, { slug })

  return (
    <PageContainer>
      <Section className="h-[80vh] grid place-items-center">
        <div>{data?.title}</div>
      </Section>
    </PageContainer>
  )
}

export default CaseStudy

export const revalidate = 10