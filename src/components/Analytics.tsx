import Script from "next/script";

/**
 * Privacy-friendly analytics (Plausible) — cookieless, so no consent banner
 * is required. Renders only when NEXT_PUBLIC_PLAUSIBLE_DOMAIN is set in the
 * environment (e.g. in Netlify build settings), so local/dev builds stay clean.
 */
export default function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;

  return (
    <Script
      src="https://plausible.io/js/script.js"
      data-domain={domain}
      strategy="afterInteractive"
    />
  );
}
