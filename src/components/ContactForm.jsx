import MailtoForm from './MailtoForm.jsx';
import { site } from '../config/site.js';

const buildBody = (d) =>
  [
    `Name: ${d.name}`,
    `Phone: ${d.phone}`,
    `Event type: ${d.type}`,
    `Event date: ${d.date || '(not decided)'}`,
    `Location: ${d.location || '(not provided)'}`,
    `Guests (approx.): ${d.guests || '(not provided)'}`,
    '',
    d.message,
  ].join('\n');

/** Event booking enquiry form, used on the home page and the Contact page. */
export default function ContactForm({ idPrefix = 'contact' }) {
  return (
    <MailtoForm
      idPrefix={idPrefix}
      subject={`Event enquiry for ${site.brand}`}
      buildBody={buildBody}
      submitLabel="Send Enquiry"
    >
      <div className="form__row">
        <label className="field">
          <span>
            Your Name <em aria-hidden="true">*</em>
          </span>
          <input name="name" type="text" autoComplete="name" placeholder="Full name" required maxLength={100} />
        </label>
        <label className="field">
          <span>
            Phone Number <em aria-hidden="true">*</em>
          </span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" required maxLength={20} />
        </label>
      </div>
      <div className="form__row">
        <label className="field">
          <span>Event Type</span>
          <select name="type" defaultValue="Wedding">
            <option>Wedding</option>
            <option>Engagement</option>
            <option>Corporate Event</option>
            <option>Birthday / Private Party</option>
            <option>Other</option>
          </select>
        </label>
        <label className="field">
          <span>Event Date</span>
          <input name="date" type="date" />
        </label>
      </div>
      <div className="form__row">
        <label className="field">
          <span>Location</span>
          <input name="location" type="text" placeholder="City or venue" maxLength={120} />
        </label>
        <label className="field">
          <span>Guests (approx.)</span>
          <input name="guests" type="number" min="1" placeholder="e.g. 300" />
        </label>
      </div>
      <label className="field">
        <span>
          Message <em aria-hidden="true">*</em>
        </span>
        <textarea name="message" rows={4} placeholder="Tell us about your event…" required maxLength={2000} />
      </label>
    </MailtoForm>
  );
}
