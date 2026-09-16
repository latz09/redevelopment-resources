// data/queries/navigation/FETCH_NAVIGATION_QUERY.js
export const FETCH_NAVIGATION_QUERY = `*[_type == "navigation" && _id == "navigation"][0]{
  navLinks[]{
    label,
    url,
    isButton,
    children[]{
      label,
      url,
      description
    }
  }
}`