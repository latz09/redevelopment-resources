// app/page.js
import { buildPageMetadata as BPM } from '@/utils/seo/buildPageMetadata'
import { fetchContent as fc } from '@/utils/cms/fetchContent'
import { FETCH_HOME_PAGE_QUERY as Q } from '@/data/queries/pages/FETCH_HOME_PAGE_QUERY'
import PageContainer from '@/components/animations/PageContainer'
import { Typography } from '@/components/design/Typography'
import ColorPalette from '@/components/design/ColorPalette'
import ButtonPreviews from '@/components/design/ButtonPreviews'
import Section from '@/components/layout/Section'

export async function generateMetadata() {
  return BPM({ slug: '/', query: Q })
}

const Home = async () => {
  const data = await fc(Q)

  return (
    <PageContainer>
      <Section className="grid place-items-center gap-2 h-[80vh] ">
        <div>{data?.page?.title}</div>
       
      </Section>
    </PageContainer>
  )
}

export default Home

export const revalidate = 10