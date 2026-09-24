// app/services/analysis/page.js  (same shape for strategy/redevelopment/financing/implementation)
import { buildPageMetadata as BPM } from '@/utils/seo/buildPageMetadata'
import { fetchContent as fc } from '@/utils/cms/fetchContent'
import { FETCH_ANALYSIS_PAGE_QUERY as Q } from '@/data/queries/pages/FETCH_ANALYSIS_PAGE_QUERY'
import PageContainer from '@/components/animations/PageContainer'
import ServicePageTemplate from '@/components/sections/services/ServicePageTemplate'

export async function generateMetadata() {
  return BPM({ slug: '/services/analysis', query: Q })
}

const Analysis = async () => {
  const data = await fc(Q)

  return (
    <PageContainer>
      <ServicePageTemplate data={data} />
    </PageContainer>
  )
}

export default Analysis

export const revalidate = 10