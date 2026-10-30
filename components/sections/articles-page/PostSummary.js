// components/sections/article-page/PostSummary.js
//
// Optional lede paragraph shown above the body. Uses .text-paragraph-lg to
// read slightly bigger than body copy - an editorial judgment call, not
// something confirmed against the Figma (which shows this as placeholder
// Figma-note text, not a styled example).

import BlogSection from '@/components/layout/BlogSection';

const PostSummary = ({ summary }) => {
  if (!summary) return null;

  return (
    <BlogSection py='py-4'>
      <p className='text-paragraph-lg text-dark'>{summary}</p>
    </BlogSection>
  );
};

export default PostSummary;