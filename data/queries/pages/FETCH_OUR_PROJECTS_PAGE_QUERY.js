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
    seo{
      title,
      description,
      keywords,
      "ogImage": ogImage.asset->url,
      noIndex
    }
  },
  "caseStudies": *[_type == "caseStudy"] | order(order asc){
    _id,
    title,
    "slug": slug.current,
    location,
    heroImage{ asset->{url}, hotspot }
  },
  "modalTestimonials": *[_type == "testimonial" && !defined(linkedCaseStudy)] | order(order asc){
    _id,
    quote,
    name,
    title,
    location
  },
  "testimonials": *[_type == "testimonial" && featured == true] | order(order asc){
    _id,
    quote,
    name,
    title,
    location
  }
}`