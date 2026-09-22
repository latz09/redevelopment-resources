// app/who-we-are/page.js
import { buildPageMetadata as BPM } from '@/utils/seo/buildPageMetadata'
import { fetchContent as fc } from '@/utils/cms/fetchContent'
import { FETCH_WHO_WE_ARE_PAGE_QUERY as Q } from '@/data/queries/pages/FETCH_WHO_WE_ARE_PAGE_QUERY'
import PageContainer from '@/components/animations/PageContainer'
import WhoWeAreHero from '@/components/sections/who-we-are/WhoWeAreHero'
import Story from '@/components/sections/who-we-are/Story'
import Purpose from '@/components/sections/who-we-are/Purpose'
import Team from '@/components/sections/who-we-are/Team'
import Interns from '@/components/sections/who-we-are/Interns'
import ByTheNumbers from '@/components/sections/shared/ByTheNumbers'
import GlobalCTA from '@/components/sections/shared/GlobalCTA'

export async function generateMetadata() {
  return BPM({ slug: '/who-we-are', query: Q })
}

const WhoWeAre = async () => {
  const data = await fc(Q)
  const { hero, story, purpose, team, interns } = data.page || {};
  const { stats, statsImage, globalCta } = data.siteSettings || {};

  return (
    <PageContainer>
      <WhoWeAreHero data={hero} />
      <Story data={story} />
      <Purpose data={purpose} />
      <ByTheNumbers data={{ stats, statsImage }} />
      <Team data={team} />
      <Interns data={interns} />
      <GlobalCTA data={globalCta} />
    </PageContainer>
  )
}

export default WhoWeAre

export const dynamic = 'force-dynamic';