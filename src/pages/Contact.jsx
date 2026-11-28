import PageHero from '../components/PageHero.jsx';
import Icon from '../components/Icon.jsx';
import ContactForm from '../components/ContactForm.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { site } from '../config/site.js';

export default function Contact() {
  usePageMeta({
    title: 'Contact Us',
    description: `Contact ${site.brand} to book manpower and catering services for your wedding or event.`,
  });

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        icon="mail"
        title="Let’s Plan Your Next Event"
        intro="Tell us about your celebration and our team will get back to you with the right arrangements."
      />

      <div className="container contact">
        <aside className="contact__info" aria-label="Contact details">
          <a className="card contact__card contact__card--link" href={site.supportPhoneHref}>
            <span className="contact__icon">
              <Icon name="phone" size={22} />
            </span>
            <div>
              <h2>Phone Number</h2>
              <p>{site.supportPhone}</p>
            </div>
          </a>
          <a className="card contact__card contact__card--link" href={`mailto:${site.supportEmail}`}>
            <span className="contact__icon">
              <Icon name="mail" size={22} />
            </span>
            <div>
              <h2>Email Address</h2>
              <p>{site.supportEmail}</p>
            </div>
          </a>
          <div className="card contact__card">
            <span className="contact__icon">
              <Icon name="mapPin" size={22} />
            </span>
            <div>
              <h2>Our Location</h2>
              <p>{site.region}</p>
            </div>
          </div>
          <a
            className="btn btn--whatsapp btn--block"
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="chat" size={20} /> Chat on WhatsApp
          </a>
        </aside>

        <section className="card panel" aria-labelledby="contact-form">
          <h2 id="contact-form">Book an Event</h2>
          <ContactForm />
        </section>
      </div>
    </>
  );
}
