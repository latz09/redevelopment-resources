// components/AccessibilityStatement.jsx
// Have counsel review before launch. This is a professional template, not legal advice.

import Section from '@/components/layout/Section';
import { fetchSeoSettings } from '@/utils/cms/fetchSeoSettings';

const effectiveDate = '10-20-2026'; // TODO: confirm effective date before launch

const linkClass = 'font-semibold underline text-light hover:opacity-80';

export default async function AccessibilityStatement() {
  const seo = await fetchSeoSettings();
  const businessName = seo.businessName ?? 'Redevelopment Resources';
  const contactEmail = seo.contactEmail ?? 'kristen@redevelopment-resources.com';

  return (
    <Section py='py-4' bg='bg-dark' className=" text-light  ">
      <article className="max-w-[64rem] mx-auto">
        <h1 className="text-accent">Accessibility Statement</h1>

        <p className="text-paragraph-lg-sm text-light mt-[0.75rem]">
          Effective Date: {effectiveDate}
        </p>

        <p className="text-paragraph-lg text-light mt-[2rem]">
          {businessName} is committed to making our website accessible to everyone, including people with disabilities. We believe every visitor, municipality, economic development partner, and client we work with should be able to use our site easily, regardless of ability.
        </p>

        <h4 className="mt-[2rem] lg:mt-[4rem] text-light">1. Our Commitment</h4>
        <p className="text-paragraph-lg text-light mt-[0.75rem]">
          As a good-faith commitment to digital accessibility, we have designed this website with reference to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, published by the World Wide Web Consortium (W3C). These guidelines help make web content more accessible to people with a wide range of disabilities.
        </p>

        <h4 className="mt-[2rem] lg:mt-[4rem] text-light">2. Known Limitations</h4>
        <p className="text-paragraph-lg text-light mt-[0.75rem]">
          While we strive for full accessibility, some content may present limitations. Links to external websites and resources are outside our control and may not meet the same accessibility standards as our own site. We are continually reviewing our website and working to address issues as they&rsquo;re identified.
        </p>

        <h4 className="mt-[2rem] lg:mt-[4rem] text-light">3. Alternative Ways to Reach Us</h4>
        <p className="text-paragraph-lg text-light mt-[0.75rem]">
          If any part of our website is difficult to access or use, we&rsquo;re happy to help you get the information you need another way. You can reach us by email at{' '}
          <a href={`mailto:${contactEmail}`} className={linkClass}>
            {contactEmail}
          </a>{' '}
          or by phone at{' '}
          <a href="tel:7155811452" className={linkClass}>
            (715) 581-1452
          </a>
          .
        </p>

        <h4 className="mt-[2rem] lg:mt-[4rem] text-light">4. Report an Accessibility Issue</h4>
        <p className="text-paragraph-lg text-light mt-[0.75rem]">
          We welcome your feedback. If you encounter an accessibility barrier on our website, please let us know by contacting us at{' '}
          <a href={`mailto:${contactEmail}`} className={linkClass}>
            {contactEmail}
          </a>{' '}
          or by phone at{' '}
          <a href="tel:7155811452" className={linkClass}>
            (715) 581-1452
          </a>
          . We aim to respond as quickly as possible.
        </p>

        <h4 className="mt-[2rem] lg:mt-[4rem] text-light">5. Ongoing Efforts</h4>
        <p className="text-paragraph-lg text-light mt-[0.75rem]">
          Accessibility is an ongoing effort, not a one-time project. We periodically review our website to identify and correct accessibility issues as they arise, and we welcome feedback that helps us improve.
        </p>
      </article>
    </Section>
  );
}