// data/queries/pages/FETCH_WHO_WE_ARE_PAGE_QUERY.js
export const FETCH_WHO_WE_ARE_PAGE_QUERY = `{
  "page": *[_type == "whoWeArePage" && _id == "whoWeArePage"][0]{
    title,
    hero{
      headline,
      subheadline,
      images[]{ asset->{url}, hotspot }
    },
    story{
      sectionLabel,
      heading,
      body
    },
    purpose{
      sectionLabel,
      heading,
      body,
      cta{ label },
      values[]{
        heading,
        body
      }
    },
    team{
      sectionLabel,
      heading,
      intro,
      members[]{
        name,
        role,
        bio,
        photo{ asset->{url}, hotspot }
      }
    },
    interns{
      sectionLabel,
      heading,
      intro,
      members[]{
        name,
        role,
        bio,
        photo{ asset->{url}, hotspot }
      }
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
  }
}`