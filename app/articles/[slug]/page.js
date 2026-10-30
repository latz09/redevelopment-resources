// app/articles/[slug]/page.js
import '@/app/article.css'
import { buildPageMetadata as BPM } from '@/utils/seo/buildPageMetadata';
import { fetchContent as fc } from '@/utils/cms/fetchContent';
import { sanityClient } from '@/utils/cms/sanityConnection';
import { FETCH_BLOG_POST_QUERY as Q } from '@/data/queries/pages/FETCH_BLOG_POST_QUERY';
import { FETCH_BLOG_POST_SLUGS_QUERY as SLUGS_Q } from '@/data/queries/pages/FETCH_BLOG_POST_SLUGS_QUERY';
import PageContainer from '@/components/animations/PageContainer';
import PostHeader from '@/components/sections/articles-page/PostHeader';
import PostSummary from '@/components/sections/articles-page/PostSummary';
import PostBody from '@/components/sections/articles-page/PostBody';
import RelatedArticles from '@/components/sections/articles-page/RelatedArticles';
import AuthorBio from '@/components/sections/articles-page/AuthorBio';

export async function generateStaticParams() {
  // Build-time, no request scope — bypass fetchContent (it calls draftMode()).
  const posts = await sanityClient.fetch(SLUGS_Q)
  return (posts || []).map(({ slug }) => ({ slug }))
}
 
export async function generateMetadata({ params }) {
  const { slug } = await params
  return BPM({ slug: `/articles/${slug}`, query: Q, params: { slug } })
}
 
const Article = async ({ params }) => {
  const { slug } = await params
  const data = await fc(Q, { slug })
 
  const {
    title,
    author,
    publishedDate,
    heroImage,
    summary,
    body,
    relatedPosts,
    latestPosts,
  } = data || {}
 
  // Same-category posts fill Related Articles first, latest posts
  // backfill the rest — always 3, no duplicates, never this post.
  const seen = new Set()
  const relatedArticles = [...(relatedPosts || []), ...(latestPosts || [])]
    .filter((post) => {
      if (seen.has(post._id)) return false
      seen.add(post._id)
      return true
    })
    .slice(0, 3)
 
  return (
    <PageContainer>
      <div className='article-typography'>
        <PostHeader title={title} author={author} publishedDate={publishedDate} heroImage={heroImage} />
        <PostSummary summary={summary} />
        <PostBody body={body} />
        <AuthorBio author={author} />
      </div>
      <RelatedArticles posts={relatedArticles} />
    </PageContainer>
  )
}
 
export default Article
 
export const revalidate = 10