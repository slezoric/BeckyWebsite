# A World Within — Support for Non-Ordinary States of Consciousness

Website for **A World Within LLC** (tagline: *Extra-Ordinary Support*), the practice
of Becky J Schwanz, serving the Des Moines Metro Area. Warm, deep, unhurried —
built to earn trust and invite a consultation, not to sell.

Live at **https://aworldwithin1.com**

## Stack

- **Next.js 16** (App Router) exported as a fully static site (`output: 'export'`)
- **Tailwind CSS v4** — design tokens in `src/app/globals.css`
- **Netlify** hosting + **Netlify Forms** for the consultation request (no backend, no PHI collected)
- Google fonts via `next/font`: **Ephesis** (script headings) + **Mulish** (body)

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

> [!IMPORTANT]
> **The legal pages still need attorney review.** Disclaimer, Privacy, Terms and
> Informed Consent are drafts. That reminder used to be printed on the pages
> themselves, which meant visitors read "should be reviewed by legal counsel
> before the site goes live" — it now lives here instead.

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

## Brand assets — print, social, and the share card

```bash
python3 scripts/logo_tagline.py   # only if the tagline changes
python3 scripts/brand_assets.py
```

> The word "care" was deliberately removed from anything describing what this
> practice provides — it carries a meaning in a medical context the practice
> does not claim. It is kept where it refers to *other* people's services
> ("your healthcare professional", "psychiatric or therapeutic care"), because
> there it is protective disclaimer language, and where it plainly means
> *carefully* ("music chosen with care"). The tagline is drawn into the logo
> artwork, so `logo_tagline.py` rewrites it there; originals are preserved in
> `scripts/logo-originals/`.

Reads everything from `src/content/site.json` — name, tagline, phone, email,
service area, web address — so the assets never drift from the website. **Run it
again whenever one of those changes**, in particular after the email moves to
the new domain.

It produces:

| File | Size | For |
| --- | --- | --- |
| `public/images/og-image.png` | 1200 × 630 | the card shown when the site is shared anywhere |
| `brand-assets/business-card-{front,back}.png` | 3.5 × 2in, 300dpi | handing to someone after a conversation |
| `brand-assets/flyer-half-page.png` | 5.5 × 8.5in, 300dpi | noticeboard, waiting room, a referral partner's desk |
| `brand-assets/poster-full-page.png` | 8.5 × 11in, 300dpi | clinic wall or community board |
| `brand-assets/social-square.png` | 1080 × 1080 | Instagram and Facebook |

Every printed piece carries a QR code to the site. They are dark-on-cream —
never inverted, which some scanners refuse — and set to High error correction so
they still read when creased or shadowed. The script refuses to write a page
whose artwork reaches the trim edge, and refuses to shrink a QR below the point
where scanning gets unreliable, rather than producing something that fails only
once it is printed.

Fonts are bundled in `scripts/fonts/` (SIL Open Font Licence) so this keeps
working offline.

## ⚠️ Before launch — outstanding items

**Blocking**

- **Legal review** — Disclaimer, Privacy, Terms and Informed Consent are drafts
  and must be reviewed by Becky's attorney / malpractice carrier. Add the
  finalised signed-consent PDF.
- **Real phone number** — `phone` in `src/content/site.json` is still the
  placeholder `1234567890`. It appears on the contact page and in the structured
  data. Re-run `scripts/brand_assets.py` afterwards so the business card matches.
- **Email** — moving to the new domain. Update `email` in the same file, then
  re-run the asset script.
- **Netlify Forms notification** — Forms → Notifications, so submissions
  actually reach Becky. Send a real test through the deploy preview.
- **Decap admin login** — the CMS uses the GitHub backend, so the GitHub OAuth
  provider must be enabled in Netlify (Access control → OAuth). Confirm Becky
  can sign in at `/admin` before handover.

**Worth doing**

- **Credentials** — `credentials` and `practitionerTitle` in
  `src/content/site.json` are empty. Licence type, number and state are
  trust-critical for a healthcare provider and are required in advertising in
  many states.
- **Address** — empty while `inPerson` is true, so no address is emitted in the
  structured data and local search will not find her. Either fill it in, or say
  so and the schema can be switched to service-area-only.
- **Social links** — all blank in `site.json`; the footer row stays hidden until
  one is filled in.
- **Analytics** — set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` in Netlify to enable it.
  Cookieless, so no consent banner is needed. See `.env.example`.

## Safety notes baked in

- 988 crisis line is present sitewide (footer) and prominent on Contact /
  Getting Started — the site never dead-ends someone in crisis.
- The contact form deliberately collects **no health information** to stay out
  of HIPAA scope. Real intake should happen through Becky's HIPAA-compliant tool.
- Evidence strength for each condition is shown honestly.
- Motion respects `prefers-reduced-motion`; content stays visible without JS.
