// CaseStudyTestimonial.js
import SplitContent from '@/components/layout/SplitContent'
import SectionHeading from '@/components/ui/SectionHeading'

const stripQuoteMarks = (str) =>
	str?.trim().replace(/^["']+|["']+$/g, '') ?? ''

// "Former Mayor, Elkhorn, WI" — skips the comma if either piece is missing
const attribution = (q) => [q?.title, q?.location].filter(Boolean).join(', ')

const CaseStudyTestimonial = ({ data }) => {
	const { quote } = data || {}

	if (!quote) return null

	return (
		<SplitContent
			className='border-t border-accent/50'
			left={
				<SectionHeading
					label='Testimonials'
					heading='Thoughts on the project'
					as='h2'
					onDark={false}
				/>
			}
			right={
				<div className='flex flex-col justify-between h-full gap-1.5 lg:gap-3.5 pb-1.75 lg:pb-0'>
					<p className='text-callout'>&ldquo;{stripQuoteMarks(quote)}&rdquo;</p>
					<div className='space-y-0.5'>
						<p className='text-paragraph-lg'>{data.name}</p>
						<p className='text-paragraph'>{attribution(data)}</p>
					</div>
				</div>
			}
		/>
	)
}

export default CaseStudyTestimonial