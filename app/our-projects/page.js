// app/our-projects/page.js
import { buildPageMetadata as BPM } from '@/utils/seo/buildPageMetadata'
import { fetchContent as fc } from '@/utils/cms/fetchContent'
import { FETCH_OUR_PROJECTS_PAGE_QUERY as Q } from '@/data/queries/pages/FETCH_OUR_PROJECTS_PAGE_QUERY'
import PageContainer from '@/components/animations/PageContainer'
import PageHero from '@/components/sections/shared/PageHero'
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview'
import FlagshipProject from '@/components/sections/projects/FlagshipProject'
import CaseStudies from '@/components/sections/projects/CaseStudies'
import TestimonialSection from '@/components/sections/shared/TestimonialSection'
import GlobalCTA from '@/components/sections/shared/GlobalCTA'

export async function generateMetadata() {
  return BPM({ slug: '/our-projects', query: Q })
}

const OurProjects = async () => {
  const data = await fc(Q)

  const { page, siteSettings, caseStudies, testimonials } = data || {}
  const { title, hero, overview, flagship, testimonialSection } = page || {}

  return (
    <PageContainer>
      {/* Hero + overview share a wrapper so the sticky hero has room to pin
          (same setup as the service pages). */}
      <div>
        <PageHero data={hero} />
        <ProjectsOverview data={overview} />
      </div>
      <FlagshipProject data={flagship} />
      <CaseStudies caseStudies={caseStudies} />
      <TestimonialSection data={testimonialSection} quotes={testimonials} />
      <GlobalCTA data={siteSettings?.globalCta} />
    </PageContainer>
  )
}

export default OurProjects

export const revalidate = 10