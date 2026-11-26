import Icon from './Icon.jsx';

export default function PageHero({ eyebrow, title, intro, icon, meta }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        {icon && (
          <span className="page-hero__icon">
            <Icon name={icon} size={28} />
          </span>
        )}
        {eyebrow && <p className="eyebrow eyebrow--light">{eyebrow}</p>}
        <h1>{title}</h1>
        {intro && <p className="page-hero__intro">{intro}</p>}
        {meta && <p className="page-hero__meta">{meta}</p>}
      </div>
    </section>
  );
}
