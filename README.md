# A World Within — Ketamine-Assisted Psychotherapy

Marketing website for **A World Within LLC** (tagline: *ExtraOrdinary Care*), the
KAP practice of Becky. Warm, nature-based, deep visual direction. Built to build
trust and generate consultation requests.

## Stack

- **Next.js 16** (App Router) exported as a fully static site (`output: 'export'`)
- **Tailwind CSS v4** — design tokens in `src/app/globals.css`
- **Netlify** hosting + **Netlify Forms** for the consultation request (no backend, no PHI collected)
- Self-hosted Google fonts via `next/font`: Fraunces (serif) + Inter (sans)

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
npm run lint
```

## Deploy (Netlify)

Config lives in `netlify.toml` (build `npm run build`, publish `out/`).
Connect the repo in Netlify and it builds automatically.

- **Forms:** the `consultation` form is detected via the static form in
  `public/__forms.html`. Set up an email notification in
  Netlify → Forms → Notifications so submissions reach Becky.
- **Analytics (optional):** set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` in Netlify env
  vars to enable cookieless Plausible analytics (`src/components/Analytics.tsx`).

## Editing client info — one file

**All practice details live in [`src/lib/site.ts`](src/lib/site.ts)** — name, contact,
address, hours, credentials, service area, social links, booking URL, and SEO
description. Edit that one file and the whole site (header, footer, contact page,
SEO, structured data) updates automatically. Fields marked `«TODO»` still need
real values before launch.

## Design options page

`/(style)` → **`/style/`** is a private (noindex) page showing 3 font pairings
and 3 color palettes to share with the client for a decision. Send them the
deployed `…/style/` URL; they reply with a font (A/B/C) + color (1/2/3) choice.

## Structure

```
src/
  app/                 one folder per route (home, about, kap, …, legal, style)
  components/          SiteHeader, SiteFooter, Reveal, ui.tsx, CrisisResources…
  lib/site.ts          ← CLIENT INFO: name, contact, address, hours, credentials…
  lib/conditions.ts    conditions + evidence-strength data
```

Page copy is adapted from the client source docs (`CIFI_*.docx`, kept in repo root).

## ⚠️ Before launch — outstanding items

Search the codebase for `TODO(becky)` to find every placeholder. Key ones:

- **Contact details** — real email, phone, response time, service area /
  telehealth states (`src/lib/site.ts`).
- **Brand** — final logo/wordmark assets for "A World Within" + "ExtraOrdinary Care".
- **Credentials** — license type, number, state(s), certifications
  (`src/app/about/page.tsx`).
- **Photography** — professional portrait + licensed nature imagery (currently
  gradient placeholders).
- **Legal review** — the Disclaimer, Privacy, Terms, and Informed Consent pages
  are drafts and **must be reviewed by Becky's attorney / malpractice carrier**
  before going live. Add the finalized signed-consent PDF.
- **Domain** — update `site.url` in `src/lib/site.ts` and re-check
  sitemap/robots/structured data.

## Safety notes baked in

- 988 crisis line is present sitewide (footer) and prominent on Contact /
  Getting Started — the site never dead-ends someone in crisis.
- The contact form deliberately collects **no health information** to stay out
  of HIPAA scope. Real intake should happen through Becky's HIPAA-compliant tool.
- Evidence strength for each condition is shown honestly.
- Motion respects `prefers-reduced-motion`; content stays visible without JS.
