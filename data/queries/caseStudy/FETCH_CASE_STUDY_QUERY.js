// data/queries/caseStudy/FETCH_CASE_STUDY_QUERY.js
export const FETCH_CASE_STUDY_QUERY = `*[_type == "caseStudy" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  location,
  heroImage{ asset->{url}, hotspot },
  quickFacts[]{
    icon,
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
    "slug": select(
      _type == "analysisPage" => "/services/analysis",
      _type == "strategyPage" => "/services/strategy",
      _type == "redevelopmentPage" => "/services/redevelopment",
      _type == "financingPage" => "/services/financing",
      _type == "implementationPage" => "/services/implementation"
    )
  },
  seo{
    title,
    description,
    keywords,
    "ogImage": ogImage.asset->url,
    noIndex
  }
}`