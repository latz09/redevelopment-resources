// components/sections/service-page/ServicePageTemplate.js
import PageHero from '@/components/sections/shared/PageHero';
import GlobalCTA from '@/components/sections/shared/GlobalCTA';
import ServiceOverview from './ServiceOverview';
import Offerings from './Offerings';
import WorkExamples from './WorkExamples';

const ServicePageTemplate = ({ data }) => {
	const { page, examples, siteSettings } = data || {};
	const {
		title,
		hero,
		overview,
		offerings,
		workExamples: workIntroduction,
	} = page || {};

	return (
		<>
			{/* Hero + overview share this wrapper so the sticky hero has a
			    parent tall enough to pin inside while the overview slides up
			    over it. Everything after the overview stays outside. */}
			<div>
				<PageHero data={hero} />
				<ServiceOverview data={overview} />
			</div>
			<Offerings data={offerings} />
			<WorkExamples data={workIntroduction} examples={examples} />
			<GlobalCTA data={siteSettings?.globalCta} />
		</>
	);
};

export default ServicePageTemplate;

// <h1>{title}</h1>

// <ul>
//   {examples?.map((example) => (
//     <li key={example._id}>
//       {example.linkedCaseStudy?.slug ? (
//         <Link href={`/our-projects/${example.linkedCaseStudy.slug}`} className="text-secondary">
//           {example.title}
//         </Link>
//       ) : (
//         example.title
//       )}
//     </li>
//   ))}
// </ul>
