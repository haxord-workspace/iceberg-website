import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Confirm from '../components/Confirm.jsx';
import Icon from '../components/Icon.jsx';
import MailtoForm from '../components/MailtoForm.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { DraftNotice } from './PrivacyPolicy.jsx';
import { site } from '../config/site.js';

/*
 * Deletion behaviour verified in the code:
 *  - App: Profile screen > "Delete Account" > confirm (profile_screen.dart)
 *  - API: DELETE /api/v1/users/profile -> deleteMyProfile (controllers/userController.js)
 *    sets isDeleted=true and deletedAt, then handleUserDeletionCleanup (utils/userCleanup.js):
 *    cancels pending/approved applications and notifies admins.
 *  - The user record and uploaded images are NOT erased by this flow.
 */

const buildBody = (d) =>
  [
    `Please delete my ${site.name} account and associated personal data.`,
    '',
    `Full name: ${d.name}`,
    `Registered mobile number: ${d.mobile}`,
    `Registered email: ${d.email || '(not provided)'}`,
    `Reason (optional): ${d.reason || '(not provided)'}`,
    '',
    'I confirm I am the owner of this account and understand that deletion cannot be undone.',
    `App package: ${site.packageName}`,
  ].join('\n');

export default function DeleteAccount() {
  usePageMeta({
    title: 'Delete Your Account',
    description: `How to delete your ${site.name} account and what happens to your data. Delete in the app or request deletion online.`,
  });

  return (
    <>
      <PageHero
        eyebrow="Account"
        icon="trash"
        title={`Delete your ${site.name} account`}
        intro="You can delete your account directly in the app, or ask us to delete it for you."
        meta={`App: ${site.name} · Developer: ${site.developer} · Package: ${site.packageName}`}
      />

      <div className="container narrow-stack">
        <DraftNotice />

        {/* Option 1 */}
        <section className="card panel" aria-labelledby="in-app">
          <div className="panel__head">
            <span className="panel__badge">Option 1</span>
            <h2 id="in-app">Delete your account in the app</h2>
          </div>
          <ol className="numbered">
            <li>
              Open the <strong>{site.name}</strong> app and sign in.
            </li>
            <li>
              Go to your <strong>Profile</strong>.
            </li>
            <li>
              Scroll down and tap <strong>Delete Account</strong>.
            </li>
            <li>
              Tap <strong>Delete</strong> to confirm. You will be signed out.
            </li>
          </ol>
          <p className="muted">This action cannot be undone.</p>
        </section>

        {/* Option 2 */}
        <section className="card panel" aria-labelledby="request">
          <div className="panel__head">
            <span className="panel__badge">Option 2</span>
            <h2 id="request">Request deletion from our team</h2>
          </div>
          <p>
            If you can’t sign in or no longer have the app, send us a deletion request. We only need enough information
            to find your account. We may contact you on your registered mobile number or email to confirm that you own
            the account before deleting it.
          </p>

          <MailtoForm
            idPrefix="del"
            subject={`Account deletion request – ${site.name}`}
            buildBody={buildBody}
            submitLabel="Prepare deletion request email"
          >
            <div className="form__row">
              <label className="field">
                <span>
                  Full name <em aria-hidden="true">*</em>
                </span>
                <input name="name" type="text" autoComplete="name" required maxLength={100} />
              </label>
              <label className="field">
                <span>
                  Registered mobile number <em aria-hidden="true">*</em>
                </span>
                <input
                  name="mobile"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  pattern="^\+?[0-9 ]{10,15}$"
                  placeholder="The number you signed up with"
                  title="Enter the 10-digit mobile number linked to your account"
                />
              </label>
            </div>
            <label className="field">
              <span>
                Registered email <small>(optional)</small>
              </span>
              <input name="email" type="email" autoComplete="email" maxLength={120} />
            </label>
            <label className="field">
              <span>
                Reason <small>(optional)</small>
              </span>
              <textarea name="reason" rows={3} maxLength={500} />
            </label>
            <label className="checkbox">
              <input type="checkbox" name="confirm" required />
              <span>
                I am the owner of this account and I understand that deleting it cannot be undone.{' '}
                <em aria-hidden="true">*</em>
              </span>
            </label>
          </MailtoForm>
        </section>

        {/* What happens */}
        <section className="card panel" aria-labelledby="what-happens">
          <h2 id="what-happens">What happens when your account is deleted</h2>
          <ul className="icon-list">
            <li>
              <Icon name="lock" size={20} />
              <span>Your account is deactivated and marked as deleted, and you are signed out of the app.</span>
            </li>
            <li>
              <Icon name="calendar" size={20} />
              <span>Your pending and approved event applications are cancelled.</span>
            </li>
            <li>
              <Icon name="bell" size={20} />
              <span>Admins are notified so they can reassign your shifts.</span>
            </li>
          </ul>
        </section>

        {/* Data */}
        <section className="card panel" aria-labelledby="data">
          <h2 id="data">Your personal data</h2>
          <p>Your account holds the following personal data:</p>
          <ul>
            <li>Name, mobile numbers, email, address, district and state</li>
            <li>Profile photo, gender, date of birth and blood group</li>
            <li>Aadhaar number, identity document details and identity document photos</li>
            <li>Your base location (address and coordinates) and your QR code</li>
            <li>Device notification token</li>
            <li>Event applications, attendance, earnings and payment records</li>
          </ul>

          <h3>Data that may be kept</h3>
          <p>
            Some records may need to be kept after deletion for legitimate legal, accounting or regulatory reasons, such
            as attendance and payment records for completed work, and records needed to resolve disputes or prevent
            fraud.
          </p>
          <p>
            <Confirm>
              List exactly which data is permanently erased, which is kept, and for how long. At present the server
              marks the account as deleted but does not erase the profile, identity details or uploaded images. Google
              Play requires that this page accurately describe what is deleted and what is retained.
            </Confirm>
          </p>
        </section>

        {/* Timing */}
        <section className="card panel" aria-labelledby="timing">
          <h2 id="timing">How long it takes</h2>
          <ul className="icon-list">
            <li>
              <Icon name="clock" size={20} />
              <span>
                <strong>In-app deletion</strong> takes effect immediately: your account is deactivated as soon as you
                confirm.
              </span>
            </li>
            <li>
              <Icon name="mail" size={20} />
              <span>
                <strong>Emailed requests</strong> are processed after we verify that you own the account.{' '}
                <Confirm>State the processing time (for example, within 30 days).</Confirm>
              </span>
            </li>
          </ul>
          <p className="muted">
            Questions? <Link to="/contact">Contact us</Link> or read our <Link to="/privacy-policy">Privacy Policy</Link>.
          </p>
        </section>
      </div>
    </>
  );
}
