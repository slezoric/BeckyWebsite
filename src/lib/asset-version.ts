import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * A short content hash for a file in public/, for cache-busting share images.
 *
 * ── Why this is needed ────────────────────────────────────────────────────
 * Link previews are cached by URL. Facebook, LinkedIn, WhatsApp and Apple's
 * preview service all scrape a page once and keep the image they found. When
 * the tagline changed from "Care" to "Support" the picture changed but its
 * address did not, so every one of them carried on showing the old wording —
 * and Apple's cache in particular has no way to purge it.
 *
 * Appending the file's own hash makes a changed image a changed URL, so the
 * next share is scraped fresh. Leave the image alone and the hash is stable,
 * so nothing is re-fetched needlessly.
 *
 * Runs at build time only. `output: 'export'` means metadata is evaluated in
 * Node while the site is generated, never in a browser.
 *
 * If the file is missing, this returns no version rather than failing the
 * build — a share card with a stale URL is a far smaller problem than a site
 * that will not deploy.
 */
export function assetVersion(publicPath: string): string {
  try {
    const bytes = readFileSync(join(process.cwd(), "public", publicPath));
    return createHash("sha256").update(bytes).digest("hex").slice(0, 8);
  } catch {
    return "";
  }
}

/** `/images/og-image.png?v=1a2b3c4d` — safe to use directly in metadata. */
export function versioned(publicPath: string): string {
  const v = assetVersion(publicPath);
  return v ? `${publicPath}?v=${v}` : publicPath;
}
