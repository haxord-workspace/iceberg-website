import { Link } from 'react-router-dom';
import { site } from '../config/site.js';

/** Brand mark + wordmark. Swap /assets/logo-mark.png to change the logo. */
export default function Logo({ onClick, light = false }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo--light' : ''}`} onClick={onClick} aria-label={`${site.brand} home`}>
      <img src="/assets/logo-mark.png" alt="" width="44" height="44" className="logo__mark" />
      <span className="logo__text">
        <span className="logo__name">{site.brand}</span>
        <span className="logo__by">{site.brandTagline}</span>
      </span>
    </Link>
  );
}
