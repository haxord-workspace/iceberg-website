import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta.js';

export default function NotFound() {
  usePageMeta({ title: 'Page not found', description: 'The page you are looking for does not exist.' });

  return (
    <section className="section">
      <div className="container notfound">
        <p className="notfound__code">404</p>
        <h1>Page not found</h1>
        <p>The page you’re looking for doesn’t exist or has moved.</p>
        <Link to="/" className="btn btn--primary">
          Back to home
        </Link>
      </div>
    </section>
  );
}
