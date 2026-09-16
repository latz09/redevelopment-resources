// data/queries/settings/FETCH_SITE_SETTINGS_QUERY.js
// Used by the Footer component for social links + tagline, alongside the
// existing FETCH_SEO_SETTINGS_QUERY call for phone/email/siteName.
export const FETCH_SITE_SETTINGS_QUERY = `*[_type == "siteSettings" && _id == "siteSettings"][0]{
  stats[]{ value, label },
  socialLinks{ facebook, linkedin },
  footerTagline
}`