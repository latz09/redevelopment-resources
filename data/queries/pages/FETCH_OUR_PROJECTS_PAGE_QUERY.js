// data/queries/pages/FETCH_OUR_PROJECTS_PAGE_QUERY.js
export const FETCH_OUR_PROJECTS_PAGE_QUERY = `{
  "page": *[_type == "ourProjectsPage" && _id == "ourProjectsPage"][0]{
    title,
    hero{
      headline,
      subheadline,
      cta{ label },
      heroImage{ asset->{url}, hotspot }
    },
    overview{
      sectionLabel,
      heading,
      body
    },
    flagship{
      sectionLabel,
      body,
      cta{ label },
      caseStudy->{
        title,
        "slug": slug.current,
        location,
        heroImage{ asset->{url}, hotspot }
      }
    },
    testimonialSection{
      sectionLabel,
      heading
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
  "caseStudies": *[_type == "caseStudy"] | order(order asc){
    _id,
    title,
    "slug": slug.current,
    location,
    heroImage{ asset->{url}, hotspot },
    relatedServices[]->{ title }
  },
  "testimonials": *[_type == "testimonial" && featured == true] | order(order asc){
    _id,
    "quote": coalesce(pullQuote, quote),
    name,
    title,
    location
  }
}`