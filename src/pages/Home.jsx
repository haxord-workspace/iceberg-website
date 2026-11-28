import Icon from '../components/Icon.jsx';
import HeroBackdrop from '../components/HeroBackdrop.jsx';
import ContactForm from '../components/ContactForm.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import useReveal from '../hooks/useReveal.js';
import { site } from '../config/site.js';

const services = [
  { icon: 'heart', title: 'Wedding Catering', text: 'Complete catering and service for your wedding day, from welcome drinks to the final course.' },
  { icon: 'users', title: 'Event Manpower', text: 'Trained, well-groomed service staff, supervisors and helpers for events of every size.' },
  { icon: 'briefcase', title: 'Corporate Events', text: 'Professional setups and service for conferences, meetings, galas and office celebrations.' },
  { icon: 'sparkles', title: 'Engagement Ceremonies', text: 'Graceful, well-organised arrangements for your intimate and special moments.' },
  { icon: 'cake', title: 'Birthday Celebrations', text: 'Themed parties and elegant service for family functions and celebrations of all ages.' },
  { icon: 'utensils', title: 'Buffet & Counter Service', text: 'Neatly managed buffet lines, food counters and table service your guests will remember.' },
];

const reasons = [
  { title: 'Professional Service', text: 'Uncompromising quality in every detail.' },
  { title: 'Trained Team', text: 'Staff who know how to serve with care and courtesy.' },
  { title: 'Customised Packages', text: 'Solutions tailored to your event and budget.' },
  { title: 'On-Time Execution', text: 'Punctual teams for a stress-free celebration.' },
  { title: 'Affordable Quality', text: 'Premium service without the excessive price tag.' },
  { title: 'Complete Support', text: 'From planning to the final clean-up, we are there.' },
];

export default function Home() {
  usePageMeta({
    title: '',
    description: `${site.brand} provides professional manpower and catering services for weddings, corporate events and celebrations across Kerala.`,
  });
  useReveal();

  return (
    <>
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <HeroBackdrop />
        <div className="container hero__content">
          <p className="hero__eyebrow">
            <Icon name="sparkles" size={16} /> {site.brandTagline}
          </p>
          <h1 id="hero-title">
            Creating <em>Unforgettable</em> Events
          </h1>
          <p className="hero__lead">
            Professional event staff, premium catering and seamless service, tailored for your weddings and special
            celebrations.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--light btn--lg">
              Book an Event <Icon name="arrowRight" size={18} />
            </a>
            <a href="#services" className="btn btn--ghost-light btn--lg">
              Our Services
            </a>
          </div>
        </div>
        <a href="#about" className="hero__scroll" aria-label="Scroll to About">
          <Icon name="arrowDown" size={20} />
        </a>
      </section>

      {/* About */}
      <section id="about" className="section section--white" aria-labelledby="about-title">
        <div className="container container--wide split split--about">
          <div className="split__media reveal">
            <div className="emblem">
              <img src="/assets/logo-full.png" alt={`${site.brand} – ${site.brandTagline}`} width="1000" height="609" loading="lazy" />
            </div>
            <div className="badge-card">
              <Icon name="award" size={30} />
              <span>
                Weddings &amp; Events
                <br />
                across {site.region.split(',')[0]}
              </span>
            </div>
          </div>

          <div className="split__copy reveal">
            <p className="eyebrow">About Us</p>
            <h2 id="about-title" className="display">
              Serving Your Perfect Moments With Grace
            </h2>
            <p className="lead">
              At {site.brand}, we believe every celebration deserves flawless service. Our team of trained service
              staff and catering professionals is dedicated to turning ordinary gatherings into memorable experiences.
            </p>
            <p className="lead">
              From intimate family functions to grand wedding receptions, our attention to detail, well-groomed staff
              and personal approach make sure every guest is looked after, from the first welcome to the final course.
            </p>
            <ul className="dot-list">
              <li>Trained &amp; Well-Groomed Service Staff</li>
              <li>Dedicated Event Supervisors</li>
              <li>Customised Catering Arrangements</li>
            </ul>
            <a href="#services" className="btn btn--outline-brand">
              Discover Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section section--tint" aria-labelledby="services-title">
        <div className="container container--wide">
          <header className="section__head section__head--wide reveal">
            <p className="eyebrow">Our Services</p>
            <h2 id="services-title" className="display">
              Everything You Need for a Perfect Event
            </h2>
            <p>A complete range of manpower and catering services to bring your celebration to life.</p>
          </header>
        </div>

        <div className="marquee reveal">
          <div className="marquee__track">
            {[...services, ...services].map((f, i) => {
              const clone = i >= services.length;
              return (
                <article className={`service ${clone ? 'is-clone' : ''}`} key={i} aria-hidden={clone || undefined}>
                  <span className="service__icon">
                    <Icon name={f.icon} size={28} />
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose us (dark band) */}
      <section id="why-us" className="section section--dark" aria-labelledby="why-title">
        <div className="container split">
          <div className="split__copy reveal">
            <p className="eyebrow eyebrow--light">Why Choose Us</p>
            <h2 id="why-title" className="display">
              Elevating Every Event Beyond Expectations
            </h2>
            <p className="lead lead--light">
              We don’t just provide staff and food; we deliver an experience. Our commitment to excellence and our
              passion for hospitality make us a trusted choice for weddings and events.
            </p>
            <div className="ticks">
              {reasons.map((p) => (
                <div className="tick" key={p.title}>
                  <Icon name="check" size={20} />
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tiles reveal" aria-hidden="true">
            <div className="tiles__col">
              <div className="tile">
                <Icon name="heart" size={26} />
                <strong>Welcome &amp; Hosting</strong>
                <span>Warm, courteous guest care</span>
              </div>
              <div className="tile">
                <Icon name="utensils" size={26} />
                <strong>Buffet Service</strong>
                <span>Neat, well-managed counters</span>
              </div>
            </div>
            <div className="tiles__col tiles__col--offset">
              <div className="tile tile--accent">
                <Icon name="users" size={26} />
                <strong>Table Service</strong>
                <span>Trained, uniformed staff</span>
              </div>
              <div className="tile">
                <Icon name="clipboard" size={26} />
                <strong>Event Supervision</strong>
                <span>Every detail on schedule</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery (shown once photos are added in site.js) */}
      {site.gallery.length > 0 && (
        <section id="gallery" className="section section--white" aria-labelledby="gallery-title">
          <div className="container">
            <header className="section__head reveal">
              <p className="eyebrow">Event Gallery</p>
              <h2 id="gallery-title" className="display">
                A Glimpse Into Our Events
              </h2>
            </header>
            <div className="gallery">
              {site.gallery.map((g, i) => (
                <figure className="gallery__item reveal" key={g.src} style={{ '--delay': `${i * 70}ms` }}>
                  <img src={g.src} alt={g.alt} loading="lazy" />
                  <figcaption>{g.alt}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials (shown once real reviews are added in site.js) */}
      {site.testimonials.length > 0 && (
        <section className="section section--cream" aria-labelledby="reviews-title">
          <div className="container">
            <header className="section__head reveal">
              <p className="eyebrow">Testimonials</p>
              <h2 id="reviews-title" className="display">
                What Our Clients Say
              </h2>
            </header>
            <div className="reviews">
              {site.testimonials.map((t) => (
                <figure className="review reveal" key={t.name}>
                  <div className="review__stars" aria-label="5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Icon name="star" size={18} key={s} />
                    ))}
                  </div>
                  <blockquote>“{t.text}”</blockquote>
                  <figcaption>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats band (shown once real figures are added in site.js) */}
      {site.stats.length > 0 && (
        <section className="stats" aria-label={`${site.brand} in numbers`}>
          <div className="container stats__grid">
            {site.stats.map((s, i) => (
              <div className="stat reveal" key={s.label} style={{ '--delay': `${i * 90}ms` }}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact */}
      <section id="contact" className="section section--white" aria-labelledby="contact-title">
        <div className="container">
          <header className="section__head reveal">
            <p className="eyebrow">Contact Us</p>
            <h2 id="contact-title" className="display">
              Let’s Plan Your Next Event
            </h2>
          </header>

          <div className="contact-block">
            <div className="contact-block__info reveal">
              <div className="info-item">
                <span className="info-item__icon">
                  <Icon name="mapPin" size={22} />
                </span>
                <span>
                  <strong>Our Location</strong>
                  {site.region}
                </span>
              </div>
              <a className="info-item" href={site.supportPhoneHref}>
                <span className="info-item__icon">
                  <Icon name="phone" size={22} />
                </span>
                <span>
                  <strong>Phone Number</strong>
                  {site.supportPhone}
                </span>
              </a>
              <a className="info-item" href={`mailto:${site.supportEmail}`}>
                <span className="info-item__icon">
                  <Icon name="mail" size={22} />
                </span>
                <span>
                  <strong>Email Address</strong>
                  {site.supportEmail}
                </span>
              </a>
              <a
                className="btn btn--whatsapp btn--block"
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="chat" size={20} /> Chat on WhatsApp
              </a>
            </div>

            <div className="form-card reveal">
              <h3>Book an Event</h3>
              <ContactForm idPrefix="home-contact" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
