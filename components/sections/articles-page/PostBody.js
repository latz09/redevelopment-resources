// components/sections/article-page/PostBody.js
//
// Thin wrapper around PortableText + the component map - spacing between
// blocks is this file's job (per PortableTextComponents.js's own usage
// comment), content rendering is the component map's job.

import { PortableText } from '@portabletext/react';
import Section from '@/components/layout/Section';
import { portableTextComponents } from './PortableTextComponents';
import BlogSection from '@/components/layout/BlogSection';

const PostBody = ({ body }) => {
  if (!body?.length) return null;

  return (
    <BlogSection py='pb-2.5 lg:pb-5 '>
      <div className=' space-y-1.5 lg:space-y-3'>
        <PortableText value={body} components={portableTextComponents} />
      </div>
    </BlogSection>
  );
};

export default PostBody;