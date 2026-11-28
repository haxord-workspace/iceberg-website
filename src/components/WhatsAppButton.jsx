import Icon from './Icon.jsx';
import { site } from '../config/site.js';

/** Floating "chat on WhatsApp" button, bottom-right on every page. */
export default function WhatsAppButton() {
  if (!site.whatsapp) return null;
  return (
    <a
      className="wa-fab"
      href={`https://wa.me/${site.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <Icon name="chat" size={28} />
    </a>
  );
}
