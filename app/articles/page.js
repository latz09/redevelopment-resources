// app/articles/page.js
import { buildPageMetadata as BPM } from '@/utils/seo/buildPageMetadata'
import { fetchContent as fc } from '@/utils/cms/fetchContent'
import { FETCH_BLOG_PAGE_QUERY as Q } from '@/data/queries/pages/FETCH_BLOG_PAGE_QUERY'
import PageContainer from '@/components/animations/PageContainer'
import ArticlesHero from '@/components/sections/articles-page/ArticlesHero'
import ArticlesSection from '@/components/sections/articles-page/ArticlesSection'


export async function generateMetadata() {
  return BPM({ slug: '/articles', query: Q })
}

const Articles = async () => {
  const data = await fc(Q)

  // Compound query — page content reads off data.page, the live
  // posts/categories lists read off data.posts / data.categories.
  const { hero, articlesSection } = data?.page || {}
  const { posts, categories } = data || {}

  return (
    <PageContainer>
      <ArticlesHero {...hero} />
      <ArticlesSection {...articlesSection} posts={posts} categories={categories} />
    </PageContainer>
  )
}

export default Articles

export const revalidate = 10