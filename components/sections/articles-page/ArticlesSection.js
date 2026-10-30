// components/sections/articles-page/ArticlesSection.js
//
// Eyebrow + heading, category filter pills, 3-col card grid. Client
// component - filtering happens against the already-fetched `posts` array
// (no separate query per category), since the whole list is small and
// already on the page.
//
// ArticleCard no longer takes a `featured` prop - cards are uniform
// (no background, text-dark, bg-secondary/text-light on hover), so the
// earlier "first card highlighted" treatment is gone; nothing here needs
// to track which card is first anymore.

'use client';

import { useMemo, useState } from 'react';
import Section from '@/components/layout/Section';
import ArticleCard from './ArticleCard';
import SectionHeading from '@/components/ui/SectionHeading';

const ArticlesSection = ({ eyebrow, heading, posts = [], categories = [] }) => {
	const [activeCategory, setActiveCategory] = useState('All');

	const filteredPosts = useMemo(() => {
		if (activeCategory === 'All') return posts;
		return posts.filter((post) => post.category?.name === activeCategory);
	}, [posts, activeCategory]);

	return (
		<Section bg='bg-light'>
			<SectionHeading
				label={eyebrow}
				heading={heading}
				as='h2'
				onDark={false}
			/>

			<div className='flex flex-wrap items-center gap-0.5 lg:gap-0.75 mt-4 mb-1.5'>
				<span className='text-paragraph-lg font-[700]'>Filter:</span>
				{['All', ...categories.map((c) => c.name)].map((name) => {
					const isActive = name === activeCategory;
					return (
						<button
							key={name}
							type='button'
							onClick={() => setActiveCategory(name)}
							className={`text-button px-1 py-0.5 rounded border transition-colors duration-300 ${
								isActive
									? 'bg-primary text-light border-primary'
									: 'bg-transparent text-primary hover:text-white border-secondary hover:bg-secondary'
							}`}
						>
							{name}
						</button>
					);
				})}
			</div>

			{filteredPosts.length > 0 ? (
				<div className='grid grid-cols-1 md:grid-cols-3 border border-dark/50 '>
					{/* gap-1 bg-dark/50 -- ?? for border look? once more is populated */}
					{filteredPosts.map((post) => (
						<ArticleCard key={post._id} {...post} />
					))}
				</div>
			) : (
				<p className='text-paragraph text-dark/60'>
					No articles in this category yet.
				</p>
			)}
		</Section>
	);
};

export default ArticlesSection;
