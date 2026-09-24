// app/our-projects/[slug]/page.js
import { buildPageMetadata as BPM } from '@/utils/seo/buildPageMetadata'
import { fetchContent as fc } from '@/utils/cms/fetchContent'
import { sanityClient } from '@/utils/cms/sanityConnection'
import { FETCH_CASE_STUDY_QUERY as Q } from '@/data/queries/caseStudy/FETCH_CASE_STUDY_QUERY'
import { FETCH_CASE_STUDY_SLUGS_QUERY as SLUGS_Q } from '@/data/queries/caseStudy/FETCH_CASE_STUDY_SLUGS_QUERY'
import PageContainer from '@/components/animations/PageContainer'
import Section from '@/components/layout/Section'
import Link from 'next/link'

export async function generateStaticParams() {
  // Build-time, no request scope — bypass fetchContent (it calls draftMode()).
  const caseStudies = await sanityClient.fetch(SLUGS_Q)
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
      <Section className="gap-2 grid place-items-center text-center">
        <h1 className="mb-2">{data?.title}</h1>
        <h5>Related Services</h5>
        <ul className="space-y-0.75">
          {data?.relatedServices?.map((service) => (
            <li key={service.slug} className="rounded bg-dark text-light px-2 py-0.75">
              <Link href={service.slug}>{service.title}</Link>
            </li>
          ))}
        </ul>
      </Section>
    </PageContainer>
  )
}
export default CaseStudy
export const revalidate = 10