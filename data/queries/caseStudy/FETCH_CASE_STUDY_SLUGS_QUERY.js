// data/queries/caseStudy/FETCH_CASE_STUDY_SLUGS_QUERY.js
// Used for generateStaticParams on the /our-projects/[slug] route.
export const FETCH_CASE_STUDY_SLUGS_QUERY = `*[_type == "caseStudy" && defined(slug.current)]{
  "slug": slug.current
}`