import { Link } from 'react-router-dom';
import LegalLayout from '../components/LegalLayout.jsx';
import Confirm from '../components/Confirm.jsx';
import Icon from '../components/Icon.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { DraftNotice } from './PrivacyPolicy.jsx';
import { site } from '../config/site.js';

// Based on the in-app Terms (IceBergFrontend/lib/screens/terms_and_conditions_screen.dart),
// expanded to the sections Google Play reviewers expect. No new commitments added.

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    body: (
      <p>
        These Terms and Conditions (“Terms”) govern your use of the {site.name} Android application (package{' '}
        <code>{site.packageName}</code>). {site.name} is developed by {site.developer} and is used by{' '}
        {site.operatorName} to manage event staffing.{' '}
        <Confirm>Confirm the legal entity that is party to these Terms with users.</Confirm>
      </p>
    ),
  },
  {
    id: 'acceptance',
    title: 'Acceptance of terms',
    body: (
      <p>
        By registering for or using {site.name}, you agree to these Terms. If you do not agree, do not create an
        account or use the service. The app records the date you accept these Terms during registration.
      </p>
    ),
  },
  {
    id: 'accounts',
    title: 'User accounts and registration',
    body: (
      <>
        <ul>
          <li>You must provide accurate, current and complete information when you register.</li>
          <li>
            Staff registration requires identity verification, including an identity document and a profile photo.
          </li>
          <li>New staff accounts may require admin approval before you can apply for events.</li>
          <li>
            You are responsible for keeping your login credentials confidential and for all activity under your
            account.
          </li>
          <li>Tell us promptly if you believe your account has been used without your permission.</li>
        </ul>
        <p>
          <Confirm>State the minimum age required to register.</Confirm>
        </p>
      </>
    ),
  },
  {
    id: 'responsibilities',
    title: 'User responsibilities',
    body: (
      <ul>
        <li>Perform assigned duties professionally and follow venue rules.</li>
        <li>Attend the events and shifts you have accepted, or cancel through the app as early as possible.</li>
        <li>Keep your profile information accurate and up to date.</li>
        <li>Use attendance and location features only for genuine check-in and check-out at assigned events.</li>
      </ul>
    ),
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable use',
    body: (
      <>
        <p>You must not:</p>
        <ul>
          <li>provide false information or impersonate another person;</li>
          <li>share your QR pass or let anyone else check in for you;</li>
          <li>falsify your location or attendance;</li>
          <li>attempt to access accounts, data or features you are not authorised to use;</li>
          <li>interfere with, disrupt or reverse-engineer the app or its servers; or</li>
          <li>use the app for any unlawful purpose.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'services',
    title: 'Application services',
    body: (
      <>
        <p>
          {site.name} provides event staffing and crew management. Staff can view and apply for events, track shifts
          and earnings, and check in at venues. Admins manage vendors, events, quotations and staff.
        </p>
        <p>
          <strong>Payments.</strong> Staff payments follow the rates in approved quotations and assignments.{' '}
          {site.name} coordinates operations and keeps records; payment timing and methods may depend on your agreement
          with the organiser. Fines, advances and cancellation rules shown in the app may affect amounts payable.{' '}
          <Confirm>Confirm the payment, fine and cancellation rules to be published.</Confirm>
        </p>
        <p>
          We may change, suspend or discontinue features of the app at any time. The app requires an internet
          connection, and camera and location access for some features.
        </p>
      </>
    ),
  },
  {
    id: 'termination',
    title: 'Account suspension and termination',
    body: (
      <>
        <p>
          We may suspend, deactivate or terminate accounts that violate these Terms, provide false information or
          misuse the platform. An application to register may be rejected.
        </p>
        <p>
          You may stop using the app at any time and delete your account from the Profile screen in the app. See{' '}
          <Link to="/delete-account">Account Deletion</Link> for details. Deleting your account cancels your pending
          and approved event applications.
        </p>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual property',
    body: (
      <p>
        The app, including its design, software, logos and content, is owned by {site.developer} or its licensors and
        is protected by intellectual property laws. You receive a limited, non-exclusive, non-transferable licence to
        use the app for its intended purpose. You keep ownership of the information you submit, and you allow us to
        use it to provide the service as described in our <Link to="/privacy-policy">Privacy Policy</Link>.{' '}
        <Confirm>Confirm ownership of the app and the {site.operatorName} logo and brand.</Confirm>
      </p>
    ),
  },
  {
    id: 'liability',
    title: 'Limitation of liability',
    body: (
      <>
        <p>
          The app is provided “as is” and “as available”. To the extent permitted by law, we are not liable for
          indirect, incidental or consequential losses arising from your use of, or inability to use, the app,
          including service interruptions, data errors or the actions of other users, organisers or venues.
        </p>
        <p>Nothing in these Terms limits any liability that cannot be limited under applicable law.</p>
        <p>
          <Confirm>Have this section and the governing law and jurisdiction reviewed by a legal advisor.</Confirm>
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to terms',
    body: (
      <p>
        We may update these Terms from time to time. We will update the “Last updated” date on this page and, where
        changes are significant, notify users through the app. Continuing to use the app after changes take effect
        means you accept the updated Terms.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact information',
    body: (
      <ul className="contact-list">
        <li>
          <Icon name="building" size={18} /> {site.developer} (developer of {site.name})
        </li>
        <li>
          <Icon name="mail" size={18} /> <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
        </li>
        <li>
          <Icon name="phone" size={18} /> <a href={site.supportPhoneHref}>{site.supportPhone}</a>
        </li>
        <li>
          <Icon name="mapPin" size={18} /> {site.region}
        </li>
      </ul>
    ),
  },
];

export default function TermsAndConditions() {
  usePageMeta({
    title: 'Terms and Conditions',
    description: `The terms that govern use of the ${site.name} event staffing app.`,
  });

  return (
    <LegalLayout
      title="Terms and Conditions"
      icon="fileText"
      intro={`The rules for using ${site.name}. Please read them carefully.`}
      sections={sections}
      notice={<DraftNotice />}
    />
  );
}
