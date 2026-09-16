// app/services/financing/page.js
import { buildPageMetadata as BPM } from '@/utils/seo/buildPageMetadata'
import { fetchContent as fc } from '@/utils/cms/fetchContent'
import { FETCH_FINANCING_PAGE_QUERY as Q } from '@/data/queries/pages/FETCH_FINANCING_PAGE_QUERY'
import PageContainer from '@/components/animations/PageContainer'
import Section from '@/components/layout/Section'

export async function generateMetadata() {
  return BPM({ slug: '/services/financing', query: Q })
}

const Financing = async () => {
  const data = await fc(Q)

  return (
    <PageContainer>
      <Section className="h-[80vh] grid place-items-center">
        <div>{data?.page?.title}</div>
      </Section>
    </PageContainer>
  )
}

export default Financing

export const revalidate = 10