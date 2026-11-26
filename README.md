# Servioberg — Official Website

Official website and legal pages for the **Servioberg** Android app (`com.servioberg.iceberg`), developed by **Haxord Technologies**.

Built with React 18, Vite 5 and React Router 6. No UI or icon libraries — icons are inline SVG and all styling is in one CSS file.

| Route | Page |
| --- | --- |
| `/` | Home: hero, features, how it works, about, support |
| `/privacy-policy` | Privacy Policy |
| `/terms-and-conditions` | Terms and Conditions |
| `/delete-account` | Account deletion instructions and request form |
| `/contact` | Contact details and contact form |

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build at http://localhost:4173
```

Requires Node.js 18 or newer.

## Project structure

```
public/assets/        logo, favicon, Open Graph image (optimised from the app's app_icon.png)
src/
  config/site.js      brand, contact details, package name, "last updated" date (edit here)
  components/         Navbar, Footer, Logo, Icon, PageHero, LegalLayout, MailtoForm, Confirm, ScrollManager
  hooks/              usePageMeta (title/description per page), useReveal (scroll animations)
  pages/              Home, PrivacyPolicy, TermsAndConditions, DeleteAccount, Contact, NotFound
  styles/global.css   design tokens (match the app's lib/theme/*.dart) and all styles
vercel.json           SPA rewrite so every route works when opened directly
```

## Design

Colours, radii and shadows mirror the mobile app's theme (`IceBergFrontend/lib/theme/`): teal `#165E6A` brand gradient, warm ivory canvas `#F7F5F2`, Roboto type. Dark mode follows the app's dark surface palette. To restyle, edit the tokens at the top of `src/styles/global.css`.

## Before publishing: items that need confirmation

Content was written from the app and backend source code. Statements that could not be verified are shown on the page with a yellow **“Requires confirmation”** marker. Find them all with:

```bash
grep -rn "<Confirm" src/
```

Resolve each one (edit the text and remove the `<Confirm>` wrapper), then delete the `<DraftNotice />` banner in `PrivacyPolicy.jsx`, `TermsAndConditions.jsx` and `DeleteAccount.jsx`. Main open items:

- Which legal entity is the data controller / contracting party (Haxord Technologies, Iceberg Weddings, or both), with full postal address.
- **Account deletion is currently a soft delete.** `DELETE /api/v1/users/profile` sets `isDeleted` and `deletedAt` but keeps the profile, Aadhaar/ID details and uploaded images (Cloudinary). Google Play requires the deletion page to describe accurately what is deleted and what is kept. Either add permanent erasure to the backend (recommended) or state the retention period.
- Data retention periods, deletion processing time for emailed requests, minimum age, email (SMTP) provider, server/data location, encryption at rest, and whether data is shared outside the organisation.
- Confirm the support email `servioberg@gmail.com` and phone `+91 8086019216` (taken from `lib/constants/app_branding.dart`).

## Forms

There is no backend endpoint for website submissions, so the Contact and Account Deletion forms open the visitor’s email app with a pre-filled message to the support address (`mailto:`). The page never claims a request was submitted — it tells the user to press **Send**, and shows the message so it can be copied if no email app opens.

To submit directly instead, add a public endpoint to the backend (for example `POST /api/v1/account-deletion-requests`), add the website’s domain to the backend’s `CORS_ALLOWED_ORIGINS`, and replace `openMail()` in `src/components/MailtoForm.jsx` with a `fetch` POST that shows success only on a 2xx response. The existing `/api/v1/enquires` endpoint is for event enquiries (it requires an event date and location), so it is not suitable.

## Deploy to Vercel

1. Sign in at <https://vercel.com> with the GitHub account that can access `haxord-workspace/iceberg-website`.
2. **Add New… → Project**, import `haxord-workspace/iceberg-website`.
3. Vercel detects Vite automatically. Confirm: Build command `npm run build`, Output directory `dist`, Install command `npm install`.
4. Click **Deploy**. Vercel gives you a URL like `https://<project-name>.vercel.app`.
5. Optional: **Settings → Domains** to add a custom domain and follow the DNS instructions.
6. Open these URLs directly in a new tab to confirm they load (the `vercel.json` rewrite handles this):
   - `https://<your-domain>/privacy-policy`
   - `https://<your-domain>/terms-and-conditions`
   - `https://<your-domain>/delete-account`

Use the privacy policy and delete-account URLs in Google Play Console (**App content → Privacy policy** and **Data safety → Data deletion**).

---

© Haxord Technologies. All rights reserved.
