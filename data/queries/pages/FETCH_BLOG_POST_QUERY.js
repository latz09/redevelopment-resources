// data/queries/blogPost/FETCH_BLOG_POST_QUERY.js
export const FETCH_BLOG_POST_QUERY = `*[_type == "blogPost" && slug.current == $slug][0]{
  _id,
  title,
  author->{
    name,
    title,
    bio,
    headshot{
      asset->{url},
      hotspot
    }
  },
  publishedDate,
  category->{
    _id,
    name
  },
  heroImage{
    asset->{url},
    hotspot
  },
  summary,
  body[]{
    ...,
    _type == "image" => {
      ...,
      asset->{
        url,
        metadata{dimensions{aspectRatio}}
      },
      hotspot
    }
  },
  "relatedPosts": *[
    _type == "blogPost" &&
    _id != ^._id &&
    category._ref == ^.category._ref
  ] | order(publishedDate desc)[0...3]{
    _id,
    title,
    "slug": slug.current,
    publishedDate,
    heroImage{
      asset->{url},
      hotspot
    }
  },
  "latestPosts": *[
    _type == "blogPost" &&
    _id != ^._id
  ] | order(publishedDate desc)[0...6]{
    _id,
    title,
    "slug": slug.current,
    publishedDate,
    heroImage{
      asset->{url},
      hotspot
    }
  },
  seo{
    "title": coalesce(seo.title, title),
    "description": coalesce(seo.description, summary),
    keywords,
    "ogImage": coalesce(seo.ogImage.asset->url, heroImage.asset->url),
    noIndex
  }
}`