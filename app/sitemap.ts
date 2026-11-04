import type { MetadataRoute } from "next"
import { sitemapEntries } from "@/lib/seo"
import { SITE_URL } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries(SITE_URL)
}
