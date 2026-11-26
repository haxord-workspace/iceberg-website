import { Link } from 'react-router-dom';
import { site } from '../config/site.js';

/** Brand mark + wordmark. Swap /assets/logo-256.webp to change the logo. */
export default function Logo({ onClick, light = false }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo--light' : ''}`} onClick={onClick} aria-label={`${site.name} home`}>
      <img src="/assets/logo-256.webp" alt="" width="40" height="40" className="logo__mark" />
      <span className="logo__text">
        <span className="logo__name">{site.name}</span>
        <span className="logo__by">by {site.developer}</span>
      </span>
    </Link>
  );
}
