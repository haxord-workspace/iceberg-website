import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

export default function NotFound() {
  usePageMeta({ title: 'Page not found', description: 'The page you are looking for does not exist.' });

  return (
    <>
      <PageHero eyebrow="Error 404" title="Page not found" intro="The page you’re looking for doesn’t exist or has moved." />
      <section className="section">
        <div className="container notfound">
          <Link to="/" className="btn btn--primary btn--lg">
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
