// data/queries/pages/FETCH_WHO_WE_SERVE_PAGE_QUERY.js
export const FETCH_WHO_WE_SERVE_PAGE_QUERY = `{
  "page": *[_type == "whoWeServePage" && _id == "whoWeServePage"][0]{
    title,
    hero{
      headline,
      subheadline,
      heroImage{ asset->{url}, hotspot }
    },
    publicSector{
      heading,
      intro,
      municipalities{
        heading,
        body,
        cta{
          label,
          caseStudy->{ title, "slug": slug.current }
        }
      },
      organizations{
        heading,
        body,
        cta{
          label,
          caseStudy->{ title, "slug": slug.current }
        }
      },
      sectionImage{ asset->{url}, hotspot }
    },
    privateSector{
      heading,
      intro,
      entrepreneurs{
        heading,
        body,
        cta{
          label,
          caseStudy->{ title, "slug": slug.current }
        }
      },
      privateDevelopers{
        heading,
        body,
        cta{
          label,
          caseStudy->{ title, "slug": slug.current }
        }
      },
      sectionImage{ asset->{url}, hotspot }
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
    globalCta{
      sectionLabel,
      headingLine1,
      headingLine2,
      ctaLabel,
      image{ asset->{url}, hotspot }
    }
  }
}`