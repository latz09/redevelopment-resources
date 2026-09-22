// components/layout/SplitContent.js
const SplitContent = ({ left, right, bg = 'bg-light', className = '' }) => {
	return (
		<div className={`relative z-10  ${bg} ${className}`}>
			<div className='section-x-padding grid lg:grid-cols-2 gap-3.5 lg:gap-0 divide-y lg:divide-x divide-accent/50'>
				<div className='lg:pr-2 pt-5  lg:py-8.75'>{left}</div>
				<div className='lg:pl-2 py-3.5 lg:py-8.75'>{right}</div>
			</div>
		</div>
	);
};

export default SplitContent;