// components/sections/articles-page/ArticleCard.js
//
// Whole card is the <Link>, same reasoning as the home page's ServiceCard
// (an <a> can't nest inside an <a>) — the "Read now" row is a styled <span>
// reusing ArrowGrow from ButtonLink.js, not a nested ButtonLink.
//
// No background by default, text-dark; hover flips to bg-secondary/
// text-light. The date and title both need their own explicit
// group-hover:text-light override, not just one on the <Link> itself —
// h1-h6 set `color` directly in globals.css's base layer, so a heading's
// own color rule always wins over a hover color merely inherited from an
// ancestor. The "Read now" span has no such rule, so it inherits the
// Link's hover color fine on its own.
//
// Card title uses an arbitrary text size rather than a raw h3/h4, since the
// global h3/h4 clamp sizes (up to 3rem/2.25rem) are sized for section
// headings, not a repeated grid-card title — this is a deliberate visual
// override, not a new entry in the .text-* scale.

import Link from 'next/link';
import Image from 'next/image';
import SanityImage from '@/components/ui/SanityImage';
import { ArrowGrow } from '@/components/ui/ButtonLink';
import { formatArticleDate } from '@/utils/formatDate';
import DefaultLogo from '@/public/images/logos/redevelopment-resources-white.png';

const ArticleCard = ({ title, slug, publishedDate, heroImage }) => {
  return (
    <Link
      href={`/articles/${slug}`}
      className='group border-b border-r border-dark/50 p-1.25 gap-1 flex flex-col text-dark bg-light hover:bg-secondary hover:text-light transition-colors duration-500'
    >
      <div className='relative aspect-[397/219] rounded overflow-hidden bg-secondary '>
        {heroImage?.asset ? (
          <SanityImage
            image={heroImage}
            alt={title || ''}
            preset='articleCard'
            fill
            sizes='(max-width: 768px) 100vw, 33vw'
          />
        ) : (
          <div className='absolute inset-0 flex items-center justify-center p-2 group-hover:border group-hover:border-light/40 transition duration-500'>
            <Image
              src={DefaultLogo}
              alt=''
              className=' h-auto object-contain '
            />
          </div>
        )}
      </div>

      {publishedDate && (
        <p className='text-overline text-secondary group-hover:text-light/70 '>
          {formatArticleDate(publishedDate)}
        </p>
      )}

      <h3 className='text-[1.35rem] lg:text-[1.6rem] leading-tight group-hover:text-light'>
        {title}
      </h3>

      <span className='mt-auto inline-flex items-center gap-0.5 text-button  group-hover:text-light'>
        Read now
        <ArrowGrow />
      </span>
    </Link>
  );
};

export default ArticleCard;