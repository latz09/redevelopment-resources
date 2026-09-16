// data/queries/pages/FETCH_HOME_PAGE_QUERY.js
export const FETCH_HOME_PAGE_QUERY = `{
  "page": *[_type == "homePage" && _id == "homePage"][0]{
    title,
    hero{
      headline,
      subheadline,
      primaryCta{ label },
      secondaryCta{ label },
      heroImage{ asset->{url}, hotspot }
    },
    approach{
      sectionLabel,
      heading,
      body
    },
    services{
      sectionLabel,
      heading,
      analysisCard{ title, description },
      strategyCard{ title, description },
      redevelopmentCard{ title, description },
      financingCard{ title, description },
      implementationCard{ title, description },
      notSureCard{ title, description, ctaLabel }
    },
    whoWeServe{
      sectionLabel,
      heading,
      publicSectorCard{
        title,
        description,
        ctaLabel,
        image{ asset->{url}, hotspot }
      },
      privateSectorCard{
        title,
        description,
        ctaLabel,
        image{ asset->{url}, hotspot }
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
  "siteSettings": *[_type == "siteSettings" && _id == "siteSettings"][0]{
    stats[]{ value, label }
  },
  "testimonials": *[_type == "testimonial" && featured == true] | order(order asc){
    _id,
    quote,
    name,
    title,
    location
  }
}`