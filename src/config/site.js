/**
 * Single source of truth for brand, contact and legal details.
 *
 * Values marked "from app source" were taken from the Servioberg Flutter app
 * (lib/constants/app_branding.dart, android/app/build.gradle). Confirm each one
 * before publishing — changing it here updates every page.
 */
export const site = {
  name: 'Servioberg',
  developer: 'Haxord Technologies',
  // from app source: AppBranding.companyLegalName / companyTagline
  operatorName: 'Iceberg Weddings',
  operatorTagline: 'Manpower & Catering Services',
  tagline: 'Event staffing and crew management',
  packageName: 'com.servioberg.iceberg', // from app source: applicationId
  appVersion: '1.0.0', // from app source: AppBranding.versionLabel

  // from app source: AppBranding.supportEmail / supportPhoneE164 / companyAddress
  supportEmail: 'servioberg@gmail.com',
  supportPhone: '+91 8086019216',
  supportPhoneHref: 'tel:+918086019216',
  region: 'Kerala, India',
  // Used by the WhatsApp buttons (country code + number, digits only).
  // Confirm this number is registered on WhatsApp before publishing.
  whatsapp: '918086019216',

  // Optional full-screen photos for the home hero (they crossfade every 5s),
  // e.g. ['/assets/hero/event-1.jpg', '/assets/hero/event-2.jpg'].
  // Leave empty to use the teal brand backdrop.
  heroImages: [],

  // ---- Business website (Servio Berg) -------------------------------------
  brand: 'Servio Berg',
  brandTagline: 'Staff Outsourcing for Catering',

  // Figures for the stats band. Only add real, verifiable numbers; the band
  // is hidden while this list is empty. e.g. { value: '500+', label: 'Events Managed' }
  stats: [],

  // Real client reviews only (with the client's permission). The section is
  // hidden while this list is empty. e.g. { name: 'Client name', role: 'Bride', text: '…' }
  testimonials: [],

  // Event photos for the gallery, e.g. { src: '/assets/gallery/1.jpg', alt: 'Wedding reception' }.
  // The gallery section is hidden while this list is empty.
  gallery: [],

  legalLastUpdated: 'November 26, 2026',
};

/** Builds a mailto: link with an encoded subject and body. */
export function mailtoLink({ to = site.supportEmail, subject, body }) {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  // URLSearchParams encodes spaces as "+", which mail clients show literally.
  return `mailto:${to}?${params.toString().replace(/\+/g, '%20')}`;
}
