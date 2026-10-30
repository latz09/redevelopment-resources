// components/sections/article-page/AuthorBio.js
//
// End-of-article author card: bigger headshot + name/title/bio, bordered
// card matching the accent-border convention used elsewhere (callout box,
// table header). Reuses the same `authorHeadshot` IMAGE_PRESETS entry as
// the byline avatar in PostHeader - same source crop, just rendered larger
// here. Renders nothing if the post has no author reference set.

import BlogSection from '@/components/layout/BlogSection';
import Section from '@/components/layout/Section';
import SanityImage from '@/components/ui/SanityImage';

const AuthorBio = ({ author }) => {
  if (!author?.name) return null;

  return (
    <BlogSection py='pb-5 lg:pb-8.75'>
      <div className='w-full lg:w-[90%] flex gap-1.5 p-1.5 lg:p-2 border border-accent/50 rounded bg-accent/10'>
        {author.headshot?.asset && (
          <div className='relative w-[4rem] h-[4rem] rounded-full overflow-hidden shrink-0'>
            <SanityImage
              image={author.headshot}
              alt={author.name}
              preset='authorHeadshot'
              fill
              sizes='4rem'
            />
          </div>
        )}
        <div className='space-y-0.5'>
          <p className='text-paragraph font-semibold text-dark'>{author.name}</p>
          {author.title && <p className='text-paragraph-sm text-dark/60'>{author.title}</p>}
          {author.bio && <p className='text-paragraph-sm text-dark/80'>{author.bio}</p>}
        </div>
      </div>
    </BlogSection>
  );
};

export default AuthorBio;