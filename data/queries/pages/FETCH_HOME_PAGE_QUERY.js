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
  analysisCard{ title, description, url, "iconUrl": icon.asset->url },
  strategyCard{ title, description, url, "iconUrl": icon.asset->url },
  redevelopmentCard{ title, description, url, "iconUrl": icon.asset->url },
  financingCard{ title, description, url, "iconUrl": icon.asset->url },
  implementationCard{ title, description, url, "iconUrl": icon.asset->url },
  notSureCard{ title, description, ctaLabel, url },
  servicesImage{ asset->{url}, hotspot }
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
    stats[]{ value, label },
    statsImage{ asset->{url}, hotspot },
    globalCta{
      sectionLabel,
      headingLine1,
      headingLine2,
      ctaLabel,
      image{ asset->{url}, hotspot }
    }
  },
  "testimonials": *[_type == "testimonial" && featured == true] | order(order asc){
    _id,
    quote,
    name,
    title,
    location
  }
}`;