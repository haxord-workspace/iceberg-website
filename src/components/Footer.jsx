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
            Crafting extraordinary events and unforgettable memories with professional manpower and premium catering
            services.
          </p>
          <div className="footer__social">
            <a href={`mailto:${site.supportEmail}`} aria-label="Email us">
              <Icon name="mail" size={18} />
            </a>
            <a href={site.supportPhoneHref} aria-label="Call us">
              <Icon name="phone" size={18} />
            </a>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
              <Icon name="chat" size={18} />
            </a>
          </div>
        </div>

        <nav aria-label="Quick links" className="footer__col">
          <h2 className="footer__heading">Quick Links</h2>
          <Link to="/#about">About Us</Link>
          <Link to="/#services">Services</Link>
          <Link to="/#why-us">Why Choose Us</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        <nav aria-label="Legal" className="footer__col">
          <h2 className="footer__heading">Legal</h2>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
          <Link to="/delete-account">Account Deletion</Link>
        </nav>

        <div className="footer__col">
          <h2 className="footer__heading">Get in Touch</h2>
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
          © {year} {site.brand}. All rights reserved.
        </p>
        <p>{site.brandTagline}</p>
      </div>
    </footer>
  );
}
