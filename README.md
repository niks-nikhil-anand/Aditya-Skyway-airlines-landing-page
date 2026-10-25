# Aditya Skyway

A responsive private aviation landing page built with Next.js 16, React 19 and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js. Validation commands:

```bash
npm run lint
npm run build
```

## Sections and interactions

- Brand header and mobile navigation
- Aircraft photography hero
- One-way / return journey planner
- Services and brand benefits
- Keyboard-accessible aircraft category tabs
- Three-step charter guide
- Travel reassurance and expandable FAQs
- Two-step quote form with review, prefilled WhatsApp request and downloadable itinerary
- Responsive footer and floating WhatsApp enquiry button

The quick planner transfers its details to the full form. Aircraft enquiry links preselect the aircraft preference. The form validates dates, distinct cities and passenger count. Personal details stay in browser memory until the visitor chooses to open WhatsApp with a prefilled quote request or download an itinerary. Opening WhatsApp does not automatically send the message. No requests are stored on this website’s server.

## Before launch

Confirm the service offerings and operating model. Supply approved aircraft details and privacy and booking terms. WhatsApp enquiries use +91 73097 44185; the floating chat button and quote review both link to this number. Itinerary downloads are drafts, not confirmed bookings. No invented testimonials, certifications, fleet counts or prices are included.

## Assets

The navbar logo is the user-supplied `public/Glossy Aviation Sunburst Emblem.png`. Matching PNG and multi-size ICO favicons are generated in `app/icon.png` and `app/favicon.ico`. Aircraft photos are illustrative, locally stored Unsplash images, not a representation of owned aircraft:

- https://images.unsplash.com/photo-1540962351504-03099e0a754b
- https://images.unsplash.com/photo-1474302770737-173ee21bab63
- https://unsplash.com/photos/white-helicopter-VgMJSkR22H8 (Alessio Soggetti)

## Responsive layout

- Below 375px: single-column journey fields, stacked hero actions, compact header.
- 375–767px: phone layout, stacked content, two-column fields where space permits, floating WhatsApp enquiry button.
- 768–1023px: tablet layout with two service columns, a full-width third service, and a stacked enquiry section.
- 1024–1599px: desktop grids and side-by-side content. Navigation switches to the menu at 1100px and below.
- 1600px and above: larger typography and a centred content area capped at 1440px.

CSS range queries cover fractional viewport widths without gaps. Form controls use 16px text and at least 44px touch targets. The floating WhatsApp button respects device safe areas and hides while form fields are focused.

## Typography

Fonts are self-hosted through `next/font`: Manrope for headings, Inter for body copy and controls, and Cormorant Garamond 500 Italic for the two gold heading highlights. Shared CSS variables are `--font-heading`, `--font-body`, and `--font-accent`. Form inputs retain 16px text; body copy uses 16–17px with comfortable line spacing.
