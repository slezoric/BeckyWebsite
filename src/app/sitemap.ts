import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const paths = [
  "/",
  "/about/",
  "/kap/",
  "/what-we-treat/",
  "/process/",
  "/getting-started/",
  "/faq/",
  "/contact/",
  "/informed-consent/",
  "/disclaimer/",
  "/privacy/",
  "/terms/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: new URL(path, site.url).toString(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
