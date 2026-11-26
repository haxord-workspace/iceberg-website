import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => setOpen(false), [pathname, hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
  const isHome = pathname === '/' && hash !== '#about';
  const isAbout = pathname === '/' && hash === '#about';

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Logo onClick={close} />

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>

        <nav id="primary-nav" className={`navbar__nav ${open ? 'is-open' : ''}`} aria-label="Primary">
          <Link to="/" className={`navbar__link ${isHome ? 'active' : ''}`} aria-current={isHome ? 'page' : undefined}>
            Home
          </Link>
          <Link to="/#about" className={`navbar__link ${isAbout ? 'active' : ''}`}>
            About
          </Link>
          <NavLink to="/contact" className="navbar__link">
            Contact
          </NavLink>
          <Link to="/delete-account" className="btn btn--primary btn--sm navbar__cta">
            Account help
          </Link>
        </nav>
      </div>
    </header>
  );
}
