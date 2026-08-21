import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Web app manifest.
 *
 * Two reasons it is here. It is one of the places Google looks for a site's
 * icon when choosing what to show beside a search result — the favicon alone
 * was the only declared source before this. And it gives the site a proper
 * name and colours if anyone adds it to a phone home screen, which is not far
 * fetched for someone returning to the crisis numbers or the contact page.
 *
 * Colours match the palette in globals.css.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.discipline}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#241016",
    theme_color: "#241016",
    icons: [
      {
        src: "/images/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
