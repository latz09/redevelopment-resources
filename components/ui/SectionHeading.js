// Pass onDark when this sits on a dark-bg section (e.g. the Hero) —
// h1-h6 inherit var(--heading-color) (navy) by default via globals.css,
// which disappears on a dark bg unless overridden here.
const SectionHeading = ({ label, heading, as: Tag = 'h2', onDark = false }) => {
	const textColor = onDark ? 'text-light' : 'text-dark';
	const labelColor = onDark ? 'text-accent' : 'text-secondary'

	return (
		<div className='section-heading space-y-1'>
			{label && <p className={`text-overline ${labelColor}`}>— {label}</p>}
			{heading && <Tag className={textColor}>{heading}</Tag>}
		</div>
	);
};

export default SectionHeading;