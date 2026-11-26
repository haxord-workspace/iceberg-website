import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import useReveal from '../hooks/useReveal.js';
import { site } from '../config/site.js';

// Every feature below maps to a screen or service in the Servioberg app source.
const staffFeatures = [
  {
    icon: 'userCheck',
    title: 'Registration & verification',
    text: 'Staff create a profile with a photo and an identity document. New accounts are reviewed and approved by an admin before work begins.',
  },
  {
    icon: 'qr',
    title: 'Digital QR pass',
    text: 'Each approved staff member gets a personal QR code that identifies them at events.',
  },
  {
    icon: 'calendar',
    title: 'Events & shifts',
    text: 'Browse available events, apply for work, and keep track of upcoming and completed shifts.',
  },
  {
    icon: 'mapPin',
    title: 'Venue check-in & check-out',
    text: 'Attendance is recorded at the venue using QR scanning, with location checked at check-in and check-out.',
  },
  {
    icon: 'wallet',
    title: 'Earnings & payments',
    text: 'See event pay, allowances, incentives, deductions and payment history in one place.',
  },
  {
    icon: 'bell',
    title: 'Notifications & gig alerts',
    text: 'Get notified about new events, application updates and account status changes.',
  },
];

const adminFeatures = [
  { icon: 'briefcase', title: 'Event management', text: 'Create events, set venues on a map, and manage counters and staffing for each event.' },
  { icon: 'users', title: 'Staff & roles', text: 'Review applications, approve staff, manage roles and salaries, and view work history.' },
  { icon: 'store', title: 'Vendors & quotations', text: 'Maintain vendors and prepare quotations, with PDF estimates and invoices.' },
  { icon: 'clipboard', title: 'Attendance & finance', text: 'Scan staff in at events, track cancellations, and record payments and advances.' },
];

const steps = [
  { title: 'Register', text: 'Create your staff profile in the app.' },
  { title: 'Get approved', text: 'An admin reviews and verifies your details.' },
  { title: 'Apply for events', text: 'Pick the events and shifts you want to work.' },
  { title: 'Check in & get paid', text: 'Check in at the venue and track your earnings.' },
];

export default function Home() {
  usePageMeta({
    title: '',
    description:
      'Servioberg is an Android app for event staffing and crew management: staff registration, QR passes, event shifts, venue check-in and earnings. Developed by Haxord Technologies.',
  });
  useReveal();

  return (
    <>
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__glow" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light">Android app · by {site.developer}</p>
            <h1 id="hero-title">
              Event staffing and crew management, <span className="hero__accent">in one app.</span>
            </h1>
            <p className="hero__lead">
              {site.name} connects event staff and admins: register and get verified, apply for shifts, check in at the
              venue, and track every payment, all from your Android phone.
            </p>
            <div className="hero__actions">
              <a href="#features" className="btn btn--light">
                Explore features <Icon name="arrowRight" size={18} />
              </a>
              <Link to="/contact" className="btn btn--ghost-light">
                Contact support
              </Link>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="pass">
              <div className="pass__top">
                <img src="/assets/logo-256.webp" alt="" width="44" height="44" />
                <div>
                  <p className="pass__brand">{site.name}</p>
                  <p className="pass__sub">Staff pass</p>
                </div>
                <span className="pass__chip">Approved</span>
              </div>
              <div className="pass__qr">
                <Icon name="qr" size={96} />
              </div>
              <div className="pass__rows">
                <div>
                  <span>Next shift</span>
                  <strong>Check-in at venue</strong>
                </div>
                <div>
                  <span>Status</span>
                  <strong>Ready</strong>
                </div>
              </div>
            </div>
            <div className="float-card float-card--a">
              <Icon name="mapPin" size={18} /> Checked in at venue
            </div>
            <div className="float-card float-card--b">
              <Icon name="wallet" size={18} /> Earnings updated
            </div>
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="strip" aria-label="Highlights">
        <div className="container">
          <div className="strip__grid">
          <div className="strip__item">
            <Icon name="smartphone" size={22} />
            <span>Built for Android</span>
          </div>
          <div className="strip__item">
            <Icon name="users" size={22} />
            <span>Staff &amp; admin roles</span>
          </div>
          <div className="strip__item">
            <Icon name="qr" size={22} />
            <span>QR-based attendance</span>
          </div>
          <div className="strip__item">
            <Icon name="lock" size={22} />
            <span>Admin-verified accounts</span>
          </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section" aria-labelledby="features-title">
        <div className="container">
          <header className="section__head reveal">
            <p className="eyebrow">Features</p>
            <h2 id="features-title">Everything event staff need on shift day</h2>
            <p>From first registration to final payment, the full staff journey happens in the app.</p>
          </header>

          <div className="grid grid--3">
            {staffFeatures.map((f, i) => (
              <article className="card feature reveal" key={f.title} style={{ '--delay': `${i * 60}ms` }}>
                <span className="feature__icon">
                  <Icon name={f.icon} size={24} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>

          <div className="admin-block reveal">
            <div className="admin-block__intro">
              <p className="eyebrow eyebrow--light">For admins</p>
              <h3>Run every event from one dashboard</h3>
              <p>Admin accounts get tools to plan events, manage the crew and keep finances in order.</p>
            </div>
            <div className="admin-block__grid">
              {adminFeatures.map((f) => (
                <div className="admin-item" key={f.title}>
                  <Icon name={f.icon} size={22} />
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section section--tint" aria-labelledby="steps-title">
        <div className="container">
          <header className="section__head reveal">
            <p className="eyebrow">How it works</p>
            <h2 id="steps-title">From sign-up to payday in four steps</h2>
          </header>
          <ol className="steps">
            {steps.map((s, i) => (
              <li className="step reveal" key={s.title} style={{ '--delay': `${i * 80}ms` }}>
                <span className="step__num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section" aria-labelledby="about-title">
        <div className="container about">
          <div className="about__media reveal">
            <img src="/assets/logo-512.webp" alt={`${site.name} logo`} width="320" height="320" loading="lazy" />
          </div>
          <div className="about__copy reveal">
            <p className="eyebrow">About {site.name}</p>
            <h2 id="about-title">Built for the people who make events happen</h2>
            <p>
              {site.name} is an Android application for event staffing and crew management. It is used by{' '}
              {site.operatorName} ({site.operatorTagline}) to organise the staff who serve at weddings and other events.
            </p>
            <p>
              The app is designed and developed by <strong>{site.developer}</strong>. Staff use it to find work and
              record attendance; admins use it to plan events, manage the crew, and keep payments accurate and
              transparent.
            </p>
            <ul className="checklist">
              <li>
                <Icon name="check" size={20} /> Every staff account is reviewed by an admin
              </li>
              <li>
                <Icon name="check" size={20} /> Attendance is confirmed at the venue
              </li>
              <li>
                <Icon name="check" size={20} /> Earnings and payment history stay visible to staff
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact / support */}
      <section className="section section--tint" aria-labelledby="support-title">
        <div className="container">
          <div className="cta reveal">
            <div className="cta__copy">
              <h2 id="support-title">Need help with {site.name}?</h2>
              <p>Questions about your account, the app or your data? Our support team is here to help.</p>
            </div>
            <div className="cta__cards">
              <a className="cta__card" href={`mailto:${site.supportEmail}`}>
                <Icon name="mail" size={22} />
                <span>
                  <small>Email</small>
                  {site.supportEmail}
                </span>
              </a>
              <a className="cta__card" href={site.supportPhoneHref}>
                <Icon name="phone" size={22} />
                <span>
                  <small>Phone</small>
                  {site.supportPhone}
                </span>
              </a>
              <Link className="cta__card" to="/delete-account">
                <Icon name="trash" size={22} />
                <span>
                  <small>Account</small>
                  Request account deletion
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
