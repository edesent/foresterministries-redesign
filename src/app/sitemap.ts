import type { MetadataRoute } from "next";
import { SITE, ALL_PAGES } from "@/config/site";

const SITE_URL = SITE.url.replace(/\/$/, "");

const priorities: Record<string, number> = {
  "/": 1.0,
  "/store": 0.95,
  "/schedule": 0.9,
  "/contact": 0.9,
  "/about": 0.8,
  "/music": 0.8,
  "/puppets": 0.7,
  "/endorsements": 0.7,
  "/faq": 0.6,
  "/support": 0.6,
  "/beliefs": 0.5,
  "/promote": 0.4,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ALL_PAGES.map(({ href }) => ({
    url: href === "/" ? SITE_URL : `${SITE_URL}${href}`,
    lastModified,
    changeFrequency:
      href === "/" || href === "/schedule" ? "weekly" : "monthly",
    priority: priorities[href] ?? 0.5,
  }));
}
