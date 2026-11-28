import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';

const links = [
  { to: '/#about', label: 'About Us' },
  { to: '/#services', label: 'Services' },
  { to: '/#why-us', label: 'Why Us' },
  { to: '/contact', label: 'Contact' },
];

/**
 * Fixed header. Transparent over each page's dark hero, then frosted glass
 * once the page scrolls (or while the mobile menu is open).
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => setOpen(false), [pathname, hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);
  const solid = scrolled || open;
  const current = (to) => (to.startsWith('/#') ? pathname === '/' && hash === to.slice(1) : pathname === to);

  return (
    <header className={`navbar ${solid ? 'navbar--solid' : ''}`}>
      <div className="container navbar__inner">
        <Logo onClick={close} light={!solid} />

        <nav className="navbar__nav" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`navbar__link ${current(l.to) ? 'active' : ''}`}
              aria-current={current(l.to) ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link to="/#contact" className="btn btn--primary btn--sm navbar__cta">
          Book an Event
        </Link>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={26} />
        </button>
      </div>

      <nav id="mobile-nav" className={`mobile-nav ${open ? 'is-open' : ''}`} aria-label="Mobile" hidden={!open}>
        <div className="container mobile-nav__inner">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="mobile-nav__link" onClick={close}>
              {l.label}
              <Icon name="chevronRight" size={18} />
            </Link>
          ))}
          <Link to="/#contact" className="btn btn--primary btn--block" onClick={close}>
            Book an Event
          </Link>
        </div>
      </nav>
    </header>
  );
}
