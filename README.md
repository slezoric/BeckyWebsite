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

## Content editing (Decap CMS)

**Becky edits the site herself at `/admin`** — no code, no developer needed.
See [EDITING-GUIDE.md](EDITING-GUIDE.md) for the guide written for her.

All wording lives in `src/content/*.json`; pages just read from it. Editing the
JSON directly and editing via `/admin` are the same thing.

| File | What it holds |
| --- | --- |
| `site.json` | Name, contact, hours, credentials, address, social, SEO |
| `navigation.json` | Menu labels, header button, footer blurb, crisis note |
| `home.json` … `contact.json` | One file per page |
| `legal.json` | Consent, disclaimer, privacy, terms |

**How it works:** she saves → Decap commits to `main` → Netlify rebuilds →
live in ~1–2 min. `publish_mode: editorial_workflow` means saves become
**drafts with their own deploy-preview link**, so nothing reaches the live site
until she clicks Publish.

**One-time setup (already done):** a GitHub OAuth app registered with callback
`https://api.netlify.com/auth/done`, installed under Netlify → Site settings →
Access control → OAuth. Becky needs collaborator access on the repo.

Adding a new editable field: add it to the JSON, read it in the page, then
describe it in `public/admin/config.yml` so it appears in her editor.

## Design options page

`/(style)` → **`/style/`** is a private (noindex) page showing 3 font pairings
and 3 color palettes to share with the client for a decision. Send them the
deployed `…/style/` URL; they reply with a font (A/B/C) + color (1/2/3) choice.

## Structure

```
src/
  content/             ← ALL EDITABLE COPY (what /admin writes to)
  app/                 one folder per route (home, about, kap, …, legal, style)
  components/          SiteHeader, SiteFooter, Reveal, ui.tsx, CrisisResources…
  lib/site.ts          typed access to content/site.json + navigation.json
  lib/conditions.ts    evidence-strength → colour mapping only
public/
  admin/               Decap CMS: index.html, config.yml, preview.css
  images/              logo variants, portrait (see images/README.md)
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
