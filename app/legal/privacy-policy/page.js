// components/PrivacyPolicy.jsx
// Have counsel review before launch. This is a professional template, not legal advice.

import Section from '@/components/layout/Section';
import { fetchSeoSettings } from '@/utils/cms/fetchSeoSettings';

const effectiveDate = '10-20-2026'; // TODO: confirm effective date before launch
const businessLocation = 'Wisconsin, USA';

const linkClass = 'font-semibold underline text-light hover:opacity-80';

export default async function PrivacyPolicy() {
  const seo = await fetchSeoSettings();
  const businessName = seo.businessName ?? 'Redevelopment Resources';
  const contactEmail = seo.contactEmail ?? 'kristen@redevelopment-resources.com';

  return (
    <Section py='py-4' bg='bg-dark' className=" text-light  ">
      <article className="max-w-[64rem] mx-auto">
        <h1 className="text-accent">Privacy Policy</h1>

        <p className="text-paragraph-lg-sm text-light mt-[0.75rem]">
          Effective Date: {effectiveDate}
        </p>

        <p className="text-paragraph-lg text-light mt-[2rem]">
          {businessName} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, how we use it, and the choices you have when you visit {businessName}&rsquo;s website or contact us directly.
        </p>

        <p className="text-paragraph-lg-sm text-light mt-[1rem]">
          NOTE: This policy applies only to information collected through our website and direct communications with us. It does not cover information you may share with third-party services we link to.
        </p>

        <h4 className="mt-[2rem] lg:mt-[4rem] text-light">1. Information We Collect</h4>
        <p className="text-paragraph-lg text-light mt-[0.75rem]">
          We collect information in the following ways:
        </p>
        <ul className="text-paragraph-lg text-light mt-[0.75rem] space-y-[0.5rem]">
          <li>
            <strong className="font-semibold">Contact form submissions:</strong> when you reach out through our Contact Us page, we collect the information you provide, such as your name, email address, phone number, organization, and the content of your message.
          </li>
          <li>
            <strong className="font-semibold">Device &amp; usage data:</strong> like most websites, we automatically collect certain technical information when you visit our site, including your IP address, browser type, device type, pages viewed, and the date and time of your visit.
          </li>
        </ul>

        <h4 className="mt-[2rem] lg:mt-[4rem] text-light">2. Legal Bases for Processing (GDPR)</h4>
        <p className="text-paragraph-lg text-light mt-[0.75rem]">
          If you are located in the European Economic Area, our legal bases for processing your personal information include: your consent, our legitimate interests in operating and improving our website and services, and, where applicable, the necessity of processing to take steps at your request prior to entering into an agreement with us.
        </p>

        <h4 className="mt-[2rem] lg:mt-[4rem] text-light">3. How We Use Information</h4>
        <p className="text-paragraph-lg text-light mt-[0.75rem]">
          We use the information we collect to respond to inquiries about our economic development and redevelopment consulting services, including analysis, strategy, redevelopment, financing, and implementation work; to communicate with current and prospective clients; to maintain and improve our website; and to understand how visitors use our site.
        </p>

        <h4 className="mt-[2rem] lg:mt-[4rem] text-light">4. Cookies &amp; Similar Technologies</h4>
        <p className="text-paragraph-lg text-light mt-[0.75rem]">
          Our website may use cookies and similar technologies to support basic site functionality and to help us understand how visitors use our site. You can control or disable cookies through your browser settings, though some parts of the site may not function as intended if you do.
        </p>

        <h4 className="mt-[2rem] lg:mt-[4rem] text-light">5. Sharing of Information</h4>
        <p className="text-paragraph-lg text-light mt-[0.75rem]">
          We do not sell or rent your personal information to third parties. We may share information with trusted service providers who help us operate our website, including our website hosting provider (Vercel) and our content management system (Sanity). These providers only access information as needed to perform their services for us.
        </p>

        <h4 className="mt-[2rem] lg:mt-[4rem] text-light">6. Data Retention</h4>
        <p className="text-paragraph-lg text-light mt-[0.75rem]">
          We retain the information we collect for as long as necessary to respond to your inquiry, maintain our business records, and comply with our legal obligations. When information is no longer needed for these purposes, we take reasonable steps to delete or anonymize it.
        </p>

        <h4 className="mt-[2rem] lg:mt-[4rem] text-light">7. International Transfers</h4>
        <p className="text-paragraph-lg text-light mt-[0.75rem]">
          {businessName} is based in {businessLocation}. If you are accessing our website from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States, where data protection laws may differ from those in your jurisdiction.
        </p>

        <h4 className="mt-[2rem] lg:mt-[4rem] text-light">8. Your Privacy Rights</h4>
        <p className="text-paragraph-lg text-light mt-[0.75rem]">
          Depending on where you live, you may have the right to access, correct, or delete the personal information we hold about you, and to object to or restrict certain processing. To exercise any of these rights, contact us using the information below.
        </p>
        <p className="text-paragraph-lg-sm text-light mt-[0.75rem]">
          California residents have the right to opt out of the sale or sharing of personal information. {businessName} does not sell or share personal information as defined under the CCPA.
        </p>

        <h4 className="mt-[2rem] lg:mt-[4rem] text-light">9. Children&rsquo;s Privacy</h4>
        <p className="text-paragraph-lg text-light mt-[0.75rem]">
          Our website is not directed to children under the age of 13, and we do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can promptly remove it.
        </p>

        <h4 className="mt-[2rem] lg:mt-[4rem] text-light">10. Security</h4>
        <p className="text-paragraph-lg text-light mt-[0.75rem]">
          We use reasonable administrative, technical, and physical safeguards to help protect the information we collect. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
        </p>

        <h4 className="mt-[2rem] lg:mt-[4rem] text-light">11. Changes to This Policy</h4>
        <p className="text-paragraph-lg text-light mt-[0.75rem]">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date.
        </p>

        <h4 className="mt-[2rem] lg:mt-[4rem] text-light">12. Contact Us</h4>
        <p className="text-paragraph-lg text-light mt-[0.75rem]">
          If you have questions about this Privacy Policy or how we handle your information, contact us at{' '}
          <a href={`mailto:${contactEmail}`} className={linkClass}>
            {contactEmail}
          </a>{' '}
          or by phone at{' '}
          <a href="tel:7155811452" className={linkClass}>
            (715) 581-1452
          </a>
          .
        </p>
      </article>
    </Section>
  );
}