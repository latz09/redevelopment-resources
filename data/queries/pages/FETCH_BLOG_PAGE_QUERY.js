// data/queries/pages/FETCH_BLOG_PAGE_QUERY.js
export const FETCH_BLOG_PAGE_QUERY = `{
  "page": *[_type == "blogPage" && _id == "blogPage"][0]{
    title,
    hero{
      heading,
      subheading,
      featuredPost->{
        _id,
        title,
        "slug": slug.current,
        publishedDate,
        heroImage{
          asset->{url},
          hotspot
        }
      }
    },
    articlesSection{
      eyebrow,
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
  "posts": *[_type == "blogPost"] | order(publishedDate desc){
    _id,
    title,
    "slug": slug.current,
    publishedDate,
    heroImage{
      asset->{url},
      hotspot
    },
    category->{
      _id,
      name
    }
  },
  "categories": *[_type == "blogCategory"] | order(order asc){
    _id,
    name
  }
}`