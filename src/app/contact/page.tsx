import type { Metadata } from "next";
import { ButtonLink, Container, PageHeader } from "@/components/ui";
import Reveal from "@/components/Reveal";
import CrisisResources from "@/components/CrisisResources";
import { site, formattedAddress, phoneHref, formattedPhone } from "@/lib/site";
import content from "@/content/contact.json";

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

const field =
  "mt-2 w-full rounded-lg border border-white/10 bg-base-2 px-4 py-3 text-cream placeholder:text-cream-dim focus:border-gold focus:outline-none";

/** A skippable dropdown. All of these are optional by design — the form's job
 *  is to get someone nervous over the line, not to interview them. */
function SelectField({
  id,
  label,
  options,
  placeholder,
  className = "",
}: {
  id: string;
  label: string;
  options: string[];
  placeholder: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm text-cream-muted">
        {label}
      </label>
      <select id={id} name={id} defaultValue="" className={field}>
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow={content.eyebrow}
        title={content.heading}
        intro={content.intro}
      />

      <Container className="py-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <Reveal>
            <form
              name="consultation"
              method="POST"
              action="/contact/success/"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="rounded-3xl border border-white/5 bg-surface/40 p-6 sm:p-8"
            >
              {/* Netlify form plumbing */}
              <input
                type="hidden"
                name="form-name"
                defaultValue="consultation"
              />
              <p className="hidden">
                <label>
                  Don&rsquo;t fill this out if you&rsquo;re human:{" "}
                  <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-cream-muted"
                  >
                    {content.labelName}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className={field}
                    placeholder={content.placeholderName}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-cream-muted"
                  >
                    {content.labelEmail}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={field}
                    placeholder={content.placeholderEmail}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm text-cream-muted"
                  >
                    {content.labelPhone}{" "}
                    <span className="text-cream-dim">
                      {content.labelPhoneOptional}
                    </span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className={field}
                    placeholder={content.placeholderPhone}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-cream-muted"
                  >
                    {content.labelMessage}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={field}
                    placeholder={content.placeholderMessage}
                  />
                </div>

                {/* Optional questions, set apart and clearly skippable.
                    They help Becky prepare and show her which referrals
                    actually work — but none of them asks about health, which
                    is what keeps this form outside HIPAA's scope. Keep it
                    that way if you add more. */}
                <fieldset className="mt-2 border-t border-white/10 pt-6">
                  <legend className="sr-only">{content.optionalHeading}</legend>
                  <p className="text-cream">{content.optionalHeading}</p>
                  <p className="mt-1 text-sm text-cream-dim">
                    {content.optionalIntro}
                  </p>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <SelectField
                      id="interest"
                      label={content.labelInterest}
                      options={content.optionsInterest}
                      placeholder={content.selectPlaceholder}
                      className="sm:col-span-2"
                    />
                    <SelectField
                      id="heard-about"
                      label={content.labelHeardAbout}
                      options={content.optionsHeardAbout}
                      placeholder={content.selectPlaceholder}
                      className="sm:col-span-2"
                    />
                    <SelectField
                      id="contact-method"
                      label={content.labelContactMethod}
                      options={content.optionsContactMethod}
                      placeholder={content.selectPlaceholder}
                    />
                    <SelectField
                      id="best-time"
                      label={content.labelBestTime}
                      options={content.optionsBestTime}
                      placeholder={content.selectPlaceholder}
                    />
                    <SelectField
                      id="timeframe"
                      label={content.labelTimeframe}
                      options={content.optionsTimeframe}
                      placeholder={content.selectPlaceholder}
                      className="sm:col-span-2"
                    />
                  </div>
                </fieldset>

                <p className="text-sm leading-relaxed text-cream-muted">
                  {content.privacyNote}
                </p>

                <button
                  type="submit"
                  className="rounded-full bg-gold px-7 py-3.5 font-medium text-base-2 transition-[background-color,transform] duration-150 hover:bg-gold-light active:scale-[0.98]"
                >
                  {content.submitButton}
                </button>
              </div>
            </form>
          </Reveal>

          {/* Sidebar: direct contact + crisis */}
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-3xl border border-white/5 bg-surface/40 p-6 sm:p-8">
                <h2 className="text-3xl text-cream">
                  {content.sidebarHeading}
                </h2>
                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="text-cream-dim">Email</dt>
                    <dd>
                      <a
                        href={`mailto:${site.email}`}
                        className="text-gold underline-offset-4 hover:underline"
                      >
                        {site.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-cream-dim">Phone</dt>
                    <dd>
                      <a
                        href={phoneHref}
                        className="text-gold underline-offset-4 hover:underline"
                      >
                        {formattedPhone}
                      </a>
                    </dd>
                  </div>
                </dl>

                {site.inPerson && formattedAddress && (
                  <div className="mt-4 text-sm">
                    <p className="text-cream-dim">{content.labelLocation}</p>
                    <p className="text-cream-muted">{formattedAddress}</p>
                  </div>
                )}
                {site.serviceArea && (
                  <div className="mt-4 text-sm">
                    <p className="text-cream-dim">{content.labelServing}</p>
                    <p className="text-cream-muted">{site.serviceArea}</p>
                  </div>
                )}

                {site.hours.length > 0 && (
                  <dl className="mt-5 space-y-1 border-t border-white/5 pt-5 text-sm">
                    {site.hours.map((h) => (
                      <div
                        key={h.day}
                        className="flex justify-between gap-4 text-cream-muted"
                      >
                        <dt>{h.day}</dt>
                        <dd>{h.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                {site.bookingUrl && (
                  <div className="mt-6">
                    <ButtonLink href={site.bookingUrl}>
                      {content.bookingButton}
                    </ButtonLink>
                  </div>
                )}

                <p className="mt-5 text-sm text-cream-dim">
                  We typically respond {site.responseTime}.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <CrisisResources
                heading={content.crisisHeading}
                intro={content.crisisIntro}
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </>
  );
}
