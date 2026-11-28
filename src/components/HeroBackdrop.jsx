import { useEffect, useState } from 'react';
import { site } from '../config/site.js';

/**
 * Full-bleed background for the home hero. With photos in site.heroImages it
 * crossfades between them under a teal overlay; otherwise it draws the brand
 * backdrop (gradient, glows and the floral logo as a watermark).
 */
export default function HeroBackdrop() {
  const images = site.heroImages || [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="hero__bg" aria-hidden="true">
      {images.length > 0 ? (
        images.map((src, i) => (
          <img key={src} src={src} alt="" className={`hero__photo ${i === index ? 'is-active' : ''}`} />
        ))
      ) : (
        <>
          <span className="hero__glow hero__glow--a" />
          <span className="hero__glow hero__glow--b" />
          <img src="/assets/logo-mark.png" alt="" className="hero__mark" width="512" height="512" />
          <span className="hero__ring hero__ring--a" />
          <span className="hero__ring hero__ring--b" />
        </>
      )}
      <span className={`hero__overlay ${images.length ? 'hero__overlay--photo' : ''}`} />
    </div>
  );
}
