// data/queries/pages/FETCH_STRATEGY_PAGE_QUERY.js
export const FETCH_STRATEGY_PAGE_QUERY = `{
  "page": *[_type == "strategyPage" && _id == "strategyPage"][0]{
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
      items[]{ icon->{ name, "url": image.asset->url }, title, description },
      image{ asset->{url}, hotspot }
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
   "siteSettings": *[_type == "siteSettings" && _id == "siteSettings"][0]{
    globalCta{
      sectionLabel,
      headingLine1,
      headingLine2,
      ctaLabel,
      image{ asset->{url}, hotspot }
    }
  },
  "examples": *[_type == "workExample" && category == "strategy"] | order(order asc){
    _id,
    title,
    location,
    description,
    "linkedCaseStudy": linkedCaseStudy->{
      title,
      "slug": slug.current,
      heroImage{ asset->{url}, hotspot }
    },
    category,
    image{ asset->{url}, hotspot }
  }
}`;