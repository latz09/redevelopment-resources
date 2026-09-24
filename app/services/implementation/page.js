// app/services/implementation/page.js
import { buildPageMetadata as BPM } from '@/utils/seo/buildPageMetadata'
import { fetchContent as fc } from '@/utils/cms/fetchContent'
import { FETCH_IMPLEMENTATION_PAGE_QUERY as Q } from '@/data/queries/pages/FETCH_IMPLEMENTATION_PAGE_QUERY'
import PageContainer from '@/components/animations/PageContainer'
import Section from '@/components/layout/Section'
import ServicePageTemplate from '@/components/sections/services/ServicePageTemplate'

export async function generateMetadata() {
  return BPM({ slug: '/services/implementation', query: Q })
}

const Implementation = async () => {
  const data = await fc(Q)

  return (
    <PageContainer>
      <ServicePageTemplate data={data} />
    </PageContainer>
  )
}

export default Implementation

export const revalidate = 10