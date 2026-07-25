import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/ui";
import Reveal from "@/components/Reveal";
import CrisisResources from "@/components/CrisisResources";
import { site } from "@/lib/site";

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
                  className="rounded-full bg-gold px-7 py-3 font-medium text-base-2 transition-colors hover:bg-gold-light"
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
                <p className="mt-5 text-xs text-cream-dim">
                  {/* TODO(becky): confirm real email, phone, response time,
                      and service location / telehealth states. */}
                  We typically respond within a couple of business days.
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
