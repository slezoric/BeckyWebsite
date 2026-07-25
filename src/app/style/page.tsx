import type { Metadata } from "next";
import {
  Fraunces,
  Inter,
  Cormorant_Garamond,
  Mulish,
  Spectral,
  Public_Sans,
  Bad_Script,
  Nunito_Sans,
} from "next/font/google";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Design Options",
  description: "Font and color options for the A World Within website.",
  robots: { index: false, follow: false },
};

// --- Font pairing options -------------------------------------------------
const fraunces = Fraunces({ subsets: ["latin"], display: "swap" });
const inter = Inter({ subsets: ["latin"], display: "swap" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});
const mulish = Mulish({ subsets: ["latin"], display: "swap" });
const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
const publicSans = Public_Sans({ subsets: ["latin"], display: "swap" });
const badScript = Bad_Script({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
const nunitoSans = Nunito_Sans({ subsets: ["latin"], display: "swap" });

type FontOption = {
  id: string;
  name: string;
  vibe: string;
  heading: string;
  body: string;
  /** Optional distinct font for the "Extra-Ordinary Care" tagline accent. */
  tagline?: string;
  current?: boolean;
};

const fontOptions: FontOption[] = [
  {
    id: "A",
    name: "Fraunces + Inter",
    vibe: "Warm & editorial — the current direction. Soft, characterful serif with a clean, highly readable body.",
    heading: fraunces.style.fontFamily,
    body: inter.style.fontFamily,
    current: true,
  },
  {
    id: "B",
    name: "Cormorant + Mulish",
    vibe: "Elegant & airy. A refined, high-contrast serif that feels calm and premium, paired with a gentle sans.",
    heading: cormorant.style.fontFamily,
    body: mulish.style.fontFamily,
  },
  {
    id: "C",
    name: "Spectral + Public Sans",
    vibe: "Literary & grounded. A steady, book-like serif with a quiet, trustworthy body — feels considered and safe.",
    heading: spectral.style.fontFamily,
    body: publicSans.style.fontFamily,
  },
  {
    id: "D",
    name: "Bad Script + Nunito Sans",
    vibe: "Personal & hand-written. A warm, hand-lettered script — lovely for the name and the “Extra-Ordinary Care” tagline — paired with a soft, friendly sans that keeps everything easy to read. (Best used for the brand and short accents rather than long headings.)",
    heading: badScript.style.fontFamily,
    body: nunitoSans.style.fontFamily,
    tagline: badScript.style.fontFamily,
  },
];

// --- Color theme options --------------------------------------------------
const themes = [
  {
    id: "1",
    name: "Deep Forest & Amber",
    vibe: "The current direction — deep charcoal-green with warm amber. Grounded, calm, and inviting.",
    current: true,
    base: "#141a17",
    surface: "#22302a",
    primary: "#3a5a44",
    accent: "#d4a24e",
    text: "#f1e9dc",
    muted: "#c9bea9",
  },
  {
    id: "2",
    name: "Warm Clay & Sage",
    vibe: "Softer and earthier. A warm brown-black base with terracotta and sage — feels cozy and human.",
    base: "#1b1613",
    surface: "#2c231d",
    primary: "#a5654e",
    accent: "#d9a066",
    text: "#f0e7db",
    muted: "#cbb9a6",
  },
  {
    id: "3",
    name: "Midnight Moss & Gold",
    vibe: "Deeper and quieter. A near-black cool green with a brighter gold — more nighttime, more serene.",
    base: "#0f1311",
    surface: "#1a221d",
    primary: "#4a6b52",
    accent: "#e0b95f",
    text: "#eef0e9",
    muted: "#b9c2b4",
  },
];

function Swatch({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span
        className="h-10 w-10 rounded-full border border-white/10"
        style={{ backgroundColor: color }}
      />
      <span className="text-[0.65rem] text-cream-dim">{label}</span>
    </div>
  );
}

export default function StylePage() {
  return (
    <>
      <Container className="pb-4 pt-20 sm:pt-24">
        <p className="text-sm uppercase tracking-widest text-sage">
          For your review
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl text-cream sm:text-5xl">
          Choose the look &amp; feel
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-cream-muted">
          Here are a few directions for the website&rsquo;s fonts and colors.
          Take a look, then just tell us which font option (A, B, C, or D) and
          which color option (1, 2, or 3) feel most like <em>you</em>. Mixing is
          welcome — e.g. &ldquo;Font B with Colors 1.&rdquo;
        </p>
      </Container>

      {/* Typography */}
      <Container className="py-14">
        <h2 className="text-2xl text-cream sm:text-3xl">Typography</h2>
        <p className="mt-3 max-w-2xl text-cream-muted">
          The same words, set three ways. Notice how each one <em>feels</em>.
        </p>

        <div className="mt-10 space-y-6">
          {fontOptions.map((f) => (
            <div
              key={f.id}
              className="rounded-3xl border border-white/5 bg-surface/40 p-6 sm:p-10"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-gold px-3 py-1 text-sm font-medium text-base-2">
                  Font {f.id}
                </span>
                <span className="text-cream">{f.name}</span>
                {f.current && (
                  <span className="rounded-full border border-sage/40 px-3 py-1 text-xs text-sage">
                    Current
                  </span>
                )}
              </div>
              <p className="mt-3 max-w-2xl text-sm text-cream-muted">{f.vibe}</p>

              <div className="mt-8 border-t border-white/5 pt-8">
                <p
                  className="text-sm tracking-wide text-sage"
                  style={{ fontFamily: f.tagline ?? f.body }}
                >
                  Extra-Ordinary Care
                </p>
                <p
                  className="mt-3 text-4xl text-cream sm:text-5xl"
                  style={{ fontFamily: f.heading }}
                >
                  Healing is not linear.
                </p>
                <p
                  className="mt-5 max-w-2xl text-cream-muted"
                  style={{ fontFamily: f.body }}
                >
                  A warm, grounded, non-judgmental space to work with depression,
                  anxiety, and trauma — meeting you exactly where you are, and
                  guiding you every step of the way.
                </p>
                <span
                  className="mt-6 inline-block rounded-full bg-gold px-6 py-2.5 font-medium text-base-2"
                  style={{ fontFamily: f.body }}
                >
                  Request a Consultation
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Color */}
      <Container className="py-14">
        <h2 className="text-2xl text-cream sm:text-3xl">Color</h2>
        <p className="mt-3 max-w-2xl text-cream-muted">
          Three warm, nature-based palettes — all deep and calming, each with a
          slightly different mood.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {themes.map((t) => (
            <div
              key={t.id}
              className="overflow-hidden rounded-3xl border border-white/10"
              style={{ backgroundColor: t.base }}
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="rounded-full px-3 py-1 text-sm font-medium"
                    style={{ backgroundColor: t.accent, color: t.base }}
                  >
                    Colors {t.id}
                  </span>
                  {t.current && (
                    <span
                      className="rounded-full border px-3 py-1 text-xs"
                      style={{ borderColor: t.muted, color: t.muted }}
                    >
                      Current
                    </span>
                  )}
                </div>

                {/* Mini preview using the palette */}
                <p
                  className="mt-6 text-xs italic tracking-wide"
                  style={{ color: t.accent }}
                >
                  Extra-Ordinary Care
                </p>
                <p
                  className="mt-2 font-serif text-2xl"
                  style={{ color: t.text }}
                >
                  A World Within
                </p>
                <p className="mt-3 text-sm" style={{ color: t.muted }}>
                  A safe, grounded space for healing and growth.
                </p>
                <div
                  className="mt-5 rounded-xl p-4"
                  style={{ backgroundColor: t.surface }}
                >
                  <p className="text-sm" style={{ color: t.text }}>
                    Depression &amp; anxiety
                  </p>
                  <p className="mt-1 text-xs" style={{ color: t.muted }}>
                    Rapid, evidence-based support.
                  </p>
                </div>
                <span
                  className="mt-5 inline-block rounded-full px-5 py-2 text-sm font-medium"
                  style={{ backgroundColor: t.accent, color: t.base }}
                >
                  Request a Consultation
                </span>

                {/* Swatches */}
                <div className="mt-7 flex flex-wrap gap-4 border-t border-white/10 pt-6">
                  <Swatch color={t.base} label="Base" />
                  <Swatch color={t.surface} label="Surface" />
                  <Swatch color={t.primary} label="Green" />
                  <Swatch color={t.accent} label="Accent" />
                  <Swatch color={t.text} label="Text" />
                </div>
              </div>
              <div className="px-6 pb-6 sm:px-8">
                <p className="text-sm" style={{ color: t.muted }}>
                  {t.vibe}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container className="py-16">
        <div className="rounded-3xl border border-white/5 bg-surface/40 p-8 text-center sm:p-12">
          <h2 className="text-2xl text-cream sm:text-3xl">
            Which speaks to you?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-cream-muted">
            Reply with your favorite font (A, B, C, or D) and color (1, 2, or 3).
            We&rsquo;ll set it across the whole site. Not sure? Tell us how you
            want it to <em>feel</em> and we&rsquo;ll recommend one.
          </p>
        </div>
      </Container>
    </>
  );
}
