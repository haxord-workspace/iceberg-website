import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import { site } from '../config/site.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>
            {site.name} is an event staffing and crew management app for Android, developed by {site.developer}.
          </p>
        </div>

        <nav aria-label="Explore" className="footer__col">
          <h2 className="footer__heading">Explore</h2>
          <Link to="/">Home</Link>
          <Link to="/#features">Features</Link>
          <Link to="/#about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        <nav aria-label="Legal" className="footer__col">
          <h2 className="footer__heading">Legal</h2>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
          <Link to="/delete-account">Account Deletion</Link>
        </nav>

        <div className="footer__col">
          <h2 className="footer__heading">Support</h2>
          <a href={`mailto:${site.supportEmail}`} className="footer__contact">
            <Icon name="mail" size={16} /> {site.supportEmail}
          </a>
          <a href={site.supportPhoneHref} className="footer__contact">
            <Icon name="phone" size={16} /> {site.supportPhone}
          </a>
          <span className="footer__contact">
            <Icon name="mapPin" size={16} /> {site.region}
          </span>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {site.developer}. All rights reserved.
        </p>
        <p className="footer__pkg">
          Android package: <code>{site.packageName}</code>
        </p>
      </div>
    </footer>
  );
}
