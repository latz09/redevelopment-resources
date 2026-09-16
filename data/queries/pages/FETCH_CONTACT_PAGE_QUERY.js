// data/queries/pages/FETCH_CONTACT_PAGE_QUERY.js
export const FETCH_CONTACT_PAGE_QUERY = `{
  "page": *[_type == "contactPage" && _id == "contactPage"][0]{
    title,
    hero{
      headline,
      subheadline
    },
    seo{
      title,
      description,
      keywords,
      "ogImage": ogImage.asset->url,
      noIndex
    }
  },
  "office": *[_type == "seoSettings" && _id == "seoSettings"][0]{
    phone,
    email,
    address
  },
  "testimonials": *[_type == "testimonial" && featured == true] | order(order asc){
    _id,
    quote,
    name,
    title,
    location
  }
}`