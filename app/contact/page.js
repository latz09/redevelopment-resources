import { buildPageMetadata as BPM } from '@/utils/seo/buildPageMetadata'
import { fetchContent as fc } from '@/utils/cms/fetchContent'
import { FETCH_CONTACT_PAGE_QUERY as Q } from '@/data/queries/pages/FETCH_CONTACT_PAGE_QUERY'
import PageContainer from '@/components/animations/PageContainer'
import TestimonialSection from '@/components/sections/shared/TestimonialSection'
import ContactHero from '@/components/sections/contact/ContactHero'
import OfficeSection from '@/components/sections/contact/OfficeSection'

export async function generateMetadata() {
  return BPM({ slug: '/contact', query: Q })
}

const Contact = async () => {
  const data = await fc(Q)
  const { hero, office, testimonialSection } = data?.page || {}
  const { testimonials } = data || {}

  return (
    <PageContainer>
      <ContactHero {...hero} />
      <OfficeSection {...office} />
      <TestimonialSection data={testimonialSection} quotes={testimonials} />
    </PageContainer>
  )
}

export default Contact

export const revalidate = 10