// app/services/strategy/page.js
import { buildPageMetadata as BPM } from '@/utils/seo/buildPageMetadata'
import { fetchContent as fc } from '@/utils/cms/fetchContent'
import { FETCH_STRATEGY_PAGE_QUERY as Q } from '@/data/queries/pages/FETCH_STRATEGY_PAGE_QUERY'
import PageContainer from '@/components/animations/PageContainer'
import Section from '@/components/layout/Section'
import ServicePageTemplate from '@/components/sections/services/ServicePageTemplate'

export async function generateMetadata() {
  return BPM({ slug: '/services/strategy', query: Q })
}

const Strategy = async () => {
  const data = await fc(Q)

  return (
    <PageContainer>
     <ServicePageTemplate data={data} />
    </PageContainer>
  )
}

export default Strategy

export const revalidate = 10