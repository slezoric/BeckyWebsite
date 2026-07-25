import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/ui";
import Reveal from "@/components/Reveal";
import CrisisResources from "@/components/CrisisResources";
import { ButtonLink } from "@/components/ui";
import { site, formattedAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Consultation",
  description:
    "Reach out to request a no-pressure consultation about Ketamine-Assisted Psychotherapy with Becky. Please don't include private health details in this form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Request a consultation"
        intro="Reach out and we'll be in touch to schedule a no-pressure conversation. Every journey begins with a single, gentle step."
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
              <input type="hidden" name="form-name" defaultValue="consultation" />
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
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-base-2 px-4 py-3 text-cream placeholder:text-cream-dim focus:border-gold focus:outline-none"
                    placeholder="How should we address you?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-cream-muted"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-base-2 px-4 py-3 text-cream placeholder:text-cream-dim focus:border-gold focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm text-cream-muted"
                  >
                    Phone{" "}
                    <span className="text-cream-dim">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-base-2 px-4 py-3 text-cream placeholder:text-cream-dim focus:border-gold focus:outline-none"
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-cream-muted"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-base-2 px-4 py-3 text-cream placeholder:text-cream-dim focus:border-gold focus:outline-none"
                    placeholder="A sentence or two about what brings you here is plenty."
                  />
                </div>

                <p className="text-xs leading-relaxed text-cream-dim">
                  For your privacy, please don&rsquo;t include sensitive health
                  details or medical history in this form. We&rsquo;ll gather
                  anything we need securely once we connect.
                </p>

                <button
                  type="submit"
                  className="rounded-full bg-gold px-7 py-3.5 font-medium text-base-2 transition-[background-color,transform] duration-150 hover:bg-gold-light active:scale-[0.98]"
                >
                  Send request
                </button>
              </div>
            </form>
          </Reveal>

          {/* Sidebar: direct contact + crisis */}
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-3xl border border-white/5 bg-surface/40 p-6 sm:p-8">
                <h2 className="text-xl text-cream">Prefer to reach out directly?</h2>
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
                        href={site.phoneHref}
                        className="text-gold underline-offset-4 hover:underline"
                      >
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                </dl>
                {site.inPerson && formattedAddress && (
                  <div className="mt-4 text-sm">
                    <dt className="text-cream-dim">Location</dt>
                    <dd className="text-cream-muted">{formattedAddress}</dd>
                  </div>
                )}
                {site.serviceArea && (
                  <div className="mt-4 text-sm">
                    <dt className="text-cream-dim">Serving</dt>
                    <dd className="text-cream-muted">{site.serviceArea}</dd>
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
                    <ButtonLink href={site.bookingUrl}>Book online</ButtonLink>
                  </div>
                )}

                <p className="mt-5 text-xs text-cream-dim">
                  We typically respond {site.responseTime}.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <CrisisResources />
            </Reveal>
          </div>
        </div>
      </Container>
    </>
  );
}
