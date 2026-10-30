const BlogSection = ({
	children,
	as: Tag = 'section',
	bg = '',
	py = 'py-5 lg:py-8.75',
	className = '',
	id = '',
}) => {
	return (
		<Tag className={bg} id={id}>
			<div className={`blog-section-padding ${py} ${className}`}>{children}</div>
		</Tag>
	);
};

export default BlogSection;
