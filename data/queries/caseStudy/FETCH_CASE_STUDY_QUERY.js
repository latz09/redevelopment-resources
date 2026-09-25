export const FETCH_CASE_STUDY_QUERY = `*[_type == "caseStudy" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  location,
  description,
  heroImage{ asset->{url}, hotspot },
  quickFacts[]{
    icon->{ name, "url": image.asset->url },
    text
  },
  story[]{
    heading,
    textBlocks
  },
  testimonial->{
    quote,
    name,
    title,
    location
  },
  relatedServices[]->{
    title,
    "blurb": hero.subheadline,
    "image": hero.heroImage{ asset->{url}, hotspot },
    "slug": select(
      _type == "analysisPage" => "/services/analysis",
      _type == "strategyPage" => "/services/strategy",
      _type == "redevelopmentPage" => "/services/redevelopment",
      _type == "financingPage" => "/services/financing",
      _type == "implementationPage" => "/services/implementation"
    )
  },
  "relatedServicesPromo": *[_type == "siteSettings" && _id == "siteSettings"][0].relatedServicesPromo,
  "globalCta": *[_type == "siteSettings" && _id == "siteSettings"][0].globalCta{
    sectionLabel,
    headingLine1,
    headingLine2,
    ctaLabel,
    image{ asset->{url}, hotspot }
  },
  seo{
    title,
    description,
    keywords,
    "ogImage": ogImage.asset->url,
    noIndex
  }
}`