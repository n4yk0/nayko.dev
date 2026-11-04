import { describe, expect, it } from "vitest"
import { locales } from "./i18n"
import { alternatesFor, pagePaths, sitemapEntries } from "./seo"

describe("alternatesFor", () => {
  it("builds canonical and hreflang links for the home page", () => {
    expect(alternatesFor("fr", "")).toEqual({
      canonical: "/fr",
      languages: { en: "/en", fr: "/fr", "x-default": "/" },
    })
  })

  it("keeps the sub-path for every language", () => {
    expect(alternatesFor("en", "/legal")).toEqual({
      canonical: "/en/legal",
      languages: { en: "/en/legal", fr: "/fr/legal", "x-default": "/legal" },
    })
  })
})

describe("sitemapEntries", () => {
  const entries = sitemapEntries("https://example.com")

  it("lists every page in every language", () => {
    expect(entries).toHaveLength(pagePaths.length * locales.length)
    expect(entries.map((entry) => entry.url)).toContain("https://example.com/fr/legal")
  })

  it("gives every entry absolute alternates for all languages", () => {
    for (const entry of entries) {
      expect(Object.keys(entry.alternates.languages).sort()).toEqual([...locales].sort())
      for (const url of Object.values(entry.alternates.languages)) expect(url).toMatch(/^https:\/\/example\.com\//)
    }
  })
})
