import PageHero from './PageHero.jsx';
import { site } from '../config/site.js';

/**
 * Shared layout for legal documents: hero, sticky table of contents and
 * numbered sections. `sections` is [{ id, title, body }].
 */
export default function LegalLayout({ title, intro, icon, sections, notice }) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        intro={intro}
        icon={icon}
        meta={`Last updated: ${site.legalLastUpdated} · Applies to the ${site.name} Android app (${site.packageName})`}
      />

      <div className="container legal">
        <aside className="legal__toc" aria-label="On this page">
          <p className="legal__toc-title">On this page</p>
          <ol>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ol>
        </aside>

        <article className="legal__body">
          {notice}
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="legal__section">
              <h2>
                <span className="legal__num">{String(i + 1).padStart(2, '0')}</span>
                {s.title}
              </h2>
              {s.body}
            </section>
          ))}
        </article>
      </div>
    </>
  );
}
