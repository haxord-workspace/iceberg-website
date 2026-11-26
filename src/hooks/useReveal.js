import { useEffect } from 'react';

/**
 * Adds `is-visible` to every `.reveal` element once it enters the viewport.
 * Content is visible by default; the fade only applies once JS marks <html>.
 * A scroll-position check backs up the IntersectionObserver so content can
 * never stay hidden (an element counts as seen once its top passes the
 * bottom of the viewport, including when the user jumps past it).
 */
export default function useReveal(dep) {
  useEffect(() => {
    const pending = new Set(document.querySelectorAll('.reveal:not(.is-visible)'));
    const show = (el) => {
      el.classList.add('is-visible');
      pending.delete(el);
    };

    if (!('IntersectionObserver' in window)) {
      pending.forEach(show);
      return undefined;
    }
    document.documentElement.classList.add('js-reveal');

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (show(e.target), io.unobserve(e.target))),
      { threshold: 0, rootMargin: '0px 0px -6% 0px' },
    );
    pending.forEach((el) => io.observe(el));

    let frame = 0;
    const check = () => {
      frame = 0;
      const limit = window.innerHeight;
      pending.forEach((el) => {
        if (el.getBoundingClientRect().top < limit) {
          show(el);
          io.unobserve(el);
        }
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    check();

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [dep]);
}
