import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Icon from '../components/Icon.jsx';
import MailtoForm from '../components/MailtoForm.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { site } from '../config/site.js';

const buildBody = (d) =>
  [`Name: ${d.name}`, `Reply to: ${d.reply}`, `Topic: ${d.topic}`, '', d.message].join('\n');

export default function Contact() {
  usePageMeta({
    title: 'Contact Us',
    description: `Contact ${site.developer} for support with the ${site.name} app.`,
  });

  return (
    <>
      <PageHero
        eyebrow="Support"
        icon="mail"
        title="Contact us"
        intro={`Questions about ${site.name}, your account or your data? We’re happy to help.`}
      />

      <div className="container contact">
        <aside className="contact__info" aria-label="Contact details">
          <div className="card contact__card">
            <span className="contact__icon">
              <Icon name="building" size={22} />
            </span>
            <div>
              <h2>Company</h2>
              <p>{site.developer}</p>
              <p className="muted">Developer of the {site.name} app</p>
            </div>
          </div>
          <a className="card contact__card contact__card--link" href={`mailto:${site.supportEmail}`}>
            <span className="contact__icon">
              <Icon name="mail" size={22} />
            </span>
            <div>
              <h2>Email</h2>
              <p>{site.supportEmail}</p>
            </div>
          </a>
          <a className="card contact__card contact__card--link" href={site.supportPhoneHref}>
            <span className="contact__icon">
              <Icon name="phone" size={22} />
            </span>
            <div>
              <h2>Phone</h2>
              <p>{site.supportPhone}</p>
            </div>
          </a>
          <div className="card contact__card">
            <span className="contact__icon">
              <Icon name="mapPin" size={22} />
            </span>
            <div>
              <h2>Location</h2>
              <p>{site.region}</p>
            </div>
          </div>
          <Link className="card contact__card contact__card--link" to="/delete-account">
            <span className="contact__icon contact__icon--danger">
              <Icon name="trash" size={22} />
            </span>
            <div>
              <h2>Delete your account</h2>
              <p className="muted">Instructions and deletion requests</p>
            </div>
          </Link>
        </aside>

        <section className="card panel" aria-labelledby="contact-form">
          <h2 id="contact-form">Send us a message</h2>
          <MailtoForm
            idPrefix="contact"
            subject={`${site.name} support enquiry`}
            buildBody={buildBody}
            submitLabel="Prepare email"
          >
            <div className="form__row">
              <label className="field">
                <span>
                  Your name <em aria-hidden="true">*</em>
                </span>
                <input name="name" type="text" autoComplete="name" required maxLength={100} />
              </label>
              <label className="field">
                <span>
                  Email or mobile number <em aria-hidden="true">*</em>
                </span>
                <input name="reply" type="text" autoComplete="email" required maxLength={120} />
              </label>
            </div>
            <label className="field">
              <span>Topic</span>
              <select name="topic" defaultValue="General question">
                <option>General question</option>
                <option>Account or sign-in help</option>
                <option>Privacy or data request</option>
                <option>Report a problem</option>
              </select>
            </label>
            <label className="field">
              <span>
                Message <em aria-hidden="true">*</em>
              </span>
              <textarea name="message" rows={5} required maxLength={2000} />
            </label>
          </MailtoForm>
        </section>
      </div>
    </>
  );
}
