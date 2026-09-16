// data/queries/pages/FETCH_ANALYSIS_PAGE_QUERY.js
export const FETCH_ANALYSIS_PAGE_QUERY = `{
  "page": *[_type == "analysisPage" && _id == "analysisPage"][0]{
    title,
    hero{
      headline,
      subheadline,
      heroImage{ asset->{url}, hotspot }
    },
    overview{
      sectionLabel,
      heading,
      body,
      cta{ label }
    },
    offerings{
      sectionLabel,
      heading,
      items[]{ icon, title, description }
    },
    workExamples{
      sectionLabel,
      heading,
      intro
    },
    seo{
      title,
      description,
      keywords,
      "ogImage": ogImage.asset->url,
      noIndex
    }
  },
  "examples": *[_type == "workExample" && category == "analysis"] | order(order asc){
    _id,
    title,
    location,
    description,
    "linkedCaseStudy": linkedCaseStudy->{ title, "slug": slug.current }
  }
}`