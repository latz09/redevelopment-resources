export const FETCH_CONTACT_PAGE_QUERY = `{
  "page": *[_type == "contactPage" && _id == "contactPage"][0]{
    title,
    hero{
      headline,
      subheadline
    },
    office{
      heading,
      address{
        value,
        "iconUrl": icon->image.asset->url
      },
      phone{
        value,
        "iconUrl": icon->image.asset->url
      },
      email{
        value,
        "iconUrl": icon->image.asset->url
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
  "testimonials": *[_type == "testimonial" && featured == true] | order(order asc){
    _id,
    "quote": coalesce(pullQuote, quote),
    name,
    title,
    location
  }
}`