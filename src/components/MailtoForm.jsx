import { useState } from 'react';
import Icon from './Icon.jsx';
import { mailtoLink, site } from '../config/site.js';

/**
 * Form that hands the message to the user's email app via mailto:.
 * There is no backend endpoint, so nothing is "submitted" by this page: we
 * never show a success message, only instructions to press Send.
 *
 * To make it submit directly, replace openMail() with a POST to a backend
 * endpoint and show success only on a 2xx response.
 */
export default function MailtoForm({ subject, buildBody, submitLabel, children, idPrefix }) {
  const [prepared, setPrepared] = useState('');
  const [copied, setCopied] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    const body = buildBody(data);
    setPrepared(body);
    setCopied(false);
    window.location.href = mailtoLink({ subject, body });
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(`To: ${site.supportEmail}\nSubject: ${subject}\n\n${prepared}`);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate aria-describedby={`${idPrefix}-how`}>
      {children}

      <button type="submit" className="btn btn--primary btn--block">
        <Icon name="send" size={18} /> {submitLabel}
      </button>

      <p id={`${idPrefix}-how`} className="form__hint">
        This opens your email app with the details filled in, addressed to{' '}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. Your request is sent only when you press{' '}
        <strong>Send</strong> in your email app.
      </p>

      {prepared && (
        <div className="notice notice--info" role="status" aria-live="polite">
          <Icon name="info" size={20} />
          <div>
            <p>
              <strong>Your email app should now be open.</strong> Review the message and press Send to submit it. It has
              not been sent yet.
            </p>
            <p>
              If no email app opened, copy the message below and email it to{' '}
              <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
            </p>
            <pre className="prepared">{prepared}</pre>
            <button type="button" className="btn btn--outline btn--sm" onClick={copy}>
              {copied ? 'Copied' : 'Copy message'}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
