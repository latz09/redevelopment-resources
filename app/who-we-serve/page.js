// app/who-we-serve/page.js
import { buildPageMetadata as BPM } from '@/utils/seo/buildPageMetadata'
import { fetchContent as fc } from '@/utils/cms/fetchContent'
import { FETCH_WHO_WE_SERVE_PAGE_QUERY as Q } from '@/data/queries/pages/FETCH_WHO_WE_SERVE_PAGE_QUERY'
import PageContainer from '@/components/animations/PageContainer'
import Section from '@/components/layout/Section'

export async function generateMetadata() {
  return BPM({ slug: '/who-we-serve', query: Q })
}

const WhoWeServe = async () => {
  const data = await fc(Q)

  return (
    <PageContainer>
      <Section className="h-[80vh] grid place-items-center">
        <div>{data?.title}</div>
      </Section>
    </PageContainer>
  )
}

export default WhoWeServe

export const revalidate = 10