// data/queries/blogPost/FETCH_BLOG_POST_SLUGS_QUERY.js
export const FETCH_BLOG_POST_SLUGS_QUERY = `*[_type == "blogPost" && defined(slug.current)]{
  "slug": slug.current
}`