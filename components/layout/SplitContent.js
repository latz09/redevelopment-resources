// components/layout/SplitContent.js
const SplitContent = ({ left, right, bg = 'bg-light', className = '' }) => {
	return (
		<div className={`relative z-10 border-b border-dark ${bg} ${className}`}>
			<div className='section-x-padding grid md:grid-cols-2 gap-3.5 md:gap-0 divide-y md:divide-x divide-dark/50'>
				<div className='md:pr-2 pt-5 md:pt-0 lg:py-8.75'>{left}</div>
				<div className='md:pl-2 py-3.5 lg:py-8.75'>{right}</div>
			</div>
		</div>
	);
};

export default SplitContent;