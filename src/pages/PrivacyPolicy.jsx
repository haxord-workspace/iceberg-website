import { Link } from 'react-router-dom';
import LegalLayout from '../components/LegalLayout.jsx';
import Confirm from '../components/Confirm.jsx';
import Icon from '../components/Icon.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { site } from '../config/site.js';

/*
 * Source of each statement (verified against the code, Nov 2026):
 *  - Profile/ID fields: IceBergBackend/models/User.js, registration_screen.dart
 *  - Attendance/pay: models/Attendance.js, payment_details_screen.dart
 *  - Permissions: android/app/src/main/AndroidManifest.xml
 *  - Processors: Cloudinary (uploadMiddleware), Firebase Cloud Messaging (firebase-admin,
 *    firebase_messaging), Google Maps Platform (utils/mapsService.js, google_maps_flutter,
 *    google_places_flutter), MongoDB (Mongoose), SMTP email (utils/emailService.js),
 *    API host icebergbackend.onrender.com (lib/config/api_config.dart)
 *  - Security: bcrypt, JWT, helmet, rate limiting, flutter_secure_storage, FLAG_SECURE
 *  - Deletion: DELETE /api/v1/users/profile is a soft delete (isDeleted + deletedAt)
 * Anything not verifiable is wrapped in <Confirm>.
 */

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    body: (
      <>
        <p>
          This Privacy Policy explains how information is collected, used and shared when you use the {site.name}{' '}
          Android application (package <code>{site.packageName}</code>). {site.name} is developed by {site.developer}{' '}
          and is used by {site.operatorName} ({site.operatorTagline}) to manage event staffing.
        </p>
        <p>
          In this policy, “we”, “us” and “our” refer to the party responsible for the app and your data.{' '}
          <Confirm>
            Confirm which entity is the data controller (Haxord Technologies, {site.operatorName}, or both) and state
            its registered legal name and address.
          </Confirm>
        </p>
        <p>By creating an account or using the app, you acknowledge the practices described in this policy.</p>
      </>
    ),
  },
  {
    id: 'information-collected',
    title: 'Information we collect',
    body: (
      <>
        <p>
          We collect the information you provide when you register and use the app, information created while you
          work events, and limited technical information from your device. Each category is described below.
        </p>
      </>
    ),
  },
  {
    id: 'personal-information',
    title: 'Personal information',
    body: (
      <>
        <p>When you register as staff, or when an admin creates an account for you, we collect:</p>
        <ul>
          <li>
            <strong>Identity and contact details:</strong> full name, mobile number, alternate mobile number, email
            address, residential address, district and state.
          </li>
          <li>
            <strong>Profile details:</strong> profile photo, gender, date of birth and blood group.
          </li>
          <li>
            <strong>Identity verification:</strong> your Aadhaar number, the type and number of an identity document
            (Aadhaar, PAN, Voter ID or Driving Licence), and photos of the front and back of that document.
          </li>
          <li>
            <strong>Account credentials:</strong> your password, which is stored only as a one-way hash, and password
            reset codes sent to your email when you request one.
          </li>
          <li>
            <strong>Account status:</strong> your role, approval or rejection status (including any rejection
            reason), and the date you accepted the Terms and Conditions.
          </li>
        </ul>
        <p>While you use the app we also create and store:</p>
        <ul>
          <li>
            <strong>Work records:</strong> event applications, assigned shifts, cancellations, check-in and check-out
            times and notes, and staff ratings.
          </li>
          <li>
            <strong>Payment records:</strong> base pay and salary, travel allowance, incentives, fines, advance
            payments, amounts paid, payment method and payment history.
          </li>
          <li>
            <strong>A personal QR code</strong> that identifies you at events.
          </li>
        </ul>
        <p>
          Admin users may additionally enter business information such as event details, vendor details and
          quotations.
        </p>
      </>
    ),
  },
  {
    id: 'device-information',
    title: 'Device and usage information',
    body: (
      <>
        <ul>
          <li>
            <strong>Push notification token:</strong> a Firebase Cloud Messaging token for your device, used to send
            you notifications.
          </li>
          <li>
            <strong>Camera:</strong> used to scan QR codes and to take your profile photo and identity document photos.
            Photos are uploaded only when you choose to submit them.
          </li>
          <li>
            <strong>On-device storage:</strong> the app stores your sign-in tokens in the device’s secure storage and
            keeps a copy of your profile and app preferences on the device.
          </li>
          <li>
            <strong>Server logs:</strong> our servers record technical request information to operate and secure the
            service. <Confirm>Confirm what request data is logged (e.g. IP address) and how long logs are kept.</Confirm>
          </li>
        </ul>
        <p>
          The current version of the app does not include a third-party analytics or advertising SDK, and the app does
          not show advertisements.
        </p>
      </>
    ),
  },
  {
    id: 'location-information',
    title: 'Location information',
    body: (
      <>
        <p>The app requests precise and approximate location permission. Location is used in these ways:</p>
        <ul>
          <li>
            <strong>Attendance:</strong> your location is checked when you check in or check out at an event, to
            confirm you are at the assigned venue.
          </li>
          <li>
            <strong>Your base location:</strong> during registration you select a location, which is stored as an
            address with latitude and longitude. It is used to calculate travel distance and travel allowance for
            events.
          </li>
          <li>
            <strong>Event venues:</strong> admins select event venues on a map.
          </li>
        </ul>
        <p>
          The app does not request background location permission and does not track your location in the background.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How we use information',
    body: (
      <ul>
        <li>To create and manage your account and verify your identity before approval.</li>
        <li>To show available events, process applications and assign shifts.</li>
        <li>To identify you at events using your QR code and to record your attendance.</li>
        <li>To calculate earnings, allowances, fines and advances, and to record payments.</li>
        <li>To send notifications about events, applications and your account status.</li>
        <li>To send password reset emails when you request them.</li>
        <li>To prepare quotations, estimates and invoices (admin features).</li>
        <li>To keep the service secure, prevent misuse and meet legal obligations.</li>
      </ul>
    ),
  },
  {
    id: 'information-sharing',
    title: 'Information sharing',
    body: (
      <>
        <p>
          <strong>Within the organisation:</strong> your profile, verification details, work records and payment
          records are visible to admins and authorised managers who coordinate events and staff.
        </p>
        <p>
          <strong>Service providers:</strong> we use the following providers to run the app. They process data on our
          behalf to provide their service:
        </p>
        <ul>
          <li>MongoDB (database) for account, work and payment records.</li>
          <li>Cloudinary for storing uploaded images, such as profile photos and identity document images.</li>
          <li>Google Firebase Cloud Messaging for delivering push notifications.</li>
          <li>Google Maps Platform for maps, place search, geocoding and distance calculation.</li>
          <li>Render for hosting the app’s server.</li>
          <li>
            An email delivery provider for password reset emails.{' '}
            <Confirm>Name the SMTP/email provider used in production.</Confirm>
          </li>
        </ul>
        <p>
          <strong>Legal reasons:</strong> we may disclose information where required by law or to protect the rights,
          safety and property of users or others.
        </p>
        <p>
          <Confirm>
            The in-app policy states that personal data is not sold. Confirm this commitment, and confirm whether any
            data is shared with event organisers, vendors or clients outside the organisation.
          </Confirm>
        </p>
      </>
    ),
  },
  {
    id: 'storage-security',
    title: 'Data storage and security',
    body: (
      <>
        <p>We use the following measures to protect your information:</p>
        <ul>
          <li>The app communicates with our server over HTTPS.</li>
          <li>Passwords are stored as one-way hashes (bcrypt), not in readable form.</li>
          <li>Sign-in uses expiring access tokens, stored on your device in encrypted secure storage.</li>
          <li>The server applies rate limiting and secure HTTP headers.</li>
          <li>On Android, screenshots and screen recordings are blocked on sensitive screens.</li>
          <li>Access to staff records is limited to admin and authorised accounts.</li>
        </ul>
        <p>
          No method of transmission or storage is completely secure, and we cannot guarantee absolute security.
        </p>
        <p>
          <Confirm>
            Confirm whether data is encrypted at rest in the database and image storage, and the country or region
            where servers and data are located.
          </Confirm>
        </p>
      </>
    ),
  },
  {
    id: 'data-retention',
    title: 'Data retention',
    body: (
      <>
        <p>
          We keep your information while your account is active. When you delete your account, it is deactivated and
          marked as deleted, and you can no longer use it. Records connected to completed work, such as attendance and
          payment records, may need to be kept for accounting, tax, dispute-resolution or other legal purposes.
        </p>
        <p>
          <Confirm>
            State how long each type of data is kept after deletion (for example, identity documents and photos, and
            payment records) and when deleted accounts are permanently erased. Currently the server marks the account
            as deleted rather than erasing it.
          </Confirm>
        </p>
        <p>
          See <Link to="/delete-account">Account Deletion</Link> for details.
        </p>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your rights and choices',
    body: (
      <>
        <ul>
          <li>
            <strong>Access and correction:</strong> you can view your profile in the app and update your email address
            and alternate mobile number. To change other details, contact us.
          </li>
          <li>
            <strong>Deletion:</strong> you can delete your account from the Profile screen in the app, or request
            deletion through our <Link to="/delete-account">Account Deletion</Link> page.
          </li>
          <li>
            <strong>Permissions:</strong> you can turn off camera, location and notification permissions in your
            Android settings. Some features, such as QR scanning and check-in, will not work without them.
          </li>
          <li>
            <strong>Questions or complaints:</strong> contact us using the details below.
          </li>
        </ul>
        <p>
          <Confirm>
            Confirm any additional rights you will honour under applicable law, such as India’s Digital Personal Data
            Protection Act, 2023, and name a grievance contact if one is required.
          </Confirm>
        </p>
      </>
    ),
  },
  {
    id: 'childrens-privacy',
    title: 'Children’s privacy',
    body: (
      <>
        <p>
          {site.name} is a work tool for event staff and admins and is not intended for children. We do not knowingly
          collect personal information from children. If you believe a child has provided us with personal
          information, contact us and we will take appropriate steps.
        </p>
        <p>
          <Confirm>State the minimum age to register. The app does not currently enforce an age check.</Confirm>
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <p>
        We may update this Privacy Policy from time to time. When we do, we will update the “Last updated” date at the
        top of this page. Where changes are significant, we will notify users through the app or by other appropriate
        means.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact us',
    body: (
      <>
        <p>For questions about this Privacy Policy or your data, contact us:</p>
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
            <Icon name="mapPin" size={18} /> {site.region}{' '}
            <Confirm>Add the full postal address.</Confirm>
          </li>
        </ul>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  usePageMeta({
    title: 'Privacy Policy',
    description: `How the ${site.name} app collects, uses, shares and protects your information.`,
  });

  return (
    <LegalLayout
      title="Privacy Policy"
      icon="shield"
      intro={`How ${site.name} collects, uses and protects your information.`}
      sections={sections}
      notice={<DraftNotice />}
    />
  );
}

export function DraftNotice() {
  return (
    <div className="notice notice--warn" role="note">
      <Icon name="alert" size={20} />
      <p>
        <strong>Draft for review.</strong> Items marked “Requires confirmation” could not be verified from the app
        source and must be confirmed or edited before this page is published.
      </p>
    </div>
  );
}
