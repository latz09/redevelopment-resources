import SectionGraphic from '@/components/ui/SectionGraphic';
import SubmitContactForm from './SubmitContactForm';


// section-x-padding's actual box: padding, PLUS mx-auto's centering gap once
// the viewport exceeds container/wide (never INSTEAD of padding). So the
// inset is padding + max(0, gap) — not max(padding, gap), which is what was
// here before and silently dropped the padding on anything wider than
// ~1728px. 90rem = container (1440px), 108rem = wide (1728px), both from
// this client's tailwind.config.js maxWidth — update these two lines if
// those values ever change there.
const outerLeft =
  'pl-1 sm:pl-1.25 md:pl-2.5 lg:pl-[calc(5rem_+_max(0px,(100vw_-_90rem)/2))] 3xl:pl-[calc(5rem_+_max(0px,(100vw_-_108rem)/2))]';
const outerRight =
  'pr-1 sm:pr-1.25 md:pr-2.5 lg:pr-[calc(5rem_+_max(0px,(100vw_-_90rem)/2))] 3xl:pr-[calc(5rem_+_max(0px,(100vw_-_108rem)/2))]';
const innerLeft = 'pl-1 sm:pl-1.25 md:pl-2.5 lg:pl-5';
const innerRight = 'pr-1 sm:pr-1.25 md:pr-2.5 lg:pr-5';

const ContactHero = ({ headline, subheadline }) => {
  return (
    <header className="grid lg:grid-cols-2 min-h-[35rem]">
      <div className="relative overflow-hidden bg-primary flex items-end lg:border-t border-accent">
        <SectionGraphic
          variant='flag'
          className='absolute z-0 top-0 left-0 h-full w-auto text-light/10 pointer-events-none select-none'
        />

        <div
          className={`relative z-10 ${outerLeft} ${innerRight} py-4 lg:py-4 3xl:py-8.75 space-y-1.5`}
        >
          <h1 className="text-light">{headline}</h1>
          <p className="text-paragraph-lg text-light/80 max-w-[33.45rem] 3xl:max-w-[38rem]  ">{subheadline}</p>
        </div>
      </div>

      <div className="bg-light border-b border-accent">
        <div className={`${innerLeft} ${outerRight} py-4 lg:py-5 3xl:py-8.75`}>
          <SubmitContactForm />
        </div>
      </div>
    </header>
  );
};

export default ContactHero;